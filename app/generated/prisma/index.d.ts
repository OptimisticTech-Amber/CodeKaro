
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CodeExecutions
 * 
 */
export type CodeExecutions = $Result.DefaultSelection<Prisma.$CodeExecutionsPayload>
/**
 * Model Snippets
 * 
 */
export type Snippets = $Result.DefaultSelection<Prisma.$SnippetsPayload>
/**
 * Model SnippetComments
 * 
 */
export type SnippetComments = $Result.DefaultSelection<Prisma.$SnippetCommentsPayload>
/**
 * Model Stars
 * 
 */
export type Stars = $Result.DefaultSelection<Prisma.$StarsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codeExecutions`: Exposes CRUD operations for the **CodeExecutions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeExecutions
    * const codeExecutions = await prisma.codeExecutions.findMany()
    * ```
    */
  get codeExecutions(): Prisma.CodeExecutionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.snippets`: Exposes CRUD operations for the **Snippets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Snippets
    * const snippets = await prisma.snippets.findMany()
    * ```
    */
  get snippets(): Prisma.SnippetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.snippetComments`: Exposes CRUD operations for the **SnippetComments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SnippetComments
    * const snippetComments = await prisma.snippetComments.findMany()
    * ```
    */
  get snippetComments(): Prisma.SnippetCommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stars`: Exposes CRUD operations for the **Stars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stars
    * const stars = await prisma.stars.findMany()
    * ```
    */
  get stars(): Prisma.StarsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CodeExecutions: 'CodeExecutions',
    Snippets: 'Snippets',
    SnippetComments: 'SnippetComments',
    Stars: 'Stars'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "codeExecutions" | "snippets" | "snippetComments" | "stars"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CodeExecutions: {
        payload: Prisma.$CodeExecutionsPayload<ExtArgs>
        fields: Prisma.CodeExecutionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeExecutionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExecutionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeExecutionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExecutionsPayload>
          }
          findFirst: {
            args: Prisma.CodeExecutionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExecutionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeExecutionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExecutionsPayload>
          }
          findMany: {
            args: Prisma.CodeExecutionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExecutionsPayload>[]
          }
          create: {
            args: Prisma.CodeExecutionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExecutionsPayload>
          }
          createMany: {
            args: Prisma.CodeExecutionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodeExecutionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExecutionsPayload>[]
          }
          delete: {
            args: Prisma.CodeExecutionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExecutionsPayload>
          }
          update: {
            args: Prisma.CodeExecutionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExecutionsPayload>
          }
          deleteMany: {
            args: Prisma.CodeExecutionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeExecutionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodeExecutionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExecutionsPayload>[]
          }
          upsert: {
            args: Prisma.CodeExecutionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExecutionsPayload>
          }
          aggregate: {
            args: Prisma.CodeExecutionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodeExecutions>
          }
          groupBy: {
            args: Prisma.CodeExecutionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeExecutionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeExecutionsCountArgs<ExtArgs>
            result: $Utils.Optional<CodeExecutionsCountAggregateOutputType> | number
          }
        }
      }
      Snippets: {
        payload: Prisma.$SnippetsPayload<ExtArgs>
        fields: Prisma.SnippetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SnippetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SnippetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetsPayload>
          }
          findFirst: {
            args: Prisma.SnippetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SnippetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetsPayload>
          }
          findMany: {
            args: Prisma.SnippetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetsPayload>[]
          }
          create: {
            args: Prisma.SnippetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetsPayload>
          }
          createMany: {
            args: Prisma.SnippetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SnippetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetsPayload>[]
          }
          delete: {
            args: Prisma.SnippetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetsPayload>
          }
          update: {
            args: Prisma.SnippetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetsPayload>
          }
          deleteMany: {
            args: Prisma.SnippetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SnippetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SnippetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetsPayload>[]
          }
          upsert: {
            args: Prisma.SnippetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetsPayload>
          }
          aggregate: {
            args: Prisma.SnippetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSnippets>
          }
          groupBy: {
            args: Prisma.SnippetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SnippetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SnippetsCountArgs<ExtArgs>
            result: $Utils.Optional<SnippetsCountAggregateOutputType> | number
          }
        }
      }
      SnippetComments: {
        payload: Prisma.$SnippetCommentsPayload<ExtArgs>
        fields: Prisma.SnippetCommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SnippetCommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetCommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SnippetCommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetCommentsPayload>
          }
          findFirst: {
            args: Prisma.SnippetCommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetCommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SnippetCommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetCommentsPayload>
          }
          findMany: {
            args: Prisma.SnippetCommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetCommentsPayload>[]
          }
          create: {
            args: Prisma.SnippetCommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetCommentsPayload>
          }
          createMany: {
            args: Prisma.SnippetCommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SnippetCommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetCommentsPayload>[]
          }
          delete: {
            args: Prisma.SnippetCommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetCommentsPayload>
          }
          update: {
            args: Prisma.SnippetCommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetCommentsPayload>
          }
          deleteMany: {
            args: Prisma.SnippetCommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SnippetCommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SnippetCommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetCommentsPayload>[]
          }
          upsert: {
            args: Prisma.SnippetCommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnippetCommentsPayload>
          }
          aggregate: {
            args: Prisma.SnippetCommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSnippetComments>
          }
          groupBy: {
            args: Prisma.SnippetCommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SnippetCommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SnippetCommentsCountArgs<ExtArgs>
            result: $Utils.Optional<SnippetCommentsCountAggregateOutputType> | number
          }
        }
      }
      Stars: {
        payload: Prisma.$StarsPayload<ExtArgs>
        fields: Prisma.StarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          findFirst: {
            args: Prisma.StarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          findMany: {
            args: Prisma.StarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>[]
          }
          create: {
            args: Prisma.StarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          createMany: {
            args: Prisma.StarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>[]
          }
          delete: {
            args: Prisma.StarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          update: {
            args: Prisma.StarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          deleteMany: {
            args: Prisma.StarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>[]
          }
          upsert: {
            args: Prisma.StarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          aggregate: {
            args: Prisma.StarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStars>
          }
          groupBy: {
            args: Prisma.StarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StarsCountArgs<ExtArgs>
            result: $Utils.Optional<StarsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    codeExecutions?: CodeExecutionsOmit
    snippets?: SnippetsOmit
    snippetComments?: SnippetCommentsOmit
    stars?: StarsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    codeExecutions: number
    snippetComments: number
    stars: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codeExecutions?: boolean | UserCountOutputTypeCountCodeExecutionsArgs
    snippetComments?: boolean | UserCountOutputTypeCountSnippetCommentsArgs
    stars?: boolean | UserCountOutputTypeCountStarsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCodeExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeExecutionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSnippetCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnippetCommentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarsWhereInput
  }


  /**
   * Count Type SnippetsCountOutputType
   */

  export type SnippetsCountOutputType = {
    stars: number
    snippetComments: number
  }

  export type SnippetsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stars?: boolean | SnippetsCountOutputTypeCountStarsArgs
    snippetComments?: boolean | SnippetsCountOutputTypeCountSnippetCommentsArgs
  }

  // Custom InputTypes
  /**
   * SnippetsCountOutputType without action
   */
  export type SnippetsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetsCountOutputType
     */
    select?: SnippetsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SnippetsCountOutputType without action
   */
  export type SnippetsCountOutputTypeCountStarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarsWhereInput
  }

  /**
   * SnippetsCountOutputType without action
   */
  export type SnippetsCountOutputTypeCountSnippetCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnippetCommentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    isPro: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    isPro: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    isPro: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isPro?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isPro?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isPro?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    isPro: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    isPro?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    codeExecutions?: boolean | User$codeExecutionsArgs<ExtArgs>
    snippetComments?: boolean | User$snippetCommentsArgs<ExtArgs>
    stars?: boolean | User$starsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    isPro?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    isPro?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    isPro?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "isPro" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codeExecutions?: boolean | User$codeExecutionsArgs<ExtArgs>
    snippetComments?: boolean | User$snippetCommentsArgs<ExtArgs>
    stars?: boolean | User$starsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      codeExecutions: Prisma.$CodeExecutionsPayload<ExtArgs>[]
      snippetComments: Prisma.$SnippetCommentsPayload<ExtArgs>[]
      stars: Prisma.$StarsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      isPro: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    codeExecutions<T extends User$codeExecutionsArgs<ExtArgs> = {}>(args?: Subset<T, User$codeExecutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeExecutionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    snippetComments<T extends User$snippetCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$snippetCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnippetCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stars<T extends User$starsArgs<ExtArgs> = {}>(args?: Subset<T, User$starsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly isPro: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.codeExecutions
   */
  export type User$codeExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExecutions
     */
    select?: CodeExecutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExecutions
     */
    omit?: CodeExecutionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeExecutionsInclude<ExtArgs> | null
    where?: CodeExecutionsWhereInput
    orderBy?: CodeExecutionsOrderByWithRelationInput | CodeExecutionsOrderByWithRelationInput[]
    cursor?: CodeExecutionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CodeExecutionsScalarFieldEnum | CodeExecutionsScalarFieldEnum[]
  }

  /**
   * User.snippetComments
   */
  export type User$snippetCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetComments
     */
    select?: SnippetCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnippetComments
     */
    omit?: SnippetCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetCommentsInclude<ExtArgs> | null
    where?: SnippetCommentsWhereInput
    orderBy?: SnippetCommentsOrderByWithRelationInput | SnippetCommentsOrderByWithRelationInput[]
    cursor?: SnippetCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SnippetCommentsScalarFieldEnum | SnippetCommentsScalarFieldEnum[]
  }

  /**
   * User.stars
   */
  export type User$starsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    where?: StarsWhereInput
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    cursor?: StarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StarsScalarFieldEnum | StarsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CodeExecutions
   */

  export type AggregateCodeExecutions = {
    _count: CodeExecutionsCountAggregateOutputType | null
    _min: CodeExecutionsMinAggregateOutputType | null
    _max: CodeExecutionsMaxAggregateOutputType | null
  }

  export type CodeExecutionsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    language: string | null
    code: string | null
    output: string | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CodeExecutionsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    language: string | null
    code: string | null
    output: string | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CodeExecutionsCountAggregateOutputType = {
    id: number
    userId: number
    language: number
    code: number
    output: number
    error: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CodeExecutionsMinAggregateInputType = {
    id?: true
    userId?: true
    language?: true
    code?: true
    output?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CodeExecutionsMaxAggregateInputType = {
    id?: true
    userId?: true
    language?: true
    code?: true
    output?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CodeExecutionsCountAggregateInputType = {
    id?: true
    userId?: true
    language?: true
    code?: true
    output?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CodeExecutionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeExecutions to aggregate.
     */
    where?: CodeExecutionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeExecutions to fetch.
     */
    orderBy?: CodeExecutionsOrderByWithRelationInput | CodeExecutionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeExecutionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeExecutions
    **/
    _count?: true | CodeExecutionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeExecutionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeExecutionsMaxAggregateInputType
  }

  export type GetCodeExecutionsAggregateType<T extends CodeExecutionsAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeExecutions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeExecutions[P]>
      : GetScalarType<T[P], AggregateCodeExecutions[P]>
  }




  export type CodeExecutionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeExecutionsWhereInput
    orderBy?: CodeExecutionsOrderByWithAggregationInput | CodeExecutionsOrderByWithAggregationInput[]
    by: CodeExecutionsScalarFieldEnum[] | CodeExecutionsScalarFieldEnum
    having?: CodeExecutionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeExecutionsCountAggregateInputType | true
    _min?: CodeExecutionsMinAggregateInputType
    _max?: CodeExecutionsMaxAggregateInputType
  }

  export type CodeExecutionsGroupByOutputType = {
    id: string
    userId: string
    language: string
    code: string | null
    output: string | null
    error: string | null
    createdAt: Date
    updatedAt: Date
    _count: CodeExecutionsCountAggregateOutputType | null
    _min: CodeExecutionsMinAggregateOutputType | null
    _max: CodeExecutionsMaxAggregateOutputType | null
  }

  type GetCodeExecutionsGroupByPayload<T extends CodeExecutionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeExecutionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeExecutionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeExecutionsGroupByOutputType[P]>
            : GetScalarType<T[P], CodeExecutionsGroupByOutputType[P]>
        }
      >
    >


  export type CodeExecutionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    language?: boolean
    code?: boolean
    output?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codeExecutions"]>

  export type CodeExecutionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    language?: boolean
    code?: boolean
    output?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codeExecutions"]>

  export type CodeExecutionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    language?: boolean
    code?: boolean
    output?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codeExecutions"]>

  export type CodeExecutionsSelectScalar = {
    id?: boolean
    userId?: boolean
    language?: boolean
    code?: boolean
    output?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CodeExecutionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "language" | "code" | "output" | "error" | "createdAt" | "updatedAt", ExtArgs["result"]["codeExecutions"]>
  export type CodeExecutionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CodeExecutionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CodeExecutionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CodeExecutionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodeExecutions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      language: string
      code: string | null
      output: string | null
      error: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["codeExecutions"]>
    composites: {}
  }

  type CodeExecutionsGetPayload<S extends boolean | null | undefined | CodeExecutionsDefaultArgs> = $Result.GetResult<Prisma.$CodeExecutionsPayload, S>

  type CodeExecutionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeExecutionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeExecutionsCountAggregateInputType | true
    }

  export interface CodeExecutionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodeExecutions'], meta: { name: 'CodeExecutions' } }
    /**
     * Find zero or one CodeExecutions that matches the filter.
     * @param {CodeExecutionsFindUniqueArgs} args - Arguments to find a CodeExecutions
     * @example
     * // Get one CodeExecutions
     * const codeExecutions = await prisma.codeExecutions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeExecutionsFindUniqueArgs>(args: SelectSubset<T, CodeExecutionsFindUniqueArgs<ExtArgs>>): Prisma__CodeExecutionsClient<$Result.GetResult<Prisma.$CodeExecutionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CodeExecutions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeExecutionsFindUniqueOrThrowArgs} args - Arguments to find a CodeExecutions
     * @example
     * // Get one CodeExecutions
     * const codeExecutions = await prisma.codeExecutions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeExecutionsFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeExecutionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeExecutionsClient<$Result.GetResult<Prisma.$CodeExecutionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeExecutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeExecutionsFindFirstArgs} args - Arguments to find a CodeExecutions
     * @example
     * // Get one CodeExecutions
     * const codeExecutions = await prisma.codeExecutions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeExecutionsFindFirstArgs>(args?: SelectSubset<T, CodeExecutionsFindFirstArgs<ExtArgs>>): Prisma__CodeExecutionsClient<$Result.GetResult<Prisma.$CodeExecutionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeExecutions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeExecutionsFindFirstOrThrowArgs} args - Arguments to find a CodeExecutions
     * @example
     * // Get one CodeExecutions
     * const codeExecutions = await prisma.codeExecutions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeExecutionsFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeExecutionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeExecutionsClient<$Result.GetResult<Prisma.$CodeExecutionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodeExecutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeExecutionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeExecutions
     * const codeExecutions = await prisma.codeExecutions.findMany()
     * 
     * // Get first 10 CodeExecutions
     * const codeExecutions = await prisma.codeExecutions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeExecutionsWithIdOnly = await prisma.codeExecutions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeExecutionsFindManyArgs>(args?: SelectSubset<T, CodeExecutionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeExecutionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CodeExecutions.
     * @param {CodeExecutionsCreateArgs} args - Arguments to create a CodeExecutions.
     * @example
     * // Create one CodeExecutions
     * const CodeExecutions = await prisma.codeExecutions.create({
     *   data: {
     *     // ... data to create a CodeExecutions
     *   }
     * })
     * 
     */
    create<T extends CodeExecutionsCreateArgs>(args: SelectSubset<T, CodeExecutionsCreateArgs<ExtArgs>>): Prisma__CodeExecutionsClient<$Result.GetResult<Prisma.$CodeExecutionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CodeExecutions.
     * @param {CodeExecutionsCreateManyArgs} args - Arguments to create many CodeExecutions.
     * @example
     * // Create many CodeExecutions
     * const codeExecutions = await prisma.codeExecutions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeExecutionsCreateManyArgs>(args?: SelectSubset<T, CodeExecutionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodeExecutions and returns the data saved in the database.
     * @param {CodeExecutionsCreateManyAndReturnArgs} args - Arguments to create many CodeExecutions.
     * @example
     * // Create many CodeExecutions
     * const codeExecutions = await prisma.codeExecutions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodeExecutions and only return the `id`
     * const codeExecutionsWithIdOnly = await prisma.codeExecutions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodeExecutionsCreateManyAndReturnArgs>(args?: SelectSubset<T, CodeExecutionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeExecutionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CodeExecutions.
     * @param {CodeExecutionsDeleteArgs} args - Arguments to delete one CodeExecutions.
     * @example
     * // Delete one CodeExecutions
     * const CodeExecutions = await prisma.codeExecutions.delete({
     *   where: {
     *     // ... filter to delete one CodeExecutions
     *   }
     * })
     * 
     */
    delete<T extends CodeExecutionsDeleteArgs>(args: SelectSubset<T, CodeExecutionsDeleteArgs<ExtArgs>>): Prisma__CodeExecutionsClient<$Result.GetResult<Prisma.$CodeExecutionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CodeExecutions.
     * @param {CodeExecutionsUpdateArgs} args - Arguments to update one CodeExecutions.
     * @example
     * // Update one CodeExecutions
     * const codeExecutions = await prisma.codeExecutions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeExecutionsUpdateArgs>(args: SelectSubset<T, CodeExecutionsUpdateArgs<ExtArgs>>): Prisma__CodeExecutionsClient<$Result.GetResult<Prisma.$CodeExecutionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CodeExecutions.
     * @param {CodeExecutionsDeleteManyArgs} args - Arguments to filter CodeExecutions to delete.
     * @example
     * // Delete a few CodeExecutions
     * const { count } = await prisma.codeExecutions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeExecutionsDeleteManyArgs>(args?: SelectSubset<T, CodeExecutionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeExecutionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeExecutions
     * const codeExecutions = await prisma.codeExecutions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeExecutionsUpdateManyArgs>(args: SelectSubset<T, CodeExecutionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeExecutions and returns the data updated in the database.
     * @param {CodeExecutionsUpdateManyAndReturnArgs} args - Arguments to update many CodeExecutions.
     * @example
     * // Update many CodeExecutions
     * const codeExecutions = await prisma.codeExecutions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CodeExecutions and only return the `id`
     * const codeExecutionsWithIdOnly = await prisma.codeExecutions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CodeExecutionsUpdateManyAndReturnArgs>(args: SelectSubset<T, CodeExecutionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeExecutionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CodeExecutions.
     * @param {CodeExecutionsUpsertArgs} args - Arguments to update or create a CodeExecutions.
     * @example
     * // Update or create a CodeExecutions
     * const codeExecutions = await prisma.codeExecutions.upsert({
     *   create: {
     *     // ... data to create a CodeExecutions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeExecutions we want to update
     *   }
     * })
     */
    upsert<T extends CodeExecutionsUpsertArgs>(args: SelectSubset<T, CodeExecutionsUpsertArgs<ExtArgs>>): Prisma__CodeExecutionsClient<$Result.GetResult<Prisma.$CodeExecutionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CodeExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeExecutionsCountArgs} args - Arguments to filter CodeExecutions to count.
     * @example
     * // Count the number of CodeExecutions
     * const count = await prisma.codeExecutions.count({
     *   where: {
     *     // ... the filter for the CodeExecutions we want to count
     *   }
     * })
    **/
    count<T extends CodeExecutionsCountArgs>(
      args?: Subset<T, CodeExecutionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeExecutionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeExecutionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CodeExecutionsAggregateArgs>(args: Subset<T, CodeExecutionsAggregateArgs>): Prisma.PrismaPromise<GetCodeExecutionsAggregateType<T>>

    /**
     * Group by CodeExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeExecutionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CodeExecutionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeExecutionsGroupByArgs['orderBy'] }
        : { orderBy?: CodeExecutionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CodeExecutionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeExecutionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodeExecutions model
   */
  readonly fields: CodeExecutionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeExecutions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeExecutionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CodeExecutions model
   */
  interface CodeExecutionsFieldRefs {
    readonly id: FieldRef<"CodeExecutions", 'String'>
    readonly userId: FieldRef<"CodeExecutions", 'String'>
    readonly language: FieldRef<"CodeExecutions", 'String'>
    readonly code: FieldRef<"CodeExecutions", 'String'>
    readonly output: FieldRef<"CodeExecutions", 'String'>
    readonly error: FieldRef<"CodeExecutions", 'String'>
    readonly createdAt: FieldRef<"CodeExecutions", 'DateTime'>
    readonly updatedAt: FieldRef<"CodeExecutions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CodeExecutions findUnique
   */
  export type CodeExecutionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExecutions
     */
    select?: CodeExecutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExecutions
     */
    omit?: CodeExecutionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeExecutionsInclude<ExtArgs> | null
    /**
     * Filter, which CodeExecutions to fetch.
     */
    where: CodeExecutionsWhereUniqueInput
  }

  /**
   * CodeExecutions findUniqueOrThrow
   */
  export type CodeExecutionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExecutions
     */
    select?: CodeExecutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExecutions
     */
    omit?: CodeExecutionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeExecutionsInclude<ExtArgs> | null
    /**
     * Filter, which CodeExecutions to fetch.
     */
    where: CodeExecutionsWhereUniqueInput
  }

  /**
   * CodeExecutions findFirst
   */
  export type CodeExecutionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExecutions
     */
    select?: CodeExecutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExecutions
     */
    omit?: CodeExecutionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeExecutionsInclude<ExtArgs> | null
    /**
     * Filter, which CodeExecutions to fetch.
     */
    where?: CodeExecutionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeExecutions to fetch.
     */
    orderBy?: CodeExecutionsOrderByWithRelationInput | CodeExecutionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeExecutions.
     */
    cursor?: CodeExecutionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeExecutions.
     */
    distinct?: CodeExecutionsScalarFieldEnum | CodeExecutionsScalarFieldEnum[]
  }

  /**
   * CodeExecutions findFirstOrThrow
   */
  export type CodeExecutionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExecutions
     */
    select?: CodeExecutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExecutions
     */
    omit?: CodeExecutionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeExecutionsInclude<ExtArgs> | null
    /**
     * Filter, which CodeExecutions to fetch.
     */
    where?: CodeExecutionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeExecutions to fetch.
     */
    orderBy?: CodeExecutionsOrderByWithRelationInput | CodeExecutionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeExecutions.
     */
    cursor?: CodeExecutionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeExecutions.
     */
    distinct?: CodeExecutionsScalarFieldEnum | CodeExecutionsScalarFieldEnum[]
  }

  /**
   * CodeExecutions findMany
   */
  export type CodeExecutionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExecutions
     */
    select?: CodeExecutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExecutions
     */
    omit?: CodeExecutionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeExecutionsInclude<ExtArgs> | null
    /**
     * Filter, which CodeExecutions to fetch.
     */
    where?: CodeExecutionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeExecutions to fetch.
     */
    orderBy?: CodeExecutionsOrderByWithRelationInput | CodeExecutionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeExecutions.
     */
    cursor?: CodeExecutionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeExecutions.
     */
    skip?: number
    distinct?: CodeExecutionsScalarFieldEnum | CodeExecutionsScalarFieldEnum[]
  }

  /**
   * CodeExecutions create
   */
  export type CodeExecutionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExecutions
     */
    select?: CodeExecutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExecutions
     */
    omit?: CodeExecutionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeExecutionsInclude<ExtArgs> | null
    /**
     * The data needed to create a CodeExecutions.
     */
    data: XOR<CodeExecutionsCreateInput, CodeExecutionsUncheckedCreateInput>
  }

  /**
   * CodeExecutions createMany
   */
  export type CodeExecutionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodeExecutions.
     */
    data: CodeExecutionsCreateManyInput | CodeExecutionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodeExecutions createManyAndReturn
   */
  export type CodeExecutionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExecutions
     */
    select?: CodeExecutionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExecutions
     */
    omit?: CodeExecutionsOmit<ExtArgs> | null
    /**
     * The data used to create many CodeExecutions.
     */
    data: CodeExecutionsCreateManyInput | CodeExecutionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeExecutionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CodeExecutions update
   */
  export type CodeExecutionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExecutions
     */
    select?: CodeExecutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExecutions
     */
    omit?: CodeExecutionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeExecutionsInclude<ExtArgs> | null
    /**
     * The data needed to update a CodeExecutions.
     */
    data: XOR<CodeExecutionsUpdateInput, CodeExecutionsUncheckedUpdateInput>
    /**
     * Choose, which CodeExecutions to update.
     */
    where: CodeExecutionsWhereUniqueInput
  }

  /**
   * CodeExecutions updateMany
   */
  export type CodeExecutionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodeExecutions.
     */
    data: XOR<CodeExecutionsUpdateManyMutationInput, CodeExecutionsUncheckedUpdateManyInput>
    /**
     * Filter which CodeExecutions to update
     */
    where?: CodeExecutionsWhereInput
    /**
     * Limit how many CodeExecutions to update.
     */
    limit?: number
  }

  /**
   * CodeExecutions updateManyAndReturn
   */
  export type CodeExecutionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExecutions
     */
    select?: CodeExecutionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExecutions
     */
    omit?: CodeExecutionsOmit<ExtArgs> | null
    /**
     * The data used to update CodeExecutions.
     */
    data: XOR<CodeExecutionsUpdateManyMutationInput, CodeExecutionsUncheckedUpdateManyInput>
    /**
     * Filter which CodeExecutions to update
     */
    where?: CodeExecutionsWhereInput
    /**
     * Limit how many CodeExecutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeExecutionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CodeExecutions upsert
   */
  export type CodeExecutionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExecutions
     */
    select?: CodeExecutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExecutions
     */
    omit?: CodeExecutionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeExecutionsInclude<ExtArgs> | null
    /**
     * The filter to search for the CodeExecutions to update in case it exists.
     */
    where: CodeExecutionsWhereUniqueInput
    /**
     * In case the CodeExecutions found by the `where` argument doesn't exist, create a new CodeExecutions with this data.
     */
    create: XOR<CodeExecutionsCreateInput, CodeExecutionsUncheckedCreateInput>
    /**
     * In case the CodeExecutions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeExecutionsUpdateInput, CodeExecutionsUncheckedUpdateInput>
  }

  /**
   * CodeExecutions delete
   */
  export type CodeExecutionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExecutions
     */
    select?: CodeExecutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExecutions
     */
    omit?: CodeExecutionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeExecutionsInclude<ExtArgs> | null
    /**
     * Filter which CodeExecutions to delete.
     */
    where: CodeExecutionsWhereUniqueInput
  }

  /**
   * CodeExecutions deleteMany
   */
  export type CodeExecutionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeExecutions to delete
     */
    where?: CodeExecutionsWhereInput
    /**
     * Limit how many CodeExecutions to delete.
     */
    limit?: number
  }

  /**
   * CodeExecutions without action
   */
  export type CodeExecutionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExecutions
     */
    select?: CodeExecutionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExecutions
     */
    omit?: CodeExecutionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeExecutionsInclude<ExtArgs> | null
  }


  /**
   * Model Snippets
   */

  export type AggregateSnippets = {
    _count: SnippetsCountAggregateOutputType | null
    _min: SnippetsMinAggregateOutputType | null
    _max: SnippetsMaxAggregateOutputType | null
  }

  export type SnippetsMinAggregateOutputType = {
    id: string | null
    title: string | null
    language: string | null
    code: string | null
    userName: string | null
  }

  export type SnippetsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    language: string | null
    code: string | null
    userName: string | null
  }

  export type SnippetsCountAggregateOutputType = {
    id: number
    title: number
    language: number
    code: number
    userName: number
    _all: number
  }


  export type SnippetsMinAggregateInputType = {
    id?: true
    title?: true
    language?: true
    code?: true
    userName?: true
  }

  export type SnippetsMaxAggregateInputType = {
    id?: true
    title?: true
    language?: true
    code?: true
    userName?: true
  }

  export type SnippetsCountAggregateInputType = {
    id?: true
    title?: true
    language?: true
    code?: true
    userName?: true
    _all?: true
  }

  export type SnippetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Snippets to aggregate.
     */
    where?: SnippetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snippets to fetch.
     */
    orderBy?: SnippetsOrderByWithRelationInput | SnippetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SnippetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snippets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Snippets
    **/
    _count?: true | SnippetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SnippetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SnippetsMaxAggregateInputType
  }

  export type GetSnippetsAggregateType<T extends SnippetsAggregateArgs> = {
        [P in keyof T & keyof AggregateSnippets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSnippets[P]>
      : GetScalarType<T[P], AggregateSnippets[P]>
  }




  export type SnippetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnippetsWhereInput
    orderBy?: SnippetsOrderByWithAggregationInput | SnippetsOrderByWithAggregationInput[]
    by: SnippetsScalarFieldEnum[] | SnippetsScalarFieldEnum
    having?: SnippetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SnippetsCountAggregateInputType | true
    _min?: SnippetsMinAggregateInputType
    _max?: SnippetsMaxAggregateInputType
  }

  export type SnippetsGroupByOutputType = {
    id: string
    title: string
    language: string
    code: string | null
    userName: string
    _count: SnippetsCountAggregateOutputType | null
    _min: SnippetsMinAggregateOutputType | null
    _max: SnippetsMaxAggregateOutputType | null
  }

  type GetSnippetsGroupByPayload<T extends SnippetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SnippetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SnippetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SnippetsGroupByOutputType[P]>
            : GetScalarType<T[P], SnippetsGroupByOutputType[P]>
        }
      >
    >


  export type SnippetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    language?: boolean
    code?: boolean
    userName?: boolean
    stars?: boolean | Snippets$starsArgs<ExtArgs>
    snippetComments?: boolean | Snippets$snippetCommentsArgs<ExtArgs>
    _count?: boolean | SnippetsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snippets"]>

  export type SnippetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    language?: boolean
    code?: boolean
    userName?: boolean
  }, ExtArgs["result"]["snippets"]>

  export type SnippetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    language?: boolean
    code?: boolean
    userName?: boolean
  }, ExtArgs["result"]["snippets"]>

  export type SnippetsSelectScalar = {
    id?: boolean
    title?: boolean
    language?: boolean
    code?: boolean
    userName?: boolean
  }

  export type SnippetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "language" | "code" | "userName", ExtArgs["result"]["snippets"]>
  export type SnippetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stars?: boolean | Snippets$starsArgs<ExtArgs>
    snippetComments?: boolean | Snippets$snippetCommentsArgs<ExtArgs>
    _count?: boolean | SnippetsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SnippetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SnippetsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SnippetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Snippets"
    objects: {
      stars: Prisma.$StarsPayload<ExtArgs>[]
      snippetComments: Prisma.$SnippetCommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      language: string
      code: string | null
      userName: string
    }, ExtArgs["result"]["snippets"]>
    composites: {}
  }

  type SnippetsGetPayload<S extends boolean | null | undefined | SnippetsDefaultArgs> = $Result.GetResult<Prisma.$SnippetsPayload, S>

  type SnippetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SnippetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SnippetsCountAggregateInputType | true
    }

  export interface SnippetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Snippets'], meta: { name: 'Snippets' } }
    /**
     * Find zero or one Snippets that matches the filter.
     * @param {SnippetsFindUniqueArgs} args - Arguments to find a Snippets
     * @example
     * // Get one Snippets
     * const snippets = await prisma.snippets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SnippetsFindUniqueArgs>(args: SelectSubset<T, SnippetsFindUniqueArgs<ExtArgs>>): Prisma__SnippetsClient<$Result.GetResult<Prisma.$SnippetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Snippets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SnippetsFindUniqueOrThrowArgs} args - Arguments to find a Snippets
     * @example
     * // Get one Snippets
     * const snippets = await prisma.snippets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SnippetsFindUniqueOrThrowArgs>(args: SelectSubset<T, SnippetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SnippetsClient<$Result.GetResult<Prisma.$SnippetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Snippets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnippetsFindFirstArgs} args - Arguments to find a Snippets
     * @example
     * // Get one Snippets
     * const snippets = await prisma.snippets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SnippetsFindFirstArgs>(args?: SelectSubset<T, SnippetsFindFirstArgs<ExtArgs>>): Prisma__SnippetsClient<$Result.GetResult<Prisma.$SnippetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Snippets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnippetsFindFirstOrThrowArgs} args - Arguments to find a Snippets
     * @example
     * // Get one Snippets
     * const snippets = await prisma.snippets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SnippetsFindFirstOrThrowArgs>(args?: SelectSubset<T, SnippetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SnippetsClient<$Result.GetResult<Prisma.$SnippetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Snippets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnippetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Snippets
     * const snippets = await prisma.snippets.findMany()
     * 
     * // Get first 10 Snippets
     * const snippets = await prisma.snippets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const snippetsWithIdOnly = await prisma.snippets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SnippetsFindManyArgs>(args?: SelectSubset<T, SnippetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnippetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Snippets.
     * @param {SnippetsCreateArgs} args - Arguments to create a Snippets.
     * @example
     * // Create one Snippets
     * const Snippets = await prisma.snippets.create({
     *   data: {
     *     // ... data to create a Snippets
     *   }
     * })
     * 
     */
    create<T extends SnippetsCreateArgs>(args: SelectSubset<T, SnippetsCreateArgs<ExtArgs>>): Prisma__SnippetsClient<$Result.GetResult<Prisma.$SnippetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Snippets.
     * @param {SnippetsCreateManyArgs} args - Arguments to create many Snippets.
     * @example
     * // Create many Snippets
     * const snippets = await prisma.snippets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SnippetsCreateManyArgs>(args?: SelectSubset<T, SnippetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Snippets and returns the data saved in the database.
     * @param {SnippetsCreateManyAndReturnArgs} args - Arguments to create many Snippets.
     * @example
     * // Create many Snippets
     * const snippets = await prisma.snippets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Snippets and only return the `id`
     * const snippetsWithIdOnly = await prisma.snippets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SnippetsCreateManyAndReturnArgs>(args?: SelectSubset<T, SnippetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnippetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Snippets.
     * @param {SnippetsDeleteArgs} args - Arguments to delete one Snippets.
     * @example
     * // Delete one Snippets
     * const Snippets = await prisma.snippets.delete({
     *   where: {
     *     // ... filter to delete one Snippets
     *   }
     * })
     * 
     */
    delete<T extends SnippetsDeleteArgs>(args: SelectSubset<T, SnippetsDeleteArgs<ExtArgs>>): Prisma__SnippetsClient<$Result.GetResult<Prisma.$SnippetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Snippets.
     * @param {SnippetsUpdateArgs} args - Arguments to update one Snippets.
     * @example
     * // Update one Snippets
     * const snippets = await prisma.snippets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SnippetsUpdateArgs>(args: SelectSubset<T, SnippetsUpdateArgs<ExtArgs>>): Prisma__SnippetsClient<$Result.GetResult<Prisma.$SnippetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Snippets.
     * @param {SnippetsDeleteManyArgs} args - Arguments to filter Snippets to delete.
     * @example
     * // Delete a few Snippets
     * const { count } = await prisma.snippets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SnippetsDeleteManyArgs>(args?: SelectSubset<T, SnippetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Snippets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnippetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Snippets
     * const snippets = await prisma.snippets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SnippetsUpdateManyArgs>(args: SelectSubset<T, SnippetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Snippets and returns the data updated in the database.
     * @param {SnippetsUpdateManyAndReturnArgs} args - Arguments to update many Snippets.
     * @example
     * // Update many Snippets
     * const snippets = await prisma.snippets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Snippets and only return the `id`
     * const snippetsWithIdOnly = await prisma.snippets.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SnippetsUpdateManyAndReturnArgs>(args: SelectSubset<T, SnippetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnippetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Snippets.
     * @param {SnippetsUpsertArgs} args - Arguments to update or create a Snippets.
     * @example
     * // Update or create a Snippets
     * const snippets = await prisma.snippets.upsert({
     *   create: {
     *     // ... data to create a Snippets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Snippets we want to update
     *   }
     * })
     */
    upsert<T extends SnippetsUpsertArgs>(args: SelectSubset<T, SnippetsUpsertArgs<ExtArgs>>): Prisma__SnippetsClient<$Result.GetResult<Prisma.$SnippetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Snippets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnippetsCountArgs} args - Arguments to filter Snippets to count.
     * @example
     * // Count the number of Snippets
     * const count = await prisma.snippets.count({
     *   where: {
     *     // ... the filter for the Snippets we want to count
     *   }
     * })
    **/
    count<T extends SnippetsCountArgs>(
      args?: Subset<T, SnippetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SnippetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Snippets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnippetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SnippetsAggregateArgs>(args: Subset<T, SnippetsAggregateArgs>): Prisma.PrismaPromise<GetSnippetsAggregateType<T>>

    /**
     * Group by Snippets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnippetsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SnippetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SnippetsGroupByArgs['orderBy'] }
        : { orderBy?: SnippetsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SnippetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSnippetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Snippets model
   */
  readonly fields: SnippetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Snippets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SnippetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stars<T extends Snippets$starsArgs<ExtArgs> = {}>(args?: Subset<T, Snippets$starsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    snippetComments<T extends Snippets$snippetCommentsArgs<ExtArgs> = {}>(args?: Subset<T, Snippets$snippetCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnippetCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Snippets model
   */
  interface SnippetsFieldRefs {
    readonly id: FieldRef<"Snippets", 'String'>
    readonly title: FieldRef<"Snippets", 'String'>
    readonly language: FieldRef<"Snippets", 'String'>
    readonly code: FieldRef<"Snippets", 'String'>
    readonly userName: FieldRef<"Snippets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Snippets findUnique
   */
  export type SnippetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snippets
     */
    select?: SnippetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snippets
     */
    omit?: SnippetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetsInclude<ExtArgs> | null
    /**
     * Filter, which Snippets to fetch.
     */
    where: SnippetsWhereUniqueInput
  }

  /**
   * Snippets findUniqueOrThrow
   */
  export type SnippetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snippets
     */
    select?: SnippetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snippets
     */
    omit?: SnippetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetsInclude<ExtArgs> | null
    /**
     * Filter, which Snippets to fetch.
     */
    where: SnippetsWhereUniqueInput
  }

  /**
   * Snippets findFirst
   */
  export type SnippetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snippets
     */
    select?: SnippetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snippets
     */
    omit?: SnippetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetsInclude<ExtArgs> | null
    /**
     * Filter, which Snippets to fetch.
     */
    where?: SnippetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snippets to fetch.
     */
    orderBy?: SnippetsOrderByWithRelationInput | SnippetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Snippets.
     */
    cursor?: SnippetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snippets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Snippets.
     */
    distinct?: SnippetsScalarFieldEnum | SnippetsScalarFieldEnum[]
  }

  /**
   * Snippets findFirstOrThrow
   */
  export type SnippetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snippets
     */
    select?: SnippetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snippets
     */
    omit?: SnippetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetsInclude<ExtArgs> | null
    /**
     * Filter, which Snippets to fetch.
     */
    where?: SnippetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snippets to fetch.
     */
    orderBy?: SnippetsOrderByWithRelationInput | SnippetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Snippets.
     */
    cursor?: SnippetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snippets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Snippets.
     */
    distinct?: SnippetsScalarFieldEnum | SnippetsScalarFieldEnum[]
  }

  /**
   * Snippets findMany
   */
  export type SnippetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snippets
     */
    select?: SnippetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snippets
     */
    omit?: SnippetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetsInclude<ExtArgs> | null
    /**
     * Filter, which Snippets to fetch.
     */
    where?: SnippetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snippets to fetch.
     */
    orderBy?: SnippetsOrderByWithRelationInput | SnippetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Snippets.
     */
    cursor?: SnippetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snippets.
     */
    skip?: number
    distinct?: SnippetsScalarFieldEnum | SnippetsScalarFieldEnum[]
  }

  /**
   * Snippets create
   */
  export type SnippetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snippets
     */
    select?: SnippetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snippets
     */
    omit?: SnippetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetsInclude<ExtArgs> | null
    /**
     * The data needed to create a Snippets.
     */
    data: XOR<SnippetsCreateInput, SnippetsUncheckedCreateInput>
  }

  /**
   * Snippets createMany
   */
  export type SnippetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Snippets.
     */
    data: SnippetsCreateManyInput | SnippetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Snippets createManyAndReturn
   */
  export type SnippetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snippets
     */
    select?: SnippetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Snippets
     */
    omit?: SnippetsOmit<ExtArgs> | null
    /**
     * The data used to create many Snippets.
     */
    data: SnippetsCreateManyInput | SnippetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Snippets update
   */
  export type SnippetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snippets
     */
    select?: SnippetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snippets
     */
    omit?: SnippetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetsInclude<ExtArgs> | null
    /**
     * The data needed to update a Snippets.
     */
    data: XOR<SnippetsUpdateInput, SnippetsUncheckedUpdateInput>
    /**
     * Choose, which Snippets to update.
     */
    where: SnippetsWhereUniqueInput
  }

  /**
   * Snippets updateMany
   */
  export type SnippetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Snippets.
     */
    data: XOR<SnippetsUpdateManyMutationInput, SnippetsUncheckedUpdateManyInput>
    /**
     * Filter which Snippets to update
     */
    where?: SnippetsWhereInput
    /**
     * Limit how many Snippets to update.
     */
    limit?: number
  }

  /**
   * Snippets updateManyAndReturn
   */
  export type SnippetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snippets
     */
    select?: SnippetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Snippets
     */
    omit?: SnippetsOmit<ExtArgs> | null
    /**
     * The data used to update Snippets.
     */
    data: XOR<SnippetsUpdateManyMutationInput, SnippetsUncheckedUpdateManyInput>
    /**
     * Filter which Snippets to update
     */
    where?: SnippetsWhereInput
    /**
     * Limit how many Snippets to update.
     */
    limit?: number
  }

  /**
   * Snippets upsert
   */
  export type SnippetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snippets
     */
    select?: SnippetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snippets
     */
    omit?: SnippetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetsInclude<ExtArgs> | null
    /**
     * The filter to search for the Snippets to update in case it exists.
     */
    where: SnippetsWhereUniqueInput
    /**
     * In case the Snippets found by the `where` argument doesn't exist, create a new Snippets with this data.
     */
    create: XOR<SnippetsCreateInput, SnippetsUncheckedCreateInput>
    /**
     * In case the Snippets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SnippetsUpdateInput, SnippetsUncheckedUpdateInput>
  }

  /**
   * Snippets delete
   */
  export type SnippetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snippets
     */
    select?: SnippetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snippets
     */
    omit?: SnippetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetsInclude<ExtArgs> | null
    /**
     * Filter which Snippets to delete.
     */
    where: SnippetsWhereUniqueInput
  }

  /**
   * Snippets deleteMany
   */
  export type SnippetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Snippets to delete
     */
    where?: SnippetsWhereInput
    /**
     * Limit how many Snippets to delete.
     */
    limit?: number
  }

  /**
   * Snippets.stars
   */
  export type Snippets$starsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    where?: StarsWhereInput
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    cursor?: StarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StarsScalarFieldEnum | StarsScalarFieldEnum[]
  }

  /**
   * Snippets.snippetComments
   */
  export type Snippets$snippetCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetComments
     */
    select?: SnippetCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnippetComments
     */
    omit?: SnippetCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetCommentsInclude<ExtArgs> | null
    where?: SnippetCommentsWhereInput
    orderBy?: SnippetCommentsOrderByWithRelationInput | SnippetCommentsOrderByWithRelationInput[]
    cursor?: SnippetCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SnippetCommentsScalarFieldEnum | SnippetCommentsScalarFieldEnum[]
  }

  /**
   * Snippets without action
   */
  export type SnippetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snippets
     */
    select?: SnippetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snippets
     */
    omit?: SnippetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetsInclude<ExtArgs> | null
  }


  /**
   * Model SnippetComments
   */

  export type AggregateSnippetComments = {
    _count: SnippetCommentsCountAggregateOutputType | null
    _min: SnippetCommentsMinAggregateOutputType | null
    _max: SnippetCommentsMaxAggregateOutputType | null
  }

  export type SnippetCommentsMinAggregateOutputType = {
    id: string | null
    snippetId: string | null
    userId: string | null
    userName: string | null
    content: string | null
  }

  export type SnippetCommentsMaxAggregateOutputType = {
    id: string | null
    snippetId: string | null
    userId: string | null
    userName: string | null
    content: string | null
  }

  export type SnippetCommentsCountAggregateOutputType = {
    id: number
    snippetId: number
    userId: number
    userName: number
    content: number
    _all: number
  }


  export type SnippetCommentsMinAggregateInputType = {
    id?: true
    snippetId?: true
    userId?: true
    userName?: true
    content?: true
  }

  export type SnippetCommentsMaxAggregateInputType = {
    id?: true
    snippetId?: true
    userId?: true
    userName?: true
    content?: true
  }

  export type SnippetCommentsCountAggregateInputType = {
    id?: true
    snippetId?: true
    userId?: true
    userName?: true
    content?: true
    _all?: true
  }

  export type SnippetCommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SnippetComments to aggregate.
     */
    where?: SnippetCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnippetComments to fetch.
     */
    orderBy?: SnippetCommentsOrderByWithRelationInput | SnippetCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SnippetCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnippetComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnippetComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SnippetComments
    **/
    _count?: true | SnippetCommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SnippetCommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SnippetCommentsMaxAggregateInputType
  }

  export type GetSnippetCommentsAggregateType<T extends SnippetCommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateSnippetComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSnippetComments[P]>
      : GetScalarType<T[P], AggregateSnippetComments[P]>
  }




  export type SnippetCommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnippetCommentsWhereInput
    orderBy?: SnippetCommentsOrderByWithAggregationInput | SnippetCommentsOrderByWithAggregationInput[]
    by: SnippetCommentsScalarFieldEnum[] | SnippetCommentsScalarFieldEnum
    having?: SnippetCommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SnippetCommentsCountAggregateInputType | true
    _min?: SnippetCommentsMinAggregateInputType
    _max?: SnippetCommentsMaxAggregateInputType
  }

  export type SnippetCommentsGroupByOutputType = {
    id: string
    snippetId: string
    userId: string | null
    userName: string
    content: string
    _count: SnippetCommentsCountAggregateOutputType | null
    _min: SnippetCommentsMinAggregateOutputType | null
    _max: SnippetCommentsMaxAggregateOutputType | null
  }

  type GetSnippetCommentsGroupByPayload<T extends SnippetCommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SnippetCommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SnippetCommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SnippetCommentsGroupByOutputType[P]>
            : GetScalarType<T[P], SnippetCommentsGroupByOutputType[P]>
        }
      >
    >


  export type SnippetCommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snippetId?: boolean
    userId?: boolean
    userName?: boolean
    content?: boolean
    user?: boolean | SnippetComments$userArgs<ExtArgs>
    snippets?: boolean | SnippetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snippetComments"]>

  export type SnippetCommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snippetId?: boolean
    userId?: boolean
    userName?: boolean
    content?: boolean
    user?: boolean | SnippetComments$userArgs<ExtArgs>
    snippets?: boolean | SnippetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snippetComments"]>

  export type SnippetCommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    snippetId?: boolean
    userId?: boolean
    userName?: boolean
    content?: boolean
    user?: boolean | SnippetComments$userArgs<ExtArgs>
    snippets?: boolean | SnippetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snippetComments"]>

  export type SnippetCommentsSelectScalar = {
    id?: boolean
    snippetId?: boolean
    userId?: boolean
    userName?: boolean
    content?: boolean
  }

  export type SnippetCommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "snippetId" | "userId" | "userName" | "content", ExtArgs["result"]["snippetComments"]>
  export type SnippetCommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SnippetComments$userArgs<ExtArgs>
    snippets?: boolean | SnippetsDefaultArgs<ExtArgs>
  }
  export type SnippetCommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SnippetComments$userArgs<ExtArgs>
    snippets?: boolean | SnippetsDefaultArgs<ExtArgs>
  }
  export type SnippetCommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SnippetComments$userArgs<ExtArgs>
    snippets?: boolean | SnippetsDefaultArgs<ExtArgs>
  }

  export type $SnippetCommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SnippetComments"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      snippets: Prisma.$SnippetsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      snippetId: string
      userId: string | null
      userName: string
      content: string
    }, ExtArgs["result"]["snippetComments"]>
    composites: {}
  }

  type SnippetCommentsGetPayload<S extends boolean | null | undefined | SnippetCommentsDefaultArgs> = $Result.GetResult<Prisma.$SnippetCommentsPayload, S>

  type SnippetCommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SnippetCommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SnippetCommentsCountAggregateInputType | true
    }

  export interface SnippetCommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SnippetComments'], meta: { name: 'SnippetComments' } }
    /**
     * Find zero or one SnippetComments that matches the filter.
     * @param {SnippetCommentsFindUniqueArgs} args - Arguments to find a SnippetComments
     * @example
     * // Get one SnippetComments
     * const snippetComments = await prisma.snippetComments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SnippetCommentsFindUniqueArgs>(args: SelectSubset<T, SnippetCommentsFindUniqueArgs<ExtArgs>>): Prisma__SnippetCommentsClient<$Result.GetResult<Prisma.$SnippetCommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SnippetComments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SnippetCommentsFindUniqueOrThrowArgs} args - Arguments to find a SnippetComments
     * @example
     * // Get one SnippetComments
     * const snippetComments = await prisma.snippetComments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SnippetCommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, SnippetCommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SnippetCommentsClient<$Result.GetResult<Prisma.$SnippetCommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SnippetComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnippetCommentsFindFirstArgs} args - Arguments to find a SnippetComments
     * @example
     * // Get one SnippetComments
     * const snippetComments = await prisma.snippetComments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SnippetCommentsFindFirstArgs>(args?: SelectSubset<T, SnippetCommentsFindFirstArgs<ExtArgs>>): Prisma__SnippetCommentsClient<$Result.GetResult<Prisma.$SnippetCommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SnippetComments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnippetCommentsFindFirstOrThrowArgs} args - Arguments to find a SnippetComments
     * @example
     * // Get one SnippetComments
     * const snippetComments = await prisma.snippetComments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SnippetCommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, SnippetCommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SnippetCommentsClient<$Result.GetResult<Prisma.$SnippetCommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SnippetComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnippetCommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SnippetComments
     * const snippetComments = await prisma.snippetComments.findMany()
     * 
     * // Get first 10 SnippetComments
     * const snippetComments = await prisma.snippetComments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const snippetCommentsWithIdOnly = await prisma.snippetComments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SnippetCommentsFindManyArgs>(args?: SelectSubset<T, SnippetCommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnippetCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SnippetComments.
     * @param {SnippetCommentsCreateArgs} args - Arguments to create a SnippetComments.
     * @example
     * // Create one SnippetComments
     * const SnippetComments = await prisma.snippetComments.create({
     *   data: {
     *     // ... data to create a SnippetComments
     *   }
     * })
     * 
     */
    create<T extends SnippetCommentsCreateArgs>(args: SelectSubset<T, SnippetCommentsCreateArgs<ExtArgs>>): Prisma__SnippetCommentsClient<$Result.GetResult<Prisma.$SnippetCommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SnippetComments.
     * @param {SnippetCommentsCreateManyArgs} args - Arguments to create many SnippetComments.
     * @example
     * // Create many SnippetComments
     * const snippetComments = await prisma.snippetComments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SnippetCommentsCreateManyArgs>(args?: SelectSubset<T, SnippetCommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SnippetComments and returns the data saved in the database.
     * @param {SnippetCommentsCreateManyAndReturnArgs} args - Arguments to create many SnippetComments.
     * @example
     * // Create many SnippetComments
     * const snippetComments = await prisma.snippetComments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SnippetComments and only return the `id`
     * const snippetCommentsWithIdOnly = await prisma.snippetComments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SnippetCommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, SnippetCommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnippetCommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SnippetComments.
     * @param {SnippetCommentsDeleteArgs} args - Arguments to delete one SnippetComments.
     * @example
     * // Delete one SnippetComments
     * const SnippetComments = await prisma.snippetComments.delete({
     *   where: {
     *     // ... filter to delete one SnippetComments
     *   }
     * })
     * 
     */
    delete<T extends SnippetCommentsDeleteArgs>(args: SelectSubset<T, SnippetCommentsDeleteArgs<ExtArgs>>): Prisma__SnippetCommentsClient<$Result.GetResult<Prisma.$SnippetCommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SnippetComments.
     * @param {SnippetCommentsUpdateArgs} args - Arguments to update one SnippetComments.
     * @example
     * // Update one SnippetComments
     * const snippetComments = await prisma.snippetComments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SnippetCommentsUpdateArgs>(args: SelectSubset<T, SnippetCommentsUpdateArgs<ExtArgs>>): Prisma__SnippetCommentsClient<$Result.GetResult<Prisma.$SnippetCommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SnippetComments.
     * @param {SnippetCommentsDeleteManyArgs} args - Arguments to filter SnippetComments to delete.
     * @example
     * // Delete a few SnippetComments
     * const { count } = await prisma.snippetComments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SnippetCommentsDeleteManyArgs>(args?: SelectSubset<T, SnippetCommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SnippetComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnippetCommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SnippetComments
     * const snippetComments = await prisma.snippetComments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SnippetCommentsUpdateManyArgs>(args: SelectSubset<T, SnippetCommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SnippetComments and returns the data updated in the database.
     * @param {SnippetCommentsUpdateManyAndReturnArgs} args - Arguments to update many SnippetComments.
     * @example
     * // Update many SnippetComments
     * const snippetComments = await prisma.snippetComments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SnippetComments and only return the `id`
     * const snippetCommentsWithIdOnly = await prisma.snippetComments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SnippetCommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, SnippetCommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnippetCommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SnippetComments.
     * @param {SnippetCommentsUpsertArgs} args - Arguments to update or create a SnippetComments.
     * @example
     * // Update or create a SnippetComments
     * const snippetComments = await prisma.snippetComments.upsert({
     *   create: {
     *     // ... data to create a SnippetComments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SnippetComments we want to update
     *   }
     * })
     */
    upsert<T extends SnippetCommentsUpsertArgs>(args: SelectSubset<T, SnippetCommentsUpsertArgs<ExtArgs>>): Prisma__SnippetCommentsClient<$Result.GetResult<Prisma.$SnippetCommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SnippetComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnippetCommentsCountArgs} args - Arguments to filter SnippetComments to count.
     * @example
     * // Count the number of SnippetComments
     * const count = await prisma.snippetComments.count({
     *   where: {
     *     // ... the filter for the SnippetComments we want to count
     *   }
     * })
    **/
    count<T extends SnippetCommentsCountArgs>(
      args?: Subset<T, SnippetCommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SnippetCommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SnippetComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnippetCommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SnippetCommentsAggregateArgs>(args: Subset<T, SnippetCommentsAggregateArgs>): Prisma.PrismaPromise<GetSnippetCommentsAggregateType<T>>

    /**
     * Group by SnippetComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnippetCommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SnippetCommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SnippetCommentsGroupByArgs['orderBy'] }
        : { orderBy?: SnippetCommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SnippetCommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSnippetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SnippetComments model
   */
  readonly fields: SnippetCommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SnippetComments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SnippetCommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends SnippetComments$userArgs<ExtArgs> = {}>(args?: Subset<T, SnippetComments$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    snippets<T extends SnippetsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SnippetsDefaultArgs<ExtArgs>>): Prisma__SnippetsClient<$Result.GetResult<Prisma.$SnippetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SnippetComments model
   */
  interface SnippetCommentsFieldRefs {
    readonly id: FieldRef<"SnippetComments", 'String'>
    readonly snippetId: FieldRef<"SnippetComments", 'String'>
    readonly userId: FieldRef<"SnippetComments", 'String'>
    readonly userName: FieldRef<"SnippetComments", 'String'>
    readonly content: FieldRef<"SnippetComments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SnippetComments findUnique
   */
  export type SnippetCommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetComments
     */
    select?: SnippetCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnippetComments
     */
    omit?: SnippetCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetCommentsInclude<ExtArgs> | null
    /**
     * Filter, which SnippetComments to fetch.
     */
    where: SnippetCommentsWhereUniqueInput
  }

  /**
   * SnippetComments findUniqueOrThrow
   */
  export type SnippetCommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetComments
     */
    select?: SnippetCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnippetComments
     */
    omit?: SnippetCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetCommentsInclude<ExtArgs> | null
    /**
     * Filter, which SnippetComments to fetch.
     */
    where: SnippetCommentsWhereUniqueInput
  }

  /**
   * SnippetComments findFirst
   */
  export type SnippetCommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetComments
     */
    select?: SnippetCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnippetComments
     */
    omit?: SnippetCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetCommentsInclude<ExtArgs> | null
    /**
     * Filter, which SnippetComments to fetch.
     */
    where?: SnippetCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnippetComments to fetch.
     */
    orderBy?: SnippetCommentsOrderByWithRelationInput | SnippetCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SnippetComments.
     */
    cursor?: SnippetCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnippetComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnippetComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SnippetComments.
     */
    distinct?: SnippetCommentsScalarFieldEnum | SnippetCommentsScalarFieldEnum[]
  }

  /**
   * SnippetComments findFirstOrThrow
   */
  export type SnippetCommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetComments
     */
    select?: SnippetCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnippetComments
     */
    omit?: SnippetCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetCommentsInclude<ExtArgs> | null
    /**
     * Filter, which SnippetComments to fetch.
     */
    where?: SnippetCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnippetComments to fetch.
     */
    orderBy?: SnippetCommentsOrderByWithRelationInput | SnippetCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SnippetComments.
     */
    cursor?: SnippetCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnippetComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnippetComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SnippetComments.
     */
    distinct?: SnippetCommentsScalarFieldEnum | SnippetCommentsScalarFieldEnum[]
  }

  /**
   * SnippetComments findMany
   */
  export type SnippetCommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetComments
     */
    select?: SnippetCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnippetComments
     */
    omit?: SnippetCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetCommentsInclude<ExtArgs> | null
    /**
     * Filter, which SnippetComments to fetch.
     */
    where?: SnippetCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnippetComments to fetch.
     */
    orderBy?: SnippetCommentsOrderByWithRelationInput | SnippetCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SnippetComments.
     */
    cursor?: SnippetCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnippetComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnippetComments.
     */
    skip?: number
    distinct?: SnippetCommentsScalarFieldEnum | SnippetCommentsScalarFieldEnum[]
  }

  /**
   * SnippetComments create
   */
  export type SnippetCommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetComments
     */
    select?: SnippetCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnippetComments
     */
    omit?: SnippetCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetCommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a SnippetComments.
     */
    data: XOR<SnippetCommentsCreateInput, SnippetCommentsUncheckedCreateInput>
  }

  /**
   * SnippetComments createMany
   */
  export type SnippetCommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SnippetComments.
     */
    data: SnippetCommentsCreateManyInput | SnippetCommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SnippetComments createManyAndReturn
   */
  export type SnippetCommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetComments
     */
    select?: SnippetCommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SnippetComments
     */
    omit?: SnippetCommentsOmit<ExtArgs> | null
    /**
     * The data used to create many SnippetComments.
     */
    data: SnippetCommentsCreateManyInput | SnippetCommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetCommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SnippetComments update
   */
  export type SnippetCommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetComments
     */
    select?: SnippetCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnippetComments
     */
    omit?: SnippetCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetCommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a SnippetComments.
     */
    data: XOR<SnippetCommentsUpdateInput, SnippetCommentsUncheckedUpdateInput>
    /**
     * Choose, which SnippetComments to update.
     */
    where: SnippetCommentsWhereUniqueInput
  }

  /**
   * SnippetComments updateMany
   */
  export type SnippetCommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SnippetComments.
     */
    data: XOR<SnippetCommentsUpdateManyMutationInput, SnippetCommentsUncheckedUpdateManyInput>
    /**
     * Filter which SnippetComments to update
     */
    where?: SnippetCommentsWhereInput
    /**
     * Limit how many SnippetComments to update.
     */
    limit?: number
  }

  /**
   * SnippetComments updateManyAndReturn
   */
  export type SnippetCommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetComments
     */
    select?: SnippetCommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SnippetComments
     */
    omit?: SnippetCommentsOmit<ExtArgs> | null
    /**
     * The data used to update SnippetComments.
     */
    data: XOR<SnippetCommentsUpdateManyMutationInput, SnippetCommentsUncheckedUpdateManyInput>
    /**
     * Filter which SnippetComments to update
     */
    where?: SnippetCommentsWhereInput
    /**
     * Limit how many SnippetComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetCommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SnippetComments upsert
   */
  export type SnippetCommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetComments
     */
    select?: SnippetCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnippetComments
     */
    omit?: SnippetCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetCommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the SnippetComments to update in case it exists.
     */
    where: SnippetCommentsWhereUniqueInput
    /**
     * In case the SnippetComments found by the `where` argument doesn't exist, create a new SnippetComments with this data.
     */
    create: XOR<SnippetCommentsCreateInput, SnippetCommentsUncheckedCreateInput>
    /**
     * In case the SnippetComments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SnippetCommentsUpdateInput, SnippetCommentsUncheckedUpdateInput>
  }

  /**
   * SnippetComments delete
   */
  export type SnippetCommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetComments
     */
    select?: SnippetCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnippetComments
     */
    omit?: SnippetCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetCommentsInclude<ExtArgs> | null
    /**
     * Filter which SnippetComments to delete.
     */
    where: SnippetCommentsWhereUniqueInput
  }

  /**
   * SnippetComments deleteMany
   */
  export type SnippetCommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SnippetComments to delete
     */
    where?: SnippetCommentsWhereInput
    /**
     * Limit how many SnippetComments to delete.
     */
    limit?: number
  }

  /**
   * SnippetComments.user
   */
  export type SnippetComments$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SnippetComments without action
   */
  export type SnippetCommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnippetComments
     */
    select?: SnippetCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnippetComments
     */
    omit?: SnippetCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnippetCommentsInclude<ExtArgs> | null
  }


  /**
   * Model Stars
   */

  export type AggregateStars = {
    _count: StarsCountAggregateOutputType | null
    _min: StarsMinAggregateOutputType | null
    _max: StarsMaxAggregateOutputType | null
  }

  export type StarsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    snippetId: string | null
  }

  export type StarsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    snippetId: string | null
  }

  export type StarsCountAggregateOutputType = {
    id: number
    userId: number
    snippetId: number
    _all: number
  }


  export type StarsMinAggregateInputType = {
    id?: true
    userId?: true
    snippetId?: true
  }

  export type StarsMaxAggregateInputType = {
    id?: true
    userId?: true
    snippetId?: true
  }

  export type StarsCountAggregateInputType = {
    id?: true
    userId?: true
    snippetId?: true
    _all?: true
  }

  export type StarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stars to aggregate.
     */
    where?: StarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stars
    **/
    _count?: true | StarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StarsMaxAggregateInputType
  }

  export type GetStarsAggregateType<T extends StarsAggregateArgs> = {
        [P in keyof T & keyof AggregateStars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStars[P]>
      : GetScalarType<T[P], AggregateStars[P]>
  }




  export type StarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarsWhereInput
    orderBy?: StarsOrderByWithAggregationInput | StarsOrderByWithAggregationInput[]
    by: StarsScalarFieldEnum[] | StarsScalarFieldEnum
    having?: StarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StarsCountAggregateInputType | true
    _min?: StarsMinAggregateInputType
    _max?: StarsMaxAggregateInputType
  }

  export type StarsGroupByOutputType = {
    id: string
    userId: string
    snippetId: string
    _count: StarsCountAggregateOutputType | null
    _min: StarsMinAggregateOutputType | null
    _max: StarsMaxAggregateOutputType | null
  }

  type GetStarsGroupByPayload<T extends StarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StarsGroupByOutputType[P]>
            : GetScalarType<T[P], StarsGroupByOutputType[P]>
        }
      >
    >


  export type StarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    snippetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    snippets?: boolean | SnippetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stars"]>

  export type StarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    snippetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    snippets?: boolean | SnippetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stars"]>

  export type StarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    snippetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    snippets?: boolean | SnippetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stars"]>

  export type StarsSelectScalar = {
    id?: boolean
    userId?: boolean
    snippetId?: boolean
  }

  export type StarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "snippetId", ExtArgs["result"]["stars"]>
  export type StarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    snippets?: boolean | SnippetsDefaultArgs<ExtArgs>
  }
  export type StarsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    snippets?: boolean | SnippetsDefaultArgs<ExtArgs>
  }
  export type StarsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    snippets?: boolean | SnippetsDefaultArgs<ExtArgs>
  }

  export type $StarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stars"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      snippets: Prisma.$SnippetsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      snippetId: string
    }, ExtArgs["result"]["stars"]>
    composites: {}
  }

  type StarsGetPayload<S extends boolean | null | undefined | StarsDefaultArgs> = $Result.GetResult<Prisma.$StarsPayload, S>

  type StarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StarsCountAggregateInputType | true
    }

  export interface StarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stars'], meta: { name: 'Stars' } }
    /**
     * Find zero or one Stars that matches the filter.
     * @param {StarsFindUniqueArgs} args - Arguments to find a Stars
     * @example
     * // Get one Stars
     * const stars = await prisma.stars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StarsFindUniqueArgs>(args: SelectSubset<T, StarsFindUniqueArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StarsFindUniqueOrThrowArgs} args - Arguments to find a Stars
     * @example
     * // Get one Stars
     * const stars = await prisma.stars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StarsFindUniqueOrThrowArgs>(args: SelectSubset<T, StarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsFindFirstArgs} args - Arguments to find a Stars
     * @example
     * // Get one Stars
     * const stars = await prisma.stars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StarsFindFirstArgs>(args?: SelectSubset<T, StarsFindFirstArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsFindFirstOrThrowArgs} args - Arguments to find a Stars
     * @example
     * // Get one Stars
     * const stars = await prisma.stars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StarsFindFirstOrThrowArgs>(args?: SelectSubset<T, StarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stars
     * const stars = await prisma.stars.findMany()
     * 
     * // Get first 10 Stars
     * const stars = await prisma.stars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const starsWithIdOnly = await prisma.stars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StarsFindManyArgs>(args?: SelectSubset<T, StarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stars.
     * @param {StarsCreateArgs} args - Arguments to create a Stars.
     * @example
     * // Create one Stars
     * const Stars = await prisma.stars.create({
     *   data: {
     *     // ... data to create a Stars
     *   }
     * })
     * 
     */
    create<T extends StarsCreateArgs>(args: SelectSubset<T, StarsCreateArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stars.
     * @param {StarsCreateManyArgs} args - Arguments to create many Stars.
     * @example
     * // Create many Stars
     * const stars = await prisma.stars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StarsCreateManyArgs>(args?: SelectSubset<T, StarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stars and returns the data saved in the database.
     * @param {StarsCreateManyAndReturnArgs} args - Arguments to create many Stars.
     * @example
     * // Create many Stars
     * const stars = await prisma.stars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stars and only return the `id`
     * const starsWithIdOnly = await prisma.stars.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StarsCreateManyAndReturnArgs>(args?: SelectSubset<T, StarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stars.
     * @param {StarsDeleteArgs} args - Arguments to delete one Stars.
     * @example
     * // Delete one Stars
     * const Stars = await prisma.stars.delete({
     *   where: {
     *     // ... filter to delete one Stars
     *   }
     * })
     * 
     */
    delete<T extends StarsDeleteArgs>(args: SelectSubset<T, StarsDeleteArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stars.
     * @param {StarsUpdateArgs} args - Arguments to update one Stars.
     * @example
     * // Update one Stars
     * const stars = await prisma.stars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StarsUpdateArgs>(args: SelectSubset<T, StarsUpdateArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stars.
     * @param {StarsDeleteManyArgs} args - Arguments to filter Stars to delete.
     * @example
     * // Delete a few Stars
     * const { count } = await prisma.stars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StarsDeleteManyArgs>(args?: SelectSubset<T, StarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stars
     * const stars = await prisma.stars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StarsUpdateManyArgs>(args: SelectSubset<T, StarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stars and returns the data updated in the database.
     * @param {StarsUpdateManyAndReturnArgs} args - Arguments to update many Stars.
     * @example
     * // Update many Stars
     * const stars = await prisma.stars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stars and only return the `id`
     * const starsWithIdOnly = await prisma.stars.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StarsUpdateManyAndReturnArgs>(args: SelectSubset<T, StarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stars.
     * @param {StarsUpsertArgs} args - Arguments to update or create a Stars.
     * @example
     * // Update or create a Stars
     * const stars = await prisma.stars.upsert({
     *   create: {
     *     // ... data to create a Stars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stars we want to update
     *   }
     * })
     */
    upsert<T extends StarsUpsertArgs>(args: SelectSubset<T, StarsUpsertArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsCountArgs} args - Arguments to filter Stars to count.
     * @example
     * // Count the number of Stars
     * const count = await prisma.stars.count({
     *   where: {
     *     // ... the filter for the Stars we want to count
     *   }
     * })
    **/
    count<T extends StarsCountArgs>(
      args?: Subset<T, StarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StarsAggregateArgs>(args: Subset<T, StarsAggregateArgs>): Prisma.PrismaPromise<GetStarsAggregateType<T>>

    /**
     * Group by Stars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StarsGroupByArgs['orderBy'] }
        : { orderBy?: StarsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stars model
   */
  readonly fields: StarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    snippets<T extends SnippetsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SnippetsDefaultArgs<ExtArgs>>): Prisma__SnippetsClient<$Result.GetResult<Prisma.$SnippetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stars model
   */
  interface StarsFieldRefs {
    readonly id: FieldRef<"Stars", 'String'>
    readonly userId: FieldRef<"Stars", 'String'>
    readonly snippetId: FieldRef<"Stars", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Stars findUnique
   */
  export type StarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where: StarsWhereUniqueInput
  }

  /**
   * Stars findUniqueOrThrow
   */
  export type StarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where: StarsWhereUniqueInput
  }

  /**
   * Stars findFirst
   */
  export type StarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where?: StarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stars.
     */
    cursor?: StarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stars.
     */
    distinct?: StarsScalarFieldEnum | StarsScalarFieldEnum[]
  }

  /**
   * Stars findFirstOrThrow
   */
  export type StarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where?: StarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stars.
     */
    cursor?: StarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stars.
     */
    distinct?: StarsScalarFieldEnum | StarsScalarFieldEnum[]
  }

  /**
   * Stars findMany
   */
  export type StarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where?: StarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stars.
     */
    cursor?: StarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    distinct?: StarsScalarFieldEnum | StarsScalarFieldEnum[]
  }

  /**
   * Stars create
   */
  export type StarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * The data needed to create a Stars.
     */
    data: XOR<StarsCreateInput, StarsUncheckedCreateInput>
  }

  /**
   * Stars createMany
   */
  export type StarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stars.
     */
    data: StarsCreateManyInput | StarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stars createManyAndReturn
   */
  export type StarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * The data used to create many Stars.
     */
    data: StarsCreateManyInput | StarsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stars update
   */
  export type StarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * The data needed to update a Stars.
     */
    data: XOR<StarsUpdateInput, StarsUncheckedUpdateInput>
    /**
     * Choose, which Stars to update.
     */
    where: StarsWhereUniqueInput
  }

  /**
   * Stars updateMany
   */
  export type StarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stars.
     */
    data: XOR<StarsUpdateManyMutationInput, StarsUncheckedUpdateManyInput>
    /**
     * Filter which Stars to update
     */
    where?: StarsWhereInput
    /**
     * Limit how many Stars to update.
     */
    limit?: number
  }

  /**
   * Stars updateManyAndReturn
   */
  export type StarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * The data used to update Stars.
     */
    data: XOR<StarsUpdateManyMutationInput, StarsUncheckedUpdateManyInput>
    /**
     * Filter which Stars to update
     */
    where?: StarsWhereInput
    /**
     * Limit how many Stars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stars upsert
   */
  export type StarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * The filter to search for the Stars to update in case it exists.
     */
    where: StarsWhereUniqueInput
    /**
     * In case the Stars found by the `where` argument doesn't exist, create a new Stars with this data.
     */
    create: XOR<StarsCreateInput, StarsUncheckedCreateInput>
    /**
     * In case the Stars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StarsUpdateInput, StarsUncheckedUpdateInput>
  }

  /**
   * Stars delete
   */
  export type StarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * Filter which Stars to delete.
     */
    where: StarsWhereUniqueInput
  }

  /**
   * Stars deleteMany
   */
  export type StarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stars to delete
     */
    where?: StarsWhereInput
    /**
     * Limit how many Stars to delete.
     */
    limit?: number
  }

  /**
   * Stars without action
   */
  export type StarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    isPro: 'isPro',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CodeExecutionsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    language: 'language',
    code: 'code',
    output: 'output',
    error: 'error',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CodeExecutionsScalarFieldEnum = (typeof CodeExecutionsScalarFieldEnum)[keyof typeof CodeExecutionsScalarFieldEnum]


  export const SnippetsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    language: 'language',
    code: 'code',
    userName: 'userName'
  };

  export type SnippetsScalarFieldEnum = (typeof SnippetsScalarFieldEnum)[keyof typeof SnippetsScalarFieldEnum]


  export const SnippetCommentsScalarFieldEnum: {
    id: 'id',
    snippetId: 'snippetId',
    userId: 'userId',
    userName: 'userName',
    content: 'content'
  };

  export type SnippetCommentsScalarFieldEnum = (typeof SnippetCommentsScalarFieldEnum)[keyof typeof SnippetCommentsScalarFieldEnum]


  export const StarsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    snippetId: 'snippetId'
  };

  export type StarsScalarFieldEnum = (typeof StarsScalarFieldEnum)[keyof typeof StarsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    isPro?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    codeExecutions?: CodeExecutionsListRelationFilter
    snippetComments?: SnippetCommentsListRelationFilter
    stars?: StarsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isPro?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    codeExecutions?: CodeExecutionsOrderByRelationAggregateInput
    snippetComments?: SnippetCommentsOrderByRelationAggregateInput
    stars?: StarsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    isPro?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    codeExecutions?: CodeExecutionsListRelationFilter
    snippetComments?: SnippetCommentsListRelationFilter
    stars?: StarsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isPro?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    isPro?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CodeExecutionsWhereInput = {
    AND?: CodeExecutionsWhereInput | CodeExecutionsWhereInput[]
    OR?: CodeExecutionsWhereInput[]
    NOT?: CodeExecutionsWhereInput | CodeExecutionsWhereInput[]
    id?: StringFilter<"CodeExecutions"> | string
    userId?: StringFilter<"CodeExecutions"> | string
    language?: StringFilter<"CodeExecutions"> | string
    code?: StringNullableFilter<"CodeExecutions"> | string | null
    output?: StringNullableFilter<"CodeExecutions"> | string | null
    error?: StringNullableFilter<"CodeExecutions"> | string | null
    createdAt?: DateTimeFilter<"CodeExecutions"> | Date | string
    updatedAt?: DateTimeFilter<"CodeExecutions"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CodeExecutionsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    code?: SortOrderInput | SortOrder
    output?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CodeExecutionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CodeExecutionsWhereInput | CodeExecutionsWhereInput[]
    OR?: CodeExecutionsWhereInput[]
    NOT?: CodeExecutionsWhereInput | CodeExecutionsWhereInput[]
    userId?: StringFilter<"CodeExecutions"> | string
    language?: StringFilter<"CodeExecutions"> | string
    code?: StringNullableFilter<"CodeExecutions"> | string | null
    output?: StringNullableFilter<"CodeExecutions"> | string | null
    error?: StringNullableFilter<"CodeExecutions"> | string | null
    createdAt?: DateTimeFilter<"CodeExecutions"> | Date | string
    updatedAt?: DateTimeFilter<"CodeExecutions"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CodeExecutionsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    code?: SortOrderInput | SortOrder
    output?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CodeExecutionsCountOrderByAggregateInput
    _max?: CodeExecutionsMaxOrderByAggregateInput
    _min?: CodeExecutionsMinOrderByAggregateInput
  }

  export type CodeExecutionsScalarWhereWithAggregatesInput = {
    AND?: CodeExecutionsScalarWhereWithAggregatesInput | CodeExecutionsScalarWhereWithAggregatesInput[]
    OR?: CodeExecutionsScalarWhereWithAggregatesInput[]
    NOT?: CodeExecutionsScalarWhereWithAggregatesInput | CodeExecutionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CodeExecutions"> | string
    userId?: StringWithAggregatesFilter<"CodeExecutions"> | string
    language?: StringWithAggregatesFilter<"CodeExecutions"> | string
    code?: StringNullableWithAggregatesFilter<"CodeExecutions"> | string | null
    output?: StringNullableWithAggregatesFilter<"CodeExecutions"> | string | null
    error?: StringNullableWithAggregatesFilter<"CodeExecutions"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CodeExecutions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CodeExecutions"> | Date | string
  }

  export type SnippetsWhereInput = {
    AND?: SnippetsWhereInput | SnippetsWhereInput[]
    OR?: SnippetsWhereInput[]
    NOT?: SnippetsWhereInput | SnippetsWhereInput[]
    id?: StringFilter<"Snippets"> | string
    title?: StringFilter<"Snippets"> | string
    language?: StringFilter<"Snippets"> | string
    code?: StringNullableFilter<"Snippets"> | string | null
    userName?: StringFilter<"Snippets"> | string
    stars?: StarsListRelationFilter
    snippetComments?: SnippetCommentsListRelationFilter
  }

  export type SnippetsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    language?: SortOrder
    code?: SortOrderInput | SortOrder
    userName?: SortOrder
    stars?: StarsOrderByRelationAggregateInput
    snippetComments?: SnippetCommentsOrderByRelationAggregateInput
  }

  export type SnippetsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SnippetsWhereInput | SnippetsWhereInput[]
    OR?: SnippetsWhereInput[]
    NOT?: SnippetsWhereInput | SnippetsWhereInput[]
    title?: StringFilter<"Snippets"> | string
    language?: StringFilter<"Snippets"> | string
    code?: StringNullableFilter<"Snippets"> | string | null
    userName?: StringFilter<"Snippets"> | string
    stars?: StarsListRelationFilter
    snippetComments?: SnippetCommentsListRelationFilter
  }, "id">

  export type SnippetsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    language?: SortOrder
    code?: SortOrderInput | SortOrder
    userName?: SortOrder
    _count?: SnippetsCountOrderByAggregateInput
    _max?: SnippetsMaxOrderByAggregateInput
    _min?: SnippetsMinOrderByAggregateInput
  }

  export type SnippetsScalarWhereWithAggregatesInput = {
    AND?: SnippetsScalarWhereWithAggregatesInput | SnippetsScalarWhereWithAggregatesInput[]
    OR?: SnippetsScalarWhereWithAggregatesInput[]
    NOT?: SnippetsScalarWhereWithAggregatesInput | SnippetsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Snippets"> | string
    title?: StringWithAggregatesFilter<"Snippets"> | string
    language?: StringWithAggregatesFilter<"Snippets"> | string
    code?: StringNullableWithAggregatesFilter<"Snippets"> | string | null
    userName?: StringWithAggregatesFilter<"Snippets"> | string
  }

  export type SnippetCommentsWhereInput = {
    AND?: SnippetCommentsWhereInput | SnippetCommentsWhereInput[]
    OR?: SnippetCommentsWhereInput[]
    NOT?: SnippetCommentsWhereInput | SnippetCommentsWhereInput[]
    id?: StringFilter<"SnippetComments"> | string
    snippetId?: StringFilter<"SnippetComments"> | string
    userId?: StringNullableFilter<"SnippetComments"> | string | null
    userName?: StringFilter<"SnippetComments"> | string
    content?: StringFilter<"SnippetComments"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    snippets?: XOR<SnippetsScalarRelationFilter, SnippetsWhereInput>
  }

  export type SnippetCommentsOrderByWithRelationInput = {
    id?: SortOrder
    snippetId?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrder
    content?: SortOrder
    user?: UserOrderByWithRelationInput
    snippets?: SnippetsOrderByWithRelationInput
  }

  export type SnippetCommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SnippetCommentsWhereInput | SnippetCommentsWhereInput[]
    OR?: SnippetCommentsWhereInput[]
    NOT?: SnippetCommentsWhereInput | SnippetCommentsWhereInput[]
    snippetId?: StringFilter<"SnippetComments"> | string
    userId?: StringNullableFilter<"SnippetComments"> | string | null
    userName?: StringFilter<"SnippetComments"> | string
    content?: StringFilter<"SnippetComments"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    snippets?: XOR<SnippetsScalarRelationFilter, SnippetsWhereInput>
  }, "id">

  export type SnippetCommentsOrderByWithAggregationInput = {
    id?: SortOrder
    snippetId?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrder
    content?: SortOrder
    _count?: SnippetCommentsCountOrderByAggregateInput
    _max?: SnippetCommentsMaxOrderByAggregateInput
    _min?: SnippetCommentsMinOrderByAggregateInput
  }

  export type SnippetCommentsScalarWhereWithAggregatesInput = {
    AND?: SnippetCommentsScalarWhereWithAggregatesInput | SnippetCommentsScalarWhereWithAggregatesInput[]
    OR?: SnippetCommentsScalarWhereWithAggregatesInput[]
    NOT?: SnippetCommentsScalarWhereWithAggregatesInput | SnippetCommentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SnippetComments"> | string
    snippetId?: StringWithAggregatesFilter<"SnippetComments"> | string
    userId?: StringNullableWithAggregatesFilter<"SnippetComments"> | string | null
    userName?: StringWithAggregatesFilter<"SnippetComments"> | string
    content?: StringWithAggregatesFilter<"SnippetComments"> | string
  }

  export type StarsWhereInput = {
    AND?: StarsWhereInput | StarsWhereInput[]
    OR?: StarsWhereInput[]
    NOT?: StarsWhereInput | StarsWhereInput[]
    id?: StringFilter<"Stars"> | string
    userId?: StringFilter<"Stars"> | string
    snippetId?: StringFilter<"Stars"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    snippets?: XOR<SnippetsScalarRelationFilter, SnippetsWhereInput>
  }

  export type StarsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    snippetId?: SortOrder
    user?: UserOrderByWithRelationInput
    snippets?: SnippetsOrderByWithRelationInput
  }

  export type StarsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StarsWhereInput | StarsWhereInput[]
    OR?: StarsWhereInput[]
    NOT?: StarsWhereInput | StarsWhereInput[]
    userId?: StringFilter<"Stars"> | string
    snippetId?: StringFilter<"Stars"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    snippets?: XOR<SnippetsScalarRelationFilter, SnippetsWhereInput>
  }, "id">

  export type StarsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    snippetId?: SortOrder
    _count?: StarsCountOrderByAggregateInput
    _max?: StarsMaxOrderByAggregateInput
    _min?: StarsMinOrderByAggregateInput
  }

  export type StarsScalarWhereWithAggregatesInput = {
    AND?: StarsScalarWhereWithAggregatesInput | StarsScalarWhereWithAggregatesInput[]
    OR?: StarsScalarWhereWithAggregatesInput[]
    NOT?: StarsScalarWhereWithAggregatesInput | StarsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stars"> | string
    userId?: StringWithAggregatesFilter<"Stars"> | string
    snippetId?: StringWithAggregatesFilter<"Stars"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    isPro?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    codeExecutions?: CodeExecutionsCreateNestedManyWithoutUserInput
    snippetComments?: SnippetCommentsCreateNestedManyWithoutUserInput
    stars?: StarsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    isPro?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    codeExecutions?: CodeExecutionsUncheckedCreateNestedManyWithoutUserInput
    snippetComments?: SnippetCommentsUncheckedCreateNestedManyWithoutUserInput
    stars?: StarsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPro?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeExecutions?: CodeExecutionsUpdateManyWithoutUserNestedInput
    snippetComments?: SnippetCommentsUpdateManyWithoutUserNestedInput
    stars?: StarsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPro?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeExecutions?: CodeExecutionsUncheckedUpdateManyWithoutUserNestedInput
    snippetComments?: SnippetCommentsUncheckedUpdateManyWithoutUserNestedInput
    stars?: StarsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    isPro?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPro?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPro?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeExecutionsCreateInput = {
    id?: string
    language: string
    code?: string | null
    output?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCodeExecutionsInput
  }

  export type CodeExecutionsUncheckedCreateInput = {
    id?: string
    userId: string
    language: string
    code?: string | null
    output?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeExecutionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCodeExecutionsNestedInput
  }

  export type CodeExecutionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeExecutionsCreateManyInput = {
    id?: string
    userId: string
    language: string
    code?: string | null
    output?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeExecutionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeExecutionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnippetsCreateInput = {
    id?: string
    title: string
    language: string
    code?: string | null
    userName: string
    stars?: StarsCreateNestedManyWithoutSnippetsInput
    snippetComments?: SnippetCommentsCreateNestedManyWithoutSnippetsInput
  }

  export type SnippetsUncheckedCreateInput = {
    id?: string
    title: string
    language: string
    code?: string | null
    userName: string
    stars?: StarsUncheckedCreateNestedManyWithoutSnippetsInput
    snippetComments?: SnippetCommentsUncheckedCreateNestedManyWithoutSnippetsInput
  }

  export type SnippetsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    stars?: StarsUpdateManyWithoutSnippetsNestedInput
    snippetComments?: SnippetCommentsUpdateManyWithoutSnippetsNestedInput
  }

  export type SnippetsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    stars?: StarsUncheckedUpdateManyWithoutSnippetsNestedInput
    snippetComments?: SnippetCommentsUncheckedUpdateManyWithoutSnippetsNestedInput
  }

  export type SnippetsCreateManyInput = {
    id?: string
    title: string
    language: string
    code?: string | null
    userName: string
  }

  export type SnippetsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
  }

  export type SnippetsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
  }

  export type SnippetCommentsCreateInput = {
    id?: string
    userName: string
    content: string
    user?: UserCreateNestedOneWithoutSnippetCommentsInput
    snippets: SnippetsCreateNestedOneWithoutSnippetCommentsInput
  }

  export type SnippetCommentsUncheckedCreateInput = {
    id?: string
    snippetId: string
    userId?: string | null
    userName: string
    content: string
  }

  export type SnippetCommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutSnippetCommentsNestedInput
    snippets?: SnippetsUpdateOneRequiredWithoutSnippetCommentsNestedInput
  }

  export type SnippetCommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    snippetId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type SnippetCommentsCreateManyInput = {
    id?: string
    snippetId: string
    userId?: string | null
    userName: string
    content: string
  }

  export type SnippetCommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type SnippetCommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    snippetId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type StarsCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutStarsInput
    snippets: SnippetsCreateNestedOneWithoutStarsInput
  }

  export type StarsUncheckedCreateInput = {
    id?: string
    userId: string
    snippetId: string
  }

  export type StarsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStarsNestedInput
    snippets?: SnippetsUpdateOneRequiredWithoutStarsNestedInput
  }

  export type StarsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    snippetId?: StringFieldUpdateOperationsInput | string
  }

  export type StarsCreateManyInput = {
    id?: string
    userId: string
    snippetId: string
  }

  export type StarsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type StarsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    snippetId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CodeExecutionsListRelationFilter = {
    every?: CodeExecutionsWhereInput
    some?: CodeExecutionsWhereInput
    none?: CodeExecutionsWhereInput
  }

  export type SnippetCommentsListRelationFilter = {
    every?: SnippetCommentsWhereInput
    some?: SnippetCommentsWhereInput
    none?: SnippetCommentsWhereInput
  }

  export type StarsListRelationFilter = {
    every?: StarsWhereInput
    some?: StarsWhereInput
    none?: StarsWhereInput
  }

  export type CodeExecutionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SnippetCommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StarsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isPro?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isPro?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isPro?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CodeExecutionsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    code?: SortOrder
    output?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodeExecutionsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    code?: SortOrder
    output?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodeExecutionsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    code?: SortOrder
    output?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SnippetsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    language?: SortOrder
    code?: SortOrder
    userName?: SortOrder
  }

  export type SnippetsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    language?: SortOrder
    code?: SortOrder
    userName?: SortOrder
  }

  export type SnippetsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    language?: SortOrder
    code?: SortOrder
    userName?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SnippetsScalarRelationFilter = {
    is?: SnippetsWhereInput
    isNot?: SnippetsWhereInput
  }

  export type SnippetCommentsCountOrderByAggregateInput = {
    id?: SortOrder
    snippetId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    content?: SortOrder
  }

  export type SnippetCommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    snippetId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    content?: SortOrder
  }

  export type SnippetCommentsMinOrderByAggregateInput = {
    id?: SortOrder
    snippetId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    content?: SortOrder
  }

  export type StarsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    snippetId?: SortOrder
  }

  export type StarsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    snippetId?: SortOrder
  }

  export type StarsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    snippetId?: SortOrder
  }

  export type CodeExecutionsCreateNestedManyWithoutUserInput = {
    create?: XOR<CodeExecutionsCreateWithoutUserInput, CodeExecutionsUncheckedCreateWithoutUserInput> | CodeExecutionsCreateWithoutUserInput[] | CodeExecutionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodeExecutionsCreateOrConnectWithoutUserInput | CodeExecutionsCreateOrConnectWithoutUserInput[]
    createMany?: CodeExecutionsCreateManyUserInputEnvelope
    connect?: CodeExecutionsWhereUniqueInput | CodeExecutionsWhereUniqueInput[]
  }

  export type SnippetCommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<SnippetCommentsCreateWithoutUserInput, SnippetCommentsUncheckedCreateWithoutUserInput> | SnippetCommentsCreateWithoutUserInput[] | SnippetCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SnippetCommentsCreateOrConnectWithoutUserInput | SnippetCommentsCreateOrConnectWithoutUserInput[]
    createMany?: SnippetCommentsCreateManyUserInputEnvelope
    connect?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
  }

  export type StarsCreateNestedManyWithoutUserInput = {
    create?: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput> | StarsCreateWithoutUserInput[] | StarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutUserInput | StarsCreateOrConnectWithoutUserInput[]
    createMany?: StarsCreateManyUserInputEnvelope
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
  }

  export type CodeExecutionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CodeExecutionsCreateWithoutUserInput, CodeExecutionsUncheckedCreateWithoutUserInput> | CodeExecutionsCreateWithoutUserInput[] | CodeExecutionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodeExecutionsCreateOrConnectWithoutUserInput | CodeExecutionsCreateOrConnectWithoutUserInput[]
    createMany?: CodeExecutionsCreateManyUserInputEnvelope
    connect?: CodeExecutionsWhereUniqueInput | CodeExecutionsWhereUniqueInput[]
  }

  export type SnippetCommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SnippetCommentsCreateWithoutUserInput, SnippetCommentsUncheckedCreateWithoutUserInput> | SnippetCommentsCreateWithoutUserInput[] | SnippetCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SnippetCommentsCreateOrConnectWithoutUserInput | SnippetCommentsCreateOrConnectWithoutUserInput[]
    createMany?: SnippetCommentsCreateManyUserInputEnvelope
    connect?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
  }

  export type StarsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput> | StarsCreateWithoutUserInput[] | StarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutUserInput | StarsCreateOrConnectWithoutUserInput[]
    createMany?: StarsCreateManyUserInputEnvelope
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CodeExecutionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CodeExecutionsCreateWithoutUserInput, CodeExecutionsUncheckedCreateWithoutUserInput> | CodeExecutionsCreateWithoutUserInput[] | CodeExecutionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodeExecutionsCreateOrConnectWithoutUserInput | CodeExecutionsCreateOrConnectWithoutUserInput[]
    upsert?: CodeExecutionsUpsertWithWhereUniqueWithoutUserInput | CodeExecutionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CodeExecutionsCreateManyUserInputEnvelope
    set?: CodeExecutionsWhereUniqueInput | CodeExecutionsWhereUniqueInput[]
    disconnect?: CodeExecutionsWhereUniqueInput | CodeExecutionsWhereUniqueInput[]
    delete?: CodeExecutionsWhereUniqueInput | CodeExecutionsWhereUniqueInput[]
    connect?: CodeExecutionsWhereUniqueInput | CodeExecutionsWhereUniqueInput[]
    update?: CodeExecutionsUpdateWithWhereUniqueWithoutUserInput | CodeExecutionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CodeExecutionsUpdateManyWithWhereWithoutUserInput | CodeExecutionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CodeExecutionsScalarWhereInput | CodeExecutionsScalarWhereInput[]
  }

  export type SnippetCommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SnippetCommentsCreateWithoutUserInput, SnippetCommentsUncheckedCreateWithoutUserInput> | SnippetCommentsCreateWithoutUserInput[] | SnippetCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SnippetCommentsCreateOrConnectWithoutUserInput | SnippetCommentsCreateOrConnectWithoutUserInput[]
    upsert?: SnippetCommentsUpsertWithWhereUniqueWithoutUserInput | SnippetCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SnippetCommentsCreateManyUserInputEnvelope
    set?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    disconnect?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    delete?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    connect?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    update?: SnippetCommentsUpdateWithWhereUniqueWithoutUserInput | SnippetCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SnippetCommentsUpdateManyWithWhereWithoutUserInput | SnippetCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SnippetCommentsScalarWhereInput | SnippetCommentsScalarWhereInput[]
  }

  export type StarsUpdateManyWithoutUserNestedInput = {
    create?: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput> | StarsCreateWithoutUserInput[] | StarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutUserInput | StarsCreateOrConnectWithoutUserInput[]
    upsert?: StarsUpsertWithWhereUniqueWithoutUserInput | StarsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StarsCreateManyUserInputEnvelope
    set?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    disconnect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    delete?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    update?: StarsUpdateWithWhereUniqueWithoutUserInput | StarsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StarsUpdateManyWithWhereWithoutUserInput | StarsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StarsScalarWhereInput | StarsScalarWhereInput[]
  }

  export type CodeExecutionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CodeExecutionsCreateWithoutUserInput, CodeExecutionsUncheckedCreateWithoutUserInput> | CodeExecutionsCreateWithoutUserInput[] | CodeExecutionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodeExecutionsCreateOrConnectWithoutUserInput | CodeExecutionsCreateOrConnectWithoutUserInput[]
    upsert?: CodeExecutionsUpsertWithWhereUniqueWithoutUserInput | CodeExecutionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CodeExecutionsCreateManyUserInputEnvelope
    set?: CodeExecutionsWhereUniqueInput | CodeExecutionsWhereUniqueInput[]
    disconnect?: CodeExecutionsWhereUniqueInput | CodeExecutionsWhereUniqueInput[]
    delete?: CodeExecutionsWhereUniqueInput | CodeExecutionsWhereUniqueInput[]
    connect?: CodeExecutionsWhereUniqueInput | CodeExecutionsWhereUniqueInput[]
    update?: CodeExecutionsUpdateWithWhereUniqueWithoutUserInput | CodeExecutionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CodeExecutionsUpdateManyWithWhereWithoutUserInput | CodeExecutionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CodeExecutionsScalarWhereInput | CodeExecutionsScalarWhereInput[]
  }

  export type SnippetCommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SnippetCommentsCreateWithoutUserInput, SnippetCommentsUncheckedCreateWithoutUserInput> | SnippetCommentsCreateWithoutUserInput[] | SnippetCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SnippetCommentsCreateOrConnectWithoutUserInput | SnippetCommentsCreateOrConnectWithoutUserInput[]
    upsert?: SnippetCommentsUpsertWithWhereUniqueWithoutUserInput | SnippetCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SnippetCommentsCreateManyUserInputEnvelope
    set?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    disconnect?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    delete?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    connect?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    update?: SnippetCommentsUpdateWithWhereUniqueWithoutUserInput | SnippetCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SnippetCommentsUpdateManyWithWhereWithoutUserInput | SnippetCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SnippetCommentsScalarWhereInput | SnippetCommentsScalarWhereInput[]
  }

  export type StarsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput> | StarsCreateWithoutUserInput[] | StarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutUserInput | StarsCreateOrConnectWithoutUserInput[]
    upsert?: StarsUpsertWithWhereUniqueWithoutUserInput | StarsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StarsCreateManyUserInputEnvelope
    set?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    disconnect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    delete?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    update?: StarsUpdateWithWhereUniqueWithoutUserInput | StarsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StarsUpdateManyWithWhereWithoutUserInput | StarsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StarsScalarWhereInput | StarsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCodeExecutionsInput = {
    create?: XOR<UserCreateWithoutCodeExecutionsInput, UserUncheckedCreateWithoutCodeExecutionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCodeExecutionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutCodeExecutionsNestedInput = {
    create?: XOR<UserCreateWithoutCodeExecutionsInput, UserUncheckedCreateWithoutCodeExecutionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCodeExecutionsInput
    upsert?: UserUpsertWithoutCodeExecutionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCodeExecutionsInput, UserUpdateWithoutCodeExecutionsInput>, UserUncheckedUpdateWithoutCodeExecutionsInput>
  }

  export type StarsCreateNestedManyWithoutSnippetsInput = {
    create?: XOR<StarsCreateWithoutSnippetsInput, StarsUncheckedCreateWithoutSnippetsInput> | StarsCreateWithoutSnippetsInput[] | StarsUncheckedCreateWithoutSnippetsInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutSnippetsInput | StarsCreateOrConnectWithoutSnippetsInput[]
    createMany?: StarsCreateManySnippetsInputEnvelope
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
  }

  export type SnippetCommentsCreateNestedManyWithoutSnippetsInput = {
    create?: XOR<SnippetCommentsCreateWithoutSnippetsInput, SnippetCommentsUncheckedCreateWithoutSnippetsInput> | SnippetCommentsCreateWithoutSnippetsInput[] | SnippetCommentsUncheckedCreateWithoutSnippetsInput[]
    connectOrCreate?: SnippetCommentsCreateOrConnectWithoutSnippetsInput | SnippetCommentsCreateOrConnectWithoutSnippetsInput[]
    createMany?: SnippetCommentsCreateManySnippetsInputEnvelope
    connect?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
  }

  export type StarsUncheckedCreateNestedManyWithoutSnippetsInput = {
    create?: XOR<StarsCreateWithoutSnippetsInput, StarsUncheckedCreateWithoutSnippetsInput> | StarsCreateWithoutSnippetsInput[] | StarsUncheckedCreateWithoutSnippetsInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutSnippetsInput | StarsCreateOrConnectWithoutSnippetsInput[]
    createMany?: StarsCreateManySnippetsInputEnvelope
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
  }

  export type SnippetCommentsUncheckedCreateNestedManyWithoutSnippetsInput = {
    create?: XOR<SnippetCommentsCreateWithoutSnippetsInput, SnippetCommentsUncheckedCreateWithoutSnippetsInput> | SnippetCommentsCreateWithoutSnippetsInput[] | SnippetCommentsUncheckedCreateWithoutSnippetsInput[]
    connectOrCreate?: SnippetCommentsCreateOrConnectWithoutSnippetsInput | SnippetCommentsCreateOrConnectWithoutSnippetsInput[]
    createMany?: SnippetCommentsCreateManySnippetsInputEnvelope
    connect?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
  }

  export type StarsUpdateManyWithoutSnippetsNestedInput = {
    create?: XOR<StarsCreateWithoutSnippetsInput, StarsUncheckedCreateWithoutSnippetsInput> | StarsCreateWithoutSnippetsInput[] | StarsUncheckedCreateWithoutSnippetsInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutSnippetsInput | StarsCreateOrConnectWithoutSnippetsInput[]
    upsert?: StarsUpsertWithWhereUniqueWithoutSnippetsInput | StarsUpsertWithWhereUniqueWithoutSnippetsInput[]
    createMany?: StarsCreateManySnippetsInputEnvelope
    set?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    disconnect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    delete?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    update?: StarsUpdateWithWhereUniqueWithoutSnippetsInput | StarsUpdateWithWhereUniqueWithoutSnippetsInput[]
    updateMany?: StarsUpdateManyWithWhereWithoutSnippetsInput | StarsUpdateManyWithWhereWithoutSnippetsInput[]
    deleteMany?: StarsScalarWhereInput | StarsScalarWhereInput[]
  }

  export type SnippetCommentsUpdateManyWithoutSnippetsNestedInput = {
    create?: XOR<SnippetCommentsCreateWithoutSnippetsInput, SnippetCommentsUncheckedCreateWithoutSnippetsInput> | SnippetCommentsCreateWithoutSnippetsInput[] | SnippetCommentsUncheckedCreateWithoutSnippetsInput[]
    connectOrCreate?: SnippetCommentsCreateOrConnectWithoutSnippetsInput | SnippetCommentsCreateOrConnectWithoutSnippetsInput[]
    upsert?: SnippetCommentsUpsertWithWhereUniqueWithoutSnippetsInput | SnippetCommentsUpsertWithWhereUniqueWithoutSnippetsInput[]
    createMany?: SnippetCommentsCreateManySnippetsInputEnvelope
    set?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    disconnect?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    delete?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    connect?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    update?: SnippetCommentsUpdateWithWhereUniqueWithoutSnippetsInput | SnippetCommentsUpdateWithWhereUniqueWithoutSnippetsInput[]
    updateMany?: SnippetCommentsUpdateManyWithWhereWithoutSnippetsInput | SnippetCommentsUpdateManyWithWhereWithoutSnippetsInput[]
    deleteMany?: SnippetCommentsScalarWhereInput | SnippetCommentsScalarWhereInput[]
  }

  export type StarsUncheckedUpdateManyWithoutSnippetsNestedInput = {
    create?: XOR<StarsCreateWithoutSnippetsInput, StarsUncheckedCreateWithoutSnippetsInput> | StarsCreateWithoutSnippetsInput[] | StarsUncheckedCreateWithoutSnippetsInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutSnippetsInput | StarsCreateOrConnectWithoutSnippetsInput[]
    upsert?: StarsUpsertWithWhereUniqueWithoutSnippetsInput | StarsUpsertWithWhereUniqueWithoutSnippetsInput[]
    createMany?: StarsCreateManySnippetsInputEnvelope
    set?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    disconnect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    delete?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    update?: StarsUpdateWithWhereUniqueWithoutSnippetsInput | StarsUpdateWithWhereUniqueWithoutSnippetsInput[]
    updateMany?: StarsUpdateManyWithWhereWithoutSnippetsInput | StarsUpdateManyWithWhereWithoutSnippetsInput[]
    deleteMany?: StarsScalarWhereInput | StarsScalarWhereInput[]
  }

  export type SnippetCommentsUncheckedUpdateManyWithoutSnippetsNestedInput = {
    create?: XOR<SnippetCommentsCreateWithoutSnippetsInput, SnippetCommentsUncheckedCreateWithoutSnippetsInput> | SnippetCommentsCreateWithoutSnippetsInput[] | SnippetCommentsUncheckedCreateWithoutSnippetsInput[]
    connectOrCreate?: SnippetCommentsCreateOrConnectWithoutSnippetsInput | SnippetCommentsCreateOrConnectWithoutSnippetsInput[]
    upsert?: SnippetCommentsUpsertWithWhereUniqueWithoutSnippetsInput | SnippetCommentsUpsertWithWhereUniqueWithoutSnippetsInput[]
    createMany?: SnippetCommentsCreateManySnippetsInputEnvelope
    set?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    disconnect?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    delete?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    connect?: SnippetCommentsWhereUniqueInput | SnippetCommentsWhereUniqueInput[]
    update?: SnippetCommentsUpdateWithWhereUniqueWithoutSnippetsInput | SnippetCommentsUpdateWithWhereUniqueWithoutSnippetsInput[]
    updateMany?: SnippetCommentsUpdateManyWithWhereWithoutSnippetsInput | SnippetCommentsUpdateManyWithWhereWithoutSnippetsInput[]
    deleteMany?: SnippetCommentsScalarWhereInput | SnippetCommentsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSnippetCommentsInput = {
    create?: XOR<UserCreateWithoutSnippetCommentsInput, UserUncheckedCreateWithoutSnippetCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSnippetCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type SnippetsCreateNestedOneWithoutSnippetCommentsInput = {
    create?: XOR<SnippetsCreateWithoutSnippetCommentsInput, SnippetsUncheckedCreateWithoutSnippetCommentsInput>
    connectOrCreate?: SnippetsCreateOrConnectWithoutSnippetCommentsInput
    connect?: SnippetsWhereUniqueInput
  }

  export type UserUpdateOneWithoutSnippetCommentsNestedInput = {
    create?: XOR<UserCreateWithoutSnippetCommentsInput, UserUncheckedCreateWithoutSnippetCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSnippetCommentsInput
    upsert?: UserUpsertWithoutSnippetCommentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSnippetCommentsInput, UserUpdateWithoutSnippetCommentsInput>, UserUncheckedUpdateWithoutSnippetCommentsInput>
  }

  export type SnippetsUpdateOneRequiredWithoutSnippetCommentsNestedInput = {
    create?: XOR<SnippetsCreateWithoutSnippetCommentsInput, SnippetsUncheckedCreateWithoutSnippetCommentsInput>
    connectOrCreate?: SnippetsCreateOrConnectWithoutSnippetCommentsInput
    upsert?: SnippetsUpsertWithoutSnippetCommentsInput
    connect?: SnippetsWhereUniqueInput
    update?: XOR<XOR<SnippetsUpdateToOneWithWhereWithoutSnippetCommentsInput, SnippetsUpdateWithoutSnippetCommentsInput>, SnippetsUncheckedUpdateWithoutSnippetCommentsInput>
  }

  export type UserCreateNestedOneWithoutStarsInput = {
    create?: XOR<UserCreateWithoutStarsInput, UserUncheckedCreateWithoutStarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStarsInput
    connect?: UserWhereUniqueInput
  }

  export type SnippetsCreateNestedOneWithoutStarsInput = {
    create?: XOR<SnippetsCreateWithoutStarsInput, SnippetsUncheckedCreateWithoutStarsInput>
    connectOrCreate?: SnippetsCreateOrConnectWithoutStarsInput
    connect?: SnippetsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStarsNestedInput = {
    create?: XOR<UserCreateWithoutStarsInput, UserUncheckedCreateWithoutStarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStarsInput
    upsert?: UserUpsertWithoutStarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStarsInput, UserUpdateWithoutStarsInput>, UserUncheckedUpdateWithoutStarsInput>
  }

  export type SnippetsUpdateOneRequiredWithoutStarsNestedInput = {
    create?: XOR<SnippetsCreateWithoutStarsInput, SnippetsUncheckedCreateWithoutStarsInput>
    connectOrCreate?: SnippetsCreateOrConnectWithoutStarsInput
    upsert?: SnippetsUpsertWithoutStarsInput
    connect?: SnippetsWhereUniqueInput
    update?: XOR<XOR<SnippetsUpdateToOneWithWhereWithoutStarsInput, SnippetsUpdateWithoutStarsInput>, SnippetsUncheckedUpdateWithoutStarsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CodeExecutionsCreateWithoutUserInput = {
    id?: string
    language: string
    code?: string | null
    output?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeExecutionsUncheckedCreateWithoutUserInput = {
    id?: string
    language: string
    code?: string | null
    output?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeExecutionsCreateOrConnectWithoutUserInput = {
    where: CodeExecutionsWhereUniqueInput
    create: XOR<CodeExecutionsCreateWithoutUserInput, CodeExecutionsUncheckedCreateWithoutUserInput>
  }

  export type CodeExecutionsCreateManyUserInputEnvelope = {
    data: CodeExecutionsCreateManyUserInput | CodeExecutionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SnippetCommentsCreateWithoutUserInput = {
    id?: string
    userName: string
    content: string
    snippets: SnippetsCreateNestedOneWithoutSnippetCommentsInput
  }

  export type SnippetCommentsUncheckedCreateWithoutUserInput = {
    id?: string
    snippetId: string
    userName: string
    content: string
  }

  export type SnippetCommentsCreateOrConnectWithoutUserInput = {
    where: SnippetCommentsWhereUniqueInput
    create: XOR<SnippetCommentsCreateWithoutUserInput, SnippetCommentsUncheckedCreateWithoutUserInput>
  }

  export type SnippetCommentsCreateManyUserInputEnvelope = {
    data: SnippetCommentsCreateManyUserInput | SnippetCommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StarsCreateWithoutUserInput = {
    id?: string
    snippets: SnippetsCreateNestedOneWithoutStarsInput
  }

  export type StarsUncheckedCreateWithoutUserInput = {
    id?: string
    snippetId: string
  }

  export type StarsCreateOrConnectWithoutUserInput = {
    where: StarsWhereUniqueInput
    create: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput>
  }

  export type StarsCreateManyUserInputEnvelope = {
    data: StarsCreateManyUserInput | StarsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CodeExecutionsUpsertWithWhereUniqueWithoutUserInput = {
    where: CodeExecutionsWhereUniqueInput
    update: XOR<CodeExecutionsUpdateWithoutUserInput, CodeExecutionsUncheckedUpdateWithoutUserInput>
    create: XOR<CodeExecutionsCreateWithoutUserInput, CodeExecutionsUncheckedCreateWithoutUserInput>
  }

  export type CodeExecutionsUpdateWithWhereUniqueWithoutUserInput = {
    where: CodeExecutionsWhereUniqueInput
    data: XOR<CodeExecutionsUpdateWithoutUserInput, CodeExecutionsUncheckedUpdateWithoutUserInput>
  }

  export type CodeExecutionsUpdateManyWithWhereWithoutUserInput = {
    where: CodeExecutionsScalarWhereInput
    data: XOR<CodeExecutionsUpdateManyMutationInput, CodeExecutionsUncheckedUpdateManyWithoutUserInput>
  }

  export type CodeExecutionsScalarWhereInput = {
    AND?: CodeExecutionsScalarWhereInput | CodeExecutionsScalarWhereInput[]
    OR?: CodeExecutionsScalarWhereInput[]
    NOT?: CodeExecutionsScalarWhereInput | CodeExecutionsScalarWhereInput[]
    id?: StringFilter<"CodeExecutions"> | string
    userId?: StringFilter<"CodeExecutions"> | string
    language?: StringFilter<"CodeExecutions"> | string
    code?: StringNullableFilter<"CodeExecutions"> | string | null
    output?: StringNullableFilter<"CodeExecutions"> | string | null
    error?: StringNullableFilter<"CodeExecutions"> | string | null
    createdAt?: DateTimeFilter<"CodeExecutions"> | Date | string
    updatedAt?: DateTimeFilter<"CodeExecutions"> | Date | string
  }

  export type SnippetCommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: SnippetCommentsWhereUniqueInput
    update: XOR<SnippetCommentsUpdateWithoutUserInput, SnippetCommentsUncheckedUpdateWithoutUserInput>
    create: XOR<SnippetCommentsCreateWithoutUserInput, SnippetCommentsUncheckedCreateWithoutUserInput>
  }

  export type SnippetCommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: SnippetCommentsWhereUniqueInput
    data: XOR<SnippetCommentsUpdateWithoutUserInput, SnippetCommentsUncheckedUpdateWithoutUserInput>
  }

  export type SnippetCommentsUpdateManyWithWhereWithoutUserInput = {
    where: SnippetCommentsScalarWhereInput
    data: XOR<SnippetCommentsUpdateManyMutationInput, SnippetCommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type SnippetCommentsScalarWhereInput = {
    AND?: SnippetCommentsScalarWhereInput | SnippetCommentsScalarWhereInput[]
    OR?: SnippetCommentsScalarWhereInput[]
    NOT?: SnippetCommentsScalarWhereInput | SnippetCommentsScalarWhereInput[]
    id?: StringFilter<"SnippetComments"> | string
    snippetId?: StringFilter<"SnippetComments"> | string
    userId?: StringNullableFilter<"SnippetComments"> | string | null
    userName?: StringFilter<"SnippetComments"> | string
    content?: StringFilter<"SnippetComments"> | string
  }

  export type StarsUpsertWithWhereUniqueWithoutUserInput = {
    where: StarsWhereUniqueInput
    update: XOR<StarsUpdateWithoutUserInput, StarsUncheckedUpdateWithoutUserInput>
    create: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput>
  }

  export type StarsUpdateWithWhereUniqueWithoutUserInput = {
    where: StarsWhereUniqueInput
    data: XOR<StarsUpdateWithoutUserInput, StarsUncheckedUpdateWithoutUserInput>
  }

  export type StarsUpdateManyWithWhereWithoutUserInput = {
    where: StarsScalarWhereInput
    data: XOR<StarsUpdateManyMutationInput, StarsUncheckedUpdateManyWithoutUserInput>
  }

  export type StarsScalarWhereInput = {
    AND?: StarsScalarWhereInput | StarsScalarWhereInput[]
    OR?: StarsScalarWhereInput[]
    NOT?: StarsScalarWhereInput | StarsScalarWhereInput[]
    id?: StringFilter<"Stars"> | string
    userId?: StringFilter<"Stars"> | string
    snippetId?: StringFilter<"Stars"> | string
  }

  export type UserCreateWithoutCodeExecutionsInput = {
    id?: string
    email: string
    name: string
    isPro?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    snippetComments?: SnippetCommentsCreateNestedManyWithoutUserInput
    stars?: StarsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCodeExecutionsInput = {
    id?: string
    email: string
    name: string
    isPro?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    snippetComments?: SnippetCommentsUncheckedCreateNestedManyWithoutUserInput
    stars?: StarsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCodeExecutionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCodeExecutionsInput, UserUncheckedCreateWithoutCodeExecutionsInput>
  }

  export type UserUpsertWithoutCodeExecutionsInput = {
    update: XOR<UserUpdateWithoutCodeExecutionsInput, UserUncheckedUpdateWithoutCodeExecutionsInput>
    create: XOR<UserCreateWithoutCodeExecutionsInput, UserUncheckedCreateWithoutCodeExecutionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCodeExecutionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCodeExecutionsInput, UserUncheckedUpdateWithoutCodeExecutionsInput>
  }

  export type UserUpdateWithoutCodeExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPro?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snippetComments?: SnippetCommentsUpdateManyWithoutUserNestedInput
    stars?: StarsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCodeExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPro?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snippetComments?: SnippetCommentsUncheckedUpdateManyWithoutUserNestedInput
    stars?: StarsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StarsCreateWithoutSnippetsInput = {
    id?: string
    user: UserCreateNestedOneWithoutStarsInput
  }

  export type StarsUncheckedCreateWithoutSnippetsInput = {
    id?: string
    userId: string
  }

  export type StarsCreateOrConnectWithoutSnippetsInput = {
    where: StarsWhereUniqueInput
    create: XOR<StarsCreateWithoutSnippetsInput, StarsUncheckedCreateWithoutSnippetsInput>
  }

  export type StarsCreateManySnippetsInputEnvelope = {
    data: StarsCreateManySnippetsInput | StarsCreateManySnippetsInput[]
    skipDuplicates?: boolean
  }

  export type SnippetCommentsCreateWithoutSnippetsInput = {
    id?: string
    userName: string
    content: string
    user?: UserCreateNestedOneWithoutSnippetCommentsInput
  }

  export type SnippetCommentsUncheckedCreateWithoutSnippetsInput = {
    id?: string
    userId?: string | null
    userName: string
    content: string
  }

  export type SnippetCommentsCreateOrConnectWithoutSnippetsInput = {
    where: SnippetCommentsWhereUniqueInput
    create: XOR<SnippetCommentsCreateWithoutSnippetsInput, SnippetCommentsUncheckedCreateWithoutSnippetsInput>
  }

  export type SnippetCommentsCreateManySnippetsInputEnvelope = {
    data: SnippetCommentsCreateManySnippetsInput | SnippetCommentsCreateManySnippetsInput[]
    skipDuplicates?: boolean
  }

  export type StarsUpsertWithWhereUniqueWithoutSnippetsInput = {
    where: StarsWhereUniqueInput
    update: XOR<StarsUpdateWithoutSnippetsInput, StarsUncheckedUpdateWithoutSnippetsInput>
    create: XOR<StarsCreateWithoutSnippetsInput, StarsUncheckedCreateWithoutSnippetsInput>
  }

  export type StarsUpdateWithWhereUniqueWithoutSnippetsInput = {
    where: StarsWhereUniqueInput
    data: XOR<StarsUpdateWithoutSnippetsInput, StarsUncheckedUpdateWithoutSnippetsInput>
  }

  export type StarsUpdateManyWithWhereWithoutSnippetsInput = {
    where: StarsScalarWhereInput
    data: XOR<StarsUpdateManyMutationInput, StarsUncheckedUpdateManyWithoutSnippetsInput>
  }

  export type SnippetCommentsUpsertWithWhereUniqueWithoutSnippetsInput = {
    where: SnippetCommentsWhereUniqueInput
    update: XOR<SnippetCommentsUpdateWithoutSnippetsInput, SnippetCommentsUncheckedUpdateWithoutSnippetsInput>
    create: XOR<SnippetCommentsCreateWithoutSnippetsInput, SnippetCommentsUncheckedCreateWithoutSnippetsInput>
  }

  export type SnippetCommentsUpdateWithWhereUniqueWithoutSnippetsInput = {
    where: SnippetCommentsWhereUniqueInput
    data: XOR<SnippetCommentsUpdateWithoutSnippetsInput, SnippetCommentsUncheckedUpdateWithoutSnippetsInput>
  }

  export type SnippetCommentsUpdateManyWithWhereWithoutSnippetsInput = {
    where: SnippetCommentsScalarWhereInput
    data: XOR<SnippetCommentsUpdateManyMutationInput, SnippetCommentsUncheckedUpdateManyWithoutSnippetsInput>
  }

  export type UserCreateWithoutSnippetCommentsInput = {
    id?: string
    email: string
    name: string
    isPro?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    codeExecutions?: CodeExecutionsCreateNestedManyWithoutUserInput
    stars?: StarsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSnippetCommentsInput = {
    id?: string
    email: string
    name: string
    isPro?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    codeExecutions?: CodeExecutionsUncheckedCreateNestedManyWithoutUserInput
    stars?: StarsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSnippetCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSnippetCommentsInput, UserUncheckedCreateWithoutSnippetCommentsInput>
  }

  export type SnippetsCreateWithoutSnippetCommentsInput = {
    id?: string
    title: string
    language: string
    code?: string | null
    userName: string
    stars?: StarsCreateNestedManyWithoutSnippetsInput
  }

  export type SnippetsUncheckedCreateWithoutSnippetCommentsInput = {
    id?: string
    title: string
    language: string
    code?: string | null
    userName: string
    stars?: StarsUncheckedCreateNestedManyWithoutSnippetsInput
  }

  export type SnippetsCreateOrConnectWithoutSnippetCommentsInput = {
    where: SnippetsWhereUniqueInput
    create: XOR<SnippetsCreateWithoutSnippetCommentsInput, SnippetsUncheckedCreateWithoutSnippetCommentsInput>
  }

  export type UserUpsertWithoutSnippetCommentsInput = {
    update: XOR<UserUpdateWithoutSnippetCommentsInput, UserUncheckedUpdateWithoutSnippetCommentsInput>
    create: XOR<UserCreateWithoutSnippetCommentsInput, UserUncheckedCreateWithoutSnippetCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSnippetCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSnippetCommentsInput, UserUncheckedUpdateWithoutSnippetCommentsInput>
  }

  export type UserUpdateWithoutSnippetCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPro?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeExecutions?: CodeExecutionsUpdateManyWithoutUserNestedInput
    stars?: StarsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSnippetCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPro?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeExecutions?: CodeExecutionsUncheckedUpdateManyWithoutUserNestedInput
    stars?: StarsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SnippetsUpsertWithoutSnippetCommentsInput = {
    update: XOR<SnippetsUpdateWithoutSnippetCommentsInput, SnippetsUncheckedUpdateWithoutSnippetCommentsInput>
    create: XOR<SnippetsCreateWithoutSnippetCommentsInput, SnippetsUncheckedCreateWithoutSnippetCommentsInput>
    where?: SnippetsWhereInput
  }

  export type SnippetsUpdateToOneWithWhereWithoutSnippetCommentsInput = {
    where?: SnippetsWhereInput
    data: XOR<SnippetsUpdateWithoutSnippetCommentsInput, SnippetsUncheckedUpdateWithoutSnippetCommentsInput>
  }

  export type SnippetsUpdateWithoutSnippetCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    stars?: StarsUpdateManyWithoutSnippetsNestedInput
  }

  export type SnippetsUncheckedUpdateWithoutSnippetCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    stars?: StarsUncheckedUpdateManyWithoutSnippetsNestedInput
  }

  export type UserCreateWithoutStarsInput = {
    id?: string
    email: string
    name: string
    isPro?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    codeExecutions?: CodeExecutionsCreateNestedManyWithoutUserInput
    snippetComments?: SnippetCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStarsInput = {
    id?: string
    email: string
    name: string
    isPro?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    codeExecutions?: CodeExecutionsUncheckedCreateNestedManyWithoutUserInput
    snippetComments?: SnippetCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStarsInput, UserUncheckedCreateWithoutStarsInput>
  }

  export type SnippetsCreateWithoutStarsInput = {
    id?: string
    title: string
    language: string
    code?: string | null
    userName: string
    snippetComments?: SnippetCommentsCreateNestedManyWithoutSnippetsInput
  }

  export type SnippetsUncheckedCreateWithoutStarsInput = {
    id?: string
    title: string
    language: string
    code?: string | null
    userName: string
    snippetComments?: SnippetCommentsUncheckedCreateNestedManyWithoutSnippetsInput
  }

  export type SnippetsCreateOrConnectWithoutStarsInput = {
    where: SnippetsWhereUniqueInput
    create: XOR<SnippetsCreateWithoutStarsInput, SnippetsUncheckedCreateWithoutStarsInput>
  }

  export type UserUpsertWithoutStarsInput = {
    update: XOR<UserUpdateWithoutStarsInput, UserUncheckedUpdateWithoutStarsInput>
    create: XOR<UserCreateWithoutStarsInput, UserUncheckedCreateWithoutStarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStarsInput, UserUncheckedUpdateWithoutStarsInput>
  }

  export type UserUpdateWithoutStarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPro?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeExecutions?: CodeExecutionsUpdateManyWithoutUserNestedInput
    snippetComments?: SnippetCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPro?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeExecutions?: CodeExecutionsUncheckedUpdateManyWithoutUserNestedInput
    snippetComments?: SnippetCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SnippetsUpsertWithoutStarsInput = {
    update: XOR<SnippetsUpdateWithoutStarsInput, SnippetsUncheckedUpdateWithoutStarsInput>
    create: XOR<SnippetsCreateWithoutStarsInput, SnippetsUncheckedCreateWithoutStarsInput>
    where?: SnippetsWhereInput
  }

  export type SnippetsUpdateToOneWithWhereWithoutStarsInput = {
    where?: SnippetsWhereInput
    data: XOR<SnippetsUpdateWithoutStarsInput, SnippetsUncheckedUpdateWithoutStarsInput>
  }

  export type SnippetsUpdateWithoutStarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    snippetComments?: SnippetCommentsUpdateManyWithoutSnippetsNestedInput
  }

  export type SnippetsUncheckedUpdateWithoutStarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    snippetComments?: SnippetCommentsUncheckedUpdateManyWithoutSnippetsNestedInput
  }

  export type CodeExecutionsCreateManyUserInput = {
    id?: string
    language: string
    code?: string | null
    output?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnippetCommentsCreateManyUserInput = {
    id?: string
    snippetId: string
    userName: string
    content: string
  }

  export type StarsCreateManyUserInput = {
    id?: string
    snippetId: string
  }

  export type CodeExecutionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeExecutionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeExecutionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnippetCommentsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    snippets?: SnippetsUpdateOneRequiredWithoutSnippetCommentsNestedInput
  }

  export type SnippetCommentsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    snippetId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type SnippetCommentsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    snippetId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type StarsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    snippets?: SnippetsUpdateOneRequiredWithoutStarsNestedInput
  }

  export type StarsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    snippetId?: StringFieldUpdateOperationsInput | string
  }

  export type StarsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    snippetId?: StringFieldUpdateOperationsInput | string
  }

  export type StarsCreateManySnippetsInput = {
    id?: string
    userId: string
  }

  export type SnippetCommentsCreateManySnippetsInput = {
    id?: string
    userId?: string | null
    userName: string
    content: string
  }

  export type StarsUpdateWithoutSnippetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStarsNestedInput
  }

  export type StarsUncheckedUpdateWithoutSnippetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StarsUncheckedUpdateManyWithoutSnippetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SnippetCommentsUpdateWithoutSnippetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutSnippetCommentsNestedInput
  }

  export type SnippetCommentsUncheckedUpdateWithoutSnippetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type SnippetCommentsUncheckedUpdateManyWithoutSnippetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}