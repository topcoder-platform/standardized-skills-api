
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
 * Model event
 * 
 */
export type event = $Result.DefaultSelection<Prisma.$eventPayload>
/**
 * Model skill
 * 
 */
export type skill = $Result.DefaultSelection<Prisma.$skillPayload>
/**
 * Model skill_category
 * 
 */
export type skill_category = $Result.DefaultSelection<Prisma.$skill_categoryPayload>
/**
 * Model skill_event
 * 
 */
export type skill_event = $Result.DefaultSelection<Prisma.$skill_eventPayload>
/**
 * Model skill_event_type
 * 
 */
export type skill_event_type = $Result.DefaultSelection<Prisma.$skill_event_typePayload>
/**
 * Model source_type
 * 
 */
export type source_type = $Result.DefaultSelection<Prisma.$source_typePayload>
/**
 * Model user_skill
 * 
 */
export type user_skill = $Result.DefaultSelection<Prisma.$user_skillPayload>
/**
 * Model user_skill_display_mode
 * 
 */
export type user_skill_display_mode = $Result.DefaultSelection<Prisma.$user_skill_display_modePayload>
/**
 * Model user_skill_level
 * 
 */
export type user_skill_level = $Result.DefaultSelection<Prisma.$user_skill_levelPayload>
/**
 * Model work_skill
 * 
 */
export type work_skill = $Result.DefaultSelection<Prisma.$work_skillPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.event.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
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
   * `prisma.event`: Exposes CRUD operations for the **event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.eventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.skillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill_category`: Exposes CRUD operations for the **skill_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skill_categories
    * const skill_categories = await prisma.skill_category.findMany()
    * ```
    */
  get skill_category(): Prisma.skill_categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill_event`: Exposes CRUD operations for the **skill_event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skill_events
    * const skill_events = await prisma.skill_event.findMany()
    * ```
    */
  get skill_event(): Prisma.skill_eventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill_event_type`: Exposes CRUD operations for the **skill_event_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skill_event_types
    * const skill_event_types = await prisma.skill_event_type.findMany()
    * ```
    */
  get skill_event_type(): Prisma.skill_event_typeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.source_type`: Exposes CRUD operations for the **source_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Source_types
    * const source_types = await prisma.source_type.findMany()
    * ```
    */
  get source_type(): Prisma.source_typeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_skill`: Exposes CRUD operations for the **user_skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_skills
    * const user_skills = await prisma.user_skill.findMany()
    * ```
    */
  get user_skill(): Prisma.user_skillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_skill_display_mode`: Exposes CRUD operations for the **user_skill_display_mode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_skill_display_modes
    * const user_skill_display_modes = await prisma.user_skill_display_mode.findMany()
    * ```
    */
  get user_skill_display_mode(): Prisma.user_skill_display_modeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_skill_level`: Exposes CRUD operations for the **user_skill_level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_skill_levels
    * const user_skill_levels = await prisma.user_skill_level.findMany()
    * ```
    */
  get user_skill_level(): Prisma.user_skill_levelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.work_skill`: Exposes CRUD operations for the **work_skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Work_skills
    * const work_skills = await prisma.work_skill.findMany()
    * ```
    */
  get work_skill(): Prisma.work_skillDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    event: 'event',
    skill: 'skill',
    skill_category: 'skill_category',
    skill_event: 'skill_event',
    skill_event_type: 'skill_event_type',
    source_type: 'source_type',
    user_skill: 'user_skill',
    user_skill_display_mode: 'user_skill_display_mode',
    user_skill_level: 'user_skill_level',
    work_skill: 'work_skill'
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
      modelProps: "event" | "skill" | "skill_category" | "skill_event" | "skill_event_type" | "source_type" | "user_skill" | "user_skill_display_mode" | "user_skill_level" | "work_skill"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      event: {
        payload: Prisma.$eventPayload<ExtArgs>
        fields: Prisma.eventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventPayload>
          }
          findFirst: {
            args: Prisma.eventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventPayload>
          }
          findMany: {
            args: Prisma.eventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventPayload>[]
          }
          create: {
            args: Prisma.eventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventPayload>
          }
          createMany: {
            args: Prisma.eventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventPayload>[]
          }
          delete: {
            args: Prisma.eventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventPayload>
          }
          update: {
            args: Prisma.eventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventPayload>
          }
          deleteMany: {
            args: Prisma.eventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventPayload>[]
          }
          upsert: {
            args: Prisma.eventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.eventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      skill: {
        payload: Prisma.$skillPayload<ExtArgs>
        fields: Prisma.skillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findFirst: {
            args: Prisma.skillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findMany: {
            args: Prisma.skillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          create: {
            args: Prisma.skillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          createMany: {
            args: Prisma.skillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          delete: {
            args: Prisma.skillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          update: {
            args: Prisma.skillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          deleteMany: {
            args: Prisma.skillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.skillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          upsert: {
            args: Prisma.skillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.skillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      skill_category: {
        payload: Prisma.$skill_categoryPayload<ExtArgs>
        fields: Prisma.skill_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skill_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skill_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_categoryPayload>
          }
          findFirst: {
            args: Prisma.skill_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skill_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_categoryPayload>
          }
          findMany: {
            args: Prisma.skill_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_categoryPayload>[]
          }
          create: {
            args: Prisma.skill_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_categoryPayload>
          }
          createMany: {
            args: Prisma.skill_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skill_categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_categoryPayload>[]
          }
          delete: {
            args: Prisma.skill_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_categoryPayload>
          }
          update: {
            args: Prisma.skill_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_categoryPayload>
          }
          deleteMany: {
            args: Prisma.skill_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skill_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.skill_categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_categoryPayload>[]
          }
          upsert: {
            args: Prisma.skill_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_categoryPayload>
          }
          aggregate: {
            args: Prisma.Skill_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill_category>
          }
          groupBy: {
            args: Prisma.skill_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Skill_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.skill_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Skill_categoryCountAggregateOutputType> | number
          }
        }
      }
      skill_event: {
        payload: Prisma.$skill_eventPayload<ExtArgs>
        fields: Prisma.skill_eventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skill_eventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_eventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skill_eventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_eventPayload>
          }
          findFirst: {
            args: Prisma.skill_eventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_eventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skill_eventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_eventPayload>
          }
          findMany: {
            args: Prisma.skill_eventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_eventPayload>[]
          }
          create: {
            args: Prisma.skill_eventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_eventPayload>
          }
          createMany: {
            args: Prisma.skill_eventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skill_eventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_eventPayload>[]
          }
          delete: {
            args: Prisma.skill_eventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_eventPayload>
          }
          update: {
            args: Prisma.skill_eventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_eventPayload>
          }
          deleteMany: {
            args: Prisma.skill_eventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skill_eventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.skill_eventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_eventPayload>[]
          }
          upsert: {
            args: Prisma.skill_eventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_eventPayload>
          }
          aggregate: {
            args: Prisma.Skill_eventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill_event>
          }
          groupBy: {
            args: Prisma.skill_eventGroupByArgs<ExtArgs>
            result: $Utils.Optional<Skill_eventGroupByOutputType>[]
          }
          count: {
            args: Prisma.skill_eventCountArgs<ExtArgs>
            result: $Utils.Optional<Skill_eventCountAggregateOutputType> | number
          }
        }
      }
      skill_event_type: {
        payload: Prisma.$skill_event_typePayload<ExtArgs>
        fields: Prisma.skill_event_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skill_event_typeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_event_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skill_event_typeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_event_typePayload>
          }
          findFirst: {
            args: Prisma.skill_event_typeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_event_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skill_event_typeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_event_typePayload>
          }
          findMany: {
            args: Prisma.skill_event_typeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_event_typePayload>[]
          }
          create: {
            args: Prisma.skill_event_typeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_event_typePayload>
          }
          createMany: {
            args: Prisma.skill_event_typeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skill_event_typeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_event_typePayload>[]
          }
          delete: {
            args: Prisma.skill_event_typeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_event_typePayload>
          }
          update: {
            args: Prisma.skill_event_typeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_event_typePayload>
          }
          deleteMany: {
            args: Prisma.skill_event_typeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skill_event_typeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.skill_event_typeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_event_typePayload>[]
          }
          upsert: {
            args: Prisma.skill_event_typeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skill_event_typePayload>
          }
          aggregate: {
            args: Prisma.Skill_event_typeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill_event_type>
          }
          groupBy: {
            args: Prisma.skill_event_typeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Skill_event_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.skill_event_typeCountArgs<ExtArgs>
            result: $Utils.Optional<Skill_event_typeCountAggregateOutputType> | number
          }
        }
      }
      source_type: {
        payload: Prisma.$source_typePayload<ExtArgs>
        fields: Prisma.source_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.source_typeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$source_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.source_typeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$source_typePayload>
          }
          findFirst: {
            args: Prisma.source_typeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$source_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.source_typeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$source_typePayload>
          }
          findMany: {
            args: Prisma.source_typeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$source_typePayload>[]
          }
          create: {
            args: Prisma.source_typeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$source_typePayload>
          }
          createMany: {
            args: Prisma.source_typeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.source_typeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$source_typePayload>[]
          }
          delete: {
            args: Prisma.source_typeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$source_typePayload>
          }
          update: {
            args: Prisma.source_typeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$source_typePayload>
          }
          deleteMany: {
            args: Prisma.source_typeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.source_typeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.source_typeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$source_typePayload>[]
          }
          upsert: {
            args: Prisma.source_typeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$source_typePayload>
          }
          aggregate: {
            args: Prisma.Source_typeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSource_type>
          }
          groupBy: {
            args: Prisma.source_typeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Source_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.source_typeCountArgs<ExtArgs>
            result: $Utils.Optional<Source_typeCountAggregateOutputType> | number
          }
        }
      }
      user_skill: {
        payload: Prisma.$user_skillPayload<ExtArgs>
        fields: Prisma.user_skillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_skillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_skillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skillPayload>
          }
          findFirst: {
            args: Prisma.user_skillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_skillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skillPayload>
          }
          findMany: {
            args: Prisma.user_skillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skillPayload>[]
          }
          create: {
            args: Prisma.user_skillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skillPayload>
          }
          createMany: {
            args: Prisma.user_skillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_skillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skillPayload>[]
          }
          delete: {
            args: Prisma.user_skillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skillPayload>
          }
          update: {
            args: Prisma.user_skillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skillPayload>
          }
          deleteMany: {
            args: Prisma.user_skillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_skillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_skillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skillPayload>[]
          }
          upsert: {
            args: Prisma.user_skillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skillPayload>
          }
          aggregate: {
            args: Prisma.User_skillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_skill>
          }
          groupBy: {
            args: Prisma.user_skillGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_skillGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_skillCountArgs<ExtArgs>
            result: $Utils.Optional<User_skillCountAggregateOutputType> | number
          }
        }
      }
      user_skill_display_mode: {
        payload: Prisma.$user_skill_display_modePayload<ExtArgs>
        fields: Prisma.user_skill_display_modeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_skill_display_modeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_display_modePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_skill_display_modeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_display_modePayload>
          }
          findFirst: {
            args: Prisma.user_skill_display_modeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_display_modePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_skill_display_modeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_display_modePayload>
          }
          findMany: {
            args: Prisma.user_skill_display_modeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_display_modePayload>[]
          }
          create: {
            args: Prisma.user_skill_display_modeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_display_modePayload>
          }
          createMany: {
            args: Prisma.user_skill_display_modeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_skill_display_modeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_display_modePayload>[]
          }
          delete: {
            args: Prisma.user_skill_display_modeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_display_modePayload>
          }
          update: {
            args: Prisma.user_skill_display_modeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_display_modePayload>
          }
          deleteMany: {
            args: Prisma.user_skill_display_modeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_skill_display_modeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_skill_display_modeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_display_modePayload>[]
          }
          upsert: {
            args: Prisma.user_skill_display_modeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_display_modePayload>
          }
          aggregate: {
            args: Prisma.User_skill_display_modeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_skill_display_mode>
          }
          groupBy: {
            args: Prisma.user_skill_display_modeGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_skill_display_modeGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_skill_display_modeCountArgs<ExtArgs>
            result: $Utils.Optional<User_skill_display_modeCountAggregateOutputType> | number
          }
        }
      }
      user_skill_level: {
        payload: Prisma.$user_skill_levelPayload<ExtArgs>
        fields: Prisma.user_skill_levelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_skill_levelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_levelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_skill_levelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_levelPayload>
          }
          findFirst: {
            args: Prisma.user_skill_levelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_levelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_skill_levelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_levelPayload>
          }
          findMany: {
            args: Prisma.user_skill_levelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_levelPayload>[]
          }
          create: {
            args: Prisma.user_skill_levelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_levelPayload>
          }
          createMany: {
            args: Prisma.user_skill_levelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_skill_levelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_levelPayload>[]
          }
          delete: {
            args: Prisma.user_skill_levelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_levelPayload>
          }
          update: {
            args: Prisma.user_skill_levelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_levelPayload>
          }
          deleteMany: {
            args: Prisma.user_skill_levelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_skill_levelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_skill_levelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_levelPayload>[]
          }
          upsert: {
            args: Prisma.user_skill_levelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_skill_levelPayload>
          }
          aggregate: {
            args: Prisma.User_skill_levelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_skill_level>
          }
          groupBy: {
            args: Prisma.user_skill_levelGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_skill_levelGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_skill_levelCountArgs<ExtArgs>
            result: $Utils.Optional<User_skill_levelCountAggregateOutputType> | number
          }
        }
      }
      work_skill: {
        payload: Prisma.$work_skillPayload<ExtArgs>
        fields: Prisma.work_skillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.work_skillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_skillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.work_skillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_skillPayload>
          }
          findFirst: {
            args: Prisma.work_skillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_skillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.work_skillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_skillPayload>
          }
          findMany: {
            args: Prisma.work_skillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_skillPayload>[]
          }
          create: {
            args: Prisma.work_skillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_skillPayload>
          }
          createMany: {
            args: Prisma.work_skillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.work_skillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_skillPayload>[]
          }
          delete: {
            args: Prisma.work_skillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_skillPayload>
          }
          update: {
            args: Prisma.work_skillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_skillPayload>
          }
          deleteMany: {
            args: Prisma.work_skillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.work_skillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.work_skillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_skillPayload>[]
          }
          upsert: {
            args: Prisma.work_skillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_skillPayload>
          }
          aggregate: {
            args: Prisma.Work_skillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork_skill>
          }
          groupBy: {
            args: Prisma.work_skillGroupByArgs<ExtArgs>
            result: $Utils.Optional<Work_skillGroupByOutputType>[]
          }
          count: {
            args: Prisma.work_skillCountArgs<ExtArgs>
            result: $Utils.Optional<Work_skillCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    event?: eventOmit
    skill?: skillOmit
    skill_category?: skill_categoryOmit
    skill_event?: skill_eventOmit
    skill_event_type?: skill_event_typeOmit
    source_type?: source_typeOmit
    user_skill?: user_skillOmit
    user_skill_display_mode?: user_skill_display_modeOmit
    user_skill_level?: user_skill_levelOmit
    work_skill?: work_skillOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    skill_event: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill_event?: boolean | EventCountOutputTypeCountSkill_eventArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountSkill_eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skill_eventWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    skill_event: number
    user_skill: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill_event?: boolean | SkillCountOutputTypeCountSkill_eventArgs
    user_skill?: boolean | SkillCountOutputTypeCountUser_skillArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountSkill_eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skill_eventWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountUser_skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_skillWhereInput
  }


  /**
   * Count Type Skill_categoryCountOutputType
   */

  export type Skill_categoryCountOutputType = {
    skill: number
  }

  export type Skill_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | Skill_categoryCountOutputTypeCountSkillArgs
  }

  // Custom InputTypes
  /**
   * Skill_categoryCountOutputType without action
   */
  export type Skill_categoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill_categoryCountOutputType
     */
    select?: Skill_categoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Skill_categoryCountOutputType without action
   */
  export type Skill_categoryCountOutputTypeCountSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillWhereInput
  }


  /**
   * Count Type Skill_event_typeCountOutputType
   */

  export type Skill_event_typeCountOutputType = {
    skill_event: number
  }

  export type Skill_event_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill_event?: boolean | Skill_event_typeCountOutputTypeCountSkill_eventArgs
  }

  // Custom InputTypes
  /**
   * Skill_event_typeCountOutputType without action
   */
  export type Skill_event_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill_event_typeCountOutputType
     */
    select?: Skill_event_typeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Skill_event_typeCountOutputType without action
   */
  export type Skill_event_typeCountOutputTypeCountSkill_eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skill_eventWhereInput
  }


  /**
   * Count Type Source_typeCountOutputType
   */

  export type Source_typeCountOutputType = {
    skill_event: number
  }

  export type Source_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill_event?: boolean | Source_typeCountOutputTypeCountSkill_eventArgs
  }

  // Custom InputTypes
  /**
   * Source_typeCountOutputType without action
   */
  export type Source_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source_typeCountOutputType
     */
    select?: Source_typeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Source_typeCountOutputType without action
   */
  export type Source_typeCountOutputTypeCountSkill_eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skill_eventWhereInput
  }


  /**
   * Count Type User_skill_display_modeCountOutputType
   */

  export type User_skill_display_modeCountOutputType = {
    user_skill: number
  }

  export type User_skill_display_modeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_skill?: boolean | User_skill_display_modeCountOutputTypeCountUser_skillArgs
  }

  // Custom InputTypes
  /**
   * User_skill_display_modeCountOutputType without action
   */
  export type User_skill_display_modeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_skill_display_modeCountOutputType
     */
    select?: User_skill_display_modeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_skill_display_modeCountOutputType without action
   */
  export type User_skill_display_modeCountOutputTypeCountUser_skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_skillWhereInput
  }


  /**
   * Count Type User_skill_levelCountOutputType
   */

  export type User_skill_levelCountOutputType = {
    user_skill: number
  }

  export type User_skill_levelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_skill?: boolean | User_skill_levelCountOutputTypeCountUser_skillArgs
  }

  // Custom InputTypes
  /**
   * User_skill_levelCountOutputType without action
   */
  export type User_skill_levelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_skill_levelCountOutputType
     */
    select?: User_skill_levelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_skill_levelCountOutputType without action
   */
  export type User_skill_levelCountOutputTypeCountUser_skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_skillWhereInput
  }


  /**
   * Models
   */

  /**
   * Model event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    topic: string | null
    payload_hash: string | null
    created_at: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    topic: string | null
    payload_hash: string | null
    created_at: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    topic: number
    payload: number
    payload_hash: number
    created_at: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    topic?: true
    payload_hash?: true
    created_at?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    topic?: true
    payload_hash?: true
    created_at?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    topic?: true
    payload?: true
    payload_hash?: true
    created_at?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event to aggregate.
     */
    where?: eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type eventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventWhereInput
    orderBy?: eventOrderByWithAggregationInput | eventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: eventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    topic: string
    payload: JsonValue
    payload_hash: string | null
    created_at: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends eventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type eventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic?: boolean
    payload?: boolean
    payload_hash?: boolean
    created_at?: boolean
    skill_event?: boolean | event$skill_eventArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type eventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic?: boolean
    payload?: boolean
    payload_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["event"]>

  export type eventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic?: boolean
    payload?: boolean
    payload_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["event"]>

  export type eventSelectScalar = {
    id?: boolean
    topic?: boolean
    payload?: boolean
    payload_hash?: boolean
    created_at?: boolean
  }

  export type eventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "topic" | "payload" | "payload_hash" | "created_at", ExtArgs["result"]["event"]>
  export type eventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill_event?: boolean | event$skill_eventArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type eventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type eventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $eventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "event"
    objects: {
      skill_event: Prisma.$skill_eventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      topic: string
      payload: Prisma.JsonValue
      payload_hash: string | null
      created_at: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type eventGetPayload<S extends boolean | null | undefined | eventDefaultArgs> = $Result.GetResult<Prisma.$eventPayload, S>

  type eventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface eventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['event'], meta: { name: 'event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {eventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventFindUniqueArgs>(args: SelectSubset<T, eventFindUniqueArgs<ExtArgs>>): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventFindUniqueOrThrowArgs>(args: SelectSubset<T, eventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventFindFirstArgs>(args?: SelectSubset<T, eventFindFirstArgs<ExtArgs>>): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventFindFirstOrThrowArgs>(args?: SelectSubset<T, eventFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventFindManyArgs>(args?: SelectSubset<T, eventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {eventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends eventCreateArgs>(args: SelectSubset<T, eventCreateArgs<ExtArgs>>): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {eventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventCreateManyArgs>(args?: SelectSubset<T, eventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {eventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventCreateManyAndReturnArgs>(args?: SelectSubset<T, eventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {eventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends eventDeleteArgs>(args: SelectSubset<T, eventDeleteArgs<ExtArgs>>): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {eventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventUpdateArgs>(args: SelectSubset<T, eventUpdateArgs<ExtArgs>>): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {eventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventDeleteManyArgs>(args?: SelectSubset<T, eventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventUpdateManyArgs>(args: SelectSubset<T, eventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {eventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends eventUpdateManyAndReturnArgs>(args: SelectSubset<T, eventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {eventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends eventUpsertArgs>(args: SelectSubset<T, eventUpsertArgs<ExtArgs>>): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventCountArgs>(
      args?: Subset<T, eventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventGroupByArgs} args - Group by arguments.
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
      T extends eventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventGroupByArgs['orderBy'] }
        : { orderBy?: eventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the event model
   */
  readonly fields: eventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill_event<T extends event$skill_eventArgs<ExtArgs> = {}>(args?: Subset<T, event$skill_eventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the event model
   */
  interface eventFieldRefs {
    readonly id: FieldRef<"event", 'String'>
    readonly topic: FieldRef<"event", 'String'>
    readonly payload: FieldRef<"event", 'Json'>
    readonly payload_hash: FieldRef<"event", 'String'>
    readonly created_at: FieldRef<"event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * event findUnique
   */
  export type eventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event
     */
    omit?: eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventInclude<ExtArgs> | null
    /**
     * Filter, which event to fetch.
     */
    where: eventWhereUniqueInput
  }

  /**
   * event findUniqueOrThrow
   */
  export type eventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event
     */
    omit?: eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventInclude<ExtArgs> | null
    /**
     * Filter, which event to fetch.
     */
    where: eventWhereUniqueInput
  }

  /**
   * event findFirst
   */
  export type eventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event
     */
    omit?: eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventInclude<ExtArgs> | null
    /**
     * Filter, which event to fetch.
     */
    where?: eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * event findFirstOrThrow
   */
  export type eventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event
     */
    omit?: eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventInclude<ExtArgs> | null
    /**
     * Filter, which event to fetch.
     */
    where?: eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * event findMany
   */
  export type eventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event
     */
    omit?: eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventOrderByWithRelationInput | eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * event create
   */
  export type eventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event
     */
    omit?: eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventInclude<ExtArgs> | null
    /**
     * The data needed to create a event.
     */
    data: XOR<eventCreateInput, eventUncheckedCreateInput>
  }

  /**
   * event createMany
   */
  export type eventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventCreateManyInput | eventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * event createManyAndReturn
   */
  export type eventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the event
     */
    omit?: eventOmit<ExtArgs> | null
    /**
     * The data used to create many events.
     */
    data: eventCreateManyInput | eventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * event update
   */
  export type eventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event
     */
    omit?: eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventInclude<ExtArgs> | null
    /**
     * The data needed to update a event.
     */
    data: XOR<eventUpdateInput, eventUncheckedUpdateInput>
    /**
     * Choose, which event to update.
     */
    where: eventWhereUniqueInput
  }

  /**
   * event updateMany
   */
  export type eventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventUpdateManyMutationInput, eventUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
  }

  /**
   * event updateManyAndReturn
   */
  export type eventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the event
     */
    omit?: eventOmit<ExtArgs> | null
    /**
     * The data used to update events.
     */
    data: XOR<eventUpdateManyMutationInput, eventUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
  }

  /**
   * event upsert
   */
  export type eventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event
     */
    omit?: eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventInclude<ExtArgs> | null
    /**
     * The filter to search for the event to update in case it exists.
     */
    where: eventWhereUniqueInput
    /**
     * In case the event found by the `where` argument doesn't exist, create a new event with this data.
     */
    create: XOR<eventCreateInput, eventUncheckedCreateInput>
    /**
     * In case the event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventUpdateInput, eventUncheckedUpdateInput>
  }

  /**
   * event delete
   */
  export type eventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event
     */
    omit?: eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventInclude<ExtArgs> | null
    /**
     * Filter which event to delete.
     */
    where: eventWhereUniqueInput
  }

  /**
   * event deleteMany
   */
  export type eventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventWhereInput
    /**
     * Limit how many events to delete.
     */
    limit?: number
  }

  /**
   * event.skill_event
   */
  export type event$skill_eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventInclude<ExtArgs> | null
    where?: skill_eventWhereInput
    orderBy?: skill_eventOrderByWithRelationInput | skill_eventOrderByWithRelationInput[]
    cursor?: skill_eventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Skill_eventScalarFieldEnum | Skill_eventScalarFieldEnum[]
  }

  /**
   * event without action
   */
  export type eventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event
     */
    select?: eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event
     */
    omit?: eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventInclude<ExtArgs> | null
  }


  /**
   * Model skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skill to aggregate.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type skillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillWhereInput
    orderBy?: skillOrderByWithAggregationInput | skillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: skillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    description: string | null
    category_id: string | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends skillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type skillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    skill_category?: boolean | skill$skill_categoryArgs<ExtArgs>
    skill_event?: boolean | skill$skill_eventArgs<ExtArgs>
    user_skill?: boolean | skill$user_skillArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type skillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    skill_category?: boolean | skill$skill_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type skillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    skill_category?: boolean | skill$skill_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type skillSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type skillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["skill"]>
  export type skillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill_category?: boolean | skill$skill_categoryArgs<ExtArgs>
    skill_event?: boolean | skill$skill_eventArgs<ExtArgs>
    user_skill?: boolean | skill$user_skillArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type skillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill_category?: boolean | skill$skill_categoryArgs<ExtArgs>
  }
  export type skillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill_category?: boolean | skill$skill_categoryArgs<ExtArgs>
  }

  export type $skillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skill"
    objects: {
      skill_category: Prisma.$skill_categoryPayload<ExtArgs> | null
      skill_event: Prisma.$skill_eventPayload<ExtArgs>[]
      user_skill: Prisma.$user_skillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      category_id: string | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type skillGetPayload<S extends boolean | null | undefined | skillDefaultArgs> = $Result.GetResult<Prisma.$skillPayload, S>

  type skillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface skillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skill'], meta: { name: 'skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {skillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillFindUniqueArgs>(args: SelectSubset<T, skillFindUniqueArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillFindUniqueOrThrowArgs>(args: SelectSubset<T, skillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillFindFirstArgs>(args?: SelectSubset<T, skillFindFirstArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillFindFirstOrThrowArgs>(args?: SelectSubset<T, skillFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skillFindManyArgs>(args?: SelectSubset<T, skillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {skillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends skillCreateArgs>(args: SelectSubset<T, skillCreateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {skillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillCreateManyArgs>(args?: SelectSubset<T, skillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {skillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends skillCreateManyAndReturnArgs>(args?: SelectSubset<T, skillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {skillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends skillDeleteArgs>(args: SelectSubset<T, skillDeleteArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {skillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skillUpdateArgs>(args: SelectSubset<T, skillUpdateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {skillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillDeleteManyArgs>(args?: SelectSubset<T, skillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skillUpdateManyArgs>(args: SelectSubset<T, skillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {skillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends skillUpdateManyAndReturnArgs>(args: SelectSubset<T, skillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {skillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends skillUpsertArgs>(args: SelectSubset<T, skillUpsertArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends skillCountArgs>(
      args?: Subset<T, skillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillGroupByArgs} args - Group by arguments.
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
      T extends skillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillGroupByArgs['orderBy'] }
        : { orderBy?: skillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skill model
   */
  readonly fields: skillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill_category<T extends skill$skill_categoryArgs<ExtArgs> = {}>(args?: Subset<T, skill$skill_categoryArgs<ExtArgs>>): Prisma__skill_categoryClient<$Result.GetResult<Prisma.$skill_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    skill_event<T extends skill$skill_eventArgs<ExtArgs> = {}>(args?: Subset<T, skill$skill_eventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_skill<T extends skill$user_skillArgs<ExtArgs> = {}>(args?: Subset<T, skill$user_skillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the skill model
   */
  interface skillFieldRefs {
    readonly id: FieldRef<"skill", 'String'>
    readonly name: FieldRef<"skill", 'String'>
    readonly description: FieldRef<"skill", 'String'>
    readonly category_id: FieldRef<"skill", 'String'>
    readonly created_at: FieldRef<"skill", 'DateTime'>
    readonly updated_at: FieldRef<"skill", 'DateTime'>
    readonly deleted_at: FieldRef<"skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * skill findUnique
   */
  export type skillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findUniqueOrThrow
   */
  export type skillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findFirst
   */
  export type skillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findFirstOrThrow
   */
  export type skillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findMany
   */
  export type skillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill create
   */
  export type skillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The data needed to create a skill.
     */
    data: XOR<skillCreateInput, skillUncheckedCreateInput>
  }

  /**
   * skill createMany
   */
  export type skillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skills.
     */
    data: skillCreateManyInput | skillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skill createManyAndReturn
   */
  export type skillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * The data used to create many skills.
     */
    data: skillCreateManyInput | skillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * skill update
   */
  export type skillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The data needed to update a skill.
     */
    data: XOR<skillUpdateInput, skillUncheckedUpdateInput>
    /**
     * Choose, which skill to update.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill updateMany
   */
  export type skillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skills.
     */
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
  }

  /**
   * skill updateManyAndReturn
   */
  export type skillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * The data used to update skills.
     */
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * skill upsert
   */
  export type skillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The filter to search for the skill to update in case it exists.
     */
    where: skillWhereUniqueInput
    /**
     * In case the skill found by the `where` argument doesn't exist, create a new skill with this data.
     */
    create: XOR<skillCreateInput, skillUncheckedCreateInput>
    /**
     * In case the skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillUpdateInput, skillUncheckedUpdateInput>
  }

  /**
   * skill delete
   */
  export type skillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter which skill to delete.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill deleteMany
   */
  export type skillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to delete
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to delete.
     */
    limit?: number
  }

  /**
   * skill.skill_category
   */
  export type skill$skill_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_category
     */
    select?: skill_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_category
     */
    omit?: skill_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_categoryInclude<ExtArgs> | null
    where?: skill_categoryWhereInput
  }

  /**
   * skill.skill_event
   */
  export type skill$skill_eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventInclude<ExtArgs> | null
    where?: skill_eventWhereInput
    orderBy?: skill_eventOrderByWithRelationInput | skill_eventOrderByWithRelationInput[]
    cursor?: skill_eventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Skill_eventScalarFieldEnum | Skill_eventScalarFieldEnum[]
  }

  /**
   * skill.user_skill
   */
  export type skill$user_skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillInclude<ExtArgs> | null
    where?: user_skillWhereInput
    orderBy?: user_skillOrderByWithRelationInput | user_skillOrderByWithRelationInput[]
    cursor?: user_skillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_skillScalarFieldEnum | User_skillScalarFieldEnum[]
  }

  /**
   * skill without action
   */
  export type skillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
  }


  /**
   * Model skill_category
   */

  export type AggregateSkill_category = {
    _count: Skill_categoryCountAggregateOutputType | null
    _min: Skill_categoryMinAggregateOutputType | null
    _max: Skill_categoryMaxAggregateOutputType | null
  }

  export type Skill_categoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Skill_categoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Skill_categoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Skill_categoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Skill_categoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Skill_categoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Skill_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skill_category to aggregate.
     */
    where?: skill_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skill_categories to fetch.
     */
    orderBy?: skill_categoryOrderByWithRelationInput | skill_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skill_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skill_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skill_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skill_categories
    **/
    _count?: true | Skill_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Skill_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Skill_categoryMaxAggregateInputType
  }

  export type GetSkill_categoryAggregateType<T extends Skill_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill_category[P]>
      : GetScalarType<T[P], AggregateSkill_category[P]>
  }




  export type skill_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skill_categoryWhereInput
    orderBy?: skill_categoryOrderByWithAggregationInput | skill_categoryOrderByWithAggregationInput[]
    by: Skill_categoryScalarFieldEnum[] | Skill_categoryScalarFieldEnum
    having?: skill_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Skill_categoryCountAggregateInputType | true
    _min?: Skill_categoryMinAggregateInputType
    _max?: Skill_categoryMaxAggregateInputType
  }

  export type Skill_categoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: Skill_categoryCountAggregateOutputType | null
    _min: Skill_categoryMinAggregateOutputType | null
    _max: Skill_categoryMaxAggregateOutputType | null
  }

  type GetSkill_categoryGroupByPayload<T extends skill_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Skill_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Skill_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Skill_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Skill_categoryGroupByOutputType[P]>
        }
      >
    >


  export type skill_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    skill?: boolean | skill_category$skillArgs<ExtArgs>
    _count?: boolean | Skill_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill_category"]>

  export type skill_categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["skill_category"]>

  export type skill_categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["skill_category"]>

  export type skill_categorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type skill_categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["skill_category"]>
  export type skill_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | skill_category$skillArgs<ExtArgs>
    _count?: boolean | Skill_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type skill_categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type skill_categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $skill_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skill_category"
    objects: {
      skill: Prisma.$skillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["skill_category"]>
    composites: {}
  }

  type skill_categoryGetPayload<S extends boolean | null | undefined | skill_categoryDefaultArgs> = $Result.GetResult<Prisma.$skill_categoryPayload, S>

  type skill_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skill_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Skill_categoryCountAggregateInputType | true
    }

  export interface skill_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skill_category'], meta: { name: 'skill_category' } }
    /**
     * Find zero or one Skill_category that matches the filter.
     * @param {skill_categoryFindUniqueArgs} args - Arguments to find a Skill_category
     * @example
     * // Get one Skill_category
     * const skill_category = await prisma.skill_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skill_categoryFindUniqueArgs>(args: SelectSubset<T, skill_categoryFindUniqueArgs<ExtArgs>>): Prisma__skill_categoryClient<$Result.GetResult<Prisma.$skill_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skill_categoryFindUniqueOrThrowArgs} args - Arguments to find a Skill_category
     * @example
     * // Get one Skill_category
     * const skill_category = await prisma.skill_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skill_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, skill_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skill_categoryClient<$Result.GetResult<Prisma.$skill_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_categoryFindFirstArgs} args - Arguments to find a Skill_category
     * @example
     * // Get one Skill_category
     * const skill_category = await prisma.skill_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skill_categoryFindFirstArgs>(args?: SelectSubset<T, skill_categoryFindFirstArgs<ExtArgs>>): Prisma__skill_categoryClient<$Result.GetResult<Prisma.$skill_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_categoryFindFirstOrThrowArgs} args - Arguments to find a Skill_category
     * @example
     * // Get one Skill_category
     * const skill_category = await prisma.skill_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skill_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, skill_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__skill_categoryClient<$Result.GetResult<Prisma.$skill_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skill_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skill_categories
     * const skill_categories = await prisma.skill_category.findMany()
     * 
     * // Get first 10 Skill_categories
     * const skill_categories = await prisma.skill_category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skill_categoryWithIdOnly = await prisma.skill_category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skill_categoryFindManyArgs>(args?: SelectSubset<T, skill_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skill_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill_category.
     * @param {skill_categoryCreateArgs} args - Arguments to create a Skill_category.
     * @example
     * // Create one Skill_category
     * const Skill_category = await prisma.skill_category.create({
     *   data: {
     *     // ... data to create a Skill_category
     *   }
     * })
     * 
     */
    create<T extends skill_categoryCreateArgs>(args: SelectSubset<T, skill_categoryCreateArgs<ExtArgs>>): Prisma__skill_categoryClient<$Result.GetResult<Prisma.$skill_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skill_categories.
     * @param {skill_categoryCreateManyArgs} args - Arguments to create many Skill_categories.
     * @example
     * // Create many Skill_categories
     * const skill_category = await prisma.skill_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skill_categoryCreateManyArgs>(args?: SelectSubset<T, skill_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skill_categories and returns the data saved in the database.
     * @param {skill_categoryCreateManyAndReturnArgs} args - Arguments to create many Skill_categories.
     * @example
     * // Create many Skill_categories
     * const skill_category = await prisma.skill_category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skill_categories and only return the `id`
     * const skill_categoryWithIdOnly = await prisma.skill_category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends skill_categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, skill_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skill_categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill_category.
     * @param {skill_categoryDeleteArgs} args - Arguments to delete one Skill_category.
     * @example
     * // Delete one Skill_category
     * const Skill_category = await prisma.skill_category.delete({
     *   where: {
     *     // ... filter to delete one Skill_category
     *   }
     * })
     * 
     */
    delete<T extends skill_categoryDeleteArgs>(args: SelectSubset<T, skill_categoryDeleteArgs<ExtArgs>>): Prisma__skill_categoryClient<$Result.GetResult<Prisma.$skill_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill_category.
     * @param {skill_categoryUpdateArgs} args - Arguments to update one Skill_category.
     * @example
     * // Update one Skill_category
     * const skill_category = await prisma.skill_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skill_categoryUpdateArgs>(args: SelectSubset<T, skill_categoryUpdateArgs<ExtArgs>>): Prisma__skill_categoryClient<$Result.GetResult<Prisma.$skill_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skill_categories.
     * @param {skill_categoryDeleteManyArgs} args - Arguments to filter Skill_categories to delete.
     * @example
     * // Delete a few Skill_categories
     * const { count } = await prisma.skill_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skill_categoryDeleteManyArgs>(args?: SelectSubset<T, skill_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skill_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skill_categories
     * const skill_category = await prisma.skill_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skill_categoryUpdateManyArgs>(args: SelectSubset<T, skill_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skill_categories and returns the data updated in the database.
     * @param {skill_categoryUpdateManyAndReturnArgs} args - Arguments to update many Skill_categories.
     * @example
     * // Update many Skill_categories
     * const skill_category = await prisma.skill_category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skill_categories and only return the `id`
     * const skill_categoryWithIdOnly = await prisma.skill_category.updateManyAndReturn({
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
    updateManyAndReturn<T extends skill_categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, skill_categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skill_categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill_category.
     * @param {skill_categoryUpsertArgs} args - Arguments to update or create a Skill_category.
     * @example
     * // Update or create a Skill_category
     * const skill_category = await prisma.skill_category.upsert({
     *   create: {
     *     // ... data to create a Skill_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill_category we want to update
     *   }
     * })
     */
    upsert<T extends skill_categoryUpsertArgs>(args: SelectSubset<T, skill_categoryUpsertArgs<ExtArgs>>): Prisma__skill_categoryClient<$Result.GetResult<Prisma.$skill_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skill_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_categoryCountArgs} args - Arguments to filter Skill_categories to count.
     * @example
     * // Count the number of Skill_categories
     * const count = await prisma.skill_category.count({
     *   where: {
     *     // ... the filter for the Skill_categories we want to count
     *   }
     * })
    **/
    count<T extends skill_categoryCountArgs>(
      args?: Subset<T, skill_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Skill_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Skill_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Skill_categoryAggregateArgs>(args: Subset<T, Skill_categoryAggregateArgs>): Prisma.PrismaPromise<GetSkill_categoryAggregateType<T>>

    /**
     * Group by Skill_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_categoryGroupByArgs} args - Group by arguments.
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
      T extends skill_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skill_categoryGroupByArgs['orderBy'] }
        : { orderBy?: skill_categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skill_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkill_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skill_category model
   */
  readonly fields: skill_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skill_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skill_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill<T extends skill_category$skillArgs<ExtArgs> = {}>(args?: Subset<T, skill_category$skillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the skill_category model
   */
  interface skill_categoryFieldRefs {
    readonly id: FieldRef<"skill_category", 'String'>
    readonly name: FieldRef<"skill_category", 'String'>
    readonly description: FieldRef<"skill_category", 'String'>
    readonly created_at: FieldRef<"skill_category", 'DateTime'>
    readonly updated_at: FieldRef<"skill_category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * skill_category findUnique
   */
  export type skill_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_category
     */
    select?: skill_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_category
     */
    omit?: skill_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_categoryInclude<ExtArgs> | null
    /**
     * Filter, which skill_category to fetch.
     */
    where: skill_categoryWhereUniqueInput
  }

  /**
   * skill_category findUniqueOrThrow
   */
  export type skill_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_category
     */
    select?: skill_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_category
     */
    omit?: skill_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_categoryInclude<ExtArgs> | null
    /**
     * Filter, which skill_category to fetch.
     */
    where: skill_categoryWhereUniqueInput
  }

  /**
   * skill_category findFirst
   */
  export type skill_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_category
     */
    select?: skill_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_category
     */
    omit?: skill_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_categoryInclude<ExtArgs> | null
    /**
     * Filter, which skill_category to fetch.
     */
    where?: skill_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skill_categories to fetch.
     */
    orderBy?: skill_categoryOrderByWithRelationInput | skill_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skill_categories.
     */
    cursor?: skill_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skill_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skill_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skill_categories.
     */
    distinct?: Skill_categoryScalarFieldEnum | Skill_categoryScalarFieldEnum[]
  }

  /**
   * skill_category findFirstOrThrow
   */
  export type skill_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_category
     */
    select?: skill_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_category
     */
    omit?: skill_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_categoryInclude<ExtArgs> | null
    /**
     * Filter, which skill_category to fetch.
     */
    where?: skill_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skill_categories to fetch.
     */
    orderBy?: skill_categoryOrderByWithRelationInput | skill_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skill_categories.
     */
    cursor?: skill_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skill_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skill_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skill_categories.
     */
    distinct?: Skill_categoryScalarFieldEnum | Skill_categoryScalarFieldEnum[]
  }

  /**
   * skill_category findMany
   */
  export type skill_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_category
     */
    select?: skill_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_category
     */
    omit?: skill_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_categoryInclude<ExtArgs> | null
    /**
     * Filter, which skill_categories to fetch.
     */
    where?: skill_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skill_categories to fetch.
     */
    orderBy?: skill_categoryOrderByWithRelationInput | skill_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skill_categories.
     */
    cursor?: skill_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skill_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skill_categories.
     */
    skip?: number
    distinct?: Skill_categoryScalarFieldEnum | Skill_categoryScalarFieldEnum[]
  }

  /**
   * skill_category create
   */
  export type skill_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_category
     */
    select?: skill_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_category
     */
    omit?: skill_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a skill_category.
     */
    data: XOR<skill_categoryCreateInput, skill_categoryUncheckedCreateInput>
  }

  /**
   * skill_category createMany
   */
  export type skill_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skill_categories.
     */
    data: skill_categoryCreateManyInput | skill_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skill_category createManyAndReturn
   */
  export type skill_categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_category
     */
    select?: skill_categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skill_category
     */
    omit?: skill_categoryOmit<ExtArgs> | null
    /**
     * The data used to create many skill_categories.
     */
    data: skill_categoryCreateManyInput | skill_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skill_category update
   */
  export type skill_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_category
     */
    select?: skill_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_category
     */
    omit?: skill_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a skill_category.
     */
    data: XOR<skill_categoryUpdateInput, skill_categoryUncheckedUpdateInput>
    /**
     * Choose, which skill_category to update.
     */
    where: skill_categoryWhereUniqueInput
  }

  /**
   * skill_category updateMany
   */
  export type skill_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skill_categories.
     */
    data: XOR<skill_categoryUpdateManyMutationInput, skill_categoryUncheckedUpdateManyInput>
    /**
     * Filter which skill_categories to update
     */
    where?: skill_categoryWhereInput
    /**
     * Limit how many skill_categories to update.
     */
    limit?: number
  }

  /**
   * skill_category updateManyAndReturn
   */
  export type skill_categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_category
     */
    select?: skill_categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skill_category
     */
    omit?: skill_categoryOmit<ExtArgs> | null
    /**
     * The data used to update skill_categories.
     */
    data: XOR<skill_categoryUpdateManyMutationInput, skill_categoryUncheckedUpdateManyInput>
    /**
     * Filter which skill_categories to update
     */
    where?: skill_categoryWhereInput
    /**
     * Limit how many skill_categories to update.
     */
    limit?: number
  }

  /**
   * skill_category upsert
   */
  export type skill_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_category
     */
    select?: skill_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_category
     */
    omit?: skill_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the skill_category to update in case it exists.
     */
    where: skill_categoryWhereUniqueInput
    /**
     * In case the skill_category found by the `where` argument doesn't exist, create a new skill_category with this data.
     */
    create: XOR<skill_categoryCreateInput, skill_categoryUncheckedCreateInput>
    /**
     * In case the skill_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skill_categoryUpdateInput, skill_categoryUncheckedUpdateInput>
  }

  /**
   * skill_category delete
   */
  export type skill_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_category
     */
    select?: skill_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_category
     */
    omit?: skill_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_categoryInclude<ExtArgs> | null
    /**
     * Filter which skill_category to delete.
     */
    where: skill_categoryWhereUniqueInput
  }

  /**
   * skill_category deleteMany
   */
  export type skill_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skill_categories to delete
     */
    where?: skill_categoryWhereInput
    /**
     * Limit how many skill_categories to delete.
     */
    limit?: number
  }

  /**
   * skill_category.skill
   */
  export type skill_category$skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    where?: skillWhereInput
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    cursor?: skillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill_category without action
   */
  export type skill_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_category
     */
    select?: skill_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_category
     */
    omit?: skill_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_categoryInclude<ExtArgs> | null
  }


  /**
   * Model skill_event
   */

  export type AggregateSkill_event = {
    _count: Skill_eventCountAggregateOutputType | null
    _avg: Skill_eventAvgAggregateOutputType | null
    _sum: Skill_eventSumAggregateOutputType | null
    _min: Skill_eventMinAggregateOutputType | null
    _max: Skill_eventMaxAggregateOutputType | null
  }

  export type Skill_eventAvgAggregateOutputType = {
    user_id: number | null
  }

  export type Skill_eventSumAggregateOutputType = {
    user_id: number | null
  }

  export type Skill_eventMinAggregateOutputType = {
    id: string | null
    event_id: string | null
    user_id: number | null
    skill_id: string | null
    skill_event_type_id: string | null
    source_id: string | null
    source_type_id: string | null
    created_at: Date | null
  }

  export type Skill_eventMaxAggregateOutputType = {
    id: string | null
    event_id: string | null
    user_id: number | null
    skill_id: string | null
    skill_event_type_id: string | null
    source_id: string | null
    source_type_id: string | null
    created_at: Date | null
  }

  export type Skill_eventCountAggregateOutputType = {
    id: number
    event_id: number
    user_id: number
    skill_id: number
    skill_event_type_id: number
    source_id: number
    source_type_id: number
    created_at: number
    _all: number
  }


  export type Skill_eventAvgAggregateInputType = {
    user_id?: true
  }

  export type Skill_eventSumAggregateInputType = {
    user_id?: true
  }

  export type Skill_eventMinAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    skill_id?: true
    skill_event_type_id?: true
    source_id?: true
    source_type_id?: true
    created_at?: true
  }

  export type Skill_eventMaxAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    skill_id?: true
    skill_event_type_id?: true
    source_id?: true
    source_type_id?: true
    created_at?: true
  }

  export type Skill_eventCountAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    skill_id?: true
    skill_event_type_id?: true
    source_id?: true
    source_type_id?: true
    created_at?: true
    _all?: true
  }

  export type Skill_eventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skill_event to aggregate.
     */
    where?: skill_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skill_events to fetch.
     */
    orderBy?: skill_eventOrderByWithRelationInput | skill_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skill_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skill_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skill_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skill_events
    **/
    _count?: true | Skill_eventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Skill_eventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Skill_eventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Skill_eventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Skill_eventMaxAggregateInputType
  }

  export type GetSkill_eventAggregateType<T extends Skill_eventAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill_event]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill_event[P]>
      : GetScalarType<T[P], AggregateSkill_event[P]>
  }




  export type skill_eventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skill_eventWhereInput
    orderBy?: skill_eventOrderByWithAggregationInput | skill_eventOrderByWithAggregationInput[]
    by: Skill_eventScalarFieldEnum[] | Skill_eventScalarFieldEnum
    having?: skill_eventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Skill_eventCountAggregateInputType | true
    _avg?: Skill_eventAvgAggregateInputType
    _sum?: Skill_eventSumAggregateInputType
    _min?: Skill_eventMinAggregateInputType
    _max?: Skill_eventMaxAggregateInputType
  }

  export type Skill_eventGroupByOutputType = {
    id: string
    event_id: string
    user_id: number
    skill_id: string
    skill_event_type_id: string
    source_id: string
    source_type_id: string
    created_at: Date
    _count: Skill_eventCountAggregateOutputType | null
    _avg: Skill_eventAvgAggregateOutputType | null
    _sum: Skill_eventSumAggregateOutputType | null
    _min: Skill_eventMinAggregateOutputType | null
    _max: Skill_eventMaxAggregateOutputType | null
  }

  type GetSkill_eventGroupByPayload<T extends skill_eventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Skill_eventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Skill_eventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Skill_eventGroupByOutputType[P]>
            : GetScalarType<T[P], Skill_eventGroupByOutputType[P]>
        }
      >
    >


  export type skill_eventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    skill_id?: boolean
    skill_event_type_id?: boolean
    source_id?: boolean
    source_type_id?: boolean
    created_at?: boolean
    event?: boolean | eventDefaultArgs<ExtArgs>
    skill_event_type?: boolean | skill_event_typeDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
    source_type?: boolean | source_typeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill_event"]>

  export type skill_eventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    skill_id?: boolean
    skill_event_type_id?: boolean
    source_id?: boolean
    source_type_id?: boolean
    created_at?: boolean
    event?: boolean | eventDefaultArgs<ExtArgs>
    skill_event_type?: boolean | skill_event_typeDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
    source_type?: boolean | source_typeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill_event"]>

  export type skill_eventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    skill_id?: boolean
    skill_event_type_id?: boolean
    source_id?: boolean
    source_type_id?: boolean
    created_at?: boolean
    event?: boolean | eventDefaultArgs<ExtArgs>
    skill_event_type?: boolean | skill_event_typeDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
    source_type?: boolean | source_typeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill_event"]>

  export type skill_eventSelectScalar = {
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    skill_id?: boolean
    skill_event_type_id?: boolean
    source_id?: boolean
    source_type_id?: boolean
    created_at?: boolean
  }

  export type skill_eventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "user_id" | "skill_id" | "skill_event_type_id" | "source_id" | "source_type_id" | "created_at", ExtArgs["result"]["skill_event"]>
  export type skill_eventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | eventDefaultArgs<ExtArgs>
    skill_event_type?: boolean | skill_event_typeDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
    source_type?: boolean | source_typeDefaultArgs<ExtArgs>
  }
  export type skill_eventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | eventDefaultArgs<ExtArgs>
    skill_event_type?: boolean | skill_event_typeDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
    source_type?: boolean | source_typeDefaultArgs<ExtArgs>
  }
  export type skill_eventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | eventDefaultArgs<ExtArgs>
    skill_event_type?: boolean | skill_event_typeDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
    source_type?: boolean | source_typeDefaultArgs<ExtArgs>
  }

  export type $skill_eventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skill_event"
    objects: {
      event: Prisma.$eventPayload<ExtArgs>
      skill_event_type: Prisma.$skill_event_typePayload<ExtArgs>
      skill: Prisma.$skillPayload<ExtArgs>
      source_type: Prisma.$source_typePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_id: string
      user_id: number
      skill_id: string
      skill_event_type_id: string
      source_id: string
      source_type_id: string
      created_at: Date
    }, ExtArgs["result"]["skill_event"]>
    composites: {}
  }

  type skill_eventGetPayload<S extends boolean | null | undefined | skill_eventDefaultArgs> = $Result.GetResult<Prisma.$skill_eventPayload, S>

  type skill_eventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skill_eventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Skill_eventCountAggregateInputType | true
    }

  export interface skill_eventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skill_event'], meta: { name: 'skill_event' } }
    /**
     * Find zero or one Skill_event that matches the filter.
     * @param {skill_eventFindUniqueArgs} args - Arguments to find a Skill_event
     * @example
     * // Get one Skill_event
     * const skill_event = await prisma.skill_event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skill_eventFindUniqueArgs>(args: SelectSubset<T, skill_eventFindUniqueArgs<ExtArgs>>): Prisma__skill_eventClient<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill_event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skill_eventFindUniqueOrThrowArgs} args - Arguments to find a Skill_event
     * @example
     * // Get one Skill_event
     * const skill_event = await prisma.skill_event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skill_eventFindUniqueOrThrowArgs>(args: SelectSubset<T, skill_eventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skill_eventClient<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill_event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_eventFindFirstArgs} args - Arguments to find a Skill_event
     * @example
     * // Get one Skill_event
     * const skill_event = await prisma.skill_event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skill_eventFindFirstArgs>(args?: SelectSubset<T, skill_eventFindFirstArgs<ExtArgs>>): Prisma__skill_eventClient<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill_event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_eventFindFirstOrThrowArgs} args - Arguments to find a Skill_event
     * @example
     * // Get one Skill_event
     * const skill_event = await prisma.skill_event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skill_eventFindFirstOrThrowArgs>(args?: SelectSubset<T, skill_eventFindFirstOrThrowArgs<ExtArgs>>): Prisma__skill_eventClient<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skill_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_eventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skill_events
     * const skill_events = await prisma.skill_event.findMany()
     * 
     * // Get first 10 Skill_events
     * const skill_events = await prisma.skill_event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skill_eventWithIdOnly = await prisma.skill_event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skill_eventFindManyArgs>(args?: SelectSubset<T, skill_eventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill_event.
     * @param {skill_eventCreateArgs} args - Arguments to create a Skill_event.
     * @example
     * // Create one Skill_event
     * const Skill_event = await prisma.skill_event.create({
     *   data: {
     *     // ... data to create a Skill_event
     *   }
     * })
     * 
     */
    create<T extends skill_eventCreateArgs>(args: SelectSubset<T, skill_eventCreateArgs<ExtArgs>>): Prisma__skill_eventClient<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skill_events.
     * @param {skill_eventCreateManyArgs} args - Arguments to create many Skill_events.
     * @example
     * // Create many Skill_events
     * const skill_event = await prisma.skill_event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skill_eventCreateManyArgs>(args?: SelectSubset<T, skill_eventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skill_events and returns the data saved in the database.
     * @param {skill_eventCreateManyAndReturnArgs} args - Arguments to create many Skill_events.
     * @example
     * // Create many Skill_events
     * const skill_event = await prisma.skill_event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skill_events and only return the `id`
     * const skill_eventWithIdOnly = await prisma.skill_event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends skill_eventCreateManyAndReturnArgs>(args?: SelectSubset<T, skill_eventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill_event.
     * @param {skill_eventDeleteArgs} args - Arguments to delete one Skill_event.
     * @example
     * // Delete one Skill_event
     * const Skill_event = await prisma.skill_event.delete({
     *   where: {
     *     // ... filter to delete one Skill_event
     *   }
     * })
     * 
     */
    delete<T extends skill_eventDeleteArgs>(args: SelectSubset<T, skill_eventDeleteArgs<ExtArgs>>): Prisma__skill_eventClient<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill_event.
     * @param {skill_eventUpdateArgs} args - Arguments to update one Skill_event.
     * @example
     * // Update one Skill_event
     * const skill_event = await prisma.skill_event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skill_eventUpdateArgs>(args: SelectSubset<T, skill_eventUpdateArgs<ExtArgs>>): Prisma__skill_eventClient<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skill_events.
     * @param {skill_eventDeleteManyArgs} args - Arguments to filter Skill_events to delete.
     * @example
     * // Delete a few Skill_events
     * const { count } = await prisma.skill_event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skill_eventDeleteManyArgs>(args?: SelectSubset<T, skill_eventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skill_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_eventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skill_events
     * const skill_event = await prisma.skill_event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skill_eventUpdateManyArgs>(args: SelectSubset<T, skill_eventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skill_events and returns the data updated in the database.
     * @param {skill_eventUpdateManyAndReturnArgs} args - Arguments to update many Skill_events.
     * @example
     * // Update many Skill_events
     * const skill_event = await prisma.skill_event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skill_events and only return the `id`
     * const skill_eventWithIdOnly = await prisma.skill_event.updateManyAndReturn({
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
    updateManyAndReturn<T extends skill_eventUpdateManyAndReturnArgs>(args: SelectSubset<T, skill_eventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill_event.
     * @param {skill_eventUpsertArgs} args - Arguments to update or create a Skill_event.
     * @example
     * // Update or create a Skill_event
     * const skill_event = await prisma.skill_event.upsert({
     *   create: {
     *     // ... data to create a Skill_event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill_event we want to update
     *   }
     * })
     */
    upsert<T extends skill_eventUpsertArgs>(args: SelectSubset<T, skill_eventUpsertArgs<ExtArgs>>): Prisma__skill_eventClient<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skill_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_eventCountArgs} args - Arguments to filter Skill_events to count.
     * @example
     * // Count the number of Skill_events
     * const count = await prisma.skill_event.count({
     *   where: {
     *     // ... the filter for the Skill_events we want to count
     *   }
     * })
    **/
    count<T extends skill_eventCountArgs>(
      args?: Subset<T, skill_eventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Skill_eventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill_event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Skill_eventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Skill_eventAggregateArgs>(args: Subset<T, Skill_eventAggregateArgs>): Prisma.PrismaPromise<GetSkill_eventAggregateType<T>>

    /**
     * Group by Skill_event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_eventGroupByArgs} args - Group by arguments.
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
      T extends skill_eventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skill_eventGroupByArgs['orderBy'] }
        : { orderBy?: skill_eventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skill_eventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkill_eventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skill_event model
   */
  readonly fields: skill_eventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skill_event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skill_eventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends eventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventDefaultArgs<ExtArgs>>): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill_event_type<T extends skill_event_typeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, skill_event_typeDefaultArgs<ExtArgs>>): Prisma__skill_event_typeClient<$Result.GetResult<Prisma.$skill_event_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends skillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, skillDefaultArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    source_type<T extends source_typeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, source_typeDefaultArgs<ExtArgs>>): Prisma__source_typeClient<$Result.GetResult<Prisma.$source_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the skill_event model
   */
  interface skill_eventFieldRefs {
    readonly id: FieldRef<"skill_event", 'String'>
    readonly event_id: FieldRef<"skill_event", 'String'>
    readonly user_id: FieldRef<"skill_event", 'Int'>
    readonly skill_id: FieldRef<"skill_event", 'String'>
    readonly skill_event_type_id: FieldRef<"skill_event", 'String'>
    readonly source_id: FieldRef<"skill_event", 'String'>
    readonly source_type_id: FieldRef<"skill_event", 'String'>
    readonly created_at: FieldRef<"skill_event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * skill_event findUnique
   */
  export type skill_eventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventInclude<ExtArgs> | null
    /**
     * Filter, which skill_event to fetch.
     */
    where: skill_eventWhereUniqueInput
  }

  /**
   * skill_event findUniqueOrThrow
   */
  export type skill_eventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventInclude<ExtArgs> | null
    /**
     * Filter, which skill_event to fetch.
     */
    where: skill_eventWhereUniqueInput
  }

  /**
   * skill_event findFirst
   */
  export type skill_eventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventInclude<ExtArgs> | null
    /**
     * Filter, which skill_event to fetch.
     */
    where?: skill_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skill_events to fetch.
     */
    orderBy?: skill_eventOrderByWithRelationInput | skill_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skill_events.
     */
    cursor?: skill_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skill_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skill_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skill_events.
     */
    distinct?: Skill_eventScalarFieldEnum | Skill_eventScalarFieldEnum[]
  }

  /**
   * skill_event findFirstOrThrow
   */
  export type skill_eventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventInclude<ExtArgs> | null
    /**
     * Filter, which skill_event to fetch.
     */
    where?: skill_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skill_events to fetch.
     */
    orderBy?: skill_eventOrderByWithRelationInput | skill_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skill_events.
     */
    cursor?: skill_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skill_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skill_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skill_events.
     */
    distinct?: Skill_eventScalarFieldEnum | Skill_eventScalarFieldEnum[]
  }

  /**
   * skill_event findMany
   */
  export type skill_eventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventInclude<ExtArgs> | null
    /**
     * Filter, which skill_events to fetch.
     */
    where?: skill_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skill_events to fetch.
     */
    orderBy?: skill_eventOrderByWithRelationInput | skill_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skill_events.
     */
    cursor?: skill_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skill_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skill_events.
     */
    skip?: number
    distinct?: Skill_eventScalarFieldEnum | Skill_eventScalarFieldEnum[]
  }

  /**
   * skill_event create
   */
  export type skill_eventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventInclude<ExtArgs> | null
    /**
     * The data needed to create a skill_event.
     */
    data: XOR<skill_eventCreateInput, skill_eventUncheckedCreateInput>
  }

  /**
   * skill_event createMany
   */
  export type skill_eventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skill_events.
     */
    data: skill_eventCreateManyInput | skill_eventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skill_event createManyAndReturn
   */
  export type skill_eventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * The data used to create many skill_events.
     */
    data: skill_eventCreateManyInput | skill_eventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * skill_event update
   */
  export type skill_eventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventInclude<ExtArgs> | null
    /**
     * The data needed to update a skill_event.
     */
    data: XOR<skill_eventUpdateInput, skill_eventUncheckedUpdateInput>
    /**
     * Choose, which skill_event to update.
     */
    where: skill_eventWhereUniqueInput
  }

  /**
   * skill_event updateMany
   */
  export type skill_eventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skill_events.
     */
    data: XOR<skill_eventUpdateManyMutationInput, skill_eventUncheckedUpdateManyInput>
    /**
     * Filter which skill_events to update
     */
    where?: skill_eventWhereInput
    /**
     * Limit how many skill_events to update.
     */
    limit?: number
  }

  /**
   * skill_event updateManyAndReturn
   */
  export type skill_eventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * The data used to update skill_events.
     */
    data: XOR<skill_eventUpdateManyMutationInput, skill_eventUncheckedUpdateManyInput>
    /**
     * Filter which skill_events to update
     */
    where?: skill_eventWhereInput
    /**
     * Limit how many skill_events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * skill_event upsert
   */
  export type skill_eventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventInclude<ExtArgs> | null
    /**
     * The filter to search for the skill_event to update in case it exists.
     */
    where: skill_eventWhereUniqueInput
    /**
     * In case the skill_event found by the `where` argument doesn't exist, create a new skill_event with this data.
     */
    create: XOR<skill_eventCreateInput, skill_eventUncheckedCreateInput>
    /**
     * In case the skill_event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skill_eventUpdateInput, skill_eventUncheckedUpdateInput>
  }

  /**
   * skill_event delete
   */
  export type skill_eventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventInclude<ExtArgs> | null
    /**
     * Filter which skill_event to delete.
     */
    where: skill_eventWhereUniqueInput
  }

  /**
   * skill_event deleteMany
   */
  export type skill_eventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skill_events to delete
     */
    where?: skill_eventWhereInput
    /**
     * Limit how many skill_events to delete.
     */
    limit?: number
  }

  /**
   * skill_event without action
   */
  export type skill_eventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventInclude<ExtArgs> | null
  }


  /**
   * Model skill_event_type
   */

  export type AggregateSkill_event_type = {
    _count: Skill_event_typeCountAggregateOutputType | null
    _min: Skill_event_typeMinAggregateOutputType | null
    _max: Skill_event_typeMaxAggregateOutputType | null
  }

  export type Skill_event_typeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Skill_event_typeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Skill_event_typeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Skill_event_typeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Skill_event_typeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Skill_event_typeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Skill_event_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skill_event_type to aggregate.
     */
    where?: skill_event_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skill_event_types to fetch.
     */
    orderBy?: skill_event_typeOrderByWithRelationInput | skill_event_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skill_event_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skill_event_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skill_event_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skill_event_types
    **/
    _count?: true | Skill_event_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Skill_event_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Skill_event_typeMaxAggregateInputType
  }

  export type GetSkill_event_typeAggregateType<T extends Skill_event_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill_event_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill_event_type[P]>
      : GetScalarType<T[P], AggregateSkill_event_type[P]>
  }




  export type skill_event_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skill_event_typeWhereInput
    orderBy?: skill_event_typeOrderByWithAggregationInput | skill_event_typeOrderByWithAggregationInput[]
    by: Skill_event_typeScalarFieldEnum[] | Skill_event_typeScalarFieldEnum
    having?: skill_event_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Skill_event_typeCountAggregateInputType | true
    _min?: Skill_event_typeMinAggregateInputType
    _max?: Skill_event_typeMaxAggregateInputType
  }

  export type Skill_event_typeGroupByOutputType = {
    id: string
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: Skill_event_typeCountAggregateOutputType | null
    _min: Skill_event_typeMinAggregateOutputType | null
    _max: Skill_event_typeMaxAggregateOutputType | null
  }

  type GetSkill_event_typeGroupByPayload<T extends skill_event_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Skill_event_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Skill_event_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Skill_event_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Skill_event_typeGroupByOutputType[P]>
        }
      >
    >


  export type skill_event_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    skill_event?: boolean | skill_event_type$skill_eventArgs<ExtArgs>
    _count?: boolean | Skill_event_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill_event_type"]>

  export type skill_event_typeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["skill_event_type"]>

  export type skill_event_typeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["skill_event_type"]>

  export type skill_event_typeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type skill_event_typeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["skill_event_type"]>
  export type skill_event_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill_event?: boolean | skill_event_type$skill_eventArgs<ExtArgs>
    _count?: boolean | Skill_event_typeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type skill_event_typeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type skill_event_typeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $skill_event_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skill_event_type"
    objects: {
      skill_event: Prisma.$skill_eventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["skill_event_type"]>
    composites: {}
  }

  type skill_event_typeGetPayload<S extends boolean | null | undefined | skill_event_typeDefaultArgs> = $Result.GetResult<Prisma.$skill_event_typePayload, S>

  type skill_event_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skill_event_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Skill_event_typeCountAggregateInputType | true
    }

  export interface skill_event_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skill_event_type'], meta: { name: 'skill_event_type' } }
    /**
     * Find zero or one Skill_event_type that matches the filter.
     * @param {skill_event_typeFindUniqueArgs} args - Arguments to find a Skill_event_type
     * @example
     * // Get one Skill_event_type
     * const skill_event_type = await prisma.skill_event_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skill_event_typeFindUniqueArgs>(args: SelectSubset<T, skill_event_typeFindUniqueArgs<ExtArgs>>): Prisma__skill_event_typeClient<$Result.GetResult<Prisma.$skill_event_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill_event_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skill_event_typeFindUniqueOrThrowArgs} args - Arguments to find a Skill_event_type
     * @example
     * // Get one Skill_event_type
     * const skill_event_type = await prisma.skill_event_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skill_event_typeFindUniqueOrThrowArgs>(args: SelectSubset<T, skill_event_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skill_event_typeClient<$Result.GetResult<Prisma.$skill_event_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill_event_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_event_typeFindFirstArgs} args - Arguments to find a Skill_event_type
     * @example
     * // Get one Skill_event_type
     * const skill_event_type = await prisma.skill_event_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skill_event_typeFindFirstArgs>(args?: SelectSubset<T, skill_event_typeFindFirstArgs<ExtArgs>>): Prisma__skill_event_typeClient<$Result.GetResult<Prisma.$skill_event_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill_event_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_event_typeFindFirstOrThrowArgs} args - Arguments to find a Skill_event_type
     * @example
     * // Get one Skill_event_type
     * const skill_event_type = await prisma.skill_event_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skill_event_typeFindFirstOrThrowArgs>(args?: SelectSubset<T, skill_event_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma__skill_event_typeClient<$Result.GetResult<Prisma.$skill_event_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skill_event_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_event_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skill_event_types
     * const skill_event_types = await prisma.skill_event_type.findMany()
     * 
     * // Get first 10 Skill_event_types
     * const skill_event_types = await prisma.skill_event_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skill_event_typeWithIdOnly = await prisma.skill_event_type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skill_event_typeFindManyArgs>(args?: SelectSubset<T, skill_event_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skill_event_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill_event_type.
     * @param {skill_event_typeCreateArgs} args - Arguments to create a Skill_event_type.
     * @example
     * // Create one Skill_event_type
     * const Skill_event_type = await prisma.skill_event_type.create({
     *   data: {
     *     // ... data to create a Skill_event_type
     *   }
     * })
     * 
     */
    create<T extends skill_event_typeCreateArgs>(args: SelectSubset<T, skill_event_typeCreateArgs<ExtArgs>>): Prisma__skill_event_typeClient<$Result.GetResult<Prisma.$skill_event_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skill_event_types.
     * @param {skill_event_typeCreateManyArgs} args - Arguments to create many Skill_event_types.
     * @example
     * // Create many Skill_event_types
     * const skill_event_type = await prisma.skill_event_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skill_event_typeCreateManyArgs>(args?: SelectSubset<T, skill_event_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skill_event_types and returns the data saved in the database.
     * @param {skill_event_typeCreateManyAndReturnArgs} args - Arguments to create many Skill_event_types.
     * @example
     * // Create many Skill_event_types
     * const skill_event_type = await prisma.skill_event_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skill_event_types and only return the `id`
     * const skill_event_typeWithIdOnly = await prisma.skill_event_type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends skill_event_typeCreateManyAndReturnArgs>(args?: SelectSubset<T, skill_event_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skill_event_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill_event_type.
     * @param {skill_event_typeDeleteArgs} args - Arguments to delete one Skill_event_type.
     * @example
     * // Delete one Skill_event_type
     * const Skill_event_type = await prisma.skill_event_type.delete({
     *   where: {
     *     // ... filter to delete one Skill_event_type
     *   }
     * })
     * 
     */
    delete<T extends skill_event_typeDeleteArgs>(args: SelectSubset<T, skill_event_typeDeleteArgs<ExtArgs>>): Prisma__skill_event_typeClient<$Result.GetResult<Prisma.$skill_event_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill_event_type.
     * @param {skill_event_typeUpdateArgs} args - Arguments to update one Skill_event_type.
     * @example
     * // Update one Skill_event_type
     * const skill_event_type = await prisma.skill_event_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skill_event_typeUpdateArgs>(args: SelectSubset<T, skill_event_typeUpdateArgs<ExtArgs>>): Prisma__skill_event_typeClient<$Result.GetResult<Prisma.$skill_event_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skill_event_types.
     * @param {skill_event_typeDeleteManyArgs} args - Arguments to filter Skill_event_types to delete.
     * @example
     * // Delete a few Skill_event_types
     * const { count } = await prisma.skill_event_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skill_event_typeDeleteManyArgs>(args?: SelectSubset<T, skill_event_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skill_event_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_event_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skill_event_types
     * const skill_event_type = await prisma.skill_event_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skill_event_typeUpdateManyArgs>(args: SelectSubset<T, skill_event_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skill_event_types and returns the data updated in the database.
     * @param {skill_event_typeUpdateManyAndReturnArgs} args - Arguments to update many Skill_event_types.
     * @example
     * // Update many Skill_event_types
     * const skill_event_type = await prisma.skill_event_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skill_event_types and only return the `id`
     * const skill_event_typeWithIdOnly = await prisma.skill_event_type.updateManyAndReturn({
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
    updateManyAndReturn<T extends skill_event_typeUpdateManyAndReturnArgs>(args: SelectSubset<T, skill_event_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skill_event_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill_event_type.
     * @param {skill_event_typeUpsertArgs} args - Arguments to update or create a Skill_event_type.
     * @example
     * // Update or create a Skill_event_type
     * const skill_event_type = await prisma.skill_event_type.upsert({
     *   create: {
     *     // ... data to create a Skill_event_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill_event_type we want to update
     *   }
     * })
     */
    upsert<T extends skill_event_typeUpsertArgs>(args: SelectSubset<T, skill_event_typeUpsertArgs<ExtArgs>>): Prisma__skill_event_typeClient<$Result.GetResult<Prisma.$skill_event_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skill_event_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_event_typeCountArgs} args - Arguments to filter Skill_event_types to count.
     * @example
     * // Count the number of Skill_event_types
     * const count = await prisma.skill_event_type.count({
     *   where: {
     *     // ... the filter for the Skill_event_types we want to count
     *   }
     * })
    **/
    count<T extends skill_event_typeCountArgs>(
      args?: Subset<T, skill_event_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Skill_event_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill_event_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Skill_event_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Skill_event_typeAggregateArgs>(args: Subset<T, Skill_event_typeAggregateArgs>): Prisma.PrismaPromise<GetSkill_event_typeAggregateType<T>>

    /**
     * Group by Skill_event_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skill_event_typeGroupByArgs} args - Group by arguments.
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
      T extends skill_event_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skill_event_typeGroupByArgs['orderBy'] }
        : { orderBy?: skill_event_typeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skill_event_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkill_event_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skill_event_type model
   */
  readonly fields: skill_event_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skill_event_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skill_event_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill_event<T extends skill_event_type$skill_eventArgs<ExtArgs> = {}>(args?: Subset<T, skill_event_type$skill_eventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the skill_event_type model
   */
  interface skill_event_typeFieldRefs {
    readonly id: FieldRef<"skill_event_type", 'String'>
    readonly name: FieldRef<"skill_event_type", 'String'>
    readonly description: FieldRef<"skill_event_type", 'String'>
    readonly created_at: FieldRef<"skill_event_type", 'DateTime'>
    readonly updated_at: FieldRef<"skill_event_type", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * skill_event_type findUnique
   */
  export type skill_event_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event_type
     */
    select?: skill_event_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event_type
     */
    omit?: skill_event_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_event_typeInclude<ExtArgs> | null
    /**
     * Filter, which skill_event_type to fetch.
     */
    where: skill_event_typeWhereUniqueInput
  }

  /**
   * skill_event_type findUniqueOrThrow
   */
  export type skill_event_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event_type
     */
    select?: skill_event_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event_type
     */
    omit?: skill_event_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_event_typeInclude<ExtArgs> | null
    /**
     * Filter, which skill_event_type to fetch.
     */
    where: skill_event_typeWhereUniqueInput
  }

  /**
   * skill_event_type findFirst
   */
  export type skill_event_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event_type
     */
    select?: skill_event_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event_type
     */
    omit?: skill_event_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_event_typeInclude<ExtArgs> | null
    /**
     * Filter, which skill_event_type to fetch.
     */
    where?: skill_event_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skill_event_types to fetch.
     */
    orderBy?: skill_event_typeOrderByWithRelationInput | skill_event_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skill_event_types.
     */
    cursor?: skill_event_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skill_event_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skill_event_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skill_event_types.
     */
    distinct?: Skill_event_typeScalarFieldEnum | Skill_event_typeScalarFieldEnum[]
  }

  /**
   * skill_event_type findFirstOrThrow
   */
  export type skill_event_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event_type
     */
    select?: skill_event_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event_type
     */
    omit?: skill_event_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_event_typeInclude<ExtArgs> | null
    /**
     * Filter, which skill_event_type to fetch.
     */
    where?: skill_event_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skill_event_types to fetch.
     */
    orderBy?: skill_event_typeOrderByWithRelationInput | skill_event_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skill_event_types.
     */
    cursor?: skill_event_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skill_event_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skill_event_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skill_event_types.
     */
    distinct?: Skill_event_typeScalarFieldEnum | Skill_event_typeScalarFieldEnum[]
  }

  /**
   * skill_event_type findMany
   */
  export type skill_event_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event_type
     */
    select?: skill_event_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event_type
     */
    omit?: skill_event_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_event_typeInclude<ExtArgs> | null
    /**
     * Filter, which skill_event_types to fetch.
     */
    where?: skill_event_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skill_event_types to fetch.
     */
    orderBy?: skill_event_typeOrderByWithRelationInput | skill_event_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skill_event_types.
     */
    cursor?: skill_event_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skill_event_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skill_event_types.
     */
    skip?: number
    distinct?: Skill_event_typeScalarFieldEnum | Skill_event_typeScalarFieldEnum[]
  }

  /**
   * skill_event_type create
   */
  export type skill_event_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event_type
     */
    select?: skill_event_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event_type
     */
    omit?: skill_event_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_event_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a skill_event_type.
     */
    data: XOR<skill_event_typeCreateInput, skill_event_typeUncheckedCreateInput>
  }

  /**
   * skill_event_type createMany
   */
  export type skill_event_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skill_event_types.
     */
    data: skill_event_typeCreateManyInput | skill_event_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skill_event_type createManyAndReturn
   */
  export type skill_event_typeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event_type
     */
    select?: skill_event_typeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event_type
     */
    omit?: skill_event_typeOmit<ExtArgs> | null
    /**
     * The data used to create many skill_event_types.
     */
    data: skill_event_typeCreateManyInput | skill_event_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skill_event_type update
   */
  export type skill_event_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event_type
     */
    select?: skill_event_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event_type
     */
    omit?: skill_event_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_event_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a skill_event_type.
     */
    data: XOR<skill_event_typeUpdateInput, skill_event_typeUncheckedUpdateInput>
    /**
     * Choose, which skill_event_type to update.
     */
    where: skill_event_typeWhereUniqueInput
  }

  /**
   * skill_event_type updateMany
   */
  export type skill_event_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skill_event_types.
     */
    data: XOR<skill_event_typeUpdateManyMutationInput, skill_event_typeUncheckedUpdateManyInput>
    /**
     * Filter which skill_event_types to update
     */
    where?: skill_event_typeWhereInput
    /**
     * Limit how many skill_event_types to update.
     */
    limit?: number
  }

  /**
   * skill_event_type updateManyAndReturn
   */
  export type skill_event_typeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event_type
     */
    select?: skill_event_typeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event_type
     */
    omit?: skill_event_typeOmit<ExtArgs> | null
    /**
     * The data used to update skill_event_types.
     */
    data: XOR<skill_event_typeUpdateManyMutationInput, skill_event_typeUncheckedUpdateManyInput>
    /**
     * Filter which skill_event_types to update
     */
    where?: skill_event_typeWhereInput
    /**
     * Limit how many skill_event_types to update.
     */
    limit?: number
  }

  /**
   * skill_event_type upsert
   */
  export type skill_event_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event_type
     */
    select?: skill_event_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event_type
     */
    omit?: skill_event_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_event_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the skill_event_type to update in case it exists.
     */
    where: skill_event_typeWhereUniqueInput
    /**
     * In case the skill_event_type found by the `where` argument doesn't exist, create a new skill_event_type with this data.
     */
    create: XOR<skill_event_typeCreateInput, skill_event_typeUncheckedCreateInput>
    /**
     * In case the skill_event_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skill_event_typeUpdateInput, skill_event_typeUncheckedUpdateInput>
  }

  /**
   * skill_event_type delete
   */
  export type skill_event_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event_type
     */
    select?: skill_event_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event_type
     */
    omit?: skill_event_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_event_typeInclude<ExtArgs> | null
    /**
     * Filter which skill_event_type to delete.
     */
    where: skill_event_typeWhereUniqueInput
  }

  /**
   * skill_event_type deleteMany
   */
  export type skill_event_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skill_event_types to delete
     */
    where?: skill_event_typeWhereInput
    /**
     * Limit how many skill_event_types to delete.
     */
    limit?: number
  }

  /**
   * skill_event_type.skill_event
   */
  export type skill_event_type$skill_eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventInclude<ExtArgs> | null
    where?: skill_eventWhereInput
    orderBy?: skill_eventOrderByWithRelationInput | skill_eventOrderByWithRelationInput[]
    cursor?: skill_eventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Skill_eventScalarFieldEnum | Skill_eventScalarFieldEnum[]
  }

  /**
   * skill_event_type without action
   */
  export type skill_event_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event_type
     */
    select?: skill_event_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event_type
     */
    omit?: skill_event_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_event_typeInclude<ExtArgs> | null
  }


  /**
   * Model source_type
   */

  export type AggregateSource_type = {
    _count: Source_typeCountAggregateOutputType | null
    _min: Source_typeMinAggregateOutputType | null
    _max: Source_typeMaxAggregateOutputType | null
  }

  export type Source_typeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Source_typeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Source_typeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Source_typeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Source_typeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Source_typeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Source_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which source_type to aggregate.
     */
    where?: source_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of source_types to fetch.
     */
    orderBy?: source_typeOrderByWithRelationInput | source_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: source_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` source_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` source_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned source_types
    **/
    _count?: true | Source_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Source_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Source_typeMaxAggregateInputType
  }

  export type GetSource_typeAggregateType<T extends Source_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateSource_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSource_type[P]>
      : GetScalarType<T[P], AggregateSource_type[P]>
  }




  export type source_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: source_typeWhereInput
    orderBy?: source_typeOrderByWithAggregationInput | source_typeOrderByWithAggregationInput[]
    by: Source_typeScalarFieldEnum[] | Source_typeScalarFieldEnum
    having?: source_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Source_typeCountAggregateInputType | true
    _min?: Source_typeMinAggregateInputType
    _max?: Source_typeMaxAggregateInputType
  }

  export type Source_typeGroupByOutputType = {
    id: string
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: Source_typeCountAggregateOutputType | null
    _min: Source_typeMinAggregateOutputType | null
    _max: Source_typeMaxAggregateOutputType | null
  }

  type GetSource_typeGroupByPayload<T extends source_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Source_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Source_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Source_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Source_typeGroupByOutputType[P]>
        }
      >
    >


  export type source_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    skill_event?: boolean | source_type$skill_eventArgs<ExtArgs>
    _count?: boolean | Source_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["source_type"]>

  export type source_typeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["source_type"]>

  export type source_typeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["source_type"]>

  export type source_typeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type source_typeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["source_type"]>
  export type source_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill_event?: boolean | source_type$skill_eventArgs<ExtArgs>
    _count?: boolean | Source_typeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type source_typeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type source_typeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $source_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "source_type"
    objects: {
      skill_event: Prisma.$skill_eventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["source_type"]>
    composites: {}
  }

  type source_typeGetPayload<S extends boolean | null | undefined | source_typeDefaultArgs> = $Result.GetResult<Prisma.$source_typePayload, S>

  type source_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<source_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Source_typeCountAggregateInputType | true
    }

  export interface source_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['source_type'], meta: { name: 'source_type' } }
    /**
     * Find zero or one Source_type that matches the filter.
     * @param {source_typeFindUniqueArgs} args - Arguments to find a Source_type
     * @example
     * // Get one Source_type
     * const source_type = await prisma.source_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends source_typeFindUniqueArgs>(args: SelectSubset<T, source_typeFindUniqueArgs<ExtArgs>>): Prisma__source_typeClient<$Result.GetResult<Prisma.$source_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Source_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {source_typeFindUniqueOrThrowArgs} args - Arguments to find a Source_type
     * @example
     * // Get one Source_type
     * const source_type = await prisma.source_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends source_typeFindUniqueOrThrowArgs>(args: SelectSubset<T, source_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__source_typeClient<$Result.GetResult<Prisma.$source_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Source_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {source_typeFindFirstArgs} args - Arguments to find a Source_type
     * @example
     * // Get one Source_type
     * const source_type = await prisma.source_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends source_typeFindFirstArgs>(args?: SelectSubset<T, source_typeFindFirstArgs<ExtArgs>>): Prisma__source_typeClient<$Result.GetResult<Prisma.$source_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Source_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {source_typeFindFirstOrThrowArgs} args - Arguments to find a Source_type
     * @example
     * // Get one Source_type
     * const source_type = await prisma.source_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends source_typeFindFirstOrThrowArgs>(args?: SelectSubset<T, source_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma__source_typeClient<$Result.GetResult<Prisma.$source_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Source_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {source_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Source_types
     * const source_types = await prisma.source_type.findMany()
     * 
     * // Get first 10 Source_types
     * const source_types = await prisma.source_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const source_typeWithIdOnly = await prisma.source_type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends source_typeFindManyArgs>(args?: SelectSubset<T, source_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$source_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Source_type.
     * @param {source_typeCreateArgs} args - Arguments to create a Source_type.
     * @example
     * // Create one Source_type
     * const Source_type = await prisma.source_type.create({
     *   data: {
     *     // ... data to create a Source_type
     *   }
     * })
     * 
     */
    create<T extends source_typeCreateArgs>(args: SelectSubset<T, source_typeCreateArgs<ExtArgs>>): Prisma__source_typeClient<$Result.GetResult<Prisma.$source_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Source_types.
     * @param {source_typeCreateManyArgs} args - Arguments to create many Source_types.
     * @example
     * // Create many Source_types
     * const source_type = await prisma.source_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends source_typeCreateManyArgs>(args?: SelectSubset<T, source_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Source_types and returns the data saved in the database.
     * @param {source_typeCreateManyAndReturnArgs} args - Arguments to create many Source_types.
     * @example
     * // Create many Source_types
     * const source_type = await prisma.source_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Source_types and only return the `id`
     * const source_typeWithIdOnly = await prisma.source_type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends source_typeCreateManyAndReturnArgs>(args?: SelectSubset<T, source_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$source_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Source_type.
     * @param {source_typeDeleteArgs} args - Arguments to delete one Source_type.
     * @example
     * // Delete one Source_type
     * const Source_type = await prisma.source_type.delete({
     *   where: {
     *     // ... filter to delete one Source_type
     *   }
     * })
     * 
     */
    delete<T extends source_typeDeleteArgs>(args: SelectSubset<T, source_typeDeleteArgs<ExtArgs>>): Prisma__source_typeClient<$Result.GetResult<Prisma.$source_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Source_type.
     * @param {source_typeUpdateArgs} args - Arguments to update one Source_type.
     * @example
     * // Update one Source_type
     * const source_type = await prisma.source_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends source_typeUpdateArgs>(args: SelectSubset<T, source_typeUpdateArgs<ExtArgs>>): Prisma__source_typeClient<$Result.GetResult<Prisma.$source_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Source_types.
     * @param {source_typeDeleteManyArgs} args - Arguments to filter Source_types to delete.
     * @example
     * // Delete a few Source_types
     * const { count } = await prisma.source_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends source_typeDeleteManyArgs>(args?: SelectSubset<T, source_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Source_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {source_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Source_types
     * const source_type = await prisma.source_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends source_typeUpdateManyArgs>(args: SelectSubset<T, source_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Source_types and returns the data updated in the database.
     * @param {source_typeUpdateManyAndReturnArgs} args - Arguments to update many Source_types.
     * @example
     * // Update many Source_types
     * const source_type = await prisma.source_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Source_types and only return the `id`
     * const source_typeWithIdOnly = await prisma.source_type.updateManyAndReturn({
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
    updateManyAndReturn<T extends source_typeUpdateManyAndReturnArgs>(args: SelectSubset<T, source_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$source_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Source_type.
     * @param {source_typeUpsertArgs} args - Arguments to update or create a Source_type.
     * @example
     * // Update or create a Source_type
     * const source_type = await prisma.source_type.upsert({
     *   create: {
     *     // ... data to create a Source_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Source_type we want to update
     *   }
     * })
     */
    upsert<T extends source_typeUpsertArgs>(args: SelectSubset<T, source_typeUpsertArgs<ExtArgs>>): Prisma__source_typeClient<$Result.GetResult<Prisma.$source_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Source_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {source_typeCountArgs} args - Arguments to filter Source_types to count.
     * @example
     * // Count the number of Source_types
     * const count = await prisma.source_type.count({
     *   where: {
     *     // ... the filter for the Source_types we want to count
     *   }
     * })
    **/
    count<T extends source_typeCountArgs>(
      args?: Subset<T, source_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Source_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Source_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Source_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Source_typeAggregateArgs>(args: Subset<T, Source_typeAggregateArgs>): Prisma.PrismaPromise<GetSource_typeAggregateType<T>>

    /**
     * Group by Source_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {source_typeGroupByArgs} args - Group by arguments.
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
      T extends source_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: source_typeGroupByArgs['orderBy'] }
        : { orderBy?: source_typeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, source_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSource_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the source_type model
   */
  readonly fields: source_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for source_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__source_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill_event<T extends source_type$skill_eventArgs<ExtArgs> = {}>(args?: Subset<T, source_type$skill_eventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skill_eventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the source_type model
   */
  interface source_typeFieldRefs {
    readonly id: FieldRef<"source_type", 'String'>
    readonly name: FieldRef<"source_type", 'String'>
    readonly description: FieldRef<"source_type", 'String'>
    readonly created_at: FieldRef<"source_type", 'DateTime'>
    readonly updated_at: FieldRef<"source_type", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * source_type findUnique
   */
  export type source_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the source_type
     */
    select?: source_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the source_type
     */
    omit?: source_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: source_typeInclude<ExtArgs> | null
    /**
     * Filter, which source_type to fetch.
     */
    where: source_typeWhereUniqueInput
  }

  /**
   * source_type findUniqueOrThrow
   */
  export type source_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the source_type
     */
    select?: source_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the source_type
     */
    omit?: source_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: source_typeInclude<ExtArgs> | null
    /**
     * Filter, which source_type to fetch.
     */
    where: source_typeWhereUniqueInput
  }

  /**
   * source_type findFirst
   */
  export type source_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the source_type
     */
    select?: source_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the source_type
     */
    omit?: source_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: source_typeInclude<ExtArgs> | null
    /**
     * Filter, which source_type to fetch.
     */
    where?: source_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of source_types to fetch.
     */
    orderBy?: source_typeOrderByWithRelationInput | source_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for source_types.
     */
    cursor?: source_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` source_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` source_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of source_types.
     */
    distinct?: Source_typeScalarFieldEnum | Source_typeScalarFieldEnum[]
  }

  /**
   * source_type findFirstOrThrow
   */
  export type source_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the source_type
     */
    select?: source_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the source_type
     */
    omit?: source_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: source_typeInclude<ExtArgs> | null
    /**
     * Filter, which source_type to fetch.
     */
    where?: source_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of source_types to fetch.
     */
    orderBy?: source_typeOrderByWithRelationInput | source_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for source_types.
     */
    cursor?: source_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` source_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` source_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of source_types.
     */
    distinct?: Source_typeScalarFieldEnum | Source_typeScalarFieldEnum[]
  }

  /**
   * source_type findMany
   */
  export type source_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the source_type
     */
    select?: source_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the source_type
     */
    omit?: source_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: source_typeInclude<ExtArgs> | null
    /**
     * Filter, which source_types to fetch.
     */
    where?: source_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of source_types to fetch.
     */
    orderBy?: source_typeOrderByWithRelationInput | source_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing source_types.
     */
    cursor?: source_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` source_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` source_types.
     */
    skip?: number
    distinct?: Source_typeScalarFieldEnum | Source_typeScalarFieldEnum[]
  }

  /**
   * source_type create
   */
  export type source_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the source_type
     */
    select?: source_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the source_type
     */
    omit?: source_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: source_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a source_type.
     */
    data: XOR<source_typeCreateInput, source_typeUncheckedCreateInput>
  }

  /**
   * source_type createMany
   */
  export type source_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many source_types.
     */
    data: source_typeCreateManyInput | source_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * source_type createManyAndReturn
   */
  export type source_typeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the source_type
     */
    select?: source_typeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the source_type
     */
    omit?: source_typeOmit<ExtArgs> | null
    /**
     * The data used to create many source_types.
     */
    data: source_typeCreateManyInput | source_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * source_type update
   */
  export type source_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the source_type
     */
    select?: source_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the source_type
     */
    omit?: source_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: source_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a source_type.
     */
    data: XOR<source_typeUpdateInput, source_typeUncheckedUpdateInput>
    /**
     * Choose, which source_type to update.
     */
    where: source_typeWhereUniqueInput
  }

  /**
   * source_type updateMany
   */
  export type source_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update source_types.
     */
    data: XOR<source_typeUpdateManyMutationInput, source_typeUncheckedUpdateManyInput>
    /**
     * Filter which source_types to update
     */
    where?: source_typeWhereInput
    /**
     * Limit how many source_types to update.
     */
    limit?: number
  }

  /**
   * source_type updateManyAndReturn
   */
  export type source_typeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the source_type
     */
    select?: source_typeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the source_type
     */
    omit?: source_typeOmit<ExtArgs> | null
    /**
     * The data used to update source_types.
     */
    data: XOR<source_typeUpdateManyMutationInput, source_typeUncheckedUpdateManyInput>
    /**
     * Filter which source_types to update
     */
    where?: source_typeWhereInput
    /**
     * Limit how many source_types to update.
     */
    limit?: number
  }

  /**
   * source_type upsert
   */
  export type source_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the source_type
     */
    select?: source_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the source_type
     */
    omit?: source_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: source_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the source_type to update in case it exists.
     */
    where: source_typeWhereUniqueInput
    /**
     * In case the source_type found by the `where` argument doesn't exist, create a new source_type with this data.
     */
    create: XOR<source_typeCreateInput, source_typeUncheckedCreateInput>
    /**
     * In case the source_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<source_typeUpdateInput, source_typeUncheckedUpdateInput>
  }

  /**
   * source_type delete
   */
  export type source_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the source_type
     */
    select?: source_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the source_type
     */
    omit?: source_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: source_typeInclude<ExtArgs> | null
    /**
     * Filter which source_type to delete.
     */
    where: source_typeWhereUniqueInput
  }

  /**
   * source_type deleteMany
   */
  export type source_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which source_types to delete
     */
    where?: source_typeWhereInput
    /**
     * Limit how many source_types to delete.
     */
    limit?: number
  }

  /**
   * source_type.skill_event
   */
  export type source_type$skill_eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill_event
     */
    select?: skill_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill_event
     */
    omit?: skill_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skill_eventInclude<ExtArgs> | null
    where?: skill_eventWhereInput
    orderBy?: skill_eventOrderByWithRelationInput | skill_eventOrderByWithRelationInput[]
    cursor?: skill_eventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Skill_eventScalarFieldEnum | Skill_eventScalarFieldEnum[]
  }

  /**
   * source_type without action
   */
  export type source_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the source_type
     */
    select?: source_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the source_type
     */
    omit?: source_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: source_typeInclude<ExtArgs> | null
  }


  /**
   * Model user_skill
   */

  export type AggregateUser_skill = {
    _count: User_skillCountAggregateOutputType | null
    _avg: User_skillAvgAggregateOutputType | null
    _sum: User_skillSumAggregateOutputType | null
    _min: User_skillMinAggregateOutputType | null
    _max: User_skillMaxAggregateOutputType | null
  }

  export type User_skillAvgAggregateOutputType = {
    user_id: number | null
  }

  export type User_skillSumAggregateOutputType = {
    user_id: number | null
  }

  export type User_skillMinAggregateOutputType = {
    id: string | null
    user_id: number | null
    skill_id: string | null
    user_skill_level_id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_skill_display_mode_id: string | null
  }

  export type User_skillMaxAggregateOutputType = {
    id: string | null
    user_id: number | null
    skill_id: string | null
    user_skill_level_id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_skill_display_mode_id: string | null
  }

  export type User_skillCountAggregateOutputType = {
    id: number
    user_id: number
    skill_id: number
    user_skill_level_id: number
    created_at: number
    updated_at: number
    user_skill_display_mode_id: number
    _all: number
  }


  export type User_skillAvgAggregateInputType = {
    user_id?: true
  }

  export type User_skillSumAggregateInputType = {
    user_id?: true
  }

  export type User_skillMinAggregateInputType = {
    id?: true
    user_id?: true
    skill_id?: true
    user_skill_level_id?: true
    created_at?: true
    updated_at?: true
    user_skill_display_mode_id?: true
  }

  export type User_skillMaxAggregateInputType = {
    id?: true
    user_id?: true
    skill_id?: true
    user_skill_level_id?: true
    created_at?: true
    updated_at?: true
    user_skill_display_mode_id?: true
  }

  export type User_skillCountAggregateInputType = {
    id?: true
    user_id?: true
    skill_id?: true
    user_skill_level_id?: true
    created_at?: true
    updated_at?: true
    user_skill_display_mode_id?: true
    _all?: true
  }

  export type User_skillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_skill to aggregate.
     */
    where?: user_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_skills to fetch.
     */
    orderBy?: user_skillOrderByWithRelationInput | user_skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_skills
    **/
    _count?: true | User_skillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_skillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_skillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_skillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_skillMaxAggregateInputType
  }

  export type GetUser_skillAggregateType<T extends User_skillAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_skill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_skill[P]>
      : GetScalarType<T[P], AggregateUser_skill[P]>
  }




  export type user_skillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_skillWhereInput
    orderBy?: user_skillOrderByWithAggregationInput | user_skillOrderByWithAggregationInput[]
    by: User_skillScalarFieldEnum[] | User_skillScalarFieldEnum
    having?: user_skillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_skillCountAggregateInputType | true
    _avg?: User_skillAvgAggregateInputType
    _sum?: User_skillSumAggregateInputType
    _min?: User_skillMinAggregateInputType
    _max?: User_skillMaxAggregateInputType
  }

  export type User_skillGroupByOutputType = {
    id: string
    user_id: number
    skill_id: string
    user_skill_level_id: string
    created_at: Date
    updated_at: Date
    user_skill_display_mode_id: string
    _count: User_skillCountAggregateOutputType | null
    _avg: User_skillAvgAggregateOutputType | null
    _sum: User_skillSumAggregateOutputType | null
    _min: User_skillMinAggregateOutputType | null
    _max: User_skillMaxAggregateOutputType | null
  }

  type GetUser_skillGroupByPayload<T extends user_skillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_skillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_skillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_skillGroupByOutputType[P]>
            : GetScalarType<T[P], User_skillGroupByOutputType[P]>
        }
      >
    >


  export type user_skillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    skill_id?: boolean
    user_skill_level_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_skill_display_mode_id?: boolean
    skill?: boolean | skillDefaultArgs<ExtArgs>
    user_skill_display_mode?: boolean | user_skill_display_modeDefaultArgs<ExtArgs>
    user_skill_level?: boolean | user_skill_levelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_skill"]>

  export type user_skillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    skill_id?: boolean
    user_skill_level_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_skill_display_mode_id?: boolean
    skill?: boolean | skillDefaultArgs<ExtArgs>
    user_skill_display_mode?: boolean | user_skill_display_modeDefaultArgs<ExtArgs>
    user_skill_level?: boolean | user_skill_levelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_skill"]>

  export type user_skillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    skill_id?: boolean
    user_skill_level_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_skill_display_mode_id?: boolean
    skill?: boolean | skillDefaultArgs<ExtArgs>
    user_skill_display_mode?: boolean | user_skill_display_modeDefaultArgs<ExtArgs>
    user_skill_level?: boolean | user_skill_levelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_skill"]>

  export type user_skillSelectScalar = {
    id?: boolean
    user_id?: boolean
    skill_id?: boolean
    user_skill_level_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_skill_display_mode_id?: boolean
  }

  export type user_skillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "skill_id" | "user_skill_level_id" | "created_at" | "updated_at" | "user_skill_display_mode_id", ExtArgs["result"]["user_skill"]>
  export type user_skillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | skillDefaultArgs<ExtArgs>
    user_skill_display_mode?: boolean | user_skill_display_modeDefaultArgs<ExtArgs>
    user_skill_level?: boolean | user_skill_levelDefaultArgs<ExtArgs>
  }
  export type user_skillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | skillDefaultArgs<ExtArgs>
    user_skill_display_mode?: boolean | user_skill_display_modeDefaultArgs<ExtArgs>
    user_skill_level?: boolean | user_skill_levelDefaultArgs<ExtArgs>
  }
  export type user_skillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | skillDefaultArgs<ExtArgs>
    user_skill_display_mode?: boolean | user_skill_display_modeDefaultArgs<ExtArgs>
    user_skill_level?: boolean | user_skill_levelDefaultArgs<ExtArgs>
  }

  export type $user_skillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_skill"
    objects: {
      skill: Prisma.$skillPayload<ExtArgs>
      user_skill_display_mode: Prisma.$user_skill_display_modePayload<ExtArgs>
      user_skill_level: Prisma.$user_skill_levelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: number
      skill_id: string
      user_skill_level_id: string
      created_at: Date
      updated_at: Date
      user_skill_display_mode_id: string
    }, ExtArgs["result"]["user_skill"]>
    composites: {}
  }

  type user_skillGetPayload<S extends boolean | null | undefined | user_skillDefaultArgs> = $Result.GetResult<Prisma.$user_skillPayload, S>

  type user_skillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_skillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_skillCountAggregateInputType | true
    }

  export interface user_skillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_skill'], meta: { name: 'user_skill' } }
    /**
     * Find zero or one User_skill that matches the filter.
     * @param {user_skillFindUniqueArgs} args - Arguments to find a User_skill
     * @example
     * // Get one User_skill
     * const user_skill = await prisma.user_skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_skillFindUniqueArgs>(args: SelectSubset<T, user_skillFindUniqueArgs<ExtArgs>>): Prisma__user_skillClient<$Result.GetResult<Prisma.$user_skillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_skillFindUniqueOrThrowArgs} args - Arguments to find a User_skill
     * @example
     * // Get one User_skill
     * const user_skill = await prisma.user_skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_skillFindUniqueOrThrowArgs>(args: SelectSubset<T, user_skillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_skillClient<$Result.GetResult<Prisma.$user_skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skillFindFirstArgs} args - Arguments to find a User_skill
     * @example
     * // Get one User_skill
     * const user_skill = await prisma.user_skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_skillFindFirstArgs>(args?: SelectSubset<T, user_skillFindFirstArgs<ExtArgs>>): Prisma__user_skillClient<$Result.GetResult<Prisma.$user_skillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skillFindFirstOrThrowArgs} args - Arguments to find a User_skill
     * @example
     * // Get one User_skill
     * const user_skill = await prisma.user_skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_skillFindFirstOrThrowArgs>(args?: SelectSubset<T, user_skillFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_skillClient<$Result.GetResult<Prisma.$user_skillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_skills
     * const user_skills = await prisma.user_skill.findMany()
     * 
     * // Get first 10 User_skills
     * const user_skills = await prisma.user_skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_skillWithIdOnly = await prisma.user_skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_skillFindManyArgs>(args?: SelectSubset<T, user_skillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_skill.
     * @param {user_skillCreateArgs} args - Arguments to create a User_skill.
     * @example
     * // Create one User_skill
     * const User_skill = await prisma.user_skill.create({
     *   data: {
     *     // ... data to create a User_skill
     *   }
     * })
     * 
     */
    create<T extends user_skillCreateArgs>(args: SelectSubset<T, user_skillCreateArgs<ExtArgs>>): Prisma__user_skillClient<$Result.GetResult<Prisma.$user_skillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_skills.
     * @param {user_skillCreateManyArgs} args - Arguments to create many User_skills.
     * @example
     * // Create many User_skills
     * const user_skill = await prisma.user_skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_skillCreateManyArgs>(args?: SelectSubset<T, user_skillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_skills and returns the data saved in the database.
     * @param {user_skillCreateManyAndReturnArgs} args - Arguments to create many User_skills.
     * @example
     * // Create many User_skills
     * const user_skill = await prisma.user_skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_skills and only return the `id`
     * const user_skillWithIdOnly = await prisma.user_skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_skillCreateManyAndReturnArgs>(args?: SelectSubset<T, user_skillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_skillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_skill.
     * @param {user_skillDeleteArgs} args - Arguments to delete one User_skill.
     * @example
     * // Delete one User_skill
     * const User_skill = await prisma.user_skill.delete({
     *   where: {
     *     // ... filter to delete one User_skill
     *   }
     * })
     * 
     */
    delete<T extends user_skillDeleteArgs>(args: SelectSubset<T, user_skillDeleteArgs<ExtArgs>>): Prisma__user_skillClient<$Result.GetResult<Prisma.$user_skillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_skill.
     * @param {user_skillUpdateArgs} args - Arguments to update one User_skill.
     * @example
     * // Update one User_skill
     * const user_skill = await prisma.user_skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_skillUpdateArgs>(args: SelectSubset<T, user_skillUpdateArgs<ExtArgs>>): Prisma__user_skillClient<$Result.GetResult<Prisma.$user_skillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_skills.
     * @param {user_skillDeleteManyArgs} args - Arguments to filter User_skills to delete.
     * @example
     * // Delete a few User_skills
     * const { count } = await prisma.user_skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_skillDeleteManyArgs>(args?: SelectSubset<T, user_skillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_skills
     * const user_skill = await prisma.user_skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_skillUpdateManyArgs>(args: SelectSubset<T, user_skillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_skills and returns the data updated in the database.
     * @param {user_skillUpdateManyAndReturnArgs} args - Arguments to update many User_skills.
     * @example
     * // Update many User_skills
     * const user_skill = await prisma.user_skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_skills and only return the `id`
     * const user_skillWithIdOnly = await prisma.user_skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_skillUpdateManyAndReturnArgs>(args: SelectSubset<T, user_skillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_skillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_skill.
     * @param {user_skillUpsertArgs} args - Arguments to update or create a User_skill.
     * @example
     * // Update or create a User_skill
     * const user_skill = await prisma.user_skill.upsert({
     *   create: {
     *     // ... data to create a User_skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_skill we want to update
     *   }
     * })
     */
    upsert<T extends user_skillUpsertArgs>(args: SelectSubset<T, user_skillUpsertArgs<ExtArgs>>): Prisma__user_skillClient<$Result.GetResult<Prisma.$user_skillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skillCountArgs} args - Arguments to filter User_skills to count.
     * @example
     * // Count the number of User_skills
     * const count = await prisma.user_skill.count({
     *   where: {
     *     // ... the filter for the User_skills we want to count
     *   }
     * })
    **/
    count<T extends user_skillCountArgs>(
      args?: Subset<T, user_skillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_skillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_skillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_skillAggregateArgs>(args: Subset<T, User_skillAggregateArgs>): Prisma.PrismaPromise<GetUser_skillAggregateType<T>>

    /**
     * Group by User_skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skillGroupByArgs} args - Group by arguments.
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
      T extends user_skillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_skillGroupByArgs['orderBy'] }
        : { orderBy?: user_skillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_skillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_skillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_skill model
   */
  readonly fields: user_skillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_skillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill<T extends skillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, skillDefaultArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_skill_display_mode<T extends user_skill_display_modeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_skill_display_modeDefaultArgs<ExtArgs>>): Prisma__user_skill_display_modeClient<$Result.GetResult<Prisma.$user_skill_display_modePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_skill_level<T extends user_skill_levelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_skill_levelDefaultArgs<ExtArgs>>): Prisma__user_skill_levelClient<$Result.GetResult<Prisma.$user_skill_levelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_skill model
   */
  interface user_skillFieldRefs {
    readonly id: FieldRef<"user_skill", 'String'>
    readonly user_id: FieldRef<"user_skill", 'Int'>
    readonly skill_id: FieldRef<"user_skill", 'String'>
    readonly user_skill_level_id: FieldRef<"user_skill", 'String'>
    readonly created_at: FieldRef<"user_skill", 'DateTime'>
    readonly updated_at: FieldRef<"user_skill", 'DateTime'>
    readonly user_skill_display_mode_id: FieldRef<"user_skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_skill findUnique
   */
  export type user_skillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillInclude<ExtArgs> | null
    /**
     * Filter, which user_skill to fetch.
     */
    where: user_skillWhereUniqueInput
  }

  /**
   * user_skill findUniqueOrThrow
   */
  export type user_skillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillInclude<ExtArgs> | null
    /**
     * Filter, which user_skill to fetch.
     */
    where: user_skillWhereUniqueInput
  }

  /**
   * user_skill findFirst
   */
  export type user_skillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillInclude<ExtArgs> | null
    /**
     * Filter, which user_skill to fetch.
     */
    where?: user_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_skills to fetch.
     */
    orderBy?: user_skillOrderByWithRelationInput | user_skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_skills.
     */
    cursor?: user_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_skills.
     */
    distinct?: User_skillScalarFieldEnum | User_skillScalarFieldEnum[]
  }

  /**
   * user_skill findFirstOrThrow
   */
  export type user_skillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillInclude<ExtArgs> | null
    /**
     * Filter, which user_skill to fetch.
     */
    where?: user_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_skills to fetch.
     */
    orderBy?: user_skillOrderByWithRelationInput | user_skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_skills.
     */
    cursor?: user_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_skills.
     */
    distinct?: User_skillScalarFieldEnum | User_skillScalarFieldEnum[]
  }

  /**
   * user_skill findMany
   */
  export type user_skillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillInclude<ExtArgs> | null
    /**
     * Filter, which user_skills to fetch.
     */
    where?: user_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_skills to fetch.
     */
    orderBy?: user_skillOrderByWithRelationInput | user_skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_skills.
     */
    cursor?: user_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_skills.
     */
    skip?: number
    distinct?: User_skillScalarFieldEnum | User_skillScalarFieldEnum[]
  }

  /**
   * user_skill create
   */
  export type user_skillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillInclude<ExtArgs> | null
    /**
     * The data needed to create a user_skill.
     */
    data: XOR<user_skillCreateInput, user_skillUncheckedCreateInput>
  }

  /**
   * user_skill createMany
   */
  export type user_skillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_skills.
     */
    data: user_skillCreateManyInput | user_skillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_skill createManyAndReturn
   */
  export type user_skillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * The data used to create many user_skills.
     */
    data: user_skillCreateManyInput | user_skillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_skill update
   */
  export type user_skillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillInclude<ExtArgs> | null
    /**
     * The data needed to update a user_skill.
     */
    data: XOR<user_skillUpdateInput, user_skillUncheckedUpdateInput>
    /**
     * Choose, which user_skill to update.
     */
    where: user_skillWhereUniqueInput
  }

  /**
   * user_skill updateMany
   */
  export type user_skillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_skills.
     */
    data: XOR<user_skillUpdateManyMutationInput, user_skillUncheckedUpdateManyInput>
    /**
     * Filter which user_skills to update
     */
    where?: user_skillWhereInput
    /**
     * Limit how many user_skills to update.
     */
    limit?: number
  }

  /**
   * user_skill updateManyAndReturn
   */
  export type user_skillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * The data used to update user_skills.
     */
    data: XOR<user_skillUpdateManyMutationInput, user_skillUncheckedUpdateManyInput>
    /**
     * Filter which user_skills to update
     */
    where?: user_skillWhereInput
    /**
     * Limit how many user_skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_skill upsert
   */
  export type user_skillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillInclude<ExtArgs> | null
    /**
     * The filter to search for the user_skill to update in case it exists.
     */
    where: user_skillWhereUniqueInput
    /**
     * In case the user_skill found by the `where` argument doesn't exist, create a new user_skill with this data.
     */
    create: XOR<user_skillCreateInput, user_skillUncheckedCreateInput>
    /**
     * In case the user_skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_skillUpdateInput, user_skillUncheckedUpdateInput>
  }

  /**
   * user_skill delete
   */
  export type user_skillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillInclude<ExtArgs> | null
    /**
     * Filter which user_skill to delete.
     */
    where: user_skillWhereUniqueInput
  }

  /**
   * user_skill deleteMany
   */
  export type user_skillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_skills to delete
     */
    where?: user_skillWhereInput
    /**
     * Limit how many user_skills to delete.
     */
    limit?: number
  }

  /**
   * user_skill without action
   */
  export type user_skillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillInclude<ExtArgs> | null
  }


  /**
   * Model user_skill_display_mode
   */

  export type AggregateUser_skill_display_mode = {
    _count: User_skill_display_modeCountAggregateOutputType | null
    _min: User_skill_display_modeMinAggregateOutputType | null
    _max: User_skill_display_modeMaxAggregateOutputType | null
  }

  export type User_skill_display_modeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_skill_display_modeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_skill_display_modeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_skill_display_modeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type User_skill_display_modeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type User_skill_display_modeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_skill_display_modeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_skill_display_mode to aggregate.
     */
    where?: user_skill_display_modeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_skill_display_modes to fetch.
     */
    orderBy?: user_skill_display_modeOrderByWithRelationInput | user_skill_display_modeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_skill_display_modeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_skill_display_modes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_skill_display_modes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_skill_display_modes
    **/
    _count?: true | User_skill_display_modeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_skill_display_modeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_skill_display_modeMaxAggregateInputType
  }

  export type GetUser_skill_display_modeAggregateType<T extends User_skill_display_modeAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_skill_display_mode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_skill_display_mode[P]>
      : GetScalarType<T[P], AggregateUser_skill_display_mode[P]>
  }




  export type user_skill_display_modeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_skill_display_modeWhereInput
    orderBy?: user_skill_display_modeOrderByWithAggregationInput | user_skill_display_modeOrderByWithAggregationInput[]
    by: User_skill_display_modeScalarFieldEnum[] | User_skill_display_modeScalarFieldEnum
    having?: user_skill_display_modeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_skill_display_modeCountAggregateInputType | true
    _min?: User_skill_display_modeMinAggregateInputType
    _max?: User_skill_display_modeMaxAggregateInputType
  }

  export type User_skill_display_modeGroupByOutputType = {
    id: string
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: User_skill_display_modeCountAggregateOutputType | null
    _min: User_skill_display_modeMinAggregateOutputType | null
    _max: User_skill_display_modeMaxAggregateOutputType | null
  }

  type GetUser_skill_display_modeGroupByPayload<T extends user_skill_display_modeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_skill_display_modeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_skill_display_modeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_skill_display_modeGroupByOutputType[P]>
            : GetScalarType<T[P], User_skill_display_modeGroupByOutputType[P]>
        }
      >
    >


  export type user_skill_display_modeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_skill?: boolean | user_skill_display_mode$user_skillArgs<ExtArgs>
    _count?: boolean | User_skill_display_modeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_skill_display_mode"]>

  export type user_skill_display_modeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user_skill_display_mode"]>

  export type user_skill_display_modeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user_skill_display_mode"]>

  export type user_skill_display_modeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_skill_display_modeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["user_skill_display_mode"]>
  export type user_skill_display_modeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_skill?: boolean | user_skill_display_mode$user_skillArgs<ExtArgs>
    _count?: boolean | User_skill_display_modeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type user_skill_display_modeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type user_skill_display_modeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $user_skill_display_modePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_skill_display_mode"
    objects: {
      user_skill: Prisma.$user_skillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user_skill_display_mode"]>
    composites: {}
  }

  type user_skill_display_modeGetPayload<S extends boolean | null | undefined | user_skill_display_modeDefaultArgs> = $Result.GetResult<Prisma.$user_skill_display_modePayload, S>

  type user_skill_display_modeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_skill_display_modeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_skill_display_modeCountAggregateInputType | true
    }

  export interface user_skill_display_modeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_skill_display_mode'], meta: { name: 'user_skill_display_mode' } }
    /**
     * Find zero or one User_skill_display_mode that matches the filter.
     * @param {user_skill_display_modeFindUniqueArgs} args - Arguments to find a User_skill_display_mode
     * @example
     * // Get one User_skill_display_mode
     * const user_skill_display_mode = await prisma.user_skill_display_mode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_skill_display_modeFindUniqueArgs>(args: SelectSubset<T, user_skill_display_modeFindUniqueArgs<ExtArgs>>): Prisma__user_skill_display_modeClient<$Result.GetResult<Prisma.$user_skill_display_modePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_skill_display_mode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_skill_display_modeFindUniqueOrThrowArgs} args - Arguments to find a User_skill_display_mode
     * @example
     * // Get one User_skill_display_mode
     * const user_skill_display_mode = await prisma.user_skill_display_mode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_skill_display_modeFindUniqueOrThrowArgs>(args: SelectSubset<T, user_skill_display_modeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_skill_display_modeClient<$Result.GetResult<Prisma.$user_skill_display_modePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_skill_display_mode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skill_display_modeFindFirstArgs} args - Arguments to find a User_skill_display_mode
     * @example
     * // Get one User_skill_display_mode
     * const user_skill_display_mode = await prisma.user_skill_display_mode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_skill_display_modeFindFirstArgs>(args?: SelectSubset<T, user_skill_display_modeFindFirstArgs<ExtArgs>>): Prisma__user_skill_display_modeClient<$Result.GetResult<Prisma.$user_skill_display_modePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_skill_display_mode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skill_display_modeFindFirstOrThrowArgs} args - Arguments to find a User_skill_display_mode
     * @example
     * // Get one User_skill_display_mode
     * const user_skill_display_mode = await prisma.user_skill_display_mode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_skill_display_modeFindFirstOrThrowArgs>(args?: SelectSubset<T, user_skill_display_modeFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_skill_display_modeClient<$Result.GetResult<Prisma.$user_skill_display_modePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_skill_display_modes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skill_display_modeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_skill_display_modes
     * const user_skill_display_modes = await prisma.user_skill_display_mode.findMany()
     * 
     * // Get first 10 User_skill_display_modes
     * const user_skill_display_modes = await prisma.user_skill_display_mode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_skill_display_modeWithIdOnly = await prisma.user_skill_display_mode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_skill_display_modeFindManyArgs>(args?: SelectSubset<T, user_skill_display_modeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_skill_display_modePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_skill_display_mode.
     * @param {user_skill_display_modeCreateArgs} args - Arguments to create a User_skill_display_mode.
     * @example
     * // Create one User_skill_display_mode
     * const User_skill_display_mode = await prisma.user_skill_display_mode.create({
     *   data: {
     *     // ... data to create a User_skill_display_mode
     *   }
     * })
     * 
     */
    create<T extends user_skill_display_modeCreateArgs>(args: SelectSubset<T, user_skill_display_modeCreateArgs<ExtArgs>>): Prisma__user_skill_display_modeClient<$Result.GetResult<Prisma.$user_skill_display_modePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_skill_display_modes.
     * @param {user_skill_display_modeCreateManyArgs} args - Arguments to create many User_skill_display_modes.
     * @example
     * // Create many User_skill_display_modes
     * const user_skill_display_mode = await prisma.user_skill_display_mode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_skill_display_modeCreateManyArgs>(args?: SelectSubset<T, user_skill_display_modeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_skill_display_modes and returns the data saved in the database.
     * @param {user_skill_display_modeCreateManyAndReturnArgs} args - Arguments to create many User_skill_display_modes.
     * @example
     * // Create many User_skill_display_modes
     * const user_skill_display_mode = await prisma.user_skill_display_mode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_skill_display_modes and only return the `id`
     * const user_skill_display_modeWithIdOnly = await prisma.user_skill_display_mode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_skill_display_modeCreateManyAndReturnArgs>(args?: SelectSubset<T, user_skill_display_modeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_skill_display_modePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_skill_display_mode.
     * @param {user_skill_display_modeDeleteArgs} args - Arguments to delete one User_skill_display_mode.
     * @example
     * // Delete one User_skill_display_mode
     * const User_skill_display_mode = await prisma.user_skill_display_mode.delete({
     *   where: {
     *     // ... filter to delete one User_skill_display_mode
     *   }
     * })
     * 
     */
    delete<T extends user_skill_display_modeDeleteArgs>(args: SelectSubset<T, user_skill_display_modeDeleteArgs<ExtArgs>>): Prisma__user_skill_display_modeClient<$Result.GetResult<Prisma.$user_skill_display_modePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_skill_display_mode.
     * @param {user_skill_display_modeUpdateArgs} args - Arguments to update one User_skill_display_mode.
     * @example
     * // Update one User_skill_display_mode
     * const user_skill_display_mode = await prisma.user_skill_display_mode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_skill_display_modeUpdateArgs>(args: SelectSubset<T, user_skill_display_modeUpdateArgs<ExtArgs>>): Prisma__user_skill_display_modeClient<$Result.GetResult<Prisma.$user_skill_display_modePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_skill_display_modes.
     * @param {user_skill_display_modeDeleteManyArgs} args - Arguments to filter User_skill_display_modes to delete.
     * @example
     * // Delete a few User_skill_display_modes
     * const { count } = await prisma.user_skill_display_mode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_skill_display_modeDeleteManyArgs>(args?: SelectSubset<T, user_skill_display_modeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_skill_display_modes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skill_display_modeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_skill_display_modes
     * const user_skill_display_mode = await prisma.user_skill_display_mode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_skill_display_modeUpdateManyArgs>(args: SelectSubset<T, user_skill_display_modeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_skill_display_modes and returns the data updated in the database.
     * @param {user_skill_display_modeUpdateManyAndReturnArgs} args - Arguments to update many User_skill_display_modes.
     * @example
     * // Update many User_skill_display_modes
     * const user_skill_display_mode = await prisma.user_skill_display_mode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_skill_display_modes and only return the `id`
     * const user_skill_display_modeWithIdOnly = await prisma.user_skill_display_mode.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_skill_display_modeUpdateManyAndReturnArgs>(args: SelectSubset<T, user_skill_display_modeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_skill_display_modePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_skill_display_mode.
     * @param {user_skill_display_modeUpsertArgs} args - Arguments to update or create a User_skill_display_mode.
     * @example
     * // Update or create a User_skill_display_mode
     * const user_skill_display_mode = await prisma.user_skill_display_mode.upsert({
     *   create: {
     *     // ... data to create a User_skill_display_mode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_skill_display_mode we want to update
     *   }
     * })
     */
    upsert<T extends user_skill_display_modeUpsertArgs>(args: SelectSubset<T, user_skill_display_modeUpsertArgs<ExtArgs>>): Prisma__user_skill_display_modeClient<$Result.GetResult<Prisma.$user_skill_display_modePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_skill_display_modes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skill_display_modeCountArgs} args - Arguments to filter User_skill_display_modes to count.
     * @example
     * // Count the number of User_skill_display_modes
     * const count = await prisma.user_skill_display_mode.count({
     *   where: {
     *     // ... the filter for the User_skill_display_modes we want to count
     *   }
     * })
    **/
    count<T extends user_skill_display_modeCountArgs>(
      args?: Subset<T, user_skill_display_modeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_skill_display_modeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_skill_display_mode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_skill_display_modeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_skill_display_modeAggregateArgs>(args: Subset<T, User_skill_display_modeAggregateArgs>): Prisma.PrismaPromise<GetUser_skill_display_modeAggregateType<T>>

    /**
     * Group by User_skill_display_mode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skill_display_modeGroupByArgs} args - Group by arguments.
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
      T extends user_skill_display_modeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_skill_display_modeGroupByArgs['orderBy'] }
        : { orderBy?: user_skill_display_modeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_skill_display_modeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_skill_display_modeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_skill_display_mode model
   */
  readonly fields: user_skill_display_modeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_skill_display_mode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_skill_display_modeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_skill<T extends user_skill_display_mode$user_skillArgs<ExtArgs> = {}>(args?: Subset<T, user_skill_display_mode$user_skillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user_skill_display_mode model
   */
  interface user_skill_display_modeFieldRefs {
    readonly id: FieldRef<"user_skill_display_mode", 'String'>
    readonly name: FieldRef<"user_skill_display_mode", 'String'>
    readonly description: FieldRef<"user_skill_display_mode", 'String'>
    readonly created_at: FieldRef<"user_skill_display_mode", 'DateTime'>
    readonly updated_at: FieldRef<"user_skill_display_mode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_skill_display_mode findUnique
   */
  export type user_skill_display_modeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_display_mode
     */
    select?: user_skill_display_modeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_display_mode
     */
    omit?: user_skill_display_modeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_display_modeInclude<ExtArgs> | null
    /**
     * Filter, which user_skill_display_mode to fetch.
     */
    where: user_skill_display_modeWhereUniqueInput
  }

  /**
   * user_skill_display_mode findUniqueOrThrow
   */
  export type user_skill_display_modeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_display_mode
     */
    select?: user_skill_display_modeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_display_mode
     */
    omit?: user_skill_display_modeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_display_modeInclude<ExtArgs> | null
    /**
     * Filter, which user_skill_display_mode to fetch.
     */
    where: user_skill_display_modeWhereUniqueInput
  }

  /**
   * user_skill_display_mode findFirst
   */
  export type user_skill_display_modeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_display_mode
     */
    select?: user_skill_display_modeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_display_mode
     */
    omit?: user_skill_display_modeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_display_modeInclude<ExtArgs> | null
    /**
     * Filter, which user_skill_display_mode to fetch.
     */
    where?: user_skill_display_modeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_skill_display_modes to fetch.
     */
    orderBy?: user_skill_display_modeOrderByWithRelationInput | user_skill_display_modeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_skill_display_modes.
     */
    cursor?: user_skill_display_modeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_skill_display_modes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_skill_display_modes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_skill_display_modes.
     */
    distinct?: User_skill_display_modeScalarFieldEnum | User_skill_display_modeScalarFieldEnum[]
  }

  /**
   * user_skill_display_mode findFirstOrThrow
   */
  export type user_skill_display_modeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_display_mode
     */
    select?: user_skill_display_modeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_display_mode
     */
    omit?: user_skill_display_modeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_display_modeInclude<ExtArgs> | null
    /**
     * Filter, which user_skill_display_mode to fetch.
     */
    where?: user_skill_display_modeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_skill_display_modes to fetch.
     */
    orderBy?: user_skill_display_modeOrderByWithRelationInput | user_skill_display_modeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_skill_display_modes.
     */
    cursor?: user_skill_display_modeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_skill_display_modes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_skill_display_modes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_skill_display_modes.
     */
    distinct?: User_skill_display_modeScalarFieldEnum | User_skill_display_modeScalarFieldEnum[]
  }

  /**
   * user_skill_display_mode findMany
   */
  export type user_skill_display_modeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_display_mode
     */
    select?: user_skill_display_modeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_display_mode
     */
    omit?: user_skill_display_modeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_display_modeInclude<ExtArgs> | null
    /**
     * Filter, which user_skill_display_modes to fetch.
     */
    where?: user_skill_display_modeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_skill_display_modes to fetch.
     */
    orderBy?: user_skill_display_modeOrderByWithRelationInput | user_skill_display_modeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_skill_display_modes.
     */
    cursor?: user_skill_display_modeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_skill_display_modes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_skill_display_modes.
     */
    skip?: number
    distinct?: User_skill_display_modeScalarFieldEnum | User_skill_display_modeScalarFieldEnum[]
  }

  /**
   * user_skill_display_mode create
   */
  export type user_skill_display_modeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_display_mode
     */
    select?: user_skill_display_modeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_display_mode
     */
    omit?: user_skill_display_modeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_display_modeInclude<ExtArgs> | null
    /**
     * The data needed to create a user_skill_display_mode.
     */
    data: XOR<user_skill_display_modeCreateInput, user_skill_display_modeUncheckedCreateInput>
  }

  /**
   * user_skill_display_mode createMany
   */
  export type user_skill_display_modeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_skill_display_modes.
     */
    data: user_skill_display_modeCreateManyInput | user_skill_display_modeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_skill_display_mode createManyAndReturn
   */
  export type user_skill_display_modeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_display_mode
     */
    select?: user_skill_display_modeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_display_mode
     */
    omit?: user_skill_display_modeOmit<ExtArgs> | null
    /**
     * The data used to create many user_skill_display_modes.
     */
    data: user_skill_display_modeCreateManyInput | user_skill_display_modeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_skill_display_mode update
   */
  export type user_skill_display_modeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_display_mode
     */
    select?: user_skill_display_modeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_display_mode
     */
    omit?: user_skill_display_modeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_display_modeInclude<ExtArgs> | null
    /**
     * The data needed to update a user_skill_display_mode.
     */
    data: XOR<user_skill_display_modeUpdateInput, user_skill_display_modeUncheckedUpdateInput>
    /**
     * Choose, which user_skill_display_mode to update.
     */
    where: user_skill_display_modeWhereUniqueInput
  }

  /**
   * user_skill_display_mode updateMany
   */
  export type user_skill_display_modeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_skill_display_modes.
     */
    data: XOR<user_skill_display_modeUpdateManyMutationInput, user_skill_display_modeUncheckedUpdateManyInput>
    /**
     * Filter which user_skill_display_modes to update
     */
    where?: user_skill_display_modeWhereInput
    /**
     * Limit how many user_skill_display_modes to update.
     */
    limit?: number
  }

  /**
   * user_skill_display_mode updateManyAndReturn
   */
  export type user_skill_display_modeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_display_mode
     */
    select?: user_skill_display_modeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_display_mode
     */
    omit?: user_skill_display_modeOmit<ExtArgs> | null
    /**
     * The data used to update user_skill_display_modes.
     */
    data: XOR<user_skill_display_modeUpdateManyMutationInput, user_skill_display_modeUncheckedUpdateManyInput>
    /**
     * Filter which user_skill_display_modes to update
     */
    where?: user_skill_display_modeWhereInput
    /**
     * Limit how many user_skill_display_modes to update.
     */
    limit?: number
  }

  /**
   * user_skill_display_mode upsert
   */
  export type user_skill_display_modeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_display_mode
     */
    select?: user_skill_display_modeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_display_mode
     */
    omit?: user_skill_display_modeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_display_modeInclude<ExtArgs> | null
    /**
     * The filter to search for the user_skill_display_mode to update in case it exists.
     */
    where: user_skill_display_modeWhereUniqueInput
    /**
     * In case the user_skill_display_mode found by the `where` argument doesn't exist, create a new user_skill_display_mode with this data.
     */
    create: XOR<user_skill_display_modeCreateInput, user_skill_display_modeUncheckedCreateInput>
    /**
     * In case the user_skill_display_mode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_skill_display_modeUpdateInput, user_skill_display_modeUncheckedUpdateInput>
  }

  /**
   * user_skill_display_mode delete
   */
  export type user_skill_display_modeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_display_mode
     */
    select?: user_skill_display_modeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_display_mode
     */
    omit?: user_skill_display_modeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_display_modeInclude<ExtArgs> | null
    /**
     * Filter which user_skill_display_mode to delete.
     */
    where: user_skill_display_modeWhereUniqueInput
  }

  /**
   * user_skill_display_mode deleteMany
   */
  export type user_skill_display_modeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_skill_display_modes to delete
     */
    where?: user_skill_display_modeWhereInput
    /**
     * Limit how many user_skill_display_modes to delete.
     */
    limit?: number
  }

  /**
   * user_skill_display_mode.user_skill
   */
  export type user_skill_display_mode$user_skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillInclude<ExtArgs> | null
    where?: user_skillWhereInput
    orderBy?: user_skillOrderByWithRelationInput | user_skillOrderByWithRelationInput[]
    cursor?: user_skillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_skillScalarFieldEnum | User_skillScalarFieldEnum[]
  }

  /**
   * user_skill_display_mode without action
   */
  export type user_skill_display_modeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_display_mode
     */
    select?: user_skill_display_modeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_display_mode
     */
    omit?: user_skill_display_modeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_display_modeInclude<ExtArgs> | null
  }


  /**
   * Model user_skill_level
   */

  export type AggregateUser_skill_level = {
    _count: User_skill_levelCountAggregateOutputType | null
    _min: User_skill_levelMinAggregateOutputType | null
    _max: User_skill_levelMaxAggregateOutputType | null
  }

  export type User_skill_levelMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_skill_levelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_skill_levelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_skill_levelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type User_skill_levelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type User_skill_levelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_skill_levelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_skill_level to aggregate.
     */
    where?: user_skill_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_skill_levels to fetch.
     */
    orderBy?: user_skill_levelOrderByWithRelationInput | user_skill_levelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_skill_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_skill_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_skill_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_skill_levels
    **/
    _count?: true | User_skill_levelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_skill_levelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_skill_levelMaxAggregateInputType
  }

  export type GetUser_skill_levelAggregateType<T extends User_skill_levelAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_skill_level]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_skill_level[P]>
      : GetScalarType<T[P], AggregateUser_skill_level[P]>
  }




  export type user_skill_levelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_skill_levelWhereInput
    orderBy?: user_skill_levelOrderByWithAggregationInput | user_skill_levelOrderByWithAggregationInput[]
    by: User_skill_levelScalarFieldEnum[] | User_skill_levelScalarFieldEnum
    having?: user_skill_levelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_skill_levelCountAggregateInputType | true
    _min?: User_skill_levelMinAggregateInputType
    _max?: User_skill_levelMaxAggregateInputType
  }

  export type User_skill_levelGroupByOutputType = {
    id: string
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: User_skill_levelCountAggregateOutputType | null
    _min: User_skill_levelMinAggregateOutputType | null
    _max: User_skill_levelMaxAggregateOutputType | null
  }

  type GetUser_skill_levelGroupByPayload<T extends user_skill_levelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_skill_levelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_skill_levelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_skill_levelGroupByOutputType[P]>
            : GetScalarType<T[P], User_skill_levelGroupByOutputType[P]>
        }
      >
    >


  export type user_skill_levelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_skill?: boolean | user_skill_level$user_skillArgs<ExtArgs>
    _count?: boolean | User_skill_levelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_skill_level"]>

  export type user_skill_levelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user_skill_level"]>

  export type user_skill_levelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user_skill_level"]>

  export type user_skill_levelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_skill_levelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["user_skill_level"]>
  export type user_skill_levelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_skill?: boolean | user_skill_level$user_skillArgs<ExtArgs>
    _count?: boolean | User_skill_levelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type user_skill_levelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type user_skill_levelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $user_skill_levelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_skill_level"
    objects: {
      user_skill: Prisma.$user_skillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user_skill_level"]>
    composites: {}
  }

  type user_skill_levelGetPayload<S extends boolean | null | undefined | user_skill_levelDefaultArgs> = $Result.GetResult<Prisma.$user_skill_levelPayload, S>

  type user_skill_levelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_skill_levelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_skill_levelCountAggregateInputType | true
    }

  export interface user_skill_levelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_skill_level'], meta: { name: 'user_skill_level' } }
    /**
     * Find zero or one User_skill_level that matches the filter.
     * @param {user_skill_levelFindUniqueArgs} args - Arguments to find a User_skill_level
     * @example
     * // Get one User_skill_level
     * const user_skill_level = await prisma.user_skill_level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_skill_levelFindUniqueArgs>(args: SelectSubset<T, user_skill_levelFindUniqueArgs<ExtArgs>>): Prisma__user_skill_levelClient<$Result.GetResult<Prisma.$user_skill_levelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_skill_level that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_skill_levelFindUniqueOrThrowArgs} args - Arguments to find a User_skill_level
     * @example
     * // Get one User_skill_level
     * const user_skill_level = await prisma.user_skill_level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_skill_levelFindUniqueOrThrowArgs>(args: SelectSubset<T, user_skill_levelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_skill_levelClient<$Result.GetResult<Prisma.$user_skill_levelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_skill_level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skill_levelFindFirstArgs} args - Arguments to find a User_skill_level
     * @example
     * // Get one User_skill_level
     * const user_skill_level = await prisma.user_skill_level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_skill_levelFindFirstArgs>(args?: SelectSubset<T, user_skill_levelFindFirstArgs<ExtArgs>>): Prisma__user_skill_levelClient<$Result.GetResult<Prisma.$user_skill_levelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_skill_level that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skill_levelFindFirstOrThrowArgs} args - Arguments to find a User_skill_level
     * @example
     * // Get one User_skill_level
     * const user_skill_level = await prisma.user_skill_level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_skill_levelFindFirstOrThrowArgs>(args?: SelectSubset<T, user_skill_levelFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_skill_levelClient<$Result.GetResult<Prisma.$user_skill_levelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_skill_levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skill_levelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_skill_levels
     * const user_skill_levels = await prisma.user_skill_level.findMany()
     * 
     * // Get first 10 User_skill_levels
     * const user_skill_levels = await prisma.user_skill_level.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_skill_levelWithIdOnly = await prisma.user_skill_level.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_skill_levelFindManyArgs>(args?: SelectSubset<T, user_skill_levelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_skill_levelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_skill_level.
     * @param {user_skill_levelCreateArgs} args - Arguments to create a User_skill_level.
     * @example
     * // Create one User_skill_level
     * const User_skill_level = await prisma.user_skill_level.create({
     *   data: {
     *     // ... data to create a User_skill_level
     *   }
     * })
     * 
     */
    create<T extends user_skill_levelCreateArgs>(args: SelectSubset<T, user_skill_levelCreateArgs<ExtArgs>>): Prisma__user_skill_levelClient<$Result.GetResult<Prisma.$user_skill_levelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_skill_levels.
     * @param {user_skill_levelCreateManyArgs} args - Arguments to create many User_skill_levels.
     * @example
     * // Create many User_skill_levels
     * const user_skill_level = await prisma.user_skill_level.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_skill_levelCreateManyArgs>(args?: SelectSubset<T, user_skill_levelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_skill_levels and returns the data saved in the database.
     * @param {user_skill_levelCreateManyAndReturnArgs} args - Arguments to create many User_skill_levels.
     * @example
     * // Create many User_skill_levels
     * const user_skill_level = await prisma.user_skill_level.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_skill_levels and only return the `id`
     * const user_skill_levelWithIdOnly = await prisma.user_skill_level.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_skill_levelCreateManyAndReturnArgs>(args?: SelectSubset<T, user_skill_levelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_skill_levelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_skill_level.
     * @param {user_skill_levelDeleteArgs} args - Arguments to delete one User_skill_level.
     * @example
     * // Delete one User_skill_level
     * const User_skill_level = await prisma.user_skill_level.delete({
     *   where: {
     *     // ... filter to delete one User_skill_level
     *   }
     * })
     * 
     */
    delete<T extends user_skill_levelDeleteArgs>(args: SelectSubset<T, user_skill_levelDeleteArgs<ExtArgs>>): Prisma__user_skill_levelClient<$Result.GetResult<Prisma.$user_skill_levelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_skill_level.
     * @param {user_skill_levelUpdateArgs} args - Arguments to update one User_skill_level.
     * @example
     * // Update one User_skill_level
     * const user_skill_level = await prisma.user_skill_level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_skill_levelUpdateArgs>(args: SelectSubset<T, user_skill_levelUpdateArgs<ExtArgs>>): Prisma__user_skill_levelClient<$Result.GetResult<Prisma.$user_skill_levelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_skill_levels.
     * @param {user_skill_levelDeleteManyArgs} args - Arguments to filter User_skill_levels to delete.
     * @example
     * // Delete a few User_skill_levels
     * const { count } = await prisma.user_skill_level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_skill_levelDeleteManyArgs>(args?: SelectSubset<T, user_skill_levelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_skill_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skill_levelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_skill_levels
     * const user_skill_level = await prisma.user_skill_level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_skill_levelUpdateManyArgs>(args: SelectSubset<T, user_skill_levelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_skill_levels and returns the data updated in the database.
     * @param {user_skill_levelUpdateManyAndReturnArgs} args - Arguments to update many User_skill_levels.
     * @example
     * // Update many User_skill_levels
     * const user_skill_level = await prisma.user_skill_level.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_skill_levels and only return the `id`
     * const user_skill_levelWithIdOnly = await prisma.user_skill_level.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_skill_levelUpdateManyAndReturnArgs>(args: SelectSubset<T, user_skill_levelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_skill_levelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_skill_level.
     * @param {user_skill_levelUpsertArgs} args - Arguments to update or create a User_skill_level.
     * @example
     * // Update or create a User_skill_level
     * const user_skill_level = await prisma.user_skill_level.upsert({
     *   create: {
     *     // ... data to create a User_skill_level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_skill_level we want to update
     *   }
     * })
     */
    upsert<T extends user_skill_levelUpsertArgs>(args: SelectSubset<T, user_skill_levelUpsertArgs<ExtArgs>>): Prisma__user_skill_levelClient<$Result.GetResult<Prisma.$user_skill_levelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_skill_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skill_levelCountArgs} args - Arguments to filter User_skill_levels to count.
     * @example
     * // Count the number of User_skill_levels
     * const count = await prisma.user_skill_level.count({
     *   where: {
     *     // ... the filter for the User_skill_levels we want to count
     *   }
     * })
    **/
    count<T extends user_skill_levelCountArgs>(
      args?: Subset<T, user_skill_levelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_skill_levelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_skill_level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_skill_levelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_skill_levelAggregateArgs>(args: Subset<T, User_skill_levelAggregateArgs>): Prisma.PrismaPromise<GetUser_skill_levelAggregateType<T>>

    /**
     * Group by User_skill_level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_skill_levelGroupByArgs} args - Group by arguments.
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
      T extends user_skill_levelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_skill_levelGroupByArgs['orderBy'] }
        : { orderBy?: user_skill_levelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_skill_levelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_skill_levelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_skill_level model
   */
  readonly fields: user_skill_levelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_skill_level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_skill_levelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_skill<T extends user_skill_level$user_skillArgs<ExtArgs> = {}>(args?: Subset<T, user_skill_level$user_skillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user_skill_level model
   */
  interface user_skill_levelFieldRefs {
    readonly id: FieldRef<"user_skill_level", 'String'>
    readonly name: FieldRef<"user_skill_level", 'String'>
    readonly description: FieldRef<"user_skill_level", 'String'>
    readonly created_at: FieldRef<"user_skill_level", 'DateTime'>
    readonly updated_at: FieldRef<"user_skill_level", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_skill_level findUnique
   */
  export type user_skill_levelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_level
     */
    select?: user_skill_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_level
     */
    omit?: user_skill_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_levelInclude<ExtArgs> | null
    /**
     * Filter, which user_skill_level to fetch.
     */
    where: user_skill_levelWhereUniqueInput
  }

  /**
   * user_skill_level findUniqueOrThrow
   */
  export type user_skill_levelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_level
     */
    select?: user_skill_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_level
     */
    omit?: user_skill_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_levelInclude<ExtArgs> | null
    /**
     * Filter, which user_skill_level to fetch.
     */
    where: user_skill_levelWhereUniqueInput
  }

  /**
   * user_skill_level findFirst
   */
  export type user_skill_levelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_level
     */
    select?: user_skill_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_level
     */
    omit?: user_skill_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_levelInclude<ExtArgs> | null
    /**
     * Filter, which user_skill_level to fetch.
     */
    where?: user_skill_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_skill_levels to fetch.
     */
    orderBy?: user_skill_levelOrderByWithRelationInput | user_skill_levelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_skill_levels.
     */
    cursor?: user_skill_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_skill_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_skill_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_skill_levels.
     */
    distinct?: User_skill_levelScalarFieldEnum | User_skill_levelScalarFieldEnum[]
  }

  /**
   * user_skill_level findFirstOrThrow
   */
  export type user_skill_levelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_level
     */
    select?: user_skill_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_level
     */
    omit?: user_skill_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_levelInclude<ExtArgs> | null
    /**
     * Filter, which user_skill_level to fetch.
     */
    where?: user_skill_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_skill_levels to fetch.
     */
    orderBy?: user_skill_levelOrderByWithRelationInput | user_skill_levelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_skill_levels.
     */
    cursor?: user_skill_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_skill_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_skill_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_skill_levels.
     */
    distinct?: User_skill_levelScalarFieldEnum | User_skill_levelScalarFieldEnum[]
  }

  /**
   * user_skill_level findMany
   */
  export type user_skill_levelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_level
     */
    select?: user_skill_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_level
     */
    omit?: user_skill_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_levelInclude<ExtArgs> | null
    /**
     * Filter, which user_skill_levels to fetch.
     */
    where?: user_skill_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_skill_levels to fetch.
     */
    orderBy?: user_skill_levelOrderByWithRelationInput | user_skill_levelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_skill_levels.
     */
    cursor?: user_skill_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_skill_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_skill_levels.
     */
    skip?: number
    distinct?: User_skill_levelScalarFieldEnum | User_skill_levelScalarFieldEnum[]
  }

  /**
   * user_skill_level create
   */
  export type user_skill_levelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_level
     */
    select?: user_skill_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_level
     */
    omit?: user_skill_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_levelInclude<ExtArgs> | null
    /**
     * The data needed to create a user_skill_level.
     */
    data: XOR<user_skill_levelCreateInput, user_skill_levelUncheckedCreateInput>
  }

  /**
   * user_skill_level createMany
   */
  export type user_skill_levelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_skill_levels.
     */
    data: user_skill_levelCreateManyInput | user_skill_levelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_skill_level createManyAndReturn
   */
  export type user_skill_levelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_level
     */
    select?: user_skill_levelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_level
     */
    omit?: user_skill_levelOmit<ExtArgs> | null
    /**
     * The data used to create many user_skill_levels.
     */
    data: user_skill_levelCreateManyInput | user_skill_levelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_skill_level update
   */
  export type user_skill_levelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_level
     */
    select?: user_skill_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_level
     */
    omit?: user_skill_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_levelInclude<ExtArgs> | null
    /**
     * The data needed to update a user_skill_level.
     */
    data: XOR<user_skill_levelUpdateInput, user_skill_levelUncheckedUpdateInput>
    /**
     * Choose, which user_skill_level to update.
     */
    where: user_skill_levelWhereUniqueInput
  }

  /**
   * user_skill_level updateMany
   */
  export type user_skill_levelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_skill_levels.
     */
    data: XOR<user_skill_levelUpdateManyMutationInput, user_skill_levelUncheckedUpdateManyInput>
    /**
     * Filter which user_skill_levels to update
     */
    where?: user_skill_levelWhereInput
    /**
     * Limit how many user_skill_levels to update.
     */
    limit?: number
  }

  /**
   * user_skill_level updateManyAndReturn
   */
  export type user_skill_levelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_level
     */
    select?: user_skill_levelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_level
     */
    omit?: user_skill_levelOmit<ExtArgs> | null
    /**
     * The data used to update user_skill_levels.
     */
    data: XOR<user_skill_levelUpdateManyMutationInput, user_skill_levelUncheckedUpdateManyInput>
    /**
     * Filter which user_skill_levels to update
     */
    where?: user_skill_levelWhereInput
    /**
     * Limit how many user_skill_levels to update.
     */
    limit?: number
  }

  /**
   * user_skill_level upsert
   */
  export type user_skill_levelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_level
     */
    select?: user_skill_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_level
     */
    omit?: user_skill_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_levelInclude<ExtArgs> | null
    /**
     * The filter to search for the user_skill_level to update in case it exists.
     */
    where: user_skill_levelWhereUniqueInput
    /**
     * In case the user_skill_level found by the `where` argument doesn't exist, create a new user_skill_level with this data.
     */
    create: XOR<user_skill_levelCreateInput, user_skill_levelUncheckedCreateInput>
    /**
     * In case the user_skill_level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_skill_levelUpdateInput, user_skill_levelUncheckedUpdateInput>
  }

  /**
   * user_skill_level delete
   */
  export type user_skill_levelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_level
     */
    select?: user_skill_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_level
     */
    omit?: user_skill_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_levelInclude<ExtArgs> | null
    /**
     * Filter which user_skill_level to delete.
     */
    where: user_skill_levelWhereUniqueInput
  }

  /**
   * user_skill_level deleteMany
   */
  export type user_skill_levelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_skill_levels to delete
     */
    where?: user_skill_levelWhereInput
    /**
     * Limit how many user_skill_levels to delete.
     */
    limit?: number
  }

  /**
   * user_skill_level.user_skill
   */
  export type user_skill_level$user_skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill
     */
    select?: user_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill
     */
    omit?: user_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skillInclude<ExtArgs> | null
    where?: user_skillWhereInput
    orderBy?: user_skillOrderByWithRelationInput | user_skillOrderByWithRelationInput[]
    cursor?: user_skillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_skillScalarFieldEnum | User_skillScalarFieldEnum[]
  }

  /**
   * user_skill_level without action
   */
  export type user_skill_levelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_skill_level
     */
    select?: user_skill_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_skill_level
     */
    omit?: user_skill_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_skill_levelInclude<ExtArgs> | null
  }


  /**
   * Model work_skill
   */

  export type AggregateWork_skill = {
    _count: Work_skillCountAggregateOutputType | null
    _min: Work_skillMinAggregateOutputType | null
    _max: Work_skillMaxAggregateOutputType | null
  }

  export type Work_skillMinAggregateOutputType = {
    id: string | null
    work_id: string | null
    work_type_id: string | null
    skill_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Work_skillMaxAggregateOutputType = {
    id: string | null
    work_id: string | null
    work_type_id: string | null
    skill_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Work_skillCountAggregateOutputType = {
    id: number
    work_id: number
    work_type_id: number
    skill_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Work_skillMinAggregateInputType = {
    id?: true
    work_id?: true
    work_type_id?: true
    skill_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Work_skillMaxAggregateInputType = {
    id?: true
    work_id?: true
    work_type_id?: true
    skill_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Work_skillCountAggregateInputType = {
    id?: true
    work_id?: true
    work_type_id?: true
    skill_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Work_skillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which work_skill to aggregate.
     */
    where?: work_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_skills to fetch.
     */
    orderBy?: work_skillOrderByWithRelationInput | work_skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: work_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned work_skills
    **/
    _count?: true | Work_skillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Work_skillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Work_skillMaxAggregateInputType
  }

  export type GetWork_skillAggregateType<T extends Work_skillAggregateArgs> = {
        [P in keyof T & keyof AggregateWork_skill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork_skill[P]>
      : GetScalarType<T[P], AggregateWork_skill[P]>
  }




  export type work_skillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: work_skillWhereInput
    orderBy?: work_skillOrderByWithAggregationInput | work_skillOrderByWithAggregationInput[]
    by: Work_skillScalarFieldEnum[] | Work_skillScalarFieldEnum
    having?: work_skillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Work_skillCountAggregateInputType | true
    _min?: Work_skillMinAggregateInputType
    _max?: Work_skillMaxAggregateInputType
  }

  export type Work_skillGroupByOutputType = {
    id: string
    work_id: string
    work_type_id: string
    skill_id: string
    created_at: Date
    updated_at: Date
    _count: Work_skillCountAggregateOutputType | null
    _min: Work_skillMinAggregateOutputType | null
    _max: Work_skillMaxAggregateOutputType | null
  }

  type GetWork_skillGroupByPayload<T extends work_skillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Work_skillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Work_skillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Work_skillGroupByOutputType[P]>
            : GetScalarType<T[P], Work_skillGroupByOutputType[P]>
        }
      >
    >


  export type work_skillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    work_id?: boolean
    work_type_id?: boolean
    skill_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["work_skill"]>

  export type work_skillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    work_id?: boolean
    work_type_id?: boolean
    skill_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["work_skill"]>

  export type work_skillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    work_id?: boolean
    work_type_id?: boolean
    skill_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["work_skill"]>

  export type work_skillSelectScalar = {
    id?: boolean
    work_id?: boolean
    work_type_id?: boolean
    skill_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type work_skillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "work_id" | "work_type_id" | "skill_id" | "created_at" | "updated_at", ExtArgs["result"]["work_skill"]>

  export type $work_skillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "work_skill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      work_id: string
      work_type_id: string
      skill_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["work_skill"]>
    composites: {}
  }

  type work_skillGetPayload<S extends boolean | null | undefined | work_skillDefaultArgs> = $Result.GetResult<Prisma.$work_skillPayload, S>

  type work_skillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<work_skillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Work_skillCountAggregateInputType | true
    }

  export interface work_skillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['work_skill'], meta: { name: 'work_skill' } }
    /**
     * Find zero or one Work_skill that matches the filter.
     * @param {work_skillFindUniqueArgs} args - Arguments to find a Work_skill
     * @example
     * // Get one Work_skill
     * const work_skill = await prisma.work_skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends work_skillFindUniqueArgs>(args: SelectSubset<T, work_skillFindUniqueArgs<ExtArgs>>): Prisma__work_skillClient<$Result.GetResult<Prisma.$work_skillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work_skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {work_skillFindUniqueOrThrowArgs} args - Arguments to find a Work_skill
     * @example
     * // Get one Work_skill
     * const work_skill = await prisma.work_skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends work_skillFindUniqueOrThrowArgs>(args: SelectSubset<T, work_skillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__work_skillClient<$Result.GetResult<Prisma.$work_skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work_skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_skillFindFirstArgs} args - Arguments to find a Work_skill
     * @example
     * // Get one Work_skill
     * const work_skill = await prisma.work_skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends work_skillFindFirstArgs>(args?: SelectSubset<T, work_skillFindFirstArgs<ExtArgs>>): Prisma__work_skillClient<$Result.GetResult<Prisma.$work_skillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work_skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_skillFindFirstOrThrowArgs} args - Arguments to find a Work_skill
     * @example
     * // Get one Work_skill
     * const work_skill = await prisma.work_skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends work_skillFindFirstOrThrowArgs>(args?: SelectSubset<T, work_skillFindFirstOrThrowArgs<ExtArgs>>): Prisma__work_skillClient<$Result.GetResult<Prisma.$work_skillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Work_skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_skillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Work_skills
     * const work_skills = await prisma.work_skill.findMany()
     * 
     * // Get first 10 Work_skills
     * const work_skills = await prisma.work_skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const work_skillWithIdOnly = await prisma.work_skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends work_skillFindManyArgs>(args?: SelectSubset<T, work_skillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work_skill.
     * @param {work_skillCreateArgs} args - Arguments to create a Work_skill.
     * @example
     * // Create one Work_skill
     * const Work_skill = await prisma.work_skill.create({
     *   data: {
     *     // ... data to create a Work_skill
     *   }
     * })
     * 
     */
    create<T extends work_skillCreateArgs>(args: SelectSubset<T, work_skillCreateArgs<ExtArgs>>): Prisma__work_skillClient<$Result.GetResult<Prisma.$work_skillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Work_skills.
     * @param {work_skillCreateManyArgs} args - Arguments to create many Work_skills.
     * @example
     * // Create many Work_skills
     * const work_skill = await prisma.work_skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends work_skillCreateManyArgs>(args?: SelectSubset<T, work_skillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Work_skills and returns the data saved in the database.
     * @param {work_skillCreateManyAndReturnArgs} args - Arguments to create many Work_skills.
     * @example
     * // Create many Work_skills
     * const work_skill = await prisma.work_skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Work_skills and only return the `id`
     * const work_skillWithIdOnly = await prisma.work_skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends work_skillCreateManyAndReturnArgs>(args?: SelectSubset<T, work_skillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_skillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Work_skill.
     * @param {work_skillDeleteArgs} args - Arguments to delete one Work_skill.
     * @example
     * // Delete one Work_skill
     * const Work_skill = await prisma.work_skill.delete({
     *   where: {
     *     // ... filter to delete one Work_skill
     *   }
     * })
     * 
     */
    delete<T extends work_skillDeleteArgs>(args: SelectSubset<T, work_skillDeleteArgs<ExtArgs>>): Prisma__work_skillClient<$Result.GetResult<Prisma.$work_skillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work_skill.
     * @param {work_skillUpdateArgs} args - Arguments to update one Work_skill.
     * @example
     * // Update one Work_skill
     * const work_skill = await prisma.work_skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends work_skillUpdateArgs>(args: SelectSubset<T, work_skillUpdateArgs<ExtArgs>>): Prisma__work_skillClient<$Result.GetResult<Prisma.$work_skillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Work_skills.
     * @param {work_skillDeleteManyArgs} args - Arguments to filter Work_skills to delete.
     * @example
     * // Delete a few Work_skills
     * const { count } = await prisma.work_skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends work_skillDeleteManyArgs>(args?: SelectSubset<T, work_skillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Work_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_skillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Work_skills
     * const work_skill = await prisma.work_skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends work_skillUpdateManyArgs>(args: SelectSubset<T, work_skillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Work_skills and returns the data updated in the database.
     * @param {work_skillUpdateManyAndReturnArgs} args - Arguments to update many Work_skills.
     * @example
     * // Update many Work_skills
     * const work_skill = await prisma.work_skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Work_skills and only return the `id`
     * const work_skillWithIdOnly = await prisma.work_skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends work_skillUpdateManyAndReturnArgs>(args: SelectSubset<T, work_skillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_skillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Work_skill.
     * @param {work_skillUpsertArgs} args - Arguments to update or create a Work_skill.
     * @example
     * // Update or create a Work_skill
     * const work_skill = await prisma.work_skill.upsert({
     *   create: {
     *     // ... data to create a Work_skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work_skill we want to update
     *   }
     * })
     */
    upsert<T extends work_skillUpsertArgs>(args: SelectSubset<T, work_skillUpsertArgs<ExtArgs>>): Prisma__work_skillClient<$Result.GetResult<Prisma.$work_skillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Work_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_skillCountArgs} args - Arguments to filter Work_skills to count.
     * @example
     * // Count the number of Work_skills
     * const count = await prisma.work_skill.count({
     *   where: {
     *     // ... the filter for the Work_skills we want to count
     *   }
     * })
    **/
    count<T extends work_skillCountArgs>(
      args?: Subset<T, work_skillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Work_skillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work_skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Work_skillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Work_skillAggregateArgs>(args: Subset<T, Work_skillAggregateArgs>): Prisma.PrismaPromise<GetWork_skillAggregateType<T>>

    /**
     * Group by Work_skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_skillGroupByArgs} args - Group by arguments.
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
      T extends work_skillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: work_skillGroupByArgs['orderBy'] }
        : { orderBy?: work_skillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, work_skillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWork_skillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the work_skill model
   */
  readonly fields: work_skillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for work_skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__work_skillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the work_skill model
   */
  interface work_skillFieldRefs {
    readonly id: FieldRef<"work_skill", 'String'>
    readonly work_id: FieldRef<"work_skill", 'String'>
    readonly work_type_id: FieldRef<"work_skill", 'String'>
    readonly skill_id: FieldRef<"work_skill", 'String'>
    readonly created_at: FieldRef<"work_skill", 'DateTime'>
    readonly updated_at: FieldRef<"work_skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * work_skill findUnique
   */
  export type work_skillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_skill
     */
    select?: work_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_skill
     */
    omit?: work_skillOmit<ExtArgs> | null
    /**
     * Filter, which work_skill to fetch.
     */
    where: work_skillWhereUniqueInput
  }

  /**
   * work_skill findUniqueOrThrow
   */
  export type work_skillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_skill
     */
    select?: work_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_skill
     */
    omit?: work_skillOmit<ExtArgs> | null
    /**
     * Filter, which work_skill to fetch.
     */
    where: work_skillWhereUniqueInput
  }

  /**
   * work_skill findFirst
   */
  export type work_skillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_skill
     */
    select?: work_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_skill
     */
    omit?: work_skillOmit<ExtArgs> | null
    /**
     * Filter, which work_skill to fetch.
     */
    where?: work_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_skills to fetch.
     */
    orderBy?: work_skillOrderByWithRelationInput | work_skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for work_skills.
     */
    cursor?: work_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of work_skills.
     */
    distinct?: Work_skillScalarFieldEnum | Work_skillScalarFieldEnum[]
  }

  /**
   * work_skill findFirstOrThrow
   */
  export type work_skillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_skill
     */
    select?: work_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_skill
     */
    omit?: work_skillOmit<ExtArgs> | null
    /**
     * Filter, which work_skill to fetch.
     */
    where?: work_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_skills to fetch.
     */
    orderBy?: work_skillOrderByWithRelationInput | work_skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for work_skills.
     */
    cursor?: work_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of work_skills.
     */
    distinct?: Work_skillScalarFieldEnum | Work_skillScalarFieldEnum[]
  }

  /**
   * work_skill findMany
   */
  export type work_skillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_skill
     */
    select?: work_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_skill
     */
    omit?: work_skillOmit<ExtArgs> | null
    /**
     * Filter, which work_skills to fetch.
     */
    where?: work_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_skills to fetch.
     */
    orderBy?: work_skillOrderByWithRelationInput | work_skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing work_skills.
     */
    cursor?: work_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_skills.
     */
    skip?: number
    distinct?: Work_skillScalarFieldEnum | Work_skillScalarFieldEnum[]
  }

  /**
   * work_skill create
   */
  export type work_skillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_skill
     */
    select?: work_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_skill
     */
    omit?: work_skillOmit<ExtArgs> | null
    /**
     * The data needed to create a work_skill.
     */
    data: XOR<work_skillCreateInput, work_skillUncheckedCreateInput>
  }

  /**
   * work_skill createMany
   */
  export type work_skillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many work_skills.
     */
    data: work_skillCreateManyInput | work_skillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * work_skill createManyAndReturn
   */
  export type work_skillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_skill
     */
    select?: work_skillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the work_skill
     */
    omit?: work_skillOmit<ExtArgs> | null
    /**
     * The data used to create many work_skills.
     */
    data: work_skillCreateManyInput | work_skillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * work_skill update
   */
  export type work_skillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_skill
     */
    select?: work_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_skill
     */
    omit?: work_skillOmit<ExtArgs> | null
    /**
     * The data needed to update a work_skill.
     */
    data: XOR<work_skillUpdateInput, work_skillUncheckedUpdateInput>
    /**
     * Choose, which work_skill to update.
     */
    where: work_skillWhereUniqueInput
  }

  /**
   * work_skill updateMany
   */
  export type work_skillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update work_skills.
     */
    data: XOR<work_skillUpdateManyMutationInput, work_skillUncheckedUpdateManyInput>
    /**
     * Filter which work_skills to update
     */
    where?: work_skillWhereInput
    /**
     * Limit how many work_skills to update.
     */
    limit?: number
  }

  /**
   * work_skill updateManyAndReturn
   */
  export type work_skillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_skill
     */
    select?: work_skillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the work_skill
     */
    omit?: work_skillOmit<ExtArgs> | null
    /**
     * The data used to update work_skills.
     */
    data: XOR<work_skillUpdateManyMutationInput, work_skillUncheckedUpdateManyInput>
    /**
     * Filter which work_skills to update
     */
    where?: work_skillWhereInput
    /**
     * Limit how many work_skills to update.
     */
    limit?: number
  }

  /**
   * work_skill upsert
   */
  export type work_skillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_skill
     */
    select?: work_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_skill
     */
    omit?: work_skillOmit<ExtArgs> | null
    /**
     * The filter to search for the work_skill to update in case it exists.
     */
    where: work_skillWhereUniqueInput
    /**
     * In case the work_skill found by the `where` argument doesn't exist, create a new work_skill with this data.
     */
    create: XOR<work_skillCreateInput, work_skillUncheckedCreateInput>
    /**
     * In case the work_skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<work_skillUpdateInput, work_skillUncheckedUpdateInput>
  }

  /**
   * work_skill delete
   */
  export type work_skillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_skill
     */
    select?: work_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_skill
     */
    omit?: work_skillOmit<ExtArgs> | null
    /**
     * Filter which work_skill to delete.
     */
    where: work_skillWhereUniqueInput
  }

  /**
   * work_skill deleteMany
   */
  export type work_skillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which work_skills to delete
     */
    where?: work_skillWhereInput
    /**
     * Limit how many work_skills to delete.
     */
    limit?: number
  }

  /**
   * work_skill without action
   */
  export type work_skillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_skill
     */
    select?: work_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_skill
     */
    omit?: work_skillOmit<ExtArgs> | null
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


  export const EventScalarFieldEnum: {
    id: 'id',
    topic: 'topic',
    payload: 'payload',
    payload_hash: 'payload_hash',
    created_at: 'created_at'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category_id: 'category_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const Skill_categoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Skill_categoryScalarFieldEnum = (typeof Skill_categoryScalarFieldEnum)[keyof typeof Skill_categoryScalarFieldEnum]


  export const Skill_eventScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    user_id: 'user_id',
    skill_id: 'skill_id',
    skill_event_type_id: 'skill_event_type_id',
    source_id: 'source_id',
    source_type_id: 'source_type_id',
    created_at: 'created_at'
  };

  export type Skill_eventScalarFieldEnum = (typeof Skill_eventScalarFieldEnum)[keyof typeof Skill_eventScalarFieldEnum]


  export const Skill_event_typeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Skill_event_typeScalarFieldEnum = (typeof Skill_event_typeScalarFieldEnum)[keyof typeof Skill_event_typeScalarFieldEnum]


  export const Source_typeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Source_typeScalarFieldEnum = (typeof Source_typeScalarFieldEnum)[keyof typeof Source_typeScalarFieldEnum]


  export const User_skillScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    skill_id: 'skill_id',
    user_skill_level_id: 'user_skill_level_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_skill_display_mode_id: 'user_skill_display_mode_id'
  };

  export type User_skillScalarFieldEnum = (typeof User_skillScalarFieldEnum)[keyof typeof User_skillScalarFieldEnum]


  export const User_skill_display_modeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_skill_display_modeScalarFieldEnum = (typeof User_skill_display_modeScalarFieldEnum)[keyof typeof User_skill_display_modeScalarFieldEnum]


  export const User_skill_levelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_skill_levelScalarFieldEnum = (typeof User_skill_levelScalarFieldEnum)[keyof typeof User_skill_levelScalarFieldEnum]


  export const Work_skillScalarFieldEnum: {
    id: 'id',
    work_id: 'work_id',
    work_type_id: 'work_type_id',
    skill_id: 'skill_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Work_skillScalarFieldEnum = (typeof Work_skillScalarFieldEnum)[keyof typeof Work_skillScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type eventWhereInput = {
    AND?: eventWhereInput | eventWhereInput[]
    OR?: eventWhereInput[]
    NOT?: eventWhereInput | eventWhereInput[]
    id?: UuidFilter<"event"> | string
    topic?: StringFilter<"event"> | string
    payload?: JsonFilter<"event">
    payload_hash?: StringNullableFilter<"event"> | string | null
    created_at?: DateTimeFilter<"event"> | Date | string
    skill_event?: Skill_eventListRelationFilter
  }

  export type eventOrderByWithRelationInput = {
    id?: SortOrder
    topic?: SortOrder
    payload?: SortOrder
    payload_hash?: SortOrderInput | SortOrder
    created_at?: SortOrder
    skill_event?: skill_eventOrderByRelationAggregateInput
  }

  export type eventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    payload_hash?: string
    AND?: eventWhereInput | eventWhereInput[]
    OR?: eventWhereInput[]
    NOT?: eventWhereInput | eventWhereInput[]
    topic?: StringFilter<"event"> | string
    payload?: JsonFilter<"event">
    created_at?: DateTimeFilter<"event"> | Date | string
    skill_event?: Skill_eventListRelationFilter
  }, "id" | "payload_hash">

  export type eventOrderByWithAggregationInput = {
    id?: SortOrder
    topic?: SortOrder
    payload?: SortOrder
    payload_hash?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: eventCountOrderByAggregateInput
    _max?: eventMaxOrderByAggregateInput
    _min?: eventMinOrderByAggregateInput
  }

  export type eventScalarWhereWithAggregatesInput = {
    AND?: eventScalarWhereWithAggregatesInput | eventScalarWhereWithAggregatesInput[]
    OR?: eventScalarWhereWithAggregatesInput[]
    NOT?: eventScalarWhereWithAggregatesInput | eventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"event"> | string
    topic?: StringWithAggregatesFilter<"event"> | string
    payload?: JsonWithAggregatesFilter<"event">
    payload_hash?: StringNullableWithAggregatesFilter<"event"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"event"> | Date | string
  }

  export type skillWhereInput = {
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    id?: UuidFilter<"skill"> | string
    name?: StringFilter<"skill"> | string
    description?: StringNullableFilter<"skill"> | string | null
    category_id?: UuidNullableFilter<"skill"> | string | null
    created_at?: DateTimeFilter<"skill"> | Date | string
    updated_at?: DateTimeFilter<"skill"> | Date | string
    deleted_at?: DateTimeNullableFilter<"skill"> | Date | string | null
    skill_category?: XOR<Skill_categoryNullableScalarRelationFilter, skill_categoryWhereInput> | null
    skill_event?: Skill_eventListRelationFilter
    user_skill?: User_skillListRelationFilter
  }

  export type skillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    skill_category?: skill_categoryOrderByWithRelationInput
    skill_event?: skill_eventOrderByRelationAggregateInput
    user_skill?: user_skillOrderByRelationAggregateInput
  }

  export type skillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    description?: StringNullableFilter<"skill"> | string | null
    category_id?: UuidNullableFilter<"skill"> | string | null
    created_at?: DateTimeFilter<"skill"> | Date | string
    updated_at?: DateTimeFilter<"skill"> | Date | string
    deleted_at?: DateTimeNullableFilter<"skill"> | Date | string | null
    skill_category?: XOR<Skill_categoryNullableScalarRelationFilter, skill_categoryWhereInput> | null
    skill_event?: Skill_eventListRelationFilter
    user_skill?: User_skillListRelationFilter
  }, "id" | "name">

  export type skillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: skillCountOrderByAggregateInput
    _max?: skillMaxOrderByAggregateInput
    _min?: skillMinOrderByAggregateInput
  }

  export type skillScalarWhereWithAggregatesInput = {
    AND?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    OR?: skillScalarWhereWithAggregatesInput[]
    NOT?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"skill"> | string
    name?: StringWithAggregatesFilter<"skill"> | string
    description?: StringNullableWithAggregatesFilter<"skill"> | string | null
    category_id?: UuidNullableWithAggregatesFilter<"skill"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"skill"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"skill"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"skill"> | Date | string | null
  }

  export type skill_categoryWhereInput = {
    AND?: skill_categoryWhereInput | skill_categoryWhereInput[]
    OR?: skill_categoryWhereInput[]
    NOT?: skill_categoryWhereInput | skill_categoryWhereInput[]
    id?: UuidFilter<"skill_category"> | string
    name?: StringFilter<"skill_category"> | string
    description?: StringNullableFilter<"skill_category"> | string | null
    created_at?: DateTimeFilter<"skill_category"> | Date | string
    updated_at?: DateTimeFilter<"skill_category"> | Date | string
    skill?: SkillListRelationFilter
  }

  export type skill_categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    skill?: skillOrderByRelationAggregateInput
  }

  export type skill_categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: skill_categoryWhereInput | skill_categoryWhereInput[]
    OR?: skill_categoryWhereInput[]
    NOT?: skill_categoryWhereInput | skill_categoryWhereInput[]
    description?: StringNullableFilter<"skill_category"> | string | null
    created_at?: DateTimeFilter<"skill_category"> | Date | string
    updated_at?: DateTimeFilter<"skill_category"> | Date | string
    skill?: SkillListRelationFilter
  }, "id" | "name">

  export type skill_categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: skill_categoryCountOrderByAggregateInput
    _max?: skill_categoryMaxOrderByAggregateInput
    _min?: skill_categoryMinOrderByAggregateInput
  }

  export type skill_categoryScalarWhereWithAggregatesInput = {
    AND?: skill_categoryScalarWhereWithAggregatesInput | skill_categoryScalarWhereWithAggregatesInput[]
    OR?: skill_categoryScalarWhereWithAggregatesInput[]
    NOT?: skill_categoryScalarWhereWithAggregatesInput | skill_categoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"skill_category"> | string
    name?: StringWithAggregatesFilter<"skill_category"> | string
    description?: StringNullableWithAggregatesFilter<"skill_category"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"skill_category"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"skill_category"> | Date | string
  }

  export type skill_eventWhereInput = {
    AND?: skill_eventWhereInput | skill_eventWhereInput[]
    OR?: skill_eventWhereInput[]
    NOT?: skill_eventWhereInput | skill_eventWhereInput[]
    id?: UuidFilter<"skill_event"> | string
    event_id?: UuidFilter<"skill_event"> | string
    user_id?: IntFilter<"skill_event"> | number
    skill_id?: UuidFilter<"skill_event"> | string
    skill_event_type_id?: UuidFilter<"skill_event"> | string
    source_id?: StringFilter<"skill_event"> | string
    source_type_id?: UuidFilter<"skill_event"> | string
    created_at?: DateTimeFilter<"skill_event"> | Date | string
    event?: XOR<EventScalarRelationFilter, eventWhereInput>
    skill_event_type?: XOR<Skill_event_typeScalarRelationFilter, skill_event_typeWhereInput>
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
    source_type?: XOR<Source_typeScalarRelationFilter, source_typeWhereInput>
  }

  export type skill_eventOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
    skill_event_type_id?: SortOrder
    source_id?: SortOrder
    source_type_id?: SortOrder
    created_at?: SortOrder
    event?: eventOrderByWithRelationInput
    skill_event_type?: skill_event_typeOrderByWithRelationInput
    skill?: skillOrderByWithRelationInput
    source_type?: source_typeOrderByWithRelationInput
  }

  export type skill_eventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    skill_id_source_id_skill_event_type_id_user_id?: skill_eventSkill_idSource_idSkill_event_type_idUser_idCompoundUniqueInput
    AND?: skill_eventWhereInput | skill_eventWhereInput[]
    OR?: skill_eventWhereInput[]
    NOT?: skill_eventWhereInput | skill_eventWhereInput[]
    event_id?: UuidFilter<"skill_event"> | string
    user_id?: IntFilter<"skill_event"> | number
    skill_id?: UuidFilter<"skill_event"> | string
    skill_event_type_id?: UuidFilter<"skill_event"> | string
    source_id?: StringFilter<"skill_event"> | string
    source_type_id?: UuidFilter<"skill_event"> | string
    created_at?: DateTimeFilter<"skill_event"> | Date | string
    event?: XOR<EventScalarRelationFilter, eventWhereInput>
    skill_event_type?: XOR<Skill_event_typeScalarRelationFilter, skill_event_typeWhereInput>
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
    source_type?: XOR<Source_typeScalarRelationFilter, source_typeWhereInput>
  }, "id" | "skill_id_source_id_skill_event_type_id_user_id">

  export type skill_eventOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
    skill_event_type_id?: SortOrder
    source_id?: SortOrder
    source_type_id?: SortOrder
    created_at?: SortOrder
    _count?: skill_eventCountOrderByAggregateInput
    _avg?: skill_eventAvgOrderByAggregateInput
    _max?: skill_eventMaxOrderByAggregateInput
    _min?: skill_eventMinOrderByAggregateInput
    _sum?: skill_eventSumOrderByAggregateInput
  }

  export type skill_eventScalarWhereWithAggregatesInput = {
    AND?: skill_eventScalarWhereWithAggregatesInput | skill_eventScalarWhereWithAggregatesInput[]
    OR?: skill_eventScalarWhereWithAggregatesInput[]
    NOT?: skill_eventScalarWhereWithAggregatesInput | skill_eventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"skill_event"> | string
    event_id?: UuidWithAggregatesFilter<"skill_event"> | string
    user_id?: IntWithAggregatesFilter<"skill_event"> | number
    skill_id?: UuidWithAggregatesFilter<"skill_event"> | string
    skill_event_type_id?: UuidWithAggregatesFilter<"skill_event"> | string
    source_id?: StringWithAggregatesFilter<"skill_event"> | string
    source_type_id?: UuidWithAggregatesFilter<"skill_event"> | string
    created_at?: DateTimeWithAggregatesFilter<"skill_event"> | Date | string
  }

  export type skill_event_typeWhereInput = {
    AND?: skill_event_typeWhereInput | skill_event_typeWhereInput[]
    OR?: skill_event_typeWhereInput[]
    NOT?: skill_event_typeWhereInput | skill_event_typeWhereInput[]
    id?: UuidFilter<"skill_event_type"> | string
    name?: StringFilter<"skill_event_type"> | string
    description?: StringNullableFilter<"skill_event_type"> | string | null
    created_at?: DateTimeFilter<"skill_event_type"> | Date | string
    updated_at?: DateTimeFilter<"skill_event_type"> | Date | string
    skill_event?: Skill_eventListRelationFilter
  }

  export type skill_event_typeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    skill_event?: skill_eventOrderByRelationAggregateInput
  }

  export type skill_event_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: skill_event_typeWhereInput | skill_event_typeWhereInput[]
    OR?: skill_event_typeWhereInput[]
    NOT?: skill_event_typeWhereInput | skill_event_typeWhereInput[]
    description?: StringNullableFilter<"skill_event_type"> | string | null
    created_at?: DateTimeFilter<"skill_event_type"> | Date | string
    updated_at?: DateTimeFilter<"skill_event_type"> | Date | string
    skill_event?: Skill_eventListRelationFilter
  }, "id" | "name">

  export type skill_event_typeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: skill_event_typeCountOrderByAggregateInput
    _max?: skill_event_typeMaxOrderByAggregateInput
    _min?: skill_event_typeMinOrderByAggregateInput
  }

  export type skill_event_typeScalarWhereWithAggregatesInput = {
    AND?: skill_event_typeScalarWhereWithAggregatesInput | skill_event_typeScalarWhereWithAggregatesInput[]
    OR?: skill_event_typeScalarWhereWithAggregatesInput[]
    NOT?: skill_event_typeScalarWhereWithAggregatesInput | skill_event_typeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"skill_event_type"> | string
    name?: StringWithAggregatesFilter<"skill_event_type"> | string
    description?: StringNullableWithAggregatesFilter<"skill_event_type"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"skill_event_type"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"skill_event_type"> | Date | string
  }

  export type source_typeWhereInput = {
    AND?: source_typeWhereInput | source_typeWhereInput[]
    OR?: source_typeWhereInput[]
    NOT?: source_typeWhereInput | source_typeWhereInput[]
    id?: UuidFilter<"source_type"> | string
    name?: StringFilter<"source_type"> | string
    description?: StringNullableFilter<"source_type"> | string | null
    created_at?: DateTimeFilter<"source_type"> | Date | string
    updated_at?: DateTimeFilter<"source_type"> | Date | string
    skill_event?: Skill_eventListRelationFilter
  }

  export type source_typeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    skill_event?: skill_eventOrderByRelationAggregateInput
  }

  export type source_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: source_typeWhereInput | source_typeWhereInput[]
    OR?: source_typeWhereInput[]
    NOT?: source_typeWhereInput | source_typeWhereInput[]
    description?: StringNullableFilter<"source_type"> | string | null
    created_at?: DateTimeFilter<"source_type"> | Date | string
    updated_at?: DateTimeFilter<"source_type"> | Date | string
    skill_event?: Skill_eventListRelationFilter
  }, "id" | "name">

  export type source_typeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: source_typeCountOrderByAggregateInput
    _max?: source_typeMaxOrderByAggregateInput
    _min?: source_typeMinOrderByAggregateInput
  }

  export type source_typeScalarWhereWithAggregatesInput = {
    AND?: source_typeScalarWhereWithAggregatesInput | source_typeScalarWhereWithAggregatesInput[]
    OR?: source_typeScalarWhereWithAggregatesInput[]
    NOT?: source_typeScalarWhereWithAggregatesInput | source_typeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"source_type"> | string
    name?: StringWithAggregatesFilter<"source_type"> | string
    description?: StringNullableWithAggregatesFilter<"source_type"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"source_type"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"source_type"> | Date | string
  }

  export type user_skillWhereInput = {
    AND?: user_skillWhereInput | user_skillWhereInput[]
    OR?: user_skillWhereInput[]
    NOT?: user_skillWhereInput | user_skillWhereInput[]
    id?: UuidFilter<"user_skill"> | string
    user_id?: IntFilter<"user_skill"> | number
    skill_id?: UuidFilter<"user_skill"> | string
    user_skill_level_id?: UuidFilter<"user_skill"> | string
    created_at?: DateTimeFilter<"user_skill"> | Date | string
    updated_at?: DateTimeFilter<"user_skill"> | Date | string
    user_skill_display_mode_id?: UuidFilter<"user_skill"> | string
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
    user_skill_display_mode?: XOR<User_skill_display_modeScalarRelationFilter, user_skill_display_modeWhereInput>
    user_skill_level?: XOR<User_skill_levelScalarRelationFilter, user_skill_levelWhereInput>
  }

  export type user_skillOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
    user_skill_level_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_skill_display_mode_id?: SortOrder
    skill?: skillOrderByWithRelationInput
    user_skill_display_mode?: user_skill_display_modeOrderByWithRelationInput
    user_skill_level?: user_skill_levelOrderByWithRelationInput
  }

  export type user_skillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_skill_id_user_skill_level_id?: user_skillUser_idSkill_idUser_skill_level_idCompoundUniqueInput
    AND?: user_skillWhereInput | user_skillWhereInput[]
    OR?: user_skillWhereInput[]
    NOT?: user_skillWhereInput | user_skillWhereInput[]
    user_id?: IntFilter<"user_skill"> | number
    skill_id?: UuidFilter<"user_skill"> | string
    user_skill_level_id?: UuidFilter<"user_skill"> | string
    created_at?: DateTimeFilter<"user_skill"> | Date | string
    updated_at?: DateTimeFilter<"user_skill"> | Date | string
    user_skill_display_mode_id?: UuidFilter<"user_skill"> | string
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
    user_skill_display_mode?: XOR<User_skill_display_modeScalarRelationFilter, user_skill_display_modeWhereInput>
    user_skill_level?: XOR<User_skill_levelScalarRelationFilter, user_skill_levelWhereInput>
  }, "id" | "user_id_skill_id_user_skill_level_id">

  export type user_skillOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
    user_skill_level_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_skill_display_mode_id?: SortOrder
    _count?: user_skillCountOrderByAggregateInput
    _avg?: user_skillAvgOrderByAggregateInput
    _max?: user_skillMaxOrderByAggregateInput
    _min?: user_skillMinOrderByAggregateInput
    _sum?: user_skillSumOrderByAggregateInput
  }

  export type user_skillScalarWhereWithAggregatesInput = {
    AND?: user_skillScalarWhereWithAggregatesInput | user_skillScalarWhereWithAggregatesInput[]
    OR?: user_skillScalarWhereWithAggregatesInput[]
    NOT?: user_skillScalarWhereWithAggregatesInput | user_skillScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user_skill"> | string
    user_id?: IntWithAggregatesFilter<"user_skill"> | number
    skill_id?: UuidWithAggregatesFilter<"user_skill"> | string
    user_skill_level_id?: UuidWithAggregatesFilter<"user_skill"> | string
    created_at?: DateTimeWithAggregatesFilter<"user_skill"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user_skill"> | Date | string
    user_skill_display_mode_id?: UuidWithAggregatesFilter<"user_skill"> | string
  }

  export type user_skill_display_modeWhereInput = {
    AND?: user_skill_display_modeWhereInput | user_skill_display_modeWhereInput[]
    OR?: user_skill_display_modeWhereInput[]
    NOT?: user_skill_display_modeWhereInput | user_skill_display_modeWhereInput[]
    id?: UuidFilter<"user_skill_display_mode"> | string
    name?: StringFilter<"user_skill_display_mode"> | string
    description?: StringNullableFilter<"user_skill_display_mode"> | string | null
    created_at?: DateTimeFilter<"user_skill_display_mode"> | Date | string
    updated_at?: DateTimeFilter<"user_skill_display_mode"> | Date | string
    user_skill?: User_skillListRelationFilter
  }

  export type user_skill_display_modeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_skill?: user_skillOrderByRelationAggregateInput
  }

  export type user_skill_display_modeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: user_skill_display_modeWhereInput | user_skill_display_modeWhereInput[]
    OR?: user_skill_display_modeWhereInput[]
    NOT?: user_skill_display_modeWhereInput | user_skill_display_modeWhereInput[]
    description?: StringNullableFilter<"user_skill_display_mode"> | string | null
    created_at?: DateTimeFilter<"user_skill_display_mode"> | Date | string
    updated_at?: DateTimeFilter<"user_skill_display_mode"> | Date | string
    user_skill?: User_skillListRelationFilter
  }, "id" | "name">

  export type user_skill_display_modeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: user_skill_display_modeCountOrderByAggregateInput
    _max?: user_skill_display_modeMaxOrderByAggregateInput
    _min?: user_skill_display_modeMinOrderByAggregateInput
  }

  export type user_skill_display_modeScalarWhereWithAggregatesInput = {
    AND?: user_skill_display_modeScalarWhereWithAggregatesInput | user_skill_display_modeScalarWhereWithAggregatesInput[]
    OR?: user_skill_display_modeScalarWhereWithAggregatesInput[]
    NOT?: user_skill_display_modeScalarWhereWithAggregatesInput | user_skill_display_modeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user_skill_display_mode"> | string
    name?: StringWithAggregatesFilter<"user_skill_display_mode"> | string
    description?: StringNullableWithAggregatesFilter<"user_skill_display_mode"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"user_skill_display_mode"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user_skill_display_mode"> | Date | string
  }

  export type user_skill_levelWhereInput = {
    AND?: user_skill_levelWhereInput | user_skill_levelWhereInput[]
    OR?: user_skill_levelWhereInput[]
    NOT?: user_skill_levelWhereInput | user_skill_levelWhereInput[]
    id?: UuidFilter<"user_skill_level"> | string
    name?: StringFilter<"user_skill_level"> | string
    description?: StringNullableFilter<"user_skill_level"> | string | null
    created_at?: DateTimeFilter<"user_skill_level"> | Date | string
    updated_at?: DateTimeFilter<"user_skill_level"> | Date | string
    user_skill?: User_skillListRelationFilter
  }

  export type user_skill_levelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_skill?: user_skillOrderByRelationAggregateInput
  }

  export type user_skill_levelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: user_skill_levelWhereInput | user_skill_levelWhereInput[]
    OR?: user_skill_levelWhereInput[]
    NOT?: user_skill_levelWhereInput | user_skill_levelWhereInput[]
    description?: StringNullableFilter<"user_skill_level"> | string | null
    created_at?: DateTimeFilter<"user_skill_level"> | Date | string
    updated_at?: DateTimeFilter<"user_skill_level"> | Date | string
    user_skill?: User_skillListRelationFilter
  }, "id" | "name">

  export type user_skill_levelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: user_skill_levelCountOrderByAggregateInput
    _max?: user_skill_levelMaxOrderByAggregateInput
    _min?: user_skill_levelMinOrderByAggregateInput
  }

  export type user_skill_levelScalarWhereWithAggregatesInput = {
    AND?: user_skill_levelScalarWhereWithAggregatesInput | user_skill_levelScalarWhereWithAggregatesInput[]
    OR?: user_skill_levelScalarWhereWithAggregatesInput[]
    NOT?: user_skill_levelScalarWhereWithAggregatesInput | user_skill_levelScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user_skill_level"> | string
    name?: StringWithAggregatesFilter<"user_skill_level"> | string
    description?: StringNullableWithAggregatesFilter<"user_skill_level"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"user_skill_level"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user_skill_level"> | Date | string
  }

  export type work_skillWhereInput = {
    AND?: work_skillWhereInput | work_skillWhereInput[]
    OR?: work_skillWhereInput[]
    NOT?: work_skillWhereInput | work_skillWhereInput[]
    id?: UuidFilter<"work_skill"> | string
    work_id?: UuidFilter<"work_skill"> | string
    work_type_id?: UuidFilter<"work_skill"> | string
    skill_id?: UuidFilter<"work_skill"> | string
    created_at?: DateTimeFilter<"work_skill"> | Date | string
    updated_at?: DateTimeFilter<"work_skill"> | Date | string
  }

  export type work_skillOrderByWithRelationInput = {
    id?: SortOrder
    work_id?: SortOrder
    work_type_id?: SortOrder
    skill_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type work_skillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    work_id_work_type_id_skill_id?: work_skillWork_idWork_type_idSkill_idCompoundUniqueInput
    AND?: work_skillWhereInput | work_skillWhereInput[]
    OR?: work_skillWhereInput[]
    NOT?: work_skillWhereInput | work_skillWhereInput[]
    work_id?: UuidFilter<"work_skill"> | string
    work_type_id?: UuidFilter<"work_skill"> | string
    skill_id?: UuidFilter<"work_skill"> | string
    created_at?: DateTimeFilter<"work_skill"> | Date | string
    updated_at?: DateTimeFilter<"work_skill"> | Date | string
  }, "id" | "work_id_work_type_id_skill_id">

  export type work_skillOrderByWithAggregationInput = {
    id?: SortOrder
    work_id?: SortOrder
    work_type_id?: SortOrder
    skill_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: work_skillCountOrderByAggregateInput
    _max?: work_skillMaxOrderByAggregateInput
    _min?: work_skillMinOrderByAggregateInput
  }

  export type work_skillScalarWhereWithAggregatesInput = {
    AND?: work_skillScalarWhereWithAggregatesInput | work_skillScalarWhereWithAggregatesInput[]
    OR?: work_skillScalarWhereWithAggregatesInput[]
    NOT?: work_skillScalarWhereWithAggregatesInput | work_skillScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"work_skill"> | string
    work_id?: UuidWithAggregatesFilter<"work_skill"> | string
    work_type_id?: UuidWithAggregatesFilter<"work_skill"> | string
    skill_id?: UuidWithAggregatesFilter<"work_skill"> | string
    created_at?: DateTimeWithAggregatesFilter<"work_skill"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"work_skill"> | Date | string
  }

  export type eventCreateInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payload_hash?: string | null
    created_at?: Date | string
    skill_event?: skill_eventCreateNestedManyWithoutEventInput
  }

  export type eventUncheckedCreateInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payload_hash?: string | null
    created_at?: Date | string
    skill_event?: skill_eventUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payload_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    skill_event?: skill_eventUpdateManyWithoutEventNestedInput
  }

  export type eventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payload_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    skill_event?: skill_eventUncheckedUpdateManyWithoutEventNestedInput
  }

  export type eventCreateManyInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payload_hash?: string | null
    created_at?: Date | string
  }

  export type eventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payload_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payload_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    skill_category?: skill_categoryCreateNestedOneWithoutSkillInput
    skill_event?: skill_eventCreateNestedManyWithoutSkillInput
    user_skill?: user_skillCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    category_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    skill_event?: skill_eventUncheckedCreateNestedManyWithoutSkillInput
    user_skill?: user_skillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skill_category?: skill_categoryUpdateOneWithoutSkillNestedInput
    skill_event?: skill_eventUpdateManyWithoutSkillNestedInput
    user_skill?: user_skillUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skill_event?: skill_eventUncheckedUpdateManyWithoutSkillNestedInput
    user_skill?: user_skillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type skillCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    category_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type skillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skill_categoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    skill?: skillCreateNestedManyWithoutSkill_categoryInput
  }

  export type skill_categoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    skill?: skillUncheckedCreateNestedManyWithoutSkill_categoryInput
  }

  export type skill_categoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: skillUpdateManyWithoutSkill_categoryNestedInput
  }

  export type skill_categoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: skillUncheckedUpdateManyWithoutSkill_categoryNestedInput
  }

  export type skill_categoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type skill_categoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_categoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_eventCreateInput = {
    id?: string
    user_id: number
    source_id: string
    created_at?: Date | string
    event: eventCreateNestedOneWithoutSkill_eventInput
    skill_event_type: skill_event_typeCreateNestedOneWithoutSkill_eventInput
    skill: skillCreateNestedOneWithoutSkill_eventInput
    source_type: source_typeCreateNestedOneWithoutSkill_eventInput
  }

  export type skill_eventUncheckedCreateInput = {
    id?: string
    event_id: string
    user_id: number
    skill_id: string
    skill_event_type_id: string
    source_id: string
    source_type_id: string
    created_at?: Date | string
  }

  export type skill_eventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventUpdateOneRequiredWithoutSkill_eventNestedInput
    skill_event_type?: skill_event_typeUpdateOneRequiredWithoutSkill_eventNestedInput
    skill?: skillUpdateOneRequiredWithoutSkill_eventNestedInput
    source_type?: source_typeUpdateOneRequiredWithoutSkill_eventNestedInput
  }

  export type skill_eventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: StringFieldUpdateOperationsInput | string
    skill_event_type_id?: StringFieldUpdateOperationsInput | string
    source_id?: StringFieldUpdateOperationsInput | string
    source_type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_eventCreateManyInput = {
    id?: string
    event_id: string
    user_id: number
    skill_id: string
    skill_event_type_id: string
    source_id: string
    source_type_id: string
    created_at?: Date | string
  }

  export type skill_eventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_eventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: StringFieldUpdateOperationsInput | string
    skill_event_type_id?: StringFieldUpdateOperationsInput | string
    source_id?: StringFieldUpdateOperationsInput | string
    source_type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_event_typeCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    skill_event?: skill_eventCreateNestedManyWithoutSkill_event_typeInput
  }

  export type skill_event_typeUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    skill_event?: skill_eventUncheckedCreateNestedManyWithoutSkill_event_typeInput
  }

  export type skill_event_typeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    skill_event?: skill_eventUpdateManyWithoutSkill_event_typeNestedInput
  }

  export type skill_event_typeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    skill_event?: skill_eventUncheckedUpdateManyWithoutSkill_event_typeNestedInput
  }

  export type skill_event_typeCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type skill_event_typeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_event_typeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type source_typeCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    skill_event?: skill_eventCreateNestedManyWithoutSource_typeInput
  }

  export type source_typeUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    skill_event?: skill_eventUncheckedCreateNestedManyWithoutSource_typeInput
  }

  export type source_typeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    skill_event?: skill_eventUpdateManyWithoutSource_typeNestedInput
  }

  export type source_typeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    skill_event?: skill_eventUncheckedUpdateManyWithoutSource_typeNestedInput
  }

  export type source_typeCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type source_typeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type source_typeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_skillCreateInput = {
    id?: string
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
    skill: skillCreateNestedOneWithoutUser_skillInput
    user_skill_display_mode?: user_skill_display_modeCreateNestedOneWithoutUser_skillInput
    user_skill_level: user_skill_levelCreateNestedOneWithoutUser_skillInput
  }

  export type user_skillUncheckedCreateInput = {
    id?: string
    user_id: number
    skill_id: string
    user_skill_level_id: string
    created_at?: Date | string
    updated_at?: Date | string
    user_skill_display_mode_id?: string
  }

  export type user_skillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: skillUpdateOneRequiredWithoutUser_skillNestedInput
    user_skill_display_mode?: user_skill_display_modeUpdateOneRequiredWithoutUser_skillNestedInput
    user_skill_level?: user_skill_levelUpdateOneRequiredWithoutUser_skillNestedInput
  }

  export type user_skillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: StringFieldUpdateOperationsInput | string
    user_skill_level_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_skill_display_mode_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_skillCreateManyInput = {
    id?: string
    user_id: number
    skill_id: string
    user_skill_level_id: string
    created_at?: Date | string
    updated_at?: Date | string
    user_skill_display_mode_id?: string
  }

  export type user_skillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_skillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: StringFieldUpdateOperationsInput | string
    user_skill_level_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_skill_display_mode_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_skill_display_modeCreateInput = {
    id: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_skill?: user_skillCreateNestedManyWithoutUser_skill_display_modeInput
  }

  export type user_skill_display_modeUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_skill?: user_skillUncheckedCreateNestedManyWithoutUser_skill_display_modeInput
  }

  export type user_skill_display_modeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_skill?: user_skillUpdateManyWithoutUser_skill_display_modeNestedInput
  }

  export type user_skill_display_modeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_skill?: user_skillUncheckedUpdateManyWithoutUser_skill_display_modeNestedInput
  }

  export type user_skill_display_modeCreateManyInput = {
    id: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_skill_display_modeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_skill_display_modeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_skill_levelCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_skill?: user_skillCreateNestedManyWithoutUser_skill_levelInput
  }

  export type user_skill_levelUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_skill?: user_skillUncheckedCreateNestedManyWithoutUser_skill_levelInput
  }

  export type user_skill_levelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_skill?: user_skillUpdateManyWithoutUser_skill_levelNestedInput
  }

  export type user_skill_levelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_skill?: user_skillUncheckedUpdateManyWithoutUser_skill_levelNestedInput
  }

  export type user_skill_levelCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_skill_levelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_skill_levelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type work_skillCreateInput = {
    id?: string
    work_id: string
    work_type_id: string
    skill_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type work_skillUncheckedCreateInput = {
    id?: string
    work_id: string
    work_type_id: string
    skill_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type work_skillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    work_id?: StringFieldUpdateOperationsInput | string
    work_type_id?: StringFieldUpdateOperationsInput | string
    skill_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type work_skillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    work_id?: StringFieldUpdateOperationsInput | string
    work_type_id?: StringFieldUpdateOperationsInput | string
    skill_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type work_skillCreateManyInput = {
    id?: string
    work_id: string
    work_type_id: string
    skill_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type work_skillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    work_id?: StringFieldUpdateOperationsInput | string
    work_type_id?: StringFieldUpdateOperationsInput | string
    skill_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type work_skillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    work_id?: StringFieldUpdateOperationsInput | string
    work_type_id?: StringFieldUpdateOperationsInput | string
    skill_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type Skill_eventListRelationFilter = {
    every?: skill_eventWhereInput
    some?: skill_eventWhereInput
    none?: skill_eventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type skill_eventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventCountOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    payload?: SortOrder
    payload_hash?: SortOrder
    created_at?: SortOrder
  }

  export type eventMaxOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    payload_hash?: SortOrder
    created_at?: SortOrder
  }

  export type eventMinOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    payload_hash?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Skill_categoryNullableScalarRelationFilter = {
    is?: skill_categoryWhereInput | null
    isNot?: skill_categoryWhereInput | null
  }

  export type User_skillListRelationFilter = {
    every?: user_skillWhereInput
    some?: user_skillWhereInput
    none?: user_skillWhereInput
  }

  export type user_skillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type skillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type skillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type skillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SkillListRelationFilter = {
    every?: skillWhereInput
    some?: skillWhereInput
    none?: skillWhereInput
  }

  export type skillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type skill_categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type skill_categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type skill_categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EventScalarRelationFilter = {
    is?: eventWhereInput
    isNot?: eventWhereInput
  }

  export type Skill_event_typeScalarRelationFilter = {
    is?: skill_event_typeWhereInput
    isNot?: skill_event_typeWhereInput
  }

  export type SkillScalarRelationFilter = {
    is?: skillWhereInput
    isNot?: skillWhereInput
  }

  export type Source_typeScalarRelationFilter = {
    is?: source_typeWhereInput
    isNot?: source_typeWhereInput
  }

  export type skill_eventSkill_idSource_idSkill_event_type_idUser_idCompoundUniqueInput = {
    skill_id: string
    source_id: string
    skill_event_type_id: string
    user_id: number
  }

  export type skill_eventCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
    skill_event_type_id?: SortOrder
    source_id?: SortOrder
    source_type_id?: SortOrder
    created_at?: SortOrder
  }

  export type skill_eventAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type skill_eventMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
    skill_event_type_id?: SortOrder
    source_id?: SortOrder
    source_type_id?: SortOrder
    created_at?: SortOrder
  }

  export type skill_eventMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
    skill_event_type_id?: SortOrder
    source_id?: SortOrder
    source_type_id?: SortOrder
    created_at?: SortOrder
  }

  export type skill_eventSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type skill_event_typeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type skill_event_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type skill_event_typeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type source_typeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type source_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type source_typeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type User_skill_display_modeScalarRelationFilter = {
    is?: user_skill_display_modeWhereInput
    isNot?: user_skill_display_modeWhereInput
  }

  export type User_skill_levelScalarRelationFilter = {
    is?: user_skill_levelWhereInput
    isNot?: user_skill_levelWhereInput
  }

  export type user_skillUser_idSkill_idUser_skill_level_idCompoundUniqueInput = {
    user_id: number
    skill_id: string
    user_skill_level_id: string
  }

  export type user_skillCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
    user_skill_level_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_skill_display_mode_id?: SortOrder
  }

  export type user_skillAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type user_skillMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
    user_skill_level_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_skill_display_mode_id?: SortOrder
  }

  export type user_skillMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    skill_id?: SortOrder
    user_skill_level_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_skill_display_mode_id?: SortOrder
  }

  export type user_skillSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type user_skill_display_modeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_skill_display_modeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_skill_display_modeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_skill_levelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_skill_levelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_skill_levelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type work_skillWork_idWork_type_idSkill_idCompoundUniqueInput = {
    work_id: string
    work_type_id: string
    skill_id: string
  }

  export type work_skillCountOrderByAggregateInput = {
    id?: SortOrder
    work_id?: SortOrder
    work_type_id?: SortOrder
    skill_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type work_skillMaxOrderByAggregateInput = {
    id?: SortOrder
    work_id?: SortOrder
    work_type_id?: SortOrder
    skill_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type work_skillMinOrderByAggregateInput = {
    id?: SortOrder
    work_id?: SortOrder
    work_type_id?: SortOrder
    skill_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type skill_eventCreateNestedManyWithoutEventInput = {
    create?: XOR<skill_eventCreateWithoutEventInput, skill_eventUncheckedCreateWithoutEventInput> | skill_eventCreateWithoutEventInput[] | skill_eventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutEventInput | skill_eventCreateOrConnectWithoutEventInput[]
    createMany?: skill_eventCreateManyEventInputEnvelope
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
  }

  export type skill_eventUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<skill_eventCreateWithoutEventInput, skill_eventUncheckedCreateWithoutEventInput> | skill_eventCreateWithoutEventInput[] | skill_eventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutEventInput | skill_eventCreateOrConnectWithoutEventInput[]
    createMany?: skill_eventCreateManyEventInputEnvelope
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type skill_eventUpdateManyWithoutEventNestedInput = {
    create?: XOR<skill_eventCreateWithoutEventInput, skill_eventUncheckedCreateWithoutEventInput> | skill_eventCreateWithoutEventInput[] | skill_eventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutEventInput | skill_eventCreateOrConnectWithoutEventInput[]
    upsert?: skill_eventUpsertWithWhereUniqueWithoutEventInput | skill_eventUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: skill_eventCreateManyEventInputEnvelope
    set?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    disconnect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    delete?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    update?: skill_eventUpdateWithWhereUniqueWithoutEventInput | skill_eventUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: skill_eventUpdateManyWithWhereWithoutEventInput | skill_eventUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: skill_eventScalarWhereInput | skill_eventScalarWhereInput[]
  }

  export type skill_eventUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<skill_eventCreateWithoutEventInput, skill_eventUncheckedCreateWithoutEventInput> | skill_eventCreateWithoutEventInput[] | skill_eventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutEventInput | skill_eventCreateOrConnectWithoutEventInput[]
    upsert?: skill_eventUpsertWithWhereUniqueWithoutEventInput | skill_eventUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: skill_eventCreateManyEventInputEnvelope
    set?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    disconnect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    delete?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    update?: skill_eventUpdateWithWhereUniqueWithoutEventInput | skill_eventUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: skill_eventUpdateManyWithWhereWithoutEventInput | skill_eventUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: skill_eventScalarWhereInput | skill_eventScalarWhereInput[]
  }

  export type skill_categoryCreateNestedOneWithoutSkillInput = {
    create?: XOR<skill_categoryCreateWithoutSkillInput, skill_categoryUncheckedCreateWithoutSkillInput>
    connectOrCreate?: skill_categoryCreateOrConnectWithoutSkillInput
    connect?: skill_categoryWhereUniqueInput
  }

  export type skill_eventCreateNestedManyWithoutSkillInput = {
    create?: XOR<skill_eventCreateWithoutSkillInput, skill_eventUncheckedCreateWithoutSkillInput> | skill_eventCreateWithoutSkillInput[] | skill_eventUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutSkillInput | skill_eventCreateOrConnectWithoutSkillInput[]
    createMany?: skill_eventCreateManySkillInputEnvelope
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
  }

  export type user_skillCreateNestedManyWithoutSkillInput = {
    create?: XOR<user_skillCreateWithoutSkillInput, user_skillUncheckedCreateWithoutSkillInput> | user_skillCreateWithoutSkillInput[] | user_skillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: user_skillCreateOrConnectWithoutSkillInput | user_skillCreateOrConnectWithoutSkillInput[]
    createMany?: user_skillCreateManySkillInputEnvelope
    connect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
  }

  export type skill_eventUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<skill_eventCreateWithoutSkillInput, skill_eventUncheckedCreateWithoutSkillInput> | skill_eventCreateWithoutSkillInput[] | skill_eventUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutSkillInput | skill_eventCreateOrConnectWithoutSkillInput[]
    createMany?: skill_eventCreateManySkillInputEnvelope
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
  }

  export type user_skillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<user_skillCreateWithoutSkillInput, user_skillUncheckedCreateWithoutSkillInput> | user_skillCreateWithoutSkillInput[] | user_skillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: user_skillCreateOrConnectWithoutSkillInput | user_skillCreateOrConnectWithoutSkillInput[]
    createMany?: user_skillCreateManySkillInputEnvelope
    connect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type skill_categoryUpdateOneWithoutSkillNestedInput = {
    create?: XOR<skill_categoryCreateWithoutSkillInput, skill_categoryUncheckedCreateWithoutSkillInput>
    connectOrCreate?: skill_categoryCreateOrConnectWithoutSkillInput
    upsert?: skill_categoryUpsertWithoutSkillInput
    disconnect?: skill_categoryWhereInput | boolean
    delete?: skill_categoryWhereInput | boolean
    connect?: skill_categoryWhereUniqueInput
    update?: XOR<XOR<skill_categoryUpdateToOneWithWhereWithoutSkillInput, skill_categoryUpdateWithoutSkillInput>, skill_categoryUncheckedUpdateWithoutSkillInput>
  }

  export type skill_eventUpdateManyWithoutSkillNestedInput = {
    create?: XOR<skill_eventCreateWithoutSkillInput, skill_eventUncheckedCreateWithoutSkillInput> | skill_eventCreateWithoutSkillInput[] | skill_eventUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutSkillInput | skill_eventCreateOrConnectWithoutSkillInput[]
    upsert?: skill_eventUpsertWithWhereUniqueWithoutSkillInput | skill_eventUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: skill_eventCreateManySkillInputEnvelope
    set?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    disconnect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    delete?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    update?: skill_eventUpdateWithWhereUniqueWithoutSkillInput | skill_eventUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: skill_eventUpdateManyWithWhereWithoutSkillInput | skill_eventUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: skill_eventScalarWhereInput | skill_eventScalarWhereInput[]
  }

  export type user_skillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<user_skillCreateWithoutSkillInput, user_skillUncheckedCreateWithoutSkillInput> | user_skillCreateWithoutSkillInput[] | user_skillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: user_skillCreateOrConnectWithoutSkillInput | user_skillCreateOrConnectWithoutSkillInput[]
    upsert?: user_skillUpsertWithWhereUniqueWithoutSkillInput | user_skillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: user_skillCreateManySkillInputEnvelope
    set?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    disconnect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    delete?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    connect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    update?: user_skillUpdateWithWhereUniqueWithoutSkillInput | user_skillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: user_skillUpdateManyWithWhereWithoutSkillInput | user_skillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: user_skillScalarWhereInput | user_skillScalarWhereInput[]
  }

  export type skill_eventUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<skill_eventCreateWithoutSkillInput, skill_eventUncheckedCreateWithoutSkillInput> | skill_eventCreateWithoutSkillInput[] | skill_eventUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutSkillInput | skill_eventCreateOrConnectWithoutSkillInput[]
    upsert?: skill_eventUpsertWithWhereUniqueWithoutSkillInput | skill_eventUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: skill_eventCreateManySkillInputEnvelope
    set?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    disconnect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    delete?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    update?: skill_eventUpdateWithWhereUniqueWithoutSkillInput | skill_eventUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: skill_eventUpdateManyWithWhereWithoutSkillInput | skill_eventUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: skill_eventScalarWhereInput | skill_eventScalarWhereInput[]
  }

  export type user_skillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<user_skillCreateWithoutSkillInput, user_skillUncheckedCreateWithoutSkillInput> | user_skillCreateWithoutSkillInput[] | user_skillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: user_skillCreateOrConnectWithoutSkillInput | user_skillCreateOrConnectWithoutSkillInput[]
    upsert?: user_skillUpsertWithWhereUniqueWithoutSkillInput | user_skillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: user_skillCreateManySkillInputEnvelope
    set?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    disconnect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    delete?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    connect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    update?: user_skillUpdateWithWhereUniqueWithoutSkillInput | user_skillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: user_skillUpdateManyWithWhereWithoutSkillInput | user_skillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: user_skillScalarWhereInput | user_skillScalarWhereInput[]
  }

  export type skillCreateNestedManyWithoutSkill_categoryInput = {
    create?: XOR<skillCreateWithoutSkill_categoryInput, skillUncheckedCreateWithoutSkill_categoryInput> | skillCreateWithoutSkill_categoryInput[] | skillUncheckedCreateWithoutSkill_categoryInput[]
    connectOrCreate?: skillCreateOrConnectWithoutSkill_categoryInput | skillCreateOrConnectWithoutSkill_categoryInput[]
    createMany?: skillCreateManySkill_categoryInputEnvelope
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
  }

  export type skillUncheckedCreateNestedManyWithoutSkill_categoryInput = {
    create?: XOR<skillCreateWithoutSkill_categoryInput, skillUncheckedCreateWithoutSkill_categoryInput> | skillCreateWithoutSkill_categoryInput[] | skillUncheckedCreateWithoutSkill_categoryInput[]
    connectOrCreate?: skillCreateOrConnectWithoutSkill_categoryInput | skillCreateOrConnectWithoutSkill_categoryInput[]
    createMany?: skillCreateManySkill_categoryInputEnvelope
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
  }

  export type skillUpdateManyWithoutSkill_categoryNestedInput = {
    create?: XOR<skillCreateWithoutSkill_categoryInput, skillUncheckedCreateWithoutSkill_categoryInput> | skillCreateWithoutSkill_categoryInput[] | skillUncheckedCreateWithoutSkill_categoryInput[]
    connectOrCreate?: skillCreateOrConnectWithoutSkill_categoryInput | skillCreateOrConnectWithoutSkill_categoryInput[]
    upsert?: skillUpsertWithWhereUniqueWithoutSkill_categoryInput | skillUpsertWithWhereUniqueWithoutSkill_categoryInput[]
    createMany?: skillCreateManySkill_categoryInputEnvelope
    set?: skillWhereUniqueInput | skillWhereUniqueInput[]
    disconnect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    delete?: skillWhereUniqueInput | skillWhereUniqueInput[]
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    update?: skillUpdateWithWhereUniqueWithoutSkill_categoryInput | skillUpdateWithWhereUniqueWithoutSkill_categoryInput[]
    updateMany?: skillUpdateManyWithWhereWithoutSkill_categoryInput | skillUpdateManyWithWhereWithoutSkill_categoryInput[]
    deleteMany?: skillScalarWhereInput | skillScalarWhereInput[]
  }

  export type skillUncheckedUpdateManyWithoutSkill_categoryNestedInput = {
    create?: XOR<skillCreateWithoutSkill_categoryInput, skillUncheckedCreateWithoutSkill_categoryInput> | skillCreateWithoutSkill_categoryInput[] | skillUncheckedCreateWithoutSkill_categoryInput[]
    connectOrCreate?: skillCreateOrConnectWithoutSkill_categoryInput | skillCreateOrConnectWithoutSkill_categoryInput[]
    upsert?: skillUpsertWithWhereUniqueWithoutSkill_categoryInput | skillUpsertWithWhereUniqueWithoutSkill_categoryInput[]
    createMany?: skillCreateManySkill_categoryInputEnvelope
    set?: skillWhereUniqueInput | skillWhereUniqueInput[]
    disconnect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    delete?: skillWhereUniqueInput | skillWhereUniqueInput[]
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    update?: skillUpdateWithWhereUniqueWithoutSkill_categoryInput | skillUpdateWithWhereUniqueWithoutSkill_categoryInput[]
    updateMany?: skillUpdateManyWithWhereWithoutSkill_categoryInput | skillUpdateManyWithWhereWithoutSkill_categoryInput[]
    deleteMany?: skillScalarWhereInput | skillScalarWhereInput[]
  }

  export type eventCreateNestedOneWithoutSkill_eventInput = {
    create?: XOR<eventCreateWithoutSkill_eventInput, eventUncheckedCreateWithoutSkill_eventInput>
    connectOrCreate?: eventCreateOrConnectWithoutSkill_eventInput
    connect?: eventWhereUniqueInput
  }

  export type skill_event_typeCreateNestedOneWithoutSkill_eventInput = {
    create?: XOR<skill_event_typeCreateWithoutSkill_eventInput, skill_event_typeUncheckedCreateWithoutSkill_eventInput>
    connectOrCreate?: skill_event_typeCreateOrConnectWithoutSkill_eventInput
    connect?: skill_event_typeWhereUniqueInput
  }

  export type skillCreateNestedOneWithoutSkill_eventInput = {
    create?: XOR<skillCreateWithoutSkill_eventInput, skillUncheckedCreateWithoutSkill_eventInput>
    connectOrCreate?: skillCreateOrConnectWithoutSkill_eventInput
    connect?: skillWhereUniqueInput
  }

  export type source_typeCreateNestedOneWithoutSkill_eventInput = {
    create?: XOR<source_typeCreateWithoutSkill_eventInput, source_typeUncheckedCreateWithoutSkill_eventInput>
    connectOrCreate?: source_typeCreateOrConnectWithoutSkill_eventInput
    connect?: source_typeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type eventUpdateOneRequiredWithoutSkill_eventNestedInput = {
    create?: XOR<eventCreateWithoutSkill_eventInput, eventUncheckedCreateWithoutSkill_eventInput>
    connectOrCreate?: eventCreateOrConnectWithoutSkill_eventInput
    upsert?: eventUpsertWithoutSkill_eventInput
    connect?: eventWhereUniqueInput
    update?: XOR<XOR<eventUpdateToOneWithWhereWithoutSkill_eventInput, eventUpdateWithoutSkill_eventInput>, eventUncheckedUpdateWithoutSkill_eventInput>
  }

  export type skill_event_typeUpdateOneRequiredWithoutSkill_eventNestedInput = {
    create?: XOR<skill_event_typeCreateWithoutSkill_eventInput, skill_event_typeUncheckedCreateWithoutSkill_eventInput>
    connectOrCreate?: skill_event_typeCreateOrConnectWithoutSkill_eventInput
    upsert?: skill_event_typeUpsertWithoutSkill_eventInput
    connect?: skill_event_typeWhereUniqueInput
    update?: XOR<XOR<skill_event_typeUpdateToOneWithWhereWithoutSkill_eventInput, skill_event_typeUpdateWithoutSkill_eventInput>, skill_event_typeUncheckedUpdateWithoutSkill_eventInput>
  }

  export type skillUpdateOneRequiredWithoutSkill_eventNestedInput = {
    create?: XOR<skillCreateWithoutSkill_eventInput, skillUncheckedCreateWithoutSkill_eventInput>
    connectOrCreate?: skillCreateOrConnectWithoutSkill_eventInput
    upsert?: skillUpsertWithoutSkill_eventInput
    connect?: skillWhereUniqueInput
    update?: XOR<XOR<skillUpdateToOneWithWhereWithoutSkill_eventInput, skillUpdateWithoutSkill_eventInput>, skillUncheckedUpdateWithoutSkill_eventInput>
  }

  export type source_typeUpdateOneRequiredWithoutSkill_eventNestedInput = {
    create?: XOR<source_typeCreateWithoutSkill_eventInput, source_typeUncheckedCreateWithoutSkill_eventInput>
    connectOrCreate?: source_typeCreateOrConnectWithoutSkill_eventInput
    upsert?: source_typeUpsertWithoutSkill_eventInput
    connect?: source_typeWhereUniqueInput
    update?: XOR<XOR<source_typeUpdateToOneWithWhereWithoutSkill_eventInput, source_typeUpdateWithoutSkill_eventInput>, source_typeUncheckedUpdateWithoutSkill_eventInput>
  }

  export type skill_eventCreateNestedManyWithoutSkill_event_typeInput = {
    create?: XOR<skill_eventCreateWithoutSkill_event_typeInput, skill_eventUncheckedCreateWithoutSkill_event_typeInput> | skill_eventCreateWithoutSkill_event_typeInput[] | skill_eventUncheckedCreateWithoutSkill_event_typeInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutSkill_event_typeInput | skill_eventCreateOrConnectWithoutSkill_event_typeInput[]
    createMany?: skill_eventCreateManySkill_event_typeInputEnvelope
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
  }

  export type skill_eventUncheckedCreateNestedManyWithoutSkill_event_typeInput = {
    create?: XOR<skill_eventCreateWithoutSkill_event_typeInput, skill_eventUncheckedCreateWithoutSkill_event_typeInput> | skill_eventCreateWithoutSkill_event_typeInput[] | skill_eventUncheckedCreateWithoutSkill_event_typeInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutSkill_event_typeInput | skill_eventCreateOrConnectWithoutSkill_event_typeInput[]
    createMany?: skill_eventCreateManySkill_event_typeInputEnvelope
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
  }

  export type skill_eventUpdateManyWithoutSkill_event_typeNestedInput = {
    create?: XOR<skill_eventCreateWithoutSkill_event_typeInput, skill_eventUncheckedCreateWithoutSkill_event_typeInput> | skill_eventCreateWithoutSkill_event_typeInput[] | skill_eventUncheckedCreateWithoutSkill_event_typeInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutSkill_event_typeInput | skill_eventCreateOrConnectWithoutSkill_event_typeInput[]
    upsert?: skill_eventUpsertWithWhereUniqueWithoutSkill_event_typeInput | skill_eventUpsertWithWhereUniqueWithoutSkill_event_typeInput[]
    createMany?: skill_eventCreateManySkill_event_typeInputEnvelope
    set?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    disconnect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    delete?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    update?: skill_eventUpdateWithWhereUniqueWithoutSkill_event_typeInput | skill_eventUpdateWithWhereUniqueWithoutSkill_event_typeInput[]
    updateMany?: skill_eventUpdateManyWithWhereWithoutSkill_event_typeInput | skill_eventUpdateManyWithWhereWithoutSkill_event_typeInput[]
    deleteMany?: skill_eventScalarWhereInput | skill_eventScalarWhereInput[]
  }

  export type skill_eventUncheckedUpdateManyWithoutSkill_event_typeNestedInput = {
    create?: XOR<skill_eventCreateWithoutSkill_event_typeInput, skill_eventUncheckedCreateWithoutSkill_event_typeInput> | skill_eventCreateWithoutSkill_event_typeInput[] | skill_eventUncheckedCreateWithoutSkill_event_typeInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutSkill_event_typeInput | skill_eventCreateOrConnectWithoutSkill_event_typeInput[]
    upsert?: skill_eventUpsertWithWhereUniqueWithoutSkill_event_typeInput | skill_eventUpsertWithWhereUniqueWithoutSkill_event_typeInput[]
    createMany?: skill_eventCreateManySkill_event_typeInputEnvelope
    set?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    disconnect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    delete?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    update?: skill_eventUpdateWithWhereUniqueWithoutSkill_event_typeInput | skill_eventUpdateWithWhereUniqueWithoutSkill_event_typeInput[]
    updateMany?: skill_eventUpdateManyWithWhereWithoutSkill_event_typeInput | skill_eventUpdateManyWithWhereWithoutSkill_event_typeInput[]
    deleteMany?: skill_eventScalarWhereInput | skill_eventScalarWhereInput[]
  }

  export type skill_eventCreateNestedManyWithoutSource_typeInput = {
    create?: XOR<skill_eventCreateWithoutSource_typeInput, skill_eventUncheckedCreateWithoutSource_typeInput> | skill_eventCreateWithoutSource_typeInput[] | skill_eventUncheckedCreateWithoutSource_typeInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutSource_typeInput | skill_eventCreateOrConnectWithoutSource_typeInput[]
    createMany?: skill_eventCreateManySource_typeInputEnvelope
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
  }

  export type skill_eventUncheckedCreateNestedManyWithoutSource_typeInput = {
    create?: XOR<skill_eventCreateWithoutSource_typeInput, skill_eventUncheckedCreateWithoutSource_typeInput> | skill_eventCreateWithoutSource_typeInput[] | skill_eventUncheckedCreateWithoutSource_typeInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutSource_typeInput | skill_eventCreateOrConnectWithoutSource_typeInput[]
    createMany?: skill_eventCreateManySource_typeInputEnvelope
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
  }

  export type skill_eventUpdateManyWithoutSource_typeNestedInput = {
    create?: XOR<skill_eventCreateWithoutSource_typeInput, skill_eventUncheckedCreateWithoutSource_typeInput> | skill_eventCreateWithoutSource_typeInput[] | skill_eventUncheckedCreateWithoutSource_typeInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutSource_typeInput | skill_eventCreateOrConnectWithoutSource_typeInput[]
    upsert?: skill_eventUpsertWithWhereUniqueWithoutSource_typeInput | skill_eventUpsertWithWhereUniqueWithoutSource_typeInput[]
    createMany?: skill_eventCreateManySource_typeInputEnvelope
    set?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    disconnect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    delete?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    update?: skill_eventUpdateWithWhereUniqueWithoutSource_typeInput | skill_eventUpdateWithWhereUniqueWithoutSource_typeInput[]
    updateMany?: skill_eventUpdateManyWithWhereWithoutSource_typeInput | skill_eventUpdateManyWithWhereWithoutSource_typeInput[]
    deleteMany?: skill_eventScalarWhereInput | skill_eventScalarWhereInput[]
  }

  export type skill_eventUncheckedUpdateManyWithoutSource_typeNestedInput = {
    create?: XOR<skill_eventCreateWithoutSource_typeInput, skill_eventUncheckedCreateWithoutSource_typeInput> | skill_eventCreateWithoutSource_typeInput[] | skill_eventUncheckedCreateWithoutSource_typeInput[]
    connectOrCreate?: skill_eventCreateOrConnectWithoutSource_typeInput | skill_eventCreateOrConnectWithoutSource_typeInput[]
    upsert?: skill_eventUpsertWithWhereUniqueWithoutSource_typeInput | skill_eventUpsertWithWhereUniqueWithoutSource_typeInput[]
    createMany?: skill_eventCreateManySource_typeInputEnvelope
    set?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    disconnect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    delete?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    connect?: skill_eventWhereUniqueInput | skill_eventWhereUniqueInput[]
    update?: skill_eventUpdateWithWhereUniqueWithoutSource_typeInput | skill_eventUpdateWithWhereUniqueWithoutSource_typeInput[]
    updateMany?: skill_eventUpdateManyWithWhereWithoutSource_typeInput | skill_eventUpdateManyWithWhereWithoutSource_typeInput[]
    deleteMany?: skill_eventScalarWhereInput | skill_eventScalarWhereInput[]
  }

  export type skillCreateNestedOneWithoutUser_skillInput = {
    create?: XOR<skillCreateWithoutUser_skillInput, skillUncheckedCreateWithoutUser_skillInput>
    connectOrCreate?: skillCreateOrConnectWithoutUser_skillInput
    connect?: skillWhereUniqueInput
  }

  export type user_skill_display_modeCreateNestedOneWithoutUser_skillInput = {
    create?: XOR<user_skill_display_modeCreateWithoutUser_skillInput, user_skill_display_modeUncheckedCreateWithoutUser_skillInput>
    connectOrCreate?: user_skill_display_modeCreateOrConnectWithoutUser_skillInput
    connect?: user_skill_display_modeWhereUniqueInput
  }

  export type user_skill_levelCreateNestedOneWithoutUser_skillInput = {
    create?: XOR<user_skill_levelCreateWithoutUser_skillInput, user_skill_levelUncheckedCreateWithoutUser_skillInput>
    connectOrCreate?: user_skill_levelCreateOrConnectWithoutUser_skillInput
    connect?: user_skill_levelWhereUniqueInput
  }

  export type skillUpdateOneRequiredWithoutUser_skillNestedInput = {
    create?: XOR<skillCreateWithoutUser_skillInput, skillUncheckedCreateWithoutUser_skillInput>
    connectOrCreate?: skillCreateOrConnectWithoutUser_skillInput
    upsert?: skillUpsertWithoutUser_skillInput
    connect?: skillWhereUniqueInput
    update?: XOR<XOR<skillUpdateToOneWithWhereWithoutUser_skillInput, skillUpdateWithoutUser_skillInput>, skillUncheckedUpdateWithoutUser_skillInput>
  }

  export type user_skill_display_modeUpdateOneRequiredWithoutUser_skillNestedInput = {
    create?: XOR<user_skill_display_modeCreateWithoutUser_skillInput, user_skill_display_modeUncheckedCreateWithoutUser_skillInput>
    connectOrCreate?: user_skill_display_modeCreateOrConnectWithoutUser_skillInput
    upsert?: user_skill_display_modeUpsertWithoutUser_skillInput
    connect?: user_skill_display_modeWhereUniqueInput
    update?: XOR<XOR<user_skill_display_modeUpdateToOneWithWhereWithoutUser_skillInput, user_skill_display_modeUpdateWithoutUser_skillInput>, user_skill_display_modeUncheckedUpdateWithoutUser_skillInput>
  }

  export type user_skill_levelUpdateOneRequiredWithoutUser_skillNestedInput = {
    create?: XOR<user_skill_levelCreateWithoutUser_skillInput, user_skill_levelUncheckedCreateWithoutUser_skillInput>
    connectOrCreate?: user_skill_levelCreateOrConnectWithoutUser_skillInput
    upsert?: user_skill_levelUpsertWithoutUser_skillInput
    connect?: user_skill_levelWhereUniqueInput
    update?: XOR<XOR<user_skill_levelUpdateToOneWithWhereWithoutUser_skillInput, user_skill_levelUpdateWithoutUser_skillInput>, user_skill_levelUncheckedUpdateWithoutUser_skillInput>
  }

  export type user_skillCreateNestedManyWithoutUser_skill_display_modeInput = {
    create?: XOR<user_skillCreateWithoutUser_skill_display_modeInput, user_skillUncheckedCreateWithoutUser_skill_display_modeInput> | user_skillCreateWithoutUser_skill_display_modeInput[] | user_skillUncheckedCreateWithoutUser_skill_display_modeInput[]
    connectOrCreate?: user_skillCreateOrConnectWithoutUser_skill_display_modeInput | user_skillCreateOrConnectWithoutUser_skill_display_modeInput[]
    createMany?: user_skillCreateManyUser_skill_display_modeInputEnvelope
    connect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
  }

  export type user_skillUncheckedCreateNestedManyWithoutUser_skill_display_modeInput = {
    create?: XOR<user_skillCreateWithoutUser_skill_display_modeInput, user_skillUncheckedCreateWithoutUser_skill_display_modeInput> | user_skillCreateWithoutUser_skill_display_modeInput[] | user_skillUncheckedCreateWithoutUser_skill_display_modeInput[]
    connectOrCreate?: user_skillCreateOrConnectWithoutUser_skill_display_modeInput | user_skillCreateOrConnectWithoutUser_skill_display_modeInput[]
    createMany?: user_skillCreateManyUser_skill_display_modeInputEnvelope
    connect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
  }

  export type user_skillUpdateManyWithoutUser_skill_display_modeNestedInput = {
    create?: XOR<user_skillCreateWithoutUser_skill_display_modeInput, user_skillUncheckedCreateWithoutUser_skill_display_modeInput> | user_skillCreateWithoutUser_skill_display_modeInput[] | user_skillUncheckedCreateWithoutUser_skill_display_modeInput[]
    connectOrCreate?: user_skillCreateOrConnectWithoutUser_skill_display_modeInput | user_skillCreateOrConnectWithoutUser_skill_display_modeInput[]
    upsert?: user_skillUpsertWithWhereUniqueWithoutUser_skill_display_modeInput | user_skillUpsertWithWhereUniqueWithoutUser_skill_display_modeInput[]
    createMany?: user_skillCreateManyUser_skill_display_modeInputEnvelope
    set?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    disconnect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    delete?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    connect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    update?: user_skillUpdateWithWhereUniqueWithoutUser_skill_display_modeInput | user_skillUpdateWithWhereUniqueWithoutUser_skill_display_modeInput[]
    updateMany?: user_skillUpdateManyWithWhereWithoutUser_skill_display_modeInput | user_skillUpdateManyWithWhereWithoutUser_skill_display_modeInput[]
    deleteMany?: user_skillScalarWhereInput | user_skillScalarWhereInput[]
  }

  export type user_skillUncheckedUpdateManyWithoutUser_skill_display_modeNestedInput = {
    create?: XOR<user_skillCreateWithoutUser_skill_display_modeInput, user_skillUncheckedCreateWithoutUser_skill_display_modeInput> | user_skillCreateWithoutUser_skill_display_modeInput[] | user_skillUncheckedCreateWithoutUser_skill_display_modeInput[]
    connectOrCreate?: user_skillCreateOrConnectWithoutUser_skill_display_modeInput | user_skillCreateOrConnectWithoutUser_skill_display_modeInput[]
    upsert?: user_skillUpsertWithWhereUniqueWithoutUser_skill_display_modeInput | user_skillUpsertWithWhereUniqueWithoutUser_skill_display_modeInput[]
    createMany?: user_skillCreateManyUser_skill_display_modeInputEnvelope
    set?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    disconnect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    delete?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    connect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    update?: user_skillUpdateWithWhereUniqueWithoutUser_skill_display_modeInput | user_skillUpdateWithWhereUniqueWithoutUser_skill_display_modeInput[]
    updateMany?: user_skillUpdateManyWithWhereWithoutUser_skill_display_modeInput | user_skillUpdateManyWithWhereWithoutUser_skill_display_modeInput[]
    deleteMany?: user_skillScalarWhereInput | user_skillScalarWhereInput[]
  }

  export type user_skillCreateNestedManyWithoutUser_skill_levelInput = {
    create?: XOR<user_skillCreateWithoutUser_skill_levelInput, user_skillUncheckedCreateWithoutUser_skill_levelInput> | user_skillCreateWithoutUser_skill_levelInput[] | user_skillUncheckedCreateWithoutUser_skill_levelInput[]
    connectOrCreate?: user_skillCreateOrConnectWithoutUser_skill_levelInput | user_skillCreateOrConnectWithoutUser_skill_levelInput[]
    createMany?: user_skillCreateManyUser_skill_levelInputEnvelope
    connect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
  }

  export type user_skillUncheckedCreateNestedManyWithoutUser_skill_levelInput = {
    create?: XOR<user_skillCreateWithoutUser_skill_levelInput, user_skillUncheckedCreateWithoutUser_skill_levelInput> | user_skillCreateWithoutUser_skill_levelInput[] | user_skillUncheckedCreateWithoutUser_skill_levelInput[]
    connectOrCreate?: user_skillCreateOrConnectWithoutUser_skill_levelInput | user_skillCreateOrConnectWithoutUser_skill_levelInput[]
    createMany?: user_skillCreateManyUser_skill_levelInputEnvelope
    connect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
  }

  export type user_skillUpdateManyWithoutUser_skill_levelNestedInput = {
    create?: XOR<user_skillCreateWithoutUser_skill_levelInput, user_skillUncheckedCreateWithoutUser_skill_levelInput> | user_skillCreateWithoutUser_skill_levelInput[] | user_skillUncheckedCreateWithoutUser_skill_levelInput[]
    connectOrCreate?: user_skillCreateOrConnectWithoutUser_skill_levelInput | user_skillCreateOrConnectWithoutUser_skill_levelInput[]
    upsert?: user_skillUpsertWithWhereUniqueWithoutUser_skill_levelInput | user_skillUpsertWithWhereUniqueWithoutUser_skill_levelInput[]
    createMany?: user_skillCreateManyUser_skill_levelInputEnvelope
    set?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    disconnect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    delete?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    connect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    update?: user_skillUpdateWithWhereUniqueWithoutUser_skill_levelInput | user_skillUpdateWithWhereUniqueWithoutUser_skill_levelInput[]
    updateMany?: user_skillUpdateManyWithWhereWithoutUser_skill_levelInput | user_skillUpdateManyWithWhereWithoutUser_skill_levelInput[]
    deleteMany?: user_skillScalarWhereInput | user_skillScalarWhereInput[]
  }

  export type user_skillUncheckedUpdateManyWithoutUser_skill_levelNestedInput = {
    create?: XOR<user_skillCreateWithoutUser_skill_levelInput, user_skillUncheckedCreateWithoutUser_skill_levelInput> | user_skillCreateWithoutUser_skill_levelInput[] | user_skillUncheckedCreateWithoutUser_skill_levelInput[]
    connectOrCreate?: user_skillCreateOrConnectWithoutUser_skill_levelInput | user_skillCreateOrConnectWithoutUser_skill_levelInput[]
    upsert?: user_skillUpsertWithWhereUniqueWithoutUser_skill_levelInput | user_skillUpsertWithWhereUniqueWithoutUser_skill_levelInput[]
    createMany?: user_skillCreateManyUser_skill_levelInputEnvelope
    set?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    disconnect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    delete?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    connect?: user_skillWhereUniqueInput | user_skillWhereUniqueInput[]
    update?: user_skillUpdateWithWhereUniqueWithoutUser_skill_levelInput | user_skillUpdateWithWhereUniqueWithoutUser_skill_levelInput[]
    updateMany?: user_skillUpdateManyWithWhereWithoutUser_skill_levelInput | user_skillUpdateManyWithWhereWithoutUser_skill_levelInput[]
    deleteMany?: user_skillScalarWhereInput | user_skillScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type skill_eventCreateWithoutEventInput = {
    id?: string
    user_id: number
    source_id: string
    created_at?: Date | string
    skill_event_type: skill_event_typeCreateNestedOneWithoutSkill_eventInput
    skill: skillCreateNestedOneWithoutSkill_eventInput
    source_type: source_typeCreateNestedOneWithoutSkill_eventInput
  }

  export type skill_eventUncheckedCreateWithoutEventInput = {
    id?: string
    user_id: number
    skill_id: string
    skill_event_type_id: string
    source_id: string
    source_type_id: string
    created_at?: Date | string
  }

  export type skill_eventCreateOrConnectWithoutEventInput = {
    where: skill_eventWhereUniqueInput
    create: XOR<skill_eventCreateWithoutEventInput, skill_eventUncheckedCreateWithoutEventInput>
  }

  export type skill_eventCreateManyEventInputEnvelope = {
    data: skill_eventCreateManyEventInput | skill_eventCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type skill_eventUpsertWithWhereUniqueWithoutEventInput = {
    where: skill_eventWhereUniqueInput
    update: XOR<skill_eventUpdateWithoutEventInput, skill_eventUncheckedUpdateWithoutEventInput>
    create: XOR<skill_eventCreateWithoutEventInput, skill_eventUncheckedCreateWithoutEventInput>
  }

  export type skill_eventUpdateWithWhereUniqueWithoutEventInput = {
    where: skill_eventWhereUniqueInput
    data: XOR<skill_eventUpdateWithoutEventInput, skill_eventUncheckedUpdateWithoutEventInput>
  }

  export type skill_eventUpdateManyWithWhereWithoutEventInput = {
    where: skill_eventScalarWhereInput
    data: XOR<skill_eventUpdateManyMutationInput, skill_eventUncheckedUpdateManyWithoutEventInput>
  }

  export type skill_eventScalarWhereInput = {
    AND?: skill_eventScalarWhereInput | skill_eventScalarWhereInput[]
    OR?: skill_eventScalarWhereInput[]
    NOT?: skill_eventScalarWhereInput | skill_eventScalarWhereInput[]
    id?: UuidFilter<"skill_event"> | string
    event_id?: UuidFilter<"skill_event"> | string
    user_id?: IntFilter<"skill_event"> | number
    skill_id?: UuidFilter<"skill_event"> | string
    skill_event_type_id?: UuidFilter<"skill_event"> | string
    source_id?: StringFilter<"skill_event"> | string
    source_type_id?: UuidFilter<"skill_event"> | string
    created_at?: DateTimeFilter<"skill_event"> | Date | string
  }

  export type skill_categoryCreateWithoutSkillInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type skill_categoryUncheckedCreateWithoutSkillInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type skill_categoryCreateOrConnectWithoutSkillInput = {
    where: skill_categoryWhereUniqueInput
    create: XOR<skill_categoryCreateWithoutSkillInput, skill_categoryUncheckedCreateWithoutSkillInput>
  }

  export type skill_eventCreateWithoutSkillInput = {
    id?: string
    user_id: number
    source_id: string
    created_at?: Date | string
    event: eventCreateNestedOneWithoutSkill_eventInput
    skill_event_type: skill_event_typeCreateNestedOneWithoutSkill_eventInput
    source_type: source_typeCreateNestedOneWithoutSkill_eventInput
  }

  export type skill_eventUncheckedCreateWithoutSkillInput = {
    id?: string
    event_id: string
    user_id: number
    skill_event_type_id: string
    source_id: string
    source_type_id: string
    created_at?: Date | string
  }

  export type skill_eventCreateOrConnectWithoutSkillInput = {
    where: skill_eventWhereUniqueInput
    create: XOR<skill_eventCreateWithoutSkillInput, skill_eventUncheckedCreateWithoutSkillInput>
  }

  export type skill_eventCreateManySkillInputEnvelope = {
    data: skill_eventCreateManySkillInput | skill_eventCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type user_skillCreateWithoutSkillInput = {
    id?: string
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
    user_skill_display_mode?: user_skill_display_modeCreateNestedOneWithoutUser_skillInput
    user_skill_level: user_skill_levelCreateNestedOneWithoutUser_skillInput
  }

  export type user_skillUncheckedCreateWithoutSkillInput = {
    id?: string
    user_id: number
    user_skill_level_id: string
    created_at?: Date | string
    updated_at?: Date | string
    user_skill_display_mode_id?: string
  }

  export type user_skillCreateOrConnectWithoutSkillInput = {
    where: user_skillWhereUniqueInput
    create: XOR<user_skillCreateWithoutSkillInput, user_skillUncheckedCreateWithoutSkillInput>
  }

  export type user_skillCreateManySkillInputEnvelope = {
    data: user_skillCreateManySkillInput | user_skillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type skill_categoryUpsertWithoutSkillInput = {
    update: XOR<skill_categoryUpdateWithoutSkillInput, skill_categoryUncheckedUpdateWithoutSkillInput>
    create: XOR<skill_categoryCreateWithoutSkillInput, skill_categoryUncheckedCreateWithoutSkillInput>
    where?: skill_categoryWhereInput
  }

  export type skill_categoryUpdateToOneWithWhereWithoutSkillInput = {
    where?: skill_categoryWhereInput
    data: XOR<skill_categoryUpdateWithoutSkillInput, skill_categoryUncheckedUpdateWithoutSkillInput>
  }

  export type skill_categoryUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_categoryUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_eventUpsertWithWhereUniqueWithoutSkillInput = {
    where: skill_eventWhereUniqueInput
    update: XOR<skill_eventUpdateWithoutSkillInput, skill_eventUncheckedUpdateWithoutSkillInput>
    create: XOR<skill_eventCreateWithoutSkillInput, skill_eventUncheckedCreateWithoutSkillInput>
  }

  export type skill_eventUpdateWithWhereUniqueWithoutSkillInput = {
    where: skill_eventWhereUniqueInput
    data: XOR<skill_eventUpdateWithoutSkillInput, skill_eventUncheckedUpdateWithoutSkillInput>
  }

  export type skill_eventUpdateManyWithWhereWithoutSkillInput = {
    where: skill_eventScalarWhereInput
    data: XOR<skill_eventUpdateManyMutationInput, skill_eventUncheckedUpdateManyWithoutSkillInput>
  }

  export type user_skillUpsertWithWhereUniqueWithoutSkillInput = {
    where: user_skillWhereUniqueInput
    update: XOR<user_skillUpdateWithoutSkillInput, user_skillUncheckedUpdateWithoutSkillInput>
    create: XOR<user_skillCreateWithoutSkillInput, user_skillUncheckedCreateWithoutSkillInput>
  }

  export type user_skillUpdateWithWhereUniqueWithoutSkillInput = {
    where: user_skillWhereUniqueInput
    data: XOR<user_skillUpdateWithoutSkillInput, user_skillUncheckedUpdateWithoutSkillInput>
  }

  export type user_skillUpdateManyWithWhereWithoutSkillInput = {
    where: user_skillScalarWhereInput
    data: XOR<user_skillUpdateManyMutationInput, user_skillUncheckedUpdateManyWithoutSkillInput>
  }

  export type user_skillScalarWhereInput = {
    AND?: user_skillScalarWhereInput | user_skillScalarWhereInput[]
    OR?: user_skillScalarWhereInput[]
    NOT?: user_skillScalarWhereInput | user_skillScalarWhereInput[]
    id?: UuidFilter<"user_skill"> | string
    user_id?: IntFilter<"user_skill"> | number
    skill_id?: UuidFilter<"user_skill"> | string
    user_skill_level_id?: UuidFilter<"user_skill"> | string
    created_at?: DateTimeFilter<"user_skill"> | Date | string
    updated_at?: DateTimeFilter<"user_skill"> | Date | string
    user_skill_display_mode_id?: UuidFilter<"user_skill"> | string
  }

  export type skillCreateWithoutSkill_categoryInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    skill_event?: skill_eventCreateNestedManyWithoutSkillInput
    user_skill?: user_skillCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateWithoutSkill_categoryInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    skill_event?: skill_eventUncheckedCreateNestedManyWithoutSkillInput
    user_skill?: user_skillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillCreateOrConnectWithoutSkill_categoryInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutSkill_categoryInput, skillUncheckedCreateWithoutSkill_categoryInput>
  }

  export type skillCreateManySkill_categoryInputEnvelope = {
    data: skillCreateManySkill_categoryInput | skillCreateManySkill_categoryInput[]
    skipDuplicates?: boolean
  }

  export type skillUpsertWithWhereUniqueWithoutSkill_categoryInput = {
    where: skillWhereUniqueInput
    update: XOR<skillUpdateWithoutSkill_categoryInput, skillUncheckedUpdateWithoutSkill_categoryInput>
    create: XOR<skillCreateWithoutSkill_categoryInput, skillUncheckedCreateWithoutSkill_categoryInput>
  }

  export type skillUpdateWithWhereUniqueWithoutSkill_categoryInput = {
    where: skillWhereUniqueInput
    data: XOR<skillUpdateWithoutSkill_categoryInput, skillUncheckedUpdateWithoutSkill_categoryInput>
  }

  export type skillUpdateManyWithWhereWithoutSkill_categoryInput = {
    where: skillScalarWhereInput
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyWithoutSkill_categoryInput>
  }

  export type skillScalarWhereInput = {
    AND?: skillScalarWhereInput | skillScalarWhereInput[]
    OR?: skillScalarWhereInput[]
    NOT?: skillScalarWhereInput | skillScalarWhereInput[]
    id?: UuidFilter<"skill"> | string
    name?: StringFilter<"skill"> | string
    description?: StringNullableFilter<"skill"> | string | null
    category_id?: UuidNullableFilter<"skill"> | string | null
    created_at?: DateTimeFilter<"skill"> | Date | string
    updated_at?: DateTimeFilter<"skill"> | Date | string
    deleted_at?: DateTimeNullableFilter<"skill"> | Date | string | null
  }

  export type eventCreateWithoutSkill_eventInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payload_hash?: string | null
    created_at?: Date | string
  }

  export type eventUncheckedCreateWithoutSkill_eventInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payload_hash?: string | null
    created_at?: Date | string
  }

  export type eventCreateOrConnectWithoutSkill_eventInput = {
    where: eventWhereUniqueInput
    create: XOR<eventCreateWithoutSkill_eventInput, eventUncheckedCreateWithoutSkill_eventInput>
  }

  export type skill_event_typeCreateWithoutSkill_eventInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type skill_event_typeUncheckedCreateWithoutSkill_eventInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type skill_event_typeCreateOrConnectWithoutSkill_eventInput = {
    where: skill_event_typeWhereUniqueInput
    create: XOR<skill_event_typeCreateWithoutSkill_eventInput, skill_event_typeUncheckedCreateWithoutSkill_eventInput>
  }

  export type skillCreateWithoutSkill_eventInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    skill_category?: skill_categoryCreateNestedOneWithoutSkillInput
    user_skill?: user_skillCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateWithoutSkill_eventInput = {
    id?: string
    name: string
    description?: string | null
    category_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user_skill?: user_skillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillCreateOrConnectWithoutSkill_eventInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutSkill_eventInput, skillUncheckedCreateWithoutSkill_eventInput>
  }

  export type source_typeCreateWithoutSkill_eventInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type source_typeUncheckedCreateWithoutSkill_eventInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type source_typeCreateOrConnectWithoutSkill_eventInput = {
    where: source_typeWhereUniqueInput
    create: XOR<source_typeCreateWithoutSkill_eventInput, source_typeUncheckedCreateWithoutSkill_eventInput>
  }

  export type eventUpsertWithoutSkill_eventInput = {
    update: XOR<eventUpdateWithoutSkill_eventInput, eventUncheckedUpdateWithoutSkill_eventInput>
    create: XOR<eventCreateWithoutSkill_eventInput, eventUncheckedCreateWithoutSkill_eventInput>
    where?: eventWhereInput
  }

  export type eventUpdateToOneWithWhereWithoutSkill_eventInput = {
    where?: eventWhereInput
    data: XOR<eventUpdateWithoutSkill_eventInput, eventUncheckedUpdateWithoutSkill_eventInput>
  }

  export type eventUpdateWithoutSkill_eventInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payload_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventUncheckedUpdateWithoutSkill_eventInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payload_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_event_typeUpsertWithoutSkill_eventInput = {
    update: XOR<skill_event_typeUpdateWithoutSkill_eventInput, skill_event_typeUncheckedUpdateWithoutSkill_eventInput>
    create: XOR<skill_event_typeCreateWithoutSkill_eventInput, skill_event_typeUncheckedCreateWithoutSkill_eventInput>
    where?: skill_event_typeWhereInput
  }

  export type skill_event_typeUpdateToOneWithWhereWithoutSkill_eventInput = {
    where?: skill_event_typeWhereInput
    data: XOR<skill_event_typeUpdateWithoutSkill_eventInput, skill_event_typeUncheckedUpdateWithoutSkill_eventInput>
  }

  export type skill_event_typeUpdateWithoutSkill_eventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_event_typeUncheckedUpdateWithoutSkill_eventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillUpsertWithoutSkill_eventInput = {
    update: XOR<skillUpdateWithoutSkill_eventInput, skillUncheckedUpdateWithoutSkill_eventInput>
    create: XOR<skillCreateWithoutSkill_eventInput, skillUncheckedCreateWithoutSkill_eventInput>
    where?: skillWhereInput
  }

  export type skillUpdateToOneWithWhereWithoutSkill_eventInput = {
    where?: skillWhereInput
    data: XOR<skillUpdateWithoutSkill_eventInput, skillUncheckedUpdateWithoutSkill_eventInput>
  }

  export type skillUpdateWithoutSkill_eventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skill_category?: skill_categoryUpdateOneWithoutSkillNestedInput
    user_skill?: user_skillUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateWithoutSkill_eventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_skill?: user_skillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type source_typeUpsertWithoutSkill_eventInput = {
    update: XOR<source_typeUpdateWithoutSkill_eventInput, source_typeUncheckedUpdateWithoutSkill_eventInput>
    create: XOR<source_typeCreateWithoutSkill_eventInput, source_typeUncheckedCreateWithoutSkill_eventInput>
    where?: source_typeWhereInput
  }

  export type source_typeUpdateToOneWithWhereWithoutSkill_eventInput = {
    where?: source_typeWhereInput
    data: XOR<source_typeUpdateWithoutSkill_eventInput, source_typeUncheckedUpdateWithoutSkill_eventInput>
  }

  export type source_typeUpdateWithoutSkill_eventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type source_typeUncheckedUpdateWithoutSkill_eventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_eventCreateWithoutSkill_event_typeInput = {
    id?: string
    user_id: number
    source_id: string
    created_at?: Date | string
    event: eventCreateNestedOneWithoutSkill_eventInput
    skill: skillCreateNestedOneWithoutSkill_eventInput
    source_type: source_typeCreateNestedOneWithoutSkill_eventInput
  }

  export type skill_eventUncheckedCreateWithoutSkill_event_typeInput = {
    id?: string
    event_id: string
    user_id: number
    skill_id: string
    source_id: string
    source_type_id: string
    created_at?: Date | string
  }

  export type skill_eventCreateOrConnectWithoutSkill_event_typeInput = {
    where: skill_eventWhereUniqueInput
    create: XOR<skill_eventCreateWithoutSkill_event_typeInput, skill_eventUncheckedCreateWithoutSkill_event_typeInput>
  }

  export type skill_eventCreateManySkill_event_typeInputEnvelope = {
    data: skill_eventCreateManySkill_event_typeInput | skill_eventCreateManySkill_event_typeInput[]
    skipDuplicates?: boolean
  }

  export type skill_eventUpsertWithWhereUniqueWithoutSkill_event_typeInput = {
    where: skill_eventWhereUniqueInput
    update: XOR<skill_eventUpdateWithoutSkill_event_typeInput, skill_eventUncheckedUpdateWithoutSkill_event_typeInput>
    create: XOR<skill_eventCreateWithoutSkill_event_typeInput, skill_eventUncheckedCreateWithoutSkill_event_typeInput>
  }

  export type skill_eventUpdateWithWhereUniqueWithoutSkill_event_typeInput = {
    where: skill_eventWhereUniqueInput
    data: XOR<skill_eventUpdateWithoutSkill_event_typeInput, skill_eventUncheckedUpdateWithoutSkill_event_typeInput>
  }

  export type skill_eventUpdateManyWithWhereWithoutSkill_event_typeInput = {
    where: skill_eventScalarWhereInput
    data: XOR<skill_eventUpdateManyMutationInput, skill_eventUncheckedUpdateManyWithoutSkill_event_typeInput>
  }

  export type skill_eventCreateWithoutSource_typeInput = {
    id?: string
    user_id: number
    source_id: string
    created_at?: Date | string
    event: eventCreateNestedOneWithoutSkill_eventInput
    skill_event_type: skill_event_typeCreateNestedOneWithoutSkill_eventInput
    skill: skillCreateNestedOneWithoutSkill_eventInput
  }

  export type skill_eventUncheckedCreateWithoutSource_typeInput = {
    id?: string
    event_id: string
    user_id: number
    skill_id: string
    skill_event_type_id: string
    source_id: string
    created_at?: Date | string
  }

  export type skill_eventCreateOrConnectWithoutSource_typeInput = {
    where: skill_eventWhereUniqueInput
    create: XOR<skill_eventCreateWithoutSource_typeInput, skill_eventUncheckedCreateWithoutSource_typeInput>
  }

  export type skill_eventCreateManySource_typeInputEnvelope = {
    data: skill_eventCreateManySource_typeInput | skill_eventCreateManySource_typeInput[]
    skipDuplicates?: boolean
  }

  export type skill_eventUpsertWithWhereUniqueWithoutSource_typeInput = {
    where: skill_eventWhereUniqueInput
    update: XOR<skill_eventUpdateWithoutSource_typeInput, skill_eventUncheckedUpdateWithoutSource_typeInput>
    create: XOR<skill_eventCreateWithoutSource_typeInput, skill_eventUncheckedCreateWithoutSource_typeInput>
  }

  export type skill_eventUpdateWithWhereUniqueWithoutSource_typeInput = {
    where: skill_eventWhereUniqueInput
    data: XOR<skill_eventUpdateWithoutSource_typeInput, skill_eventUncheckedUpdateWithoutSource_typeInput>
  }

  export type skill_eventUpdateManyWithWhereWithoutSource_typeInput = {
    where: skill_eventScalarWhereInput
    data: XOR<skill_eventUpdateManyMutationInput, skill_eventUncheckedUpdateManyWithoutSource_typeInput>
  }

  export type skillCreateWithoutUser_skillInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    skill_category?: skill_categoryCreateNestedOneWithoutSkillInput
    skill_event?: skill_eventCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateWithoutUser_skillInput = {
    id?: string
    name: string
    description?: string | null
    category_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    skill_event?: skill_eventUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillCreateOrConnectWithoutUser_skillInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutUser_skillInput, skillUncheckedCreateWithoutUser_skillInput>
  }

  export type user_skill_display_modeCreateWithoutUser_skillInput = {
    id: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_skill_display_modeUncheckedCreateWithoutUser_skillInput = {
    id: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_skill_display_modeCreateOrConnectWithoutUser_skillInput = {
    where: user_skill_display_modeWhereUniqueInput
    create: XOR<user_skill_display_modeCreateWithoutUser_skillInput, user_skill_display_modeUncheckedCreateWithoutUser_skillInput>
  }

  export type user_skill_levelCreateWithoutUser_skillInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_skill_levelUncheckedCreateWithoutUser_skillInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_skill_levelCreateOrConnectWithoutUser_skillInput = {
    where: user_skill_levelWhereUniqueInput
    create: XOR<user_skill_levelCreateWithoutUser_skillInput, user_skill_levelUncheckedCreateWithoutUser_skillInput>
  }

  export type skillUpsertWithoutUser_skillInput = {
    update: XOR<skillUpdateWithoutUser_skillInput, skillUncheckedUpdateWithoutUser_skillInput>
    create: XOR<skillCreateWithoutUser_skillInput, skillUncheckedCreateWithoutUser_skillInput>
    where?: skillWhereInput
  }

  export type skillUpdateToOneWithWhereWithoutUser_skillInput = {
    where?: skillWhereInput
    data: XOR<skillUpdateWithoutUser_skillInput, skillUncheckedUpdateWithoutUser_skillInput>
  }

  export type skillUpdateWithoutUser_skillInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skill_category?: skill_categoryUpdateOneWithoutSkillNestedInput
    skill_event?: skill_eventUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateWithoutUser_skillInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skill_event?: skill_eventUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type user_skill_display_modeUpsertWithoutUser_skillInput = {
    update: XOR<user_skill_display_modeUpdateWithoutUser_skillInput, user_skill_display_modeUncheckedUpdateWithoutUser_skillInput>
    create: XOR<user_skill_display_modeCreateWithoutUser_skillInput, user_skill_display_modeUncheckedCreateWithoutUser_skillInput>
    where?: user_skill_display_modeWhereInput
  }

  export type user_skill_display_modeUpdateToOneWithWhereWithoutUser_skillInput = {
    where?: user_skill_display_modeWhereInput
    data: XOR<user_skill_display_modeUpdateWithoutUser_skillInput, user_skill_display_modeUncheckedUpdateWithoutUser_skillInput>
  }

  export type user_skill_display_modeUpdateWithoutUser_skillInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_skill_display_modeUncheckedUpdateWithoutUser_skillInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_skill_levelUpsertWithoutUser_skillInput = {
    update: XOR<user_skill_levelUpdateWithoutUser_skillInput, user_skill_levelUncheckedUpdateWithoutUser_skillInput>
    create: XOR<user_skill_levelCreateWithoutUser_skillInput, user_skill_levelUncheckedCreateWithoutUser_skillInput>
    where?: user_skill_levelWhereInput
  }

  export type user_skill_levelUpdateToOneWithWhereWithoutUser_skillInput = {
    where?: user_skill_levelWhereInput
    data: XOR<user_skill_levelUpdateWithoutUser_skillInput, user_skill_levelUncheckedUpdateWithoutUser_skillInput>
  }

  export type user_skill_levelUpdateWithoutUser_skillInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_skill_levelUncheckedUpdateWithoutUser_skillInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_skillCreateWithoutUser_skill_display_modeInput = {
    id?: string
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
    skill: skillCreateNestedOneWithoutUser_skillInput
    user_skill_level: user_skill_levelCreateNestedOneWithoutUser_skillInput
  }

  export type user_skillUncheckedCreateWithoutUser_skill_display_modeInput = {
    id?: string
    user_id: number
    skill_id: string
    user_skill_level_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_skillCreateOrConnectWithoutUser_skill_display_modeInput = {
    where: user_skillWhereUniqueInput
    create: XOR<user_skillCreateWithoutUser_skill_display_modeInput, user_skillUncheckedCreateWithoutUser_skill_display_modeInput>
  }

  export type user_skillCreateManyUser_skill_display_modeInputEnvelope = {
    data: user_skillCreateManyUser_skill_display_modeInput | user_skillCreateManyUser_skill_display_modeInput[]
    skipDuplicates?: boolean
  }

  export type user_skillUpsertWithWhereUniqueWithoutUser_skill_display_modeInput = {
    where: user_skillWhereUniqueInput
    update: XOR<user_skillUpdateWithoutUser_skill_display_modeInput, user_skillUncheckedUpdateWithoutUser_skill_display_modeInput>
    create: XOR<user_skillCreateWithoutUser_skill_display_modeInput, user_skillUncheckedCreateWithoutUser_skill_display_modeInput>
  }

  export type user_skillUpdateWithWhereUniqueWithoutUser_skill_display_modeInput = {
    where: user_skillWhereUniqueInput
    data: XOR<user_skillUpdateWithoutUser_skill_display_modeInput, user_skillUncheckedUpdateWithoutUser_skill_display_modeInput>
  }

  export type user_skillUpdateManyWithWhereWithoutUser_skill_display_modeInput = {
    where: user_skillScalarWhereInput
    data: XOR<user_skillUpdateManyMutationInput, user_skillUncheckedUpdateManyWithoutUser_skill_display_modeInput>
  }

  export type user_skillCreateWithoutUser_skill_levelInput = {
    id?: string
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
    skill: skillCreateNestedOneWithoutUser_skillInput
    user_skill_display_mode?: user_skill_display_modeCreateNestedOneWithoutUser_skillInput
  }

  export type user_skillUncheckedCreateWithoutUser_skill_levelInput = {
    id?: string
    user_id: number
    skill_id: string
    created_at?: Date | string
    updated_at?: Date | string
    user_skill_display_mode_id?: string
  }

  export type user_skillCreateOrConnectWithoutUser_skill_levelInput = {
    where: user_skillWhereUniqueInput
    create: XOR<user_skillCreateWithoutUser_skill_levelInput, user_skillUncheckedCreateWithoutUser_skill_levelInput>
  }

  export type user_skillCreateManyUser_skill_levelInputEnvelope = {
    data: user_skillCreateManyUser_skill_levelInput | user_skillCreateManyUser_skill_levelInput[]
    skipDuplicates?: boolean
  }

  export type user_skillUpsertWithWhereUniqueWithoutUser_skill_levelInput = {
    where: user_skillWhereUniqueInput
    update: XOR<user_skillUpdateWithoutUser_skill_levelInput, user_skillUncheckedUpdateWithoutUser_skill_levelInput>
    create: XOR<user_skillCreateWithoutUser_skill_levelInput, user_skillUncheckedCreateWithoutUser_skill_levelInput>
  }

  export type user_skillUpdateWithWhereUniqueWithoutUser_skill_levelInput = {
    where: user_skillWhereUniqueInput
    data: XOR<user_skillUpdateWithoutUser_skill_levelInput, user_skillUncheckedUpdateWithoutUser_skill_levelInput>
  }

  export type user_skillUpdateManyWithWhereWithoutUser_skill_levelInput = {
    where: user_skillScalarWhereInput
    data: XOR<user_skillUpdateManyMutationInput, user_skillUncheckedUpdateManyWithoutUser_skill_levelInput>
  }

  export type skill_eventCreateManyEventInput = {
    id?: string
    user_id: number
    skill_id: string
    skill_event_type_id: string
    source_id: string
    source_type_id: string
    created_at?: Date | string
  }

  export type skill_eventUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    skill_event_type?: skill_event_typeUpdateOneRequiredWithoutSkill_eventNestedInput
    skill?: skillUpdateOneRequiredWithoutSkill_eventNestedInput
    source_type?: source_typeUpdateOneRequiredWithoutSkill_eventNestedInput
  }

  export type skill_eventUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: StringFieldUpdateOperationsInput | string
    skill_event_type_id?: StringFieldUpdateOperationsInput | string
    source_id?: StringFieldUpdateOperationsInput | string
    source_type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_eventUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: StringFieldUpdateOperationsInput | string
    skill_event_type_id?: StringFieldUpdateOperationsInput | string
    source_id?: StringFieldUpdateOperationsInput | string
    source_type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_eventCreateManySkillInput = {
    id?: string
    event_id: string
    user_id: number
    skill_event_type_id: string
    source_id: string
    source_type_id: string
    created_at?: Date | string
  }

  export type user_skillCreateManySkillInput = {
    id?: string
    user_id: number
    user_skill_level_id: string
    created_at?: Date | string
    updated_at?: Date | string
    user_skill_display_mode_id?: string
  }

  export type skill_eventUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventUpdateOneRequiredWithoutSkill_eventNestedInput
    skill_event_type?: skill_event_typeUpdateOneRequiredWithoutSkill_eventNestedInput
    source_type?: source_typeUpdateOneRequiredWithoutSkill_eventNestedInput
  }

  export type skill_eventUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_event_type_id?: StringFieldUpdateOperationsInput | string
    source_id?: StringFieldUpdateOperationsInput | string
    source_type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_eventUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_event_type_id?: StringFieldUpdateOperationsInput | string
    source_id?: StringFieldUpdateOperationsInput | string
    source_type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_skillUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_skill_display_mode?: user_skill_display_modeUpdateOneRequiredWithoutUser_skillNestedInput
    user_skill_level?: user_skill_levelUpdateOneRequiredWithoutUser_skillNestedInput
  }

  export type user_skillUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    user_skill_level_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_skill_display_mode_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_skillUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    user_skill_level_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_skill_display_mode_id?: StringFieldUpdateOperationsInput | string
  }

  export type skillCreateManySkill_categoryInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type skillUpdateWithoutSkill_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skill_event?: skill_eventUpdateManyWithoutSkillNestedInput
    user_skill?: user_skillUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateWithoutSkill_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skill_event?: skill_eventUncheckedUpdateManyWithoutSkillNestedInput
    user_skill?: user_skillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateManyWithoutSkill_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skill_eventCreateManySkill_event_typeInput = {
    id?: string
    event_id: string
    user_id: number
    skill_id: string
    source_id: string
    source_type_id: string
    created_at?: Date | string
  }

  export type skill_eventUpdateWithoutSkill_event_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventUpdateOneRequiredWithoutSkill_eventNestedInput
    skill?: skillUpdateOneRequiredWithoutSkill_eventNestedInput
    source_type?: source_typeUpdateOneRequiredWithoutSkill_eventNestedInput
  }

  export type skill_eventUncheckedUpdateWithoutSkill_event_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: StringFieldUpdateOperationsInput | string
    source_id?: StringFieldUpdateOperationsInput | string
    source_type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_eventUncheckedUpdateManyWithoutSkill_event_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: StringFieldUpdateOperationsInput | string
    source_id?: StringFieldUpdateOperationsInput | string
    source_type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_eventCreateManySource_typeInput = {
    id?: string
    event_id: string
    user_id: number
    skill_id: string
    skill_event_type_id: string
    source_id: string
    created_at?: Date | string
  }

  export type skill_eventUpdateWithoutSource_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    source_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventUpdateOneRequiredWithoutSkill_eventNestedInput
    skill_event_type?: skill_event_typeUpdateOneRequiredWithoutSkill_eventNestedInput
    skill?: skillUpdateOneRequiredWithoutSkill_eventNestedInput
  }

  export type skill_eventUncheckedUpdateWithoutSource_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: StringFieldUpdateOperationsInput | string
    skill_event_type_id?: StringFieldUpdateOperationsInput | string
    source_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skill_eventUncheckedUpdateManyWithoutSource_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: StringFieldUpdateOperationsInput | string
    skill_event_type_id?: StringFieldUpdateOperationsInput | string
    source_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_skillCreateManyUser_skill_display_modeInput = {
    id?: string
    user_id: number
    skill_id: string
    user_skill_level_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_skillUpdateWithoutUser_skill_display_modeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: skillUpdateOneRequiredWithoutUser_skillNestedInput
    user_skill_level?: user_skill_levelUpdateOneRequiredWithoutUser_skillNestedInput
  }

  export type user_skillUncheckedUpdateWithoutUser_skill_display_modeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: StringFieldUpdateOperationsInput | string
    user_skill_level_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_skillUncheckedUpdateManyWithoutUser_skill_display_modeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: StringFieldUpdateOperationsInput | string
    user_skill_level_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_skillCreateManyUser_skill_levelInput = {
    id?: string
    user_id: number
    skill_id: string
    created_at?: Date | string
    updated_at?: Date | string
    user_skill_display_mode_id?: string
  }

  export type user_skillUpdateWithoutUser_skill_levelInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: skillUpdateOneRequiredWithoutUser_skillNestedInput
    user_skill_display_mode?: user_skill_display_modeUpdateOneRequiredWithoutUser_skillNestedInput
  }

  export type user_skillUncheckedUpdateWithoutUser_skill_levelInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_skill_display_mode_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_skillUncheckedUpdateManyWithoutUser_skill_levelInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    skill_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_skill_display_mode_id?: StringFieldUpdateOperationsInput | string
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