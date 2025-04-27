'use client'

import { Userdetails } from "@/lib/queries";
import React from "react";

type Props = {};

const CreateUser =  (props: Props) => {

  const handleClick =async () => {
  const userd = await Userdetails()
  console.log(userd)
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-3">
      
      <h2>userD</h2>
     <div onClick={handleClick}>Click</div>
    </div>
  );
};

export default CreateUser
