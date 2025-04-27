"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";
import { redirect } from "next/navigation";

export const Userdetails = async () => {
  const user = await currentUser();

  if (!user) {
    console.log("user not found");
  }

  const userCreate = await db.user.create({
    data: {
      userId: user?.id || "",
      email: user?.emailAddresses[0].emailAddress || "ashhar@gmail.com",
      name: user?.username || "ashhar",
    },
  });

  return userCreate;
};

export const getUser = async (userId: string) => {
  if (!userId) {
    return redirect("/Login");
  }

  const Getuser = await db.user.findUnique({
    where: {
      id: "user_2vgHeWYliGes8oeutB5HGHo9W0k",
    },
  });
  return Getuser;
};

// ShareSnippet Stuff

export const createSnippet = async ({
  title,
  language,
  code,
}: {
  title: string;
  language: string;
  code: string;
}) => {
  const user = await currentUser();
  if (!user) {
    return redirect("/Login");
  }
  const snippet = await db.snippet.create({
    data: {
      title,
      language,
      code,
      userId: user?.id || "",
      userName: user?.username || "",
    },
  });
  return snippet;
};


// Execution code

export const saveExecution = async ({
  userId,
  language,
  code,
  output,
  error,
}: {
  userId: string;
  language: string;
  code: string;
  output: string;
  error: string;
}) => {
  if (!userId) {
    return redirect("/sing-in");
  }
  const execution = await db.codeExecution.create({
    data: {
      language,
      code,
      output,
      error,
      userId: userId || "",
    },
  });
  return execution;
};

export const getExecutionResult = async (
  userId: string,
  skip = 0,
  take = 10
) => {
  const getExecution = await db.codeExecution.findMany({
    where: {
      userId: userId || "",
    },
    take,
    skip,
    orderBy: {
      createdAt: "desc",
    },
  });
  const total = await db.codeExecution.count({
    where: { userId },
  });

  return {
    getExecution,
    total,
    hasMore: skip + take < total,
  };
};


//userStats 

async function getUserStats(userId: string) {
    const executions = await db.codeExecution.findMany({
      where: { userId },
    });
  
    const starredSnippets = await db.star.findMany({
      where: { userId },
      include: { snippet: true },
    });
  
    const languageStats = executions.reduce((acc, exec) => {
      acc[exec.language] = (acc[exec.language] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  
    const languages = Object.keys(languageStats);
  
    const favoriteLanguage = languages.length
      ? languages.reduce((a, b) => (languageStats[a] > languageStats[b] ? a : b))
      : "N/A";
  
    const last24HoursCount = executions.filter(
      (e) => e.createdAt > new Date(Date.now() - 24 * 60 * 60 * 1000)
    ).length;
  
    const starredLanguages = starredSnippets.reduce((acc, star) => {
      const lang = star.snippet?.language;
      if (lang) acc[lang] = (acc[lang] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  
    const mostStarredLanguage =
      Object.entries(starredLanguages).sort(([, a], [, b]) => b - a)[0]?.[0] ?? "N/A";
  
    return {
      totalExecutions: executions.length,
      languagesCount: languages.length,
      languages,
      last24Hours: last24HoursCount,
      favoriteLanguage,
      languageStats,
      mostStarredLanguage,
    };
  }
  

  // Snippet 

  export const deleteSnippet = async (userId: string, snippetId: string) => {
    const snippet = await db.snippet.findUnique({ where: { id: snippetId } });
    if (!snippet || snippet.userId !== userId) {
      throw new Error("Not authorized");
    }
  
    await db.snippetComment.deleteMany({ where: { snippetId } });
    await db.star.deleteMany({ where: { snippetId } });
    await db.snippet.delete({ where: { id: snippetId } });
  };
  

  export const toggleStar = async (userId: string, snippetId: string) => {
    const existing = await db.star.findUnique({
      where: {
        userId_snippetId: { userId, snippetId }, // composite unique constraint
      },
    });
  
    if (existing) {
      await db.star.delete({ where: { id: existing.id } });
    } else {
      await db.star.create({
        data: { userId, snippetId },
      });
    }
  };
  

  // add comment 

  export  const addComment = async (userId: string, snippetId: string, content: string) => {
const user = await db.user.findUnique({
  where: {
    id: userId,
  },
})

    return await db.snippetComment.create({
      data: {
        snippetId,
        userId,
        content,
        userName:user?.name ||''
      },
    });
  };
  

  // delete comment 

 export  const deleteComment = async (userId: string, commentId: string) => {
    const comment = await db.snippetComment.findUnique({ where: { id: commentId } });
  
    if (!comment || comment.userId !== userId) {
      throw new Error("Not authorized");
    }
  
    await db.snippetComment.delete({ where: { id: commentId } });
  };
  

  // get Snippet 

 export const getSnippets = async () => {
    return await db.snippet.findMany({
      orderBy: { createdAt: "desc" },
    });
  };
  

  // get snippet by Id 

  export const getSnippetById = async (snippetId: string) => {
    const snippet = await db.snippet.findUnique({ where: { id: snippetId } });
    if (!snippet) throw new Error("Snippet not found");
    return snippet;
  };
  

  // get comments 

 export  const getComments = async (snippetId: string) => {
    return await db.snippetComment.findMany({
      where: { snippetId },
      orderBy: { createdAt: "desc" },
    });
  };
  

 export  const isSnippetStarred = async (userId: string, snippetId: string) => {
    const star = await db.star.findUnique({
      where: {
        userId_snippetId: { userId, snippetId },
      },
    });
    return !!star;
  };
  

 export  const getSnippetStarCount = async (snippetId: string) => {
    return await db.star.count({
      where: { snippetId },
    });
  };
  

  export const getStarredSnippets = async (userId: string) => {
    const stars = await db.star.findMany({
      where: { userId },
      include: { snippet: true },
    });
  
    return stars.map((s) => s.snippet);
  };
  
  