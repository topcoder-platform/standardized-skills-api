
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
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model SkillCategory
 * 
 */
export type SkillCategory = $Result.DefaultSelection<Prisma.$SkillCategoryPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model SkillEventType
 * 
 */
export type SkillEventType = $Result.DefaultSelection<Prisma.$SkillEventTypePayload>
/**
 * Model SourceType
 * 
 */
export type SourceType = $Result.DefaultSelection<Prisma.$SourceTypePayload>
/**
 * Model SkillEvent
 * 
 */
export type SkillEvent = $Result.DefaultSelection<Prisma.$SkillEventPayload>
/**
 * Model UserSkillLevel
 * 
 */
export type UserSkillLevel = $Result.DefaultSelection<Prisma.$UserSkillLevelPayload>
/**
 * Model UserSkillDisplayMode
 * 
 */
export type UserSkillDisplayMode = $Result.DefaultSelection<Prisma.$UserSkillDisplayModePayload>
/**
 * Model UserSkill
 * 
 */
export type UserSkill = $Result.DefaultSelection<Prisma.$UserSkillPayload>
/**
 * Model WorkSkill
 * 
 */
export type WorkSkill = $Result.DefaultSelection<Prisma.$WorkSkillPayload>

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
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillCategory`: Exposes CRUD operations for the **SkillCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillCategories
    * const skillCategories = await prisma.skillCategory.findMany()
    * ```
    */
  get skillCategory(): Prisma.SkillCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillEventType`: Exposes CRUD operations for the **SkillEventType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillEventTypes
    * const skillEventTypes = await prisma.skillEventType.findMany()
    * ```
    */
  get skillEventType(): Prisma.SkillEventTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sourceType`: Exposes CRUD operations for the **SourceType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourceTypes
    * const sourceTypes = await prisma.sourceType.findMany()
    * ```
    */
  get sourceType(): Prisma.SourceTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillEvent`: Exposes CRUD operations for the **SkillEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillEvents
    * const skillEvents = await prisma.skillEvent.findMany()
    * ```
    */
  get skillEvent(): Prisma.SkillEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSkillLevel`: Exposes CRUD operations for the **UserSkillLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkillLevels
    * const userSkillLevels = await prisma.userSkillLevel.findMany()
    * ```
    */
  get userSkillLevel(): Prisma.UserSkillLevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSkillDisplayMode`: Exposes CRUD operations for the **UserSkillDisplayMode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkillDisplayModes
    * const userSkillDisplayModes = await prisma.userSkillDisplayMode.findMany()
    * ```
    */
  get userSkillDisplayMode(): Prisma.UserSkillDisplayModeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSkill`: Exposes CRUD operations for the **UserSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkills
    * const userSkills = await prisma.userSkill.findMany()
    * ```
    */
  get userSkill(): Prisma.UserSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workSkill`: Exposes CRUD operations for the **WorkSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkSkills
    * const workSkills = await prisma.workSkill.findMany()
    * ```
    */
  get workSkill(): Prisma.WorkSkillDelegate<ExtArgs, ClientOptions>;
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
    Event: 'Event',
    SkillCategory: 'SkillCategory',
    Skill: 'Skill',
    SkillEventType: 'SkillEventType',
    SourceType: 'SourceType',
    SkillEvent: 'SkillEvent',
    UserSkillLevel: 'UserSkillLevel',
    UserSkillDisplayMode: 'UserSkillDisplayMode',
    UserSkill: 'UserSkill',
    WorkSkill: 'WorkSkill'
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
      modelProps: "event" | "skillCategory" | "skill" | "skillEventType" | "sourceType" | "skillEvent" | "userSkillLevel" | "userSkillDisplayMode" | "userSkill" | "workSkill"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      SkillCategory: {
        payload: Prisma.$SkillCategoryPayload<ExtArgs>
        fields: Prisma.SkillCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          findFirst: {
            args: Prisma.SkillCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          findMany: {
            args: Prisma.SkillCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>[]
          }
          create: {
            args: Prisma.SkillCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          createMany: {
            args: Prisma.SkillCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>[]
          }
          delete: {
            args: Prisma.SkillCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          update: {
            args: Prisma.SkillCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SkillCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>[]
          }
          upsert: {
            args: Prisma.SkillCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          aggregate: {
            args: Prisma.SkillCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillCategory>
          }
          groupBy: {
            args: Prisma.SkillCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCategoryCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      SkillEventType: {
        payload: Prisma.$SkillEventTypePayload<ExtArgs>
        fields: Prisma.SkillEventTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillEventTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillEventTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventTypePayload>
          }
          findFirst: {
            args: Prisma.SkillEventTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillEventTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventTypePayload>
          }
          findMany: {
            args: Prisma.SkillEventTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventTypePayload>[]
          }
          create: {
            args: Prisma.SkillEventTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventTypePayload>
          }
          createMany: {
            args: Prisma.SkillEventTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillEventTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventTypePayload>[]
          }
          delete: {
            args: Prisma.SkillEventTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventTypePayload>
          }
          update: {
            args: Prisma.SkillEventTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventTypePayload>
          }
          deleteMany: {
            args: Prisma.SkillEventTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillEventTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillEventTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventTypePayload>[]
          }
          upsert: {
            args: Prisma.SkillEventTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventTypePayload>
          }
          aggregate: {
            args: Prisma.SkillEventTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillEventType>
          }
          groupBy: {
            args: Prisma.SkillEventTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillEventTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillEventTypeCountArgs<ExtArgs>
            result: $Utils.Optional<SkillEventTypeCountAggregateOutputType> | number
          }
        }
      }
      SourceType: {
        payload: Prisma.$SourceTypePayload<ExtArgs>
        fields: Prisma.SourceTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTypePayload>
          }
          findFirst: {
            args: Prisma.SourceTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTypePayload>
          }
          findMany: {
            args: Prisma.SourceTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTypePayload>[]
          }
          create: {
            args: Prisma.SourceTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTypePayload>
          }
          createMany: {
            args: Prisma.SourceTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTypePayload>[]
          }
          delete: {
            args: Prisma.SourceTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTypePayload>
          }
          update: {
            args: Prisma.SourceTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTypePayload>
          }
          deleteMany: {
            args: Prisma.SourceTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTypePayload>[]
          }
          upsert: {
            args: Prisma.SourceTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTypePayload>
          }
          aggregate: {
            args: Prisma.SourceTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourceType>
          }
          groupBy: {
            args: Prisma.SourceTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceTypeCountArgs<ExtArgs>
            result: $Utils.Optional<SourceTypeCountAggregateOutputType> | number
          }
        }
      }
      SkillEvent: {
        payload: Prisma.$SkillEventPayload<ExtArgs>
        fields: Prisma.SkillEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventPayload>
          }
          findFirst: {
            args: Prisma.SkillEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventPayload>
          }
          findMany: {
            args: Prisma.SkillEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventPayload>[]
          }
          create: {
            args: Prisma.SkillEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventPayload>
          }
          createMany: {
            args: Prisma.SkillEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventPayload>[]
          }
          delete: {
            args: Prisma.SkillEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventPayload>
          }
          update: {
            args: Prisma.SkillEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventPayload>
          }
          deleteMany: {
            args: Prisma.SkillEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventPayload>[]
          }
          upsert: {
            args: Prisma.SkillEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillEventPayload>
          }
          aggregate: {
            args: Prisma.SkillEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillEvent>
          }
          groupBy: {
            args: Prisma.SkillEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillEventCountArgs<ExtArgs>
            result: $Utils.Optional<SkillEventCountAggregateOutputType> | number
          }
        }
      }
      UserSkillLevel: {
        payload: Prisma.$UserSkillLevelPayload<ExtArgs>
        fields: Prisma.UserSkillLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSkillLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSkillLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillLevelPayload>
          }
          findFirst: {
            args: Prisma.UserSkillLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSkillLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillLevelPayload>
          }
          findMany: {
            args: Prisma.UserSkillLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillLevelPayload>[]
          }
          create: {
            args: Prisma.UserSkillLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillLevelPayload>
          }
          createMany: {
            args: Prisma.UserSkillLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSkillLevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillLevelPayload>[]
          }
          delete: {
            args: Prisma.UserSkillLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillLevelPayload>
          }
          update: {
            args: Prisma.UserSkillLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillLevelPayload>
          }
          deleteMany: {
            args: Prisma.UserSkillLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSkillLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSkillLevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillLevelPayload>[]
          }
          upsert: {
            args: Prisma.UserSkillLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillLevelPayload>
          }
          aggregate: {
            args: Prisma.UserSkillLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkillLevel>
          }
          groupBy: {
            args: Prisma.UserSkillLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSkillLevelCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillLevelCountAggregateOutputType> | number
          }
        }
      }
      UserSkillDisplayMode: {
        payload: Prisma.$UserSkillDisplayModePayload<ExtArgs>
        fields: Prisma.UserSkillDisplayModeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSkillDisplayModeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillDisplayModePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSkillDisplayModeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillDisplayModePayload>
          }
          findFirst: {
            args: Prisma.UserSkillDisplayModeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillDisplayModePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSkillDisplayModeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillDisplayModePayload>
          }
          findMany: {
            args: Prisma.UserSkillDisplayModeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillDisplayModePayload>[]
          }
          create: {
            args: Prisma.UserSkillDisplayModeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillDisplayModePayload>
          }
          createMany: {
            args: Prisma.UserSkillDisplayModeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSkillDisplayModeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillDisplayModePayload>[]
          }
          delete: {
            args: Prisma.UserSkillDisplayModeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillDisplayModePayload>
          }
          update: {
            args: Prisma.UserSkillDisplayModeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillDisplayModePayload>
          }
          deleteMany: {
            args: Prisma.UserSkillDisplayModeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSkillDisplayModeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSkillDisplayModeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillDisplayModePayload>[]
          }
          upsert: {
            args: Prisma.UserSkillDisplayModeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillDisplayModePayload>
          }
          aggregate: {
            args: Prisma.UserSkillDisplayModeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkillDisplayMode>
          }
          groupBy: {
            args: Prisma.UserSkillDisplayModeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillDisplayModeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSkillDisplayModeCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillDisplayModeCountAggregateOutputType> | number
          }
        }
      }
      UserSkill: {
        payload: Prisma.$UserSkillPayload<ExtArgs>
        fields: Prisma.UserSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          findFirst: {
            args: Prisma.UserSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          findMany: {
            args: Prisma.UserSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          create: {
            args: Prisma.UserSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          createMany: {
            args: Prisma.UserSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          delete: {
            args: Prisma.UserSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          update: {
            args: Prisma.UserSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          deleteMany: {
            args: Prisma.UserSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          upsert: {
            args: Prisma.UserSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          aggregate: {
            args: Prisma.UserSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkill>
          }
          groupBy: {
            args: Prisma.UserSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSkillCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillCountAggregateOutputType> | number
          }
        }
      }
      WorkSkill: {
        payload: Prisma.$WorkSkillPayload<ExtArgs>
        fields: Prisma.WorkSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSkillPayload>
          }
          findFirst: {
            args: Prisma.WorkSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSkillPayload>
          }
          findMany: {
            args: Prisma.WorkSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSkillPayload>[]
          }
          create: {
            args: Prisma.WorkSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSkillPayload>
          }
          createMany: {
            args: Prisma.WorkSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSkillPayload>[]
          }
          delete: {
            args: Prisma.WorkSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSkillPayload>
          }
          update: {
            args: Prisma.WorkSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSkillPayload>
          }
          deleteMany: {
            args: Prisma.WorkSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSkillPayload>[]
          }
          upsert: {
            args: Prisma.WorkSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSkillPayload>
          }
          aggregate: {
            args: Prisma.WorkSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkSkill>
          }
          groupBy: {
            args: Prisma.WorkSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkSkillCountArgs<ExtArgs>
            result: $Utils.Optional<WorkSkillCountAggregateOutputType> | number
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
    event?: EventOmit
    skillCategory?: SkillCategoryOmit
    skill?: SkillOmit
    skillEventType?: SkillEventTypeOmit
    sourceType?: SourceTypeOmit
    skillEvent?: SkillEventOmit
    userSkillLevel?: UserSkillLevelOmit
    userSkillDisplayMode?: UserSkillDisplayModeOmit
    userSkill?: UserSkillOmit
    workSkill?: WorkSkillOmit
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
    skillEvents: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillEvents?: boolean | EventCountOutputTypeCountSkillEventsArgs
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
  export type EventCountOutputTypeCountSkillEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillEventWhereInput
  }


  /**
   * Count Type SkillCategoryCountOutputType
   */

  export type SkillCategoryCountOutputType = {
    skills: number
  }

  export type SkillCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | SkillCategoryCountOutputTypeCountSkillsArgs
  }

  // Custom InputTypes
  /**
   * SkillCategoryCountOutputType without action
   */
  export type SkillCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategoryCountOutputType
     */
    select?: SkillCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCategoryCountOutputType without action
   */
  export type SkillCategoryCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    skillEvents: number
    userSkills: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillEvents?: boolean | SkillCountOutputTypeCountSkillEventsArgs
    userSkills?: boolean | SkillCountOutputTypeCountUserSkillsArgs
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
  export type SkillCountOutputTypeCountSkillEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillEventWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountUserSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
  }


  /**
   * Count Type SkillEventTypeCountOutputType
   */

  export type SkillEventTypeCountOutputType = {
    skillEvents: number
  }

  export type SkillEventTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillEvents?: boolean | SkillEventTypeCountOutputTypeCountSkillEventsArgs
  }

  // Custom InputTypes
  /**
   * SkillEventTypeCountOutputType without action
   */
  export type SkillEventTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEventTypeCountOutputType
     */
    select?: SkillEventTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillEventTypeCountOutputType without action
   */
  export type SkillEventTypeCountOutputTypeCountSkillEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillEventWhereInput
  }


  /**
   * Count Type SourceTypeCountOutputType
   */

  export type SourceTypeCountOutputType = {
    skillEvents: number
  }

  export type SourceTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillEvents?: boolean | SourceTypeCountOutputTypeCountSkillEventsArgs
  }

  // Custom InputTypes
  /**
   * SourceTypeCountOutputType without action
   */
  export type SourceTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTypeCountOutputType
     */
    select?: SourceTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SourceTypeCountOutputType without action
   */
  export type SourceTypeCountOutputTypeCountSkillEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillEventWhereInput
  }


  /**
   * Count Type UserSkillLevelCountOutputType
   */

  export type UserSkillLevelCountOutputType = {
    userSkills: number
  }

  export type UserSkillLevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSkills?: boolean | UserSkillLevelCountOutputTypeCountUserSkillsArgs
  }

  // Custom InputTypes
  /**
   * UserSkillLevelCountOutputType without action
   */
  export type UserSkillLevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillLevelCountOutputType
     */
    select?: UserSkillLevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserSkillLevelCountOutputType without action
   */
  export type UserSkillLevelCountOutputTypeCountUserSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
  }


  /**
   * Count Type UserSkillDisplayModeCountOutputType
   */

  export type UserSkillDisplayModeCountOutputType = {
    userSkills: number
  }

  export type UserSkillDisplayModeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSkills?: boolean | UserSkillDisplayModeCountOutputTypeCountUserSkillsArgs
  }

  // Custom InputTypes
  /**
   * UserSkillDisplayModeCountOutputType without action
   */
  export type UserSkillDisplayModeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillDisplayModeCountOutputType
     */
    select?: UserSkillDisplayModeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserSkillDisplayModeCountOutputType without action
   */
  export type UserSkillDisplayModeCountOutputTypeCountUserSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    topic: string | null
    payloadHash: string | null
    createdAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    topic: string | null
    payloadHash: string | null
    createdAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    topic: number
    payload: number
    payloadHash: number
    createdAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    topic?: true
    payloadHash?: true
    createdAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    topic?: true
    payloadHash?: true
    createdAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    topic?: true
    payload?: true
    payloadHash?: true
    createdAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
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




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
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
    payloadHash: string | null
    createdAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
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


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic?: boolean
    payload?: boolean
    payloadHash?: boolean
    createdAt?: boolean
    skillEvents?: boolean | Event$skillEventsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic?: boolean
    payload?: boolean
    payloadHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic?: boolean
    payload?: boolean
    payloadHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    topic?: boolean
    payload?: boolean
    payloadHash?: boolean
    createdAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "topic" | "payload" | "payloadHash" | "createdAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillEvents?: boolean | Event$skillEventsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      skillEvents: Prisma.$SkillEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      topic: string
      payload: Prisma.JsonValue
      payloadHash: string | null
      createdAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
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
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
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
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
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
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
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
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skillEvents<T extends Event$skillEventsArgs<ExtArgs> = {}>(args?: Subset<T, Event$skillEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly topic: FieldRef<"Event", 'String'>
    readonly payload: FieldRef<"Event", 'Json'>
    readonly payloadHash: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.skillEvents
   */
  export type Event$skillEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventInclude<ExtArgs> | null
    where?: SkillEventWhereInput
    orderBy?: SkillEventOrderByWithRelationInput | SkillEventOrderByWithRelationInput[]
    cursor?: SkillEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillEventScalarFieldEnum | SkillEventScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model SkillCategory
   */

  export type AggregateSkillCategory = {
    _count: SkillCategoryCountAggregateOutputType | null
    _min: SkillCategoryMinAggregateOutputType | null
    _max: SkillCategoryMaxAggregateOutputType | null
  }

  export type SkillCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillCategory to aggregate.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillCategories
    **/
    _count?: true | SkillCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillCategoryMaxAggregateInputType
  }

  export type GetSkillCategoryAggregateType<T extends SkillCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillCategory[P]>
      : GetScalarType<T[P], AggregateSkillCategory[P]>
  }




  export type SkillCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillCategoryWhereInput
    orderBy?: SkillCategoryOrderByWithAggregationInput | SkillCategoryOrderByWithAggregationInput[]
    by: SkillCategoryScalarFieldEnum[] | SkillCategoryScalarFieldEnum
    having?: SkillCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCategoryCountAggregateInputType | true
    _min?: SkillCategoryMinAggregateInputType
    _max?: SkillCategoryMaxAggregateInputType
  }

  export type SkillCategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SkillCategoryCountAggregateOutputType | null
    _min: SkillCategoryMinAggregateOutputType | null
    _max: SkillCategoryMaxAggregateOutputType | null
  }

  type GetSkillCategoryGroupByPayload<T extends SkillCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SkillCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SkillCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skills?: boolean | SkillCategory$skillsArgs<ExtArgs>
    _count?: boolean | SkillCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillCategory"]>

  export type SkillCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillCategory"]>

  export type SkillCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillCategory"]>

  export type SkillCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["skillCategory"]>
  export type SkillCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | SkillCategory$skillsArgs<ExtArgs>
    _count?: boolean | SkillCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillCategory"
    objects: {
      skills: Prisma.$SkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skillCategory"]>
    composites: {}
  }

  type SkillCategoryGetPayload<S extends boolean | null | undefined | SkillCategoryDefaultArgs> = $Result.GetResult<Prisma.$SkillCategoryPayload, S>

  type SkillCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCategoryCountAggregateInputType | true
    }

  export interface SkillCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillCategory'], meta: { name: 'SkillCategory' } }
    /**
     * Find zero or one SkillCategory that matches the filter.
     * @param {SkillCategoryFindUniqueArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillCategoryFindUniqueArgs>(args: SelectSubset<T, SkillCategoryFindUniqueArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillCategoryFindUniqueOrThrowArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryFindFirstArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillCategoryFindFirstArgs>(args?: SelectSubset<T, SkillCategoryFindFirstArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryFindFirstOrThrowArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillCategories
     * const skillCategories = await prisma.skillCategory.findMany()
     * 
     * // Get first 10 SkillCategories
     * const skillCategories = await prisma.skillCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillCategoryWithIdOnly = await prisma.skillCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillCategoryFindManyArgs>(args?: SelectSubset<T, SkillCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillCategory.
     * @param {SkillCategoryCreateArgs} args - Arguments to create a SkillCategory.
     * @example
     * // Create one SkillCategory
     * const SkillCategory = await prisma.skillCategory.create({
     *   data: {
     *     // ... data to create a SkillCategory
     *   }
     * })
     * 
     */
    create<T extends SkillCategoryCreateArgs>(args: SelectSubset<T, SkillCategoryCreateArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillCategories.
     * @param {SkillCategoryCreateManyArgs} args - Arguments to create many SkillCategories.
     * @example
     * // Create many SkillCategories
     * const skillCategory = await prisma.skillCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCategoryCreateManyArgs>(args?: SelectSubset<T, SkillCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillCategories and returns the data saved in the database.
     * @param {SkillCategoryCreateManyAndReturnArgs} args - Arguments to create many SkillCategories.
     * @example
     * // Create many SkillCategories
     * const skillCategory = await prisma.skillCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillCategories and only return the `id`
     * const skillCategoryWithIdOnly = await prisma.skillCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillCategory.
     * @param {SkillCategoryDeleteArgs} args - Arguments to delete one SkillCategory.
     * @example
     * // Delete one SkillCategory
     * const SkillCategory = await prisma.skillCategory.delete({
     *   where: {
     *     // ... filter to delete one SkillCategory
     *   }
     * })
     * 
     */
    delete<T extends SkillCategoryDeleteArgs>(args: SelectSubset<T, SkillCategoryDeleteArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillCategory.
     * @param {SkillCategoryUpdateArgs} args - Arguments to update one SkillCategory.
     * @example
     * // Update one SkillCategory
     * const skillCategory = await prisma.skillCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillCategoryUpdateArgs>(args: SelectSubset<T, SkillCategoryUpdateArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillCategories.
     * @param {SkillCategoryDeleteManyArgs} args - Arguments to filter SkillCategories to delete.
     * @example
     * // Delete a few SkillCategories
     * const { count } = await prisma.skillCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillCategoryDeleteManyArgs>(args?: SelectSubset<T, SkillCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillCategories
     * const skillCategory = await prisma.skillCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillCategoryUpdateManyArgs>(args: SelectSubset<T, SkillCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillCategories and returns the data updated in the database.
     * @param {SkillCategoryUpdateManyAndReturnArgs} args - Arguments to update many SkillCategories.
     * @example
     * // Update many SkillCategories
     * const skillCategory = await prisma.skillCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillCategories and only return the `id`
     * const skillCategoryWithIdOnly = await prisma.skillCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillCategory.
     * @param {SkillCategoryUpsertArgs} args - Arguments to update or create a SkillCategory.
     * @example
     * // Update or create a SkillCategory
     * const skillCategory = await prisma.skillCategory.upsert({
     *   create: {
     *     // ... data to create a SkillCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillCategory we want to update
     *   }
     * })
     */
    upsert<T extends SkillCategoryUpsertArgs>(args: SelectSubset<T, SkillCategoryUpsertArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryCountArgs} args - Arguments to filter SkillCategories to count.
     * @example
     * // Count the number of SkillCategories
     * const count = await prisma.skillCategory.count({
     *   where: {
     *     // ... the filter for the SkillCategories we want to count
     *   }
     * })
    **/
    count<T extends SkillCategoryCountArgs>(
      args?: Subset<T, SkillCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillCategoryAggregateArgs>(args: Subset<T, SkillCategoryAggregateArgs>): Prisma.PrismaPromise<GetSkillCategoryAggregateType<T>>

    /**
     * Group by SkillCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryGroupByArgs} args - Group by arguments.
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
      T extends SkillCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SkillCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillCategory model
   */
  readonly fields: SkillCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends SkillCategory$skillsArgs<ExtArgs> = {}>(args?: Subset<T, SkillCategory$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SkillCategory model
   */
  interface SkillCategoryFieldRefs {
    readonly id: FieldRef<"SkillCategory", 'String'>
    readonly name: FieldRef<"SkillCategory", 'String'>
    readonly description: FieldRef<"SkillCategory", 'String'>
    readonly createdAt: FieldRef<"SkillCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"SkillCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SkillCategory findUnique
   */
  export type SkillCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory findUniqueOrThrow
   */
  export type SkillCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory findFirst
   */
  export type SkillCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillCategories.
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillCategories.
     */
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * SkillCategory findFirstOrThrow
   */
  export type SkillCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillCategories.
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillCategories.
     */
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * SkillCategory findMany
   */
  export type SkillCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategories to fetch.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillCategories.
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * SkillCategory create
   */
  export type SkillCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillCategory.
     */
    data: XOR<SkillCategoryCreateInput, SkillCategoryUncheckedCreateInput>
  }

  /**
   * SkillCategory createMany
   */
  export type SkillCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillCategories.
     */
    data: SkillCategoryCreateManyInput | SkillCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillCategory createManyAndReturn
   */
  export type SkillCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many SkillCategories.
     */
    data: SkillCategoryCreateManyInput | SkillCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillCategory update
   */
  export type SkillCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillCategory.
     */
    data: XOR<SkillCategoryUpdateInput, SkillCategoryUncheckedUpdateInput>
    /**
     * Choose, which SkillCategory to update.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory updateMany
   */
  export type SkillCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillCategories.
     */
    data: XOR<SkillCategoryUpdateManyMutationInput, SkillCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SkillCategories to update
     */
    where?: SkillCategoryWhereInput
    /**
     * Limit how many SkillCategories to update.
     */
    limit?: number
  }

  /**
   * SkillCategory updateManyAndReturn
   */
  export type SkillCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * The data used to update SkillCategories.
     */
    data: XOR<SkillCategoryUpdateManyMutationInput, SkillCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SkillCategories to update
     */
    where?: SkillCategoryWhereInput
    /**
     * Limit how many SkillCategories to update.
     */
    limit?: number
  }

  /**
   * SkillCategory upsert
   */
  export type SkillCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillCategory to update in case it exists.
     */
    where: SkillCategoryWhereUniqueInput
    /**
     * In case the SkillCategory found by the `where` argument doesn't exist, create a new SkillCategory with this data.
     */
    create: XOR<SkillCategoryCreateInput, SkillCategoryUncheckedCreateInput>
    /**
     * In case the SkillCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillCategoryUpdateInput, SkillCategoryUncheckedUpdateInput>
  }

  /**
   * SkillCategory delete
   */
  export type SkillCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter which SkillCategory to delete.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory deleteMany
   */
  export type SkillCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillCategories to delete
     */
    where?: SkillCategoryWhereInput
    /**
     * Limit how many SkillCategories to delete.
     */
    limit?: number
  }

  /**
   * SkillCategory.skills
   */
  export type SkillCategory$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * SkillCategory without action
   */
  export type SkillCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Skill
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
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    description: number
    categoryId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
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




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
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
    categoryId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
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


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    category?: boolean | Skill$categoryArgs<ExtArgs>
    skillEvents?: boolean | Skill$skillEventsArgs<ExtArgs>
    userSkills?: boolean | Skill$userSkillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    category?: boolean | Skill$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    category?: boolean | Skill$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "categoryId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Skill$categoryArgs<ExtArgs>
    skillEvents?: boolean | Skill$skillEventsArgs<ExtArgs>
    userSkills?: boolean | Skill$userSkillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Skill$categoryArgs<ExtArgs>
  }
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Skill$categoryArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      category: Prisma.$SkillCategoryPayload<ExtArgs> | null
      skillEvents: Prisma.$SkillEventPayload<ExtArgs>[]
      userSkills: Prisma.$UserSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      categoryId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
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
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
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
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
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
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
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
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
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
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Skill$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Skill$categoryArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    skillEvents<T extends Skill$skillEventsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$skillEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userSkills<T extends Skill$userSkillsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$userSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly description: FieldRef<"Skill", 'String'>
    readonly categoryId: FieldRef<"Skill", 'String'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
    readonly updatedAt: FieldRef<"Skill", 'DateTime'>
    readonly deletedAt: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.category
   */
  export type Skill$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    where?: SkillCategoryWhereInput
  }

  /**
   * Skill.skillEvents
   */
  export type Skill$skillEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventInclude<ExtArgs> | null
    where?: SkillEventWhereInput
    orderBy?: SkillEventOrderByWithRelationInput | SkillEventOrderByWithRelationInput[]
    cursor?: SkillEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillEventScalarFieldEnum | SkillEventScalarFieldEnum[]
  }

  /**
   * Skill.userSkills
   */
  export type Skill$userSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    cursor?: UserSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model SkillEventType
   */

  export type AggregateSkillEventType = {
    _count: SkillEventTypeCountAggregateOutputType | null
    _min: SkillEventTypeMinAggregateOutputType | null
    _max: SkillEventTypeMaxAggregateOutputType | null
  }

  export type SkillEventTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillEventTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillEventTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillEventTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillEventTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillEventTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillEventTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillEventType to aggregate.
     */
    where?: SkillEventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillEventTypes to fetch.
     */
    orderBy?: SkillEventTypeOrderByWithRelationInput | SkillEventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillEventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillEventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillEventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillEventTypes
    **/
    _count?: true | SkillEventTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillEventTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillEventTypeMaxAggregateInputType
  }

  export type GetSkillEventTypeAggregateType<T extends SkillEventTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillEventType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillEventType[P]>
      : GetScalarType<T[P], AggregateSkillEventType[P]>
  }




  export type SkillEventTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillEventTypeWhereInput
    orderBy?: SkillEventTypeOrderByWithAggregationInput | SkillEventTypeOrderByWithAggregationInput[]
    by: SkillEventTypeScalarFieldEnum[] | SkillEventTypeScalarFieldEnum
    having?: SkillEventTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillEventTypeCountAggregateInputType | true
    _min?: SkillEventTypeMinAggregateInputType
    _max?: SkillEventTypeMaxAggregateInputType
  }

  export type SkillEventTypeGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SkillEventTypeCountAggregateOutputType | null
    _min: SkillEventTypeMinAggregateOutputType | null
    _max: SkillEventTypeMaxAggregateOutputType | null
  }

  type GetSkillEventTypeGroupByPayload<T extends SkillEventTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillEventTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillEventTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillEventTypeGroupByOutputType[P]>
            : GetScalarType<T[P], SkillEventTypeGroupByOutputType[P]>
        }
      >
    >


  export type SkillEventTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skillEvents?: boolean | SkillEventType$skillEventsArgs<ExtArgs>
    _count?: boolean | SkillEventTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillEventType"]>

  export type SkillEventTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillEventType"]>

  export type SkillEventTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillEventType"]>

  export type SkillEventTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillEventTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["skillEventType"]>
  export type SkillEventTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillEvents?: boolean | SkillEventType$skillEventsArgs<ExtArgs>
    _count?: boolean | SkillEventTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillEventTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillEventTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillEventTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillEventType"
    objects: {
      skillEvents: Prisma.$SkillEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skillEventType"]>
    composites: {}
  }

  type SkillEventTypeGetPayload<S extends boolean | null | undefined | SkillEventTypeDefaultArgs> = $Result.GetResult<Prisma.$SkillEventTypePayload, S>

  type SkillEventTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillEventTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillEventTypeCountAggregateInputType | true
    }

  export interface SkillEventTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillEventType'], meta: { name: 'SkillEventType' } }
    /**
     * Find zero or one SkillEventType that matches the filter.
     * @param {SkillEventTypeFindUniqueArgs} args - Arguments to find a SkillEventType
     * @example
     * // Get one SkillEventType
     * const skillEventType = await prisma.skillEventType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillEventTypeFindUniqueArgs>(args: SelectSubset<T, SkillEventTypeFindUniqueArgs<ExtArgs>>): Prisma__SkillEventTypeClient<$Result.GetResult<Prisma.$SkillEventTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillEventType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillEventTypeFindUniqueOrThrowArgs} args - Arguments to find a SkillEventType
     * @example
     * // Get one SkillEventType
     * const skillEventType = await prisma.skillEventType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillEventTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillEventTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillEventTypeClient<$Result.GetResult<Prisma.$SkillEventTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillEventType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillEventTypeFindFirstArgs} args - Arguments to find a SkillEventType
     * @example
     * // Get one SkillEventType
     * const skillEventType = await prisma.skillEventType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillEventTypeFindFirstArgs>(args?: SelectSubset<T, SkillEventTypeFindFirstArgs<ExtArgs>>): Prisma__SkillEventTypeClient<$Result.GetResult<Prisma.$SkillEventTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillEventType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillEventTypeFindFirstOrThrowArgs} args - Arguments to find a SkillEventType
     * @example
     * // Get one SkillEventType
     * const skillEventType = await prisma.skillEventType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillEventTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillEventTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillEventTypeClient<$Result.GetResult<Prisma.$SkillEventTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillEventTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillEventTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillEventTypes
     * const skillEventTypes = await prisma.skillEventType.findMany()
     * 
     * // Get first 10 SkillEventTypes
     * const skillEventTypes = await prisma.skillEventType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillEventTypeWithIdOnly = await prisma.skillEventType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillEventTypeFindManyArgs>(args?: SelectSubset<T, SkillEventTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillEventTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillEventType.
     * @param {SkillEventTypeCreateArgs} args - Arguments to create a SkillEventType.
     * @example
     * // Create one SkillEventType
     * const SkillEventType = await prisma.skillEventType.create({
     *   data: {
     *     // ... data to create a SkillEventType
     *   }
     * })
     * 
     */
    create<T extends SkillEventTypeCreateArgs>(args: SelectSubset<T, SkillEventTypeCreateArgs<ExtArgs>>): Prisma__SkillEventTypeClient<$Result.GetResult<Prisma.$SkillEventTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillEventTypes.
     * @param {SkillEventTypeCreateManyArgs} args - Arguments to create many SkillEventTypes.
     * @example
     * // Create many SkillEventTypes
     * const skillEventType = await prisma.skillEventType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillEventTypeCreateManyArgs>(args?: SelectSubset<T, SkillEventTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillEventTypes and returns the data saved in the database.
     * @param {SkillEventTypeCreateManyAndReturnArgs} args - Arguments to create many SkillEventTypes.
     * @example
     * // Create many SkillEventTypes
     * const skillEventType = await prisma.skillEventType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillEventTypes and only return the `id`
     * const skillEventTypeWithIdOnly = await prisma.skillEventType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillEventTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillEventTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillEventTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillEventType.
     * @param {SkillEventTypeDeleteArgs} args - Arguments to delete one SkillEventType.
     * @example
     * // Delete one SkillEventType
     * const SkillEventType = await prisma.skillEventType.delete({
     *   where: {
     *     // ... filter to delete one SkillEventType
     *   }
     * })
     * 
     */
    delete<T extends SkillEventTypeDeleteArgs>(args: SelectSubset<T, SkillEventTypeDeleteArgs<ExtArgs>>): Prisma__SkillEventTypeClient<$Result.GetResult<Prisma.$SkillEventTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillEventType.
     * @param {SkillEventTypeUpdateArgs} args - Arguments to update one SkillEventType.
     * @example
     * // Update one SkillEventType
     * const skillEventType = await prisma.skillEventType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillEventTypeUpdateArgs>(args: SelectSubset<T, SkillEventTypeUpdateArgs<ExtArgs>>): Prisma__SkillEventTypeClient<$Result.GetResult<Prisma.$SkillEventTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillEventTypes.
     * @param {SkillEventTypeDeleteManyArgs} args - Arguments to filter SkillEventTypes to delete.
     * @example
     * // Delete a few SkillEventTypes
     * const { count } = await prisma.skillEventType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillEventTypeDeleteManyArgs>(args?: SelectSubset<T, SkillEventTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillEventTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillEventTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillEventTypes
     * const skillEventType = await prisma.skillEventType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillEventTypeUpdateManyArgs>(args: SelectSubset<T, SkillEventTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillEventTypes and returns the data updated in the database.
     * @param {SkillEventTypeUpdateManyAndReturnArgs} args - Arguments to update many SkillEventTypes.
     * @example
     * // Update many SkillEventTypes
     * const skillEventType = await prisma.skillEventType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillEventTypes and only return the `id`
     * const skillEventTypeWithIdOnly = await prisma.skillEventType.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillEventTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillEventTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillEventTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillEventType.
     * @param {SkillEventTypeUpsertArgs} args - Arguments to update or create a SkillEventType.
     * @example
     * // Update or create a SkillEventType
     * const skillEventType = await prisma.skillEventType.upsert({
     *   create: {
     *     // ... data to create a SkillEventType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillEventType we want to update
     *   }
     * })
     */
    upsert<T extends SkillEventTypeUpsertArgs>(args: SelectSubset<T, SkillEventTypeUpsertArgs<ExtArgs>>): Prisma__SkillEventTypeClient<$Result.GetResult<Prisma.$SkillEventTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillEventTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillEventTypeCountArgs} args - Arguments to filter SkillEventTypes to count.
     * @example
     * // Count the number of SkillEventTypes
     * const count = await prisma.skillEventType.count({
     *   where: {
     *     // ... the filter for the SkillEventTypes we want to count
     *   }
     * })
    **/
    count<T extends SkillEventTypeCountArgs>(
      args?: Subset<T, SkillEventTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillEventTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillEventType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillEventTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillEventTypeAggregateArgs>(args: Subset<T, SkillEventTypeAggregateArgs>): Prisma.PrismaPromise<GetSkillEventTypeAggregateType<T>>

    /**
     * Group by SkillEventType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillEventTypeGroupByArgs} args - Group by arguments.
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
      T extends SkillEventTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillEventTypeGroupByArgs['orderBy'] }
        : { orderBy?: SkillEventTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillEventTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillEventTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillEventType model
   */
  readonly fields: SkillEventTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillEventType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillEventTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skillEvents<T extends SkillEventType$skillEventsArgs<ExtArgs> = {}>(args?: Subset<T, SkillEventType$skillEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SkillEventType model
   */
  interface SkillEventTypeFieldRefs {
    readonly id: FieldRef<"SkillEventType", 'String'>
    readonly name: FieldRef<"SkillEventType", 'String'>
    readonly description: FieldRef<"SkillEventType", 'String'>
    readonly createdAt: FieldRef<"SkillEventType", 'DateTime'>
    readonly updatedAt: FieldRef<"SkillEventType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SkillEventType findUnique
   */
  export type SkillEventTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEventType
     */
    select?: SkillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEventType
     */
    omit?: SkillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventTypeInclude<ExtArgs> | null
    /**
     * Filter, which SkillEventType to fetch.
     */
    where: SkillEventTypeWhereUniqueInput
  }

  /**
   * SkillEventType findUniqueOrThrow
   */
  export type SkillEventTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEventType
     */
    select?: SkillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEventType
     */
    omit?: SkillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventTypeInclude<ExtArgs> | null
    /**
     * Filter, which SkillEventType to fetch.
     */
    where: SkillEventTypeWhereUniqueInput
  }

  /**
   * SkillEventType findFirst
   */
  export type SkillEventTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEventType
     */
    select?: SkillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEventType
     */
    omit?: SkillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventTypeInclude<ExtArgs> | null
    /**
     * Filter, which SkillEventType to fetch.
     */
    where?: SkillEventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillEventTypes to fetch.
     */
    orderBy?: SkillEventTypeOrderByWithRelationInput | SkillEventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillEventTypes.
     */
    cursor?: SkillEventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillEventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillEventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillEventTypes.
     */
    distinct?: SkillEventTypeScalarFieldEnum | SkillEventTypeScalarFieldEnum[]
  }

  /**
   * SkillEventType findFirstOrThrow
   */
  export type SkillEventTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEventType
     */
    select?: SkillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEventType
     */
    omit?: SkillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventTypeInclude<ExtArgs> | null
    /**
     * Filter, which SkillEventType to fetch.
     */
    where?: SkillEventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillEventTypes to fetch.
     */
    orderBy?: SkillEventTypeOrderByWithRelationInput | SkillEventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillEventTypes.
     */
    cursor?: SkillEventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillEventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillEventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillEventTypes.
     */
    distinct?: SkillEventTypeScalarFieldEnum | SkillEventTypeScalarFieldEnum[]
  }

  /**
   * SkillEventType findMany
   */
  export type SkillEventTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEventType
     */
    select?: SkillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEventType
     */
    omit?: SkillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventTypeInclude<ExtArgs> | null
    /**
     * Filter, which SkillEventTypes to fetch.
     */
    where?: SkillEventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillEventTypes to fetch.
     */
    orderBy?: SkillEventTypeOrderByWithRelationInput | SkillEventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillEventTypes.
     */
    cursor?: SkillEventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillEventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillEventTypes.
     */
    skip?: number
    distinct?: SkillEventTypeScalarFieldEnum | SkillEventTypeScalarFieldEnum[]
  }

  /**
   * SkillEventType create
   */
  export type SkillEventTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEventType
     */
    select?: SkillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEventType
     */
    omit?: SkillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillEventType.
     */
    data: XOR<SkillEventTypeCreateInput, SkillEventTypeUncheckedCreateInput>
  }

  /**
   * SkillEventType createMany
   */
  export type SkillEventTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillEventTypes.
     */
    data: SkillEventTypeCreateManyInput | SkillEventTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillEventType createManyAndReturn
   */
  export type SkillEventTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEventType
     */
    select?: SkillEventTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEventType
     */
    omit?: SkillEventTypeOmit<ExtArgs> | null
    /**
     * The data used to create many SkillEventTypes.
     */
    data: SkillEventTypeCreateManyInput | SkillEventTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillEventType update
   */
  export type SkillEventTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEventType
     */
    select?: SkillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEventType
     */
    omit?: SkillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillEventType.
     */
    data: XOR<SkillEventTypeUpdateInput, SkillEventTypeUncheckedUpdateInput>
    /**
     * Choose, which SkillEventType to update.
     */
    where: SkillEventTypeWhereUniqueInput
  }

  /**
   * SkillEventType updateMany
   */
  export type SkillEventTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillEventTypes.
     */
    data: XOR<SkillEventTypeUpdateManyMutationInput, SkillEventTypeUncheckedUpdateManyInput>
    /**
     * Filter which SkillEventTypes to update
     */
    where?: SkillEventTypeWhereInput
    /**
     * Limit how many SkillEventTypes to update.
     */
    limit?: number
  }

  /**
   * SkillEventType updateManyAndReturn
   */
  export type SkillEventTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEventType
     */
    select?: SkillEventTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEventType
     */
    omit?: SkillEventTypeOmit<ExtArgs> | null
    /**
     * The data used to update SkillEventTypes.
     */
    data: XOR<SkillEventTypeUpdateManyMutationInput, SkillEventTypeUncheckedUpdateManyInput>
    /**
     * Filter which SkillEventTypes to update
     */
    where?: SkillEventTypeWhereInput
    /**
     * Limit how many SkillEventTypes to update.
     */
    limit?: number
  }

  /**
   * SkillEventType upsert
   */
  export type SkillEventTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEventType
     */
    select?: SkillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEventType
     */
    omit?: SkillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillEventType to update in case it exists.
     */
    where: SkillEventTypeWhereUniqueInput
    /**
     * In case the SkillEventType found by the `where` argument doesn't exist, create a new SkillEventType with this data.
     */
    create: XOR<SkillEventTypeCreateInput, SkillEventTypeUncheckedCreateInput>
    /**
     * In case the SkillEventType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillEventTypeUpdateInput, SkillEventTypeUncheckedUpdateInput>
  }

  /**
   * SkillEventType delete
   */
  export type SkillEventTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEventType
     */
    select?: SkillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEventType
     */
    omit?: SkillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventTypeInclude<ExtArgs> | null
    /**
     * Filter which SkillEventType to delete.
     */
    where: SkillEventTypeWhereUniqueInput
  }

  /**
   * SkillEventType deleteMany
   */
  export type SkillEventTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillEventTypes to delete
     */
    where?: SkillEventTypeWhereInput
    /**
     * Limit how many SkillEventTypes to delete.
     */
    limit?: number
  }

  /**
   * SkillEventType.skillEvents
   */
  export type SkillEventType$skillEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventInclude<ExtArgs> | null
    where?: SkillEventWhereInput
    orderBy?: SkillEventOrderByWithRelationInput | SkillEventOrderByWithRelationInput[]
    cursor?: SkillEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillEventScalarFieldEnum | SkillEventScalarFieldEnum[]
  }

  /**
   * SkillEventType without action
   */
  export type SkillEventTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEventType
     */
    select?: SkillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEventType
     */
    omit?: SkillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventTypeInclude<ExtArgs> | null
  }


  /**
   * Model SourceType
   */

  export type AggregateSourceType = {
    _count: SourceTypeCountAggregateOutputType | null
    _min: SourceTypeMinAggregateOutputType | null
    _max: SourceTypeMaxAggregateOutputType | null
  }

  export type SourceTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SourceTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SourceTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceType to aggregate.
     */
    where?: SourceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceTypes to fetch.
     */
    orderBy?: SourceTypeOrderByWithRelationInput | SourceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SourceTypes
    **/
    _count?: true | SourceTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceTypeMaxAggregateInputType
  }

  export type GetSourceTypeAggregateType<T extends SourceTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateSourceType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSourceType[P]>
      : GetScalarType<T[P], AggregateSourceType[P]>
  }




  export type SourceTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceTypeWhereInput
    orderBy?: SourceTypeOrderByWithAggregationInput | SourceTypeOrderByWithAggregationInput[]
    by: SourceTypeScalarFieldEnum[] | SourceTypeScalarFieldEnum
    having?: SourceTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceTypeCountAggregateInputType | true
    _min?: SourceTypeMinAggregateInputType
    _max?: SourceTypeMaxAggregateInputType
  }

  export type SourceTypeGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SourceTypeCountAggregateOutputType | null
    _min: SourceTypeMinAggregateOutputType | null
    _max: SourceTypeMaxAggregateOutputType | null
  }

  type GetSourceTypeGroupByPayload<T extends SourceTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceTypeGroupByOutputType[P]>
            : GetScalarType<T[P], SourceTypeGroupByOutputType[P]>
        }
      >
    >


  export type SourceTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skillEvents?: boolean | SourceType$skillEventsArgs<ExtArgs>
    _count?: boolean | SourceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceType"]>

  export type SourceTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sourceType"]>

  export type SourceTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sourceType"]>

  export type SourceTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SourceTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["sourceType"]>
  export type SourceTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillEvents?: boolean | SourceType$skillEventsArgs<ExtArgs>
    _count?: boolean | SourceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SourceTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SourceTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SourceTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SourceType"
    objects: {
      skillEvents: Prisma.$SkillEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sourceType"]>
    composites: {}
  }

  type SourceTypeGetPayload<S extends boolean | null | undefined | SourceTypeDefaultArgs> = $Result.GetResult<Prisma.$SourceTypePayload, S>

  type SourceTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceTypeCountAggregateInputType | true
    }

  export interface SourceTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SourceType'], meta: { name: 'SourceType' } }
    /**
     * Find zero or one SourceType that matches the filter.
     * @param {SourceTypeFindUniqueArgs} args - Arguments to find a SourceType
     * @example
     * // Get one SourceType
     * const sourceType = await prisma.sourceType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceTypeFindUniqueArgs>(args: SelectSubset<T, SourceTypeFindUniqueArgs<ExtArgs>>): Prisma__SourceTypeClient<$Result.GetResult<Prisma.$SourceTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SourceType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceTypeFindUniqueOrThrowArgs} args - Arguments to find a SourceType
     * @example
     * // Get one SourceType
     * const sourceType = await prisma.sourceType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceTypeClient<$Result.GetResult<Prisma.$SourceTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTypeFindFirstArgs} args - Arguments to find a SourceType
     * @example
     * // Get one SourceType
     * const sourceType = await prisma.sourceType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceTypeFindFirstArgs>(args?: SelectSubset<T, SourceTypeFindFirstArgs<ExtArgs>>): Prisma__SourceTypeClient<$Result.GetResult<Prisma.$SourceTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTypeFindFirstOrThrowArgs} args - Arguments to find a SourceType
     * @example
     * // Get one SourceType
     * const sourceType = await prisma.sourceType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceTypeClient<$Result.GetResult<Prisma.$SourceTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SourceTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SourceTypes
     * const sourceTypes = await prisma.sourceType.findMany()
     * 
     * // Get first 10 SourceTypes
     * const sourceTypes = await prisma.sourceType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceTypeWithIdOnly = await prisma.sourceType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceTypeFindManyArgs>(args?: SelectSubset<T, SourceTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SourceType.
     * @param {SourceTypeCreateArgs} args - Arguments to create a SourceType.
     * @example
     * // Create one SourceType
     * const SourceType = await prisma.sourceType.create({
     *   data: {
     *     // ... data to create a SourceType
     *   }
     * })
     * 
     */
    create<T extends SourceTypeCreateArgs>(args: SelectSubset<T, SourceTypeCreateArgs<ExtArgs>>): Prisma__SourceTypeClient<$Result.GetResult<Prisma.$SourceTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SourceTypes.
     * @param {SourceTypeCreateManyArgs} args - Arguments to create many SourceTypes.
     * @example
     * // Create many SourceTypes
     * const sourceType = await prisma.sourceType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceTypeCreateManyArgs>(args?: SelectSubset<T, SourceTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SourceTypes and returns the data saved in the database.
     * @param {SourceTypeCreateManyAndReturnArgs} args - Arguments to create many SourceTypes.
     * @example
     * // Create many SourceTypes
     * const sourceType = await prisma.sourceType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SourceTypes and only return the `id`
     * const sourceTypeWithIdOnly = await prisma.sourceType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SourceType.
     * @param {SourceTypeDeleteArgs} args - Arguments to delete one SourceType.
     * @example
     * // Delete one SourceType
     * const SourceType = await prisma.sourceType.delete({
     *   where: {
     *     // ... filter to delete one SourceType
     *   }
     * })
     * 
     */
    delete<T extends SourceTypeDeleteArgs>(args: SelectSubset<T, SourceTypeDeleteArgs<ExtArgs>>): Prisma__SourceTypeClient<$Result.GetResult<Prisma.$SourceTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SourceType.
     * @param {SourceTypeUpdateArgs} args - Arguments to update one SourceType.
     * @example
     * // Update one SourceType
     * const sourceType = await prisma.sourceType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceTypeUpdateArgs>(args: SelectSubset<T, SourceTypeUpdateArgs<ExtArgs>>): Prisma__SourceTypeClient<$Result.GetResult<Prisma.$SourceTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SourceTypes.
     * @param {SourceTypeDeleteManyArgs} args - Arguments to filter SourceTypes to delete.
     * @example
     * // Delete a few SourceTypes
     * const { count } = await prisma.sourceType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceTypeDeleteManyArgs>(args?: SelectSubset<T, SourceTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SourceTypes
     * const sourceType = await prisma.sourceType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceTypeUpdateManyArgs>(args: SelectSubset<T, SourceTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceTypes and returns the data updated in the database.
     * @param {SourceTypeUpdateManyAndReturnArgs} args - Arguments to update many SourceTypes.
     * @example
     * // Update many SourceTypes
     * const sourceType = await prisma.sourceType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SourceTypes and only return the `id`
     * const sourceTypeWithIdOnly = await prisma.sourceType.updateManyAndReturn({
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
    updateManyAndReturn<T extends SourceTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SourceType.
     * @param {SourceTypeUpsertArgs} args - Arguments to update or create a SourceType.
     * @example
     * // Update or create a SourceType
     * const sourceType = await prisma.sourceType.upsert({
     *   create: {
     *     // ... data to create a SourceType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SourceType we want to update
     *   }
     * })
     */
    upsert<T extends SourceTypeUpsertArgs>(args: SelectSubset<T, SourceTypeUpsertArgs<ExtArgs>>): Prisma__SourceTypeClient<$Result.GetResult<Prisma.$SourceTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SourceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTypeCountArgs} args - Arguments to filter SourceTypes to count.
     * @example
     * // Count the number of SourceTypes
     * const count = await prisma.sourceType.count({
     *   where: {
     *     // ... the filter for the SourceTypes we want to count
     *   }
     * })
    **/
    count<T extends SourceTypeCountArgs>(
      args?: Subset<T, SourceTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SourceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SourceTypeAggregateArgs>(args: Subset<T, SourceTypeAggregateArgs>): Prisma.PrismaPromise<GetSourceTypeAggregateType<T>>

    /**
     * Group by SourceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTypeGroupByArgs} args - Group by arguments.
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
      T extends SourceTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceTypeGroupByArgs['orderBy'] }
        : { orderBy?: SourceTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SourceTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SourceType model
   */
  readonly fields: SourceTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SourceType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skillEvents<T extends SourceType$skillEventsArgs<ExtArgs> = {}>(args?: Subset<T, SourceType$skillEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SourceType model
   */
  interface SourceTypeFieldRefs {
    readonly id: FieldRef<"SourceType", 'String'>
    readonly name: FieldRef<"SourceType", 'String'>
    readonly description: FieldRef<"SourceType", 'String'>
    readonly createdAt: FieldRef<"SourceType", 'DateTime'>
    readonly updatedAt: FieldRef<"SourceType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SourceType findUnique
   */
  export type SourceTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceType
     */
    select?: SourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceType
     */
    omit?: SourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which SourceType to fetch.
     */
    where: SourceTypeWhereUniqueInput
  }

  /**
   * SourceType findUniqueOrThrow
   */
  export type SourceTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceType
     */
    select?: SourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceType
     */
    omit?: SourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which SourceType to fetch.
     */
    where: SourceTypeWhereUniqueInput
  }

  /**
   * SourceType findFirst
   */
  export type SourceTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceType
     */
    select?: SourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceType
     */
    omit?: SourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which SourceType to fetch.
     */
    where?: SourceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceTypes to fetch.
     */
    orderBy?: SourceTypeOrderByWithRelationInput | SourceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceTypes.
     */
    cursor?: SourceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceTypes.
     */
    distinct?: SourceTypeScalarFieldEnum | SourceTypeScalarFieldEnum[]
  }

  /**
   * SourceType findFirstOrThrow
   */
  export type SourceTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceType
     */
    select?: SourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceType
     */
    omit?: SourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which SourceType to fetch.
     */
    where?: SourceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceTypes to fetch.
     */
    orderBy?: SourceTypeOrderByWithRelationInput | SourceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceTypes.
     */
    cursor?: SourceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceTypes.
     */
    distinct?: SourceTypeScalarFieldEnum | SourceTypeScalarFieldEnum[]
  }

  /**
   * SourceType findMany
   */
  export type SourceTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceType
     */
    select?: SourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceType
     */
    omit?: SourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which SourceTypes to fetch.
     */
    where?: SourceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceTypes to fetch.
     */
    orderBy?: SourceTypeOrderByWithRelationInput | SourceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SourceTypes.
     */
    cursor?: SourceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceTypes.
     */
    skip?: number
    distinct?: SourceTypeScalarFieldEnum | SourceTypeScalarFieldEnum[]
  }

  /**
   * SourceType create
   */
  export type SourceTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceType
     */
    select?: SourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceType
     */
    omit?: SourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a SourceType.
     */
    data: XOR<SourceTypeCreateInput, SourceTypeUncheckedCreateInput>
  }

  /**
   * SourceType createMany
   */
  export type SourceTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SourceTypes.
     */
    data: SourceTypeCreateManyInput | SourceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourceType createManyAndReturn
   */
  export type SourceTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceType
     */
    select?: SourceTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceType
     */
    omit?: SourceTypeOmit<ExtArgs> | null
    /**
     * The data used to create many SourceTypes.
     */
    data: SourceTypeCreateManyInput | SourceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourceType update
   */
  export type SourceTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceType
     */
    select?: SourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceType
     */
    omit?: SourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a SourceType.
     */
    data: XOR<SourceTypeUpdateInput, SourceTypeUncheckedUpdateInput>
    /**
     * Choose, which SourceType to update.
     */
    where: SourceTypeWhereUniqueInput
  }

  /**
   * SourceType updateMany
   */
  export type SourceTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SourceTypes.
     */
    data: XOR<SourceTypeUpdateManyMutationInput, SourceTypeUncheckedUpdateManyInput>
    /**
     * Filter which SourceTypes to update
     */
    where?: SourceTypeWhereInput
    /**
     * Limit how many SourceTypes to update.
     */
    limit?: number
  }

  /**
   * SourceType updateManyAndReturn
   */
  export type SourceTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceType
     */
    select?: SourceTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceType
     */
    omit?: SourceTypeOmit<ExtArgs> | null
    /**
     * The data used to update SourceTypes.
     */
    data: XOR<SourceTypeUpdateManyMutationInput, SourceTypeUncheckedUpdateManyInput>
    /**
     * Filter which SourceTypes to update
     */
    where?: SourceTypeWhereInput
    /**
     * Limit how many SourceTypes to update.
     */
    limit?: number
  }

  /**
   * SourceType upsert
   */
  export type SourceTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceType
     */
    select?: SourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceType
     */
    omit?: SourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the SourceType to update in case it exists.
     */
    where: SourceTypeWhereUniqueInput
    /**
     * In case the SourceType found by the `where` argument doesn't exist, create a new SourceType with this data.
     */
    create: XOR<SourceTypeCreateInput, SourceTypeUncheckedCreateInput>
    /**
     * In case the SourceType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceTypeUpdateInput, SourceTypeUncheckedUpdateInput>
  }

  /**
   * SourceType delete
   */
  export type SourceTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceType
     */
    select?: SourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceType
     */
    omit?: SourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTypeInclude<ExtArgs> | null
    /**
     * Filter which SourceType to delete.
     */
    where: SourceTypeWhereUniqueInput
  }

  /**
   * SourceType deleteMany
   */
  export type SourceTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceTypes to delete
     */
    where?: SourceTypeWhereInput
    /**
     * Limit how many SourceTypes to delete.
     */
    limit?: number
  }

  /**
   * SourceType.skillEvents
   */
  export type SourceType$skillEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventInclude<ExtArgs> | null
    where?: SkillEventWhereInput
    orderBy?: SkillEventOrderByWithRelationInput | SkillEventOrderByWithRelationInput[]
    cursor?: SkillEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillEventScalarFieldEnum | SkillEventScalarFieldEnum[]
  }

  /**
   * SourceType without action
   */
  export type SourceTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceType
     */
    select?: SourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceType
     */
    omit?: SourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTypeInclude<ExtArgs> | null
  }


  /**
   * Model SkillEvent
   */

  export type AggregateSkillEvent = {
    _count: SkillEventCountAggregateOutputType | null
    _avg: SkillEventAvgAggregateOutputType | null
    _sum: SkillEventSumAggregateOutputType | null
    _min: SkillEventMinAggregateOutputType | null
    _max: SkillEventMaxAggregateOutputType | null
  }

  export type SkillEventAvgAggregateOutputType = {
    userId: number | null
  }

  export type SkillEventSumAggregateOutputType = {
    userId: number | null
  }

  export type SkillEventMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: number | null
    skillId: string | null
    skillEventTypeId: string | null
    sourceId: string | null
    sourceTypeId: string | null
    createdAt: Date | null
  }

  export type SkillEventMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: number | null
    skillId: string | null
    skillEventTypeId: string | null
    sourceId: string | null
    sourceTypeId: string | null
    createdAt: Date | null
  }

  export type SkillEventCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    skillId: number
    skillEventTypeId: number
    sourceId: number
    sourceTypeId: number
    createdAt: number
    _all: number
  }


  export type SkillEventAvgAggregateInputType = {
    userId?: true
  }

  export type SkillEventSumAggregateInputType = {
    userId?: true
  }

  export type SkillEventMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    skillId?: true
    skillEventTypeId?: true
    sourceId?: true
    sourceTypeId?: true
    createdAt?: true
  }

  export type SkillEventMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    skillId?: true
    skillEventTypeId?: true
    sourceId?: true
    sourceTypeId?: true
    createdAt?: true
  }

  export type SkillEventCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    skillId?: true
    skillEventTypeId?: true
    sourceId?: true
    sourceTypeId?: true
    createdAt?: true
    _all?: true
  }

  export type SkillEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillEvent to aggregate.
     */
    where?: SkillEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillEvents to fetch.
     */
    orderBy?: SkillEventOrderByWithRelationInput | SkillEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillEvents
    **/
    _count?: true | SkillEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillEventMaxAggregateInputType
  }

  export type GetSkillEventAggregateType<T extends SkillEventAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillEvent[P]>
      : GetScalarType<T[P], AggregateSkillEvent[P]>
  }




  export type SkillEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillEventWhereInput
    orderBy?: SkillEventOrderByWithAggregationInput | SkillEventOrderByWithAggregationInput[]
    by: SkillEventScalarFieldEnum[] | SkillEventScalarFieldEnum
    having?: SkillEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillEventCountAggregateInputType | true
    _avg?: SkillEventAvgAggregateInputType
    _sum?: SkillEventSumAggregateInputType
    _min?: SkillEventMinAggregateInputType
    _max?: SkillEventMaxAggregateInputType
  }

  export type SkillEventGroupByOutputType = {
    id: string
    eventId: string
    userId: number
    skillId: string
    skillEventTypeId: string
    sourceId: string
    sourceTypeId: string
    createdAt: Date
    _count: SkillEventCountAggregateOutputType | null
    _avg: SkillEventAvgAggregateOutputType | null
    _sum: SkillEventSumAggregateOutputType | null
    _min: SkillEventMinAggregateOutputType | null
    _max: SkillEventMaxAggregateOutputType | null
  }

  type GetSkillEventGroupByPayload<T extends SkillEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillEventGroupByOutputType[P]>
            : GetScalarType<T[P], SkillEventGroupByOutputType[P]>
        }
      >
    >


  export type SkillEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    skillId?: boolean
    skillEventTypeId?: boolean
    sourceId?: boolean
    sourceTypeId?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    skillEventType?: boolean | SkillEventTypeDefaultArgs<ExtArgs>
    sourceType?: boolean | SourceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillEvent"]>

  export type SkillEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    skillId?: boolean
    skillEventTypeId?: boolean
    sourceId?: boolean
    sourceTypeId?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    skillEventType?: boolean | SkillEventTypeDefaultArgs<ExtArgs>
    sourceType?: boolean | SourceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillEvent"]>

  export type SkillEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    skillId?: boolean
    skillEventTypeId?: boolean
    sourceId?: boolean
    sourceTypeId?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    skillEventType?: boolean | SkillEventTypeDefaultArgs<ExtArgs>
    sourceType?: boolean | SourceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillEvent"]>

  export type SkillEventSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
    skillId?: boolean
    skillEventTypeId?: boolean
    sourceId?: boolean
    sourceTypeId?: boolean
    createdAt?: boolean
  }

  export type SkillEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "userId" | "skillId" | "skillEventTypeId" | "sourceId" | "sourceTypeId" | "createdAt", ExtArgs["result"]["skillEvent"]>
  export type SkillEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    skillEventType?: boolean | SkillEventTypeDefaultArgs<ExtArgs>
    sourceType?: boolean | SourceTypeDefaultArgs<ExtArgs>
  }
  export type SkillEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    skillEventType?: boolean | SkillEventTypeDefaultArgs<ExtArgs>
    sourceType?: boolean | SourceTypeDefaultArgs<ExtArgs>
  }
  export type SkillEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    skillEventType?: boolean | SkillEventTypeDefaultArgs<ExtArgs>
    sourceType?: boolean | SourceTypeDefaultArgs<ExtArgs>
  }

  export type $SkillEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillEvent"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
      skillEventType: Prisma.$SkillEventTypePayload<ExtArgs>
      sourceType: Prisma.$SourceTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      userId: number
      skillId: string
      skillEventTypeId: string
      sourceId: string
      sourceTypeId: string
      createdAt: Date
    }, ExtArgs["result"]["skillEvent"]>
    composites: {}
  }

  type SkillEventGetPayload<S extends boolean | null | undefined | SkillEventDefaultArgs> = $Result.GetResult<Prisma.$SkillEventPayload, S>

  type SkillEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillEventCountAggregateInputType | true
    }

  export interface SkillEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillEvent'], meta: { name: 'SkillEvent' } }
    /**
     * Find zero or one SkillEvent that matches the filter.
     * @param {SkillEventFindUniqueArgs} args - Arguments to find a SkillEvent
     * @example
     * // Get one SkillEvent
     * const skillEvent = await prisma.skillEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillEventFindUniqueArgs>(args: SelectSubset<T, SkillEventFindUniqueArgs<ExtArgs>>): Prisma__SkillEventClient<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillEventFindUniqueOrThrowArgs} args - Arguments to find a SkillEvent
     * @example
     * // Get one SkillEvent
     * const skillEvent = await prisma.skillEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillEventFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillEventClient<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillEventFindFirstArgs} args - Arguments to find a SkillEvent
     * @example
     * // Get one SkillEvent
     * const skillEvent = await prisma.skillEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillEventFindFirstArgs>(args?: SelectSubset<T, SkillEventFindFirstArgs<ExtArgs>>): Prisma__SkillEventClient<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillEventFindFirstOrThrowArgs} args - Arguments to find a SkillEvent
     * @example
     * // Get one SkillEvent
     * const skillEvent = await prisma.skillEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillEventFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillEventClient<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillEvents
     * const skillEvents = await prisma.skillEvent.findMany()
     * 
     * // Get first 10 SkillEvents
     * const skillEvents = await prisma.skillEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillEventWithIdOnly = await prisma.skillEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillEventFindManyArgs>(args?: SelectSubset<T, SkillEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillEvent.
     * @param {SkillEventCreateArgs} args - Arguments to create a SkillEvent.
     * @example
     * // Create one SkillEvent
     * const SkillEvent = await prisma.skillEvent.create({
     *   data: {
     *     // ... data to create a SkillEvent
     *   }
     * })
     * 
     */
    create<T extends SkillEventCreateArgs>(args: SelectSubset<T, SkillEventCreateArgs<ExtArgs>>): Prisma__SkillEventClient<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillEvents.
     * @param {SkillEventCreateManyArgs} args - Arguments to create many SkillEvents.
     * @example
     * // Create many SkillEvents
     * const skillEvent = await prisma.skillEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillEventCreateManyArgs>(args?: SelectSubset<T, SkillEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillEvents and returns the data saved in the database.
     * @param {SkillEventCreateManyAndReturnArgs} args - Arguments to create many SkillEvents.
     * @example
     * // Create many SkillEvents
     * const skillEvent = await prisma.skillEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillEvents and only return the `id`
     * const skillEventWithIdOnly = await prisma.skillEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillEventCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillEvent.
     * @param {SkillEventDeleteArgs} args - Arguments to delete one SkillEvent.
     * @example
     * // Delete one SkillEvent
     * const SkillEvent = await prisma.skillEvent.delete({
     *   where: {
     *     // ... filter to delete one SkillEvent
     *   }
     * })
     * 
     */
    delete<T extends SkillEventDeleteArgs>(args: SelectSubset<T, SkillEventDeleteArgs<ExtArgs>>): Prisma__SkillEventClient<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillEvent.
     * @param {SkillEventUpdateArgs} args - Arguments to update one SkillEvent.
     * @example
     * // Update one SkillEvent
     * const skillEvent = await prisma.skillEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillEventUpdateArgs>(args: SelectSubset<T, SkillEventUpdateArgs<ExtArgs>>): Prisma__SkillEventClient<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillEvents.
     * @param {SkillEventDeleteManyArgs} args - Arguments to filter SkillEvents to delete.
     * @example
     * // Delete a few SkillEvents
     * const { count } = await prisma.skillEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillEventDeleteManyArgs>(args?: SelectSubset<T, SkillEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillEvents
     * const skillEvent = await prisma.skillEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillEventUpdateManyArgs>(args: SelectSubset<T, SkillEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillEvents and returns the data updated in the database.
     * @param {SkillEventUpdateManyAndReturnArgs} args - Arguments to update many SkillEvents.
     * @example
     * // Update many SkillEvents
     * const skillEvent = await prisma.skillEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillEvents and only return the `id`
     * const skillEventWithIdOnly = await prisma.skillEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillEventUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillEvent.
     * @param {SkillEventUpsertArgs} args - Arguments to update or create a SkillEvent.
     * @example
     * // Update or create a SkillEvent
     * const skillEvent = await prisma.skillEvent.upsert({
     *   create: {
     *     // ... data to create a SkillEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillEvent we want to update
     *   }
     * })
     */
    upsert<T extends SkillEventUpsertArgs>(args: SelectSubset<T, SkillEventUpsertArgs<ExtArgs>>): Prisma__SkillEventClient<$Result.GetResult<Prisma.$SkillEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillEventCountArgs} args - Arguments to filter SkillEvents to count.
     * @example
     * // Count the number of SkillEvents
     * const count = await prisma.skillEvent.count({
     *   where: {
     *     // ... the filter for the SkillEvents we want to count
     *   }
     * })
    **/
    count<T extends SkillEventCountArgs>(
      args?: Subset<T, SkillEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillEventAggregateArgs>(args: Subset<T, SkillEventAggregateArgs>): Prisma.PrismaPromise<GetSkillEventAggregateType<T>>

    /**
     * Group by SkillEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillEventGroupByArgs} args - Group by arguments.
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
      T extends SkillEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillEventGroupByArgs['orderBy'] }
        : { orderBy?: SkillEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillEvent model
   */
  readonly fields: SkillEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skillEventType<T extends SkillEventTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillEventTypeDefaultArgs<ExtArgs>>): Prisma__SkillEventTypeClient<$Result.GetResult<Prisma.$SkillEventTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sourceType<T extends SourceTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SourceTypeDefaultArgs<ExtArgs>>): Prisma__SourceTypeClient<$Result.GetResult<Prisma.$SourceTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SkillEvent model
   */
  interface SkillEventFieldRefs {
    readonly id: FieldRef<"SkillEvent", 'String'>
    readonly eventId: FieldRef<"SkillEvent", 'String'>
    readonly userId: FieldRef<"SkillEvent", 'Int'>
    readonly skillId: FieldRef<"SkillEvent", 'String'>
    readonly skillEventTypeId: FieldRef<"SkillEvent", 'String'>
    readonly sourceId: FieldRef<"SkillEvent", 'String'>
    readonly sourceTypeId: FieldRef<"SkillEvent", 'String'>
    readonly createdAt: FieldRef<"SkillEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SkillEvent findUnique
   */
  export type SkillEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventInclude<ExtArgs> | null
    /**
     * Filter, which SkillEvent to fetch.
     */
    where: SkillEventWhereUniqueInput
  }

  /**
   * SkillEvent findUniqueOrThrow
   */
  export type SkillEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventInclude<ExtArgs> | null
    /**
     * Filter, which SkillEvent to fetch.
     */
    where: SkillEventWhereUniqueInput
  }

  /**
   * SkillEvent findFirst
   */
  export type SkillEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventInclude<ExtArgs> | null
    /**
     * Filter, which SkillEvent to fetch.
     */
    where?: SkillEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillEvents to fetch.
     */
    orderBy?: SkillEventOrderByWithRelationInput | SkillEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillEvents.
     */
    cursor?: SkillEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillEvents.
     */
    distinct?: SkillEventScalarFieldEnum | SkillEventScalarFieldEnum[]
  }

  /**
   * SkillEvent findFirstOrThrow
   */
  export type SkillEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventInclude<ExtArgs> | null
    /**
     * Filter, which SkillEvent to fetch.
     */
    where?: SkillEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillEvents to fetch.
     */
    orderBy?: SkillEventOrderByWithRelationInput | SkillEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillEvents.
     */
    cursor?: SkillEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillEvents.
     */
    distinct?: SkillEventScalarFieldEnum | SkillEventScalarFieldEnum[]
  }

  /**
   * SkillEvent findMany
   */
  export type SkillEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventInclude<ExtArgs> | null
    /**
     * Filter, which SkillEvents to fetch.
     */
    where?: SkillEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillEvents to fetch.
     */
    orderBy?: SkillEventOrderByWithRelationInput | SkillEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillEvents.
     */
    cursor?: SkillEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillEvents.
     */
    skip?: number
    distinct?: SkillEventScalarFieldEnum | SkillEventScalarFieldEnum[]
  }

  /**
   * SkillEvent create
   */
  export type SkillEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillEvent.
     */
    data: XOR<SkillEventCreateInput, SkillEventUncheckedCreateInput>
  }

  /**
   * SkillEvent createMany
   */
  export type SkillEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillEvents.
     */
    data: SkillEventCreateManyInput | SkillEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillEvent createManyAndReturn
   */
  export type SkillEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * The data used to create many SkillEvents.
     */
    data: SkillEventCreateManyInput | SkillEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillEvent update
   */
  export type SkillEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillEvent.
     */
    data: XOR<SkillEventUpdateInput, SkillEventUncheckedUpdateInput>
    /**
     * Choose, which SkillEvent to update.
     */
    where: SkillEventWhereUniqueInput
  }

  /**
   * SkillEvent updateMany
   */
  export type SkillEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillEvents.
     */
    data: XOR<SkillEventUpdateManyMutationInput, SkillEventUncheckedUpdateManyInput>
    /**
     * Filter which SkillEvents to update
     */
    where?: SkillEventWhereInput
    /**
     * Limit how many SkillEvents to update.
     */
    limit?: number
  }

  /**
   * SkillEvent updateManyAndReturn
   */
  export type SkillEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * The data used to update SkillEvents.
     */
    data: XOR<SkillEventUpdateManyMutationInput, SkillEventUncheckedUpdateManyInput>
    /**
     * Filter which SkillEvents to update
     */
    where?: SkillEventWhereInput
    /**
     * Limit how many SkillEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillEvent upsert
   */
  export type SkillEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillEvent to update in case it exists.
     */
    where: SkillEventWhereUniqueInput
    /**
     * In case the SkillEvent found by the `where` argument doesn't exist, create a new SkillEvent with this data.
     */
    create: XOR<SkillEventCreateInput, SkillEventUncheckedCreateInput>
    /**
     * In case the SkillEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillEventUpdateInput, SkillEventUncheckedUpdateInput>
  }

  /**
   * SkillEvent delete
   */
  export type SkillEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventInclude<ExtArgs> | null
    /**
     * Filter which SkillEvent to delete.
     */
    where: SkillEventWhereUniqueInput
  }

  /**
   * SkillEvent deleteMany
   */
  export type SkillEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillEvents to delete
     */
    where?: SkillEventWhereInput
    /**
     * Limit how many SkillEvents to delete.
     */
    limit?: number
  }

  /**
   * SkillEvent without action
   */
  export type SkillEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillEvent
     */
    select?: SkillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillEvent
     */
    omit?: SkillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillEventInclude<ExtArgs> | null
  }


  /**
   * Model UserSkillLevel
   */

  export type AggregateUserSkillLevel = {
    _count: UserSkillLevelCountAggregateOutputType | null
    _min: UserSkillLevelMinAggregateOutputType | null
    _max: UserSkillLevelMaxAggregateOutputType | null
  }

  export type UserSkillLevelMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillLevelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillLevelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSkillLevelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillLevelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillLevelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSkillLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkillLevel to aggregate.
     */
    where?: UserSkillLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillLevels to fetch.
     */
    orderBy?: UserSkillLevelOrderByWithRelationInput | UserSkillLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSkillLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSkillLevels
    **/
    _count?: true | UserSkillLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSkillLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSkillLevelMaxAggregateInputType
  }

  export type GetUserSkillLevelAggregateType<T extends UserSkillLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSkillLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSkillLevel[P]>
      : GetScalarType<T[P], AggregateUserSkillLevel[P]>
  }




  export type UserSkillLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillLevelWhereInput
    orderBy?: UserSkillLevelOrderByWithAggregationInput | UserSkillLevelOrderByWithAggregationInput[]
    by: UserSkillLevelScalarFieldEnum[] | UserSkillLevelScalarFieldEnum
    having?: UserSkillLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSkillLevelCountAggregateInputType | true
    _min?: UserSkillLevelMinAggregateInputType
    _max?: UserSkillLevelMaxAggregateInputType
  }

  export type UserSkillLevelGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserSkillLevelCountAggregateOutputType | null
    _min: UserSkillLevelMinAggregateOutputType | null
    _max: UserSkillLevelMaxAggregateOutputType | null
  }

  type GetUserSkillLevelGroupByPayload<T extends UserSkillLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSkillLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSkillLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSkillLevelGroupByOutputType[P]>
            : GetScalarType<T[P], UserSkillLevelGroupByOutputType[P]>
        }
      >
    >


  export type UserSkillLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSkills?: boolean | UserSkillLevel$userSkillsArgs<ExtArgs>
    _count?: boolean | UserSkillLevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkillLevel"]>

  export type UserSkillLevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSkillLevel"]>

  export type UserSkillLevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSkillLevel"]>

  export type UserSkillLevelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSkillLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["userSkillLevel"]>
  export type UserSkillLevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSkills?: boolean | UserSkillLevel$userSkillsArgs<ExtArgs>
    _count?: boolean | UserSkillLevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserSkillLevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserSkillLevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserSkillLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSkillLevel"
    objects: {
      userSkills: Prisma.$UserSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSkillLevel"]>
    composites: {}
  }

  type UserSkillLevelGetPayload<S extends boolean | null | undefined | UserSkillLevelDefaultArgs> = $Result.GetResult<Prisma.$UserSkillLevelPayload, S>

  type UserSkillLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSkillLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillLevelCountAggregateInputType | true
    }

  export interface UserSkillLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSkillLevel'], meta: { name: 'UserSkillLevel' } }
    /**
     * Find zero or one UserSkillLevel that matches the filter.
     * @param {UserSkillLevelFindUniqueArgs} args - Arguments to find a UserSkillLevel
     * @example
     * // Get one UserSkillLevel
     * const userSkillLevel = await prisma.userSkillLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSkillLevelFindUniqueArgs>(args: SelectSubset<T, UserSkillLevelFindUniqueArgs<ExtArgs>>): Prisma__UserSkillLevelClient<$Result.GetResult<Prisma.$UserSkillLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSkillLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSkillLevelFindUniqueOrThrowArgs} args - Arguments to find a UserSkillLevel
     * @example
     * // Get one UserSkillLevel
     * const userSkillLevel = await prisma.userSkillLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSkillLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSkillLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSkillLevelClient<$Result.GetResult<Prisma.$UserSkillLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkillLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillLevelFindFirstArgs} args - Arguments to find a UserSkillLevel
     * @example
     * // Get one UserSkillLevel
     * const userSkillLevel = await prisma.userSkillLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSkillLevelFindFirstArgs>(args?: SelectSubset<T, UserSkillLevelFindFirstArgs<ExtArgs>>): Prisma__UserSkillLevelClient<$Result.GetResult<Prisma.$UserSkillLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkillLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillLevelFindFirstOrThrowArgs} args - Arguments to find a UserSkillLevel
     * @example
     * // Get one UserSkillLevel
     * const userSkillLevel = await prisma.userSkillLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSkillLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSkillLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSkillLevelClient<$Result.GetResult<Prisma.$UserSkillLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSkillLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSkillLevels
     * const userSkillLevels = await prisma.userSkillLevel.findMany()
     * 
     * // Get first 10 UserSkillLevels
     * const userSkillLevels = await prisma.userSkillLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSkillLevelWithIdOnly = await prisma.userSkillLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSkillLevelFindManyArgs>(args?: SelectSubset<T, UserSkillLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSkillLevel.
     * @param {UserSkillLevelCreateArgs} args - Arguments to create a UserSkillLevel.
     * @example
     * // Create one UserSkillLevel
     * const UserSkillLevel = await prisma.userSkillLevel.create({
     *   data: {
     *     // ... data to create a UserSkillLevel
     *   }
     * })
     * 
     */
    create<T extends UserSkillLevelCreateArgs>(args: SelectSubset<T, UserSkillLevelCreateArgs<ExtArgs>>): Prisma__UserSkillLevelClient<$Result.GetResult<Prisma.$UserSkillLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSkillLevels.
     * @param {UserSkillLevelCreateManyArgs} args - Arguments to create many UserSkillLevels.
     * @example
     * // Create many UserSkillLevels
     * const userSkillLevel = await prisma.userSkillLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSkillLevelCreateManyArgs>(args?: SelectSubset<T, UserSkillLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSkillLevels and returns the data saved in the database.
     * @param {UserSkillLevelCreateManyAndReturnArgs} args - Arguments to create many UserSkillLevels.
     * @example
     * // Create many UserSkillLevels
     * const userSkillLevel = await prisma.userSkillLevel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSkillLevels and only return the `id`
     * const userSkillLevelWithIdOnly = await prisma.userSkillLevel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSkillLevelCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSkillLevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillLevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSkillLevel.
     * @param {UserSkillLevelDeleteArgs} args - Arguments to delete one UserSkillLevel.
     * @example
     * // Delete one UserSkillLevel
     * const UserSkillLevel = await prisma.userSkillLevel.delete({
     *   where: {
     *     // ... filter to delete one UserSkillLevel
     *   }
     * })
     * 
     */
    delete<T extends UserSkillLevelDeleteArgs>(args: SelectSubset<T, UserSkillLevelDeleteArgs<ExtArgs>>): Prisma__UserSkillLevelClient<$Result.GetResult<Prisma.$UserSkillLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSkillLevel.
     * @param {UserSkillLevelUpdateArgs} args - Arguments to update one UserSkillLevel.
     * @example
     * // Update one UserSkillLevel
     * const userSkillLevel = await prisma.userSkillLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSkillLevelUpdateArgs>(args: SelectSubset<T, UserSkillLevelUpdateArgs<ExtArgs>>): Prisma__UserSkillLevelClient<$Result.GetResult<Prisma.$UserSkillLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSkillLevels.
     * @param {UserSkillLevelDeleteManyArgs} args - Arguments to filter UserSkillLevels to delete.
     * @example
     * // Delete a few UserSkillLevels
     * const { count } = await prisma.userSkillLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSkillLevelDeleteManyArgs>(args?: SelectSubset<T, UserSkillLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkillLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSkillLevels
     * const userSkillLevel = await prisma.userSkillLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSkillLevelUpdateManyArgs>(args: SelectSubset<T, UserSkillLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkillLevels and returns the data updated in the database.
     * @param {UserSkillLevelUpdateManyAndReturnArgs} args - Arguments to update many UserSkillLevels.
     * @example
     * // Update many UserSkillLevels
     * const userSkillLevel = await prisma.userSkillLevel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSkillLevels and only return the `id`
     * const userSkillLevelWithIdOnly = await prisma.userSkillLevel.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSkillLevelUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSkillLevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillLevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSkillLevel.
     * @param {UserSkillLevelUpsertArgs} args - Arguments to update or create a UserSkillLevel.
     * @example
     * // Update or create a UserSkillLevel
     * const userSkillLevel = await prisma.userSkillLevel.upsert({
     *   create: {
     *     // ... data to create a UserSkillLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSkillLevel we want to update
     *   }
     * })
     */
    upsert<T extends UserSkillLevelUpsertArgs>(args: SelectSubset<T, UserSkillLevelUpsertArgs<ExtArgs>>): Prisma__UserSkillLevelClient<$Result.GetResult<Prisma.$UserSkillLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSkillLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillLevelCountArgs} args - Arguments to filter UserSkillLevels to count.
     * @example
     * // Count the number of UserSkillLevels
     * const count = await prisma.userSkillLevel.count({
     *   where: {
     *     // ... the filter for the UserSkillLevels we want to count
     *   }
     * })
    **/
    count<T extends UserSkillLevelCountArgs>(
      args?: Subset<T, UserSkillLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSkillLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSkillLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSkillLevelAggregateArgs>(args: Subset<T, UserSkillLevelAggregateArgs>): Prisma.PrismaPromise<GetUserSkillLevelAggregateType<T>>

    /**
     * Group by UserSkillLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillLevelGroupByArgs} args - Group by arguments.
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
      T extends UserSkillLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSkillLevelGroupByArgs['orderBy'] }
        : { orderBy?: UserSkillLevelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSkillLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSkillLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSkillLevel model
   */
  readonly fields: UserSkillLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSkillLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSkillLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userSkills<T extends UserSkillLevel$userSkillsArgs<ExtArgs> = {}>(args?: Subset<T, UserSkillLevel$userSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserSkillLevel model
   */
  interface UserSkillLevelFieldRefs {
    readonly id: FieldRef<"UserSkillLevel", 'String'>
    readonly name: FieldRef<"UserSkillLevel", 'String'>
    readonly description: FieldRef<"UserSkillLevel", 'String'>
    readonly createdAt: FieldRef<"UserSkillLevel", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSkillLevel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSkillLevel findUnique
   */
  export type UserSkillLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillLevel
     */
    select?: UserSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillLevel
     */
    omit?: UserSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillLevelInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillLevel to fetch.
     */
    where: UserSkillLevelWhereUniqueInput
  }

  /**
   * UserSkillLevel findUniqueOrThrow
   */
  export type UserSkillLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillLevel
     */
    select?: UserSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillLevel
     */
    omit?: UserSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillLevelInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillLevel to fetch.
     */
    where: UserSkillLevelWhereUniqueInput
  }

  /**
   * UserSkillLevel findFirst
   */
  export type UserSkillLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillLevel
     */
    select?: UserSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillLevel
     */
    omit?: UserSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillLevelInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillLevel to fetch.
     */
    where?: UserSkillLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillLevels to fetch.
     */
    orderBy?: UserSkillLevelOrderByWithRelationInput | UserSkillLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkillLevels.
     */
    cursor?: UserSkillLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkillLevels.
     */
    distinct?: UserSkillLevelScalarFieldEnum | UserSkillLevelScalarFieldEnum[]
  }

  /**
   * UserSkillLevel findFirstOrThrow
   */
  export type UserSkillLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillLevel
     */
    select?: UserSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillLevel
     */
    omit?: UserSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillLevelInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillLevel to fetch.
     */
    where?: UserSkillLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillLevels to fetch.
     */
    orderBy?: UserSkillLevelOrderByWithRelationInput | UserSkillLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkillLevels.
     */
    cursor?: UserSkillLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkillLevels.
     */
    distinct?: UserSkillLevelScalarFieldEnum | UserSkillLevelScalarFieldEnum[]
  }

  /**
   * UserSkillLevel findMany
   */
  export type UserSkillLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillLevel
     */
    select?: UserSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillLevel
     */
    omit?: UserSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillLevelInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillLevels to fetch.
     */
    where?: UserSkillLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillLevels to fetch.
     */
    orderBy?: UserSkillLevelOrderByWithRelationInput | UserSkillLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSkillLevels.
     */
    cursor?: UserSkillLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillLevels.
     */
    skip?: number
    distinct?: UserSkillLevelScalarFieldEnum | UserSkillLevelScalarFieldEnum[]
  }

  /**
   * UserSkillLevel create
   */
  export type UserSkillLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillLevel
     */
    select?: UserSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillLevel
     */
    omit?: UserSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillLevelInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSkillLevel.
     */
    data: XOR<UserSkillLevelCreateInput, UserSkillLevelUncheckedCreateInput>
  }

  /**
   * UserSkillLevel createMany
   */
  export type UserSkillLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSkillLevels.
     */
    data: UserSkillLevelCreateManyInput | UserSkillLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSkillLevel createManyAndReturn
   */
  export type UserSkillLevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillLevel
     */
    select?: UserSkillLevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillLevel
     */
    omit?: UserSkillLevelOmit<ExtArgs> | null
    /**
     * The data used to create many UserSkillLevels.
     */
    data: UserSkillLevelCreateManyInput | UserSkillLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSkillLevel update
   */
  export type UserSkillLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillLevel
     */
    select?: UserSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillLevel
     */
    omit?: UserSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillLevelInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSkillLevel.
     */
    data: XOR<UserSkillLevelUpdateInput, UserSkillLevelUncheckedUpdateInput>
    /**
     * Choose, which UserSkillLevel to update.
     */
    where: UserSkillLevelWhereUniqueInput
  }

  /**
   * UserSkillLevel updateMany
   */
  export type UserSkillLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSkillLevels.
     */
    data: XOR<UserSkillLevelUpdateManyMutationInput, UserSkillLevelUncheckedUpdateManyInput>
    /**
     * Filter which UserSkillLevels to update
     */
    where?: UserSkillLevelWhereInput
    /**
     * Limit how many UserSkillLevels to update.
     */
    limit?: number
  }

  /**
   * UserSkillLevel updateManyAndReturn
   */
  export type UserSkillLevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillLevel
     */
    select?: UserSkillLevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillLevel
     */
    omit?: UserSkillLevelOmit<ExtArgs> | null
    /**
     * The data used to update UserSkillLevels.
     */
    data: XOR<UserSkillLevelUpdateManyMutationInput, UserSkillLevelUncheckedUpdateManyInput>
    /**
     * Filter which UserSkillLevels to update
     */
    where?: UserSkillLevelWhereInput
    /**
     * Limit how many UserSkillLevels to update.
     */
    limit?: number
  }

  /**
   * UserSkillLevel upsert
   */
  export type UserSkillLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillLevel
     */
    select?: UserSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillLevel
     */
    omit?: UserSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillLevelInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSkillLevel to update in case it exists.
     */
    where: UserSkillLevelWhereUniqueInput
    /**
     * In case the UserSkillLevel found by the `where` argument doesn't exist, create a new UserSkillLevel with this data.
     */
    create: XOR<UserSkillLevelCreateInput, UserSkillLevelUncheckedCreateInput>
    /**
     * In case the UserSkillLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSkillLevelUpdateInput, UserSkillLevelUncheckedUpdateInput>
  }

  /**
   * UserSkillLevel delete
   */
  export type UserSkillLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillLevel
     */
    select?: UserSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillLevel
     */
    omit?: UserSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillLevelInclude<ExtArgs> | null
    /**
     * Filter which UserSkillLevel to delete.
     */
    where: UserSkillLevelWhereUniqueInput
  }

  /**
   * UserSkillLevel deleteMany
   */
  export type UserSkillLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkillLevels to delete
     */
    where?: UserSkillLevelWhereInput
    /**
     * Limit how many UserSkillLevels to delete.
     */
    limit?: number
  }

  /**
   * UserSkillLevel.userSkills
   */
  export type UserSkillLevel$userSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    cursor?: UserSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkillLevel without action
   */
  export type UserSkillLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillLevel
     */
    select?: UserSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillLevel
     */
    omit?: UserSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillLevelInclude<ExtArgs> | null
  }


  /**
   * Model UserSkillDisplayMode
   */

  export type AggregateUserSkillDisplayMode = {
    _count: UserSkillDisplayModeCountAggregateOutputType | null
    _min: UserSkillDisplayModeMinAggregateOutputType | null
    _max: UserSkillDisplayModeMaxAggregateOutputType | null
  }

  export type UserSkillDisplayModeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillDisplayModeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillDisplayModeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSkillDisplayModeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillDisplayModeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillDisplayModeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSkillDisplayModeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkillDisplayMode to aggregate.
     */
    where?: UserSkillDisplayModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillDisplayModes to fetch.
     */
    orderBy?: UserSkillDisplayModeOrderByWithRelationInput | UserSkillDisplayModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSkillDisplayModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillDisplayModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillDisplayModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSkillDisplayModes
    **/
    _count?: true | UserSkillDisplayModeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSkillDisplayModeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSkillDisplayModeMaxAggregateInputType
  }

  export type GetUserSkillDisplayModeAggregateType<T extends UserSkillDisplayModeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSkillDisplayMode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSkillDisplayMode[P]>
      : GetScalarType<T[P], AggregateUserSkillDisplayMode[P]>
  }




  export type UserSkillDisplayModeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillDisplayModeWhereInput
    orderBy?: UserSkillDisplayModeOrderByWithAggregationInput | UserSkillDisplayModeOrderByWithAggregationInput[]
    by: UserSkillDisplayModeScalarFieldEnum[] | UserSkillDisplayModeScalarFieldEnum
    having?: UserSkillDisplayModeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSkillDisplayModeCountAggregateInputType | true
    _min?: UserSkillDisplayModeMinAggregateInputType
    _max?: UserSkillDisplayModeMaxAggregateInputType
  }

  export type UserSkillDisplayModeGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserSkillDisplayModeCountAggregateOutputType | null
    _min: UserSkillDisplayModeMinAggregateOutputType | null
    _max: UserSkillDisplayModeMaxAggregateOutputType | null
  }

  type GetUserSkillDisplayModeGroupByPayload<T extends UserSkillDisplayModeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSkillDisplayModeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSkillDisplayModeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSkillDisplayModeGroupByOutputType[P]>
            : GetScalarType<T[P], UserSkillDisplayModeGroupByOutputType[P]>
        }
      >
    >


  export type UserSkillDisplayModeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSkills?: boolean | UserSkillDisplayMode$userSkillsArgs<ExtArgs>
    _count?: boolean | UserSkillDisplayModeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkillDisplayMode"]>

  export type UserSkillDisplayModeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSkillDisplayMode"]>

  export type UserSkillDisplayModeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSkillDisplayMode"]>

  export type UserSkillDisplayModeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSkillDisplayModeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["userSkillDisplayMode"]>
  export type UserSkillDisplayModeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSkills?: boolean | UserSkillDisplayMode$userSkillsArgs<ExtArgs>
    _count?: boolean | UserSkillDisplayModeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserSkillDisplayModeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserSkillDisplayModeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserSkillDisplayModePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSkillDisplayMode"
    objects: {
      userSkills: Prisma.$UserSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSkillDisplayMode"]>
    composites: {}
  }

  type UserSkillDisplayModeGetPayload<S extends boolean | null | undefined | UserSkillDisplayModeDefaultArgs> = $Result.GetResult<Prisma.$UserSkillDisplayModePayload, S>

  type UserSkillDisplayModeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSkillDisplayModeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillDisplayModeCountAggregateInputType | true
    }

  export interface UserSkillDisplayModeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSkillDisplayMode'], meta: { name: 'UserSkillDisplayMode' } }
    /**
     * Find zero or one UserSkillDisplayMode that matches the filter.
     * @param {UserSkillDisplayModeFindUniqueArgs} args - Arguments to find a UserSkillDisplayMode
     * @example
     * // Get one UserSkillDisplayMode
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSkillDisplayModeFindUniqueArgs>(args: SelectSubset<T, UserSkillDisplayModeFindUniqueArgs<ExtArgs>>): Prisma__UserSkillDisplayModeClient<$Result.GetResult<Prisma.$UserSkillDisplayModePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSkillDisplayMode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSkillDisplayModeFindUniqueOrThrowArgs} args - Arguments to find a UserSkillDisplayMode
     * @example
     * // Get one UserSkillDisplayMode
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSkillDisplayModeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSkillDisplayModeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSkillDisplayModeClient<$Result.GetResult<Prisma.$UserSkillDisplayModePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkillDisplayMode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillDisplayModeFindFirstArgs} args - Arguments to find a UserSkillDisplayMode
     * @example
     * // Get one UserSkillDisplayMode
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSkillDisplayModeFindFirstArgs>(args?: SelectSubset<T, UserSkillDisplayModeFindFirstArgs<ExtArgs>>): Prisma__UserSkillDisplayModeClient<$Result.GetResult<Prisma.$UserSkillDisplayModePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkillDisplayMode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillDisplayModeFindFirstOrThrowArgs} args - Arguments to find a UserSkillDisplayMode
     * @example
     * // Get one UserSkillDisplayMode
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSkillDisplayModeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSkillDisplayModeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSkillDisplayModeClient<$Result.GetResult<Prisma.$UserSkillDisplayModePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSkillDisplayModes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillDisplayModeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSkillDisplayModes
     * const userSkillDisplayModes = await prisma.userSkillDisplayMode.findMany()
     * 
     * // Get first 10 UserSkillDisplayModes
     * const userSkillDisplayModes = await prisma.userSkillDisplayMode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSkillDisplayModeWithIdOnly = await prisma.userSkillDisplayMode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSkillDisplayModeFindManyArgs>(args?: SelectSubset<T, UserSkillDisplayModeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillDisplayModePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSkillDisplayMode.
     * @param {UserSkillDisplayModeCreateArgs} args - Arguments to create a UserSkillDisplayMode.
     * @example
     * // Create one UserSkillDisplayMode
     * const UserSkillDisplayMode = await prisma.userSkillDisplayMode.create({
     *   data: {
     *     // ... data to create a UserSkillDisplayMode
     *   }
     * })
     * 
     */
    create<T extends UserSkillDisplayModeCreateArgs>(args: SelectSubset<T, UserSkillDisplayModeCreateArgs<ExtArgs>>): Prisma__UserSkillDisplayModeClient<$Result.GetResult<Prisma.$UserSkillDisplayModePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSkillDisplayModes.
     * @param {UserSkillDisplayModeCreateManyArgs} args - Arguments to create many UserSkillDisplayModes.
     * @example
     * // Create many UserSkillDisplayModes
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSkillDisplayModeCreateManyArgs>(args?: SelectSubset<T, UserSkillDisplayModeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSkillDisplayModes and returns the data saved in the database.
     * @param {UserSkillDisplayModeCreateManyAndReturnArgs} args - Arguments to create many UserSkillDisplayModes.
     * @example
     * // Create many UserSkillDisplayModes
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSkillDisplayModes and only return the `id`
     * const userSkillDisplayModeWithIdOnly = await prisma.userSkillDisplayMode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSkillDisplayModeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSkillDisplayModeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillDisplayModePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSkillDisplayMode.
     * @param {UserSkillDisplayModeDeleteArgs} args - Arguments to delete one UserSkillDisplayMode.
     * @example
     * // Delete one UserSkillDisplayMode
     * const UserSkillDisplayMode = await prisma.userSkillDisplayMode.delete({
     *   where: {
     *     // ... filter to delete one UserSkillDisplayMode
     *   }
     * })
     * 
     */
    delete<T extends UserSkillDisplayModeDeleteArgs>(args: SelectSubset<T, UserSkillDisplayModeDeleteArgs<ExtArgs>>): Prisma__UserSkillDisplayModeClient<$Result.GetResult<Prisma.$UserSkillDisplayModePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSkillDisplayMode.
     * @param {UserSkillDisplayModeUpdateArgs} args - Arguments to update one UserSkillDisplayMode.
     * @example
     * // Update one UserSkillDisplayMode
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSkillDisplayModeUpdateArgs>(args: SelectSubset<T, UserSkillDisplayModeUpdateArgs<ExtArgs>>): Prisma__UserSkillDisplayModeClient<$Result.GetResult<Prisma.$UserSkillDisplayModePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSkillDisplayModes.
     * @param {UserSkillDisplayModeDeleteManyArgs} args - Arguments to filter UserSkillDisplayModes to delete.
     * @example
     * // Delete a few UserSkillDisplayModes
     * const { count } = await prisma.userSkillDisplayMode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSkillDisplayModeDeleteManyArgs>(args?: SelectSubset<T, UserSkillDisplayModeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkillDisplayModes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillDisplayModeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSkillDisplayModes
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSkillDisplayModeUpdateManyArgs>(args: SelectSubset<T, UserSkillDisplayModeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkillDisplayModes and returns the data updated in the database.
     * @param {UserSkillDisplayModeUpdateManyAndReturnArgs} args - Arguments to update many UserSkillDisplayModes.
     * @example
     * // Update many UserSkillDisplayModes
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSkillDisplayModes and only return the `id`
     * const userSkillDisplayModeWithIdOnly = await prisma.userSkillDisplayMode.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSkillDisplayModeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSkillDisplayModeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillDisplayModePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSkillDisplayMode.
     * @param {UserSkillDisplayModeUpsertArgs} args - Arguments to update or create a UserSkillDisplayMode.
     * @example
     * // Update or create a UserSkillDisplayMode
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.upsert({
     *   create: {
     *     // ... data to create a UserSkillDisplayMode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSkillDisplayMode we want to update
     *   }
     * })
     */
    upsert<T extends UserSkillDisplayModeUpsertArgs>(args: SelectSubset<T, UserSkillDisplayModeUpsertArgs<ExtArgs>>): Prisma__UserSkillDisplayModeClient<$Result.GetResult<Prisma.$UserSkillDisplayModePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSkillDisplayModes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillDisplayModeCountArgs} args - Arguments to filter UserSkillDisplayModes to count.
     * @example
     * // Count the number of UserSkillDisplayModes
     * const count = await prisma.userSkillDisplayMode.count({
     *   where: {
     *     // ... the filter for the UserSkillDisplayModes we want to count
     *   }
     * })
    **/
    count<T extends UserSkillDisplayModeCountArgs>(
      args?: Subset<T, UserSkillDisplayModeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSkillDisplayModeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSkillDisplayMode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillDisplayModeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSkillDisplayModeAggregateArgs>(args: Subset<T, UserSkillDisplayModeAggregateArgs>): Prisma.PrismaPromise<GetUserSkillDisplayModeAggregateType<T>>

    /**
     * Group by UserSkillDisplayMode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillDisplayModeGroupByArgs} args - Group by arguments.
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
      T extends UserSkillDisplayModeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSkillDisplayModeGroupByArgs['orderBy'] }
        : { orderBy?: UserSkillDisplayModeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSkillDisplayModeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSkillDisplayModeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSkillDisplayMode model
   */
  readonly fields: UserSkillDisplayModeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSkillDisplayMode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSkillDisplayModeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userSkills<T extends UserSkillDisplayMode$userSkillsArgs<ExtArgs> = {}>(args?: Subset<T, UserSkillDisplayMode$userSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserSkillDisplayMode model
   */
  interface UserSkillDisplayModeFieldRefs {
    readonly id: FieldRef<"UserSkillDisplayMode", 'String'>
    readonly name: FieldRef<"UserSkillDisplayMode", 'String'>
    readonly description: FieldRef<"UserSkillDisplayMode", 'String'>
    readonly createdAt: FieldRef<"UserSkillDisplayMode", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSkillDisplayMode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSkillDisplayMode findUnique
   */
  export type UserSkillDisplayModeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillDisplayMode
     */
    select?: UserSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillDisplayMode
     */
    omit?: UserSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillDisplayModeInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillDisplayMode to fetch.
     */
    where: UserSkillDisplayModeWhereUniqueInput
  }

  /**
   * UserSkillDisplayMode findUniqueOrThrow
   */
  export type UserSkillDisplayModeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillDisplayMode
     */
    select?: UserSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillDisplayMode
     */
    omit?: UserSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillDisplayModeInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillDisplayMode to fetch.
     */
    where: UserSkillDisplayModeWhereUniqueInput
  }

  /**
   * UserSkillDisplayMode findFirst
   */
  export type UserSkillDisplayModeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillDisplayMode
     */
    select?: UserSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillDisplayMode
     */
    omit?: UserSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillDisplayModeInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillDisplayMode to fetch.
     */
    where?: UserSkillDisplayModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillDisplayModes to fetch.
     */
    orderBy?: UserSkillDisplayModeOrderByWithRelationInput | UserSkillDisplayModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkillDisplayModes.
     */
    cursor?: UserSkillDisplayModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillDisplayModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillDisplayModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkillDisplayModes.
     */
    distinct?: UserSkillDisplayModeScalarFieldEnum | UserSkillDisplayModeScalarFieldEnum[]
  }

  /**
   * UserSkillDisplayMode findFirstOrThrow
   */
  export type UserSkillDisplayModeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillDisplayMode
     */
    select?: UserSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillDisplayMode
     */
    omit?: UserSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillDisplayModeInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillDisplayMode to fetch.
     */
    where?: UserSkillDisplayModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillDisplayModes to fetch.
     */
    orderBy?: UserSkillDisplayModeOrderByWithRelationInput | UserSkillDisplayModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkillDisplayModes.
     */
    cursor?: UserSkillDisplayModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillDisplayModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillDisplayModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkillDisplayModes.
     */
    distinct?: UserSkillDisplayModeScalarFieldEnum | UserSkillDisplayModeScalarFieldEnum[]
  }

  /**
   * UserSkillDisplayMode findMany
   */
  export type UserSkillDisplayModeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillDisplayMode
     */
    select?: UserSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillDisplayMode
     */
    omit?: UserSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillDisplayModeInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillDisplayModes to fetch.
     */
    where?: UserSkillDisplayModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillDisplayModes to fetch.
     */
    orderBy?: UserSkillDisplayModeOrderByWithRelationInput | UserSkillDisplayModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSkillDisplayModes.
     */
    cursor?: UserSkillDisplayModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillDisplayModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillDisplayModes.
     */
    skip?: number
    distinct?: UserSkillDisplayModeScalarFieldEnum | UserSkillDisplayModeScalarFieldEnum[]
  }

  /**
   * UserSkillDisplayMode create
   */
  export type UserSkillDisplayModeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillDisplayMode
     */
    select?: UserSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillDisplayMode
     */
    omit?: UserSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillDisplayModeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSkillDisplayMode.
     */
    data: XOR<UserSkillDisplayModeCreateInput, UserSkillDisplayModeUncheckedCreateInput>
  }

  /**
   * UserSkillDisplayMode createMany
   */
  export type UserSkillDisplayModeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSkillDisplayModes.
     */
    data: UserSkillDisplayModeCreateManyInput | UserSkillDisplayModeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSkillDisplayMode createManyAndReturn
   */
  export type UserSkillDisplayModeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillDisplayMode
     */
    select?: UserSkillDisplayModeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillDisplayMode
     */
    omit?: UserSkillDisplayModeOmit<ExtArgs> | null
    /**
     * The data used to create many UserSkillDisplayModes.
     */
    data: UserSkillDisplayModeCreateManyInput | UserSkillDisplayModeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSkillDisplayMode update
   */
  export type UserSkillDisplayModeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillDisplayMode
     */
    select?: UserSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillDisplayMode
     */
    omit?: UserSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillDisplayModeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSkillDisplayMode.
     */
    data: XOR<UserSkillDisplayModeUpdateInput, UserSkillDisplayModeUncheckedUpdateInput>
    /**
     * Choose, which UserSkillDisplayMode to update.
     */
    where: UserSkillDisplayModeWhereUniqueInput
  }

  /**
   * UserSkillDisplayMode updateMany
   */
  export type UserSkillDisplayModeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSkillDisplayModes.
     */
    data: XOR<UserSkillDisplayModeUpdateManyMutationInput, UserSkillDisplayModeUncheckedUpdateManyInput>
    /**
     * Filter which UserSkillDisplayModes to update
     */
    where?: UserSkillDisplayModeWhereInput
    /**
     * Limit how many UserSkillDisplayModes to update.
     */
    limit?: number
  }

  /**
   * UserSkillDisplayMode updateManyAndReturn
   */
  export type UserSkillDisplayModeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillDisplayMode
     */
    select?: UserSkillDisplayModeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillDisplayMode
     */
    omit?: UserSkillDisplayModeOmit<ExtArgs> | null
    /**
     * The data used to update UserSkillDisplayModes.
     */
    data: XOR<UserSkillDisplayModeUpdateManyMutationInput, UserSkillDisplayModeUncheckedUpdateManyInput>
    /**
     * Filter which UserSkillDisplayModes to update
     */
    where?: UserSkillDisplayModeWhereInput
    /**
     * Limit how many UserSkillDisplayModes to update.
     */
    limit?: number
  }

  /**
   * UserSkillDisplayMode upsert
   */
  export type UserSkillDisplayModeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillDisplayMode
     */
    select?: UserSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillDisplayMode
     */
    omit?: UserSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillDisplayModeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSkillDisplayMode to update in case it exists.
     */
    where: UserSkillDisplayModeWhereUniqueInput
    /**
     * In case the UserSkillDisplayMode found by the `where` argument doesn't exist, create a new UserSkillDisplayMode with this data.
     */
    create: XOR<UserSkillDisplayModeCreateInput, UserSkillDisplayModeUncheckedCreateInput>
    /**
     * In case the UserSkillDisplayMode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSkillDisplayModeUpdateInput, UserSkillDisplayModeUncheckedUpdateInput>
  }

  /**
   * UserSkillDisplayMode delete
   */
  export type UserSkillDisplayModeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillDisplayMode
     */
    select?: UserSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillDisplayMode
     */
    omit?: UserSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillDisplayModeInclude<ExtArgs> | null
    /**
     * Filter which UserSkillDisplayMode to delete.
     */
    where: UserSkillDisplayModeWhereUniqueInput
  }

  /**
   * UserSkillDisplayMode deleteMany
   */
  export type UserSkillDisplayModeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkillDisplayModes to delete
     */
    where?: UserSkillDisplayModeWhereInput
    /**
     * Limit how many UserSkillDisplayModes to delete.
     */
    limit?: number
  }

  /**
   * UserSkillDisplayMode.userSkills
   */
  export type UserSkillDisplayMode$userSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    cursor?: UserSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkillDisplayMode without action
   */
  export type UserSkillDisplayModeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillDisplayMode
     */
    select?: UserSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillDisplayMode
     */
    omit?: UserSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillDisplayModeInclude<ExtArgs> | null
  }


  /**
   * Model UserSkill
   */

  export type AggregateUserSkill = {
    _count: UserSkillCountAggregateOutputType | null
    _avg: UserSkillAvgAggregateOutputType | null
    _sum: UserSkillSumAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  export type UserSkillAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserSkillSumAggregateOutputType = {
    userId: number | null
  }

  export type UserSkillMinAggregateOutputType = {
    id: string | null
    userId: number | null
    skillId: string | null
    userSkillLevelId: string | null
    userSkillDisplayModeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    skillId: string | null
    userSkillLevelId: string | null
    userSkillDisplayModeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillCountAggregateOutputType = {
    id: number
    userId: number
    skillId: number
    userSkillLevelId: number
    userSkillDisplayModeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSkillAvgAggregateInputType = {
    userId?: true
  }

  export type UserSkillSumAggregateInputType = {
    userId?: true
  }

  export type UserSkillMinAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    userSkillLevelId?: true
    userSkillDisplayModeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillMaxAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    userSkillLevelId?: true
    userSkillDisplayModeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillCountAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    userSkillLevelId?: true
    userSkillDisplayModeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkill to aggregate.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSkills
    **/
    _count?: true | UserSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSkillMaxAggregateInputType
  }

  export type GetUserSkillAggregateType<T extends UserSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSkill[P]>
      : GetScalarType<T[P], AggregateUserSkill[P]>
  }




  export type UserSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithAggregationInput | UserSkillOrderByWithAggregationInput[]
    by: UserSkillScalarFieldEnum[] | UserSkillScalarFieldEnum
    having?: UserSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSkillCountAggregateInputType | true
    _avg?: UserSkillAvgAggregateInputType
    _sum?: UserSkillSumAggregateInputType
    _min?: UserSkillMinAggregateInputType
    _max?: UserSkillMaxAggregateInputType
  }

  export type UserSkillGroupByOutputType = {
    id: string
    userId: number
    skillId: string
    userSkillLevelId: string
    userSkillDisplayModeId: string
    createdAt: Date
    updatedAt: Date
    _count: UserSkillCountAggregateOutputType | null
    _avg: UserSkillAvgAggregateOutputType | null
    _sum: UserSkillSumAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  type GetUserSkillGroupByPayload<T extends UserSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSkillGroupByOutputType[P]>
            : GetScalarType<T[P], UserSkillGroupByOutputType[P]>
        }
      >
    >


  export type UserSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    userSkillLevelId?: boolean
    userSkillDisplayModeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    userSkillLevel?: boolean | UserSkillLevelDefaultArgs<ExtArgs>
    userSkillDisplayMode?: boolean | UserSkillDisplayModeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    userSkillLevelId?: boolean
    userSkillDisplayModeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    userSkillLevel?: boolean | UserSkillLevelDefaultArgs<ExtArgs>
    userSkillDisplayMode?: boolean | UserSkillDisplayModeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    userSkillLevelId?: boolean
    userSkillDisplayModeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    userSkillLevel?: boolean | UserSkillLevelDefaultArgs<ExtArgs>
    userSkillDisplayMode?: boolean | UserSkillDisplayModeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectScalar = {
    id?: boolean
    userId?: boolean
    skillId?: boolean
    userSkillLevelId?: boolean
    userSkillDisplayModeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "skillId" | "userSkillLevelId" | "userSkillDisplayModeId" | "createdAt" | "updatedAt", ExtArgs["result"]["userSkill"]>
  export type UserSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    userSkillLevel?: boolean | UserSkillLevelDefaultArgs<ExtArgs>
    userSkillDisplayMode?: boolean | UserSkillDisplayModeDefaultArgs<ExtArgs>
  }
  export type UserSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    userSkillLevel?: boolean | UserSkillLevelDefaultArgs<ExtArgs>
    userSkillDisplayMode?: boolean | UserSkillDisplayModeDefaultArgs<ExtArgs>
  }
  export type UserSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    userSkillLevel?: boolean | UserSkillLevelDefaultArgs<ExtArgs>
    userSkillDisplayMode?: boolean | UserSkillDisplayModeDefaultArgs<ExtArgs>
  }

  export type $UserSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSkill"
    objects: {
      skill: Prisma.$SkillPayload<ExtArgs>
      userSkillLevel: Prisma.$UserSkillLevelPayload<ExtArgs>
      userSkillDisplayMode: Prisma.$UserSkillDisplayModePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      skillId: string
      userSkillLevelId: string
      userSkillDisplayModeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSkill"]>
    composites: {}
  }

  type UserSkillGetPayload<S extends boolean | null | undefined | UserSkillDefaultArgs> = $Result.GetResult<Prisma.$UserSkillPayload, S>

  type UserSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillCountAggregateInputType | true
    }

  export interface UserSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSkill'], meta: { name: 'UserSkill' } }
    /**
     * Find zero or one UserSkill that matches the filter.
     * @param {UserSkillFindUniqueArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSkillFindUniqueArgs>(args: SelectSubset<T, UserSkillFindUniqueArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSkillFindUniqueOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindFirstArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSkillFindFirstArgs>(args?: SelectSubset<T, UserSkillFindFirstArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindFirstOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSkills
     * const userSkills = await prisma.userSkill.findMany()
     * 
     * // Get first 10 UserSkills
     * const userSkills = await prisma.userSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSkillFindManyArgs>(args?: SelectSubset<T, UserSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSkill.
     * @param {UserSkillCreateArgs} args - Arguments to create a UserSkill.
     * @example
     * // Create one UserSkill
     * const UserSkill = await prisma.userSkill.create({
     *   data: {
     *     // ... data to create a UserSkill
     *   }
     * })
     * 
     */
    create<T extends UserSkillCreateArgs>(args: SelectSubset<T, UserSkillCreateArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSkills.
     * @param {UserSkillCreateManyArgs} args - Arguments to create many UserSkills.
     * @example
     * // Create many UserSkills
     * const userSkill = await prisma.userSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSkillCreateManyArgs>(args?: SelectSubset<T, UserSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSkills and returns the data saved in the database.
     * @param {UserSkillCreateManyAndReturnArgs} args - Arguments to create many UserSkills.
     * @example
     * // Create many UserSkills
     * const userSkill = await prisma.userSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSkills and only return the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSkill.
     * @param {UserSkillDeleteArgs} args - Arguments to delete one UserSkill.
     * @example
     * // Delete one UserSkill
     * const UserSkill = await prisma.userSkill.delete({
     *   where: {
     *     // ... filter to delete one UserSkill
     *   }
     * })
     * 
     */
    delete<T extends UserSkillDeleteArgs>(args: SelectSubset<T, UserSkillDeleteArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSkill.
     * @param {UserSkillUpdateArgs} args - Arguments to update one UserSkill.
     * @example
     * // Update one UserSkill
     * const userSkill = await prisma.userSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSkillUpdateArgs>(args: SelectSubset<T, UserSkillUpdateArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSkills.
     * @param {UserSkillDeleteManyArgs} args - Arguments to filter UserSkills to delete.
     * @example
     * // Delete a few UserSkills
     * const { count } = await prisma.userSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSkillDeleteManyArgs>(args?: SelectSubset<T, UserSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSkills
     * const userSkill = await prisma.userSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSkillUpdateManyArgs>(args: SelectSubset<T, UserSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills and returns the data updated in the database.
     * @param {UserSkillUpdateManyAndReturnArgs} args - Arguments to update many UserSkills.
     * @example
     * // Update many UserSkills
     * const userSkill = await prisma.userSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSkills and only return the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSkill.
     * @param {UserSkillUpsertArgs} args - Arguments to update or create a UserSkill.
     * @example
     * // Update or create a UserSkill
     * const userSkill = await prisma.userSkill.upsert({
     *   create: {
     *     // ... data to create a UserSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSkill we want to update
     *   }
     * })
     */
    upsert<T extends UserSkillUpsertArgs>(args: SelectSubset<T, UserSkillUpsertArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillCountArgs} args - Arguments to filter UserSkills to count.
     * @example
     * // Count the number of UserSkills
     * const count = await prisma.userSkill.count({
     *   where: {
     *     // ... the filter for the UserSkills we want to count
     *   }
     * })
    **/
    count<T extends UserSkillCountArgs>(
      args?: Subset<T, UserSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSkillAggregateArgs>(args: Subset<T, UserSkillAggregateArgs>): Prisma.PrismaPromise<GetUserSkillAggregateType<T>>

    /**
     * Group by UserSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillGroupByArgs} args - Group by arguments.
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
      T extends UserSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSkillGroupByArgs['orderBy'] }
        : { orderBy?: UserSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSkill model
   */
  readonly fields: UserSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userSkillLevel<T extends UserSkillLevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSkillLevelDefaultArgs<ExtArgs>>): Prisma__UserSkillLevelClient<$Result.GetResult<Prisma.$UserSkillLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userSkillDisplayMode<T extends UserSkillDisplayModeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSkillDisplayModeDefaultArgs<ExtArgs>>): Prisma__UserSkillDisplayModeClient<$Result.GetResult<Prisma.$UserSkillDisplayModePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSkill model
   */
  interface UserSkillFieldRefs {
    readonly id: FieldRef<"UserSkill", 'String'>
    readonly userId: FieldRef<"UserSkill", 'Int'>
    readonly skillId: FieldRef<"UserSkill", 'String'>
    readonly userSkillLevelId: FieldRef<"UserSkill", 'String'>
    readonly userSkillDisplayModeId: FieldRef<"UserSkill", 'String'>
    readonly createdAt: FieldRef<"UserSkill", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSkill findUnique
   */
  export type UserSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill findUniqueOrThrow
   */
  export type UserSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill findFirst
   */
  export type UserSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill findFirstOrThrow
   */
  export type UserSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill findMany
   */
  export type UserSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkills to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill create
   */
  export type UserSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSkill.
     */
    data: XOR<UserSkillCreateInput, UserSkillUncheckedCreateInput>
  }

  /**
   * UserSkill createMany
   */
  export type UserSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSkills.
     */
    data: UserSkillCreateManyInput | UserSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSkill createManyAndReturn
   */
  export type UserSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * The data used to create many UserSkills.
     */
    data: UserSkillCreateManyInput | UserSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkill update
   */
  export type UserSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSkill.
     */
    data: XOR<UserSkillUpdateInput, UserSkillUncheckedUpdateInput>
    /**
     * Choose, which UserSkill to update.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill updateMany
   */
  export type UserSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSkills.
     */
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyInput>
    /**
     * Filter which UserSkills to update
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to update.
     */
    limit?: number
  }

  /**
   * UserSkill updateManyAndReturn
   */
  export type UserSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * The data used to update UserSkills.
     */
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyInput>
    /**
     * Filter which UserSkills to update
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkill upsert
   */
  export type UserSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSkill to update in case it exists.
     */
    where: UserSkillWhereUniqueInput
    /**
     * In case the UserSkill found by the `where` argument doesn't exist, create a new UserSkill with this data.
     */
    create: XOR<UserSkillCreateInput, UserSkillUncheckedCreateInput>
    /**
     * In case the UserSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSkillUpdateInput, UserSkillUncheckedUpdateInput>
  }

  /**
   * UserSkill delete
   */
  export type UserSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter which UserSkill to delete.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill deleteMany
   */
  export type UserSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkills to delete
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to delete.
     */
    limit?: number
  }

  /**
   * UserSkill without action
   */
  export type UserSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
  }


  /**
   * Model WorkSkill
   */

  export type AggregateWorkSkill = {
    _count: WorkSkillCountAggregateOutputType | null
    _min: WorkSkillMinAggregateOutputType | null
    _max: WorkSkillMaxAggregateOutputType | null
  }

  export type WorkSkillMinAggregateOutputType = {
    id: string | null
    workId: string | null
    workTypeId: string | null
    skillId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkSkillMaxAggregateOutputType = {
    id: string | null
    workId: string | null
    workTypeId: string | null
    skillId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkSkillCountAggregateOutputType = {
    id: number
    workId: number
    workTypeId: number
    skillId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkSkillMinAggregateInputType = {
    id?: true
    workId?: true
    workTypeId?: true
    skillId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkSkillMaxAggregateInputType = {
    id?: true
    workId?: true
    workTypeId?: true
    skillId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkSkillCountAggregateInputType = {
    id?: true
    workId?: true
    workTypeId?: true
    skillId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkSkill to aggregate.
     */
    where?: WorkSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSkills to fetch.
     */
    orderBy?: WorkSkillOrderByWithRelationInput | WorkSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkSkills
    **/
    _count?: true | WorkSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkSkillMaxAggregateInputType
  }

  export type GetWorkSkillAggregateType<T extends WorkSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkSkill[P]>
      : GetScalarType<T[P], AggregateWorkSkill[P]>
  }




  export type WorkSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkSkillWhereInput
    orderBy?: WorkSkillOrderByWithAggregationInput | WorkSkillOrderByWithAggregationInput[]
    by: WorkSkillScalarFieldEnum[] | WorkSkillScalarFieldEnum
    having?: WorkSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkSkillCountAggregateInputType | true
    _min?: WorkSkillMinAggregateInputType
    _max?: WorkSkillMaxAggregateInputType
  }

  export type WorkSkillGroupByOutputType = {
    id: string
    workId: string
    workTypeId: string
    skillId: string
    createdAt: Date
    updatedAt: Date
    _count: WorkSkillCountAggregateOutputType | null
    _min: WorkSkillMinAggregateOutputType | null
    _max: WorkSkillMaxAggregateOutputType | null
  }

  type GetWorkSkillGroupByPayload<T extends WorkSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkSkillGroupByOutputType[P]>
            : GetScalarType<T[P], WorkSkillGroupByOutputType[P]>
        }
      >
    >


  export type WorkSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    workTypeId?: boolean
    skillId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workSkill"]>

  export type WorkSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    workTypeId?: boolean
    skillId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workSkill"]>

  export type WorkSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    workTypeId?: boolean
    skillId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workSkill"]>

  export type WorkSkillSelectScalar = {
    id?: boolean
    workId?: boolean
    workTypeId?: boolean
    skillId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workId" | "workTypeId" | "skillId" | "createdAt" | "updatedAt", ExtArgs["result"]["workSkill"]>

  export type $WorkSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkSkill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workId: string
      workTypeId: string
      skillId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workSkill"]>
    composites: {}
  }

  type WorkSkillGetPayload<S extends boolean | null | undefined | WorkSkillDefaultArgs> = $Result.GetResult<Prisma.$WorkSkillPayload, S>

  type WorkSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkSkillCountAggregateInputType | true
    }

  export interface WorkSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkSkill'], meta: { name: 'WorkSkill' } }
    /**
     * Find zero or one WorkSkill that matches the filter.
     * @param {WorkSkillFindUniqueArgs} args - Arguments to find a WorkSkill
     * @example
     * // Get one WorkSkill
     * const workSkill = await prisma.workSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkSkillFindUniqueArgs>(args: SelectSubset<T, WorkSkillFindUniqueArgs<ExtArgs>>): Prisma__WorkSkillClient<$Result.GetResult<Prisma.$WorkSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkSkillFindUniqueOrThrowArgs} args - Arguments to find a WorkSkill
     * @example
     * // Get one WorkSkill
     * const workSkill = await prisma.workSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkSkillClient<$Result.GetResult<Prisma.$WorkSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSkillFindFirstArgs} args - Arguments to find a WorkSkill
     * @example
     * // Get one WorkSkill
     * const workSkill = await prisma.workSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkSkillFindFirstArgs>(args?: SelectSubset<T, WorkSkillFindFirstArgs<ExtArgs>>): Prisma__WorkSkillClient<$Result.GetResult<Prisma.$WorkSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSkillFindFirstOrThrowArgs} args - Arguments to find a WorkSkill
     * @example
     * // Get one WorkSkill
     * const workSkill = await prisma.workSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkSkillClient<$Result.GetResult<Prisma.$WorkSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkSkills
     * const workSkills = await prisma.workSkill.findMany()
     * 
     * // Get first 10 WorkSkills
     * const workSkills = await prisma.workSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workSkillWithIdOnly = await prisma.workSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkSkillFindManyArgs>(args?: SelectSubset<T, WorkSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkSkill.
     * @param {WorkSkillCreateArgs} args - Arguments to create a WorkSkill.
     * @example
     * // Create one WorkSkill
     * const WorkSkill = await prisma.workSkill.create({
     *   data: {
     *     // ... data to create a WorkSkill
     *   }
     * })
     * 
     */
    create<T extends WorkSkillCreateArgs>(args: SelectSubset<T, WorkSkillCreateArgs<ExtArgs>>): Prisma__WorkSkillClient<$Result.GetResult<Prisma.$WorkSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkSkills.
     * @param {WorkSkillCreateManyArgs} args - Arguments to create many WorkSkills.
     * @example
     * // Create many WorkSkills
     * const workSkill = await prisma.workSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkSkillCreateManyArgs>(args?: SelectSubset<T, WorkSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkSkills and returns the data saved in the database.
     * @param {WorkSkillCreateManyAndReturnArgs} args - Arguments to create many WorkSkills.
     * @example
     * // Create many WorkSkills
     * const workSkill = await prisma.workSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkSkills and only return the `id`
     * const workSkillWithIdOnly = await prisma.workSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkSkill.
     * @param {WorkSkillDeleteArgs} args - Arguments to delete one WorkSkill.
     * @example
     * // Delete one WorkSkill
     * const WorkSkill = await prisma.workSkill.delete({
     *   where: {
     *     // ... filter to delete one WorkSkill
     *   }
     * })
     * 
     */
    delete<T extends WorkSkillDeleteArgs>(args: SelectSubset<T, WorkSkillDeleteArgs<ExtArgs>>): Prisma__WorkSkillClient<$Result.GetResult<Prisma.$WorkSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkSkill.
     * @param {WorkSkillUpdateArgs} args - Arguments to update one WorkSkill.
     * @example
     * // Update one WorkSkill
     * const workSkill = await prisma.workSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkSkillUpdateArgs>(args: SelectSubset<T, WorkSkillUpdateArgs<ExtArgs>>): Prisma__WorkSkillClient<$Result.GetResult<Prisma.$WorkSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkSkills.
     * @param {WorkSkillDeleteManyArgs} args - Arguments to filter WorkSkills to delete.
     * @example
     * // Delete a few WorkSkills
     * const { count } = await prisma.workSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkSkillDeleteManyArgs>(args?: SelectSubset<T, WorkSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkSkills
     * const workSkill = await prisma.workSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkSkillUpdateManyArgs>(args: SelectSubset<T, WorkSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkSkills and returns the data updated in the database.
     * @param {WorkSkillUpdateManyAndReturnArgs} args - Arguments to update many WorkSkills.
     * @example
     * // Update many WorkSkills
     * const workSkill = await prisma.workSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkSkills and only return the `id`
     * const workSkillWithIdOnly = await prisma.workSkill.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkSkill.
     * @param {WorkSkillUpsertArgs} args - Arguments to update or create a WorkSkill.
     * @example
     * // Update or create a WorkSkill
     * const workSkill = await prisma.workSkill.upsert({
     *   create: {
     *     // ... data to create a WorkSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkSkill we want to update
     *   }
     * })
     */
    upsert<T extends WorkSkillUpsertArgs>(args: SelectSubset<T, WorkSkillUpsertArgs<ExtArgs>>): Prisma__WorkSkillClient<$Result.GetResult<Prisma.$WorkSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSkillCountArgs} args - Arguments to filter WorkSkills to count.
     * @example
     * // Count the number of WorkSkills
     * const count = await prisma.workSkill.count({
     *   where: {
     *     // ... the filter for the WorkSkills we want to count
     *   }
     * })
    **/
    count<T extends WorkSkillCountArgs>(
      args?: Subset<T, WorkSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkSkillAggregateArgs>(args: Subset<T, WorkSkillAggregateArgs>): Prisma.PrismaPromise<GetWorkSkillAggregateType<T>>

    /**
     * Group by WorkSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSkillGroupByArgs} args - Group by arguments.
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
      T extends WorkSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkSkillGroupByArgs['orderBy'] }
        : { orderBy?: WorkSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkSkill model
   */
  readonly fields: WorkSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WorkSkill model
   */
  interface WorkSkillFieldRefs {
    readonly id: FieldRef<"WorkSkill", 'String'>
    readonly workId: FieldRef<"WorkSkill", 'String'>
    readonly workTypeId: FieldRef<"WorkSkill", 'String'>
    readonly skillId: FieldRef<"WorkSkill", 'String'>
    readonly createdAt: FieldRef<"WorkSkill", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkSkill findUnique
   */
  export type WorkSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSkill
     */
    select?: WorkSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSkill
     */
    omit?: WorkSkillOmit<ExtArgs> | null
    /**
     * Filter, which WorkSkill to fetch.
     */
    where: WorkSkillWhereUniqueInput
  }

  /**
   * WorkSkill findUniqueOrThrow
   */
  export type WorkSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSkill
     */
    select?: WorkSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSkill
     */
    omit?: WorkSkillOmit<ExtArgs> | null
    /**
     * Filter, which WorkSkill to fetch.
     */
    where: WorkSkillWhereUniqueInput
  }

  /**
   * WorkSkill findFirst
   */
  export type WorkSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSkill
     */
    select?: WorkSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSkill
     */
    omit?: WorkSkillOmit<ExtArgs> | null
    /**
     * Filter, which WorkSkill to fetch.
     */
    where?: WorkSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSkills to fetch.
     */
    orderBy?: WorkSkillOrderByWithRelationInput | WorkSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkSkills.
     */
    cursor?: WorkSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkSkills.
     */
    distinct?: WorkSkillScalarFieldEnum | WorkSkillScalarFieldEnum[]
  }

  /**
   * WorkSkill findFirstOrThrow
   */
  export type WorkSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSkill
     */
    select?: WorkSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSkill
     */
    omit?: WorkSkillOmit<ExtArgs> | null
    /**
     * Filter, which WorkSkill to fetch.
     */
    where?: WorkSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSkills to fetch.
     */
    orderBy?: WorkSkillOrderByWithRelationInput | WorkSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkSkills.
     */
    cursor?: WorkSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkSkills.
     */
    distinct?: WorkSkillScalarFieldEnum | WorkSkillScalarFieldEnum[]
  }

  /**
   * WorkSkill findMany
   */
  export type WorkSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSkill
     */
    select?: WorkSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSkill
     */
    omit?: WorkSkillOmit<ExtArgs> | null
    /**
     * Filter, which WorkSkills to fetch.
     */
    where?: WorkSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSkills to fetch.
     */
    orderBy?: WorkSkillOrderByWithRelationInput | WorkSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkSkills.
     */
    cursor?: WorkSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSkills.
     */
    skip?: number
    distinct?: WorkSkillScalarFieldEnum | WorkSkillScalarFieldEnum[]
  }

  /**
   * WorkSkill create
   */
  export type WorkSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSkill
     */
    select?: WorkSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSkill
     */
    omit?: WorkSkillOmit<ExtArgs> | null
    /**
     * The data needed to create a WorkSkill.
     */
    data: XOR<WorkSkillCreateInput, WorkSkillUncheckedCreateInput>
  }

  /**
   * WorkSkill createMany
   */
  export type WorkSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkSkills.
     */
    data: WorkSkillCreateManyInput | WorkSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkSkill createManyAndReturn
   */
  export type WorkSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSkill
     */
    select?: WorkSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSkill
     */
    omit?: WorkSkillOmit<ExtArgs> | null
    /**
     * The data used to create many WorkSkills.
     */
    data: WorkSkillCreateManyInput | WorkSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkSkill update
   */
  export type WorkSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSkill
     */
    select?: WorkSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSkill
     */
    omit?: WorkSkillOmit<ExtArgs> | null
    /**
     * The data needed to update a WorkSkill.
     */
    data: XOR<WorkSkillUpdateInput, WorkSkillUncheckedUpdateInput>
    /**
     * Choose, which WorkSkill to update.
     */
    where: WorkSkillWhereUniqueInput
  }

  /**
   * WorkSkill updateMany
   */
  export type WorkSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkSkills.
     */
    data: XOR<WorkSkillUpdateManyMutationInput, WorkSkillUncheckedUpdateManyInput>
    /**
     * Filter which WorkSkills to update
     */
    where?: WorkSkillWhereInput
    /**
     * Limit how many WorkSkills to update.
     */
    limit?: number
  }

  /**
   * WorkSkill updateManyAndReturn
   */
  export type WorkSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSkill
     */
    select?: WorkSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSkill
     */
    omit?: WorkSkillOmit<ExtArgs> | null
    /**
     * The data used to update WorkSkills.
     */
    data: XOR<WorkSkillUpdateManyMutationInput, WorkSkillUncheckedUpdateManyInput>
    /**
     * Filter which WorkSkills to update
     */
    where?: WorkSkillWhereInput
    /**
     * Limit how many WorkSkills to update.
     */
    limit?: number
  }

  /**
   * WorkSkill upsert
   */
  export type WorkSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSkill
     */
    select?: WorkSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSkill
     */
    omit?: WorkSkillOmit<ExtArgs> | null
    /**
     * The filter to search for the WorkSkill to update in case it exists.
     */
    where: WorkSkillWhereUniqueInput
    /**
     * In case the WorkSkill found by the `where` argument doesn't exist, create a new WorkSkill with this data.
     */
    create: XOR<WorkSkillCreateInput, WorkSkillUncheckedCreateInput>
    /**
     * In case the WorkSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkSkillUpdateInput, WorkSkillUncheckedUpdateInput>
  }

  /**
   * WorkSkill delete
   */
  export type WorkSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSkill
     */
    select?: WorkSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSkill
     */
    omit?: WorkSkillOmit<ExtArgs> | null
    /**
     * Filter which WorkSkill to delete.
     */
    where: WorkSkillWhereUniqueInput
  }

  /**
   * WorkSkill deleteMany
   */
  export type WorkSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkSkills to delete
     */
    where?: WorkSkillWhereInput
    /**
     * Limit how many WorkSkills to delete.
     */
    limit?: number
  }

  /**
   * WorkSkill without action
   */
  export type WorkSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSkill
     */
    select?: WorkSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSkill
     */
    omit?: WorkSkillOmit<ExtArgs> | null
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
    payloadHash: 'payloadHash',
    createdAt: 'createdAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const SkillCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillCategoryScalarFieldEnum = (typeof SkillCategoryScalarFieldEnum)[keyof typeof SkillCategoryScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const SkillEventTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillEventTypeScalarFieldEnum = (typeof SkillEventTypeScalarFieldEnum)[keyof typeof SkillEventTypeScalarFieldEnum]


  export const SourceTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SourceTypeScalarFieldEnum = (typeof SourceTypeScalarFieldEnum)[keyof typeof SourceTypeScalarFieldEnum]


  export const SkillEventScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    skillId: 'skillId',
    skillEventTypeId: 'skillEventTypeId',
    sourceId: 'sourceId',
    sourceTypeId: 'sourceTypeId',
    createdAt: 'createdAt'
  };

  export type SkillEventScalarFieldEnum = (typeof SkillEventScalarFieldEnum)[keyof typeof SkillEventScalarFieldEnum]


  export const UserSkillLevelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSkillLevelScalarFieldEnum = (typeof UserSkillLevelScalarFieldEnum)[keyof typeof UserSkillLevelScalarFieldEnum]


  export const UserSkillDisplayModeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSkillDisplayModeScalarFieldEnum = (typeof UserSkillDisplayModeScalarFieldEnum)[keyof typeof UserSkillDisplayModeScalarFieldEnum]


  export const UserSkillScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    skillId: 'skillId',
    userSkillLevelId: 'userSkillLevelId',
    userSkillDisplayModeId: 'userSkillDisplayModeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSkillScalarFieldEnum = (typeof UserSkillScalarFieldEnum)[keyof typeof UserSkillScalarFieldEnum]


  export const WorkSkillScalarFieldEnum: {
    id: 'id',
    workId: 'workId',
    workTypeId: 'workTypeId',
    skillId: 'skillId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkSkillScalarFieldEnum = (typeof WorkSkillScalarFieldEnum)[keyof typeof WorkSkillScalarFieldEnum]


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


  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    topic?: StringFilter<"Event"> | string
    payload?: JsonFilter<"Event">
    payloadHash?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    skillEvents?: SkillEventListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    topic?: SortOrder
    payload?: SortOrder
    payloadHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    skillEvents?: SkillEventOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    payloadHash?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    topic?: StringFilter<"Event"> | string
    payload?: JsonFilter<"Event">
    createdAt?: DateTimeFilter<"Event"> | Date | string
    skillEvents?: SkillEventListRelationFilter
  }, "id" | "payloadHash">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    topic?: SortOrder
    payload?: SortOrder
    payloadHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    topic?: StringWithAggregatesFilter<"Event"> | string
    payload?: JsonWithAggregatesFilter<"Event">
    payloadHash?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type SkillCategoryWhereInput = {
    AND?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    OR?: SkillCategoryWhereInput[]
    NOT?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    id?: StringFilter<"SkillCategory"> | string
    name?: StringFilter<"SkillCategory"> | string
    description?: StringNullableFilter<"SkillCategory"> | string | null
    createdAt?: DateTimeFilter<"SkillCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SkillCategory"> | Date | string
    skills?: SkillListRelationFilter
  }

  export type SkillCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skills?: SkillOrderByRelationAggregateInput
  }

  export type SkillCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    OR?: SkillCategoryWhereInput[]
    NOT?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    description?: StringNullableFilter<"SkillCategory"> | string | null
    createdAt?: DateTimeFilter<"SkillCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SkillCategory"> | Date | string
    skills?: SkillListRelationFilter
  }, "id" | "name">

  export type SkillCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillCategoryCountOrderByAggregateInput
    _max?: SkillCategoryMaxOrderByAggregateInput
    _min?: SkillCategoryMinOrderByAggregateInput
  }

  export type SkillCategoryScalarWhereWithAggregatesInput = {
    AND?: SkillCategoryScalarWhereWithAggregatesInput | SkillCategoryScalarWhereWithAggregatesInput[]
    OR?: SkillCategoryScalarWhereWithAggregatesInput[]
    NOT?: SkillCategoryScalarWhereWithAggregatesInput | SkillCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkillCategory"> | string
    name?: StringWithAggregatesFilter<"SkillCategory"> | string
    description?: StringNullableWithAggregatesFilter<"SkillCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SkillCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SkillCategory"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    description?: StringNullableFilter<"Skill"> | string | null
    categoryId?: StringNullableFilter<"Skill"> | string | null
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Skill"> | Date | string | null
    category?: XOR<SkillCategoryNullableScalarRelationFilter, SkillCategoryWhereInput> | null
    skillEvents?: SkillEventListRelationFilter
    userSkills?: UserSkillListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    category?: SkillCategoryOrderByWithRelationInput
    skillEvents?: SkillEventOrderByRelationAggregateInput
    userSkills?: UserSkillOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    description?: StringNullableFilter<"Skill"> | string | null
    categoryId?: StringNullableFilter<"Skill"> | string | null
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Skill"> | Date | string | null
    category?: XOR<SkillCategoryNullableScalarRelationFilter, SkillCategoryWhereInput> | null
    skillEvents?: SkillEventListRelationFilter
    userSkills?: UserSkillListRelationFilter
  }, "id" | "name">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    description?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Skill"> | Date | string | null
  }

  export type SkillEventTypeWhereInput = {
    AND?: SkillEventTypeWhereInput | SkillEventTypeWhereInput[]
    OR?: SkillEventTypeWhereInput[]
    NOT?: SkillEventTypeWhereInput | SkillEventTypeWhereInput[]
    id?: StringFilter<"SkillEventType"> | string
    name?: StringFilter<"SkillEventType"> | string
    description?: StringNullableFilter<"SkillEventType"> | string | null
    createdAt?: DateTimeFilter<"SkillEventType"> | Date | string
    updatedAt?: DateTimeFilter<"SkillEventType"> | Date | string
    skillEvents?: SkillEventListRelationFilter
  }

  export type SkillEventTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skillEvents?: SkillEventOrderByRelationAggregateInput
  }

  export type SkillEventTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SkillEventTypeWhereInput | SkillEventTypeWhereInput[]
    OR?: SkillEventTypeWhereInput[]
    NOT?: SkillEventTypeWhereInput | SkillEventTypeWhereInput[]
    description?: StringNullableFilter<"SkillEventType"> | string | null
    createdAt?: DateTimeFilter<"SkillEventType"> | Date | string
    updatedAt?: DateTimeFilter<"SkillEventType"> | Date | string
    skillEvents?: SkillEventListRelationFilter
  }, "id" | "name">

  export type SkillEventTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillEventTypeCountOrderByAggregateInput
    _max?: SkillEventTypeMaxOrderByAggregateInput
    _min?: SkillEventTypeMinOrderByAggregateInput
  }

  export type SkillEventTypeScalarWhereWithAggregatesInput = {
    AND?: SkillEventTypeScalarWhereWithAggregatesInput | SkillEventTypeScalarWhereWithAggregatesInput[]
    OR?: SkillEventTypeScalarWhereWithAggregatesInput[]
    NOT?: SkillEventTypeScalarWhereWithAggregatesInput | SkillEventTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkillEventType"> | string
    name?: StringWithAggregatesFilter<"SkillEventType"> | string
    description?: StringNullableWithAggregatesFilter<"SkillEventType"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SkillEventType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SkillEventType"> | Date | string
  }

  export type SourceTypeWhereInput = {
    AND?: SourceTypeWhereInput | SourceTypeWhereInput[]
    OR?: SourceTypeWhereInput[]
    NOT?: SourceTypeWhereInput | SourceTypeWhereInput[]
    id?: StringFilter<"SourceType"> | string
    name?: StringFilter<"SourceType"> | string
    description?: StringNullableFilter<"SourceType"> | string | null
    createdAt?: DateTimeFilter<"SourceType"> | Date | string
    updatedAt?: DateTimeFilter<"SourceType"> | Date | string
    skillEvents?: SkillEventListRelationFilter
  }

  export type SourceTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skillEvents?: SkillEventOrderByRelationAggregateInput
  }

  export type SourceTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SourceTypeWhereInput | SourceTypeWhereInput[]
    OR?: SourceTypeWhereInput[]
    NOT?: SourceTypeWhereInput | SourceTypeWhereInput[]
    description?: StringNullableFilter<"SourceType"> | string | null
    createdAt?: DateTimeFilter<"SourceType"> | Date | string
    updatedAt?: DateTimeFilter<"SourceType"> | Date | string
    skillEvents?: SkillEventListRelationFilter
  }, "id" | "name">

  export type SourceTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SourceTypeCountOrderByAggregateInput
    _max?: SourceTypeMaxOrderByAggregateInput
    _min?: SourceTypeMinOrderByAggregateInput
  }

  export type SourceTypeScalarWhereWithAggregatesInput = {
    AND?: SourceTypeScalarWhereWithAggregatesInput | SourceTypeScalarWhereWithAggregatesInput[]
    OR?: SourceTypeScalarWhereWithAggregatesInput[]
    NOT?: SourceTypeScalarWhereWithAggregatesInput | SourceTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SourceType"> | string
    name?: StringWithAggregatesFilter<"SourceType"> | string
    description?: StringNullableWithAggregatesFilter<"SourceType"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SourceType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SourceType"> | Date | string
  }

  export type SkillEventWhereInput = {
    AND?: SkillEventWhereInput | SkillEventWhereInput[]
    OR?: SkillEventWhereInput[]
    NOT?: SkillEventWhereInput | SkillEventWhereInput[]
    id?: StringFilter<"SkillEvent"> | string
    eventId?: StringFilter<"SkillEvent"> | string
    userId?: IntFilter<"SkillEvent"> | number
    skillId?: StringFilter<"SkillEvent"> | string
    skillEventTypeId?: StringFilter<"SkillEvent"> | string
    sourceId?: StringFilter<"SkillEvent"> | string
    sourceTypeId?: StringFilter<"SkillEvent"> | string
    createdAt?: DateTimeFilter<"SkillEvent"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    skillEventType?: XOR<SkillEventTypeScalarRelationFilter, SkillEventTypeWhereInput>
    sourceType?: XOR<SourceTypeScalarRelationFilter, SourceTypeWhereInput>
  }

  export type SkillEventOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillEventTypeId?: SortOrder
    sourceId?: SortOrder
    sourceTypeId?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
    skillEventType?: SkillEventTypeOrderByWithRelationInput
    sourceType?: SourceTypeOrderByWithRelationInput
  }

  export type SkillEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    skillId_sourceId_skillEventTypeId_userId?: SkillEventSkillIdSourceIdSkillEventTypeIdUserIdCompoundUniqueInput
    AND?: SkillEventWhereInput | SkillEventWhereInput[]
    OR?: SkillEventWhereInput[]
    NOT?: SkillEventWhereInput | SkillEventWhereInput[]
    eventId?: StringFilter<"SkillEvent"> | string
    userId?: IntFilter<"SkillEvent"> | number
    skillId?: StringFilter<"SkillEvent"> | string
    skillEventTypeId?: StringFilter<"SkillEvent"> | string
    sourceId?: StringFilter<"SkillEvent"> | string
    sourceTypeId?: StringFilter<"SkillEvent"> | string
    createdAt?: DateTimeFilter<"SkillEvent"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    skillEventType?: XOR<SkillEventTypeScalarRelationFilter, SkillEventTypeWhereInput>
    sourceType?: XOR<SourceTypeScalarRelationFilter, SourceTypeWhereInput>
  }, "id" | "skillId_sourceId_skillEventTypeId_userId">

  export type SkillEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillEventTypeId?: SortOrder
    sourceId?: SortOrder
    sourceTypeId?: SortOrder
    createdAt?: SortOrder
    _count?: SkillEventCountOrderByAggregateInput
    _avg?: SkillEventAvgOrderByAggregateInput
    _max?: SkillEventMaxOrderByAggregateInput
    _min?: SkillEventMinOrderByAggregateInput
    _sum?: SkillEventSumOrderByAggregateInput
  }

  export type SkillEventScalarWhereWithAggregatesInput = {
    AND?: SkillEventScalarWhereWithAggregatesInput | SkillEventScalarWhereWithAggregatesInput[]
    OR?: SkillEventScalarWhereWithAggregatesInput[]
    NOT?: SkillEventScalarWhereWithAggregatesInput | SkillEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkillEvent"> | string
    eventId?: StringWithAggregatesFilter<"SkillEvent"> | string
    userId?: IntWithAggregatesFilter<"SkillEvent"> | number
    skillId?: StringWithAggregatesFilter<"SkillEvent"> | string
    skillEventTypeId?: StringWithAggregatesFilter<"SkillEvent"> | string
    sourceId?: StringWithAggregatesFilter<"SkillEvent"> | string
    sourceTypeId?: StringWithAggregatesFilter<"SkillEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SkillEvent"> | Date | string
  }

  export type UserSkillLevelWhereInput = {
    AND?: UserSkillLevelWhereInput | UserSkillLevelWhereInput[]
    OR?: UserSkillLevelWhereInput[]
    NOT?: UserSkillLevelWhereInput | UserSkillLevelWhereInput[]
    id?: StringFilter<"UserSkillLevel"> | string
    name?: StringFilter<"UserSkillLevel"> | string
    description?: StringNullableFilter<"UserSkillLevel"> | string | null
    createdAt?: DateTimeFilter<"UserSkillLevel"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkillLevel"> | Date | string
    userSkills?: UserSkillListRelationFilter
  }

  export type UserSkillLevelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userSkills?: UserSkillOrderByRelationAggregateInput
  }

  export type UserSkillLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserSkillLevelWhereInput | UserSkillLevelWhereInput[]
    OR?: UserSkillLevelWhereInput[]
    NOT?: UserSkillLevelWhereInput | UserSkillLevelWhereInput[]
    description?: StringNullableFilter<"UserSkillLevel"> | string | null
    createdAt?: DateTimeFilter<"UserSkillLevel"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkillLevel"> | Date | string
    userSkills?: UserSkillListRelationFilter
  }, "id" | "name">

  export type UserSkillLevelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSkillLevelCountOrderByAggregateInput
    _max?: UserSkillLevelMaxOrderByAggregateInput
    _min?: UserSkillLevelMinOrderByAggregateInput
  }

  export type UserSkillLevelScalarWhereWithAggregatesInput = {
    AND?: UserSkillLevelScalarWhereWithAggregatesInput | UserSkillLevelScalarWhereWithAggregatesInput[]
    OR?: UserSkillLevelScalarWhereWithAggregatesInput[]
    NOT?: UserSkillLevelScalarWhereWithAggregatesInput | UserSkillLevelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSkillLevel"> | string
    name?: StringWithAggregatesFilter<"UserSkillLevel"> | string
    description?: StringNullableWithAggregatesFilter<"UserSkillLevel"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSkillLevel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSkillLevel"> | Date | string
  }

  export type UserSkillDisplayModeWhereInput = {
    AND?: UserSkillDisplayModeWhereInput | UserSkillDisplayModeWhereInput[]
    OR?: UserSkillDisplayModeWhereInput[]
    NOT?: UserSkillDisplayModeWhereInput | UserSkillDisplayModeWhereInput[]
    id?: StringFilter<"UserSkillDisplayMode"> | string
    name?: StringFilter<"UserSkillDisplayMode"> | string
    description?: StringNullableFilter<"UserSkillDisplayMode"> | string | null
    createdAt?: DateTimeFilter<"UserSkillDisplayMode"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkillDisplayMode"> | Date | string
    userSkills?: UserSkillListRelationFilter
  }

  export type UserSkillDisplayModeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userSkills?: UserSkillOrderByRelationAggregateInput
  }

  export type UserSkillDisplayModeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserSkillDisplayModeWhereInput | UserSkillDisplayModeWhereInput[]
    OR?: UserSkillDisplayModeWhereInput[]
    NOT?: UserSkillDisplayModeWhereInput | UserSkillDisplayModeWhereInput[]
    description?: StringNullableFilter<"UserSkillDisplayMode"> | string | null
    createdAt?: DateTimeFilter<"UserSkillDisplayMode"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkillDisplayMode"> | Date | string
    userSkills?: UserSkillListRelationFilter
  }, "id" | "name">

  export type UserSkillDisplayModeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSkillDisplayModeCountOrderByAggregateInput
    _max?: UserSkillDisplayModeMaxOrderByAggregateInput
    _min?: UserSkillDisplayModeMinOrderByAggregateInput
  }

  export type UserSkillDisplayModeScalarWhereWithAggregatesInput = {
    AND?: UserSkillDisplayModeScalarWhereWithAggregatesInput | UserSkillDisplayModeScalarWhereWithAggregatesInput[]
    OR?: UserSkillDisplayModeScalarWhereWithAggregatesInput[]
    NOT?: UserSkillDisplayModeScalarWhereWithAggregatesInput | UserSkillDisplayModeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSkillDisplayMode"> | string
    name?: StringWithAggregatesFilter<"UserSkillDisplayMode"> | string
    description?: StringNullableWithAggregatesFilter<"UserSkillDisplayMode"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSkillDisplayMode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSkillDisplayMode"> | Date | string
  }

  export type UserSkillWhereInput = {
    AND?: UserSkillWhereInput | UserSkillWhereInput[]
    OR?: UserSkillWhereInput[]
    NOT?: UserSkillWhereInput | UserSkillWhereInput[]
    id?: StringFilter<"UserSkill"> | string
    userId?: IntFilter<"UserSkill"> | number
    skillId?: StringFilter<"UserSkill"> | string
    userSkillLevelId?: StringFilter<"UserSkill"> | string
    userSkillDisplayModeId?: StringFilter<"UserSkill"> | string
    createdAt?: DateTimeFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkill"> | Date | string
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    userSkillLevel?: XOR<UserSkillLevelScalarRelationFilter, UserSkillLevelWhereInput>
    userSkillDisplayMode?: XOR<UserSkillDisplayModeScalarRelationFilter, UserSkillDisplayModeWhereInput>
  }

  export type UserSkillOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    userSkillLevelId?: SortOrder
    userSkillDisplayModeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skill?: SkillOrderByWithRelationInput
    userSkillLevel?: UserSkillLevelOrderByWithRelationInput
    userSkillDisplayMode?: UserSkillDisplayModeOrderByWithRelationInput
  }

  export type UserSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_skillId_userSkillLevelId?: UserSkillUserIdSkillIdUserSkillLevelIdCompoundUniqueInput
    AND?: UserSkillWhereInput | UserSkillWhereInput[]
    OR?: UserSkillWhereInput[]
    NOT?: UserSkillWhereInput | UserSkillWhereInput[]
    userId?: IntFilter<"UserSkill"> | number
    skillId?: StringFilter<"UserSkill"> | string
    userSkillLevelId?: StringFilter<"UserSkill"> | string
    userSkillDisplayModeId?: StringFilter<"UserSkill"> | string
    createdAt?: DateTimeFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkill"> | Date | string
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    userSkillLevel?: XOR<UserSkillLevelScalarRelationFilter, UserSkillLevelWhereInput>
    userSkillDisplayMode?: XOR<UserSkillDisplayModeScalarRelationFilter, UserSkillDisplayModeWhereInput>
  }, "id" | "userId_skillId_userSkillLevelId">

  export type UserSkillOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    userSkillLevelId?: SortOrder
    userSkillDisplayModeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSkillCountOrderByAggregateInput
    _avg?: UserSkillAvgOrderByAggregateInput
    _max?: UserSkillMaxOrderByAggregateInput
    _min?: UserSkillMinOrderByAggregateInput
    _sum?: UserSkillSumOrderByAggregateInput
  }

  export type UserSkillScalarWhereWithAggregatesInput = {
    AND?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    OR?: UserSkillScalarWhereWithAggregatesInput[]
    NOT?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSkill"> | string
    userId?: IntWithAggregatesFilter<"UserSkill"> | number
    skillId?: StringWithAggregatesFilter<"UserSkill"> | string
    userSkillLevelId?: StringWithAggregatesFilter<"UserSkill"> | string
    userSkillDisplayModeId?: StringWithAggregatesFilter<"UserSkill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSkill"> | Date | string
  }

  export type WorkSkillWhereInput = {
    AND?: WorkSkillWhereInput | WorkSkillWhereInput[]
    OR?: WorkSkillWhereInput[]
    NOT?: WorkSkillWhereInput | WorkSkillWhereInput[]
    id?: StringFilter<"WorkSkill"> | string
    workId?: StringFilter<"WorkSkill"> | string
    workTypeId?: StringFilter<"WorkSkill"> | string
    skillId?: StringFilter<"WorkSkill"> | string
    createdAt?: DateTimeFilter<"WorkSkill"> | Date | string
    updatedAt?: DateTimeFilter<"WorkSkill"> | Date | string
  }

  export type WorkSkillOrderByWithRelationInput = {
    id?: SortOrder
    workId?: SortOrder
    workTypeId?: SortOrder
    skillId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workId_workTypeId_skillId?: WorkSkillWorkIdWorkTypeIdSkillIdCompoundUniqueInput
    AND?: WorkSkillWhereInput | WorkSkillWhereInput[]
    OR?: WorkSkillWhereInput[]
    NOT?: WorkSkillWhereInput | WorkSkillWhereInput[]
    workId?: StringFilter<"WorkSkill"> | string
    workTypeId?: StringFilter<"WorkSkill"> | string
    skillId?: StringFilter<"WorkSkill"> | string
    createdAt?: DateTimeFilter<"WorkSkill"> | Date | string
    updatedAt?: DateTimeFilter<"WorkSkill"> | Date | string
  }, "id" | "workId_workTypeId_skillId">

  export type WorkSkillOrderByWithAggregationInput = {
    id?: SortOrder
    workId?: SortOrder
    workTypeId?: SortOrder
    skillId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkSkillCountOrderByAggregateInput
    _max?: WorkSkillMaxOrderByAggregateInput
    _min?: WorkSkillMinOrderByAggregateInput
  }

  export type WorkSkillScalarWhereWithAggregatesInput = {
    AND?: WorkSkillScalarWhereWithAggregatesInput | WorkSkillScalarWhereWithAggregatesInput[]
    OR?: WorkSkillScalarWhereWithAggregatesInput[]
    NOT?: WorkSkillScalarWhereWithAggregatesInput | WorkSkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkSkill"> | string
    workId?: StringWithAggregatesFilter<"WorkSkill"> | string
    workTypeId?: StringWithAggregatesFilter<"WorkSkill"> | string
    skillId?: StringWithAggregatesFilter<"WorkSkill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkSkill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkSkill"> | Date | string
  }

  export type EventCreateInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt?: Date | string
    skillEvents?: SkillEventCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt?: Date | string
    skillEvents?: SkillEventUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillEvents?: SkillEventUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillEvents?: SkillEventUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutCategoryInput
  }

  export type SkillCategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SkillCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutCategoryNestedInput
  }

  export type SkillCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SkillCategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    category?: SkillCategoryCreateNestedOneWithoutSkillsInput
    skillEvents?: SkillEventCreateNestedManyWithoutSkillInput
    userSkills?: UserSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    skillEvents?: SkillEventUncheckedCreateNestedManyWithoutSkillInput
    userSkills?: UserSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: SkillCategoryUpdateOneWithoutSkillsNestedInput
    skillEvents?: SkillEventUpdateManyWithoutSkillNestedInput
    userSkills?: UserSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skillEvents?: SkillEventUncheckedUpdateManyWithoutSkillNestedInput
    userSkills?: UserSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkillEventTypeCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skillEvents?: SkillEventCreateNestedManyWithoutSkillEventTypeInput
  }

  export type SkillEventTypeUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skillEvents?: SkillEventUncheckedCreateNestedManyWithoutSkillEventTypeInput
  }

  export type SkillEventTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillEvents?: SkillEventUpdateManyWithoutSkillEventTypeNestedInput
  }

  export type SkillEventTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillEvents?: SkillEventUncheckedUpdateManyWithoutSkillEventTypeNestedInput
  }

  export type SkillEventTypeCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillEventTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillEventTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTypeCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skillEvents?: SkillEventCreateNestedManyWithoutSourceTypeInput
  }

  export type SourceTypeUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skillEvents?: SkillEventUncheckedCreateNestedManyWithoutSourceTypeInput
  }

  export type SourceTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillEvents?: SkillEventUpdateManyWithoutSourceTypeNestedInput
  }

  export type SourceTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillEvents?: SkillEventUncheckedUpdateManyWithoutSourceTypeNestedInput
  }

  export type SourceTypeCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillEventCreateInput = {
    id?: string
    userId: number
    sourceId: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutSkillEventsInput
    skill: SkillCreateNestedOneWithoutSkillEventsInput
    skillEventType: SkillEventTypeCreateNestedOneWithoutSkillEventsInput
    sourceType: SourceTypeCreateNestedOneWithoutSkillEventsInput
  }

  export type SkillEventUncheckedCreateInput = {
    id?: string
    eventId: string
    userId: number
    skillId: string
    skillEventTypeId: string
    sourceId: string
    sourceTypeId: string
    createdAt?: Date | string
  }

  export type SkillEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutSkillEventsNestedInput
    skill?: SkillUpdateOneRequiredWithoutSkillEventsNestedInput
    skillEventType?: SkillEventTypeUpdateOneRequiredWithoutSkillEventsNestedInput
    sourceType?: SourceTypeUpdateOneRequiredWithoutSkillEventsNestedInput
  }

  export type SkillEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillEventCreateManyInput = {
    id?: string
    eventId: string
    userId: number
    skillId: string
    skillEventTypeId: string
    sourceId: string
    sourceTypeId: string
    createdAt?: Date | string
  }

  export type SkillEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillLevelCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userSkills?: UserSkillCreateNestedManyWithoutUserSkillLevelInput
  }

  export type UserSkillLevelUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userSkills?: UserSkillUncheckedCreateNestedManyWithoutUserSkillLevelInput
  }

  export type UserSkillLevelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkills?: UserSkillUpdateManyWithoutUserSkillLevelNestedInput
  }

  export type UserSkillLevelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkills?: UserSkillUncheckedUpdateManyWithoutUserSkillLevelNestedInput
  }

  export type UserSkillLevelCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillLevelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillLevelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillDisplayModeCreateInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userSkills?: UserSkillCreateNestedManyWithoutUserSkillDisplayModeInput
  }

  export type UserSkillDisplayModeUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userSkills?: UserSkillUncheckedCreateNestedManyWithoutUserSkillDisplayModeInput
  }

  export type UserSkillDisplayModeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkills?: UserSkillUpdateManyWithoutUserSkillDisplayModeNestedInput
  }

  export type UserSkillDisplayModeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkills?: UserSkillUncheckedUpdateManyWithoutUserSkillDisplayModeNestedInput
  }

  export type UserSkillDisplayModeCreateManyInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillDisplayModeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillDisplayModeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateInput = {
    id?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: SkillCreateNestedOneWithoutUserSkillsInput
    userSkillLevel: UserSkillLevelCreateNestedOneWithoutUserSkillsInput
    userSkillDisplayMode: UserSkillDisplayModeCreateNestedOneWithoutUserSkillsInput
  }

  export type UserSkillUncheckedCreateInput = {
    id?: string
    userId: number
    skillId: string
    userSkillLevelId: string
    userSkillDisplayModeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutUserSkillsNestedInput
    userSkillLevel?: UserSkillLevelUpdateOneRequiredWithoutUserSkillsNestedInput
    userSkillDisplayMode?: UserSkillDisplayModeUpdateOneRequiredWithoutUserSkillsNestedInput
  }

  export type UserSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    userSkillLevelId?: StringFieldUpdateOperationsInput | string
    userSkillDisplayModeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateManyInput = {
    id?: string
    userId: number
    skillId: string
    userSkillLevelId: string
    userSkillDisplayModeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    userSkillLevelId?: StringFieldUpdateOperationsInput | string
    userSkillDisplayModeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkSkillCreateInput = {
    id?: string
    workId: string
    workTypeId: string
    skillId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkSkillUncheckedCreateInput = {
    id?: string
    workId: string
    workTypeId: string
    skillId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    workTypeId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    workTypeId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkSkillCreateManyInput = {
    id?: string
    workId: string
    workTypeId: string
    skillId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    workTypeId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    workTypeId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SkillEventListRelationFilter = {
    every?: SkillEventWhereInput
    some?: SkillEventWhereInput
    none?: SkillEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SkillEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    payload?: SortOrder
    payloadHash?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    payloadHash?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    payloadHash?: SortOrder
    createdAt?: SortOrder
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

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type SkillCategoryNullableScalarRelationFilter = {
    is?: SkillCategoryWhereInput | null
    isNot?: SkillCategoryWhereInput | null
  }

  export type UserSkillListRelationFilter = {
    every?: UserSkillWhereInput
    some?: UserSkillWhereInput
    none?: UserSkillWhereInput
  }

  export type UserSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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

  export type SkillEventTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillEventTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillEventTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type SkillEventTypeScalarRelationFilter = {
    is?: SkillEventTypeWhereInput
    isNot?: SkillEventTypeWhereInput
  }

  export type SourceTypeScalarRelationFilter = {
    is?: SourceTypeWhereInput
    isNot?: SourceTypeWhereInput
  }

  export type SkillEventSkillIdSourceIdSkillEventTypeIdUserIdCompoundUniqueInput = {
    skillId: string
    sourceId: string
    skillEventTypeId: string
    userId: number
  }

  export type SkillEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillEventTypeId?: SortOrder
    sourceId?: SortOrder
    sourceTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillEventAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SkillEventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillEventTypeId?: SortOrder
    sourceId?: SortOrder
    sourceTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillEventMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillEventTypeId?: SortOrder
    sourceId?: SortOrder
    sourceTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillEventSumOrderByAggregateInput = {
    userId?: SortOrder
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

  export type UserSkillLevelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillLevelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillDisplayModeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillDisplayModeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillDisplayModeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillLevelScalarRelationFilter = {
    is?: UserSkillLevelWhereInput
    isNot?: UserSkillLevelWhereInput
  }

  export type UserSkillDisplayModeScalarRelationFilter = {
    is?: UserSkillDisplayModeWhereInput
    isNot?: UserSkillDisplayModeWhereInput
  }

  export type UserSkillUserIdSkillIdUserSkillLevelIdCompoundUniqueInput = {
    userId: number
    skillId: string
    userSkillLevelId: string
  }

  export type UserSkillCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    userSkillLevelId?: SortOrder
    userSkillDisplayModeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    userSkillLevelId?: SortOrder
    userSkillDisplayModeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    userSkillLevelId?: SortOrder
    userSkillDisplayModeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type WorkSkillWorkIdWorkTypeIdSkillIdCompoundUniqueInput = {
    workId: string
    workTypeId: string
    skillId: string
  }

  export type WorkSkillCountOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    workTypeId?: SortOrder
    skillId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    workTypeId?: SortOrder
    skillId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkSkillMinOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    workTypeId?: SortOrder
    skillId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillEventCreateNestedManyWithoutEventInput = {
    create?: XOR<SkillEventCreateWithoutEventInput, SkillEventUncheckedCreateWithoutEventInput> | SkillEventCreateWithoutEventInput[] | SkillEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutEventInput | SkillEventCreateOrConnectWithoutEventInput[]
    createMany?: SkillEventCreateManyEventInputEnvelope
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
  }

  export type SkillEventUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<SkillEventCreateWithoutEventInput, SkillEventUncheckedCreateWithoutEventInput> | SkillEventCreateWithoutEventInput[] | SkillEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutEventInput | SkillEventCreateOrConnectWithoutEventInput[]
    createMany?: SkillEventCreateManyEventInputEnvelope
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
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

  export type SkillEventUpdateManyWithoutEventNestedInput = {
    create?: XOR<SkillEventCreateWithoutEventInput, SkillEventUncheckedCreateWithoutEventInput> | SkillEventCreateWithoutEventInput[] | SkillEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutEventInput | SkillEventCreateOrConnectWithoutEventInput[]
    upsert?: SkillEventUpsertWithWhereUniqueWithoutEventInput | SkillEventUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: SkillEventCreateManyEventInputEnvelope
    set?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    disconnect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    delete?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    update?: SkillEventUpdateWithWhereUniqueWithoutEventInput | SkillEventUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: SkillEventUpdateManyWithWhereWithoutEventInput | SkillEventUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: SkillEventScalarWhereInput | SkillEventScalarWhereInput[]
  }

  export type SkillEventUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<SkillEventCreateWithoutEventInput, SkillEventUncheckedCreateWithoutEventInput> | SkillEventCreateWithoutEventInput[] | SkillEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutEventInput | SkillEventCreateOrConnectWithoutEventInput[]
    upsert?: SkillEventUpsertWithWhereUniqueWithoutEventInput | SkillEventUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: SkillEventCreateManyEventInputEnvelope
    set?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    disconnect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    delete?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    update?: SkillEventUpdateWithWhereUniqueWithoutEventInput | SkillEventUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: SkillEventUpdateManyWithWhereWithoutEventInput | SkillEventUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: SkillEventScalarWhereInput | SkillEventScalarWhereInput[]
  }

  export type SkillCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput> | SkillCreateWithoutCategoryInput[] | SkillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCategoryInput | SkillCreateOrConnectWithoutCategoryInput[]
    createMany?: SkillCreateManyCategoryInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput> | SkillCreateWithoutCategoryInput[] | SkillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCategoryInput | SkillCreateOrConnectWithoutCategoryInput[]
    createMany?: SkillCreateManyCategoryInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type SkillUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput> | SkillCreateWithoutCategoryInput[] | SkillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCategoryInput | SkillCreateOrConnectWithoutCategoryInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutCategoryInput | SkillUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SkillCreateManyCategoryInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutCategoryInput | SkillUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutCategoryInput | SkillUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput> | SkillCreateWithoutCategoryInput[] | SkillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCategoryInput | SkillCreateOrConnectWithoutCategoryInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutCategoryInput | SkillUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SkillCreateManyCategoryInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutCategoryInput | SkillUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutCategoryInput | SkillUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type SkillCategoryCreateNestedOneWithoutSkillsInput = {
    create?: XOR<SkillCategoryCreateWithoutSkillsInput, SkillCategoryUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: SkillCategoryCreateOrConnectWithoutSkillsInput
    connect?: SkillCategoryWhereUniqueInput
  }

  export type SkillEventCreateNestedManyWithoutSkillInput = {
    create?: XOR<SkillEventCreateWithoutSkillInput, SkillEventUncheckedCreateWithoutSkillInput> | SkillEventCreateWithoutSkillInput[] | SkillEventUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutSkillInput | SkillEventCreateOrConnectWithoutSkillInput[]
    createMany?: SkillEventCreateManySkillInputEnvelope
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
  }

  export type UserSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type SkillEventUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<SkillEventCreateWithoutSkillInput, SkillEventUncheckedCreateWithoutSkillInput> | SkillEventCreateWithoutSkillInput[] | SkillEventUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutSkillInput | SkillEventCreateOrConnectWithoutSkillInput[]
    createMany?: SkillEventCreateManySkillInputEnvelope
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
  }

  export type UserSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SkillCategoryUpdateOneWithoutSkillsNestedInput = {
    create?: XOR<SkillCategoryCreateWithoutSkillsInput, SkillCategoryUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: SkillCategoryCreateOrConnectWithoutSkillsInput
    upsert?: SkillCategoryUpsertWithoutSkillsInput
    disconnect?: SkillCategoryWhereInput | boolean
    delete?: SkillCategoryWhereInput | boolean
    connect?: SkillCategoryWhereUniqueInput
    update?: XOR<XOR<SkillCategoryUpdateToOneWithWhereWithoutSkillsInput, SkillCategoryUpdateWithoutSkillsInput>, SkillCategoryUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillEventUpdateManyWithoutSkillNestedInput = {
    create?: XOR<SkillEventCreateWithoutSkillInput, SkillEventUncheckedCreateWithoutSkillInput> | SkillEventCreateWithoutSkillInput[] | SkillEventUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutSkillInput | SkillEventCreateOrConnectWithoutSkillInput[]
    upsert?: SkillEventUpsertWithWhereUniqueWithoutSkillInput | SkillEventUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: SkillEventCreateManySkillInputEnvelope
    set?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    disconnect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    delete?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    update?: SkillEventUpdateWithWhereUniqueWithoutSkillInput | SkillEventUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: SkillEventUpdateManyWithWhereWithoutSkillInput | SkillEventUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: SkillEventScalarWhereInput | SkillEventScalarWhereInput[]
  }

  export type UserSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutSkillInput | UserSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutSkillInput | UserSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutSkillInput | UserSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type SkillEventUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<SkillEventCreateWithoutSkillInput, SkillEventUncheckedCreateWithoutSkillInput> | SkillEventCreateWithoutSkillInput[] | SkillEventUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutSkillInput | SkillEventCreateOrConnectWithoutSkillInput[]
    upsert?: SkillEventUpsertWithWhereUniqueWithoutSkillInput | SkillEventUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: SkillEventCreateManySkillInputEnvelope
    set?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    disconnect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    delete?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    update?: SkillEventUpdateWithWhereUniqueWithoutSkillInput | SkillEventUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: SkillEventUpdateManyWithWhereWithoutSkillInput | SkillEventUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: SkillEventScalarWhereInput | SkillEventScalarWhereInput[]
  }

  export type UserSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutSkillInput | UserSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutSkillInput | UserSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutSkillInput | UserSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type SkillEventCreateNestedManyWithoutSkillEventTypeInput = {
    create?: XOR<SkillEventCreateWithoutSkillEventTypeInput, SkillEventUncheckedCreateWithoutSkillEventTypeInput> | SkillEventCreateWithoutSkillEventTypeInput[] | SkillEventUncheckedCreateWithoutSkillEventTypeInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutSkillEventTypeInput | SkillEventCreateOrConnectWithoutSkillEventTypeInput[]
    createMany?: SkillEventCreateManySkillEventTypeInputEnvelope
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
  }

  export type SkillEventUncheckedCreateNestedManyWithoutSkillEventTypeInput = {
    create?: XOR<SkillEventCreateWithoutSkillEventTypeInput, SkillEventUncheckedCreateWithoutSkillEventTypeInput> | SkillEventCreateWithoutSkillEventTypeInput[] | SkillEventUncheckedCreateWithoutSkillEventTypeInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutSkillEventTypeInput | SkillEventCreateOrConnectWithoutSkillEventTypeInput[]
    createMany?: SkillEventCreateManySkillEventTypeInputEnvelope
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
  }

  export type SkillEventUpdateManyWithoutSkillEventTypeNestedInput = {
    create?: XOR<SkillEventCreateWithoutSkillEventTypeInput, SkillEventUncheckedCreateWithoutSkillEventTypeInput> | SkillEventCreateWithoutSkillEventTypeInput[] | SkillEventUncheckedCreateWithoutSkillEventTypeInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutSkillEventTypeInput | SkillEventCreateOrConnectWithoutSkillEventTypeInput[]
    upsert?: SkillEventUpsertWithWhereUniqueWithoutSkillEventTypeInput | SkillEventUpsertWithWhereUniqueWithoutSkillEventTypeInput[]
    createMany?: SkillEventCreateManySkillEventTypeInputEnvelope
    set?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    disconnect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    delete?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    update?: SkillEventUpdateWithWhereUniqueWithoutSkillEventTypeInput | SkillEventUpdateWithWhereUniqueWithoutSkillEventTypeInput[]
    updateMany?: SkillEventUpdateManyWithWhereWithoutSkillEventTypeInput | SkillEventUpdateManyWithWhereWithoutSkillEventTypeInput[]
    deleteMany?: SkillEventScalarWhereInput | SkillEventScalarWhereInput[]
  }

  export type SkillEventUncheckedUpdateManyWithoutSkillEventTypeNestedInput = {
    create?: XOR<SkillEventCreateWithoutSkillEventTypeInput, SkillEventUncheckedCreateWithoutSkillEventTypeInput> | SkillEventCreateWithoutSkillEventTypeInput[] | SkillEventUncheckedCreateWithoutSkillEventTypeInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutSkillEventTypeInput | SkillEventCreateOrConnectWithoutSkillEventTypeInput[]
    upsert?: SkillEventUpsertWithWhereUniqueWithoutSkillEventTypeInput | SkillEventUpsertWithWhereUniqueWithoutSkillEventTypeInput[]
    createMany?: SkillEventCreateManySkillEventTypeInputEnvelope
    set?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    disconnect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    delete?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    update?: SkillEventUpdateWithWhereUniqueWithoutSkillEventTypeInput | SkillEventUpdateWithWhereUniqueWithoutSkillEventTypeInput[]
    updateMany?: SkillEventUpdateManyWithWhereWithoutSkillEventTypeInput | SkillEventUpdateManyWithWhereWithoutSkillEventTypeInput[]
    deleteMany?: SkillEventScalarWhereInput | SkillEventScalarWhereInput[]
  }

  export type SkillEventCreateNestedManyWithoutSourceTypeInput = {
    create?: XOR<SkillEventCreateWithoutSourceTypeInput, SkillEventUncheckedCreateWithoutSourceTypeInput> | SkillEventCreateWithoutSourceTypeInput[] | SkillEventUncheckedCreateWithoutSourceTypeInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutSourceTypeInput | SkillEventCreateOrConnectWithoutSourceTypeInput[]
    createMany?: SkillEventCreateManySourceTypeInputEnvelope
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
  }

  export type SkillEventUncheckedCreateNestedManyWithoutSourceTypeInput = {
    create?: XOR<SkillEventCreateWithoutSourceTypeInput, SkillEventUncheckedCreateWithoutSourceTypeInput> | SkillEventCreateWithoutSourceTypeInput[] | SkillEventUncheckedCreateWithoutSourceTypeInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutSourceTypeInput | SkillEventCreateOrConnectWithoutSourceTypeInput[]
    createMany?: SkillEventCreateManySourceTypeInputEnvelope
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
  }

  export type SkillEventUpdateManyWithoutSourceTypeNestedInput = {
    create?: XOR<SkillEventCreateWithoutSourceTypeInput, SkillEventUncheckedCreateWithoutSourceTypeInput> | SkillEventCreateWithoutSourceTypeInput[] | SkillEventUncheckedCreateWithoutSourceTypeInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutSourceTypeInput | SkillEventCreateOrConnectWithoutSourceTypeInput[]
    upsert?: SkillEventUpsertWithWhereUniqueWithoutSourceTypeInput | SkillEventUpsertWithWhereUniqueWithoutSourceTypeInput[]
    createMany?: SkillEventCreateManySourceTypeInputEnvelope
    set?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    disconnect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    delete?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    update?: SkillEventUpdateWithWhereUniqueWithoutSourceTypeInput | SkillEventUpdateWithWhereUniqueWithoutSourceTypeInput[]
    updateMany?: SkillEventUpdateManyWithWhereWithoutSourceTypeInput | SkillEventUpdateManyWithWhereWithoutSourceTypeInput[]
    deleteMany?: SkillEventScalarWhereInput | SkillEventScalarWhereInput[]
  }

  export type SkillEventUncheckedUpdateManyWithoutSourceTypeNestedInput = {
    create?: XOR<SkillEventCreateWithoutSourceTypeInput, SkillEventUncheckedCreateWithoutSourceTypeInput> | SkillEventCreateWithoutSourceTypeInput[] | SkillEventUncheckedCreateWithoutSourceTypeInput[]
    connectOrCreate?: SkillEventCreateOrConnectWithoutSourceTypeInput | SkillEventCreateOrConnectWithoutSourceTypeInput[]
    upsert?: SkillEventUpsertWithWhereUniqueWithoutSourceTypeInput | SkillEventUpsertWithWhereUniqueWithoutSourceTypeInput[]
    createMany?: SkillEventCreateManySourceTypeInputEnvelope
    set?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    disconnect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    delete?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    connect?: SkillEventWhereUniqueInput | SkillEventWhereUniqueInput[]
    update?: SkillEventUpdateWithWhereUniqueWithoutSourceTypeInput | SkillEventUpdateWithWhereUniqueWithoutSourceTypeInput[]
    updateMany?: SkillEventUpdateManyWithWhereWithoutSourceTypeInput | SkillEventUpdateManyWithWhereWithoutSourceTypeInput[]
    deleteMany?: SkillEventScalarWhereInput | SkillEventScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutSkillEventsInput = {
    create?: XOR<EventCreateWithoutSkillEventsInput, EventUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: EventCreateOrConnectWithoutSkillEventsInput
    connect?: EventWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutSkillEventsInput = {
    create?: XOR<SkillCreateWithoutSkillEventsInput, SkillUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutSkillEventsInput
    connect?: SkillWhereUniqueInput
  }

  export type SkillEventTypeCreateNestedOneWithoutSkillEventsInput = {
    create?: XOR<SkillEventTypeCreateWithoutSkillEventsInput, SkillEventTypeUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: SkillEventTypeCreateOrConnectWithoutSkillEventsInput
    connect?: SkillEventTypeWhereUniqueInput
  }

  export type SourceTypeCreateNestedOneWithoutSkillEventsInput = {
    create?: XOR<SourceTypeCreateWithoutSkillEventsInput, SourceTypeUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: SourceTypeCreateOrConnectWithoutSkillEventsInput
    connect?: SourceTypeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateOneRequiredWithoutSkillEventsNestedInput = {
    create?: XOR<EventCreateWithoutSkillEventsInput, EventUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: EventCreateOrConnectWithoutSkillEventsInput
    upsert?: EventUpsertWithoutSkillEventsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutSkillEventsInput, EventUpdateWithoutSkillEventsInput>, EventUncheckedUpdateWithoutSkillEventsInput>
  }

  export type SkillUpdateOneRequiredWithoutSkillEventsNestedInput = {
    create?: XOR<SkillCreateWithoutSkillEventsInput, SkillUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutSkillEventsInput
    upsert?: SkillUpsertWithoutSkillEventsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutSkillEventsInput, SkillUpdateWithoutSkillEventsInput>, SkillUncheckedUpdateWithoutSkillEventsInput>
  }

  export type SkillEventTypeUpdateOneRequiredWithoutSkillEventsNestedInput = {
    create?: XOR<SkillEventTypeCreateWithoutSkillEventsInput, SkillEventTypeUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: SkillEventTypeCreateOrConnectWithoutSkillEventsInput
    upsert?: SkillEventTypeUpsertWithoutSkillEventsInput
    connect?: SkillEventTypeWhereUniqueInput
    update?: XOR<XOR<SkillEventTypeUpdateToOneWithWhereWithoutSkillEventsInput, SkillEventTypeUpdateWithoutSkillEventsInput>, SkillEventTypeUncheckedUpdateWithoutSkillEventsInput>
  }

  export type SourceTypeUpdateOneRequiredWithoutSkillEventsNestedInput = {
    create?: XOR<SourceTypeCreateWithoutSkillEventsInput, SourceTypeUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: SourceTypeCreateOrConnectWithoutSkillEventsInput
    upsert?: SourceTypeUpsertWithoutSkillEventsInput
    connect?: SourceTypeWhereUniqueInput
    update?: XOR<XOR<SourceTypeUpdateToOneWithWhereWithoutSkillEventsInput, SourceTypeUpdateWithoutSkillEventsInput>, SourceTypeUncheckedUpdateWithoutSkillEventsInput>
  }

  export type UserSkillCreateNestedManyWithoutUserSkillLevelInput = {
    create?: XOR<UserSkillCreateWithoutUserSkillLevelInput, UserSkillUncheckedCreateWithoutUserSkillLevelInput> | UserSkillCreateWithoutUserSkillLevelInput[] | UserSkillUncheckedCreateWithoutUserSkillLevelInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserSkillLevelInput | UserSkillCreateOrConnectWithoutUserSkillLevelInput[]
    createMany?: UserSkillCreateManyUserSkillLevelInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type UserSkillUncheckedCreateNestedManyWithoutUserSkillLevelInput = {
    create?: XOR<UserSkillCreateWithoutUserSkillLevelInput, UserSkillUncheckedCreateWithoutUserSkillLevelInput> | UserSkillCreateWithoutUserSkillLevelInput[] | UserSkillUncheckedCreateWithoutUserSkillLevelInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserSkillLevelInput | UserSkillCreateOrConnectWithoutUserSkillLevelInput[]
    createMany?: UserSkillCreateManyUserSkillLevelInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type UserSkillUpdateManyWithoutUserSkillLevelNestedInput = {
    create?: XOR<UserSkillCreateWithoutUserSkillLevelInput, UserSkillUncheckedCreateWithoutUserSkillLevelInput> | UserSkillCreateWithoutUserSkillLevelInput[] | UserSkillUncheckedCreateWithoutUserSkillLevelInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserSkillLevelInput | UserSkillCreateOrConnectWithoutUserSkillLevelInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutUserSkillLevelInput | UserSkillUpsertWithWhereUniqueWithoutUserSkillLevelInput[]
    createMany?: UserSkillCreateManyUserSkillLevelInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutUserSkillLevelInput | UserSkillUpdateWithWhereUniqueWithoutUserSkillLevelInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutUserSkillLevelInput | UserSkillUpdateManyWithWhereWithoutUserSkillLevelInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type UserSkillUncheckedUpdateManyWithoutUserSkillLevelNestedInput = {
    create?: XOR<UserSkillCreateWithoutUserSkillLevelInput, UserSkillUncheckedCreateWithoutUserSkillLevelInput> | UserSkillCreateWithoutUserSkillLevelInput[] | UserSkillUncheckedCreateWithoutUserSkillLevelInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserSkillLevelInput | UserSkillCreateOrConnectWithoutUserSkillLevelInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutUserSkillLevelInput | UserSkillUpsertWithWhereUniqueWithoutUserSkillLevelInput[]
    createMany?: UserSkillCreateManyUserSkillLevelInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutUserSkillLevelInput | UserSkillUpdateWithWhereUniqueWithoutUserSkillLevelInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutUserSkillLevelInput | UserSkillUpdateManyWithWhereWithoutUserSkillLevelInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type UserSkillCreateNestedManyWithoutUserSkillDisplayModeInput = {
    create?: XOR<UserSkillCreateWithoutUserSkillDisplayModeInput, UserSkillUncheckedCreateWithoutUserSkillDisplayModeInput> | UserSkillCreateWithoutUserSkillDisplayModeInput[] | UserSkillUncheckedCreateWithoutUserSkillDisplayModeInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserSkillDisplayModeInput | UserSkillCreateOrConnectWithoutUserSkillDisplayModeInput[]
    createMany?: UserSkillCreateManyUserSkillDisplayModeInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type UserSkillUncheckedCreateNestedManyWithoutUserSkillDisplayModeInput = {
    create?: XOR<UserSkillCreateWithoutUserSkillDisplayModeInput, UserSkillUncheckedCreateWithoutUserSkillDisplayModeInput> | UserSkillCreateWithoutUserSkillDisplayModeInput[] | UserSkillUncheckedCreateWithoutUserSkillDisplayModeInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserSkillDisplayModeInput | UserSkillCreateOrConnectWithoutUserSkillDisplayModeInput[]
    createMany?: UserSkillCreateManyUserSkillDisplayModeInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type UserSkillUpdateManyWithoutUserSkillDisplayModeNestedInput = {
    create?: XOR<UserSkillCreateWithoutUserSkillDisplayModeInput, UserSkillUncheckedCreateWithoutUserSkillDisplayModeInput> | UserSkillCreateWithoutUserSkillDisplayModeInput[] | UserSkillUncheckedCreateWithoutUserSkillDisplayModeInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserSkillDisplayModeInput | UserSkillCreateOrConnectWithoutUserSkillDisplayModeInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutUserSkillDisplayModeInput | UserSkillUpsertWithWhereUniqueWithoutUserSkillDisplayModeInput[]
    createMany?: UserSkillCreateManyUserSkillDisplayModeInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutUserSkillDisplayModeInput | UserSkillUpdateWithWhereUniqueWithoutUserSkillDisplayModeInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutUserSkillDisplayModeInput | UserSkillUpdateManyWithWhereWithoutUserSkillDisplayModeInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type UserSkillUncheckedUpdateManyWithoutUserSkillDisplayModeNestedInput = {
    create?: XOR<UserSkillCreateWithoutUserSkillDisplayModeInput, UserSkillUncheckedCreateWithoutUserSkillDisplayModeInput> | UserSkillCreateWithoutUserSkillDisplayModeInput[] | UserSkillUncheckedCreateWithoutUserSkillDisplayModeInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserSkillDisplayModeInput | UserSkillCreateOrConnectWithoutUserSkillDisplayModeInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutUserSkillDisplayModeInput | UserSkillUpsertWithWhereUniqueWithoutUserSkillDisplayModeInput[]
    createMany?: UserSkillCreateManyUserSkillDisplayModeInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutUserSkillDisplayModeInput | UserSkillUpdateWithWhereUniqueWithoutUserSkillDisplayModeInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutUserSkillDisplayModeInput | UserSkillUpdateManyWithWhereWithoutUserSkillDisplayModeInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type SkillCreateNestedOneWithoutUserSkillsInput = {
    create?: XOR<SkillCreateWithoutUserSkillsInput, SkillUncheckedCreateWithoutUserSkillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUserSkillsInput
    connect?: SkillWhereUniqueInput
  }

  export type UserSkillLevelCreateNestedOneWithoutUserSkillsInput = {
    create?: XOR<UserSkillLevelCreateWithoutUserSkillsInput, UserSkillLevelUncheckedCreateWithoutUserSkillsInput>
    connectOrCreate?: UserSkillLevelCreateOrConnectWithoutUserSkillsInput
    connect?: UserSkillLevelWhereUniqueInput
  }

  export type UserSkillDisplayModeCreateNestedOneWithoutUserSkillsInput = {
    create?: XOR<UserSkillDisplayModeCreateWithoutUserSkillsInput, UserSkillDisplayModeUncheckedCreateWithoutUserSkillsInput>
    connectOrCreate?: UserSkillDisplayModeCreateOrConnectWithoutUserSkillsInput
    connect?: UserSkillDisplayModeWhereUniqueInput
  }

  export type SkillUpdateOneRequiredWithoutUserSkillsNestedInput = {
    create?: XOR<SkillCreateWithoutUserSkillsInput, SkillUncheckedCreateWithoutUserSkillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUserSkillsInput
    upsert?: SkillUpsertWithoutUserSkillsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutUserSkillsInput, SkillUpdateWithoutUserSkillsInput>, SkillUncheckedUpdateWithoutUserSkillsInput>
  }

  export type UserSkillLevelUpdateOneRequiredWithoutUserSkillsNestedInput = {
    create?: XOR<UserSkillLevelCreateWithoutUserSkillsInput, UserSkillLevelUncheckedCreateWithoutUserSkillsInput>
    connectOrCreate?: UserSkillLevelCreateOrConnectWithoutUserSkillsInput
    upsert?: UserSkillLevelUpsertWithoutUserSkillsInput
    connect?: UserSkillLevelWhereUniqueInput
    update?: XOR<XOR<UserSkillLevelUpdateToOneWithWhereWithoutUserSkillsInput, UserSkillLevelUpdateWithoutUserSkillsInput>, UserSkillLevelUncheckedUpdateWithoutUserSkillsInput>
  }

  export type UserSkillDisplayModeUpdateOneRequiredWithoutUserSkillsNestedInput = {
    create?: XOR<UserSkillDisplayModeCreateWithoutUserSkillsInput, UserSkillDisplayModeUncheckedCreateWithoutUserSkillsInput>
    connectOrCreate?: UserSkillDisplayModeCreateOrConnectWithoutUserSkillsInput
    upsert?: UserSkillDisplayModeUpsertWithoutUserSkillsInput
    connect?: UserSkillDisplayModeWhereUniqueInput
    update?: XOR<XOR<UserSkillDisplayModeUpdateToOneWithWhereWithoutUserSkillsInput, UserSkillDisplayModeUpdateWithoutUserSkillsInput>, UserSkillDisplayModeUncheckedUpdateWithoutUserSkillsInput>
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

  export type SkillEventCreateWithoutEventInput = {
    id?: string
    userId: number
    sourceId: string
    createdAt?: Date | string
    skill: SkillCreateNestedOneWithoutSkillEventsInput
    skillEventType: SkillEventTypeCreateNestedOneWithoutSkillEventsInput
    sourceType: SourceTypeCreateNestedOneWithoutSkillEventsInput
  }

  export type SkillEventUncheckedCreateWithoutEventInput = {
    id?: string
    userId: number
    skillId: string
    skillEventTypeId: string
    sourceId: string
    sourceTypeId: string
    createdAt?: Date | string
  }

  export type SkillEventCreateOrConnectWithoutEventInput = {
    where: SkillEventWhereUniqueInput
    create: XOR<SkillEventCreateWithoutEventInput, SkillEventUncheckedCreateWithoutEventInput>
  }

  export type SkillEventCreateManyEventInputEnvelope = {
    data: SkillEventCreateManyEventInput | SkillEventCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type SkillEventUpsertWithWhereUniqueWithoutEventInput = {
    where: SkillEventWhereUniqueInput
    update: XOR<SkillEventUpdateWithoutEventInput, SkillEventUncheckedUpdateWithoutEventInput>
    create: XOR<SkillEventCreateWithoutEventInput, SkillEventUncheckedCreateWithoutEventInput>
  }

  export type SkillEventUpdateWithWhereUniqueWithoutEventInput = {
    where: SkillEventWhereUniqueInput
    data: XOR<SkillEventUpdateWithoutEventInput, SkillEventUncheckedUpdateWithoutEventInput>
  }

  export type SkillEventUpdateManyWithWhereWithoutEventInput = {
    where: SkillEventScalarWhereInput
    data: XOR<SkillEventUpdateManyMutationInput, SkillEventUncheckedUpdateManyWithoutEventInput>
  }

  export type SkillEventScalarWhereInput = {
    AND?: SkillEventScalarWhereInput | SkillEventScalarWhereInput[]
    OR?: SkillEventScalarWhereInput[]
    NOT?: SkillEventScalarWhereInput | SkillEventScalarWhereInput[]
    id?: StringFilter<"SkillEvent"> | string
    eventId?: StringFilter<"SkillEvent"> | string
    userId?: IntFilter<"SkillEvent"> | number
    skillId?: StringFilter<"SkillEvent"> | string
    skillEventTypeId?: StringFilter<"SkillEvent"> | string
    sourceId?: StringFilter<"SkillEvent"> | string
    sourceTypeId?: StringFilter<"SkillEvent"> | string
    createdAt?: DateTimeFilter<"SkillEvent"> | Date | string
  }

  export type SkillCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    skillEvents?: SkillEventCreateNestedManyWithoutSkillInput
    userSkills?: UserSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    skillEvents?: SkillEventUncheckedCreateNestedManyWithoutSkillInput
    userSkills?: UserSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutCategoryInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput>
  }

  export type SkillCreateManyCategoryInputEnvelope = {
    data: SkillCreateManyCategoryInput | SkillCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SkillUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutCategoryInput, SkillUncheckedUpdateWithoutCategoryInput>
    create: XOR<SkillCreateWithoutCategoryInput, SkillUncheckedCreateWithoutCategoryInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutCategoryInput, SkillUncheckedUpdateWithoutCategoryInput>
  }

  export type SkillUpdateManyWithWhereWithoutCategoryInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    description?: StringNullableFilter<"Skill"> | string | null
    categoryId?: StringNullableFilter<"Skill"> | string | null
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Skill"> | Date | string | null
  }

  export type SkillCategoryCreateWithoutSkillsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillCategoryUncheckedCreateWithoutSkillsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillCategoryCreateOrConnectWithoutSkillsInput = {
    where: SkillCategoryWhereUniqueInput
    create: XOR<SkillCategoryCreateWithoutSkillsInput, SkillCategoryUncheckedCreateWithoutSkillsInput>
  }

  export type SkillEventCreateWithoutSkillInput = {
    id?: string
    userId: number
    sourceId: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutSkillEventsInput
    skillEventType: SkillEventTypeCreateNestedOneWithoutSkillEventsInput
    sourceType: SourceTypeCreateNestedOneWithoutSkillEventsInput
  }

  export type SkillEventUncheckedCreateWithoutSkillInput = {
    id?: string
    eventId: string
    userId: number
    skillEventTypeId: string
    sourceId: string
    sourceTypeId: string
    createdAt?: Date | string
  }

  export type SkillEventCreateOrConnectWithoutSkillInput = {
    where: SkillEventWhereUniqueInput
    create: XOR<SkillEventCreateWithoutSkillInput, SkillEventUncheckedCreateWithoutSkillInput>
  }

  export type SkillEventCreateManySkillInputEnvelope = {
    data: SkillEventCreateManySkillInput | SkillEventCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type UserSkillCreateWithoutSkillInput = {
    id?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userSkillLevel: UserSkillLevelCreateNestedOneWithoutUserSkillsInput
    userSkillDisplayMode: UserSkillDisplayModeCreateNestedOneWithoutUserSkillsInput
  }

  export type UserSkillUncheckedCreateWithoutSkillInput = {
    id?: string
    userId: number
    userSkillLevelId: string
    userSkillDisplayModeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillCreateOrConnectWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    create: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput>
  }

  export type UserSkillCreateManySkillInputEnvelope = {
    data: UserSkillCreateManySkillInput | UserSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type SkillCategoryUpsertWithoutSkillsInput = {
    update: XOR<SkillCategoryUpdateWithoutSkillsInput, SkillCategoryUncheckedUpdateWithoutSkillsInput>
    create: XOR<SkillCategoryCreateWithoutSkillsInput, SkillCategoryUncheckedCreateWithoutSkillsInput>
    where?: SkillCategoryWhereInput
  }

  export type SkillCategoryUpdateToOneWithWhereWithoutSkillsInput = {
    where?: SkillCategoryWhereInput
    data: XOR<SkillCategoryUpdateWithoutSkillsInput, SkillCategoryUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillCategoryUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCategoryUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillEventUpsertWithWhereUniqueWithoutSkillInput = {
    where: SkillEventWhereUniqueInput
    update: XOR<SkillEventUpdateWithoutSkillInput, SkillEventUncheckedUpdateWithoutSkillInput>
    create: XOR<SkillEventCreateWithoutSkillInput, SkillEventUncheckedCreateWithoutSkillInput>
  }

  export type SkillEventUpdateWithWhereUniqueWithoutSkillInput = {
    where: SkillEventWhereUniqueInput
    data: XOR<SkillEventUpdateWithoutSkillInput, SkillEventUncheckedUpdateWithoutSkillInput>
  }

  export type SkillEventUpdateManyWithWhereWithoutSkillInput = {
    where: SkillEventScalarWhereInput
    data: XOR<SkillEventUpdateManyMutationInput, SkillEventUncheckedUpdateManyWithoutSkillInput>
  }

  export type UserSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    update: XOR<UserSkillUpdateWithoutSkillInput, UserSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput>
  }

  export type UserSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    data: XOR<UserSkillUpdateWithoutSkillInput, UserSkillUncheckedUpdateWithoutSkillInput>
  }

  export type UserSkillUpdateManyWithWhereWithoutSkillInput = {
    where: UserSkillScalarWhereInput
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type UserSkillScalarWhereInput = {
    AND?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
    OR?: UserSkillScalarWhereInput[]
    NOT?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
    id?: StringFilter<"UserSkill"> | string
    userId?: IntFilter<"UserSkill"> | number
    skillId?: StringFilter<"UserSkill"> | string
    userSkillLevelId?: StringFilter<"UserSkill"> | string
    userSkillDisplayModeId?: StringFilter<"UserSkill"> | string
    createdAt?: DateTimeFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkill"> | Date | string
  }

  export type SkillEventCreateWithoutSkillEventTypeInput = {
    id?: string
    userId: number
    sourceId: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutSkillEventsInput
    skill: SkillCreateNestedOneWithoutSkillEventsInput
    sourceType: SourceTypeCreateNestedOneWithoutSkillEventsInput
  }

  export type SkillEventUncheckedCreateWithoutSkillEventTypeInput = {
    id?: string
    eventId: string
    userId: number
    skillId: string
    sourceId: string
    sourceTypeId: string
    createdAt?: Date | string
  }

  export type SkillEventCreateOrConnectWithoutSkillEventTypeInput = {
    where: SkillEventWhereUniqueInput
    create: XOR<SkillEventCreateWithoutSkillEventTypeInput, SkillEventUncheckedCreateWithoutSkillEventTypeInput>
  }

  export type SkillEventCreateManySkillEventTypeInputEnvelope = {
    data: SkillEventCreateManySkillEventTypeInput | SkillEventCreateManySkillEventTypeInput[]
    skipDuplicates?: boolean
  }

  export type SkillEventUpsertWithWhereUniqueWithoutSkillEventTypeInput = {
    where: SkillEventWhereUniqueInput
    update: XOR<SkillEventUpdateWithoutSkillEventTypeInput, SkillEventUncheckedUpdateWithoutSkillEventTypeInput>
    create: XOR<SkillEventCreateWithoutSkillEventTypeInput, SkillEventUncheckedCreateWithoutSkillEventTypeInput>
  }

  export type SkillEventUpdateWithWhereUniqueWithoutSkillEventTypeInput = {
    where: SkillEventWhereUniqueInput
    data: XOR<SkillEventUpdateWithoutSkillEventTypeInput, SkillEventUncheckedUpdateWithoutSkillEventTypeInput>
  }

  export type SkillEventUpdateManyWithWhereWithoutSkillEventTypeInput = {
    where: SkillEventScalarWhereInput
    data: XOR<SkillEventUpdateManyMutationInput, SkillEventUncheckedUpdateManyWithoutSkillEventTypeInput>
  }

  export type SkillEventCreateWithoutSourceTypeInput = {
    id?: string
    userId: number
    sourceId: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutSkillEventsInput
    skill: SkillCreateNestedOneWithoutSkillEventsInput
    skillEventType: SkillEventTypeCreateNestedOneWithoutSkillEventsInput
  }

  export type SkillEventUncheckedCreateWithoutSourceTypeInput = {
    id?: string
    eventId: string
    userId: number
    skillId: string
    skillEventTypeId: string
    sourceId: string
    createdAt?: Date | string
  }

  export type SkillEventCreateOrConnectWithoutSourceTypeInput = {
    where: SkillEventWhereUniqueInput
    create: XOR<SkillEventCreateWithoutSourceTypeInput, SkillEventUncheckedCreateWithoutSourceTypeInput>
  }

  export type SkillEventCreateManySourceTypeInputEnvelope = {
    data: SkillEventCreateManySourceTypeInput | SkillEventCreateManySourceTypeInput[]
    skipDuplicates?: boolean
  }

  export type SkillEventUpsertWithWhereUniqueWithoutSourceTypeInput = {
    where: SkillEventWhereUniqueInput
    update: XOR<SkillEventUpdateWithoutSourceTypeInput, SkillEventUncheckedUpdateWithoutSourceTypeInput>
    create: XOR<SkillEventCreateWithoutSourceTypeInput, SkillEventUncheckedCreateWithoutSourceTypeInput>
  }

  export type SkillEventUpdateWithWhereUniqueWithoutSourceTypeInput = {
    where: SkillEventWhereUniqueInput
    data: XOR<SkillEventUpdateWithoutSourceTypeInput, SkillEventUncheckedUpdateWithoutSourceTypeInput>
  }

  export type SkillEventUpdateManyWithWhereWithoutSourceTypeInput = {
    where: SkillEventScalarWhereInput
    data: XOR<SkillEventUpdateManyMutationInput, SkillEventUncheckedUpdateManyWithoutSourceTypeInput>
  }

  export type EventCreateWithoutSkillEventsInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt?: Date | string
  }

  export type EventUncheckedCreateWithoutSkillEventsInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt?: Date | string
  }

  export type EventCreateOrConnectWithoutSkillEventsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutSkillEventsInput, EventUncheckedCreateWithoutSkillEventsInput>
  }

  export type SkillCreateWithoutSkillEventsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    category?: SkillCategoryCreateNestedOneWithoutSkillsInput
    userSkills?: UserSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutSkillEventsInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userSkills?: UserSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutSkillEventsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutSkillEventsInput, SkillUncheckedCreateWithoutSkillEventsInput>
  }

  export type SkillEventTypeCreateWithoutSkillEventsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillEventTypeUncheckedCreateWithoutSkillEventsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillEventTypeCreateOrConnectWithoutSkillEventsInput = {
    where: SkillEventTypeWhereUniqueInput
    create: XOR<SkillEventTypeCreateWithoutSkillEventsInput, SkillEventTypeUncheckedCreateWithoutSkillEventsInput>
  }

  export type SourceTypeCreateWithoutSkillEventsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTypeUncheckedCreateWithoutSkillEventsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTypeCreateOrConnectWithoutSkillEventsInput = {
    where: SourceTypeWhereUniqueInput
    create: XOR<SourceTypeCreateWithoutSkillEventsInput, SourceTypeUncheckedCreateWithoutSkillEventsInput>
  }

  export type EventUpsertWithoutSkillEventsInput = {
    update: XOR<EventUpdateWithoutSkillEventsInput, EventUncheckedUpdateWithoutSkillEventsInput>
    create: XOR<EventCreateWithoutSkillEventsInput, EventUncheckedCreateWithoutSkillEventsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutSkillEventsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutSkillEventsInput, EventUncheckedUpdateWithoutSkillEventsInput>
  }

  export type EventUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUpsertWithoutSkillEventsInput = {
    update: XOR<SkillUpdateWithoutSkillEventsInput, SkillUncheckedUpdateWithoutSkillEventsInput>
    create: XOR<SkillCreateWithoutSkillEventsInput, SkillUncheckedCreateWithoutSkillEventsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutSkillEventsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutSkillEventsInput, SkillUncheckedUpdateWithoutSkillEventsInput>
  }

  export type SkillUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: SkillCategoryUpdateOneWithoutSkillsNestedInput
    userSkills?: UserSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userSkills?: UserSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillEventTypeUpsertWithoutSkillEventsInput = {
    update: XOR<SkillEventTypeUpdateWithoutSkillEventsInput, SkillEventTypeUncheckedUpdateWithoutSkillEventsInput>
    create: XOR<SkillEventTypeCreateWithoutSkillEventsInput, SkillEventTypeUncheckedCreateWithoutSkillEventsInput>
    where?: SkillEventTypeWhereInput
  }

  export type SkillEventTypeUpdateToOneWithWhereWithoutSkillEventsInput = {
    where?: SkillEventTypeWhereInput
    data: XOR<SkillEventTypeUpdateWithoutSkillEventsInput, SkillEventTypeUncheckedUpdateWithoutSkillEventsInput>
  }

  export type SkillEventTypeUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillEventTypeUncheckedUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTypeUpsertWithoutSkillEventsInput = {
    update: XOR<SourceTypeUpdateWithoutSkillEventsInput, SourceTypeUncheckedUpdateWithoutSkillEventsInput>
    create: XOR<SourceTypeCreateWithoutSkillEventsInput, SourceTypeUncheckedCreateWithoutSkillEventsInput>
    where?: SourceTypeWhereInput
  }

  export type SourceTypeUpdateToOneWithWhereWithoutSkillEventsInput = {
    where?: SourceTypeWhereInput
    data: XOR<SourceTypeUpdateWithoutSkillEventsInput, SourceTypeUncheckedUpdateWithoutSkillEventsInput>
  }

  export type SourceTypeUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTypeUncheckedUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateWithoutUserSkillLevelInput = {
    id?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: SkillCreateNestedOneWithoutUserSkillsInput
    userSkillDisplayMode: UserSkillDisplayModeCreateNestedOneWithoutUserSkillsInput
  }

  export type UserSkillUncheckedCreateWithoutUserSkillLevelInput = {
    id?: string
    userId: number
    skillId: string
    userSkillDisplayModeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillCreateOrConnectWithoutUserSkillLevelInput = {
    where: UserSkillWhereUniqueInput
    create: XOR<UserSkillCreateWithoutUserSkillLevelInput, UserSkillUncheckedCreateWithoutUserSkillLevelInput>
  }

  export type UserSkillCreateManyUserSkillLevelInputEnvelope = {
    data: UserSkillCreateManyUserSkillLevelInput | UserSkillCreateManyUserSkillLevelInput[]
    skipDuplicates?: boolean
  }

  export type UserSkillUpsertWithWhereUniqueWithoutUserSkillLevelInput = {
    where: UserSkillWhereUniqueInput
    update: XOR<UserSkillUpdateWithoutUserSkillLevelInput, UserSkillUncheckedUpdateWithoutUserSkillLevelInput>
    create: XOR<UserSkillCreateWithoutUserSkillLevelInput, UserSkillUncheckedCreateWithoutUserSkillLevelInput>
  }

  export type UserSkillUpdateWithWhereUniqueWithoutUserSkillLevelInput = {
    where: UserSkillWhereUniqueInput
    data: XOR<UserSkillUpdateWithoutUserSkillLevelInput, UserSkillUncheckedUpdateWithoutUserSkillLevelInput>
  }

  export type UserSkillUpdateManyWithWhereWithoutUserSkillLevelInput = {
    where: UserSkillScalarWhereInput
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyWithoutUserSkillLevelInput>
  }

  export type UserSkillCreateWithoutUserSkillDisplayModeInput = {
    id?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: SkillCreateNestedOneWithoutUserSkillsInput
    userSkillLevel: UserSkillLevelCreateNestedOneWithoutUserSkillsInput
  }

  export type UserSkillUncheckedCreateWithoutUserSkillDisplayModeInput = {
    id?: string
    userId: number
    skillId: string
    userSkillLevelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillCreateOrConnectWithoutUserSkillDisplayModeInput = {
    where: UserSkillWhereUniqueInput
    create: XOR<UserSkillCreateWithoutUserSkillDisplayModeInput, UserSkillUncheckedCreateWithoutUserSkillDisplayModeInput>
  }

  export type UserSkillCreateManyUserSkillDisplayModeInputEnvelope = {
    data: UserSkillCreateManyUserSkillDisplayModeInput | UserSkillCreateManyUserSkillDisplayModeInput[]
    skipDuplicates?: boolean
  }

  export type UserSkillUpsertWithWhereUniqueWithoutUserSkillDisplayModeInput = {
    where: UserSkillWhereUniqueInput
    update: XOR<UserSkillUpdateWithoutUserSkillDisplayModeInput, UserSkillUncheckedUpdateWithoutUserSkillDisplayModeInput>
    create: XOR<UserSkillCreateWithoutUserSkillDisplayModeInput, UserSkillUncheckedCreateWithoutUserSkillDisplayModeInput>
  }

  export type UserSkillUpdateWithWhereUniqueWithoutUserSkillDisplayModeInput = {
    where: UserSkillWhereUniqueInput
    data: XOR<UserSkillUpdateWithoutUserSkillDisplayModeInput, UserSkillUncheckedUpdateWithoutUserSkillDisplayModeInput>
  }

  export type UserSkillUpdateManyWithWhereWithoutUserSkillDisplayModeInput = {
    where: UserSkillScalarWhereInput
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyWithoutUserSkillDisplayModeInput>
  }

  export type SkillCreateWithoutUserSkillsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    category?: SkillCategoryCreateNestedOneWithoutSkillsInput
    skillEvents?: SkillEventCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutUserSkillsInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    skillEvents?: SkillEventUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutUserSkillsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUserSkillsInput, SkillUncheckedCreateWithoutUserSkillsInput>
  }

  export type UserSkillLevelCreateWithoutUserSkillsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillLevelUncheckedCreateWithoutUserSkillsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillLevelCreateOrConnectWithoutUserSkillsInput = {
    where: UserSkillLevelWhereUniqueInput
    create: XOR<UserSkillLevelCreateWithoutUserSkillsInput, UserSkillLevelUncheckedCreateWithoutUserSkillsInput>
  }

  export type UserSkillDisplayModeCreateWithoutUserSkillsInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillDisplayModeUncheckedCreateWithoutUserSkillsInput = {
    id: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillDisplayModeCreateOrConnectWithoutUserSkillsInput = {
    where: UserSkillDisplayModeWhereUniqueInput
    create: XOR<UserSkillDisplayModeCreateWithoutUserSkillsInput, UserSkillDisplayModeUncheckedCreateWithoutUserSkillsInput>
  }

  export type SkillUpsertWithoutUserSkillsInput = {
    update: XOR<SkillUpdateWithoutUserSkillsInput, SkillUncheckedUpdateWithoutUserSkillsInput>
    create: XOR<SkillCreateWithoutUserSkillsInput, SkillUncheckedCreateWithoutUserSkillsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutUserSkillsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutUserSkillsInput, SkillUncheckedUpdateWithoutUserSkillsInput>
  }

  export type SkillUpdateWithoutUserSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: SkillCategoryUpdateOneWithoutSkillsNestedInput
    skillEvents?: SkillEventUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutUserSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skillEvents?: SkillEventUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type UserSkillLevelUpsertWithoutUserSkillsInput = {
    update: XOR<UserSkillLevelUpdateWithoutUserSkillsInput, UserSkillLevelUncheckedUpdateWithoutUserSkillsInput>
    create: XOR<UserSkillLevelCreateWithoutUserSkillsInput, UserSkillLevelUncheckedCreateWithoutUserSkillsInput>
    where?: UserSkillLevelWhereInput
  }

  export type UserSkillLevelUpdateToOneWithWhereWithoutUserSkillsInput = {
    where?: UserSkillLevelWhereInput
    data: XOR<UserSkillLevelUpdateWithoutUserSkillsInput, UserSkillLevelUncheckedUpdateWithoutUserSkillsInput>
  }

  export type UserSkillLevelUpdateWithoutUserSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillLevelUncheckedUpdateWithoutUserSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillDisplayModeUpsertWithoutUserSkillsInput = {
    update: XOR<UserSkillDisplayModeUpdateWithoutUserSkillsInput, UserSkillDisplayModeUncheckedUpdateWithoutUserSkillsInput>
    create: XOR<UserSkillDisplayModeCreateWithoutUserSkillsInput, UserSkillDisplayModeUncheckedCreateWithoutUserSkillsInput>
    where?: UserSkillDisplayModeWhereInput
  }

  export type UserSkillDisplayModeUpdateToOneWithWhereWithoutUserSkillsInput = {
    where?: UserSkillDisplayModeWhereInput
    data: XOR<UserSkillDisplayModeUpdateWithoutUserSkillsInput, UserSkillDisplayModeUncheckedUpdateWithoutUserSkillsInput>
  }

  export type UserSkillDisplayModeUpdateWithoutUserSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillDisplayModeUncheckedUpdateWithoutUserSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillEventCreateManyEventInput = {
    id?: string
    userId: number
    skillId: string
    skillEventTypeId: string
    sourceId: string
    sourceTypeId: string
    createdAt?: Date | string
  }

  export type SkillEventUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutSkillEventsNestedInput
    skillEventType?: SkillEventTypeUpdateOneRequiredWithoutSkillEventsNestedInput
    sourceType?: SourceTypeUpdateOneRequiredWithoutSkillEventsNestedInput
  }

  export type SkillEventUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillEventUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SkillUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skillEvents?: SkillEventUpdateManyWithoutSkillNestedInput
    userSkills?: UserSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skillEvents?: SkillEventUncheckedUpdateManyWithoutSkillNestedInput
    userSkills?: UserSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkillEventCreateManySkillInput = {
    id?: string
    eventId: string
    userId: number
    skillEventTypeId: string
    sourceId: string
    sourceTypeId: string
    createdAt?: Date | string
  }

  export type UserSkillCreateManySkillInput = {
    id?: string
    userId: number
    userSkillLevelId: string
    userSkillDisplayModeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillEventUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutSkillEventsNestedInput
    skillEventType?: SkillEventTypeUpdateOneRequiredWithoutSkillEventsNestedInput
    sourceType?: SourceTypeUpdateOneRequiredWithoutSkillEventsNestedInput
  }

  export type SkillEventUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillEventUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkillLevel?: UserSkillLevelUpdateOneRequiredWithoutUserSkillsNestedInput
    userSkillDisplayMode?: UserSkillDisplayModeUpdateOneRequiredWithoutUserSkillsNestedInput
  }

  export type UserSkillUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    userSkillLevelId?: StringFieldUpdateOperationsInput | string
    userSkillDisplayModeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    userSkillLevelId?: StringFieldUpdateOperationsInput | string
    userSkillDisplayModeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillEventCreateManySkillEventTypeInput = {
    id?: string
    eventId: string
    userId: number
    skillId: string
    sourceId: string
    sourceTypeId: string
    createdAt?: Date | string
  }

  export type SkillEventUpdateWithoutSkillEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutSkillEventsNestedInput
    skill?: SkillUpdateOneRequiredWithoutSkillEventsNestedInput
    sourceType?: SourceTypeUpdateOneRequiredWithoutSkillEventsNestedInput
  }

  export type SkillEventUncheckedUpdateWithoutSkillEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillEventUncheckedUpdateManyWithoutSkillEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillEventCreateManySourceTypeInput = {
    id?: string
    eventId: string
    userId: number
    skillId: string
    skillEventTypeId: string
    sourceId: string
    createdAt?: Date | string
  }

  export type SkillEventUpdateWithoutSourceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutSkillEventsNestedInput
    skill?: SkillUpdateOneRequiredWithoutSkillEventsNestedInput
    skillEventType?: SkillEventTypeUpdateOneRequiredWithoutSkillEventsNestedInput
  }

  export type SkillEventUncheckedUpdateWithoutSourceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillEventUncheckedUpdateManyWithoutSourceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateManyUserSkillLevelInput = {
    id?: string
    userId: number
    skillId: string
    userSkillDisplayModeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUpdateWithoutUserSkillLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutUserSkillsNestedInput
    userSkillDisplayMode?: UserSkillDisplayModeUpdateOneRequiredWithoutUserSkillsNestedInput
  }

  export type UserSkillUncheckedUpdateWithoutUserSkillLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    userSkillDisplayModeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateManyWithoutUserSkillLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    userSkillDisplayModeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateManyUserSkillDisplayModeInput = {
    id?: string
    userId: number
    skillId: string
    userSkillLevelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUpdateWithoutUserSkillDisplayModeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutUserSkillsNestedInput
    userSkillLevel?: UserSkillLevelUpdateOneRequiredWithoutUserSkillsNestedInput
  }

  export type UserSkillUncheckedUpdateWithoutUserSkillDisplayModeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    userSkillLevelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateManyWithoutUserSkillDisplayModeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    userSkillLevelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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