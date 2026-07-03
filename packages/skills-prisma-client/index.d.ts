
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
 * Model skillCategory
 * 
 */
export type skillCategory = $Result.DefaultSelection<Prisma.$skillCategoryPayload>
/**
 * Model skillEvent
 * 
 */
export type skillEvent = $Result.DefaultSelection<Prisma.$skillEventPayload>
/**
 * Model skillEventType
 * 
 */
export type skillEventType = $Result.DefaultSelection<Prisma.$skillEventTypePayload>
/**
 * Model skillReplacement
 * 
 */
export type skillReplacement = $Result.DefaultSelection<Prisma.$skillReplacementPayload>
/**
 * Model sourceType
 * 
 */
export type sourceType = $Result.DefaultSelection<Prisma.$sourceTypePayload>
/**
 * Model userSkill
 * 
 */
export type userSkill = $Result.DefaultSelection<Prisma.$userSkillPayload>
/**
 * Model userSkillWinSummary
 * Pre-computed win/submission totals per (user_id, skill_id).
 * eventTypeCounts is a JSONB map of { event_type_name: count } — no schema
 * changes needed when new SkillEventTypes values are added.
 * Maintained incrementally on each skill_event insert; used by reports-api
 * member search to avoid the expensive multi-CTE aggregation over skill_event.
 */
export type userSkillWinSummary = $Result.DefaultSelection<Prisma.$userSkillWinSummaryPayload>
/**
 * Model userSkillDisplayMode
 * 
 */
export type userSkillDisplayMode = $Result.DefaultSelection<Prisma.$userSkillDisplayModePayload>
/**
 * Model userSkillLevel
 * 
 */
export type userSkillLevel = $Result.DefaultSelection<Prisma.$userSkillLevelPayload>
/**
 * Model workSkill
 * 
 */
export type workSkill = $Result.DefaultSelection<Prisma.$workSkillPayload>

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
   * `prisma.skillCategory`: Exposes CRUD operations for the **skillCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillCategories
    * const skillCategories = await prisma.skillCategory.findMany()
    * ```
    */
  get skillCategory(): Prisma.skillCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillEvent`: Exposes CRUD operations for the **skillEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillEvents
    * const skillEvents = await prisma.skillEvent.findMany()
    * ```
    */
  get skillEvent(): Prisma.skillEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillEventType`: Exposes CRUD operations for the **skillEventType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillEventTypes
    * const skillEventTypes = await prisma.skillEventType.findMany()
    * ```
    */
  get skillEventType(): Prisma.skillEventTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillReplacement`: Exposes CRUD operations for the **skillReplacement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillReplacements
    * const skillReplacements = await prisma.skillReplacement.findMany()
    * ```
    */
  get skillReplacement(): Prisma.skillReplacementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sourceType`: Exposes CRUD operations for the **sourceType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourceTypes
    * const sourceTypes = await prisma.sourceType.findMany()
    * ```
    */
  get sourceType(): Prisma.sourceTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSkill`: Exposes CRUD operations for the **userSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkills
    * const userSkills = await prisma.userSkill.findMany()
    * ```
    */
  get userSkill(): Prisma.userSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSkillWinSummary`: Exposes CRUD operations for the **userSkillWinSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkillWinSummaries
    * const userSkillWinSummaries = await prisma.userSkillWinSummary.findMany()
    * ```
    */
  get userSkillWinSummary(): Prisma.userSkillWinSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSkillDisplayMode`: Exposes CRUD operations for the **userSkillDisplayMode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkillDisplayModes
    * const userSkillDisplayModes = await prisma.userSkillDisplayMode.findMany()
    * ```
    */
  get userSkillDisplayMode(): Prisma.userSkillDisplayModeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSkillLevel`: Exposes CRUD operations for the **userSkillLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkillLevels
    * const userSkillLevels = await prisma.userSkillLevel.findMany()
    * ```
    */
  get userSkillLevel(): Prisma.userSkillLevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workSkill`: Exposes CRUD operations for the **workSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkSkills
    * const workSkills = await prisma.workSkill.findMany()
    * ```
    */
  get workSkill(): Prisma.workSkillDelegate<ExtArgs, ClientOptions>;
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
    skillCategory: 'skillCategory',
    skillEvent: 'skillEvent',
    skillEventType: 'skillEventType',
    skillReplacement: 'skillReplacement',
    sourceType: 'sourceType',
    userSkill: 'userSkill',
    userSkillWinSummary: 'userSkillWinSummary',
    userSkillDisplayMode: 'userSkillDisplayMode',
    userSkillLevel: 'userSkillLevel',
    workSkill: 'workSkill'
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
      modelProps: "event" | "skill" | "skillCategory" | "skillEvent" | "skillEventType" | "skillReplacement" | "sourceType" | "userSkill" | "userSkillWinSummary" | "userSkillDisplayMode" | "userSkillLevel" | "workSkill"
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
      skillCategory: {
        payload: Prisma.$skillCategoryPayload<ExtArgs>
        fields: Prisma.skillCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillCategoryPayload>
          }
          findFirst: {
            args: Prisma.skillCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillCategoryPayload>
          }
          findMany: {
            args: Prisma.skillCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillCategoryPayload>[]
          }
          create: {
            args: Prisma.skillCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillCategoryPayload>
          }
          createMany: {
            args: Prisma.skillCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skillCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillCategoryPayload>[]
          }
          delete: {
            args: Prisma.skillCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillCategoryPayload>
          }
          update: {
            args: Prisma.skillCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillCategoryPayload>
          }
          deleteMany: {
            args: Prisma.skillCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.skillCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillCategoryPayload>[]
          }
          upsert: {
            args: Prisma.skillCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillCategoryPayload>
          }
          aggregate: {
            args: Prisma.SkillCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillCategory>
          }
          groupBy: {
            args: Prisma.skillCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCategoryCountAggregateOutputType> | number
          }
        }
      }
      skillEvent: {
        payload: Prisma.$skillEventPayload<ExtArgs>
        fields: Prisma.skillEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventPayload>
          }
          findFirst: {
            args: Prisma.skillEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventPayload>
          }
          findMany: {
            args: Prisma.skillEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventPayload>[]
          }
          create: {
            args: Prisma.skillEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventPayload>
          }
          createMany: {
            args: Prisma.skillEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skillEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventPayload>[]
          }
          delete: {
            args: Prisma.skillEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventPayload>
          }
          update: {
            args: Prisma.skillEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventPayload>
          }
          deleteMany: {
            args: Prisma.skillEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.skillEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventPayload>[]
          }
          upsert: {
            args: Prisma.skillEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventPayload>
          }
          aggregate: {
            args: Prisma.SkillEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillEvent>
          }
          groupBy: {
            args: Prisma.skillEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillEventCountArgs<ExtArgs>
            result: $Utils.Optional<SkillEventCountAggregateOutputType> | number
          }
        }
      }
      skillEventType: {
        payload: Prisma.$skillEventTypePayload<ExtArgs>
        fields: Prisma.skillEventTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillEventTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillEventTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventTypePayload>
          }
          findFirst: {
            args: Prisma.skillEventTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillEventTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventTypePayload>
          }
          findMany: {
            args: Prisma.skillEventTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventTypePayload>[]
          }
          create: {
            args: Prisma.skillEventTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventTypePayload>
          }
          createMany: {
            args: Prisma.skillEventTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skillEventTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventTypePayload>[]
          }
          delete: {
            args: Prisma.skillEventTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventTypePayload>
          }
          update: {
            args: Prisma.skillEventTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventTypePayload>
          }
          deleteMany: {
            args: Prisma.skillEventTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillEventTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.skillEventTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventTypePayload>[]
          }
          upsert: {
            args: Prisma.skillEventTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillEventTypePayload>
          }
          aggregate: {
            args: Prisma.SkillEventTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillEventType>
          }
          groupBy: {
            args: Prisma.skillEventTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillEventTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillEventTypeCountArgs<ExtArgs>
            result: $Utils.Optional<SkillEventTypeCountAggregateOutputType> | number
          }
        }
      }
      skillReplacement: {
        payload: Prisma.$skillReplacementPayload<ExtArgs>
        fields: Prisma.skillReplacementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillReplacementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillReplacementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillReplacementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillReplacementPayload>
          }
          findFirst: {
            args: Prisma.skillReplacementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillReplacementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillReplacementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillReplacementPayload>
          }
          findMany: {
            args: Prisma.skillReplacementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillReplacementPayload>[]
          }
          create: {
            args: Prisma.skillReplacementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillReplacementPayload>
          }
          createMany: {
            args: Prisma.skillReplacementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skillReplacementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillReplacementPayload>[]
          }
          delete: {
            args: Prisma.skillReplacementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillReplacementPayload>
          }
          update: {
            args: Prisma.skillReplacementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillReplacementPayload>
          }
          deleteMany: {
            args: Prisma.skillReplacementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillReplacementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.skillReplacementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillReplacementPayload>[]
          }
          upsert: {
            args: Prisma.skillReplacementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillReplacementPayload>
          }
          aggregate: {
            args: Prisma.SkillReplacementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillReplacement>
          }
          groupBy: {
            args: Prisma.skillReplacementGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillReplacementGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillReplacementCountArgs<ExtArgs>
            result: $Utils.Optional<SkillReplacementCountAggregateOutputType> | number
          }
        }
      }
      sourceType: {
        payload: Prisma.$sourceTypePayload<ExtArgs>
        fields: Prisma.sourceTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sourceTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourceTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sourceTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourceTypePayload>
          }
          findFirst: {
            args: Prisma.sourceTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourceTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sourceTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourceTypePayload>
          }
          findMany: {
            args: Prisma.sourceTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourceTypePayload>[]
          }
          create: {
            args: Prisma.sourceTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourceTypePayload>
          }
          createMany: {
            args: Prisma.sourceTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sourceTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourceTypePayload>[]
          }
          delete: {
            args: Prisma.sourceTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourceTypePayload>
          }
          update: {
            args: Prisma.sourceTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourceTypePayload>
          }
          deleteMany: {
            args: Prisma.sourceTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sourceTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sourceTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourceTypePayload>[]
          }
          upsert: {
            args: Prisma.sourceTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sourceTypePayload>
          }
          aggregate: {
            args: Prisma.SourceTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourceType>
          }
          groupBy: {
            args: Prisma.sourceTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.sourceTypeCountArgs<ExtArgs>
            result: $Utils.Optional<SourceTypeCountAggregateOutputType> | number
          }
        }
      }
      userSkill: {
        payload: Prisma.$userSkillPayload<ExtArgs>
        fields: Prisma.userSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillPayload>
          }
          findFirst: {
            args: Prisma.userSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillPayload>
          }
          findMany: {
            args: Prisma.userSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillPayload>[]
          }
          create: {
            args: Prisma.userSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillPayload>
          }
          createMany: {
            args: Prisma.userSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillPayload>[]
          }
          delete: {
            args: Prisma.userSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillPayload>
          }
          update: {
            args: Prisma.userSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillPayload>
          }
          deleteMany: {
            args: Prisma.userSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillPayload>[]
          }
          upsert: {
            args: Prisma.userSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillPayload>
          }
          aggregate: {
            args: Prisma.UserSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkill>
          }
          groupBy: {
            args: Prisma.userSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.userSkillCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillCountAggregateOutputType> | number
          }
        }
      }
      userSkillWinSummary: {
        payload: Prisma.$userSkillWinSummaryPayload<ExtArgs>
        fields: Prisma.userSkillWinSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userSkillWinSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillWinSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userSkillWinSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillWinSummaryPayload>
          }
          findFirst: {
            args: Prisma.userSkillWinSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillWinSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userSkillWinSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillWinSummaryPayload>
          }
          findMany: {
            args: Prisma.userSkillWinSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillWinSummaryPayload>[]
          }
          create: {
            args: Prisma.userSkillWinSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillWinSummaryPayload>
          }
          createMany: {
            args: Prisma.userSkillWinSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userSkillWinSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillWinSummaryPayload>[]
          }
          delete: {
            args: Prisma.userSkillWinSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillWinSummaryPayload>
          }
          update: {
            args: Prisma.userSkillWinSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillWinSummaryPayload>
          }
          deleteMany: {
            args: Prisma.userSkillWinSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userSkillWinSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userSkillWinSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillWinSummaryPayload>[]
          }
          upsert: {
            args: Prisma.userSkillWinSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillWinSummaryPayload>
          }
          aggregate: {
            args: Prisma.UserSkillWinSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkillWinSummary>
          }
          groupBy: {
            args: Prisma.userSkillWinSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillWinSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.userSkillWinSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillWinSummaryCountAggregateOutputType> | number
          }
        }
      }
      userSkillDisplayMode: {
        payload: Prisma.$userSkillDisplayModePayload<ExtArgs>
        fields: Prisma.userSkillDisplayModeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userSkillDisplayModeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillDisplayModePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userSkillDisplayModeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillDisplayModePayload>
          }
          findFirst: {
            args: Prisma.userSkillDisplayModeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillDisplayModePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userSkillDisplayModeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillDisplayModePayload>
          }
          findMany: {
            args: Prisma.userSkillDisplayModeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillDisplayModePayload>[]
          }
          create: {
            args: Prisma.userSkillDisplayModeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillDisplayModePayload>
          }
          createMany: {
            args: Prisma.userSkillDisplayModeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userSkillDisplayModeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillDisplayModePayload>[]
          }
          delete: {
            args: Prisma.userSkillDisplayModeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillDisplayModePayload>
          }
          update: {
            args: Prisma.userSkillDisplayModeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillDisplayModePayload>
          }
          deleteMany: {
            args: Prisma.userSkillDisplayModeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userSkillDisplayModeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userSkillDisplayModeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillDisplayModePayload>[]
          }
          upsert: {
            args: Prisma.userSkillDisplayModeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillDisplayModePayload>
          }
          aggregate: {
            args: Prisma.UserSkillDisplayModeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkillDisplayMode>
          }
          groupBy: {
            args: Prisma.userSkillDisplayModeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillDisplayModeGroupByOutputType>[]
          }
          count: {
            args: Prisma.userSkillDisplayModeCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillDisplayModeCountAggregateOutputType> | number
          }
        }
      }
      userSkillLevel: {
        payload: Prisma.$userSkillLevelPayload<ExtArgs>
        fields: Prisma.userSkillLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userSkillLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userSkillLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillLevelPayload>
          }
          findFirst: {
            args: Prisma.userSkillLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userSkillLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillLevelPayload>
          }
          findMany: {
            args: Prisma.userSkillLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillLevelPayload>[]
          }
          create: {
            args: Prisma.userSkillLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillLevelPayload>
          }
          createMany: {
            args: Prisma.userSkillLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userSkillLevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillLevelPayload>[]
          }
          delete: {
            args: Prisma.userSkillLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillLevelPayload>
          }
          update: {
            args: Prisma.userSkillLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillLevelPayload>
          }
          deleteMany: {
            args: Prisma.userSkillLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userSkillLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userSkillLevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillLevelPayload>[]
          }
          upsert: {
            args: Prisma.userSkillLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSkillLevelPayload>
          }
          aggregate: {
            args: Prisma.UserSkillLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkillLevel>
          }
          groupBy: {
            args: Prisma.userSkillLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.userSkillLevelCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillLevelCountAggregateOutputType> | number
          }
        }
      }
      workSkill: {
        payload: Prisma.$workSkillPayload<ExtArgs>
        fields: Prisma.workSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workSkillPayload>
          }
          findFirst: {
            args: Prisma.workSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workSkillPayload>
          }
          findMany: {
            args: Prisma.workSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workSkillPayload>[]
          }
          create: {
            args: Prisma.workSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workSkillPayload>
          }
          createMany: {
            args: Prisma.workSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workSkillPayload>[]
          }
          delete: {
            args: Prisma.workSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workSkillPayload>
          }
          update: {
            args: Prisma.workSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workSkillPayload>
          }
          deleteMany: {
            args: Prisma.workSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workSkillPayload>[]
          }
          upsert: {
            args: Prisma.workSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workSkillPayload>
          }
          aggregate: {
            args: Prisma.WorkSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkSkill>
          }
          groupBy: {
            args: Prisma.workSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.workSkillCountArgs<ExtArgs>
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
    event?: eventOmit
    skill?: skillOmit
    skillCategory?: skillCategoryOmit
    skillEvent?: skillEventOmit
    skillEventType?: skillEventTypeOmit
    skillReplacement?: skillReplacementOmit
    sourceType?: sourceTypeOmit
    userSkill?: userSkillOmit
    userSkillWinSummary?: userSkillWinSummaryOmit
    userSkillDisplayMode?: userSkillDisplayModeOmit
    userSkillLevel?: userSkillLevelOmit
    workSkill?: workSkillOmit
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
    where?: skillEventWhereInput
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
    where?: skillEventWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountUserSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userSkillWhereInput
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
    where?: skillWhereInput
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
    where?: skillEventWhereInput
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
    where?: skillEventWhereInput
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
    where?: userSkillWhereInput
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
    where?: userSkillWhereInput
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
    payloadHash: string | null
    createdAt: Date
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
    payloadHash?: boolean
    createdAt?: boolean
    skillEvents?: boolean | event$skillEventsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type eventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic?: boolean
    payload?: boolean
    payloadHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type eventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic?: boolean
    payload?: boolean
    payloadHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type eventSelectScalar = {
    id?: boolean
    topic?: boolean
    payload?: boolean
    payloadHash?: boolean
    createdAt?: boolean
  }

  export type eventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "topic" | "payload" | "payloadHash" | "createdAt", ExtArgs["result"]["event"]>
  export type eventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillEvents?: boolean | event$skillEventsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type eventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type eventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $eventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "event"
    objects: {
      skillEvents: Prisma.$skillEventPayload<ExtArgs>[]
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
    skillEvents<T extends event$skillEventsArgs<ExtArgs> = {}>(args?: Subset<T, event$skillEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly payloadHash: FieldRef<"event", 'String'>
    readonly createdAt: FieldRef<"event", 'DateTime'>
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
   * event.skillEvents
   */
  export type event$skillEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventInclude<ExtArgs> | null
    where?: skillEventWhereInput
    orderBy?: skillEventOrderByWithRelationInput | skillEventOrderByWithRelationInput[]
    cursor?: skillEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillEventScalarFieldEnum | SkillEventScalarFieldEnum[]
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
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    devId: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    devId: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    description: number
    categoryId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    devId: number
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
    devId?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    devId?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    devId?: true
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
    categoryId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    devId: string | null
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
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    devId?: boolean
    category?: boolean | skill$categoryArgs<ExtArgs>
    skillEvents?: boolean | skill$skillEventsArgs<ExtArgs>
    userSkills?: boolean | skill$userSkillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type skillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    devId?: boolean
    category?: boolean | skill$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type skillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    devId?: boolean
    category?: boolean | skill$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type skillSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    devId?: boolean
  }

  export type skillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "categoryId" | "createdAt" | "updatedAt" | "deletedAt" | "devId", ExtArgs["result"]["skill"]>
  export type skillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | skill$categoryArgs<ExtArgs>
    skillEvents?: boolean | skill$skillEventsArgs<ExtArgs>
    userSkills?: boolean | skill$userSkillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type skillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | skill$categoryArgs<ExtArgs>
  }
  export type skillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | skill$categoryArgs<ExtArgs>
  }

  export type $skillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skill"
    objects: {
      category: Prisma.$skillCategoryPayload<ExtArgs> | null
      skillEvents: Prisma.$skillEventPayload<ExtArgs>[]
      userSkills: Prisma.$userSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      categoryId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      devId: string | null
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
    category<T extends skill$categoryArgs<ExtArgs> = {}>(args?: Subset<T, skill$categoryArgs<ExtArgs>>): Prisma__skillCategoryClient<$Result.GetResult<Prisma.$skillCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    skillEvents<T extends skill$skillEventsArgs<ExtArgs> = {}>(args?: Subset<T, skill$skillEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userSkills<T extends skill$userSkillsArgs<ExtArgs> = {}>(args?: Subset<T, skill$userSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly categoryId: FieldRef<"skill", 'String'>
    readonly createdAt: FieldRef<"skill", 'DateTime'>
    readonly updatedAt: FieldRef<"skill", 'DateTime'>
    readonly deletedAt: FieldRef<"skill", 'DateTime'>
    readonly devId: FieldRef<"skill", 'String'>
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
   * skill.category
   */
  export type skill$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillCategory
     */
    select?: skillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillCategory
     */
    omit?: skillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillCategoryInclude<ExtArgs> | null
    where?: skillCategoryWhereInput
  }

  /**
   * skill.skillEvents
   */
  export type skill$skillEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventInclude<ExtArgs> | null
    where?: skillEventWhereInput
    orderBy?: skillEventOrderByWithRelationInput | skillEventOrderByWithRelationInput[]
    cursor?: skillEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillEventScalarFieldEnum | SkillEventScalarFieldEnum[]
  }

  /**
   * skill.userSkills
   */
  export type skill$userSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillInclude<ExtArgs> | null
    where?: userSkillWhereInput
    orderBy?: userSkillOrderByWithRelationInput | userSkillOrderByWithRelationInput[]
    cursor?: userSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
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
   * Model skillCategory
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
     * Filter which skillCategory to aggregate.
     */
    where?: skillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillCategories to fetch.
     */
    orderBy?: skillCategoryOrderByWithRelationInput | skillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skillCategories
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




  export type skillCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillCategoryWhereInput
    orderBy?: skillCategoryOrderByWithAggregationInput | skillCategoryOrderByWithAggregationInput[]
    by: SkillCategoryScalarFieldEnum[] | SkillCategoryScalarFieldEnum
    having?: skillCategoryScalarWhereWithAggregatesInput
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

  type GetSkillCategoryGroupByPayload<T extends skillCategoryGroupByArgs> = Prisma.PrismaPromise<
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


  export type skillCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skills?: boolean | skillCategory$skillsArgs<ExtArgs>
    _count?: boolean | SkillCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillCategory"]>

  export type skillCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillCategory"]>

  export type skillCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillCategory"]>

  export type skillCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type skillCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["skillCategory"]>
  export type skillCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | skillCategory$skillsArgs<ExtArgs>
    _count?: boolean | SkillCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type skillCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type skillCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $skillCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skillCategory"
    objects: {
      skills: Prisma.$skillPayload<ExtArgs>[]
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

  type skillCategoryGetPayload<S extends boolean | null | undefined | skillCategoryDefaultArgs> = $Result.GetResult<Prisma.$skillCategoryPayload, S>

  type skillCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skillCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCategoryCountAggregateInputType | true
    }

  export interface skillCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skillCategory'], meta: { name: 'skillCategory' } }
    /**
     * Find zero or one SkillCategory that matches the filter.
     * @param {skillCategoryFindUniqueArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillCategoryFindUniqueArgs>(args: SelectSubset<T, skillCategoryFindUniqueArgs<ExtArgs>>): Prisma__skillCategoryClient<$Result.GetResult<Prisma.$skillCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skillCategoryFindUniqueOrThrowArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, skillCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillCategoryClient<$Result.GetResult<Prisma.$skillCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillCategoryFindFirstArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillCategoryFindFirstArgs>(args?: SelectSubset<T, skillCategoryFindFirstArgs<ExtArgs>>): Prisma__skillCategoryClient<$Result.GetResult<Prisma.$skillCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillCategoryFindFirstOrThrowArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, skillCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillCategoryClient<$Result.GetResult<Prisma.$skillCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends skillCategoryFindManyArgs>(args?: SelectSubset<T, skillCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillCategory.
     * @param {skillCategoryCreateArgs} args - Arguments to create a SkillCategory.
     * @example
     * // Create one SkillCategory
     * const SkillCategory = await prisma.skillCategory.create({
     *   data: {
     *     // ... data to create a SkillCategory
     *   }
     * })
     * 
     */
    create<T extends skillCategoryCreateArgs>(args: SelectSubset<T, skillCategoryCreateArgs<ExtArgs>>): Prisma__skillCategoryClient<$Result.GetResult<Prisma.$skillCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillCategories.
     * @param {skillCategoryCreateManyArgs} args - Arguments to create many SkillCategories.
     * @example
     * // Create many SkillCategories
     * const skillCategory = await prisma.skillCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillCategoryCreateManyArgs>(args?: SelectSubset<T, skillCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillCategories and returns the data saved in the database.
     * @param {skillCategoryCreateManyAndReturnArgs} args - Arguments to create many SkillCategories.
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
    createManyAndReturn<T extends skillCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, skillCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillCategory.
     * @param {skillCategoryDeleteArgs} args - Arguments to delete one SkillCategory.
     * @example
     * // Delete one SkillCategory
     * const SkillCategory = await prisma.skillCategory.delete({
     *   where: {
     *     // ... filter to delete one SkillCategory
     *   }
     * })
     * 
     */
    delete<T extends skillCategoryDeleteArgs>(args: SelectSubset<T, skillCategoryDeleteArgs<ExtArgs>>): Prisma__skillCategoryClient<$Result.GetResult<Prisma.$skillCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillCategory.
     * @param {skillCategoryUpdateArgs} args - Arguments to update one SkillCategory.
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
    update<T extends skillCategoryUpdateArgs>(args: SelectSubset<T, skillCategoryUpdateArgs<ExtArgs>>): Prisma__skillCategoryClient<$Result.GetResult<Prisma.$skillCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillCategories.
     * @param {skillCategoryDeleteManyArgs} args - Arguments to filter SkillCategories to delete.
     * @example
     * // Delete a few SkillCategories
     * const { count } = await prisma.skillCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillCategoryDeleteManyArgs>(args?: SelectSubset<T, skillCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillCategoryUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends skillCategoryUpdateManyArgs>(args: SelectSubset<T, skillCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillCategories and returns the data updated in the database.
     * @param {skillCategoryUpdateManyAndReturnArgs} args - Arguments to update many SkillCategories.
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
    updateManyAndReturn<T extends skillCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, skillCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillCategory.
     * @param {skillCategoryUpsertArgs} args - Arguments to update or create a SkillCategory.
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
    upsert<T extends skillCategoryUpsertArgs>(args: SelectSubset<T, skillCategoryUpsertArgs<ExtArgs>>): Prisma__skillCategoryClient<$Result.GetResult<Prisma.$skillCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillCategoryCountArgs} args - Arguments to filter SkillCategories to count.
     * @example
     * // Count the number of SkillCategories
     * const count = await prisma.skillCategory.count({
     *   where: {
     *     // ... the filter for the SkillCategories we want to count
     *   }
     * })
    **/
    count<T extends skillCategoryCountArgs>(
      args?: Subset<T, skillCategoryCountArgs>,
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
     * @param {skillCategoryGroupByArgs} args - Group by arguments.
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
      T extends skillCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillCategoryGroupByArgs['orderBy'] }
        : { orderBy?: skillCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skillCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skillCategory model
   */
  readonly fields: skillCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skillCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends skillCategory$skillsArgs<ExtArgs> = {}>(args?: Subset<T, skillCategory$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the skillCategory model
   */
  interface skillCategoryFieldRefs {
    readonly id: FieldRef<"skillCategory", 'String'>
    readonly name: FieldRef<"skillCategory", 'String'>
    readonly description: FieldRef<"skillCategory", 'String'>
    readonly createdAt: FieldRef<"skillCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"skillCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * skillCategory findUnique
   */
  export type skillCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillCategory
     */
    select?: skillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillCategory
     */
    omit?: skillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which skillCategory to fetch.
     */
    where: skillCategoryWhereUniqueInput
  }

  /**
   * skillCategory findUniqueOrThrow
   */
  export type skillCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillCategory
     */
    select?: skillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillCategory
     */
    omit?: skillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which skillCategory to fetch.
     */
    where: skillCategoryWhereUniqueInput
  }

  /**
   * skillCategory findFirst
   */
  export type skillCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillCategory
     */
    select?: skillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillCategory
     */
    omit?: skillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which skillCategory to fetch.
     */
    where?: skillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillCategories to fetch.
     */
    orderBy?: skillCategoryOrderByWithRelationInput | skillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skillCategories.
     */
    cursor?: skillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skillCategories.
     */
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * skillCategory findFirstOrThrow
   */
  export type skillCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillCategory
     */
    select?: skillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillCategory
     */
    omit?: skillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which skillCategory to fetch.
     */
    where?: skillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillCategories to fetch.
     */
    orderBy?: skillCategoryOrderByWithRelationInput | skillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skillCategories.
     */
    cursor?: skillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skillCategories.
     */
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * skillCategory findMany
   */
  export type skillCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillCategory
     */
    select?: skillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillCategory
     */
    omit?: skillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which skillCategories to fetch.
     */
    where?: skillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillCategories to fetch.
     */
    orderBy?: skillCategoryOrderByWithRelationInput | skillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skillCategories.
     */
    cursor?: skillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillCategories.
     */
    skip?: number
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * skillCategory create
   */
  export type skillCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillCategory
     */
    select?: skillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillCategory
     */
    omit?: skillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a skillCategory.
     */
    data: XOR<skillCategoryCreateInput, skillCategoryUncheckedCreateInput>
  }

  /**
   * skillCategory createMany
   */
  export type skillCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skillCategories.
     */
    data: skillCategoryCreateManyInput | skillCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skillCategory createManyAndReturn
   */
  export type skillCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillCategory
     */
    select?: skillCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skillCategory
     */
    omit?: skillCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many skillCategories.
     */
    data: skillCategoryCreateManyInput | skillCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skillCategory update
   */
  export type skillCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillCategory
     */
    select?: skillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillCategory
     */
    omit?: skillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a skillCategory.
     */
    data: XOR<skillCategoryUpdateInput, skillCategoryUncheckedUpdateInput>
    /**
     * Choose, which skillCategory to update.
     */
    where: skillCategoryWhereUniqueInput
  }

  /**
   * skillCategory updateMany
   */
  export type skillCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skillCategories.
     */
    data: XOR<skillCategoryUpdateManyMutationInput, skillCategoryUncheckedUpdateManyInput>
    /**
     * Filter which skillCategories to update
     */
    where?: skillCategoryWhereInput
    /**
     * Limit how many skillCategories to update.
     */
    limit?: number
  }

  /**
   * skillCategory updateManyAndReturn
   */
  export type skillCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillCategory
     */
    select?: skillCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skillCategory
     */
    omit?: skillCategoryOmit<ExtArgs> | null
    /**
     * The data used to update skillCategories.
     */
    data: XOR<skillCategoryUpdateManyMutationInput, skillCategoryUncheckedUpdateManyInput>
    /**
     * Filter which skillCategories to update
     */
    where?: skillCategoryWhereInput
    /**
     * Limit how many skillCategories to update.
     */
    limit?: number
  }

  /**
   * skillCategory upsert
   */
  export type skillCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillCategory
     */
    select?: skillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillCategory
     */
    omit?: skillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the skillCategory to update in case it exists.
     */
    where: skillCategoryWhereUniqueInput
    /**
     * In case the skillCategory found by the `where` argument doesn't exist, create a new skillCategory with this data.
     */
    create: XOR<skillCategoryCreateInput, skillCategoryUncheckedCreateInput>
    /**
     * In case the skillCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillCategoryUpdateInput, skillCategoryUncheckedUpdateInput>
  }

  /**
   * skillCategory delete
   */
  export type skillCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillCategory
     */
    select?: skillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillCategory
     */
    omit?: skillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillCategoryInclude<ExtArgs> | null
    /**
     * Filter which skillCategory to delete.
     */
    where: skillCategoryWhereUniqueInput
  }

  /**
   * skillCategory deleteMany
   */
  export type skillCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skillCategories to delete
     */
    where?: skillCategoryWhereInput
    /**
     * Limit how many skillCategories to delete.
     */
    limit?: number
  }

  /**
   * skillCategory.skills
   */
  export type skillCategory$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * skillCategory without action
   */
  export type skillCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillCategory
     */
    select?: skillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillCategory
     */
    omit?: skillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillCategoryInclude<ExtArgs> | null
  }


  /**
   * Model skillEvent
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
     * Filter which skillEvent to aggregate.
     */
    where?: skillEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillEvents to fetch.
     */
    orderBy?: skillEventOrderByWithRelationInput | skillEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skillEvents
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




  export type skillEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillEventWhereInput
    orderBy?: skillEventOrderByWithAggregationInput | skillEventOrderByWithAggregationInput[]
    by: SkillEventScalarFieldEnum[] | SkillEventScalarFieldEnum
    having?: skillEventScalarWhereWithAggregatesInput
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

  type GetSkillEventGroupByPayload<T extends skillEventGroupByArgs> = Prisma.PrismaPromise<
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


  export type skillEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    skillId?: boolean
    skillEventTypeId?: boolean
    sourceId?: boolean
    sourceTypeId?: boolean
    createdAt?: boolean
    event?: boolean | eventDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
    skillEventType?: boolean | skillEventTypeDefaultArgs<ExtArgs>
    sourceType?: boolean | sourceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillEvent"]>

  export type skillEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    skillId?: boolean
    skillEventTypeId?: boolean
    sourceId?: boolean
    sourceTypeId?: boolean
    createdAt?: boolean
    event?: boolean | eventDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
    skillEventType?: boolean | skillEventTypeDefaultArgs<ExtArgs>
    sourceType?: boolean | sourceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillEvent"]>

  export type skillEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    skillId?: boolean
    skillEventTypeId?: boolean
    sourceId?: boolean
    sourceTypeId?: boolean
    createdAt?: boolean
    event?: boolean | eventDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
    skillEventType?: boolean | skillEventTypeDefaultArgs<ExtArgs>
    sourceType?: boolean | sourceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillEvent"]>

  export type skillEventSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
    skillId?: boolean
    skillEventTypeId?: boolean
    sourceId?: boolean
    sourceTypeId?: boolean
    createdAt?: boolean
  }

  export type skillEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "userId" | "skillId" | "skillEventTypeId" | "sourceId" | "sourceTypeId" | "createdAt", ExtArgs["result"]["skillEvent"]>
  export type skillEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | eventDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
    skillEventType?: boolean | skillEventTypeDefaultArgs<ExtArgs>
    sourceType?: boolean | sourceTypeDefaultArgs<ExtArgs>
  }
  export type skillEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | eventDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
    skillEventType?: boolean | skillEventTypeDefaultArgs<ExtArgs>
    sourceType?: boolean | sourceTypeDefaultArgs<ExtArgs>
  }
  export type skillEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | eventDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
    skillEventType?: boolean | skillEventTypeDefaultArgs<ExtArgs>
    sourceType?: boolean | sourceTypeDefaultArgs<ExtArgs>
  }

  export type $skillEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skillEvent"
    objects: {
      event: Prisma.$eventPayload<ExtArgs>
      skill: Prisma.$skillPayload<ExtArgs>
      skillEventType: Prisma.$skillEventTypePayload<ExtArgs>
      sourceType: Prisma.$sourceTypePayload<ExtArgs>
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

  type skillEventGetPayload<S extends boolean | null | undefined | skillEventDefaultArgs> = $Result.GetResult<Prisma.$skillEventPayload, S>

  type skillEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skillEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillEventCountAggregateInputType | true
    }

  export interface skillEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skillEvent'], meta: { name: 'skillEvent' } }
    /**
     * Find zero or one SkillEvent that matches the filter.
     * @param {skillEventFindUniqueArgs} args - Arguments to find a SkillEvent
     * @example
     * // Get one SkillEvent
     * const skillEvent = await prisma.skillEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillEventFindUniqueArgs>(args: SelectSubset<T, skillEventFindUniqueArgs<ExtArgs>>): Prisma__skillEventClient<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skillEventFindUniqueOrThrowArgs} args - Arguments to find a SkillEvent
     * @example
     * // Get one SkillEvent
     * const skillEvent = await prisma.skillEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillEventFindUniqueOrThrowArgs>(args: SelectSubset<T, skillEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillEventClient<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillEventFindFirstArgs} args - Arguments to find a SkillEvent
     * @example
     * // Get one SkillEvent
     * const skillEvent = await prisma.skillEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillEventFindFirstArgs>(args?: SelectSubset<T, skillEventFindFirstArgs<ExtArgs>>): Prisma__skillEventClient<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillEventFindFirstOrThrowArgs} args - Arguments to find a SkillEvent
     * @example
     * // Get one SkillEvent
     * const skillEvent = await prisma.skillEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillEventFindFirstOrThrowArgs>(args?: SelectSubset<T, skillEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillEventClient<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillEventFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends skillEventFindManyArgs>(args?: SelectSubset<T, skillEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillEvent.
     * @param {skillEventCreateArgs} args - Arguments to create a SkillEvent.
     * @example
     * // Create one SkillEvent
     * const SkillEvent = await prisma.skillEvent.create({
     *   data: {
     *     // ... data to create a SkillEvent
     *   }
     * })
     * 
     */
    create<T extends skillEventCreateArgs>(args: SelectSubset<T, skillEventCreateArgs<ExtArgs>>): Prisma__skillEventClient<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillEvents.
     * @param {skillEventCreateManyArgs} args - Arguments to create many SkillEvents.
     * @example
     * // Create many SkillEvents
     * const skillEvent = await prisma.skillEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillEventCreateManyArgs>(args?: SelectSubset<T, skillEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillEvents and returns the data saved in the database.
     * @param {skillEventCreateManyAndReturnArgs} args - Arguments to create many SkillEvents.
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
    createManyAndReturn<T extends skillEventCreateManyAndReturnArgs>(args?: SelectSubset<T, skillEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillEvent.
     * @param {skillEventDeleteArgs} args - Arguments to delete one SkillEvent.
     * @example
     * // Delete one SkillEvent
     * const SkillEvent = await prisma.skillEvent.delete({
     *   where: {
     *     // ... filter to delete one SkillEvent
     *   }
     * })
     * 
     */
    delete<T extends skillEventDeleteArgs>(args: SelectSubset<T, skillEventDeleteArgs<ExtArgs>>): Prisma__skillEventClient<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillEvent.
     * @param {skillEventUpdateArgs} args - Arguments to update one SkillEvent.
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
    update<T extends skillEventUpdateArgs>(args: SelectSubset<T, skillEventUpdateArgs<ExtArgs>>): Prisma__skillEventClient<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillEvents.
     * @param {skillEventDeleteManyArgs} args - Arguments to filter SkillEvents to delete.
     * @example
     * // Delete a few SkillEvents
     * const { count } = await prisma.skillEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillEventDeleteManyArgs>(args?: SelectSubset<T, skillEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillEventUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends skillEventUpdateManyArgs>(args: SelectSubset<T, skillEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillEvents and returns the data updated in the database.
     * @param {skillEventUpdateManyAndReturnArgs} args - Arguments to update many SkillEvents.
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
    updateManyAndReturn<T extends skillEventUpdateManyAndReturnArgs>(args: SelectSubset<T, skillEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillEvent.
     * @param {skillEventUpsertArgs} args - Arguments to update or create a SkillEvent.
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
    upsert<T extends skillEventUpsertArgs>(args: SelectSubset<T, skillEventUpsertArgs<ExtArgs>>): Prisma__skillEventClient<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillEventCountArgs} args - Arguments to filter SkillEvents to count.
     * @example
     * // Count the number of SkillEvents
     * const count = await prisma.skillEvent.count({
     *   where: {
     *     // ... the filter for the SkillEvents we want to count
     *   }
     * })
    **/
    count<T extends skillEventCountArgs>(
      args?: Subset<T, skillEventCountArgs>,
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
     * @param {skillEventGroupByArgs} args - Group by arguments.
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
      T extends skillEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillEventGroupByArgs['orderBy'] }
        : { orderBy?: skillEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skillEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skillEvent model
   */
  readonly fields: skillEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skillEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends eventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventDefaultArgs<ExtArgs>>): Prisma__eventClient<$Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends skillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, skillDefaultArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skillEventType<T extends skillEventTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, skillEventTypeDefaultArgs<ExtArgs>>): Prisma__skillEventTypeClient<$Result.GetResult<Prisma.$skillEventTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sourceType<T extends sourceTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sourceTypeDefaultArgs<ExtArgs>>): Prisma__sourceTypeClient<$Result.GetResult<Prisma.$sourceTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the skillEvent model
   */
  interface skillEventFieldRefs {
    readonly id: FieldRef<"skillEvent", 'String'>
    readonly eventId: FieldRef<"skillEvent", 'String'>
    readonly userId: FieldRef<"skillEvent", 'Int'>
    readonly skillId: FieldRef<"skillEvent", 'String'>
    readonly skillEventTypeId: FieldRef<"skillEvent", 'String'>
    readonly sourceId: FieldRef<"skillEvent", 'String'>
    readonly sourceTypeId: FieldRef<"skillEvent", 'String'>
    readonly createdAt: FieldRef<"skillEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * skillEvent findUnique
   */
  export type skillEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventInclude<ExtArgs> | null
    /**
     * Filter, which skillEvent to fetch.
     */
    where: skillEventWhereUniqueInput
  }

  /**
   * skillEvent findUniqueOrThrow
   */
  export type skillEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventInclude<ExtArgs> | null
    /**
     * Filter, which skillEvent to fetch.
     */
    where: skillEventWhereUniqueInput
  }

  /**
   * skillEvent findFirst
   */
  export type skillEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventInclude<ExtArgs> | null
    /**
     * Filter, which skillEvent to fetch.
     */
    where?: skillEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillEvents to fetch.
     */
    orderBy?: skillEventOrderByWithRelationInput | skillEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skillEvents.
     */
    cursor?: skillEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skillEvents.
     */
    distinct?: SkillEventScalarFieldEnum | SkillEventScalarFieldEnum[]
  }

  /**
   * skillEvent findFirstOrThrow
   */
  export type skillEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventInclude<ExtArgs> | null
    /**
     * Filter, which skillEvent to fetch.
     */
    where?: skillEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillEvents to fetch.
     */
    orderBy?: skillEventOrderByWithRelationInput | skillEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skillEvents.
     */
    cursor?: skillEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skillEvents.
     */
    distinct?: SkillEventScalarFieldEnum | SkillEventScalarFieldEnum[]
  }

  /**
   * skillEvent findMany
   */
  export type skillEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventInclude<ExtArgs> | null
    /**
     * Filter, which skillEvents to fetch.
     */
    where?: skillEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillEvents to fetch.
     */
    orderBy?: skillEventOrderByWithRelationInput | skillEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skillEvents.
     */
    cursor?: skillEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillEvents.
     */
    skip?: number
    distinct?: SkillEventScalarFieldEnum | SkillEventScalarFieldEnum[]
  }

  /**
   * skillEvent create
   */
  export type skillEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventInclude<ExtArgs> | null
    /**
     * The data needed to create a skillEvent.
     */
    data: XOR<skillEventCreateInput, skillEventUncheckedCreateInput>
  }

  /**
   * skillEvent createMany
   */
  export type skillEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skillEvents.
     */
    data: skillEventCreateManyInput | skillEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skillEvent createManyAndReturn
   */
  export type skillEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * The data used to create many skillEvents.
     */
    data: skillEventCreateManyInput | skillEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * skillEvent update
   */
  export type skillEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventInclude<ExtArgs> | null
    /**
     * The data needed to update a skillEvent.
     */
    data: XOR<skillEventUpdateInput, skillEventUncheckedUpdateInput>
    /**
     * Choose, which skillEvent to update.
     */
    where: skillEventWhereUniqueInput
  }

  /**
   * skillEvent updateMany
   */
  export type skillEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skillEvents.
     */
    data: XOR<skillEventUpdateManyMutationInput, skillEventUncheckedUpdateManyInput>
    /**
     * Filter which skillEvents to update
     */
    where?: skillEventWhereInput
    /**
     * Limit how many skillEvents to update.
     */
    limit?: number
  }

  /**
   * skillEvent updateManyAndReturn
   */
  export type skillEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * The data used to update skillEvents.
     */
    data: XOR<skillEventUpdateManyMutationInput, skillEventUncheckedUpdateManyInput>
    /**
     * Filter which skillEvents to update
     */
    where?: skillEventWhereInput
    /**
     * Limit how many skillEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * skillEvent upsert
   */
  export type skillEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventInclude<ExtArgs> | null
    /**
     * The filter to search for the skillEvent to update in case it exists.
     */
    where: skillEventWhereUniqueInput
    /**
     * In case the skillEvent found by the `where` argument doesn't exist, create a new skillEvent with this data.
     */
    create: XOR<skillEventCreateInput, skillEventUncheckedCreateInput>
    /**
     * In case the skillEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillEventUpdateInput, skillEventUncheckedUpdateInput>
  }

  /**
   * skillEvent delete
   */
  export type skillEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventInclude<ExtArgs> | null
    /**
     * Filter which skillEvent to delete.
     */
    where: skillEventWhereUniqueInput
  }

  /**
   * skillEvent deleteMany
   */
  export type skillEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skillEvents to delete
     */
    where?: skillEventWhereInput
    /**
     * Limit how many skillEvents to delete.
     */
    limit?: number
  }

  /**
   * skillEvent without action
   */
  export type skillEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventInclude<ExtArgs> | null
  }


  /**
   * Model skillEventType
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
     * Filter which skillEventType to aggregate.
     */
    where?: skillEventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillEventTypes to fetch.
     */
    orderBy?: skillEventTypeOrderByWithRelationInput | skillEventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillEventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillEventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillEventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skillEventTypes
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




  export type skillEventTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillEventTypeWhereInput
    orderBy?: skillEventTypeOrderByWithAggregationInput | skillEventTypeOrderByWithAggregationInput[]
    by: SkillEventTypeScalarFieldEnum[] | SkillEventTypeScalarFieldEnum
    having?: skillEventTypeScalarWhereWithAggregatesInput
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

  type GetSkillEventTypeGroupByPayload<T extends skillEventTypeGroupByArgs> = Prisma.PrismaPromise<
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


  export type skillEventTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skillEvents?: boolean | skillEventType$skillEventsArgs<ExtArgs>
    _count?: boolean | SkillEventTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillEventType"]>

  export type skillEventTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillEventType"]>

  export type skillEventTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillEventType"]>

  export type skillEventTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type skillEventTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["skillEventType"]>
  export type skillEventTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillEvents?: boolean | skillEventType$skillEventsArgs<ExtArgs>
    _count?: boolean | SkillEventTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type skillEventTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type skillEventTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $skillEventTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skillEventType"
    objects: {
      skillEvents: Prisma.$skillEventPayload<ExtArgs>[]
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

  type skillEventTypeGetPayload<S extends boolean | null | undefined | skillEventTypeDefaultArgs> = $Result.GetResult<Prisma.$skillEventTypePayload, S>

  type skillEventTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skillEventTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillEventTypeCountAggregateInputType | true
    }

  export interface skillEventTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skillEventType'], meta: { name: 'skillEventType' } }
    /**
     * Find zero or one SkillEventType that matches the filter.
     * @param {skillEventTypeFindUniqueArgs} args - Arguments to find a SkillEventType
     * @example
     * // Get one SkillEventType
     * const skillEventType = await prisma.skillEventType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillEventTypeFindUniqueArgs>(args: SelectSubset<T, skillEventTypeFindUniqueArgs<ExtArgs>>): Prisma__skillEventTypeClient<$Result.GetResult<Prisma.$skillEventTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillEventType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skillEventTypeFindUniqueOrThrowArgs} args - Arguments to find a SkillEventType
     * @example
     * // Get one SkillEventType
     * const skillEventType = await prisma.skillEventType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillEventTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, skillEventTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillEventTypeClient<$Result.GetResult<Prisma.$skillEventTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillEventType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillEventTypeFindFirstArgs} args - Arguments to find a SkillEventType
     * @example
     * // Get one SkillEventType
     * const skillEventType = await prisma.skillEventType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillEventTypeFindFirstArgs>(args?: SelectSubset<T, skillEventTypeFindFirstArgs<ExtArgs>>): Prisma__skillEventTypeClient<$Result.GetResult<Prisma.$skillEventTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillEventType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillEventTypeFindFirstOrThrowArgs} args - Arguments to find a SkillEventType
     * @example
     * // Get one SkillEventType
     * const skillEventType = await prisma.skillEventType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillEventTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, skillEventTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillEventTypeClient<$Result.GetResult<Prisma.$skillEventTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillEventTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillEventTypeFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends skillEventTypeFindManyArgs>(args?: SelectSubset<T, skillEventTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillEventTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillEventType.
     * @param {skillEventTypeCreateArgs} args - Arguments to create a SkillEventType.
     * @example
     * // Create one SkillEventType
     * const SkillEventType = await prisma.skillEventType.create({
     *   data: {
     *     // ... data to create a SkillEventType
     *   }
     * })
     * 
     */
    create<T extends skillEventTypeCreateArgs>(args: SelectSubset<T, skillEventTypeCreateArgs<ExtArgs>>): Prisma__skillEventTypeClient<$Result.GetResult<Prisma.$skillEventTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillEventTypes.
     * @param {skillEventTypeCreateManyArgs} args - Arguments to create many SkillEventTypes.
     * @example
     * // Create many SkillEventTypes
     * const skillEventType = await prisma.skillEventType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillEventTypeCreateManyArgs>(args?: SelectSubset<T, skillEventTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillEventTypes and returns the data saved in the database.
     * @param {skillEventTypeCreateManyAndReturnArgs} args - Arguments to create many SkillEventTypes.
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
    createManyAndReturn<T extends skillEventTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, skillEventTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillEventTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillEventType.
     * @param {skillEventTypeDeleteArgs} args - Arguments to delete one SkillEventType.
     * @example
     * // Delete one SkillEventType
     * const SkillEventType = await prisma.skillEventType.delete({
     *   where: {
     *     // ... filter to delete one SkillEventType
     *   }
     * })
     * 
     */
    delete<T extends skillEventTypeDeleteArgs>(args: SelectSubset<T, skillEventTypeDeleteArgs<ExtArgs>>): Prisma__skillEventTypeClient<$Result.GetResult<Prisma.$skillEventTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillEventType.
     * @param {skillEventTypeUpdateArgs} args - Arguments to update one SkillEventType.
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
    update<T extends skillEventTypeUpdateArgs>(args: SelectSubset<T, skillEventTypeUpdateArgs<ExtArgs>>): Prisma__skillEventTypeClient<$Result.GetResult<Prisma.$skillEventTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillEventTypes.
     * @param {skillEventTypeDeleteManyArgs} args - Arguments to filter SkillEventTypes to delete.
     * @example
     * // Delete a few SkillEventTypes
     * const { count } = await prisma.skillEventType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillEventTypeDeleteManyArgs>(args?: SelectSubset<T, skillEventTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillEventTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillEventTypeUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends skillEventTypeUpdateManyArgs>(args: SelectSubset<T, skillEventTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillEventTypes and returns the data updated in the database.
     * @param {skillEventTypeUpdateManyAndReturnArgs} args - Arguments to update many SkillEventTypes.
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
    updateManyAndReturn<T extends skillEventTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, skillEventTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillEventTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillEventType.
     * @param {skillEventTypeUpsertArgs} args - Arguments to update or create a SkillEventType.
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
    upsert<T extends skillEventTypeUpsertArgs>(args: SelectSubset<T, skillEventTypeUpsertArgs<ExtArgs>>): Prisma__skillEventTypeClient<$Result.GetResult<Prisma.$skillEventTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillEventTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillEventTypeCountArgs} args - Arguments to filter SkillEventTypes to count.
     * @example
     * // Count the number of SkillEventTypes
     * const count = await prisma.skillEventType.count({
     *   where: {
     *     // ... the filter for the SkillEventTypes we want to count
     *   }
     * })
    **/
    count<T extends skillEventTypeCountArgs>(
      args?: Subset<T, skillEventTypeCountArgs>,
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
     * @param {skillEventTypeGroupByArgs} args - Group by arguments.
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
      T extends skillEventTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillEventTypeGroupByArgs['orderBy'] }
        : { orderBy?: skillEventTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skillEventTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillEventTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skillEventType model
   */
  readonly fields: skillEventTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skillEventType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillEventTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skillEvents<T extends skillEventType$skillEventsArgs<ExtArgs> = {}>(args?: Subset<T, skillEventType$skillEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the skillEventType model
   */
  interface skillEventTypeFieldRefs {
    readonly id: FieldRef<"skillEventType", 'String'>
    readonly name: FieldRef<"skillEventType", 'String'>
    readonly description: FieldRef<"skillEventType", 'String'>
    readonly createdAt: FieldRef<"skillEventType", 'DateTime'>
    readonly updatedAt: FieldRef<"skillEventType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * skillEventType findUnique
   */
  export type skillEventTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEventType
     */
    select?: skillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEventType
     */
    omit?: skillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventTypeInclude<ExtArgs> | null
    /**
     * Filter, which skillEventType to fetch.
     */
    where: skillEventTypeWhereUniqueInput
  }

  /**
   * skillEventType findUniqueOrThrow
   */
  export type skillEventTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEventType
     */
    select?: skillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEventType
     */
    omit?: skillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventTypeInclude<ExtArgs> | null
    /**
     * Filter, which skillEventType to fetch.
     */
    where: skillEventTypeWhereUniqueInput
  }

  /**
   * skillEventType findFirst
   */
  export type skillEventTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEventType
     */
    select?: skillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEventType
     */
    omit?: skillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventTypeInclude<ExtArgs> | null
    /**
     * Filter, which skillEventType to fetch.
     */
    where?: skillEventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillEventTypes to fetch.
     */
    orderBy?: skillEventTypeOrderByWithRelationInput | skillEventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skillEventTypes.
     */
    cursor?: skillEventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillEventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillEventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skillEventTypes.
     */
    distinct?: SkillEventTypeScalarFieldEnum | SkillEventTypeScalarFieldEnum[]
  }

  /**
   * skillEventType findFirstOrThrow
   */
  export type skillEventTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEventType
     */
    select?: skillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEventType
     */
    omit?: skillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventTypeInclude<ExtArgs> | null
    /**
     * Filter, which skillEventType to fetch.
     */
    where?: skillEventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillEventTypes to fetch.
     */
    orderBy?: skillEventTypeOrderByWithRelationInput | skillEventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skillEventTypes.
     */
    cursor?: skillEventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillEventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillEventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skillEventTypes.
     */
    distinct?: SkillEventTypeScalarFieldEnum | SkillEventTypeScalarFieldEnum[]
  }

  /**
   * skillEventType findMany
   */
  export type skillEventTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEventType
     */
    select?: skillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEventType
     */
    omit?: skillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventTypeInclude<ExtArgs> | null
    /**
     * Filter, which skillEventTypes to fetch.
     */
    where?: skillEventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillEventTypes to fetch.
     */
    orderBy?: skillEventTypeOrderByWithRelationInput | skillEventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skillEventTypes.
     */
    cursor?: skillEventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillEventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillEventTypes.
     */
    skip?: number
    distinct?: SkillEventTypeScalarFieldEnum | SkillEventTypeScalarFieldEnum[]
  }

  /**
   * skillEventType create
   */
  export type skillEventTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEventType
     */
    select?: skillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEventType
     */
    omit?: skillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a skillEventType.
     */
    data: XOR<skillEventTypeCreateInput, skillEventTypeUncheckedCreateInput>
  }

  /**
   * skillEventType createMany
   */
  export type skillEventTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skillEventTypes.
     */
    data: skillEventTypeCreateManyInput | skillEventTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skillEventType createManyAndReturn
   */
  export type skillEventTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEventType
     */
    select?: skillEventTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skillEventType
     */
    omit?: skillEventTypeOmit<ExtArgs> | null
    /**
     * The data used to create many skillEventTypes.
     */
    data: skillEventTypeCreateManyInput | skillEventTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skillEventType update
   */
  export type skillEventTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEventType
     */
    select?: skillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEventType
     */
    omit?: skillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a skillEventType.
     */
    data: XOR<skillEventTypeUpdateInput, skillEventTypeUncheckedUpdateInput>
    /**
     * Choose, which skillEventType to update.
     */
    where: skillEventTypeWhereUniqueInput
  }

  /**
   * skillEventType updateMany
   */
  export type skillEventTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skillEventTypes.
     */
    data: XOR<skillEventTypeUpdateManyMutationInput, skillEventTypeUncheckedUpdateManyInput>
    /**
     * Filter which skillEventTypes to update
     */
    where?: skillEventTypeWhereInput
    /**
     * Limit how many skillEventTypes to update.
     */
    limit?: number
  }

  /**
   * skillEventType updateManyAndReturn
   */
  export type skillEventTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEventType
     */
    select?: skillEventTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skillEventType
     */
    omit?: skillEventTypeOmit<ExtArgs> | null
    /**
     * The data used to update skillEventTypes.
     */
    data: XOR<skillEventTypeUpdateManyMutationInput, skillEventTypeUncheckedUpdateManyInput>
    /**
     * Filter which skillEventTypes to update
     */
    where?: skillEventTypeWhereInput
    /**
     * Limit how many skillEventTypes to update.
     */
    limit?: number
  }

  /**
   * skillEventType upsert
   */
  export type skillEventTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEventType
     */
    select?: skillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEventType
     */
    omit?: skillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the skillEventType to update in case it exists.
     */
    where: skillEventTypeWhereUniqueInput
    /**
     * In case the skillEventType found by the `where` argument doesn't exist, create a new skillEventType with this data.
     */
    create: XOR<skillEventTypeCreateInput, skillEventTypeUncheckedCreateInput>
    /**
     * In case the skillEventType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillEventTypeUpdateInput, skillEventTypeUncheckedUpdateInput>
  }

  /**
   * skillEventType delete
   */
  export type skillEventTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEventType
     */
    select?: skillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEventType
     */
    omit?: skillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventTypeInclude<ExtArgs> | null
    /**
     * Filter which skillEventType to delete.
     */
    where: skillEventTypeWhereUniqueInput
  }

  /**
   * skillEventType deleteMany
   */
  export type skillEventTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skillEventTypes to delete
     */
    where?: skillEventTypeWhereInput
    /**
     * Limit how many skillEventTypes to delete.
     */
    limit?: number
  }

  /**
   * skillEventType.skillEvents
   */
  export type skillEventType$skillEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventInclude<ExtArgs> | null
    where?: skillEventWhereInput
    orderBy?: skillEventOrderByWithRelationInput | skillEventOrderByWithRelationInput[]
    cursor?: skillEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillEventScalarFieldEnum | SkillEventScalarFieldEnum[]
  }

  /**
   * skillEventType without action
   */
  export type skillEventTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEventType
     */
    select?: skillEventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEventType
     */
    omit?: skillEventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventTypeInclude<ExtArgs> | null
  }


  /**
   * Model skillReplacement
   */

  export type AggregateSkillReplacement = {
    _count: SkillReplacementCountAggregateOutputType | null
    _min: SkillReplacementMinAggregateOutputType | null
    _max: SkillReplacementMaxAggregateOutputType | null
  }

  export type SkillReplacementMinAggregateOutputType = {
    skillId: string | null
    replacingSkillId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillReplacementMaxAggregateOutputType = {
    skillId: string | null
    replacingSkillId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillReplacementCountAggregateOutputType = {
    skillId: number
    replacingSkillId: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillReplacementMinAggregateInputType = {
    skillId?: true
    replacingSkillId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillReplacementMaxAggregateInputType = {
    skillId?: true
    replacingSkillId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillReplacementCountAggregateInputType = {
    skillId?: true
    replacingSkillId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillReplacementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skillReplacement to aggregate.
     */
    where?: skillReplacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillReplacements to fetch.
     */
    orderBy?: skillReplacementOrderByWithRelationInput | skillReplacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillReplacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillReplacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillReplacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skillReplacements
    **/
    _count?: true | SkillReplacementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillReplacementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillReplacementMaxAggregateInputType
  }

  export type GetSkillReplacementAggregateType<T extends SkillReplacementAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillReplacement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillReplacement[P]>
      : GetScalarType<T[P], AggregateSkillReplacement[P]>
  }




  export type skillReplacementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillReplacementWhereInput
    orderBy?: skillReplacementOrderByWithAggregationInput | skillReplacementOrderByWithAggregationInput[]
    by: SkillReplacementScalarFieldEnum[] | SkillReplacementScalarFieldEnum
    having?: skillReplacementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillReplacementCountAggregateInputType | true
    _min?: SkillReplacementMinAggregateInputType
    _max?: SkillReplacementMaxAggregateInputType
  }

  export type SkillReplacementGroupByOutputType = {
    skillId: string
    replacingSkillId: string
    categoryId: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: SkillReplacementCountAggregateOutputType | null
    _min: SkillReplacementMinAggregateOutputType | null
    _max: SkillReplacementMaxAggregateOutputType | null
  }

  type GetSkillReplacementGroupByPayload<T extends skillReplacementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillReplacementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillReplacementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillReplacementGroupByOutputType[P]>
            : GetScalarType<T[P], SkillReplacementGroupByOutputType[P]>
        }
      >
    >


  export type skillReplacementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    skillId?: boolean
    replacingSkillId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillReplacement"]>

  export type skillReplacementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    skillId?: boolean
    replacingSkillId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillReplacement"]>

  export type skillReplacementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    skillId?: boolean
    replacingSkillId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillReplacement"]>

  export type skillReplacementSelectScalar = {
    skillId?: boolean
    replacingSkillId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type skillReplacementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"skillId" | "replacingSkillId" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["skillReplacement"]>

  export type $skillReplacementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skillReplacement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      skillId: string
      replacingSkillId: string
      categoryId: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["skillReplacement"]>
    composites: {}
  }

  type skillReplacementGetPayload<S extends boolean | null | undefined | skillReplacementDefaultArgs> = $Result.GetResult<Prisma.$skillReplacementPayload, S>

  type skillReplacementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skillReplacementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillReplacementCountAggregateInputType | true
    }

  export interface skillReplacementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skillReplacement'], meta: { name: 'skillReplacement' } }
    /**
     * Find zero or one SkillReplacement that matches the filter.
     * @param {skillReplacementFindUniqueArgs} args - Arguments to find a SkillReplacement
     * @example
     * // Get one SkillReplacement
     * const skillReplacement = await prisma.skillReplacement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillReplacementFindUniqueArgs>(args: SelectSubset<T, skillReplacementFindUniqueArgs<ExtArgs>>): Prisma__skillReplacementClient<$Result.GetResult<Prisma.$skillReplacementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillReplacement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skillReplacementFindUniqueOrThrowArgs} args - Arguments to find a SkillReplacement
     * @example
     * // Get one SkillReplacement
     * const skillReplacement = await prisma.skillReplacement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillReplacementFindUniqueOrThrowArgs>(args: SelectSubset<T, skillReplacementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillReplacementClient<$Result.GetResult<Prisma.$skillReplacementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillReplacement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillReplacementFindFirstArgs} args - Arguments to find a SkillReplacement
     * @example
     * // Get one SkillReplacement
     * const skillReplacement = await prisma.skillReplacement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillReplacementFindFirstArgs>(args?: SelectSubset<T, skillReplacementFindFirstArgs<ExtArgs>>): Prisma__skillReplacementClient<$Result.GetResult<Prisma.$skillReplacementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillReplacement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillReplacementFindFirstOrThrowArgs} args - Arguments to find a SkillReplacement
     * @example
     * // Get one SkillReplacement
     * const skillReplacement = await prisma.skillReplacement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillReplacementFindFirstOrThrowArgs>(args?: SelectSubset<T, skillReplacementFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillReplacementClient<$Result.GetResult<Prisma.$skillReplacementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillReplacements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillReplacementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillReplacements
     * const skillReplacements = await prisma.skillReplacement.findMany()
     * 
     * // Get first 10 SkillReplacements
     * const skillReplacements = await prisma.skillReplacement.findMany({ take: 10 })
     * 
     * // Only select the `skillId`
     * const skillReplacementWithSkillIdOnly = await prisma.skillReplacement.findMany({ select: { skillId: true } })
     * 
     */
    findMany<T extends skillReplacementFindManyArgs>(args?: SelectSubset<T, skillReplacementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillReplacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillReplacement.
     * @param {skillReplacementCreateArgs} args - Arguments to create a SkillReplacement.
     * @example
     * // Create one SkillReplacement
     * const SkillReplacement = await prisma.skillReplacement.create({
     *   data: {
     *     // ... data to create a SkillReplacement
     *   }
     * })
     * 
     */
    create<T extends skillReplacementCreateArgs>(args: SelectSubset<T, skillReplacementCreateArgs<ExtArgs>>): Prisma__skillReplacementClient<$Result.GetResult<Prisma.$skillReplacementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillReplacements.
     * @param {skillReplacementCreateManyArgs} args - Arguments to create many SkillReplacements.
     * @example
     * // Create many SkillReplacements
     * const skillReplacement = await prisma.skillReplacement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillReplacementCreateManyArgs>(args?: SelectSubset<T, skillReplacementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillReplacements and returns the data saved in the database.
     * @param {skillReplacementCreateManyAndReturnArgs} args - Arguments to create many SkillReplacements.
     * @example
     * // Create many SkillReplacements
     * const skillReplacement = await prisma.skillReplacement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillReplacements and only return the `skillId`
     * const skillReplacementWithSkillIdOnly = await prisma.skillReplacement.createManyAndReturn({
     *   select: { skillId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends skillReplacementCreateManyAndReturnArgs>(args?: SelectSubset<T, skillReplacementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillReplacementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillReplacement.
     * @param {skillReplacementDeleteArgs} args - Arguments to delete one SkillReplacement.
     * @example
     * // Delete one SkillReplacement
     * const SkillReplacement = await prisma.skillReplacement.delete({
     *   where: {
     *     // ... filter to delete one SkillReplacement
     *   }
     * })
     * 
     */
    delete<T extends skillReplacementDeleteArgs>(args: SelectSubset<T, skillReplacementDeleteArgs<ExtArgs>>): Prisma__skillReplacementClient<$Result.GetResult<Prisma.$skillReplacementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillReplacement.
     * @param {skillReplacementUpdateArgs} args - Arguments to update one SkillReplacement.
     * @example
     * // Update one SkillReplacement
     * const skillReplacement = await prisma.skillReplacement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skillReplacementUpdateArgs>(args: SelectSubset<T, skillReplacementUpdateArgs<ExtArgs>>): Prisma__skillReplacementClient<$Result.GetResult<Prisma.$skillReplacementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillReplacements.
     * @param {skillReplacementDeleteManyArgs} args - Arguments to filter SkillReplacements to delete.
     * @example
     * // Delete a few SkillReplacements
     * const { count } = await prisma.skillReplacement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillReplacementDeleteManyArgs>(args?: SelectSubset<T, skillReplacementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillReplacements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillReplacementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillReplacements
     * const skillReplacement = await prisma.skillReplacement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skillReplacementUpdateManyArgs>(args: SelectSubset<T, skillReplacementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillReplacements and returns the data updated in the database.
     * @param {skillReplacementUpdateManyAndReturnArgs} args - Arguments to update many SkillReplacements.
     * @example
     * // Update many SkillReplacements
     * const skillReplacement = await prisma.skillReplacement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillReplacements and only return the `skillId`
     * const skillReplacementWithSkillIdOnly = await prisma.skillReplacement.updateManyAndReturn({
     *   select: { skillId: true },
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
    updateManyAndReturn<T extends skillReplacementUpdateManyAndReturnArgs>(args: SelectSubset<T, skillReplacementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillReplacementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillReplacement.
     * @param {skillReplacementUpsertArgs} args - Arguments to update or create a SkillReplacement.
     * @example
     * // Update or create a SkillReplacement
     * const skillReplacement = await prisma.skillReplacement.upsert({
     *   create: {
     *     // ... data to create a SkillReplacement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillReplacement we want to update
     *   }
     * })
     */
    upsert<T extends skillReplacementUpsertArgs>(args: SelectSubset<T, skillReplacementUpsertArgs<ExtArgs>>): Prisma__skillReplacementClient<$Result.GetResult<Prisma.$skillReplacementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillReplacements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillReplacementCountArgs} args - Arguments to filter SkillReplacements to count.
     * @example
     * // Count the number of SkillReplacements
     * const count = await prisma.skillReplacement.count({
     *   where: {
     *     // ... the filter for the SkillReplacements we want to count
     *   }
     * })
    **/
    count<T extends skillReplacementCountArgs>(
      args?: Subset<T, skillReplacementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillReplacementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillReplacement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillReplacementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillReplacementAggregateArgs>(args: Subset<T, SkillReplacementAggregateArgs>): Prisma.PrismaPromise<GetSkillReplacementAggregateType<T>>

    /**
     * Group by SkillReplacement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillReplacementGroupByArgs} args - Group by arguments.
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
      T extends skillReplacementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillReplacementGroupByArgs['orderBy'] }
        : { orderBy?: skillReplacementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skillReplacementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillReplacementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skillReplacement model
   */
  readonly fields: skillReplacementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skillReplacement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillReplacementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the skillReplacement model
   */
  interface skillReplacementFieldRefs {
    readonly skillId: FieldRef<"skillReplacement", 'String'>
    readonly replacingSkillId: FieldRef<"skillReplacement", 'String'>
    readonly categoryId: FieldRef<"skillReplacement", 'String'>
    readonly createdAt: FieldRef<"skillReplacement", 'DateTime'>
    readonly updatedAt: FieldRef<"skillReplacement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * skillReplacement findUnique
   */
  export type skillReplacementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillReplacement
     */
    select?: skillReplacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillReplacement
     */
    omit?: skillReplacementOmit<ExtArgs> | null
    /**
     * Filter, which skillReplacement to fetch.
     */
    where: skillReplacementWhereUniqueInput
  }

  /**
   * skillReplacement findUniqueOrThrow
   */
  export type skillReplacementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillReplacement
     */
    select?: skillReplacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillReplacement
     */
    omit?: skillReplacementOmit<ExtArgs> | null
    /**
     * Filter, which skillReplacement to fetch.
     */
    where: skillReplacementWhereUniqueInput
  }

  /**
   * skillReplacement findFirst
   */
  export type skillReplacementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillReplacement
     */
    select?: skillReplacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillReplacement
     */
    omit?: skillReplacementOmit<ExtArgs> | null
    /**
     * Filter, which skillReplacement to fetch.
     */
    where?: skillReplacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillReplacements to fetch.
     */
    orderBy?: skillReplacementOrderByWithRelationInput | skillReplacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skillReplacements.
     */
    cursor?: skillReplacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillReplacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillReplacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skillReplacements.
     */
    distinct?: SkillReplacementScalarFieldEnum | SkillReplacementScalarFieldEnum[]
  }

  /**
   * skillReplacement findFirstOrThrow
   */
  export type skillReplacementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillReplacement
     */
    select?: skillReplacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillReplacement
     */
    omit?: skillReplacementOmit<ExtArgs> | null
    /**
     * Filter, which skillReplacement to fetch.
     */
    where?: skillReplacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillReplacements to fetch.
     */
    orderBy?: skillReplacementOrderByWithRelationInput | skillReplacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skillReplacements.
     */
    cursor?: skillReplacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillReplacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillReplacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skillReplacements.
     */
    distinct?: SkillReplacementScalarFieldEnum | SkillReplacementScalarFieldEnum[]
  }

  /**
   * skillReplacement findMany
   */
  export type skillReplacementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillReplacement
     */
    select?: skillReplacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillReplacement
     */
    omit?: skillReplacementOmit<ExtArgs> | null
    /**
     * Filter, which skillReplacements to fetch.
     */
    where?: skillReplacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skillReplacements to fetch.
     */
    orderBy?: skillReplacementOrderByWithRelationInput | skillReplacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skillReplacements.
     */
    cursor?: skillReplacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skillReplacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skillReplacements.
     */
    skip?: number
    distinct?: SkillReplacementScalarFieldEnum | SkillReplacementScalarFieldEnum[]
  }

  /**
   * skillReplacement create
   */
  export type skillReplacementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillReplacement
     */
    select?: skillReplacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillReplacement
     */
    omit?: skillReplacementOmit<ExtArgs> | null
    /**
     * The data needed to create a skillReplacement.
     */
    data: XOR<skillReplacementCreateInput, skillReplacementUncheckedCreateInput>
  }

  /**
   * skillReplacement createMany
   */
  export type skillReplacementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skillReplacements.
     */
    data: skillReplacementCreateManyInput | skillReplacementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skillReplacement createManyAndReturn
   */
  export type skillReplacementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillReplacement
     */
    select?: skillReplacementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skillReplacement
     */
    omit?: skillReplacementOmit<ExtArgs> | null
    /**
     * The data used to create many skillReplacements.
     */
    data: skillReplacementCreateManyInput | skillReplacementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skillReplacement update
   */
  export type skillReplacementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillReplacement
     */
    select?: skillReplacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillReplacement
     */
    omit?: skillReplacementOmit<ExtArgs> | null
    /**
     * The data needed to update a skillReplacement.
     */
    data: XOR<skillReplacementUpdateInput, skillReplacementUncheckedUpdateInput>
    /**
     * Choose, which skillReplacement to update.
     */
    where: skillReplacementWhereUniqueInput
  }

  /**
   * skillReplacement updateMany
   */
  export type skillReplacementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skillReplacements.
     */
    data: XOR<skillReplacementUpdateManyMutationInput, skillReplacementUncheckedUpdateManyInput>
    /**
     * Filter which skillReplacements to update
     */
    where?: skillReplacementWhereInput
    /**
     * Limit how many skillReplacements to update.
     */
    limit?: number
  }

  /**
   * skillReplacement updateManyAndReturn
   */
  export type skillReplacementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillReplacement
     */
    select?: skillReplacementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skillReplacement
     */
    omit?: skillReplacementOmit<ExtArgs> | null
    /**
     * The data used to update skillReplacements.
     */
    data: XOR<skillReplacementUpdateManyMutationInput, skillReplacementUncheckedUpdateManyInput>
    /**
     * Filter which skillReplacements to update
     */
    where?: skillReplacementWhereInput
    /**
     * Limit how many skillReplacements to update.
     */
    limit?: number
  }

  /**
   * skillReplacement upsert
   */
  export type skillReplacementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillReplacement
     */
    select?: skillReplacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillReplacement
     */
    omit?: skillReplacementOmit<ExtArgs> | null
    /**
     * The filter to search for the skillReplacement to update in case it exists.
     */
    where: skillReplacementWhereUniqueInput
    /**
     * In case the skillReplacement found by the `where` argument doesn't exist, create a new skillReplacement with this data.
     */
    create: XOR<skillReplacementCreateInput, skillReplacementUncheckedCreateInput>
    /**
     * In case the skillReplacement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillReplacementUpdateInput, skillReplacementUncheckedUpdateInput>
  }

  /**
   * skillReplacement delete
   */
  export type skillReplacementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillReplacement
     */
    select?: skillReplacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillReplacement
     */
    omit?: skillReplacementOmit<ExtArgs> | null
    /**
     * Filter which skillReplacement to delete.
     */
    where: skillReplacementWhereUniqueInput
  }

  /**
   * skillReplacement deleteMany
   */
  export type skillReplacementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skillReplacements to delete
     */
    where?: skillReplacementWhereInput
    /**
     * Limit how many skillReplacements to delete.
     */
    limit?: number
  }

  /**
   * skillReplacement without action
   */
  export type skillReplacementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillReplacement
     */
    select?: skillReplacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillReplacement
     */
    omit?: skillReplacementOmit<ExtArgs> | null
  }


  /**
   * Model sourceType
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
     * Filter which sourceType to aggregate.
     */
    where?: sourceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sourceTypes to fetch.
     */
    orderBy?: sourceTypeOrderByWithRelationInput | sourceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sourceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sourceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sourceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sourceTypes
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




  export type sourceTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sourceTypeWhereInput
    orderBy?: sourceTypeOrderByWithAggregationInput | sourceTypeOrderByWithAggregationInput[]
    by: SourceTypeScalarFieldEnum[] | SourceTypeScalarFieldEnum
    having?: sourceTypeScalarWhereWithAggregatesInput
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

  type GetSourceTypeGroupByPayload<T extends sourceTypeGroupByArgs> = Prisma.PrismaPromise<
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


  export type sourceTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skillEvents?: boolean | sourceType$skillEventsArgs<ExtArgs>
    _count?: boolean | SourceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceType"]>

  export type sourceTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sourceType"]>

  export type sourceTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sourceType"]>

  export type sourceTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sourceTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["sourceType"]>
  export type sourceTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillEvents?: boolean | sourceType$skillEventsArgs<ExtArgs>
    _count?: boolean | SourceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sourceTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type sourceTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $sourceTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sourceType"
    objects: {
      skillEvents: Prisma.$skillEventPayload<ExtArgs>[]
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

  type sourceTypeGetPayload<S extends boolean | null | undefined | sourceTypeDefaultArgs> = $Result.GetResult<Prisma.$sourceTypePayload, S>

  type sourceTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sourceTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceTypeCountAggregateInputType | true
    }

  export interface sourceTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sourceType'], meta: { name: 'sourceType' } }
    /**
     * Find zero or one SourceType that matches the filter.
     * @param {sourceTypeFindUniqueArgs} args - Arguments to find a SourceType
     * @example
     * // Get one SourceType
     * const sourceType = await prisma.sourceType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sourceTypeFindUniqueArgs>(args: SelectSubset<T, sourceTypeFindUniqueArgs<ExtArgs>>): Prisma__sourceTypeClient<$Result.GetResult<Prisma.$sourceTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SourceType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sourceTypeFindUniqueOrThrowArgs} args - Arguments to find a SourceType
     * @example
     * // Get one SourceType
     * const sourceType = await prisma.sourceType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sourceTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, sourceTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sourceTypeClient<$Result.GetResult<Prisma.$sourceTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourceTypeFindFirstArgs} args - Arguments to find a SourceType
     * @example
     * // Get one SourceType
     * const sourceType = await prisma.sourceType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sourceTypeFindFirstArgs>(args?: SelectSubset<T, sourceTypeFindFirstArgs<ExtArgs>>): Prisma__sourceTypeClient<$Result.GetResult<Prisma.$sourceTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourceTypeFindFirstOrThrowArgs} args - Arguments to find a SourceType
     * @example
     * // Get one SourceType
     * const sourceType = await prisma.sourceType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sourceTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, sourceTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__sourceTypeClient<$Result.GetResult<Prisma.$sourceTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SourceTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourceTypeFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends sourceTypeFindManyArgs>(args?: SelectSubset<T, sourceTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sourceTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SourceType.
     * @param {sourceTypeCreateArgs} args - Arguments to create a SourceType.
     * @example
     * // Create one SourceType
     * const SourceType = await prisma.sourceType.create({
     *   data: {
     *     // ... data to create a SourceType
     *   }
     * })
     * 
     */
    create<T extends sourceTypeCreateArgs>(args: SelectSubset<T, sourceTypeCreateArgs<ExtArgs>>): Prisma__sourceTypeClient<$Result.GetResult<Prisma.$sourceTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SourceTypes.
     * @param {sourceTypeCreateManyArgs} args - Arguments to create many SourceTypes.
     * @example
     * // Create many SourceTypes
     * const sourceType = await prisma.sourceType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sourceTypeCreateManyArgs>(args?: SelectSubset<T, sourceTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SourceTypes and returns the data saved in the database.
     * @param {sourceTypeCreateManyAndReturnArgs} args - Arguments to create many SourceTypes.
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
    createManyAndReturn<T extends sourceTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, sourceTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sourceTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SourceType.
     * @param {sourceTypeDeleteArgs} args - Arguments to delete one SourceType.
     * @example
     * // Delete one SourceType
     * const SourceType = await prisma.sourceType.delete({
     *   where: {
     *     // ... filter to delete one SourceType
     *   }
     * })
     * 
     */
    delete<T extends sourceTypeDeleteArgs>(args: SelectSubset<T, sourceTypeDeleteArgs<ExtArgs>>): Prisma__sourceTypeClient<$Result.GetResult<Prisma.$sourceTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SourceType.
     * @param {sourceTypeUpdateArgs} args - Arguments to update one SourceType.
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
    update<T extends sourceTypeUpdateArgs>(args: SelectSubset<T, sourceTypeUpdateArgs<ExtArgs>>): Prisma__sourceTypeClient<$Result.GetResult<Prisma.$sourceTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SourceTypes.
     * @param {sourceTypeDeleteManyArgs} args - Arguments to filter SourceTypes to delete.
     * @example
     * // Delete a few SourceTypes
     * const { count } = await prisma.sourceType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sourceTypeDeleteManyArgs>(args?: SelectSubset<T, sourceTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourceTypeUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends sourceTypeUpdateManyArgs>(args: SelectSubset<T, sourceTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceTypes and returns the data updated in the database.
     * @param {sourceTypeUpdateManyAndReturnArgs} args - Arguments to update many SourceTypes.
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
    updateManyAndReturn<T extends sourceTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, sourceTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sourceTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SourceType.
     * @param {sourceTypeUpsertArgs} args - Arguments to update or create a SourceType.
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
    upsert<T extends sourceTypeUpsertArgs>(args: SelectSubset<T, sourceTypeUpsertArgs<ExtArgs>>): Prisma__sourceTypeClient<$Result.GetResult<Prisma.$sourceTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SourceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sourceTypeCountArgs} args - Arguments to filter SourceTypes to count.
     * @example
     * // Count the number of SourceTypes
     * const count = await prisma.sourceType.count({
     *   where: {
     *     // ... the filter for the SourceTypes we want to count
     *   }
     * })
    **/
    count<T extends sourceTypeCountArgs>(
      args?: Subset<T, sourceTypeCountArgs>,
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
     * @param {sourceTypeGroupByArgs} args - Group by arguments.
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
      T extends sourceTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sourceTypeGroupByArgs['orderBy'] }
        : { orderBy?: sourceTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sourceTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sourceType model
   */
  readonly fields: sourceTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sourceType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sourceTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skillEvents<T extends sourceType$skillEventsArgs<ExtArgs> = {}>(args?: Subset<T, sourceType$skillEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the sourceType model
   */
  interface sourceTypeFieldRefs {
    readonly id: FieldRef<"sourceType", 'String'>
    readonly name: FieldRef<"sourceType", 'String'>
    readonly description: FieldRef<"sourceType", 'String'>
    readonly createdAt: FieldRef<"sourceType", 'DateTime'>
    readonly updatedAt: FieldRef<"sourceType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sourceType findUnique
   */
  export type sourceTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sourceType
     */
    select?: sourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sourceType
     */
    omit?: sourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which sourceType to fetch.
     */
    where: sourceTypeWhereUniqueInput
  }

  /**
   * sourceType findUniqueOrThrow
   */
  export type sourceTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sourceType
     */
    select?: sourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sourceType
     */
    omit?: sourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which sourceType to fetch.
     */
    where: sourceTypeWhereUniqueInput
  }

  /**
   * sourceType findFirst
   */
  export type sourceTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sourceType
     */
    select?: sourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sourceType
     */
    omit?: sourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which sourceType to fetch.
     */
    where?: sourceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sourceTypes to fetch.
     */
    orderBy?: sourceTypeOrderByWithRelationInput | sourceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sourceTypes.
     */
    cursor?: sourceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sourceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sourceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sourceTypes.
     */
    distinct?: SourceTypeScalarFieldEnum | SourceTypeScalarFieldEnum[]
  }

  /**
   * sourceType findFirstOrThrow
   */
  export type sourceTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sourceType
     */
    select?: sourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sourceType
     */
    omit?: sourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which sourceType to fetch.
     */
    where?: sourceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sourceTypes to fetch.
     */
    orderBy?: sourceTypeOrderByWithRelationInput | sourceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sourceTypes.
     */
    cursor?: sourceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sourceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sourceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sourceTypes.
     */
    distinct?: SourceTypeScalarFieldEnum | SourceTypeScalarFieldEnum[]
  }

  /**
   * sourceType findMany
   */
  export type sourceTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sourceType
     */
    select?: sourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sourceType
     */
    omit?: sourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which sourceTypes to fetch.
     */
    where?: sourceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sourceTypes to fetch.
     */
    orderBy?: sourceTypeOrderByWithRelationInput | sourceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sourceTypes.
     */
    cursor?: sourceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sourceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sourceTypes.
     */
    skip?: number
    distinct?: SourceTypeScalarFieldEnum | SourceTypeScalarFieldEnum[]
  }

  /**
   * sourceType create
   */
  export type sourceTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sourceType
     */
    select?: sourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sourceType
     */
    omit?: sourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourceTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a sourceType.
     */
    data: XOR<sourceTypeCreateInput, sourceTypeUncheckedCreateInput>
  }

  /**
   * sourceType createMany
   */
  export type sourceTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sourceTypes.
     */
    data: sourceTypeCreateManyInput | sourceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sourceType createManyAndReturn
   */
  export type sourceTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sourceType
     */
    select?: sourceTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sourceType
     */
    omit?: sourceTypeOmit<ExtArgs> | null
    /**
     * The data used to create many sourceTypes.
     */
    data: sourceTypeCreateManyInput | sourceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sourceType update
   */
  export type sourceTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sourceType
     */
    select?: sourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sourceType
     */
    omit?: sourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourceTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a sourceType.
     */
    data: XOR<sourceTypeUpdateInput, sourceTypeUncheckedUpdateInput>
    /**
     * Choose, which sourceType to update.
     */
    where: sourceTypeWhereUniqueInput
  }

  /**
   * sourceType updateMany
   */
  export type sourceTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sourceTypes.
     */
    data: XOR<sourceTypeUpdateManyMutationInput, sourceTypeUncheckedUpdateManyInput>
    /**
     * Filter which sourceTypes to update
     */
    where?: sourceTypeWhereInput
    /**
     * Limit how many sourceTypes to update.
     */
    limit?: number
  }

  /**
   * sourceType updateManyAndReturn
   */
  export type sourceTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sourceType
     */
    select?: sourceTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sourceType
     */
    omit?: sourceTypeOmit<ExtArgs> | null
    /**
     * The data used to update sourceTypes.
     */
    data: XOR<sourceTypeUpdateManyMutationInput, sourceTypeUncheckedUpdateManyInput>
    /**
     * Filter which sourceTypes to update
     */
    where?: sourceTypeWhereInput
    /**
     * Limit how many sourceTypes to update.
     */
    limit?: number
  }

  /**
   * sourceType upsert
   */
  export type sourceTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sourceType
     */
    select?: sourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sourceType
     */
    omit?: sourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourceTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the sourceType to update in case it exists.
     */
    where: sourceTypeWhereUniqueInput
    /**
     * In case the sourceType found by the `where` argument doesn't exist, create a new sourceType with this data.
     */
    create: XOR<sourceTypeCreateInput, sourceTypeUncheckedCreateInput>
    /**
     * In case the sourceType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sourceTypeUpdateInput, sourceTypeUncheckedUpdateInput>
  }

  /**
   * sourceType delete
   */
  export type sourceTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sourceType
     */
    select?: sourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sourceType
     */
    omit?: sourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourceTypeInclude<ExtArgs> | null
    /**
     * Filter which sourceType to delete.
     */
    where: sourceTypeWhereUniqueInput
  }

  /**
   * sourceType deleteMany
   */
  export type sourceTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sourceTypes to delete
     */
    where?: sourceTypeWhereInput
    /**
     * Limit how many sourceTypes to delete.
     */
    limit?: number
  }

  /**
   * sourceType.skillEvents
   */
  export type sourceType$skillEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skillEvent
     */
    select?: skillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skillEvent
     */
    omit?: skillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillEventInclude<ExtArgs> | null
    where?: skillEventWhereInput
    orderBy?: skillEventOrderByWithRelationInput | skillEventOrderByWithRelationInput[]
    cursor?: skillEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillEventScalarFieldEnum | SkillEventScalarFieldEnum[]
  }

  /**
   * sourceType without action
   */
  export type sourceTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sourceType
     */
    select?: sourceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sourceType
     */
    omit?: sourceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sourceTypeInclude<ExtArgs> | null
  }


  /**
   * Model userSkill
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
    createdAt: Date | null
    updatedAt: Date | null
    userSkillDisplayModeId: string | null
  }

  export type UserSkillMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    skillId: string | null
    userSkillLevelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userSkillDisplayModeId: string | null
  }

  export type UserSkillCountAggregateOutputType = {
    id: number
    userId: number
    skillId: number
    userSkillLevelId: number
    createdAt: number
    updatedAt: number
    userSkillDisplayModeId: number
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
    createdAt?: true
    updatedAt?: true
    userSkillDisplayModeId?: true
  }

  export type UserSkillMaxAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    userSkillLevelId?: true
    createdAt?: true
    updatedAt?: true
    userSkillDisplayModeId?: true
  }

  export type UserSkillCountAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    userSkillLevelId?: true
    createdAt?: true
    updatedAt?: true
    userSkillDisplayModeId?: true
    _all?: true
  }

  export type UserSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userSkill to aggregate.
     */
    where?: userSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkills to fetch.
     */
    orderBy?: userSkillOrderByWithRelationInput | userSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userSkills
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




  export type userSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userSkillWhereInput
    orderBy?: userSkillOrderByWithAggregationInput | userSkillOrderByWithAggregationInput[]
    by: UserSkillScalarFieldEnum[] | UserSkillScalarFieldEnum
    having?: userSkillScalarWhereWithAggregatesInput
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
    createdAt: Date
    updatedAt: Date
    userSkillDisplayModeId: string
    _count: UserSkillCountAggregateOutputType | null
    _avg: UserSkillAvgAggregateOutputType | null
    _sum: UserSkillSumAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  type GetUserSkillGroupByPayload<T extends userSkillGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    userSkillLevelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSkillDisplayModeId?: boolean
    skill?: boolean | skillDefaultArgs<ExtArgs>
    level?: boolean | userSkillLevelDefaultArgs<ExtArgs>
    displayMode?: boolean | userSkillDisplayModeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type userSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    userSkillLevelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSkillDisplayModeId?: boolean
    skill?: boolean | skillDefaultArgs<ExtArgs>
    level?: boolean | userSkillLevelDefaultArgs<ExtArgs>
    displayMode?: boolean | userSkillDisplayModeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type userSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    userSkillLevelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSkillDisplayModeId?: boolean
    skill?: boolean | skillDefaultArgs<ExtArgs>
    level?: boolean | userSkillLevelDefaultArgs<ExtArgs>
    displayMode?: boolean | userSkillDisplayModeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type userSkillSelectScalar = {
    id?: boolean
    userId?: boolean
    skillId?: boolean
    userSkillLevelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSkillDisplayModeId?: boolean
  }

  export type userSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "skillId" | "userSkillLevelId" | "createdAt" | "updatedAt" | "userSkillDisplayModeId", ExtArgs["result"]["userSkill"]>
  export type userSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | skillDefaultArgs<ExtArgs>
    level?: boolean | userSkillLevelDefaultArgs<ExtArgs>
    displayMode?: boolean | userSkillDisplayModeDefaultArgs<ExtArgs>
  }
  export type userSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | skillDefaultArgs<ExtArgs>
    level?: boolean | userSkillLevelDefaultArgs<ExtArgs>
    displayMode?: boolean | userSkillDisplayModeDefaultArgs<ExtArgs>
  }
  export type userSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | skillDefaultArgs<ExtArgs>
    level?: boolean | userSkillLevelDefaultArgs<ExtArgs>
    displayMode?: boolean | userSkillDisplayModeDefaultArgs<ExtArgs>
  }

  export type $userSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userSkill"
    objects: {
      skill: Prisma.$skillPayload<ExtArgs>
      level: Prisma.$userSkillLevelPayload<ExtArgs>
      displayMode: Prisma.$userSkillDisplayModePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      skillId: string
      userSkillLevelId: string
      createdAt: Date
      updatedAt: Date
      userSkillDisplayModeId: string
    }, ExtArgs["result"]["userSkill"]>
    composites: {}
  }

  type userSkillGetPayload<S extends boolean | null | undefined | userSkillDefaultArgs> = $Result.GetResult<Prisma.$userSkillPayload, S>

  type userSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillCountAggregateInputType | true
    }

  export interface userSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userSkill'], meta: { name: 'userSkill' } }
    /**
     * Find zero or one UserSkill that matches the filter.
     * @param {userSkillFindUniqueArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userSkillFindUniqueArgs>(args: SelectSubset<T, userSkillFindUniqueArgs<ExtArgs>>): Prisma__userSkillClient<$Result.GetResult<Prisma.$userSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userSkillFindUniqueOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, userSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userSkillClient<$Result.GetResult<Prisma.$userSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillFindFirstArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userSkillFindFirstArgs>(args?: SelectSubset<T, userSkillFindFirstArgs<ExtArgs>>): Prisma__userSkillClient<$Result.GetResult<Prisma.$userSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillFindFirstOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, userSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__userSkillClient<$Result.GetResult<Prisma.$userSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userSkillFindManyArgs>(args?: SelectSubset<T, userSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSkill.
     * @param {userSkillCreateArgs} args - Arguments to create a UserSkill.
     * @example
     * // Create one UserSkill
     * const UserSkill = await prisma.userSkill.create({
     *   data: {
     *     // ... data to create a UserSkill
     *   }
     * })
     * 
     */
    create<T extends userSkillCreateArgs>(args: SelectSubset<T, userSkillCreateArgs<ExtArgs>>): Prisma__userSkillClient<$Result.GetResult<Prisma.$userSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSkills.
     * @param {userSkillCreateManyArgs} args - Arguments to create many UserSkills.
     * @example
     * // Create many UserSkills
     * const userSkill = await prisma.userSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userSkillCreateManyArgs>(args?: SelectSubset<T, userSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSkills and returns the data saved in the database.
     * @param {userSkillCreateManyAndReturnArgs} args - Arguments to create many UserSkills.
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
    createManyAndReturn<T extends userSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, userSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSkill.
     * @param {userSkillDeleteArgs} args - Arguments to delete one UserSkill.
     * @example
     * // Delete one UserSkill
     * const UserSkill = await prisma.userSkill.delete({
     *   where: {
     *     // ... filter to delete one UserSkill
     *   }
     * })
     * 
     */
    delete<T extends userSkillDeleteArgs>(args: SelectSubset<T, userSkillDeleteArgs<ExtArgs>>): Prisma__userSkillClient<$Result.GetResult<Prisma.$userSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSkill.
     * @param {userSkillUpdateArgs} args - Arguments to update one UserSkill.
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
    update<T extends userSkillUpdateArgs>(args: SelectSubset<T, userSkillUpdateArgs<ExtArgs>>): Prisma__userSkillClient<$Result.GetResult<Prisma.$userSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSkills.
     * @param {userSkillDeleteManyArgs} args - Arguments to filter UserSkills to delete.
     * @example
     * // Delete a few UserSkills
     * const { count } = await prisma.userSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userSkillDeleteManyArgs>(args?: SelectSubset<T, userSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userSkillUpdateManyArgs>(args: SelectSubset<T, userSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills and returns the data updated in the database.
     * @param {userSkillUpdateManyAndReturnArgs} args - Arguments to update many UserSkills.
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
    updateManyAndReturn<T extends userSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, userSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSkill.
     * @param {userSkillUpsertArgs} args - Arguments to update or create a UserSkill.
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
    upsert<T extends userSkillUpsertArgs>(args: SelectSubset<T, userSkillUpsertArgs<ExtArgs>>): Prisma__userSkillClient<$Result.GetResult<Prisma.$userSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillCountArgs} args - Arguments to filter UserSkills to count.
     * @example
     * // Count the number of UserSkills
     * const count = await prisma.userSkill.count({
     *   where: {
     *     // ... the filter for the UserSkills we want to count
     *   }
     * })
    **/
    count<T extends userSkillCountArgs>(
      args?: Subset<T, userSkillCountArgs>,
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
     * @param {userSkillGroupByArgs} args - Group by arguments.
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
      T extends userSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userSkillGroupByArgs['orderBy'] }
        : { orderBy?: userSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userSkill model
   */
  readonly fields: userSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill<T extends skillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, skillDefaultArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    level<T extends userSkillLevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userSkillLevelDefaultArgs<ExtArgs>>): Prisma__userSkillLevelClient<$Result.GetResult<Prisma.$userSkillLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    displayMode<T extends userSkillDisplayModeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userSkillDisplayModeDefaultArgs<ExtArgs>>): Prisma__userSkillDisplayModeClient<$Result.GetResult<Prisma.$userSkillDisplayModePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the userSkill model
   */
  interface userSkillFieldRefs {
    readonly id: FieldRef<"userSkill", 'String'>
    readonly userId: FieldRef<"userSkill", 'Int'>
    readonly skillId: FieldRef<"userSkill", 'String'>
    readonly userSkillLevelId: FieldRef<"userSkill", 'String'>
    readonly createdAt: FieldRef<"userSkill", 'DateTime'>
    readonly updatedAt: FieldRef<"userSkill", 'DateTime'>
    readonly userSkillDisplayModeId: FieldRef<"userSkill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * userSkill findUnique
   */
  export type userSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillInclude<ExtArgs> | null
    /**
     * Filter, which userSkill to fetch.
     */
    where: userSkillWhereUniqueInput
  }

  /**
   * userSkill findUniqueOrThrow
   */
  export type userSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillInclude<ExtArgs> | null
    /**
     * Filter, which userSkill to fetch.
     */
    where: userSkillWhereUniqueInput
  }

  /**
   * userSkill findFirst
   */
  export type userSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillInclude<ExtArgs> | null
    /**
     * Filter, which userSkill to fetch.
     */
    where?: userSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkills to fetch.
     */
    orderBy?: userSkillOrderByWithRelationInput | userSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userSkills.
     */
    cursor?: userSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * userSkill findFirstOrThrow
   */
  export type userSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillInclude<ExtArgs> | null
    /**
     * Filter, which userSkill to fetch.
     */
    where?: userSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkills to fetch.
     */
    orderBy?: userSkillOrderByWithRelationInput | userSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userSkills.
     */
    cursor?: userSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * userSkill findMany
   */
  export type userSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillInclude<ExtArgs> | null
    /**
     * Filter, which userSkills to fetch.
     */
    where?: userSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkills to fetch.
     */
    orderBy?: userSkillOrderByWithRelationInput | userSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userSkills.
     */
    cursor?: userSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkills.
     */
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * userSkill create
   */
  export type userSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a userSkill.
     */
    data: XOR<userSkillCreateInput, userSkillUncheckedCreateInput>
  }

  /**
   * userSkill createMany
   */
  export type userSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userSkills.
     */
    data: userSkillCreateManyInput | userSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userSkill createManyAndReturn
   */
  export type userSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * The data used to create many userSkills.
     */
    data: userSkillCreateManyInput | userSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * userSkill update
   */
  export type userSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a userSkill.
     */
    data: XOR<userSkillUpdateInput, userSkillUncheckedUpdateInput>
    /**
     * Choose, which userSkill to update.
     */
    where: userSkillWhereUniqueInput
  }

  /**
   * userSkill updateMany
   */
  export type userSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userSkills.
     */
    data: XOR<userSkillUpdateManyMutationInput, userSkillUncheckedUpdateManyInput>
    /**
     * Filter which userSkills to update
     */
    where?: userSkillWhereInput
    /**
     * Limit how many userSkills to update.
     */
    limit?: number
  }

  /**
   * userSkill updateManyAndReturn
   */
  export type userSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * The data used to update userSkills.
     */
    data: XOR<userSkillUpdateManyMutationInput, userSkillUncheckedUpdateManyInput>
    /**
     * Filter which userSkills to update
     */
    where?: userSkillWhereInput
    /**
     * Limit how many userSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * userSkill upsert
   */
  export type userSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the userSkill to update in case it exists.
     */
    where: userSkillWhereUniqueInput
    /**
     * In case the userSkill found by the `where` argument doesn't exist, create a new userSkill with this data.
     */
    create: XOR<userSkillCreateInput, userSkillUncheckedCreateInput>
    /**
     * In case the userSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userSkillUpdateInput, userSkillUncheckedUpdateInput>
  }

  /**
   * userSkill delete
   */
  export type userSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillInclude<ExtArgs> | null
    /**
     * Filter which userSkill to delete.
     */
    where: userSkillWhereUniqueInput
  }

  /**
   * userSkill deleteMany
   */
  export type userSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userSkills to delete
     */
    where?: userSkillWhereInput
    /**
     * Limit how many userSkills to delete.
     */
    limit?: number
  }

  /**
   * userSkill without action
   */
  export type userSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillInclude<ExtArgs> | null
  }


  /**
   * Model userSkillWinSummary
   */

  export type AggregateUserSkillWinSummary = {
    _count: UserSkillWinSummaryCountAggregateOutputType | null
    _avg: UserSkillWinSummaryAvgAggregateOutputType | null
    _sum: UserSkillWinSummarySumAggregateOutputType | null
    _min: UserSkillWinSummaryMinAggregateOutputType | null
    _max: UserSkillWinSummaryMaxAggregateOutputType | null
  }

  export type UserSkillWinSummaryAvgAggregateOutputType = {
    userId: number | null
    wins: number | null
    submitted: number | null
  }

  export type UserSkillWinSummarySumAggregateOutputType = {
    userId: number | null
    wins: number | null
    submitted: number | null
  }

  export type UserSkillWinSummaryMinAggregateOutputType = {
    userId: number | null
    skillId: string | null
    wins: number | null
    submitted: number | null
    updatedAt: Date | null
  }

  export type UserSkillWinSummaryMaxAggregateOutputType = {
    userId: number | null
    skillId: string | null
    wins: number | null
    submitted: number | null
    updatedAt: Date | null
  }

  export type UserSkillWinSummaryCountAggregateOutputType = {
    userId: number
    skillId: number
    wins: number
    submitted: number
    eventTypeCounts: number
    updatedAt: number
    _all: number
  }


  export type UserSkillWinSummaryAvgAggregateInputType = {
    userId?: true
    wins?: true
    submitted?: true
  }

  export type UserSkillWinSummarySumAggregateInputType = {
    userId?: true
    wins?: true
    submitted?: true
  }

  export type UserSkillWinSummaryMinAggregateInputType = {
    userId?: true
    skillId?: true
    wins?: true
    submitted?: true
    updatedAt?: true
  }

  export type UserSkillWinSummaryMaxAggregateInputType = {
    userId?: true
    skillId?: true
    wins?: true
    submitted?: true
    updatedAt?: true
  }

  export type UserSkillWinSummaryCountAggregateInputType = {
    userId?: true
    skillId?: true
    wins?: true
    submitted?: true
    eventTypeCounts?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSkillWinSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userSkillWinSummary to aggregate.
     */
    where?: userSkillWinSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkillWinSummaries to fetch.
     */
    orderBy?: userSkillWinSummaryOrderByWithRelationInput | userSkillWinSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userSkillWinSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkillWinSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkillWinSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userSkillWinSummaries
    **/
    _count?: true | UserSkillWinSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSkillWinSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSkillWinSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSkillWinSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSkillWinSummaryMaxAggregateInputType
  }

  export type GetUserSkillWinSummaryAggregateType<T extends UserSkillWinSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSkillWinSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSkillWinSummary[P]>
      : GetScalarType<T[P], AggregateUserSkillWinSummary[P]>
  }




  export type userSkillWinSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userSkillWinSummaryWhereInput
    orderBy?: userSkillWinSummaryOrderByWithAggregationInput | userSkillWinSummaryOrderByWithAggregationInput[]
    by: UserSkillWinSummaryScalarFieldEnum[] | UserSkillWinSummaryScalarFieldEnum
    having?: userSkillWinSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSkillWinSummaryCountAggregateInputType | true
    _avg?: UserSkillWinSummaryAvgAggregateInputType
    _sum?: UserSkillWinSummarySumAggregateInputType
    _min?: UserSkillWinSummaryMinAggregateInputType
    _max?: UserSkillWinSummaryMaxAggregateInputType
  }

  export type UserSkillWinSummaryGroupByOutputType = {
    userId: number
    skillId: string
    wins: number
    submitted: number
    eventTypeCounts: JsonValue
    updatedAt: Date
    _count: UserSkillWinSummaryCountAggregateOutputType | null
    _avg: UserSkillWinSummaryAvgAggregateOutputType | null
    _sum: UserSkillWinSummarySumAggregateOutputType | null
    _min: UserSkillWinSummaryMinAggregateOutputType | null
    _max: UserSkillWinSummaryMaxAggregateOutputType | null
  }

  type GetUserSkillWinSummaryGroupByPayload<T extends userSkillWinSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSkillWinSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSkillWinSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSkillWinSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], UserSkillWinSummaryGroupByOutputType[P]>
        }
      >
    >


  export type userSkillWinSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    skillId?: boolean
    wins?: boolean
    submitted?: boolean
    eventTypeCounts?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSkillWinSummary"]>

  export type userSkillWinSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    skillId?: boolean
    wins?: boolean
    submitted?: boolean
    eventTypeCounts?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSkillWinSummary"]>

  export type userSkillWinSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    skillId?: boolean
    wins?: boolean
    submitted?: boolean
    eventTypeCounts?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSkillWinSummary"]>

  export type userSkillWinSummarySelectScalar = {
    userId?: boolean
    skillId?: boolean
    wins?: boolean
    submitted?: boolean
    eventTypeCounts?: boolean
    updatedAt?: boolean
  }

  export type userSkillWinSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "skillId" | "wins" | "submitted" | "eventTypeCounts" | "updatedAt", ExtArgs["result"]["userSkillWinSummary"]>

  export type $userSkillWinSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userSkillWinSummary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      skillId: string
      wins: number
      submitted: number
      eventTypeCounts: Prisma.JsonValue
      updatedAt: Date
    }, ExtArgs["result"]["userSkillWinSummary"]>
    composites: {}
  }

  type userSkillWinSummaryGetPayload<S extends boolean | null | undefined | userSkillWinSummaryDefaultArgs> = $Result.GetResult<Prisma.$userSkillWinSummaryPayload, S>

  type userSkillWinSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userSkillWinSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillWinSummaryCountAggregateInputType | true
    }

  export interface userSkillWinSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userSkillWinSummary'], meta: { name: 'userSkillWinSummary' } }
    /**
     * Find zero or one UserSkillWinSummary that matches the filter.
     * @param {userSkillWinSummaryFindUniqueArgs} args - Arguments to find a UserSkillWinSummary
     * @example
     * // Get one UserSkillWinSummary
     * const userSkillWinSummary = await prisma.userSkillWinSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userSkillWinSummaryFindUniqueArgs>(args: SelectSubset<T, userSkillWinSummaryFindUniqueArgs<ExtArgs>>): Prisma__userSkillWinSummaryClient<$Result.GetResult<Prisma.$userSkillWinSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSkillWinSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userSkillWinSummaryFindUniqueOrThrowArgs} args - Arguments to find a UserSkillWinSummary
     * @example
     * // Get one UserSkillWinSummary
     * const userSkillWinSummary = await prisma.userSkillWinSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userSkillWinSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, userSkillWinSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userSkillWinSummaryClient<$Result.GetResult<Prisma.$userSkillWinSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkillWinSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillWinSummaryFindFirstArgs} args - Arguments to find a UserSkillWinSummary
     * @example
     * // Get one UserSkillWinSummary
     * const userSkillWinSummary = await prisma.userSkillWinSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userSkillWinSummaryFindFirstArgs>(args?: SelectSubset<T, userSkillWinSummaryFindFirstArgs<ExtArgs>>): Prisma__userSkillWinSummaryClient<$Result.GetResult<Prisma.$userSkillWinSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkillWinSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillWinSummaryFindFirstOrThrowArgs} args - Arguments to find a UserSkillWinSummary
     * @example
     * // Get one UserSkillWinSummary
     * const userSkillWinSummary = await prisma.userSkillWinSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userSkillWinSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, userSkillWinSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__userSkillWinSummaryClient<$Result.GetResult<Prisma.$userSkillWinSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSkillWinSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillWinSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSkillWinSummaries
     * const userSkillWinSummaries = await prisma.userSkillWinSummary.findMany()
     * 
     * // Get first 10 UserSkillWinSummaries
     * const userSkillWinSummaries = await prisma.userSkillWinSummary.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userSkillWinSummaryWithUserIdOnly = await prisma.userSkillWinSummary.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends userSkillWinSummaryFindManyArgs>(args?: SelectSubset<T, userSkillWinSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillWinSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSkillWinSummary.
     * @param {userSkillWinSummaryCreateArgs} args - Arguments to create a UserSkillWinSummary.
     * @example
     * // Create one UserSkillWinSummary
     * const UserSkillWinSummary = await prisma.userSkillWinSummary.create({
     *   data: {
     *     // ... data to create a UserSkillWinSummary
     *   }
     * })
     * 
     */
    create<T extends userSkillWinSummaryCreateArgs>(args: SelectSubset<T, userSkillWinSummaryCreateArgs<ExtArgs>>): Prisma__userSkillWinSummaryClient<$Result.GetResult<Prisma.$userSkillWinSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSkillWinSummaries.
     * @param {userSkillWinSummaryCreateManyArgs} args - Arguments to create many UserSkillWinSummaries.
     * @example
     * // Create many UserSkillWinSummaries
     * const userSkillWinSummary = await prisma.userSkillWinSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userSkillWinSummaryCreateManyArgs>(args?: SelectSubset<T, userSkillWinSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSkillWinSummaries and returns the data saved in the database.
     * @param {userSkillWinSummaryCreateManyAndReturnArgs} args - Arguments to create many UserSkillWinSummaries.
     * @example
     * // Create many UserSkillWinSummaries
     * const userSkillWinSummary = await prisma.userSkillWinSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSkillWinSummaries and only return the `userId`
     * const userSkillWinSummaryWithUserIdOnly = await prisma.userSkillWinSummary.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userSkillWinSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, userSkillWinSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillWinSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSkillWinSummary.
     * @param {userSkillWinSummaryDeleteArgs} args - Arguments to delete one UserSkillWinSummary.
     * @example
     * // Delete one UserSkillWinSummary
     * const UserSkillWinSummary = await prisma.userSkillWinSummary.delete({
     *   where: {
     *     // ... filter to delete one UserSkillWinSummary
     *   }
     * })
     * 
     */
    delete<T extends userSkillWinSummaryDeleteArgs>(args: SelectSubset<T, userSkillWinSummaryDeleteArgs<ExtArgs>>): Prisma__userSkillWinSummaryClient<$Result.GetResult<Prisma.$userSkillWinSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSkillWinSummary.
     * @param {userSkillWinSummaryUpdateArgs} args - Arguments to update one UserSkillWinSummary.
     * @example
     * // Update one UserSkillWinSummary
     * const userSkillWinSummary = await prisma.userSkillWinSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userSkillWinSummaryUpdateArgs>(args: SelectSubset<T, userSkillWinSummaryUpdateArgs<ExtArgs>>): Prisma__userSkillWinSummaryClient<$Result.GetResult<Prisma.$userSkillWinSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSkillWinSummaries.
     * @param {userSkillWinSummaryDeleteManyArgs} args - Arguments to filter UserSkillWinSummaries to delete.
     * @example
     * // Delete a few UserSkillWinSummaries
     * const { count } = await prisma.userSkillWinSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userSkillWinSummaryDeleteManyArgs>(args?: SelectSubset<T, userSkillWinSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkillWinSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillWinSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSkillWinSummaries
     * const userSkillWinSummary = await prisma.userSkillWinSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userSkillWinSummaryUpdateManyArgs>(args: SelectSubset<T, userSkillWinSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkillWinSummaries and returns the data updated in the database.
     * @param {userSkillWinSummaryUpdateManyAndReturnArgs} args - Arguments to update many UserSkillWinSummaries.
     * @example
     * // Update many UserSkillWinSummaries
     * const userSkillWinSummary = await prisma.userSkillWinSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSkillWinSummaries and only return the `userId`
     * const userSkillWinSummaryWithUserIdOnly = await prisma.userSkillWinSummary.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends userSkillWinSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, userSkillWinSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillWinSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSkillWinSummary.
     * @param {userSkillWinSummaryUpsertArgs} args - Arguments to update or create a UserSkillWinSummary.
     * @example
     * // Update or create a UserSkillWinSummary
     * const userSkillWinSummary = await prisma.userSkillWinSummary.upsert({
     *   create: {
     *     // ... data to create a UserSkillWinSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSkillWinSummary we want to update
     *   }
     * })
     */
    upsert<T extends userSkillWinSummaryUpsertArgs>(args: SelectSubset<T, userSkillWinSummaryUpsertArgs<ExtArgs>>): Prisma__userSkillWinSummaryClient<$Result.GetResult<Prisma.$userSkillWinSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSkillWinSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillWinSummaryCountArgs} args - Arguments to filter UserSkillWinSummaries to count.
     * @example
     * // Count the number of UserSkillWinSummaries
     * const count = await prisma.userSkillWinSummary.count({
     *   where: {
     *     // ... the filter for the UserSkillWinSummaries we want to count
     *   }
     * })
    **/
    count<T extends userSkillWinSummaryCountArgs>(
      args?: Subset<T, userSkillWinSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSkillWinSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSkillWinSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillWinSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSkillWinSummaryAggregateArgs>(args: Subset<T, UserSkillWinSummaryAggregateArgs>): Prisma.PrismaPromise<GetUserSkillWinSummaryAggregateType<T>>

    /**
     * Group by UserSkillWinSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillWinSummaryGroupByArgs} args - Group by arguments.
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
      T extends userSkillWinSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userSkillWinSummaryGroupByArgs['orderBy'] }
        : { orderBy?: userSkillWinSummaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userSkillWinSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSkillWinSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userSkillWinSummary model
   */
  readonly fields: userSkillWinSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userSkillWinSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userSkillWinSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the userSkillWinSummary model
   */
  interface userSkillWinSummaryFieldRefs {
    readonly userId: FieldRef<"userSkillWinSummary", 'Int'>
    readonly skillId: FieldRef<"userSkillWinSummary", 'String'>
    readonly wins: FieldRef<"userSkillWinSummary", 'Int'>
    readonly submitted: FieldRef<"userSkillWinSummary", 'Int'>
    readonly eventTypeCounts: FieldRef<"userSkillWinSummary", 'Json'>
    readonly updatedAt: FieldRef<"userSkillWinSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * userSkillWinSummary findUnique
   */
  export type userSkillWinSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillWinSummary
     */
    select?: userSkillWinSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillWinSummary
     */
    omit?: userSkillWinSummaryOmit<ExtArgs> | null
    /**
     * Filter, which userSkillWinSummary to fetch.
     */
    where: userSkillWinSummaryWhereUniqueInput
  }

  /**
   * userSkillWinSummary findUniqueOrThrow
   */
  export type userSkillWinSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillWinSummary
     */
    select?: userSkillWinSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillWinSummary
     */
    omit?: userSkillWinSummaryOmit<ExtArgs> | null
    /**
     * Filter, which userSkillWinSummary to fetch.
     */
    where: userSkillWinSummaryWhereUniqueInput
  }

  /**
   * userSkillWinSummary findFirst
   */
  export type userSkillWinSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillWinSummary
     */
    select?: userSkillWinSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillWinSummary
     */
    omit?: userSkillWinSummaryOmit<ExtArgs> | null
    /**
     * Filter, which userSkillWinSummary to fetch.
     */
    where?: userSkillWinSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkillWinSummaries to fetch.
     */
    orderBy?: userSkillWinSummaryOrderByWithRelationInput | userSkillWinSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userSkillWinSummaries.
     */
    cursor?: userSkillWinSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkillWinSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkillWinSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userSkillWinSummaries.
     */
    distinct?: UserSkillWinSummaryScalarFieldEnum | UserSkillWinSummaryScalarFieldEnum[]
  }

  /**
   * userSkillWinSummary findFirstOrThrow
   */
  export type userSkillWinSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillWinSummary
     */
    select?: userSkillWinSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillWinSummary
     */
    omit?: userSkillWinSummaryOmit<ExtArgs> | null
    /**
     * Filter, which userSkillWinSummary to fetch.
     */
    where?: userSkillWinSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkillWinSummaries to fetch.
     */
    orderBy?: userSkillWinSummaryOrderByWithRelationInput | userSkillWinSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userSkillWinSummaries.
     */
    cursor?: userSkillWinSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkillWinSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkillWinSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userSkillWinSummaries.
     */
    distinct?: UserSkillWinSummaryScalarFieldEnum | UserSkillWinSummaryScalarFieldEnum[]
  }

  /**
   * userSkillWinSummary findMany
   */
  export type userSkillWinSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillWinSummary
     */
    select?: userSkillWinSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillWinSummary
     */
    omit?: userSkillWinSummaryOmit<ExtArgs> | null
    /**
     * Filter, which userSkillWinSummaries to fetch.
     */
    where?: userSkillWinSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkillWinSummaries to fetch.
     */
    orderBy?: userSkillWinSummaryOrderByWithRelationInput | userSkillWinSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userSkillWinSummaries.
     */
    cursor?: userSkillWinSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkillWinSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkillWinSummaries.
     */
    skip?: number
    distinct?: UserSkillWinSummaryScalarFieldEnum | UserSkillWinSummaryScalarFieldEnum[]
  }

  /**
   * userSkillWinSummary create
   */
  export type userSkillWinSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillWinSummary
     */
    select?: userSkillWinSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillWinSummary
     */
    omit?: userSkillWinSummaryOmit<ExtArgs> | null
    /**
     * The data needed to create a userSkillWinSummary.
     */
    data: XOR<userSkillWinSummaryCreateInput, userSkillWinSummaryUncheckedCreateInput>
  }

  /**
   * userSkillWinSummary createMany
   */
  export type userSkillWinSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userSkillWinSummaries.
     */
    data: userSkillWinSummaryCreateManyInput | userSkillWinSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userSkillWinSummary createManyAndReturn
   */
  export type userSkillWinSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillWinSummary
     */
    select?: userSkillWinSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillWinSummary
     */
    omit?: userSkillWinSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many userSkillWinSummaries.
     */
    data: userSkillWinSummaryCreateManyInput | userSkillWinSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userSkillWinSummary update
   */
  export type userSkillWinSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillWinSummary
     */
    select?: userSkillWinSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillWinSummary
     */
    omit?: userSkillWinSummaryOmit<ExtArgs> | null
    /**
     * The data needed to update a userSkillWinSummary.
     */
    data: XOR<userSkillWinSummaryUpdateInput, userSkillWinSummaryUncheckedUpdateInput>
    /**
     * Choose, which userSkillWinSummary to update.
     */
    where: userSkillWinSummaryWhereUniqueInput
  }

  /**
   * userSkillWinSummary updateMany
   */
  export type userSkillWinSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userSkillWinSummaries.
     */
    data: XOR<userSkillWinSummaryUpdateManyMutationInput, userSkillWinSummaryUncheckedUpdateManyInput>
    /**
     * Filter which userSkillWinSummaries to update
     */
    where?: userSkillWinSummaryWhereInput
    /**
     * Limit how many userSkillWinSummaries to update.
     */
    limit?: number
  }

  /**
   * userSkillWinSummary updateManyAndReturn
   */
  export type userSkillWinSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillWinSummary
     */
    select?: userSkillWinSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillWinSummary
     */
    omit?: userSkillWinSummaryOmit<ExtArgs> | null
    /**
     * The data used to update userSkillWinSummaries.
     */
    data: XOR<userSkillWinSummaryUpdateManyMutationInput, userSkillWinSummaryUncheckedUpdateManyInput>
    /**
     * Filter which userSkillWinSummaries to update
     */
    where?: userSkillWinSummaryWhereInput
    /**
     * Limit how many userSkillWinSummaries to update.
     */
    limit?: number
  }

  /**
   * userSkillWinSummary upsert
   */
  export type userSkillWinSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillWinSummary
     */
    select?: userSkillWinSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillWinSummary
     */
    omit?: userSkillWinSummaryOmit<ExtArgs> | null
    /**
     * The filter to search for the userSkillWinSummary to update in case it exists.
     */
    where: userSkillWinSummaryWhereUniqueInput
    /**
     * In case the userSkillWinSummary found by the `where` argument doesn't exist, create a new userSkillWinSummary with this data.
     */
    create: XOR<userSkillWinSummaryCreateInput, userSkillWinSummaryUncheckedCreateInput>
    /**
     * In case the userSkillWinSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userSkillWinSummaryUpdateInput, userSkillWinSummaryUncheckedUpdateInput>
  }

  /**
   * userSkillWinSummary delete
   */
  export type userSkillWinSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillWinSummary
     */
    select?: userSkillWinSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillWinSummary
     */
    omit?: userSkillWinSummaryOmit<ExtArgs> | null
    /**
     * Filter which userSkillWinSummary to delete.
     */
    where: userSkillWinSummaryWhereUniqueInput
  }

  /**
   * userSkillWinSummary deleteMany
   */
  export type userSkillWinSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userSkillWinSummaries to delete
     */
    where?: userSkillWinSummaryWhereInput
    /**
     * Limit how many userSkillWinSummaries to delete.
     */
    limit?: number
  }

  /**
   * userSkillWinSummary without action
   */
  export type userSkillWinSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillWinSummary
     */
    select?: userSkillWinSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillWinSummary
     */
    omit?: userSkillWinSummaryOmit<ExtArgs> | null
  }


  /**
   * Model userSkillDisplayMode
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
     * Filter which userSkillDisplayMode to aggregate.
     */
    where?: userSkillDisplayModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkillDisplayModes to fetch.
     */
    orderBy?: userSkillDisplayModeOrderByWithRelationInput | userSkillDisplayModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userSkillDisplayModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkillDisplayModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkillDisplayModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userSkillDisplayModes
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




  export type userSkillDisplayModeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userSkillDisplayModeWhereInput
    orderBy?: userSkillDisplayModeOrderByWithAggregationInput | userSkillDisplayModeOrderByWithAggregationInput[]
    by: UserSkillDisplayModeScalarFieldEnum[] | UserSkillDisplayModeScalarFieldEnum
    having?: userSkillDisplayModeScalarWhereWithAggregatesInput
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

  type GetUserSkillDisplayModeGroupByPayload<T extends userSkillDisplayModeGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSkillDisplayModeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSkills?: boolean | userSkillDisplayMode$userSkillsArgs<ExtArgs>
    _count?: boolean | UserSkillDisplayModeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkillDisplayMode"]>

  export type userSkillDisplayModeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSkillDisplayMode"]>

  export type userSkillDisplayModeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSkillDisplayMode"]>

  export type userSkillDisplayModeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userSkillDisplayModeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["userSkillDisplayMode"]>
  export type userSkillDisplayModeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSkills?: boolean | userSkillDisplayMode$userSkillsArgs<ExtArgs>
    _count?: boolean | UserSkillDisplayModeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userSkillDisplayModeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userSkillDisplayModeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userSkillDisplayModePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userSkillDisplayMode"
    objects: {
      userSkills: Prisma.$userSkillPayload<ExtArgs>[]
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

  type userSkillDisplayModeGetPayload<S extends boolean | null | undefined | userSkillDisplayModeDefaultArgs> = $Result.GetResult<Prisma.$userSkillDisplayModePayload, S>

  type userSkillDisplayModeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userSkillDisplayModeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillDisplayModeCountAggregateInputType | true
    }

  export interface userSkillDisplayModeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userSkillDisplayMode'], meta: { name: 'userSkillDisplayMode' } }
    /**
     * Find zero or one UserSkillDisplayMode that matches the filter.
     * @param {userSkillDisplayModeFindUniqueArgs} args - Arguments to find a UserSkillDisplayMode
     * @example
     * // Get one UserSkillDisplayMode
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userSkillDisplayModeFindUniqueArgs>(args: SelectSubset<T, userSkillDisplayModeFindUniqueArgs<ExtArgs>>): Prisma__userSkillDisplayModeClient<$Result.GetResult<Prisma.$userSkillDisplayModePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSkillDisplayMode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userSkillDisplayModeFindUniqueOrThrowArgs} args - Arguments to find a UserSkillDisplayMode
     * @example
     * // Get one UserSkillDisplayMode
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userSkillDisplayModeFindUniqueOrThrowArgs>(args: SelectSubset<T, userSkillDisplayModeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userSkillDisplayModeClient<$Result.GetResult<Prisma.$userSkillDisplayModePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkillDisplayMode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillDisplayModeFindFirstArgs} args - Arguments to find a UserSkillDisplayMode
     * @example
     * // Get one UserSkillDisplayMode
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userSkillDisplayModeFindFirstArgs>(args?: SelectSubset<T, userSkillDisplayModeFindFirstArgs<ExtArgs>>): Prisma__userSkillDisplayModeClient<$Result.GetResult<Prisma.$userSkillDisplayModePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkillDisplayMode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillDisplayModeFindFirstOrThrowArgs} args - Arguments to find a UserSkillDisplayMode
     * @example
     * // Get one UserSkillDisplayMode
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userSkillDisplayModeFindFirstOrThrowArgs>(args?: SelectSubset<T, userSkillDisplayModeFindFirstOrThrowArgs<ExtArgs>>): Prisma__userSkillDisplayModeClient<$Result.GetResult<Prisma.$userSkillDisplayModePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSkillDisplayModes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillDisplayModeFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userSkillDisplayModeFindManyArgs>(args?: SelectSubset<T, userSkillDisplayModeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillDisplayModePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSkillDisplayMode.
     * @param {userSkillDisplayModeCreateArgs} args - Arguments to create a UserSkillDisplayMode.
     * @example
     * // Create one UserSkillDisplayMode
     * const UserSkillDisplayMode = await prisma.userSkillDisplayMode.create({
     *   data: {
     *     // ... data to create a UserSkillDisplayMode
     *   }
     * })
     * 
     */
    create<T extends userSkillDisplayModeCreateArgs>(args: SelectSubset<T, userSkillDisplayModeCreateArgs<ExtArgs>>): Prisma__userSkillDisplayModeClient<$Result.GetResult<Prisma.$userSkillDisplayModePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSkillDisplayModes.
     * @param {userSkillDisplayModeCreateManyArgs} args - Arguments to create many UserSkillDisplayModes.
     * @example
     * // Create many UserSkillDisplayModes
     * const userSkillDisplayMode = await prisma.userSkillDisplayMode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userSkillDisplayModeCreateManyArgs>(args?: SelectSubset<T, userSkillDisplayModeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSkillDisplayModes and returns the data saved in the database.
     * @param {userSkillDisplayModeCreateManyAndReturnArgs} args - Arguments to create many UserSkillDisplayModes.
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
    createManyAndReturn<T extends userSkillDisplayModeCreateManyAndReturnArgs>(args?: SelectSubset<T, userSkillDisplayModeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillDisplayModePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSkillDisplayMode.
     * @param {userSkillDisplayModeDeleteArgs} args - Arguments to delete one UserSkillDisplayMode.
     * @example
     * // Delete one UserSkillDisplayMode
     * const UserSkillDisplayMode = await prisma.userSkillDisplayMode.delete({
     *   where: {
     *     // ... filter to delete one UserSkillDisplayMode
     *   }
     * })
     * 
     */
    delete<T extends userSkillDisplayModeDeleteArgs>(args: SelectSubset<T, userSkillDisplayModeDeleteArgs<ExtArgs>>): Prisma__userSkillDisplayModeClient<$Result.GetResult<Prisma.$userSkillDisplayModePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSkillDisplayMode.
     * @param {userSkillDisplayModeUpdateArgs} args - Arguments to update one UserSkillDisplayMode.
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
    update<T extends userSkillDisplayModeUpdateArgs>(args: SelectSubset<T, userSkillDisplayModeUpdateArgs<ExtArgs>>): Prisma__userSkillDisplayModeClient<$Result.GetResult<Prisma.$userSkillDisplayModePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSkillDisplayModes.
     * @param {userSkillDisplayModeDeleteManyArgs} args - Arguments to filter UserSkillDisplayModes to delete.
     * @example
     * // Delete a few UserSkillDisplayModes
     * const { count } = await prisma.userSkillDisplayMode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userSkillDisplayModeDeleteManyArgs>(args?: SelectSubset<T, userSkillDisplayModeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkillDisplayModes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillDisplayModeUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userSkillDisplayModeUpdateManyArgs>(args: SelectSubset<T, userSkillDisplayModeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkillDisplayModes and returns the data updated in the database.
     * @param {userSkillDisplayModeUpdateManyAndReturnArgs} args - Arguments to update many UserSkillDisplayModes.
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
    updateManyAndReturn<T extends userSkillDisplayModeUpdateManyAndReturnArgs>(args: SelectSubset<T, userSkillDisplayModeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillDisplayModePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSkillDisplayMode.
     * @param {userSkillDisplayModeUpsertArgs} args - Arguments to update or create a UserSkillDisplayMode.
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
    upsert<T extends userSkillDisplayModeUpsertArgs>(args: SelectSubset<T, userSkillDisplayModeUpsertArgs<ExtArgs>>): Prisma__userSkillDisplayModeClient<$Result.GetResult<Prisma.$userSkillDisplayModePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSkillDisplayModes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillDisplayModeCountArgs} args - Arguments to filter UserSkillDisplayModes to count.
     * @example
     * // Count the number of UserSkillDisplayModes
     * const count = await prisma.userSkillDisplayMode.count({
     *   where: {
     *     // ... the filter for the UserSkillDisplayModes we want to count
     *   }
     * })
    **/
    count<T extends userSkillDisplayModeCountArgs>(
      args?: Subset<T, userSkillDisplayModeCountArgs>,
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
     * @param {userSkillDisplayModeGroupByArgs} args - Group by arguments.
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
      T extends userSkillDisplayModeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userSkillDisplayModeGroupByArgs['orderBy'] }
        : { orderBy?: userSkillDisplayModeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userSkillDisplayModeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSkillDisplayModeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userSkillDisplayMode model
   */
  readonly fields: userSkillDisplayModeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userSkillDisplayMode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userSkillDisplayModeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userSkills<T extends userSkillDisplayMode$userSkillsArgs<ExtArgs> = {}>(args?: Subset<T, userSkillDisplayMode$userSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the userSkillDisplayMode model
   */
  interface userSkillDisplayModeFieldRefs {
    readonly id: FieldRef<"userSkillDisplayMode", 'String'>
    readonly name: FieldRef<"userSkillDisplayMode", 'String'>
    readonly description: FieldRef<"userSkillDisplayMode", 'String'>
    readonly createdAt: FieldRef<"userSkillDisplayMode", 'DateTime'>
    readonly updatedAt: FieldRef<"userSkillDisplayMode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * userSkillDisplayMode findUnique
   */
  export type userSkillDisplayModeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillDisplayMode
     */
    select?: userSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillDisplayMode
     */
    omit?: userSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillDisplayModeInclude<ExtArgs> | null
    /**
     * Filter, which userSkillDisplayMode to fetch.
     */
    where: userSkillDisplayModeWhereUniqueInput
  }

  /**
   * userSkillDisplayMode findUniqueOrThrow
   */
  export type userSkillDisplayModeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillDisplayMode
     */
    select?: userSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillDisplayMode
     */
    omit?: userSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillDisplayModeInclude<ExtArgs> | null
    /**
     * Filter, which userSkillDisplayMode to fetch.
     */
    where: userSkillDisplayModeWhereUniqueInput
  }

  /**
   * userSkillDisplayMode findFirst
   */
  export type userSkillDisplayModeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillDisplayMode
     */
    select?: userSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillDisplayMode
     */
    omit?: userSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillDisplayModeInclude<ExtArgs> | null
    /**
     * Filter, which userSkillDisplayMode to fetch.
     */
    where?: userSkillDisplayModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkillDisplayModes to fetch.
     */
    orderBy?: userSkillDisplayModeOrderByWithRelationInput | userSkillDisplayModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userSkillDisplayModes.
     */
    cursor?: userSkillDisplayModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkillDisplayModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkillDisplayModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userSkillDisplayModes.
     */
    distinct?: UserSkillDisplayModeScalarFieldEnum | UserSkillDisplayModeScalarFieldEnum[]
  }

  /**
   * userSkillDisplayMode findFirstOrThrow
   */
  export type userSkillDisplayModeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillDisplayMode
     */
    select?: userSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillDisplayMode
     */
    omit?: userSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillDisplayModeInclude<ExtArgs> | null
    /**
     * Filter, which userSkillDisplayMode to fetch.
     */
    where?: userSkillDisplayModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkillDisplayModes to fetch.
     */
    orderBy?: userSkillDisplayModeOrderByWithRelationInput | userSkillDisplayModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userSkillDisplayModes.
     */
    cursor?: userSkillDisplayModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkillDisplayModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkillDisplayModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userSkillDisplayModes.
     */
    distinct?: UserSkillDisplayModeScalarFieldEnum | UserSkillDisplayModeScalarFieldEnum[]
  }

  /**
   * userSkillDisplayMode findMany
   */
  export type userSkillDisplayModeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillDisplayMode
     */
    select?: userSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillDisplayMode
     */
    omit?: userSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillDisplayModeInclude<ExtArgs> | null
    /**
     * Filter, which userSkillDisplayModes to fetch.
     */
    where?: userSkillDisplayModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkillDisplayModes to fetch.
     */
    orderBy?: userSkillDisplayModeOrderByWithRelationInput | userSkillDisplayModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userSkillDisplayModes.
     */
    cursor?: userSkillDisplayModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkillDisplayModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkillDisplayModes.
     */
    skip?: number
    distinct?: UserSkillDisplayModeScalarFieldEnum | UserSkillDisplayModeScalarFieldEnum[]
  }

  /**
   * userSkillDisplayMode create
   */
  export type userSkillDisplayModeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillDisplayMode
     */
    select?: userSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillDisplayMode
     */
    omit?: userSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillDisplayModeInclude<ExtArgs> | null
    /**
     * The data needed to create a userSkillDisplayMode.
     */
    data: XOR<userSkillDisplayModeCreateInput, userSkillDisplayModeUncheckedCreateInput>
  }

  /**
   * userSkillDisplayMode createMany
   */
  export type userSkillDisplayModeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userSkillDisplayModes.
     */
    data: userSkillDisplayModeCreateManyInput | userSkillDisplayModeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userSkillDisplayMode createManyAndReturn
   */
  export type userSkillDisplayModeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillDisplayMode
     */
    select?: userSkillDisplayModeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillDisplayMode
     */
    omit?: userSkillDisplayModeOmit<ExtArgs> | null
    /**
     * The data used to create many userSkillDisplayModes.
     */
    data: userSkillDisplayModeCreateManyInput | userSkillDisplayModeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userSkillDisplayMode update
   */
  export type userSkillDisplayModeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillDisplayMode
     */
    select?: userSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillDisplayMode
     */
    omit?: userSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillDisplayModeInclude<ExtArgs> | null
    /**
     * The data needed to update a userSkillDisplayMode.
     */
    data: XOR<userSkillDisplayModeUpdateInput, userSkillDisplayModeUncheckedUpdateInput>
    /**
     * Choose, which userSkillDisplayMode to update.
     */
    where: userSkillDisplayModeWhereUniqueInput
  }

  /**
   * userSkillDisplayMode updateMany
   */
  export type userSkillDisplayModeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userSkillDisplayModes.
     */
    data: XOR<userSkillDisplayModeUpdateManyMutationInput, userSkillDisplayModeUncheckedUpdateManyInput>
    /**
     * Filter which userSkillDisplayModes to update
     */
    where?: userSkillDisplayModeWhereInput
    /**
     * Limit how many userSkillDisplayModes to update.
     */
    limit?: number
  }

  /**
   * userSkillDisplayMode updateManyAndReturn
   */
  export type userSkillDisplayModeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillDisplayMode
     */
    select?: userSkillDisplayModeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillDisplayMode
     */
    omit?: userSkillDisplayModeOmit<ExtArgs> | null
    /**
     * The data used to update userSkillDisplayModes.
     */
    data: XOR<userSkillDisplayModeUpdateManyMutationInput, userSkillDisplayModeUncheckedUpdateManyInput>
    /**
     * Filter which userSkillDisplayModes to update
     */
    where?: userSkillDisplayModeWhereInput
    /**
     * Limit how many userSkillDisplayModes to update.
     */
    limit?: number
  }

  /**
   * userSkillDisplayMode upsert
   */
  export type userSkillDisplayModeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillDisplayMode
     */
    select?: userSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillDisplayMode
     */
    omit?: userSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillDisplayModeInclude<ExtArgs> | null
    /**
     * The filter to search for the userSkillDisplayMode to update in case it exists.
     */
    where: userSkillDisplayModeWhereUniqueInput
    /**
     * In case the userSkillDisplayMode found by the `where` argument doesn't exist, create a new userSkillDisplayMode with this data.
     */
    create: XOR<userSkillDisplayModeCreateInput, userSkillDisplayModeUncheckedCreateInput>
    /**
     * In case the userSkillDisplayMode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userSkillDisplayModeUpdateInput, userSkillDisplayModeUncheckedUpdateInput>
  }

  /**
   * userSkillDisplayMode delete
   */
  export type userSkillDisplayModeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillDisplayMode
     */
    select?: userSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillDisplayMode
     */
    omit?: userSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillDisplayModeInclude<ExtArgs> | null
    /**
     * Filter which userSkillDisplayMode to delete.
     */
    where: userSkillDisplayModeWhereUniqueInput
  }

  /**
   * userSkillDisplayMode deleteMany
   */
  export type userSkillDisplayModeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userSkillDisplayModes to delete
     */
    where?: userSkillDisplayModeWhereInput
    /**
     * Limit how many userSkillDisplayModes to delete.
     */
    limit?: number
  }

  /**
   * userSkillDisplayMode.userSkills
   */
  export type userSkillDisplayMode$userSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillInclude<ExtArgs> | null
    where?: userSkillWhereInput
    orderBy?: userSkillOrderByWithRelationInput | userSkillOrderByWithRelationInput[]
    cursor?: userSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * userSkillDisplayMode without action
   */
  export type userSkillDisplayModeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillDisplayMode
     */
    select?: userSkillDisplayModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillDisplayMode
     */
    omit?: userSkillDisplayModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillDisplayModeInclude<ExtArgs> | null
  }


  /**
   * Model userSkillLevel
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
     * Filter which userSkillLevel to aggregate.
     */
    where?: userSkillLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkillLevels to fetch.
     */
    orderBy?: userSkillLevelOrderByWithRelationInput | userSkillLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userSkillLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkillLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkillLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userSkillLevels
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




  export type userSkillLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userSkillLevelWhereInput
    orderBy?: userSkillLevelOrderByWithAggregationInput | userSkillLevelOrderByWithAggregationInput[]
    by: UserSkillLevelScalarFieldEnum[] | UserSkillLevelScalarFieldEnum
    having?: userSkillLevelScalarWhereWithAggregatesInput
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

  type GetUserSkillLevelGroupByPayload<T extends userSkillLevelGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSkillLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSkills?: boolean | userSkillLevel$userSkillsArgs<ExtArgs>
    _count?: boolean | UserSkillLevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkillLevel"]>

  export type userSkillLevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSkillLevel"]>

  export type userSkillLevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSkillLevel"]>

  export type userSkillLevelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userSkillLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["userSkillLevel"]>
  export type userSkillLevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSkills?: boolean | userSkillLevel$userSkillsArgs<ExtArgs>
    _count?: boolean | UserSkillLevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userSkillLevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userSkillLevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userSkillLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userSkillLevel"
    objects: {
      userSkills: Prisma.$userSkillPayload<ExtArgs>[]
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

  type userSkillLevelGetPayload<S extends boolean | null | undefined | userSkillLevelDefaultArgs> = $Result.GetResult<Prisma.$userSkillLevelPayload, S>

  type userSkillLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userSkillLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillLevelCountAggregateInputType | true
    }

  export interface userSkillLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userSkillLevel'], meta: { name: 'userSkillLevel' } }
    /**
     * Find zero or one UserSkillLevel that matches the filter.
     * @param {userSkillLevelFindUniqueArgs} args - Arguments to find a UserSkillLevel
     * @example
     * // Get one UserSkillLevel
     * const userSkillLevel = await prisma.userSkillLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userSkillLevelFindUniqueArgs>(args: SelectSubset<T, userSkillLevelFindUniqueArgs<ExtArgs>>): Prisma__userSkillLevelClient<$Result.GetResult<Prisma.$userSkillLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSkillLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userSkillLevelFindUniqueOrThrowArgs} args - Arguments to find a UserSkillLevel
     * @example
     * // Get one UserSkillLevel
     * const userSkillLevel = await prisma.userSkillLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userSkillLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, userSkillLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userSkillLevelClient<$Result.GetResult<Prisma.$userSkillLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkillLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillLevelFindFirstArgs} args - Arguments to find a UserSkillLevel
     * @example
     * // Get one UserSkillLevel
     * const userSkillLevel = await prisma.userSkillLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userSkillLevelFindFirstArgs>(args?: SelectSubset<T, userSkillLevelFindFirstArgs<ExtArgs>>): Prisma__userSkillLevelClient<$Result.GetResult<Prisma.$userSkillLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkillLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillLevelFindFirstOrThrowArgs} args - Arguments to find a UserSkillLevel
     * @example
     * // Get one UserSkillLevel
     * const userSkillLevel = await prisma.userSkillLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userSkillLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, userSkillLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__userSkillLevelClient<$Result.GetResult<Prisma.$userSkillLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSkillLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillLevelFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userSkillLevelFindManyArgs>(args?: SelectSubset<T, userSkillLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSkillLevel.
     * @param {userSkillLevelCreateArgs} args - Arguments to create a UserSkillLevel.
     * @example
     * // Create one UserSkillLevel
     * const UserSkillLevel = await prisma.userSkillLevel.create({
     *   data: {
     *     // ... data to create a UserSkillLevel
     *   }
     * })
     * 
     */
    create<T extends userSkillLevelCreateArgs>(args: SelectSubset<T, userSkillLevelCreateArgs<ExtArgs>>): Prisma__userSkillLevelClient<$Result.GetResult<Prisma.$userSkillLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSkillLevels.
     * @param {userSkillLevelCreateManyArgs} args - Arguments to create many UserSkillLevels.
     * @example
     * // Create many UserSkillLevels
     * const userSkillLevel = await prisma.userSkillLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userSkillLevelCreateManyArgs>(args?: SelectSubset<T, userSkillLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSkillLevels and returns the data saved in the database.
     * @param {userSkillLevelCreateManyAndReturnArgs} args - Arguments to create many UserSkillLevels.
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
    createManyAndReturn<T extends userSkillLevelCreateManyAndReturnArgs>(args?: SelectSubset<T, userSkillLevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillLevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSkillLevel.
     * @param {userSkillLevelDeleteArgs} args - Arguments to delete one UserSkillLevel.
     * @example
     * // Delete one UserSkillLevel
     * const UserSkillLevel = await prisma.userSkillLevel.delete({
     *   where: {
     *     // ... filter to delete one UserSkillLevel
     *   }
     * })
     * 
     */
    delete<T extends userSkillLevelDeleteArgs>(args: SelectSubset<T, userSkillLevelDeleteArgs<ExtArgs>>): Prisma__userSkillLevelClient<$Result.GetResult<Prisma.$userSkillLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSkillLevel.
     * @param {userSkillLevelUpdateArgs} args - Arguments to update one UserSkillLevel.
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
    update<T extends userSkillLevelUpdateArgs>(args: SelectSubset<T, userSkillLevelUpdateArgs<ExtArgs>>): Prisma__userSkillLevelClient<$Result.GetResult<Prisma.$userSkillLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSkillLevels.
     * @param {userSkillLevelDeleteManyArgs} args - Arguments to filter UserSkillLevels to delete.
     * @example
     * // Delete a few UserSkillLevels
     * const { count } = await prisma.userSkillLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userSkillLevelDeleteManyArgs>(args?: SelectSubset<T, userSkillLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkillLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillLevelUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userSkillLevelUpdateManyArgs>(args: SelectSubset<T, userSkillLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkillLevels and returns the data updated in the database.
     * @param {userSkillLevelUpdateManyAndReturnArgs} args - Arguments to update many UserSkillLevels.
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
    updateManyAndReturn<T extends userSkillLevelUpdateManyAndReturnArgs>(args: SelectSubset<T, userSkillLevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillLevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSkillLevel.
     * @param {userSkillLevelUpsertArgs} args - Arguments to update or create a UserSkillLevel.
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
    upsert<T extends userSkillLevelUpsertArgs>(args: SelectSubset<T, userSkillLevelUpsertArgs<ExtArgs>>): Prisma__userSkillLevelClient<$Result.GetResult<Prisma.$userSkillLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSkillLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSkillLevelCountArgs} args - Arguments to filter UserSkillLevels to count.
     * @example
     * // Count the number of UserSkillLevels
     * const count = await prisma.userSkillLevel.count({
     *   where: {
     *     // ... the filter for the UserSkillLevels we want to count
     *   }
     * })
    **/
    count<T extends userSkillLevelCountArgs>(
      args?: Subset<T, userSkillLevelCountArgs>,
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
     * @param {userSkillLevelGroupByArgs} args - Group by arguments.
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
      T extends userSkillLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userSkillLevelGroupByArgs['orderBy'] }
        : { orderBy?: userSkillLevelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userSkillLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSkillLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userSkillLevel model
   */
  readonly fields: userSkillLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userSkillLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userSkillLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userSkills<T extends userSkillLevel$userSkillsArgs<ExtArgs> = {}>(args?: Subset<T, userSkillLevel$userSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the userSkillLevel model
   */
  interface userSkillLevelFieldRefs {
    readonly id: FieldRef<"userSkillLevel", 'String'>
    readonly name: FieldRef<"userSkillLevel", 'String'>
    readonly description: FieldRef<"userSkillLevel", 'String'>
    readonly createdAt: FieldRef<"userSkillLevel", 'DateTime'>
    readonly updatedAt: FieldRef<"userSkillLevel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * userSkillLevel findUnique
   */
  export type userSkillLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillLevel
     */
    select?: userSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillLevel
     */
    omit?: userSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillLevelInclude<ExtArgs> | null
    /**
     * Filter, which userSkillLevel to fetch.
     */
    where: userSkillLevelWhereUniqueInput
  }

  /**
   * userSkillLevel findUniqueOrThrow
   */
  export type userSkillLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillLevel
     */
    select?: userSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillLevel
     */
    omit?: userSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillLevelInclude<ExtArgs> | null
    /**
     * Filter, which userSkillLevel to fetch.
     */
    where: userSkillLevelWhereUniqueInput
  }

  /**
   * userSkillLevel findFirst
   */
  export type userSkillLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillLevel
     */
    select?: userSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillLevel
     */
    omit?: userSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillLevelInclude<ExtArgs> | null
    /**
     * Filter, which userSkillLevel to fetch.
     */
    where?: userSkillLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkillLevels to fetch.
     */
    orderBy?: userSkillLevelOrderByWithRelationInput | userSkillLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userSkillLevels.
     */
    cursor?: userSkillLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkillLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkillLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userSkillLevels.
     */
    distinct?: UserSkillLevelScalarFieldEnum | UserSkillLevelScalarFieldEnum[]
  }

  /**
   * userSkillLevel findFirstOrThrow
   */
  export type userSkillLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillLevel
     */
    select?: userSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillLevel
     */
    omit?: userSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillLevelInclude<ExtArgs> | null
    /**
     * Filter, which userSkillLevel to fetch.
     */
    where?: userSkillLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkillLevels to fetch.
     */
    orderBy?: userSkillLevelOrderByWithRelationInput | userSkillLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userSkillLevels.
     */
    cursor?: userSkillLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkillLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkillLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userSkillLevels.
     */
    distinct?: UserSkillLevelScalarFieldEnum | UserSkillLevelScalarFieldEnum[]
  }

  /**
   * userSkillLevel findMany
   */
  export type userSkillLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillLevel
     */
    select?: userSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillLevel
     */
    omit?: userSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillLevelInclude<ExtArgs> | null
    /**
     * Filter, which userSkillLevels to fetch.
     */
    where?: userSkillLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSkillLevels to fetch.
     */
    orderBy?: userSkillLevelOrderByWithRelationInput | userSkillLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userSkillLevels.
     */
    cursor?: userSkillLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSkillLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSkillLevels.
     */
    skip?: number
    distinct?: UserSkillLevelScalarFieldEnum | UserSkillLevelScalarFieldEnum[]
  }

  /**
   * userSkillLevel create
   */
  export type userSkillLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillLevel
     */
    select?: userSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillLevel
     */
    omit?: userSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillLevelInclude<ExtArgs> | null
    /**
     * The data needed to create a userSkillLevel.
     */
    data: XOR<userSkillLevelCreateInput, userSkillLevelUncheckedCreateInput>
  }

  /**
   * userSkillLevel createMany
   */
  export type userSkillLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userSkillLevels.
     */
    data: userSkillLevelCreateManyInput | userSkillLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userSkillLevel createManyAndReturn
   */
  export type userSkillLevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillLevel
     */
    select?: userSkillLevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillLevel
     */
    omit?: userSkillLevelOmit<ExtArgs> | null
    /**
     * The data used to create many userSkillLevels.
     */
    data: userSkillLevelCreateManyInput | userSkillLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userSkillLevel update
   */
  export type userSkillLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillLevel
     */
    select?: userSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillLevel
     */
    omit?: userSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillLevelInclude<ExtArgs> | null
    /**
     * The data needed to update a userSkillLevel.
     */
    data: XOR<userSkillLevelUpdateInput, userSkillLevelUncheckedUpdateInput>
    /**
     * Choose, which userSkillLevel to update.
     */
    where: userSkillLevelWhereUniqueInput
  }

  /**
   * userSkillLevel updateMany
   */
  export type userSkillLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userSkillLevels.
     */
    data: XOR<userSkillLevelUpdateManyMutationInput, userSkillLevelUncheckedUpdateManyInput>
    /**
     * Filter which userSkillLevels to update
     */
    where?: userSkillLevelWhereInput
    /**
     * Limit how many userSkillLevels to update.
     */
    limit?: number
  }

  /**
   * userSkillLevel updateManyAndReturn
   */
  export type userSkillLevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillLevel
     */
    select?: userSkillLevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillLevel
     */
    omit?: userSkillLevelOmit<ExtArgs> | null
    /**
     * The data used to update userSkillLevels.
     */
    data: XOR<userSkillLevelUpdateManyMutationInput, userSkillLevelUncheckedUpdateManyInput>
    /**
     * Filter which userSkillLevels to update
     */
    where?: userSkillLevelWhereInput
    /**
     * Limit how many userSkillLevels to update.
     */
    limit?: number
  }

  /**
   * userSkillLevel upsert
   */
  export type userSkillLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillLevel
     */
    select?: userSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillLevel
     */
    omit?: userSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillLevelInclude<ExtArgs> | null
    /**
     * The filter to search for the userSkillLevel to update in case it exists.
     */
    where: userSkillLevelWhereUniqueInput
    /**
     * In case the userSkillLevel found by the `where` argument doesn't exist, create a new userSkillLevel with this data.
     */
    create: XOR<userSkillLevelCreateInput, userSkillLevelUncheckedCreateInput>
    /**
     * In case the userSkillLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userSkillLevelUpdateInput, userSkillLevelUncheckedUpdateInput>
  }

  /**
   * userSkillLevel delete
   */
  export type userSkillLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillLevel
     */
    select?: userSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillLevel
     */
    omit?: userSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillLevelInclude<ExtArgs> | null
    /**
     * Filter which userSkillLevel to delete.
     */
    where: userSkillLevelWhereUniqueInput
  }

  /**
   * userSkillLevel deleteMany
   */
  export type userSkillLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userSkillLevels to delete
     */
    where?: userSkillLevelWhereInput
    /**
     * Limit how many userSkillLevels to delete.
     */
    limit?: number
  }

  /**
   * userSkillLevel.userSkills
   */
  export type userSkillLevel$userSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkill
     */
    select?: userSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkill
     */
    omit?: userSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillInclude<ExtArgs> | null
    where?: userSkillWhereInput
    orderBy?: userSkillOrderByWithRelationInput | userSkillOrderByWithRelationInput[]
    cursor?: userSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * userSkillLevel without action
   */
  export type userSkillLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSkillLevel
     */
    select?: userSkillLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSkillLevel
     */
    omit?: userSkillLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSkillLevelInclude<ExtArgs> | null
  }


  /**
   * Model workSkill
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
     * Filter which workSkill to aggregate.
     */
    where?: workSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workSkills to fetch.
     */
    orderBy?: workSkillOrderByWithRelationInput | workSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workSkills
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




  export type workSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workSkillWhereInput
    orderBy?: workSkillOrderByWithAggregationInput | workSkillOrderByWithAggregationInput[]
    by: WorkSkillScalarFieldEnum[] | WorkSkillScalarFieldEnum
    having?: workSkillScalarWhereWithAggregatesInput
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
    createdAt: Date | null
    updatedAt: Date | null
    _count: WorkSkillCountAggregateOutputType | null
    _min: WorkSkillMinAggregateOutputType | null
    _max: WorkSkillMaxAggregateOutputType | null
  }

  type GetWorkSkillGroupByPayload<T extends workSkillGroupByArgs> = Prisma.PrismaPromise<
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


  export type workSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    workTypeId?: boolean
    skillId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workSkill"]>

  export type workSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    workTypeId?: boolean
    skillId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workSkill"]>

  export type workSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    workTypeId?: boolean
    skillId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workSkill"]>

  export type workSkillSelectScalar = {
    id?: boolean
    workId?: boolean
    workTypeId?: boolean
    skillId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type workSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workId" | "workTypeId" | "skillId" | "createdAt" | "updatedAt", ExtArgs["result"]["workSkill"]>

  export type $workSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workSkill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workId: string
      workTypeId: string
      skillId: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["workSkill"]>
    composites: {}
  }

  type workSkillGetPayload<S extends boolean | null | undefined | workSkillDefaultArgs> = $Result.GetResult<Prisma.$workSkillPayload, S>

  type workSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkSkillCountAggregateInputType | true
    }

  export interface workSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workSkill'], meta: { name: 'workSkill' } }
    /**
     * Find zero or one WorkSkill that matches the filter.
     * @param {workSkillFindUniqueArgs} args - Arguments to find a WorkSkill
     * @example
     * // Get one WorkSkill
     * const workSkill = await prisma.workSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workSkillFindUniqueArgs>(args: SelectSubset<T, workSkillFindUniqueArgs<ExtArgs>>): Prisma__workSkillClient<$Result.GetResult<Prisma.$workSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workSkillFindUniqueOrThrowArgs} args - Arguments to find a WorkSkill
     * @example
     * // Get one WorkSkill
     * const workSkill = await prisma.workSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, workSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workSkillClient<$Result.GetResult<Prisma.$workSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workSkillFindFirstArgs} args - Arguments to find a WorkSkill
     * @example
     * // Get one WorkSkill
     * const workSkill = await prisma.workSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workSkillFindFirstArgs>(args?: SelectSubset<T, workSkillFindFirstArgs<ExtArgs>>): Prisma__workSkillClient<$Result.GetResult<Prisma.$workSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workSkillFindFirstOrThrowArgs} args - Arguments to find a WorkSkill
     * @example
     * // Get one WorkSkill
     * const workSkill = await prisma.workSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, workSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__workSkillClient<$Result.GetResult<Prisma.$workSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workSkillFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends workSkillFindManyArgs>(args?: SelectSubset<T, workSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkSkill.
     * @param {workSkillCreateArgs} args - Arguments to create a WorkSkill.
     * @example
     * // Create one WorkSkill
     * const WorkSkill = await prisma.workSkill.create({
     *   data: {
     *     // ... data to create a WorkSkill
     *   }
     * })
     * 
     */
    create<T extends workSkillCreateArgs>(args: SelectSubset<T, workSkillCreateArgs<ExtArgs>>): Prisma__workSkillClient<$Result.GetResult<Prisma.$workSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkSkills.
     * @param {workSkillCreateManyArgs} args - Arguments to create many WorkSkills.
     * @example
     * // Create many WorkSkills
     * const workSkill = await prisma.workSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workSkillCreateManyArgs>(args?: SelectSubset<T, workSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkSkills and returns the data saved in the database.
     * @param {workSkillCreateManyAndReturnArgs} args - Arguments to create many WorkSkills.
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
    createManyAndReturn<T extends workSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, workSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkSkill.
     * @param {workSkillDeleteArgs} args - Arguments to delete one WorkSkill.
     * @example
     * // Delete one WorkSkill
     * const WorkSkill = await prisma.workSkill.delete({
     *   where: {
     *     // ... filter to delete one WorkSkill
     *   }
     * })
     * 
     */
    delete<T extends workSkillDeleteArgs>(args: SelectSubset<T, workSkillDeleteArgs<ExtArgs>>): Prisma__workSkillClient<$Result.GetResult<Prisma.$workSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkSkill.
     * @param {workSkillUpdateArgs} args - Arguments to update one WorkSkill.
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
    update<T extends workSkillUpdateArgs>(args: SelectSubset<T, workSkillUpdateArgs<ExtArgs>>): Prisma__workSkillClient<$Result.GetResult<Prisma.$workSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkSkills.
     * @param {workSkillDeleteManyArgs} args - Arguments to filter WorkSkills to delete.
     * @example
     * // Delete a few WorkSkills
     * const { count } = await prisma.workSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workSkillDeleteManyArgs>(args?: SelectSubset<T, workSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workSkillUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends workSkillUpdateManyArgs>(args: SelectSubset<T, workSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkSkills and returns the data updated in the database.
     * @param {workSkillUpdateManyAndReturnArgs} args - Arguments to update many WorkSkills.
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
    updateManyAndReturn<T extends workSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, workSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkSkill.
     * @param {workSkillUpsertArgs} args - Arguments to update or create a WorkSkill.
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
    upsert<T extends workSkillUpsertArgs>(args: SelectSubset<T, workSkillUpsertArgs<ExtArgs>>): Prisma__workSkillClient<$Result.GetResult<Prisma.$workSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workSkillCountArgs} args - Arguments to filter WorkSkills to count.
     * @example
     * // Count the number of WorkSkills
     * const count = await prisma.workSkill.count({
     *   where: {
     *     // ... the filter for the WorkSkills we want to count
     *   }
     * })
    **/
    count<T extends workSkillCountArgs>(
      args?: Subset<T, workSkillCountArgs>,
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
     * @param {workSkillGroupByArgs} args - Group by arguments.
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
      T extends workSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workSkillGroupByArgs['orderBy'] }
        : { orderBy?: workSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, workSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workSkill model
   */
  readonly fields: workSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the workSkill model
   */
  interface workSkillFieldRefs {
    readonly id: FieldRef<"workSkill", 'String'>
    readonly workId: FieldRef<"workSkill", 'String'>
    readonly workTypeId: FieldRef<"workSkill", 'String'>
    readonly skillId: FieldRef<"workSkill", 'String'>
    readonly createdAt: FieldRef<"workSkill", 'DateTime'>
    readonly updatedAt: FieldRef<"workSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workSkill findUnique
   */
  export type workSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workSkill
     */
    select?: workSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workSkill
     */
    omit?: workSkillOmit<ExtArgs> | null
    /**
     * Filter, which workSkill to fetch.
     */
    where: workSkillWhereUniqueInput
  }

  /**
   * workSkill findUniqueOrThrow
   */
  export type workSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workSkill
     */
    select?: workSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workSkill
     */
    omit?: workSkillOmit<ExtArgs> | null
    /**
     * Filter, which workSkill to fetch.
     */
    where: workSkillWhereUniqueInput
  }

  /**
   * workSkill findFirst
   */
  export type workSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workSkill
     */
    select?: workSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workSkill
     */
    omit?: workSkillOmit<ExtArgs> | null
    /**
     * Filter, which workSkill to fetch.
     */
    where?: workSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workSkills to fetch.
     */
    orderBy?: workSkillOrderByWithRelationInput | workSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workSkills.
     */
    cursor?: workSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workSkills.
     */
    distinct?: WorkSkillScalarFieldEnum | WorkSkillScalarFieldEnum[]
  }

  /**
   * workSkill findFirstOrThrow
   */
  export type workSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workSkill
     */
    select?: workSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workSkill
     */
    omit?: workSkillOmit<ExtArgs> | null
    /**
     * Filter, which workSkill to fetch.
     */
    where?: workSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workSkills to fetch.
     */
    orderBy?: workSkillOrderByWithRelationInput | workSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workSkills.
     */
    cursor?: workSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workSkills.
     */
    distinct?: WorkSkillScalarFieldEnum | WorkSkillScalarFieldEnum[]
  }

  /**
   * workSkill findMany
   */
  export type workSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workSkill
     */
    select?: workSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workSkill
     */
    omit?: workSkillOmit<ExtArgs> | null
    /**
     * Filter, which workSkills to fetch.
     */
    where?: workSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workSkills to fetch.
     */
    orderBy?: workSkillOrderByWithRelationInput | workSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workSkills.
     */
    cursor?: workSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workSkills.
     */
    skip?: number
    distinct?: WorkSkillScalarFieldEnum | WorkSkillScalarFieldEnum[]
  }

  /**
   * workSkill create
   */
  export type workSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workSkill
     */
    select?: workSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workSkill
     */
    omit?: workSkillOmit<ExtArgs> | null
    /**
     * The data needed to create a workSkill.
     */
    data: XOR<workSkillCreateInput, workSkillUncheckedCreateInput>
  }

  /**
   * workSkill createMany
   */
  export type workSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workSkills.
     */
    data: workSkillCreateManyInput | workSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workSkill createManyAndReturn
   */
  export type workSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workSkill
     */
    select?: workSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workSkill
     */
    omit?: workSkillOmit<ExtArgs> | null
    /**
     * The data used to create many workSkills.
     */
    data: workSkillCreateManyInput | workSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workSkill update
   */
  export type workSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workSkill
     */
    select?: workSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workSkill
     */
    omit?: workSkillOmit<ExtArgs> | null
    /**
     * The data needed to update a workSkill.
     */
    data: XOR<workSkillUpdateInput, workSkillUncheckedUpdateInput>
    /**
     * Choose, which workSkill to update.
     */
    where: workSkillWhereUniqueInput
  }

  /**
   * workSkill updateMany
   */
  export type workSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workSkills.
     */
    data: XOR<workSkillUpdateManyMutationInput, workSkillUncheckedUpdateManyInput>
    /**
     * Filter which workSkills to update
     */
    where?: workSkillWhereInput
    /**
     * Limit how many workSkills to update.
     */
    limit?: number
  }

  /**
   * workSkill updateManyAndReturn
   */
  export type workSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workSkill
     */
    select?: workSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workSkill
     */
    omit?: workSkillOmit<ExtArgs> | null
    /**
     * The data used to update workSkills.
     */
    data: XOR<workSkillUpdateManyMutationInput, workSkillUncheckedUpdateManyInput>
    /**
     * Filter which workSkills to update
     */
    where?: workSkillWhereInput
    /**
     * Limit how many workSkills to update.
     */
    limit?: number
  }

  /**
   * workSkill upsert
   */
  export type workSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workSkill
     */
    select?: workSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workSkill
     */
    omit?: workSkillOmit<ExtArgs> | null
    /**
     * The filter to search for the workSkill to update in case it exists.
     */
    where: workSkillWhereUniqueInput
    /**
     * In case the workSkill found by the `where` argument doesn't exist, create a new workSkill with this data.
     */
    create: XOR<workSkillCreateInput, workSkillUncheckedCreateInput>
    /**
     * In case the workSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workSkillUpdateInput, workSkillUncheckedUpdateInput>
  }

  /**
   * workSkill delete
   */
  export type workSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workSkill
     */
    select?: workSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workSkill
     */
    omit?: workSkillOmit<ExtArgs> | null
    /**
     * Filter which workSkill to delete.
     */
    where: workSkillWhereUniqueInput
  }

  /**
   * workSkill deleteMany
   */
  export type workSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workSkills to delete
     */
    where?: workSkillWhereInput
    /**
     * Limit how many workSkills to delete.
     */
    limit?: number
  }

  /**
   * workSkill without action
   */
  export type workSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workSkill
     */
    select?: workSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workSkill
     */
    omit?: workSkillOmit<ExtArgs> | null
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


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    devId: 'devId'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const SkillCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillCategoryScalarFieldEnum = (typeof SkillCategoryScalarFieldEnum)[keyof typeof SkillCategoryScalarFieldEnum]


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


  export const SkillEventTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillEventTypeScalarFieldEnum = (typeof SkillEventTypeScalarFieldEnum)[keyof typeof SkillEventTypeScalarFieldEnum]


  export const SkillReplacementScalarFieldEnum: {
    skillId: 'skillId',
    replacingSkillId: 'replacingSkillId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillReplacementScalarFieldEnum = (typeof SkillReplacementScalarFieldEnum)[keyof typeof SkillReplacementScalarFieldEnum]


  export const SourceTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SourceTypeScalarFieldEnum = (typeof SourceTypeScalarFieldEnum)[keyof typeof SourceTypeScalarFieldEnum]


  export const UserSkillScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    skillId: 'skillId',
    userSkillLevelId: 'userSkillLevelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userSkillDisplayModeId: 'userSkillDisplayModeId'
  };

  export type UserSkillScalarFieldEnum = (typeof UserSkillScalarFieldEnum)[keyof typeof UserSkillScalarFieldEnum]


  export const UserSkillWinSummaryScalarFieldEnum: {
    userId: 'userId',
    skillId: 'skillId',
    wins: 'wins',
    submitted: 'submitted',
    eventTypeCounts: 'eventTypeCounts',
    updatedAt: 'updatedAt'
  };

  export type UserSkillWinSummaryScalarFieldEnum = (typeof UserSkillWinSummaryScalarFieldEnum)[keyof typeof UserSkillWinSummaryScalarFieldEnum]


  export const UserSkillDisplayModeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSkillDisplayModeScalarFieldEnum = (typeof UserSkillDisplayModeScalarFieldEnum)[keyof typeof UserSkillDisplayModeScalarFieldEnum]


  export const UserSkillLevelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSkillLevelScalarFieldEnum = (typeof UserSkillLevelScalarFieldEnum)[keyof typeof UserSkillLevelScalarFieldEnum]


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


  export type eventWhereInput = {
    AND?: eventWhereInput | eventWhereInput[]
    OR?: eventWhereInput[]
    NOT?: eventWhereInput | eventWhereInput[]
    id?: UuidFilter<"event"> | string
    topic?: StringFilter<"event"> | string
    payload?: JsonFilter<"event">
    payloadHash?: StringNullableFilter<"event"> | string | null
    createdAt?: DateTimeFilter<"event"> | Date | string
    skillEvents?: SkillEventListRelationFilter
  }

  export type eventOrderByWithRelationInput = {
    id?: SortOrder
    topic?: SortOrder
    payload?: SortOrder
    payloadHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    skillEvents?: skillEventOrderByRelationAggregateInput
  }

  export type eventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    payloadHash?: string
    AND?: eventWhereInput | eventWhereInput[]
    OR?: eventWhereInput[]
    NOT?: eventWhereInput | eventWhereInput[]
    topic?: StringFilter<"event"> | string
    payload?: JsonFilter<"event">
    createdAt?: DateTimeFilter<"event"> | Date | string
    skillEvents?: SkillEventListRelationFilter
  }, "id" | "payloadHash">

  export type eventOrderByWithAggregationInput = {
    id?: SortOrder
    topic?: SortOrder
    payload?: SortOrder
    payloadHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
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
    payloadHash?: StringNullableWithAggregatesFilter<"event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"event"> | Date | string
  }

  export type skillWhereInput = {
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    id?: UuidFilter<"skill"> | string
    name?: StringFilter<"skill"> | string
    description?: StringNullableFilter<"skill"> | string | null
    categoryId?: UuidNullableFilter<"skill"> | string | null
    createdAt?: DateTimeFilter<"skill"> | Date | string
    updatedAt?: DateTimeFilter<"skill"> | Date | string
    deletedAt?: DateTimeNullableFilter<"skill"> | Date | string | null
    devId?: UuidNullableFilter<"skill"> | string | null
    category?: XOR<SkillCategoryNullableScalarRelationFilter, skillCategoryWhereInput> | null
    skillEvents?: SkillEventListRelationFilter
    userSkills?: UserSkillListRelationFilter
  }

  export type skillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    devId?: SortOrderInput | SortOrder
    category?: skillCategoryOrderByWithRelationInput
    skillEvents?: skillEventOrderByRelationAggregateInput
    userSkills?: userSkillOrderByRelationAggregateInput
  }

  export type skillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    description?: StringNullableFilter<"skill"> | string | null
    categoryId?: UuidNullableFilter<"skill"> | string | null
    createdAt?: DateTimeFilter<"skill"> | Date | string
    updatedAt?: DateTimeFilter<"skill"> | Date | string
    deletedAt?: DateTimeNullableFilter<"skill"> | Date | string | null
    devId?: UuidNullableFilter<"skill"> | string | null
    category?: XOR<SkillCategoryNullableScalarRelationFilter, skillCategoryWhereInput> | null
    skillEvents?: SkillEventListRelationFilter
    userSkills?: UserSkillListRelationFilter
  }, "id" | "name">

  export type skillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    devId?: SortOrderInput | SortOrder
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
    categoryId?: UuidNullableWithAggregatesFilter<"skill"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"skill"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"skill"> | Date | string | null
    devId?: UuidNullableWithAggregatesFilter<"skill"> | string | null
  }

  export type skillCategoryWhereInput = {
    AND?: skillCategoryWhereInput | skillCategoryWhereInput[]
    OR?: skillCategoryWhereInput[]
    NOT?: skillCategoryWhereInput | skillCategoryWhereInput[]
    id?: UuidFilter<"skillCategory"> | string
    name?: StringFilter<"skillCategory"> | string
    description?: StringNullableFilter<"skillCategory"> | string | null
    createdAt?: DateTimeFilter<"skillCategory"> | Date | string
    updatedAt?: DateTimeFilter<"skillCategory"> | Date | string
    skills?: SkillListRelationFilter
  }

  export type skillCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skills?: skillOrderByRelationAggregateInput
  }

  export type skillCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: skillCategoryWhereInput | skillCategoryWhereInput[]
    OR?: skillCategoryWhereInput[]
    NOT?: skillCategoryWhereInput | skillCategoryWhereInput[]
    description?: StringNullableFilter<"skillCategory"> | string | null
    createdAt?: DateTimeFilter<"skillCategory"> | Date | string
    updatedAt?: DateTimeFilter<"skillCategory"> | Date | string
    skills?: SkillListRelationFilter
  }, "id" | "name">

  export type skillCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: skillCategoryCountOrderByAggregateInput
    _max?: skillCategoryMaxOrderByAggregateInput
    _min?: skillCategoryMinOrderByAggregateInput
  }

  export type skillCategoryScalarWhereWithAggregatesInput = {
    AND?: skillCategoryScalarWhereWithAggregatesInput | skillCategoryScalarWhereWithAggregatesInput[]
    OR?: skillCategoryScalarWhereWithAggregatesInput[]
    NOT?: skillCategoryScalarWhereWithAggregatesInput | skillCategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"skillCategory"> | string
    name?: StringWithAggregatesFilter<"skillCategory"> | string
    description?: StringNullableWithAggregatesFilter<"skillCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"skillCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"skillCategory"> | Date | string
  }

  export type skillEventWhereInput = {
    AND?: skillEventWhereInput | skillEventWhereInput[]
    OR?: skillEventWhereInput[]
    NOT?: skillEventWhereInput | skillEventWhereInput[]
    id?: UuidFilter<"skillEvent"> | string
    eventId?: UuidFilter<"skillEvent"> | string
    userId?: IntFilter<"skillEvent"> | number
    skillId?: UuidFilter<"skillEvent"> | string
    skillEventTypeId?: UuidFilter<"skillEvent"> | string
    sourceId?: StringFilter<"skillEvent"> | string
    sourceTypeId?: UuidFilter<"skillEvent"> | string
    createdAt?: DateTimeFilter<"skillEvent"> | Date | string
    event?: XOR<EventScalarRelationFilter, eventWhereInput>
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
    skillEventType?: XOR<SkillEventTypeScalarRelationFilter, skillEventTypeWhereInput>
    sourceType?: XOR<SourceTypeScalarRelationFilter, sourceTypeWhereInput>
  }

  export type skillEventOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillEventTypeId?: SortOrder
    sourceId?: SortOrder
    sourceTypeId?: SortOrder
    createdAt?: SortOrder
    event?: eventOrderByWithRelationInput
    skill?: skillOrderByWithRelationInput
    skillEventType?: skillEventTypeOrderByWithRelationInput
    sourceType?: sourceTypeOrderByWithRelationInput
  }

  export type skillEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    skillId_skillEventTypeId_sourceId_userId?: skillEventSkillIdSkillEventTypeIdSourceIdUserIdCompoundUniqueInput
    AND?: skillEventWhereInput | skillEventWhereInput[]
    OR?: skillEventWhereInput[]
    NOT?: skillEventWhereInput | skillEventWhereInput[]
    eventId?: UuidFilter<"skillEvent"> | string
    userId?: IntFilter<"skillEvent"> | number
    skillId?: UuidFilter<"skillEvent"> | string
    skillEventTypeId?: UuidFilter<"skillEvent"> | string
    sourceId?: StringFilter<"skillEvent"> | string
    sourceTypeId?: UuidFilter<"skillEvent"> | string
    createdAt?: DateTimeFilter<"skillEvent"> | Date | string
    event?: XOR<EventScalarRelationFilter, eventWhereInput>
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
    skillEventType?: XOR<SkillEventTypeScalarRelationFilter, skillEventTypeWhereInput>
    sourceType?: XOR<SourceTypeScalarRelationFilter, sourceTypeWhereInput>
  }, "id" | "skillId_skillEventTypeId_sourceId_userId">

  export type skillEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillEventTypeId?: SortOrder
    sourceId?: SortOrder
    sourceTypeId?: SortOrder
    createdAt?: SortOrder
    _count?: skillEventCountOrderByAggregateInput
    _avg?: skillEventAvgOrderByAggregateInput
    _max?: skillEventMaxOrderByAggregateInput
    _min?: skillEventMinOrderByAggregateInput
    _sum?: skillEventSumOrderByAggregateInput
  }

  export type skillEventScalarWhereWithAggregatesInput = {
    AND?: skillEventScalarWhereWithAggregatesInput | skillEventScalarWhereWithAggregatesInput[]
    OR?: skillEventScalarWhereWithAggregatesInput[]
    NOT?: skillEventScalarWhereWithAggregatesInput | skillEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"skillEvent"> | string
    eventId?: UuidWithAggregatesFilter<"skillEvent"> | string
    userId?: IntWithAggregatesFilter<"skillEvent"> | number
    skillId?: UuidWithAggregatesFilter<"skillEvent"> | string
    skillEventTypeId?: UuidWithAggregatesFilter<"skillEvent"> | string
    sourceId?: StringWithAggregatesFilter<"skillEvent"> | string
    sourceTypeId?: UuidWithAggregatesFilter<"skillEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"skillEvent"> | Date | string
  }

  export type skillEventTypeWhereInput = {
    AND?: skillEventTypeWhereInput | skillEventTypeWhereInput[]
    OR?: skillEventTypeWhereInput[]
    NOT?: skillEventTypeWhereInput | skillEventTypeWhereInput[]
    id?: UuidFilter<"skillEventType"> | string
    name?: StringFilter<"skillEventType"> | string
    description?: StringNullableFilter<"skillEventType"> | string | null
    createdAt?: DateTimeFilter<"skillEventType"> | Date | string
    updatedAt?: DateTimeFilter<"skillEventType"> | Date | string
    skillEvents?: SkillEventListRelationFilter
  }

  export type skillEventTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skillEvents?: skillEventOrderByRelationAggregateInput
  }

  export type skillEventTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: skillEventTypeWhereInput | skillEventTypeWhereInput[]
    OR?: skillEventTypeWhereInput[]
    NOT?: skillEventTypeWhereInput | skillEventTypeWhereInput[]
    description?: StringNullableFilter<"skillEventType"> | string | null
    createdAt?: DateTimeFilter<"skillEventType"> | Date | string
    updatedAt?: DateTimeFilter<"skillEventType"> | Date | string
    skillEvents?: SkillEventListRelationFilter
  }, "id" | "name">

  export type skillEventTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: skillEventTypeCountOrderByAggregateInput
    _max?: skillEventTypeMaxOrderByAggregateInput
    _min?: skillEventTypeMinOrderByAggregateInput
  }

  export type skillEventTypeScalarWhereWithAggregatesInput = {
    AND?: skillEventTypeScalarWhereWithAggregatesInput | skillEventTypeScalarWhereWithAggregatesInput[]
    OR?: skillEventTypeScalarWhereWithAggregatesInput[]
    NOT?: skillEventTypeScalarWhereWithAggregatesInput | skillEventTypeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"skillEventType"> | string
    name?: StringWithAggregatesFilter<"skillEventType"> | string
    description?: StringNullableWithAggregatesFilter<"skillEventType"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"skillEventType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"skillEventType"> | Date | string
  }

  export type skillReplacementWhereInput = {
    AND?: skillReplacementWhereInput | skillReplacementWhereInput[]
    OR?: skillReplacementWhereInput[]
    NOT?: skillReplacementWhereInput | skillReplacementWhereInput[]
    skillId?: UuidFilter<"skillReplacement"> | string
    replacingSkillId?: UuidFilter<"skillReplacement"> | string
    categoryId?: UuidFilter<"skillReplacement"> | string
    createdAt?: DateTimeNullableFilter<"skillReplacement"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"skillReplacement"> | Date | string | null
  }

  export type skillReplacementOrderByWithRelationInput = {
    skillId?: SortOrder
    replacingSkillId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type skillReplacementWhereUniqueInput = Prisma.AtLeast<{
    skillId?: string
    AND?: skillReplacementWhereInput | skillReplacementWhereInput[]
    OR?: skillReplacementWhereInput[]
    NOT?: skillReplacementWhereInput | skillReplacementWhereInput[]
    replacingSkillId?: UuidFilter<"skillReplacement"> | string
    categoryId?: UuidFilter<"skillReplacement"> | string
    createdAt?: DateTimeNullableFilter<"skillReplacement"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"skillReplacement"> | Date | string | null
  }, "skillId">

  export type skillReplacementOrderByWithAggregationInput = {
    skillId?: SortOrder
    replacingSkillId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: skillReplacementCountOrderByAggregateInput
    _max?: skillReplacementMaxOrderByAggregateInput
    _min?: skillReplacementMinOrderByAggregateInput
  }

  export type skillReplacementScalarWhereWithAggregatesInput = {
    AND?: skillReplacementScalarWhereWithAggregatesInput | skillReplacementScalarWhereWithAggregatesInput[]
    OR?: skillReplacementScalarWhereWithAggregatesInput[]
    NOT?: skillReplacementScalarWhereWithAggregatesInput | skillReplacementScalarWhereWithAggregatesInput[]
    skillId?: UuidWithAggregatesFilter<"skillReplacement"> | string
    replacingSkillId?: UuidWithAggregatesFilter<"skillReplacement"> | string
    categoryId?: UuidWithAggregatesFilter<"skillReplacement"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"skillReplacement"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"skillReplacement"> | Date | string | null
  }

  export type sourceTypeWhereInput = {
    AND?: sourceTypeWhereInput | sourceTypeWhereInput[]
    OR?: sourceTypeWhereInput[]
    NOT?: sourceTypeWhereInput | sourceTypeWhereInput[]
    id?: UuidFilter<"sourceType"> | string
    name?: StringFilter<"sourceType"> | string
    description?: StringNullableFilter<"sourceType"> | string | null
    createdAt?: DateTimeFilter<"sourceType"> | Date | string
    updatedAt?: DateTimeFilter<"sourceType"> | Date | string
    skillEvents?: SkillEventListRelationFilter
  }

  export type sourceTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skillEvents?: skillEventOrderByRelationAggregateInput
  }

  export type sourceTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: sourceTypeWhereInput | sourceTypeWhereInput[]
    OR?: sourceTypeWhereInput[]
    NOT?: sourceTypeWhereInput | sourceTypeWhereInput[]
    description?: StringNullableFilter<"sourceType"> | string | null
    createdAt?: DateTimeFilter<"sourceType"> | Date | string
    updatedAt?: DateTimeFilter<"sourceType"> | Date | string
    skillEvents?: SkillEventListRelationFilter
  }, "id" | "name">

  export type sourceTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: sourceTypeCountOrderByAggregateInput
    _max?: sourceTypeMaxOrderByAggregateInput
    _min?: sourceTypeMinOrderByAggregateInput
  }

  export type sourceTypeScalarWhereWithAggregatesInput = {
    AND?: sourceTypeScalarWhereWithAggregatesInput | sourceTypeScalarWhereWithAggregatesInput[]
    OR?: sourceTypeScalarWhereWithAggregatesInput[]
    NOT?: sourceTypeScalarWhereWithAggregatesInput | sourceTypeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"sourceType"> | string
    name?: StringWithAggregatesFilter<"sourceType"> | string
    description?: StringNullableWithAggregatesFilter<"sourceType"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"sourceType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sourceType"> | Date | string
  }

  export type userSkillWhereInput = {
    AND?: userSkillWhereInput | userSkillWhereInput[]
    OR?: userSkillWhereInput[]
    NOT?: userSkillWhereInput | userSkillWhereInput[]
    id?: UuidFilter<"userSkill"> | string
    userId?: IntFilter<"userSkill"> | number
    skillId?: UuidFilter<"userSkill"> | string
    userSkillLevelId?: UuidFilter<"userSkill"> | string
    createdAt?: DateTimeFilter<"userSkill"> | Date | string
    updatedAt?: DateTimeFilter<"userSkill"> | Date | string
    userSkillDisplayModeId?: UuidFilter<"userSkill"> | string
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
    level?: XOR<UserSkillLevelScalarRelationFilter, userSkillLevelWhereInput>
    displayMode?: XOR<UserSkillDisplayModeScalarRelationFilter, userSkillDisplayModeWhereInput>
  }

  export type userSkillOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    userSkillLevelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userSkillDisplayModeId?: SortOrder
    skill?: skillOrderByWithRelationInput
    level?: userSkillLevelOrderByWithRelationInput
    displayMode?: userSkillDisplayModeOrderByWithRelationInput
  }

  export type userSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_skillId_userSkillLevelId?: userSkillUserIdSkillIdUserSkillLevelIdCompoundUniqueInput
    AND?: userSkillWhereInput | userSkillWhereInput[]
    OR?: userSkillWhereInput[]
    NOT?: userSkillWhereInput | userSkillWhereInput[]
    userId?: IntFilter<"userSkill"> | number
    skillId?: UuidFilter<"userSkill"> | string
    userSkillLevelId?: UuidFilter<"userSkill"> | string
    createdAt?: DateTimeFilter<"userSkill"> | Date | string
    updatedAt?: DateTimeFilter<"userSkill"> | Date | string
    userSkillDisplayModeId?: UuidFilter<"userSkill"> | string
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
    level?: XOR<UserSkillLevelScalarRelationFilter, userSkillLevelWhereInput>
    displayMode?: XOR<UserSkillDisplayModeScalarRelationFilter, userSkillDisplayModeWhereInput>
  }, "id" | "userId_skillId_userSkillLevelId">

  export type userSkillOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    userSkillLevelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userSkillDisplayModeId?: SortOrder
    _count?: userSkillCountOrderByAggregateInput
    _avg?: userSkillAvgOrderByAggregateInput
    _max?: userSkillMaxOrderByAggregateInput
    _min?: userSkillMinOrderByAggregateInput
    _sum?: userSkillSumOrderByAggregateInput
  }

  export type userSkillScalarWhereWithAggregatesInput = {
    AND?: userSkillScalarWhereWithAggregatesInput | userSkillScalarWhereWithAggregatesInput[]
    OR?: userSkillScalarWhereWithAggregatesInput[]
    NOT?: userSkillScalarWhereWithAggregatesInput | userSkillScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"userSkill"> | string
    userId?: IntWithAggregatesFilter<"userSkill"> | number
    skillId?: UuidWithAggregatesFilter<"userSkill"> | string
    userSkillLevelId?: UuidWithAggregatesFilter<"userSkill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"userSkill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"userSkill"> | Date | string
    userSkillDisplayModeId?: UuidWithAggregatesFilter<"userSkill"> | string
  }

  export type userSkillWinSummaryWhereInput = {
    AND?: userSkillWinSummaryWhereInput | userSkillWinSummaryWhereInput[]
    OR?: userSkillWinSummaryWhereInput[]
    NOT?: userSkillWinSummaryWhereInput | userSkillWinSummaryWhereInput[]
    userId?: IntFilter<"userSkillWinSummary"> | number
    skillId?: UuidFilter<"userSkillWinSummary"> | string
    wins?: IntFilter<"userSkillWinSummary"> | number
    submitted?: IntFilter<"userSkillWinSummary"> | number
    eventTypeCounts?: JsonFilter<"userSkillWinSummary">
    updatedAt?: DateTimeFilter<"userSkillWinSummary"> | Date | string
  }

  export type userSkillWinSummaryOrderByWithRelationInput = {
    userId?: SortOrder
    skillId?: SortOrder
    wins?: SortOrder
    submitted?: SortOrder
    eventTypeCounts?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSkillWinSummaryWhereUniqueInput = Prisma.AtLeast<{
    userId_skillId?: userSkillWinSummaryUserIdSkillIdCompoundUniqueInput
    AND?: userSkillWinSummaryWhereInput | userSkillWinSummaryWhereInput[]
    OR?: userSkillWinSummaryWhereInput[]
    NOT?: userSkillWinSummaryWhereInput | userSkillWinSummaryWhereInput[]
    userId?: IntFilter<"userSkillWinSummary"> | number
    skillId?: UuidFilter<"userSkillWinSummary"> | string
    wins?: IntFilter<"userSkillWinSummary"> | number
    submitted?: IntFilter<"userSkillWinSummary"> | number
    eventTypeCounts?: JsonFilter<"userSkillWinSummary">
    updatedAt?: DateTimeFilter<"userSkillWinSummary"> | Date | string
  }, "userId_skillId">

  export type userSkillWinSummaryOrderByWithAggregationInput = {
    userId?: SortOrder
    skillId?: SortOrder
    wins?: SortOrder
    submitted?: SortOrder
    eventTypeCounts?: SortOrder
    updatedAt?: SortOrder
    _count?: userSkillWinSummaryCountOrderByAggregateInput
    _avg?: userSkillWinSummaryAvgOrderByAggregateInput
    _max?: userSkillWinSummaryMaxOrderByAggregateInput
    _min?: userSkillWinSummaryMinOrderByAggregateInput
    _sum?: userSkillWinSummarySumOrderByAggregateInput
  }

  export type userSkillWinSummaryScalarWhereWithAggregatesInput = {
    AND?: userSkillWinSummaryScalarWhereWithAggregatesInput | userSkillWinSummaryScalarWhereWithAggregatesInput[]
    OR?: userSkillWinSummaryScalarWhereWithAggregatesInput[]
    NOT?: userSkillWinSummaryScalarWhereWithAggregatesInput | userSkillWinSummaryScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"userSkillWinSummary"> | number
    skillId?: UuidWithAggregatesFilter<"userSkillWinSummary"> | string
    wins?: IntWithAggregatesFilter<"userSkillWinSummary"> | number
    submitted?: IntWithAggregatesFilter<"userSkillWinSummary"> | number
    eventTypeCounts?: JsonWithAggregatesFilter<"userSkillWinSummary">
    updatedAt?: DateTimeWithAggregatesFilter<"userSkillWinSummary"> | Date | string
  }

  export type userSkillDisplayModeWhereInput = {
    AND?: userSkillDisplayModeWhereInput | userSkillDisplayModeWhereInput[]
    OR?: userSkillDisplayModeWhereInput[]
    NOT?: userSkillDisplayModeWhereInput | userSkillDisplayModeWhereInput[]
    id?: UuidFilter<"userSkillDisplayMode"> | string
    name?: StringFilter<"userSkillDisplayMode"> | string
    description?: StringNullableFilter<"userSkillDisplayMode"> | string | null
    createdAt?: DateTimeFilter<"userSkillDisplayMode"> | Date | string
    updatedAt?: DateTimeFilter<"userSkillDisplayMode"> | Date | string
    userSkills?: UserSkillListRelationFilter
  }

  export type userSkillDisplayModeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userSkills?: userSkillOrderByRelationAggregateInput
  }

  export type userSkillDisplayModeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: userSkillDisplayModeWhereInput | userSkillDisplayModeWhereInput[]
    OR?: userSkillDisplayModeWhereInput[]
    NOT?: userSkillDisplayModeWhereInput | userSkillDisplayModeWhereInput[]
    description?: StringNullableFilter<"userSkillDisplayMode"> | string | null
    createdAt?: DateTimeFilter<"userSkillDisplayMode"> | Date | string
    updatedAt?: DateTimeFilter<"userSkillDisplayMode"> | Date | string
    userSkills?: UserSkillListRelationFilter
  }, "id" | "name">

  export type userSkillDisplayModeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userSkillDisplayModeCountOrderByAggregateInput
    _max?: userSkillDisplayModeMaxOrderByAggregateInput
    _min?: userSkillDisplayModeMinOrderByAggregateInput
  }

  export type userSkillDisplayModeScalarWhereWithAggregatesInput = {
    AND?: userSkillDisplayModeScalarWhereWithAggregatesInput | userSkillDisplayModeScalarWhereWithAggregatesInput[]
    OR?: userSkillDisplayModeScalarWhereWithAggregatesInput[]
    NOT?: userSkillDisplayModeScalarWhereWithAggregatesInput | userSkillDisplayModeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"userSkillDisplayMode"> | string
    name?: StringWithAggregatesFilter<"userSkillDisplayMode"> | string
    description?: StringNullableWithAggregatesFilter<"userSkillDisplayMode"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"userSkillDisplayMode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"userSkillDisplayMode"> | Date | string
  }

  export type userSkillLevelWhereInput = {
    AND?: userSkillLevelWhereInput | userSkillLevelWhereInput[]
    OR?: userSkillLevelWhereInput[]
    NOT?: userSkillLevelWhereInput | userSkillLevelWhereInput[]
    id?: UuidFilter<"userSkillLevel"> | string
    name?: StringFilter<"userSkillLevel"> | string
    description?: StringNullableFilter<"userSkillLevel"> | string | null
    createdAt?: DateTimeFilter<"userSkillLevel"> | Date | string
    updatedAt?: DateTimeFilter<"userSkillLevel"> | Date | string
    userSkills?: UserSkillListRelationFilter
  }

  export type userSkillLevelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userSkills?: userSkillOrderByRelationAggregateInput
  }

  export type userSkillLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: userSkillLevelWhereInput | userSkillLevelWhereInput[]
    OR?: userSkillLevelWhereInput[]
    NOT?: userSkillLevelWhereInput | userSkillLevelWhereInput[]
    description?: StringNullableFilter<"userSkillLevel"> | string | null
    createdAt?: DateTimeFilter<"userSkillLevel"> | Date | string
    updatedAt?: DateTimeFilter<"userSkillLevel"> | Date | string
    userSkills?: UserSkillListRelationFilter
  }, "id" | "name">

  export type userSkillLevelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userSkillLevelCountOrderByAggregateInput
    _max?: userSkillLevelMaxOrderByAggregateInput
    _min?: userSkillLevelMinOrderByAggregateInput
  }

  export type userSkillLevelScalarWhereWithAggregatesInput = {
    AND?: userSkillLevelScalarWhereWithAggregatesInput | userSkillLevelScalarWhereWithAggregatesInput[]
    OR?: userSkillLevelScalarWhereWithAggregatesInput[]
    NOT?: userSkillLevelScalarWhereWithAggregatesInput | userSkillLevelScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"userSkillLevel"> | string
    name?: StringWithAggregatesFilter<"userSkillLevel"> | string
    description?: StringNullableWithAggregatesFilter<"userSkillLevel"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"userSkillLevel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"userSkillLevel"> | Date | string
  }

  export type workSkillWhereInput = {
    AND?: workSkillWhereInput | workSkillWhereInput[]
    OR?: workSkillWhereInput[]
    NOT?: workSkillWhereInput | workSkillWhereInput[]
    id?: UuidFilter<"workSkill"> | string
    workId?: UuidFilter<"workSkill"> | string
    workTypeId?: UuidFilter<"workSkill"> | string
    skillId?: UuidFilter<"workSkill"> | string
    createdAt?: DateTimeNullableFilter<"workSkill"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"workSkill"> | Date | string | null
  }

  export type workSkillOrderByWithRelationInput = {
    id?: SortOrder
    workId?: SortOrder
    workTypeId?: SortOrder
    skillId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type workSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workId_workTypeId_skillId?: workSkillWorkIdWorkTypeIdSkillIdCompoundUniqueInput
    AND?: workSkillWhereInput | workSkillWhereInput[]
    OR?: workSkillWhereInput[]
    NOT?: workSkillWhereInput | workSkillWhereInput[]
    workId?: UuidFilter<"workSkill"> | string
    workTypeId?: UuidFilter<"workSkill"> | string
    skillId?: UuidFilter<"workSkill"> | string
    createdAt?: DateTimeNullableFilter<"workSkill"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"workSkill"> | Date | string | null
  }, "id" | "workId_workTypeId_skillId">

  export type workSkillOrderByWithAggregationInput = {
    id?: SortOrder
    workId?: SortOrder
    workTypeId?: SortOrder
    skillId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: workSkillCountOrderByAggregateInput
    _max?: workSkillMaxOrderByAggregateInput
    _min?: workSkillMinOrderByAggregateInput
  }

  export type workSkillScalarWhereWithAggregatesInput = {
    AND?: workSkillScalarWhereWithAggregatesInput | workSkillScalarWhereWithAggregatesInput[]
    OR?: workSkillScalarWhereWithAggregatesInput[]
    NOT?: workSkillScalarWhereWithAggregatesInput | workSkillScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"workSkill"> | string
    workId?: UuidWithAggregatesFilter<"workSkill"> | string
    workTypeId?: UuidWithAggregatesFilter<"workSkill"> | string
    skillId?: UuidWithAggregatesFilter<"workSkill"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"workSkill"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"workSkill"> | Date | string | null
  }

  export type eventCreateInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt: Date | string
    skillEvents?: skillEventCreateNestedManyWithoutEventInput
  }

  export type eventUncheckedCreateInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt: Date | string
    skillEvents?: skillEventUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillEvents?: skillEventUpdateManyWithoutEventNestedInput
  }

  export type eventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillEvents?: skillEventUncheckedUpdateManyWithoutEventNestedInput
  }

  export type eventCreateManyInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt: Date | string
  }

  export type eventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    devId?: string | null
    category?: skillCategoryCreateNestedOneWithoutSkillsInput
    skillEvents?: skillEventCreateNestedManyWithoutSkillInput
    userSkills?: userSkillCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    devId?: string | null
    skillEvents?: skillEventUncheckedCreateNestedManyWithoutSkillInput
    userSkills?: userSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: skillCategoryUpdateOneWithoutSkillsNestedInput
    skillEvents?: skillEventUpdateManyWithoutSkillNestedInput
    userSkills?: userSkillUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devId?: NullableStringFieldUpdateOperationsInput | string | null
    skillEvents?: skillEventUncheckedUpdateManyWithoutSkillNestedInput
    userSkills?: userSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type skillCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    devId?: string | null
  }

  export type skillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillCategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: skillCreateNestedManyWithoutCategoryInput
  }

  export type skillCategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: skillUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type skillCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: skillUpdateManyWithoutCategoryNestedInput
  }

  export type skillCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: skillUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type skillCategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type skillCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillEventCreateInput = {
    id?: string
    userId: number
    sourceId: string
    createdAt: Date | string
    event: eventCreateNestedOneWithoutSkillEventsInput
    skill: skillCreateNestedOneWithoutSkillEventsInput
    skillEventType: skillEventTypeCreateNestedOneWithoutSkillEventsInput
    sourceType: sourceTypeCreateNestedOneWithoutSkillEventsInput
  }

  export type skillEventUncheckedCreateInput = {
    id?: string
    eventId: string
    userId: number
    skillId: string
    skillEventTypeId: string
    sourceId: string
    sourceTypeId: string
    createdAt: Date | string
  }

  export type skillEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventUpdateOneRequiredWithoutSkillEventsNestedInput
    skill?: skillUpdateOneRequiredWithoutSkillEventsNestedInput
    skillEventType?: skillEventTypeUpdateOneRequiredWithoutSkillEventsNestedInput
    sourceType?: sourceTypeUpdateOneRequiredWithoutSkillEventsNestedInput
  }

  export type skillEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillEventCreateManyInput = {
    id?: string
    eventId: string
    userId: number
    skillId: string
    skillEventTypeId: string
    sourceId: string
    sourceTypeId: string
    createdAt: Date | string
  }

  export type skillEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillEventTypeCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
    skillEvents?: skillEventCreateNestedManyWithoutSkillEventTypeInput
  }

  export type skillEventTypeUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
    skillEvents?: skillEventUncheckedCreateNestedManyWithoutSkillEventTypeInput
  }

  export type skillEventTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillEvents?: skillEventUpdateManyWithoutSkillEventTypeNestedInput
  }

  export type skillEventTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillEvents?: skillEventUncheckedUpdateManyWithoutSkillEventTypeNestedInput
  }

  export type skillEventTypeCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type skillEventTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillEventTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillReplacementCreateInput = {
    skillId: string
    replacingSkillId: string
    categoryId: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type skillReplacementUncheckedCreateInput = {
    skillId: string
    replacingSkillId: string
    categoryId: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type skillReplacementUpdateInput = {
    skillId?: StringFieldUpdateOperationsInput | string
    replacingSkillId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skillReplacementUncheckedUpdateInput = {
    skillId?: StringFieldUpdateOperationsInput | string
    replacingSkillId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skillReplacementCreateManyInput = {
    skillId: string
    replacingSkillId: string
    categoryId: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type skillReplacementUpdateManyMutationInput = {
    skillId?: StringFieldUpdateOperationsInput | string
    replacingSkillId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skillReplacementUncheckedUpdateManyInput = {
    skillId?: StringFieldUpdateOperationsInput | string
    replacingSkillId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sourceTypeCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
    skillEvents?: skillEventCreateNestedManyWithoutSourceTypeInput
  }

  export type sourceTypeUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
    skillEvents?: skillEventUncheckedCreateNestedManyWithoutSourceTypeInput
  }

  export type sourceTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillEvents?: skillEventUpdateManyWithoutSourceTypeNestedInput
  }

  export type sourceTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillEvents?: skillEventUncheckedUpdateManyWithoutSourceTypeNestedInput
  }

  export type sourceTypeCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type sourceTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sourceTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillCreateInput = {
    id?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: skillCreateNestedOneWithoutUserSkillsInput
    level: userSkillLevelCreateNestedOneWithoutUserSkillsInput
    displayMode?: userSkillDisplayModeCreateNestedOneWithoutUserSkillsInput
  }

  export type userSkillUncheckedCreateInput = {
    id?: string
    userId: number
    skillId: string
    userSkillLevelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userSkillDisplayModeId?: string
  }

  export type userSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: skillUpdateOneRequiredWithoutUserSkillsNestedInput
    level?: userSkillLevelUpdateOneRequiredWithoutUserSkillsNestedInput
    displayMode?: userSkillDisplayModeUpdateOneRequiredWithoutUserSkillsNestedInput
  }

  export type userSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    userSkillLevelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkillDisplayModeId?: StringFieldUpdateOperationsInput | string
  }

  export type userSkillCreateManyInput = {
    id?: string
    userId: number
    skillId: string
    userSkillLevelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userSkillDisplayModeId?: string
  }

  export type userSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    userSkillLevelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkillDisplayModeId?: StringFieldUpdateOperationsInput | string
  }

  export type userSkillWinSummaryCreateInput = {
    userId: number
    skillId: string
    wins?: number
    submitted?: number
    eventTypeCounts?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type userSkillWinSummaryUncheckedCreateInput = {
    userId: number
    skillId: string
    wins?: number
    submitted?: number
    eventTypeCounts?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type userSkillWinSummaryUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    submitted?: IntFieldUpdateOperationsInput | number
    eventTypeCounts?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillWinSummaryUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    submitted?: IntFieldUpdateOperationsInput | number
    eventTypeCounts?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillWinSummaryCreateManyInput = {
    userId: number
    skillId: string
    wins?: number
    submitted?: number
    eventTypeCounts?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type userSkillWinSummaryUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    submitted?: IntFieldUpdateOperationsInput | number
    eventTypeCounts?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillWinSummaryUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    submitted?: IntFieldUpdateOperationsInput | number
    eventTypeCounts?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillDisplayModeCreateInput = {
    id: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
    userSkills?: userSkillCreateNestedManyWithoutDisplayModeInput
  }

  export type userSkillDisplayModeUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
    userSkills?: userSkillUncheckedCreateNestedManyWithoutDisplayModeInput
  }

  export type userSkillDisplayModeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkills?: userSkillUpdateManyWithoutDisplayModeNestedInput
  }

  export type userSkillDisplayModeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkills?: userSkillUncheckedUpdateManyWithoutDisplayModeNestedInput
  }

  export type userSkillDisplayModeCreateManyInput = {
    id: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type userSkillDisplayModeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillDisplayModeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillLevelCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
    userSkills?: userSkillCreateNestedManyWithoutLevelInput
  }

  export type userSkillLevelUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
    userSkills?: userSkillUncheckedCreateNestedManyWithoutLevelInput
  }

  export type userSkillLevelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkills?: userSkillUpdateManyWithoutLevelNestedInput
  }

  export type userSkillLevelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkills?: userSkillUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type userSkillLevelCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type userSkillLevelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillLevelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workSkillCreateInput = {
    id?: string
    workId: string
    workTypeId: string
    skillId: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type workSkillUncheckedCreateInput = {
    id?: string
    workId: string
    workTypeId: string
    skillId: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type workSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    workTypeId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    workTypeId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workSkillCreateManyInput = {
    id?: string
    workId: string
    workTypeId: string
    skillId: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type workSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    workTypeId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    workTypeId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type SkillEventListRelationFilter = {
    every?: skillEventWhereInput
    some?: skillEventWhereInput
    none?: skillEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type skillEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventCountOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    payload?: SortOrder
    payloadHash?: SortOrder
    createdAt?: SortOrder
  }

  export type eventMaxOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    payloadHash?: SortOrder
    createdAt?: SortOrder
  }

  export type eventMinOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    payloadHash?: SortOrder
    createdAt?: SortOrder
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

  export type SkillCategoryNullableScalarRelationFilter = {
    is?: skillCategoryWhereInput | null
    isNot?: skillCategoryWhereInput | null
  }

  export type UserSkillListRelationFilter = {
    every?: userSkillWhereInput
    some?: userSkillWhereInput
    none?: userSkillWhereInput
  }

  export type userSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type skillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    devId?: SortOrder
  }

  export type skillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    devId?: SortOrder
  }

  export type skillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    devId?: SortOrder
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

  export type skillCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillCategoryMinOrderByAggregateInput = {
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
    is?: eventWhereInput
    isNot?: eventWhereInput
  }

  export type SkillScalarRelationFilter = {
    is?: skillWhereInput
    isNot?: skillWhereInput
  }

  export type SkillEventTypeScalarRelationFilter = {
    is?: skillEventTypeWhereInput
    isNot?: skillEventTypeWhereInput
  }

  export type SourceTypeScalarRelationFilter = {
    is?: sourceTypeWhereInput
    isNot?: sourceTypeWhereInput
  }

  export type skillEventSkillIdSkillEventTypeIdSourceIdUserIdCompoundUniqueInput = {
    skillId: string
    skillEventTypeId: string
    sourceId: string
    userId: number
  }

  export type skillEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillEventTypeId?: SortOrder
    sourceId?: SortOrder
    sourceTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type skillEventAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type skillEventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillEventTypeId?: SortOrder
    sourceId?: SortOrder
    sourceTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type skillEventMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillEventTypeId?: SortOrder
    sourceId?: SortOrder
    sourceTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type skillEventSumOrderByAggregateInput = {
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

  export type skillEventTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillEventTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillEventTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillReplacementCountOrderByAggregateInput = {
    skillId?: SortOrder
    replacingSkillId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillReplacementMaxOrderByAggregateInput = {
    skillId?: SortOrder
    replacingSkillId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillReplacementMinOrderByAggregateInput = {
    skillId?: SortOrder
    replacingSkillId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sourceTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sourceTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sourceTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillLevelScalarRelationFilter = {
    is?: userSkillLevelWhereInput
    isNot?: userSkillLevelWhereInput
  }

  export type UserSkillDisplayModeScalarRelationFilter = {
    is?: userSkillDisplayModeWhereInput
    isNot?: userSkillDisplayModeWhereInput
  }

  export type userSkillUserIdSkillIdUserSkillLevelIdCompoundUniqueInput = {
    userId: number
    skillId: string
    userSkillLevelId: string
  }

  export type userSkillCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    userSkillLevelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userSkillDisplayModeId?: SortOrder
  }

  export type userSkillAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type userSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    userSkillLevelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userSkillDisplayModeId?: SortOrder
  }

  export type userSkillMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    userSkillLevelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userSkillDisplayModeId?: SortOrder
  }

  export type userSkillSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type userSkillWinSummaryUserIdSkillIdCompoundUniqueInput = {
    userId: number
    skillId: string
  }

  export type userSkillWinSummaryCountOrderByAggregateInput = {
    userId?: SortOrder
    skillId?: SortOrder
    wins?: SortOrder
    submitted?: SortOrder
    eventTypeCounts?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSkillWinSummaryAvgOrderByAggregateInput = {
    userId?: SortOrder
    wins?: SortOrder
    submitted?: SortOrder
  }

  export type userSkillWinSummaryMaxOrderByAggregateInput = {
    userId?: SortOrder
    skillId?: SortOrder
    wins?: SortOrder
    submitted?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSkillWinSummaryMinOrderByAggregateInput = {
    userId?: SortOrder
    skillId?: SortOrder
    wins?: SortOrder
    submitted?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSkillWinSummarySumOrderByAggregateInput = {
    userId?: SortOrder
    wins?: SortOrder
    submitted?: SortOrder
  }

  export type userSkillDisplayModeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSkillDisplayModeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSkillDisplayModeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSkillLevelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSkillLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSkillLevelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workSkillWorkIdWorkTypeIdSkillIdCompoundUniqueInput = {
    workId: string
    workTypeId: string
    skillId: string
  }

  export type workSkillCountOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    workTypeId?: SortOrder
    skillId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    workTypeId?: SortOrder
    skillId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workSkillMinOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    workTypeId?: SortOrder
    skillId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillEventCreateNestedManyWithoutEventInput = {
    create?: XOR<skillEventCreateWithoutEventInput, skillEventUncheckedCreateWithoutEventInput> | skillEventCreateWithoutEventInput[] | skillEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutEventInput | skillEventCreateOrConnectWithoutEventInput[]
    createMany?: skillEventCreateManyEventInputEnvelope
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
  }

  export type skillEventUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<skillEventCreateWithoutEventInput, skillEventUncheckedCreateWithoutEventInput> | skillEventCreateWithoutEventInput[] | skillEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutEventInput | skillEventCreateOrConnectWithoutEventInput[]
    createMany?: skillEventCreateManyEventInputEnvelope
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
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

  export type skillEventUpdateManyWithoutEventNestedInput = {
    create?: XOR<skillEventCreateWithoutEventInput, skillEventUncheckedCreateWithoutEventInput> | skillEventCreateWithoutEventInput[] | skillEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutEventInput | skillEventCreateOrConnectWithoutEventInput[]
    upsert?: skillEventUpsertWithWhereUniqueWithoutEventInput | skillEventUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: skillEventCreateManyEventInputEnvelope
    set?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    disconnect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    delete?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    update?: skillEventUpdateWithWhereUniqueWithoutEventInput | skillEventUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: skillEventUpdateManyWithWhereWithoutEventInput | skillEventUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: skillEventScalarWhereInput | skillEventScalarWhereInput[]
  }

  export type skillEventUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<skillEventCreateWithoutEventInput, skillEventUncheckedCreateWithoutEventInput> | skillEventCreateWithoutEventInput[] | skillEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutEventInput | skillEventCreateOrConnectWithoutEventInput[]
    upsert?: skillEventUpsertWithWhereUniqueWithoutEventInput | skillEventUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: skillEventCreateManyEventInputEnvelope
    set?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    disconnect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    delete?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    update?: skillEventUpdateWithWhereUniqueWithoutEventInput | skillEventUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: skillEventUpdateManyWithWhereWithoutEventInput | skillEventUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: skillEventScalarWhereInput | skillEventScalarWhereInput[]
  }

  export type skillCategoryCreateNestedOneWithoutSkillsInput = {
    create?: XOR<skillCategoryCreateWithoutSkillsInput, skillCategoryUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: skillCategoryCreateOrConnectWithoutSkillsInput
    connect?: skillCategoryWhereUniqueInput
  }

  export type skillEventCreateNestedManyWithoutSkillInput = {
    create?: XOR<skillEventCreateWithoutSkillInput, skillEventUncheckedCreateWithoutSkillInput> | skillEventCreateWithoutSkillInput[] | skillEventUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutSkillInput | skillEventCreateOrConnectWithoutSkillInput[]
    createMany?: skillEventCreateManySkillInputEnvelope
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
  }

  export type userSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<userSkillCreateWithoutSkillInput, userSkillUncheckedCreateWithoutSkillInput> | userSkillCreateWithoutSkillInput[] | userSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: userSkillCreateOrConnectWithoutSkillInput | userSkillCreateOrConnectWithoutSkillInput[]
    createMany?: userSkillCreateManySkillInputEnvelope
    connect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
  }

  export type skillEventUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<skillEventCreateWithoutSkillInput, skillEventUncheckedCreateWithoutSkillInput> | skillEventCreateWithoutSkillInput[] | skillEventUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutSkillInput | skillEventCreateOrConnectWithoutSkillInput[]
    createMany?: skillEventCreateManySkillInputEnvelope
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
  }

  export type userSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<userSkillCreateWithoutSkillInput, userSkillUncheckedCreateWithoutSkillInput> | userSkillCreateWithoutSkillInput[] | userSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: userSkillCreateOrConnectWithoutSkillInput | userSkillCreateOrConnectWithoutSkillInput[]
    createMany?: userSkillCreateManySkillInputEnvelope
    connect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type skillCategoryUpdateOneWithoutSkillsNestedInput = {
    create?: XOR<skillCategoryCreateWithoutSkillsInput, skillCategoryUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: skillCategoryCreateOrConnectWithoutSkillsInput
    upsert?: skillCategoryUpsertWithoutSkillsInput
    disconnect?: skillCategoryWhereInput | boolean
    delete?: skillCategoryWhereInput | boolean
    connect?: skillCategoryWhereUniqueInput
    update?: XOR<XOR<skillCategoryUpdateToOneWithWhereWithoutSkillsInput, skillCategoryUpdateWithoutSkillsInput>, skillCategoryUncheckedUpdateWithoutSkillsInput>
  }

  export type skillEventUpdateManyWithoutSkillNestedInput = {
    create?: XOR<skillEventCreateWithoutSkillInput, skillEventUncheckedCreateWithoutSkillInput> | skillEventCreateWithoutSkillInput[] | skillEventUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutSkillInput | skillEventCreateOrConnectWithoutSkillInput[]
    upsert?: skillEventUpsertWithWhereUniqueWithoutSkillInput | skillEventUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: skillEventCreateManySkillInputEnvelope
    set?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    disconnect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    delete?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    update?: skillEventUpdateWithWhereUniqueWithoutSkillInput | skillEventUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: skillEventUpdateManyWithWhereWithoutSkillInput | skillEventUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: skillEventScalarWhereInput | skillEventScalarWhereInput[]
  }

  export type userSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<userSkillCreateWithoutSkillInput, userSkillUncheckedCreateWithoutSkillInput> | userSkillCreateWithoutSkillInput[] | userSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: userSkillCreateOrConnectWithoutSkillInput | userSkillCreateOrConnectWithoutSkillInput[]
    upsert?: userSkillUpsertWithWhereUniqueWithoutSkillInput | userSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: userSkillCreateManySkillInputEnvelope
    set?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    disconnect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    delete?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    connect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    update?: userSkillUpdateWithWhereUniqueWithoutSkillInput | userSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: userSkillUpdateManyWithWhereWithoutSkillInput | userSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: userSkillScalarWhereInput | userSkillScalarWhereInput[]
  }

  export type skillEventUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<skillEventCreateWithoutSkillInput, skillEventUncheckedCreateWithoutSkillInput> | skillEventCreateWithoutSkillInput[] | skillEventUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutSkillInput | skillEventCreateOrConnectWithoutSkillInput[]
    upsert?: skillEventUpsertWithWhereUniqueWithoutSkillInput | skillEventUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: skillEventCreateManySkillInputEnvelope
    set?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    disconnect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    delete?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    update?: skillEventUpdateWithWhereUniqueWithoutSkillInput | skillEventUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: skillEventUpdateManyWithWhereWithoutSkillInput | skillEventUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: skillEventScalarWhereInput | skillEventScalarWhereInput[]
  }

  export type userSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<userSkillCreateWithoutSkillInput, userSkillUncheckedCreateWithoutSkillInput> | userSkillCreateWithoutSkillInput[] | userSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: userSkillCreateOrConnectWithoutSkillInput | userSkillCreateOrConnectWithoutSkillInput[]
    upsert?: userSkillUpsertWithWhereUniqueWithoutSkillInput | userSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: userSkillCreateManySkillInputEnvelope
    set?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    disconnect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    delete?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    connect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    update?: userSkillUpdateWithWhereUniqueWithoutSkillInput | userSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: userSkillUpdateManyWithWhereWithoutSkillInput | userSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: userSkillScalarWhereInput | userSkillScalarWhereInput[]
  }

  export type skillCreateNestedManyWithoutCategoryInput = {
    create?: XOR<skillCreateWithoutCategoryInput, skillUncheckedCreateWithoutCategoryInput> | skillCreateWithoutCategoryInput[] | skillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: skillCreateOrConnectWithoutCategoryInput | skillCreateOrConnectWithoutCategoryInput[]
    createMany?: skillCreateManyCategoryInputEnvelope
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
  }

  export type skillUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<skillCreateWithoutCategoryInput, skillUncheckedCreateWithoutCategoryInput> | skillCreateWithoutCategoryInput[] | skillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: skillCreateOrConnectWithoutCategoryInput | skillCreateOrConnectWithoutCategoryInput[]
    createMany?: skillCreateManyCategoryInputEnvelope
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
  }

  export type skillUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<skillCreateWithoutCategoryInput, skillUncheckedCreateWithoutCategoryInput> | skillCreateWithoutCategoryInput[] | skillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: skillCreateOrConnectWithoutCategoryInput | skillCreateOrConnectWithoutCategoryInput[]
    upsert?: skillUpsertWithWhereUniqueWithoutCategoryInput | skillUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: skillCreateManyCategoryInputEnvelope
    set?: skillWhereUniqueInput | skillWhereUniqueInput[]
    disconnect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    delete?: skillWhereUniqueInput | skillWhereUniqueInput[]
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    update?: skillUpdateWithWhereUniqueWithoutCategoryInput | skillUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: skillUpdateManyWithWhereWithoutCategoryInput | skillUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: skillScalarWhereInput | skillScalarWhereInput[]
  }

  export type skillUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<skillCreateWithoutCategoryInput, skillUncheckedCreateWithoutCategoryInput> | skillCreateWithoutCategoryInput[] | skillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: skillCreateOrConnectWithoutCategoryInput | skillCreateOrConnectWithoutCategoryInput[]
    upsert?: skillUpsertWithWhereUniqueWithoutCategoryInput | skillUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: skillCreateManyCategoryInputEnvelope
    set?: skillWhereUniqueInput | skillWhereUniqueInput[]
    disconnect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    delete?: skillWhereUniqueInput | skillWhereUniqueInput[]
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    update?: skillUpdateWithWhereUniqueWithoutCategoryInput | skillUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: skillUpdateManyWithWhereWithoutCategoryInput | skillUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: skillScalarWhereInput | skillScalarWhereInput[]
  }

  export type eventCreateNestedOneWithoutSkillEventsInput = {
    create?: XOR<eventCreateWithoutSkillEventsInput, eventUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: eventCreateOrConnectWithoutSkillEventsInput
    connect?: eventWhereUniqueInput
  }

  export type skillCreateNestedOneWithoutSkillEventsInput = {
    create?: XOR<skillCreateWithoutSkillEventsInput, skillUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: skillCreateOrConnectWithoutSkillEventsInput
    connect?: skillWhereUniqueInput
  }

  export type skillEventTypeCreateNestedOneWithoutSkillEventsInput = {
    create?: XOR<skillEventTypeCreateWithoutSkillEventsInput, skillEventTypeUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: skillEventTypeCreateOrConnectWithoutSkillEventsInput
    connect?: skillEventTypeWhereUniqueInput
  }

  export type sourceTypeCreateNestedOneWithoutSkillEventsInput = {
    create?: XOR<sourceTypeCreateWithoutSkillEventsInput, sourceTypeUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: sourceTypeCreateOrConnectWithoutSkillEventsInput
    connect?: sourceTypeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type eventUpdateOneRequiredWithoutSkillEventsNestedInput = {
    create?: XOR<eventCreateWithoutSkillEventsInput, eventUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: eventCreateOrConnectWithoutSkillEventsInput
    upsert?: eventUpsertWithoutSkillEventsInput
    connect?: eventWhereUniqueInput
    update?: XOR<XOR<eventUpdateToOneWithWhereWithoutSkillEventsInput, eventUpdateWithoutSkillEventsInput>, eventUncheckedUpdateWithoutSkillEventsInput>
  }

  export type skillUpdateOneRequiredWithoutSkillEventsNestedInput = {
    create?: XOR<skillCreateWithoutSkillEventsInput, skillUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: skillCreateOrConnectWithoutSkillEventsInput
    upsert?: skillUpsertWithoutSkillEventsInput
    connect?: skillWhereUniqueInput
    update?: XOR<XOR<skillUpdateToOneWithWhereWithoutSkillEventsInput, skillUpdateWithoutSkillEventsInput>, skillUncheckedUpdateWithoutSkillEventsInput>
  }

  export type skillEventTypeUpdateOneRequiredWithoutSkillEventsNestedInput = {
    create?: XOR<skillEventTypeCreateWithoutSkillEventsInput, skillEventTypeUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: skillEventTypeCreateOrConnectWithoutSkillEventsInput
    upsert?: skillEventTypeUpsertWithoutSkillEventsInput
    connect?: skillEventTypeWhereUniqueInput
    update?: XOR<XOR<skillEventTypeUpdateToOneWithWhereWithoutSkillEventsInput, skillEventTypeUpdateWithoutSkillEventsInput>, skillEventTypeUncheckedUpdateWithoutSkillEventsInput>
  }

  export type sourceTypeUpdateOneRequiredWithoutSkillEventsNestedInput = {
    create?: XOR<sourceTypeCreateWithoutSkillEventsInput, sourceTypeUncheckedCreateWithoutSkillEventsInput>
    connectOrCreate?: sourceTypeCreateOrConnectWithoutSkillEventsInput
    upsert?: sourceTypeUpsertWithoutSkillEventsInput
    connect?: sourceTypeWhereUniqueInput
    update?: XOR<XOR<sourceTypeUpdateToOneWithWhereWithoutSkillEventsInput, sourceTypeUpdateWithoutSkillEventsInput>, sourceTypeUncheckedUpdateWithoutSkillEventsInput>
  }

  export type skillEventCreateNestedManyWithoutSkillEventTypeInput = {
    create?: XOR<skillEventCreateWithoutSkillEventTypeInput, skillEventUncheckedCreateWithoutSkillEventTypeInput> | skillEventCreateWithoutSkillEventTypeInput[] | skillEventUncheckedCreateWithoutSkillEventTypeInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutSkillEventTypeInput | skillEventCreateOrConnectWithoutSkillEventTypeInput[]
    createMany?: skillEventCreateManySkillEventTypeInputEnvelope
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
  }

  export type skillEventUncheckedCreateNestedManyWithoutSkillEventTypeInput = {
    create?: XOR<skillEventCreateWithoutSkillEventTypeInput, skillEventUncheckedCreateWithoutSkillEventTypeInput> | skillEventCreateWithoutSkillEventTypeInput[] | skillEventUncheckedCreateWithoutSkillEventTypeInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutSkillEventTypeInput | skillEventCreateOrConnectWithoutSkillEventTypeInput[]
    createMany?: skillEventCreateManySkillEventTypeInputEnvelope
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
  }

  export type skillEventUpdateManyWithoutSkillEventTypeNestedInput = {
    create?: XOR<skillEventCreateWithoutSkillEventTypeInput, skillEventUncheckedCreateWithoutSkillEventTypeInput> | skillEventCreateWithoutSkillEventTypeInput[] | skillEventUncheckedCreateWithoutSkillEventTypeInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutSkillEventTypeInput | skillEventCreateOrConnectWithoutSkillEventTypeInput[]
    upsert?: skillEventUpsertWithWhereUniqueWithoutSkillEventTypeInput | skillEventUpsertWithWhereUniqueWithoutSkillEventTypeInput[]
    createMany?: skillEventCreateManySkillEventTypeInputEnvelope
    set?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    disconnect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    delete?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    update?: skillEventUpdateWithWhereUniqueWithoutSkillEventTypeInput | skillEventUpdateWithWhereUniqueWithoutSkillEventTypeInput[]
    updateMany?: skillEventUpdateManyWithWhereWithoutSkillEventTypeInput | skillEventUpdateManyWithWhereWithoutSkillEventTypeInput[]
    deleteMany?: skillEventScalarWhereInput | skillEventScalarWhereInput[]
  }

  export type skillEventUncheckedUpdateManyWithoutSkillEventTypeNestedInput = {
    create?: XOR<skillEventCreateWithoutSkillEventTypeInput, skillEventUncheckedCreateWithoutSkillEventTypeInput> | skillEventCreateWithoutSkillEventTypeInput[] | skillEventUncheckedCreateWithoutSkillEventTypeInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutSkillEventTypeInput | skillEventCreateOrConnectWithoutSkillEventTypeInput[]
    upsert?: skillEventUpsertWithWhereUniqueWithoutSkillEventTypeInput | skillEventUpsertWithWhereUniqueWithoutSkillEventTypeInput[]
    createMany?: skillEventCreateManySkillEventTypeInputEnvelope
    set?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    disconnect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    delete?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    update?: skillEventUpdateWithWhereUniqueWithoutSkillEventTypeInput | skillEventUpdateWithWhereUniqueWithoutSkillEventTypeInput[]
    updateMany?: skillEventUpdateManyWithWhereWithoutSkillEventTypeInput | skillEventUpdateManyWithWhereWithoutSkillEventTypeInput[]
    deleteMany?: skillEventScalarWhereInput | skillEventScalarWhereInput[]
  }

  export type skillEventCreateNestedManyWithoutSourceTypeInput = {
    create?: XOR<skillEventCreateWithoutSourceTypeInput, skillEventUncheckedCreateWithoutSourceTypeInput> | skillEventCreateWithoutSourceTypeInput[] | skillEventUncheckedCreateWithoutSourceTypeInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutSourceTypeInput | skillEventCreateOrConnectWithoutSourceTypeInput[]
    createMany?: skillEventCreateManySourceTypeInputEnvelope
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
  }

  export type skillEventUncheckedCreateNestedManyWithoutSourceTypeInput = {
    create?: XOR<skillEventCreateWithoutSourceTypeInput, skillEventUncheckedCreateWithoutSourceTypeInput> | skillEventCreateWithoutSourceTypeInput[] | skillEventUncheckedCreateWithoutSourceTypeInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutSourceTypeInput | skillEventCreateOrConnectWithoutSourceTypeInput[]
    createMany?: skillEventCreateManySourceTypeInputEnvelope
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
  }

  export type skillEventUpdateManyWithoutSourceTypeNestedInput = {
    create?: XOR<skillEventCreateWithoutSourceTypeInput, skillEventUncheckedCreateWithoutSourceTypeInput> | skillEventCreateWithoutSourceTypeInput[] | skillEventUncheckedCreateWithoutSourceTypeInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutSourceTypeInput | skillEventCreateOrConnectWithoutSourceTypeInput[]
    upsert?: skillEventUpsertWithWhereUniqueWithoutSourceTypeInput | skillEventUpsertWithWhereUniqueWithoutSourceTypeInput[]
    createMany?: skillEventCreateManySourceTypeInputEnvelope
    set?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    disconnect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    delete?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    update?: skillEventUpdateWithWhereUniqueWithoutSourceTypeInput | skillEventUpdateWithWhereUniqueWithoutSourceTypeInput[]
    updateMany?: skillEventUpdateManyWithWhereWithoutSourceTypeInput | skillEventUpdateManyWithWhereWithoutSourceTypeInput[]
    deleteMany?: skillEventScalarWhereInput | skillEventScalarWhereInput[]
  }

  export type skillEventUncheckedUpdateManyWithoutSourceTypeNestedInput = {
    create?: XOR<skillEventCreateWithoutSourceTypeInput, skillEventUncheckedCreateWithoutSourceTypeInput> | skillEventCreateWithoutSourceTypeInput[] | skillEventUncheckedCreateWithoutSourceTypeInput[]
    connectOrCreate?: skillEventCreateOrConnectWithoutSourceTypeInput | skillEventCreateOrConnectWithoutSourceTypeInput[]
    upsert?: skillEventUpsertWithWhereUniqueWithoutSourceTypeInput | skillEventUpsertWithWhereUniqueWithoutSourceTypeInput[]
    createMany?: skillEventCreateManySourceTypeInputEnvelope
    set?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    disconnect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    delete?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    connect?: skillEventWhereUniqueInput | skillEventWhereUniqueInput[]
    update?: skillEventUpdateWithWhereUniqueWithoutSourceTypeInput | skillEventUpdateWithWhereUniqueWithoutSourceTypeInput[]
    updateMany?: skillEventUpdateManyWithWhereWithoutSourceTypeInput | skillEventUpdateManyWithWhereWithoutSourceTypeInput[]
    deleteMany?: skillEventScalarWhereInput | skillEventScalarWhereInput[]
  }

  export type skillCreateNestedOneWithoutUserSkillsInput = {
    create?: XOR<skillCreateWithoutUserSkillsInput, skillUncheckedCreateWithoutUserSkillsInput>
    connectOrCreate?: skillCreateOrConnectWithoutUserSkillsInput
    connect?: skillWhereUniqueInput
  }

  export type userSkillLevelCreateNestedOneWithoutUserSkillsInput = {
    create?: XOR<userSkillLevelCreateWithoutUserSkillsInput, userSkillLevelUncheckedCreateWithoutUserSkillsInput>
    connectOrCreate?: userSkillLevelCreateOrConnectWithoutUserSkillsInput
    connect?: userSkillLevelWhereUniqueInput
  }

  export type userSkillDisplayModeCreateNestedOneWithoutUserSkillsInput = {
    create?: XOR<userSkillDisplayModeCreateWithoutUserSkillsInput, userSkillDisplayModeUncheckedCreateWithoutUserSkillsInput>
    connectOrCreate?: userSkillDisplayModeCreateOrConnectWithoutUserSkillsInput
    connect?: userSkillDisplayModeWhereUniqueInput
  }

  export type skillUpdateOneRequiredWithoutUserSkillsNestedInput = {
    create?: XOR<skillCreateWithoutUserSkillsInput, skillUncheckedCreateWithoutUserSkillsInput>
    connectOrCreate?: skillCreateOrConnectWithoutUserSkillsInput
    upsert?: skillUpsertWithoutUserSkillsInput
    connect?: skillWhereUniqueInput
    update?: XOR<XOR<skillUpdateToOneWithWhereWithoutUserSkillsInput, skillUpdateWithoutUserSkillsInput>, skillUncheckedUpdateWithoutUserSkillsInput>
  }

  export type userSkillLevelUpdateOneRequiredWithoutUserSkillsNestedInput = {
    create?: XOR<userSkillLevelCreateWithoutUserSkillsInput, userSkillLevelUncheckedCreateWithoutUserSkillsInput>
    connectOrCreate?: userSkillLevelCreateOrConnectWithoutUserSkillsInput
    upsert?: userSkillLevelUpsertWithoutUserSkillsInput
    connect?: userSkillLevelWhereUniqueInput
    update?: XOR<XOR<userSkillLevelUpdateToOneWithWhereWithoutUserSkillsInput, userSkillLevelUpdateWithoutUserSkillsInput>, userSkillLevelUncheckedUpdateWithoutUserSkillsInput>
  }

  export type userSkillDisplayModeUpdateOneRequiredWithoutUserSkillsNestedInput = {
    create?: XOR<userSkillDisplayModeCreateWithoutUserSkillsInput, userSkillDisplayModeUncheckedCreateWithoutUserSkillsInput>
    connectOrCreate?: userSkillDisplayModeCreateOrConnectWithoutUserSkillsInput
    upsert?: userSkillDisplayModeUpsertWithoutUserSkillsInput
    connect?: userSkillDisplayModeWhereUniqueInput
    update?: XOR<XOR<userSkillDisplayModeUpdateToOneWithWhereWithoutUserSkillsInput, userSkillDisplayModeUpdateWithoutUserSkillsInput>, userSkillDisplayModeUncheckedUpdateWithoutUserSkillsInput>
  }

  export type userSkillCreateNestedManyWithoutDisplayModeInput = {
    create?: XOR<userSkillCreateWithoutDisplayModeInput, userSkillUncheckedCreateWithoutDisplayModeInput> | userSkillCreateWithoutDisplayModeInput[] | userSkillUncheckedCreateWithoutDisplayModeInput[]
    connectOrCreate?: userSkillCreateOrConnectWithoutDisplayModeInput | userSkillCreateOrConnectWithoutDisplayModeInput[]
    createMany?: userSkillCreateManyDisplayModeInputEnvelope
    connect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
  }

  export type userSkillUncheckedCreateNestedManyWithoutDisplayModeInput = {
    create?: XOR<userSkillCreateWithoutDisplayModeInput, userSkillUncheckedCreateWithoutDisplayModeInput> | userSkillCreateWithoutDisplayModeInput[] | userSkillUncheckedCreateWithoutDisplayModeInput[]
    connectOrCreate?: userSkillCreateOrConnectWithoutDisplayModeInput | userSkillCreateOrConnectWithoutDisplayModeInput[]
    createMany?: userSkillCreateManyDisplayModeInputEnvelope
    connect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
  }

  export type userSkillUpdateManyWithoutDisplayModeNestedInput = {
    create?: XOR<userSkillCreateWithoutDisplayModeInput, userSkillUncheckedCreateWithoutDisplayModeInput> | userSkillCreateWithoutDisplayModeInput[] | userSkillUncheckedCreateWithoutDisplayModeInput[]
    connectOrCreate?: userSkillCreateOrConnectWithoutDisplayModeInput | userSkillCreateOrConnectWithoutDisplayModeInput[]
    upsert?: userSkillUpsertWithWhereUniqueWithoutDisplayModeInput | userSkillUpsertWithWhereUniqueWithoutDisplayModeInput[]
    createMany?: userSkillCreateManyDisplayModeInputEnvelope
    set?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    disconnect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    delete?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    connect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    update?: userSkillUpdateWithWhereUniqueWithoutDisplayModeInput | userSkillUpdateWithWhereUniqueWithoutDisplayModeInput[]
    updateMany?: userSkillUpdateManyWithWhereWithoutDisplayModeInput | userSkillUpdateManyWithWhereWithoutDisplayModeInput[]
    deleteMany?: userSkillScalarWhereInput | userSkillScalarWhereInput[]
  }

  export type userSkillUncheckedUpdateManyWithoutDisplayModeNestedInput = {
    create?: XOR<userSkillCreateWithoutDisplayModeInput, userSkillUncheckedCreateWithoutDisplayModeInput> | userSkillCreateWithoutDisplayModeInput[] | userSkillUncheckedCreateWithoutDisplayModeInput[]
    connectOrCreate?: userSkillCreateOrConnectWithoutDisplayModeInput | userSkillCreateOrConnectWithoutDisplayModeInput[]
    upsert?: userSkillUpsertWithWhereUniqueWithoutDisplayModeInput | userSkillUpsertWithWhereUniqueWithoutDisplayModeInput[]
    createMany?: userSkillCreateManyDisplayModeInputEnvelope
    set?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    disconnect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    delete?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    connect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    update?: userSkillUpdateWithWhereUniqueWithoutDisplayModeInput | userSkillUpdateWithWhereUniqueWithoutDisplayModeInput[]
    updateMany?: userSkillUpdateManyWithWhereWithoutDisplayModeInput | userSkillUpdateManyWithWhereWithoutDisplayModeInput[]
    deleteMany?: userSkillScalarWhereInput | userSkillScalarWhereInput[]
  }

  export type userSkillCreateNestedManyWithoutLevelInput = {
    create?: XOR<userSkillCreateWithoutLevelInput, userSkillUncheckedCreateWithoutLevelInput> | userSkillCreateWithoutLevelInput[] | userSkillUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: userSkillCreateOrConnectWithoutLevelInput | userSkillCreateOrConnectWithoutLevelInput[]
    createMany?: userSkillCreateManyLevelInputEnvelope
    connect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
  }

  export type userSkillUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<userSkillCreateWithoutLevelInput, userSkillUncheckedCreateWithoutLevelInput> | userSkillCreateWithoutLevelInput[] | userSkillUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: userSkillCreateOrConnectWithoutLevelInput | userSkillCreateOrConnectWithoutLevelInput[]
    createMany?: userSkillCreateManyLevelInputEnvelope
    connect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
  }

  export type userSkillUpdateManyWithoutLevelNestedInput = {
    create?: XOR<userSkillCreateWithoutLevelInput, userSkillUncheckedCreateWithoutLevelInput> | userSkillCreateWithoutLevelInput[] | userSkillUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: userSkillCreateOrConnectWithoutLevelInput | userSkillCreateOrConnectWithoutLevelInput[]
    upsert?: userSkillUpsertWithWhereUniqueWithoutLevelInput | userSkillUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: userSkillCreateManyLevelInputEnvelope
    set?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    disconnect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    delete?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    connect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    update?: userSkillUpdateWithWhereUniqueWithoutLevelInput | userSkillUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: userSkillUpdateManyWithWhereWithoutLevelInput | userSkillUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: userSkillScalarWhereInput | userSkillScalarWhereInput[]
  }

  export type userSkillUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<userSkillCreateWithoutLevelInput, userSkillUncheckedCreateWithoutLevelInput> | userSkillCreateWithoutLevelInput[] | userSkillUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: userSkillCreateOrConnectWithoutLevelInput | userSkillCreateOrConnectWithoutLevelInput[]
    upsert?: userSkillUpsertWithWhereUniqueWithoutLevelInput | userSkillUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: userSkillCreateManyLevelInputEnvelope
    set?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    disconnect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    delete?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    connect?: userSkillWhereUniqueInput | userSkillWhereUniqueInput[]
    update?: userSkillUpdateWithWhereUniqueWithoutLevelInput | userSkillUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: userSkillUpdateManyWithWhereWithoutLevelInput | userSkillUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: userSkillScalarWhereInput | userSkillScalarWhereInput[]
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

  export type skillEventCreateWithoutEventInput = {
    id?: string
    userId: number
    sourceId: string
    createdAt: Date | string
    skill: skillCreateNestedOneWithoutSkillEventsInput
    skillEventType: skillEventTypeCreateNestedOneWithoutSkillEventsInput
    sourceType: sourceTypeCreateNestedOneWithoutSkillEventsInput
  }

  export type skillEventUncheckedCreateWithoutEventInput = {
    id?: string
    userId: number
    skillId: string
    skillEventTypeId: string
    sourceId: string
    sourceTypeId: string
    createdAt: Date | string
  }

  export type skillEventCreateOrConnectWithoutEventInput = {
    where: skillEventWhereUniqueInput
    create: XOR<skillEventCreateWithoutEventInput, skillEventUncheckedCreateWithoutEventInput>
  }

  export type skillEventCreateManyEventInputEnvelope = {
    data: skillEventCreateManyEventInput | skillEventCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type skillEventUpsertWithWhereUniqueWithoutEventInput = {
    where: skillEventWhereUniqueInput
    update: XOR<skillEventUpdateWithoutEventInput, skillEventUncheckedUpdateWithoutEventInput>
    create: XOR<skillEventCreateWithoutEventInput, skillEventUncheckedCreateWithoutEventInput>
  }

  export type skillEventUpdateWithWhereUniqueWithoutEventInput = {
    where: skillEventWhereUniqueInput
    data: XOR<skillEventUpdateWithoutEventInput, skillEventUncheckedUpdateWithoutEventInput>
  }

  export type skillEventUpdateManyWithWhereWithoutEventInput = {
    where: skillEventScalarWhereInput
    data: XOR<skillEventUpdateManyMutationInput, skillEventUncheckedUpdateManyWithoutEventInput>
  }

  export type skillEventScalarWhereInput = {
    AND?: skillEventScalarWhereInput | skillEventScalarWhereInput[]
    OR?: skillEventScalarWhereInput[]
    NOT?: skillEventScalarWhereInput | skillEventScalarWhereInput[]
    id?: UuidFilter<"skillEvent"> | string
    eventId?: UuidFilter<"skillEvent"> | string
    userId?: IntFilter<"skillEvent"> | number
    skillId?: UuidFilter<"skillEvent"> | string
    skillEventTypeId?: UuidFilter<"skillEvent"> | string
    sourceId?: StringFilter<"skillEvent"> | string
    sourceTypeId?: UuidFilter<"skillEvent"> | string
    createdAt?: DateTimeFilter<"skillEvent"> | Date | string
  }

  export type skillCategoryCreateWithoutSkillsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type skillCategoryUncheckedCreateWithoutSkillsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type skillCategoryCreateOrConnectWithoutSkillsInput = {
    where: skillCategoryWhereUniqueInput
    create: XOR<skillCategoryCreateWithoutSkillsInput, skillCategoryUncheckedCreateWithoutSkillsInput>
  }

  export type skillEventCreateWithoutSkillInput = {
    id?: string
    userId: number
    sourceId: string
    createdAt: Date | string
    event: eventCreateNestedOneWithoutSkillEventsInput
    skillEventType: skillEventTypeCreateNestedOneWithoutSkillEventsInput
    sourceType: sourceTypeCreateNestedOneWithoutSkillEventsInput
  }

  export type skillEventUncheckedCreateWithoutSkillInput = {
    id?: string
    eventId: string
    userId: number
    skillEventTypeId: string
    sourceId: string
    sourceTypeId: string
    createdAt: Date | string
  }

  export type skillEventCreateOrConnectWithoutSkillInput = {
    where: skillEventWhereUniqueInput
    create: XOR<skillEventCreateWithoutSkillInput, skillEventUncheckedCreateWithoutSkillInput>
  }

  export type skillEventCreateManySkillInputEnvelope = {
    data: skillEventCreateManySkillInput | skillEventCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type userSkillCreateWithoutSkillInput = {
    id?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    level: userSkillLevelCreateNestedOneWithoutUserSkillsInput
    displayMode?: userSkillDisplayModeCreateNestedOneWithoutUserSkillsInput
  }

  export type userSkillUncheckedCreateWithoutSkillInput = {
    id?: string
    userId: number
    userSkillLevelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userSkillDisplayModeId?: string
  }

  export type userSkillCreateOrConnectWithoutSkillInput = {
    where: userSkillWhereUniqueInput
    create: XOR<userSkillCreateWithoutSkillInput, userSkillUncheckedCreateWithoutSkillInput>
  }

  export type userSkillCreateManySkillInputEnvelope = {
    data: userSkillCreateManySkillInput | userSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type skillCategoryUpsertWithoutSkillsInput = {
    update: XOR<skillCategoryUpdateWithoutSkillsInput, skillCategoryUncheckedUpdateWithoutSkillsInput>
    create: XOR<skillCategoryCreateWithoutSkillsInput, skillCategoryUncheckedCreateWithoutSkillsInput>
    where?: skillCategoryWhereInput
  }

  export type skillCategoryUpdateToOneWithWhereWithoutSkillsInput = {
    where?: skillCategoryWhereInput
    data: XOR<skillCategoryUpdateWithoutSkillsInput, skillCategoryUncheckedUpdateWithoutSkillsInput>
  }

  export type skillCategoryUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillCategoryUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillEventUpsertWithWhereUniqueWithoutSkillInput = {
    where: skillEventWhereUniqueInput
    update: XOR<skillEventUpdateWithoutSkillInput, skillEventUncheckedUpdateWithoutSkillInput>
    create: XOR<skillEventCreateWithoutSkillInput, skillEventUncheckedCreateWithoutSkillInput>
  }

  export type skillEventUpdateWithWhereUniqueWithoutSkillInput = {
    where: skillEventWhereUniqueInput
    data: XOR<skillEventUpdateWithoutSkillInput, skillEventUncheckedUpdateWithoutSkillInput>
  }

  export type skillEventUpdateManyWithWhereWithoutSkillInput = {
    where: skillEventScalarWhereInput
    data: XOR<skillEventUpdateManyMutationInput, skillEventUncheckedUpdateManyWithoutSkillInput>
  }

  export type userSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: userSkillWhereUniqueInput
    update: XOR<userSkillUpdateWithoutSkillInput, userSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<userSkillCreateWithoutSkillInput, userSkillUncheckedCreateWithoutSkillInput>
  }

  export type userSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: userSkillWhereUniqueInput
    data: XOR<userSkillUpdateWithoutSkillInput, userSkillUncheckedUpdateWithoutSkillInput>
  }

  export type userSkillUpdateManyWithWhereWithoutSkillInput = {
    where: userSkillScalarWhereInput
    data: XOR<userSkillUpdateManyMutationInput, userSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type userSkillScalarWhereInput = {
    AND?: userSkillScalarWhereInput | userSkillScalarWhereInput[]
    OR?: userSkillScalarWhereInput[]
    NOT?: userSkillScalarWhereInput | userSkillScalarWhereInput[]
    id?: UuidFilter<"userSkill"> | string
    userId?: IntFilter<"userSkill"> | number
    skillId?: UuidFilter<"userSkill"> | string
    userSkillLevelId?: UuidFilter<"userSkill"> | string
    createdAt?: DateTimeFilter<"userSkill"> | Date | string
    updatedAt?: DateTimeFilter<"userSkill"> | Date | string
    userSkillDisplayModeId?: UuidFilter<"userSkill"> | string
  }

  export type skillCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    devId?: string | null
    skillEvents?: skillEventCreateNestedManyWithoutSkillInput
    userSkills?: userSkillCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    devId?: string | null
    skillEvents?: skillEventUncheckedCreateNestedManyWithoutSkillInput
    userSkills?: userSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillCreateOrConnectWithoutCategoryInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutCategoryInput, skillUncheckedCreateWithoutCategoryInput>
  }

  export type skillCreateManyCategoryInputEnvelope = {
    data: skillCreateManyCategoryInput | skillCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type skillUpsertWithWhereUniqueWithoutCategoryInput = {
    where: skillWhereUniqueInput
    update: XOR<skillUpdateWithoutCategoryInput, skillUncheckedUpdateWithoutCategoryInput>
    create: XOR<skillCreateWithoutCategoryInput, skillUncheckedCreateWithoutCategoryInput>
  }

  export type skillUpdateWithWhereUniqueWithoutCategoryInput = {
    where: skillWhereUniqueInput
    data: XOR<skillUpdateWithoutCategoryInput, skillUncheckedUpdateWithoutCategoryInput>
  }

  export type skillUpdateManyWithWhereWithoutCategoryInput = {
    where: skillScalarWhereInput
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyWithoutCategoryInput>
  }

  export type skillScalarWhereInput = {
    AND?: skillScalarWhereInput | skillScalarWhereInput[]
    OR?: skillScalarWhereInput[]
    NOT?: skillScalarWhereInput | skillScalarWhereInput[]
    id?: UuidFilter<"skill"> | string
    name?: StringFilter<"skill"> | string
    description?: StringNullableFilter<"skill"> | string | null
    categoryId?: UuidNullableFilter<"skill"> | string | null
    createdAt?: DateTimeFilter<"skill"> | Date | string
    updatedAt?: DateTimeFilter<"skill"> | Date | string
    deletedAt?: DateTimeNullableFilter<"skill"> | Date | string | null
    devId?: UuidNullableFilter<"skill"> | string | null
  }

  export type eventCreateWithoutSkillEventsInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt: Date | string
  }

  export type eventUncheckedCreateWithoutSkillEventsInput = {
    id?: string
    topic: string
    payload: JsonNullValueInput | InputJsonValue
    payloadHash?: string | null
    createdAt: Date | string
  }

  export type eventCreateOrConnectWithoutSkillEventsInput = {
    where: eventWhereUniqueInput
    create: XOR<eventCreateWithoutSkillEventsInput, eventUncheckedCreateWithoutSkillEventsInput>
  }

  export type skillCreateWithoutSkillEventsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    devId?: string | null
    category?: skillCategoryCreateNestedOneWithoutSkillsInput
    userSkills?: userSkillCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateWithoutSkillEventsInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    devId?: string | null
    userSkills?: userSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillCreateOrConnectWithoutSkillEventsInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutSkillEventsInput, skillUncheckedCreateWithoutSkillEventsInput>
  }

  export type skillEventTypeCreateWithoutSkillEventsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type skillEventTypeUncheckedCreateWithoutSkillEventsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type skillEventTypeCreateOrConnectWithoutSkillEventsInput = {
    where: skillEventTypeWhereUniqueInput
    create: XOR<skillEventTypeCreateWithoutSkillEventsInput, skillEventTypeUncheckedCreateWithoutSkillEventsInput>
  }

  export type sourceTypeCreateWithoutSkillEventsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type sourceTypeUncheckedCreateWithoutSkillEventsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type sourceTypeCreateOrConnectWithoutSkillEventsInput = {
    where: sourceTypeWhereUniqueInput
    create: XOR<sourceTypeCreateWithoutSkillEventsInput, sourceTypeUncheckedCreateWithoutSkillEventsInput>
  }

  export type eventUpsertWithoutSkillEventsInput = {
    update: XOR<eventUpdateWithoutSkillEventsInput, eventUncheckedUpdateWithoutSkillEventsInput>
    create: XOR<eventCreateWithoutSkillEventsInput, eventUncheckedCreateWithoutSkillEventsInput>
    where?: eventWhereInput
  }

  export type eventUpdateToOneWithWhereWithoutSkillEventsInput = {
    where?: eventWhereInput
    data: XOR<eventUpdateWithoutSkillEventsInput, eventUncheckedUpdateWithoutSkillEventsInput>
  }

  export type eventUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventUncheckedUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    payloadHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillUpsertWithoutSkillEventsInput = {
    update: XOR<skillUpdateWithoutSkillEventsInput, skillUncheckedUpdateWithoutSkillEventsInput>
    create: XOR<skillCreateWithoutSkillEventsInput, skillUncheckedCreateWithoutSkillEventsInput>
    where?: skillWhereInput
  }

  export type skillUpdateToOneWithWhereWithoutSkillEventsInput = {
    where?: skillWhereInput
    data: XOR<skillUpdateWithoutSkillEventsInput, skillUncheckedUpdateWithoutSkillEventsInput>
  }

  export type skillUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: skillCategoryUpdateOneWithoutSkillsNestedInput
    userSkills?: userSkillUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devId?: NullableStringFieldUpdateOperationsInput | string | null
    userSkills?: userSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type skillEventTypeUpsertWithoutSkillEventsInput = {
    update: XOR<skillEventTypeUpdateWithoutSkillEventsInput, skillEventTypeUncheckedUpdateWithoutSkillEventsInput>
    create: XOR<skillEventTypeCreateWithoutSkillEventsInput, skillEventTypeUncheckedCreateWithoutSkillEventsInput>
    where?: skillEventTypeWhereInput
  }

  export type skillEventTypeUpdateToOneWithWhereWithoutSkillEventsInput = {
    where?: skillEventTypeWhereInput
    data: XOR<skillEventTypeUpdateWithoutSkillEventsInput, skillEventTypeUncheckedUpdateWithoutSkillEventsInput>
  }

  export type skillEventTypeUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillEventTypeUncheckedUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sourceTypeUpsertWithoutSkillEventsInput = {
    update: XOR<sourceTypeUpdateWithoutSkillEventsInput, sourceTypeUncheckedUpdateWithoutSkillEventsInput>
    create: XOR<sourceTypeCreateWithoutSkillEventsInput, sourceTypeUncheckedCreateWithoutSkillEventsInput>
    where?: sourceTypeWhereInput
  }

  export type sourceTypeUpdateToOneWithWhereWithoutSkillEventsInput = {
    where?: sourceTypeWhereInput
    data: XOR<sourceTypeUpdateWithoutSkillEventsInput, sourceTypeUncheckedUpdateWithoutSkillEventsInput>
  }

  export type sourceTypeUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sourceTypeUncheckedUpdateWithoutSkillEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillEventCreateWithoutSkillEventTypeInput = {
    id?: string
    userId: number
    sourceId: string
    createdAt: Date | string
    event: eventCreateNestedOneWithoutSkillEventsInput
    skill: skillCreateNestedOneWithoutSkillEventsInput
    sourceType: sourceTypeCreateNestedOneWithoutSkillEventsInput
  }

  export type skillEventUncheckedCreateWithoutSkillEventTypeInput = {
    id?: string
    eventId: string
    userId: number
    skillId: string
    sourceId: string
    sourceTypeId: string
    createdAt: Date | string
  }

  export type skillEventCreateOrConnectWithoutSkillEventTypeInput = {
    where: skillEventWhereUniqueInput
    create: XOR<skillEventCreateWithoutSkillEventTypeInput, skillEventUncheckedCreateWithoutSkillEventTypeInput>
  }

  export type skillEventCreateManySkillEventTypeInputEnvelope = {
    data: skillEventCreateManySkillEventTypeInput | skillEventCreateManySkillEventTypeInput[]
    skipDuplicates?: boolean
  }

  export type skillEventUpsertWithWhereUniqueWithoutSkillEventTypeInput = {
    where: skillEventWhereUniqueInput
    update: XOR<skillEventUpdateWithoutSkillEventTypeInput, skillEventUncheckedUpdateWithoutSkillEventTypeInput>
    create: XOR<skillEventCreateWithoutSkillEventTypeInput, skillEventUncheckedCreateWithoutSkillEventTypeInput>
  }

  export type skillEventUpdateWithWhereUniqueWithoutSkillEventTypeInput = {
    where: skillEventWhereUniqueInput
    data: XOR<skillEventUpdateWithoutSkillEventTypeInput, skillEventUncheckedUpdateWithoutSkillEventTypeInput>
  }

  export type skillEventUpdateManyWithWhereWithoutSkillEventTypeInput = {
    where: skillEventScalarWhereInput
    data: XOR<skillEventUpdateManyMutationInput, skillEventUncheckedUpdateManyWithoutSkillEventTypeInput>
  }

  export type skillEventCreateWithoutSourceTypeInput = {
    id?: string
    userId: number
    sourceId: string
    createdAt: Date | string
    event: eventCreateNestedOneWithoutSkillEventsInput
    skill: skillCreateNestedOneWithoutSkillEventsInput
    skillEventType: skillEventTypeCreateNestedOneWithoutSkillEventsInput
  }

  export type skillEventUncheckedCreateWithoutSourceTypeInput = {
    id?: string
    eventId: string
    userId: number
    skillId: string
    skillEventTypeId: string
    sourceId: string
    createdAt: Date | string
  }

  export type skillEventCreateOrConnectWithoutSourceTypeInput = {
    where: skillEventWhereUniqueInput
    create: XOR<skillEventCreateWithoutSourceTypeInput, skillEventUncheckedCreateWithoutSourceTypeInput>
  }

  export type skillEventCreateManySourceTypeInputEnvelope = {
    data: skillEventCreateManySourceTypeInput | skillEventCreateManySourceTypeInput[]
    skipDuplicates?: boolean
  }

  export type skillEventUpsertWithWhereUniqueWithoutSourceTypeInput = {
    where: skillEventWhereUniqueInput
    update: XOR<skillEventUpdateWithoutSourceTypeInput, skillEventUncheckedUpdateWithoutSourceTypeInput>
    create: XOR<skillEventCreateWithoutSourceTypeInput, skillEventUncheckedCreateWithoutSourceTypeInput>
  }

  export type skillEventUpdateWithWhereUniqueWithoutSourceTypeInput = {
    where: skillEventWhereUniqueInput
    data: XOR<skillEventUpdateWithoutSourceTypeInput, skillEventUncheckedUpdateWithoutSourceTypeInput>
  }

  export type skillEventUpdateManyWithWhereWithoutSourceTypeInput = {
    where: skillEventScalarWhereInput
    data: XOR<skillEventUpdateManyMutationInput, skillEventUncheckedUpdateManyWithoutSourceTypeInput>
  }

  export type skillCreateWithoutUserSkillsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    devId?: string | null
    category?: skillCategoryCreateNestedOneWithoutSkillsInput
    skillEvents?: skillEventCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateWithoutUserSkillsInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    devId?: string | null
    skillEvents?: skillEventUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillCreateOrConnectWithoutUserSkillsInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutUserSkillsInput, skillUncheckedCreateWithoutUserSkillsInput>
  }

  export type userSkillLevelCreateWithoutUserSkillsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type userSkillLevelUncheckedCreateWithoutUserSkillsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type userSkillLevelCreateOrConnectWithoutUserSkillsInput = {
    where: userSkillLevelWhereUniqueInput
    create: XOR<userSkillLevelCreateWithoutUserSkillsInput, userSkillLevelUncheckedCreateWithoutUserSkillsInput>
  }

  export type userSkillDisplayModeCreateWithoutUserSkillsInput = {
    id: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type userSkillDisplayModeUncheckedCreateWithoutUserSkillsInput = {
    id: string
    name: string
    description?: string | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type userSkillDisplayModeCreateOrConnectWithoutUserSkillsInput = {
    where: userSkillDisplayModeWhereUniqueInput
    create: XOR<userSkillDisplayModeCreateWithoutUserSkillsInput, userSkillDisplayModeUncheckedCreateWithoutUserSkillsInput>
  }

  export type skillUpsertWithoutUserSkillsInput = {
    update: XOR<skillUpdateWithoutUserSkillsInput, skillUncheckedUpdateWithoutUserSkillsInput>
    create: XOR<skillCreateWithoutUserSkillsInput, skillUncheckedCreateWithoutUserSkillsInput>
    where?: skillWhereInput
  }

  export type skillUpdateToOneWithWhereWithoutUserSkillsInput = {
    where?: skillWhereInput
    data: XOR<skillUpdateWithoutUserSkillsInput, skillUncheckedUpdateWithoutUserSkillsInput>
  }

  export type skillUpdateWithoutUserSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: skillCategoryUpdateOneWithoutSkillsNestedInput
    skillEvents?: skillEventUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateWithoutUserSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devId?: NullableStringFieldUpdateOperationsInput | string | null
    skillEvents?: skillEventUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type userSkillLevelUpsertWithoutUserSkillsInput = {
    update: XOR<userSkillLevelUpdateWithoutUserSkillsInput, userSkillLevelUncheckedUpdateWithoutUserSkillsInput>
    create: XOR<userSkillLevelCreateWithoutUserSkillsInput, userSkillLevelUncheckedCreateWithoutUserSkillsInput>
    where?: userSkillLevelWhereInput
  }

  export type userSkillLevelUpdateToOneWithWhereWithoutUserSkillsInput = {
    where?: userSkillLevelWhereInput
    data: XOR<userSkillLevelUpdateWithoutUserSkillsInput, userSkillLevelUncheckedUpdateWithoutUserSkillsInput>
  }

  export type userSkillLevelUpdateWithoutUserSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillLevelUncheckedUpdateWithoutUserSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillDisplayModeUpsertWithoutUserSkillsInput = {
    update: XOR<userSkillDisplayModeUpdateWithoutUserSkillsInput, userSkillDisplayModeUncheckedUpdateWithoutUserSkillsInput>
    create: XOR<userSkillDisplayModeCreateWithoutUserSkillsInput, userSkillDisplayModeUncheckedCreateWithoutUserSkillsInput>
    where?: userSkillDisplayModeWhereInput
  }

  export type userSkillDisplayModeUpdateToOneWithWhereWithoutUserSkillsInput = {
    where?: userSkillDisplayModeWhereInput
    data: XOR<userSkillDisplayModeUpdateWithoutUserSkillsInput, userSkillDisplayModeUncheckedUpdateWithoutUserSkillsInput>
  }

  export type userSkillDisplayModeUpdateWithoutUserSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillDisplayModeUncheckedUpdateWithoutUserSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillCreateWithoutDisplayModeInput = {
    id?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: skillCreateNestedOneWithoutUserSkillsInput
    level: userSkillLevelCreateNestedOneWithoutUserSkillsInput
  }

  export type userSkillUncheckedCreateWithoutDisplayModeInput = {
    id?: string
    userId: number
    skillId: string
    userSkillLevelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userSkillCreateOrConnectWithoutDisplayModeInput = {
    where: userSkillWhereUniqueInput
    create: XOR<userSkillCreateWithoutDisplayModeInput, userSkillUncheckedCreateWithoutDisplayModeInput>
  }

  export type userSkillCreateManyDisplayModeInputEnvelope = {
    data: userSkillCreateManyDisplayModeInput | userSkillCreateManyDisplayModeInput[]
    skipDuplicates?: boolean
  }

  export type userSkillUpsertWithWhereUniqueWithoutDisplayModeInput = {
    where: userSkillWhereUniqueInput
    update: XOR<userSkillUpdateWithoutDisplayModeInput, userSkillUncheckedUpdateWithoutDisplayModeInput>
    create: XOR<userSkillCreateWithoutDisplayModeInput, userSkillUncheckedCreateWithoutDisplayModeInput>
  }

  export type userSkillUpdateWithWhereUniqueWithoutDisplayModeInput = {
    where: userSkillWhereUniqueInput
    data: XOR<userSkillUpdateWithoutDisplayModeInput, userSkillUncheckedUpdateWithoutDisplayModeInput>
  }

  export type userSkillUpdateManyWithWhereWithoutDisplayModeInput = {
    where: userSkillScalarWhereInput
    data: XOR<userSkillUpdateManyMutationInput, userSkillUncheckedUpdateManyWithoutDisplayModeInput>
  }

  export type userSkillCreateWithoutLevelInput = {
    id?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: skillCreateNestedOneWithoutUserSkillsInput
    displayMode?: userSkillDisplayModeCreateNestedOneWithoutUserSkillsInput
  }

  export type userSkillUncheckedCreateWithoutLevelInput = {
    id?: string
    userId: number
    skillId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userSkillDisplayModeId?: string
  }

  export type userSkillCreateOrConnectWithoutLevelInput = {
    where: userSkillWhereUniqueInput
    create: XOR<userSkillCreateWithoutLevelInput, userSkillUncheckedCreateWithoutLevelInput>
  }

  export type userSkillCreateManyLevelInputEnvelope = {
    data: userSkillCreateManyLevelInput | userSkillCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type userSkillUpsertWithWhereUniqueWithoutLevelInput = {
    where: userSkillWhereUniqueInput
    update: XOR<userSkillUpdateWithoutLevelInput, userSkillUncheckedUpdateWithoutLevelInput>
    create: XOR<userSkillCreateWithoutLevelInput, userSkillUncheckedCreateWithoutLevelInput>
  }

  export type userSkillUpdateWithWhereUniqueWithoutLevelInput = {
    where: userSkillWhereUniqueInput
    data: XOR<userSkillUpdateWithoutLevelInput, userSkillUncheckedUpdateWithoutLevelInput>
  }

  export type userSkillUpdateManyWithWhereWithoutLevelInput = {
    where: userSkillScalarWhereInput
    data: XOR<userSkillUpdateManyMutationInput, userSkillUncheckedUpdateManyWithoutLevelInput>
  }

  export type skillEventCreateManyEventInput = {
    id?: string
    userId: number
    skillId: string
    skillEventTypeId: string
    sourceId: string
    sourceTypeId: string
    createdAt: Date | string
  }

  export type skillEventUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: skillUpdateOneRequiredWithoutSkillEventsNestedInput
    skillEventType?: skillEventTypeUpdateOneRequiredWithoutSkillEventsNestedInput
    sourceType?: sourceTypeUpdateOneRequiredWithoutSkillEventsNestedInput
  }

  export type skillEventUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillEventUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillEventCreateManySkillInput = {
    id?: string
    eventId: string
    userId: number
    skillEventTypeId: string
    sourceId: string
    sourceTypeId: string
    createdAt: Date | string
  }

  export type userSkillCreateManySkillInput = {
    id?: string
    userId: number
    userSkillLevelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userSkillDisplayModeId?: string
  }

  export type skillEventUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventUpdateOneRequiredWithoutSkillEventsNestedInput
    skillEventType?: skillEventTypeUpdateOneRequiredWithoutSkillEventsNestedInput
    sourceType?: sourceTypeUpdateOneRequiredWithoutSkillEventsNestedInput
  }

  export type skillEventUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillEventUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: userSkillLevelUpdateOneRequiredWithoutUserSkillsNestedInput
    displayMode?: userSkillDisplayModeUpdateOneRequiredWithoutUserSkillsNestedInput
  }

  export type userSkillUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    userSkillLevelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkillDisplayModeId?: StringFieldUpdateOperationsInput | string
  }

  export type userSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    userSkillLevelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkillDisplayModeId?: StringFieldUpdateOperationsInput | string
  }

  export type skillCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    devId?: string | null
  }

  export type skillUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devId?: NullableStringFieldUpdateOperationsInput | string | null
    skillEvents?: skillEventUpdateManyWithoutSkillNestedInput
    userSkills?: userSkillUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devId?: NullableStringFieldUpdateOperationsInput | string | null
    skillEvents?: skillEventUncheckedUpdateManyWithoutSkillNestedInput
    userSkills?: userSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillEventCreateManySkillEventTypeInput = {
    id?: string
    eventId: string
    userId: number
    skillId: string
    sourceId: string
    sourceTypeId: string
    createdAt: Date | string
  }

  export type skillEventUpdateWithoutSkillEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventUpdateOneRequiredWithoutSkillEventsNestedInput
    skill?: skillUpdateOneRequiredWithoutSkillEventsNestedInput
    sourceType?: sourceTypeUpdateOneRequiredWithoutSkillEventsNestedInput
  }

  export type skillEventUncheckedUpdateWithoutSkillEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillEventUncheckedUpdateManyWithoutSkillEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillEventCreateManySourceTypeInput = {
    id?: string
    eventId: string
    userId: number
    skillId: string
    skillEventTypeId: string
    sourceId: string
    createdAt: Date | string
  }

  export type skillEventUpdateWithoutSourceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventUpdateOneRequiredWithoutSkillEventsNestedInput
    skill?: skillUpdateOneRequiredWithoutSkillEventsNestedInput
    skillEventType?: skillEventTypeUpdateOneRequiredWithoutSkillEventsNestedInput
  }

  export type skillEventUncheckedUpdateWithoutSourceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillEventUncheckedUpdateManyWithoutSourceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    skillEventTypeId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillCreateManyDisplayModeInput = {
    id?: string
    userId: number
    skillId: string
    userSkillLevelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userSkillUpdateWithoutDisplayModeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: skillUpdateOneRequiredWithoutUserSkillsNestedInput
    level?: userSkillLevelUpdateOneRequiredWithoutUserSkillsNestedInput
  }

  export type userSkillUncheckedUpdateWithoutDisplayModeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    userSkillLevelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillUncheckedUpdateManyWithoutDisplayModeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    userSkillLevelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userSkillCreateManyLevelInput = {
    id?: string
    userId: number
    skillId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userSkillDisplayModeId?: string
  }

  export type userSkillUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: skillUpdateOneRequiredWithoutUserSkillsNestedInput
    displayMode?: userSkillDisplayModeUpdateOneRequiredWithoutUserSkillsNestedInput
  }

  export type userSkillUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkillDisplayModeId?: StringFieldUpdateOperationsInput | string
  }

  export type userSkillUncheckedUpdateManyWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    skillId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSkillDisplayModeId?: StringFieldUpdateOperationsInput | string
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