import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Premise: crudResolvers.PremiseCrudResolver,
  Vision: crudResolvers.VisionCrudResolver,
  Timeline: crudResolvers.TimelineCrudResolver,
  Tag: crudResolvers.TagCrudResolver,
  ActiveVisionOnPremise: crudResolvers.ActiveVisionOnPremiseCrudResolver,
  TagsOnPremises: crudResolvers.TagsOnPremisesCrudResolver,
  TagsOnTimelines: crudResolvers.TagsOnTimelinesCrudResolver,
  PremisesOnTimelines: crudResolvers.PremisesOnTimelinesCrudResolver,
  Snapshot: crudResolvers.SnapshotCrudResolver,
  Thread: crudResolvers.ThreadCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Premise: {
    premise: actionResolvers.FindUniquePremiseResolver,
    findFirstPremise: actionResolvers.FindFirstPremiseResolver,
    premises: actionResolvers.FindManyPremiseResolver,
    createPremise: actionResolvers.CreatePremiseResolver,
    createManyPremise: actionResolvers.CreateManyPremiseResolver,
    deletePremise: actionResolvers.DeletePremiseResolver,
    updatePremise: actionResolvers.UpdatePremiseResolver,
    deleteManyPremise: actionResolvers.DeleteManyPremiseResolver,
    updateManyPremise: actionResolvers.UpdateManyPremiseResolver,
    upsertPremise: actionResolvers.UpsertPremiseResolver,
    aggregatePremise: actionResolvers.AggregatePremiseResolver,
    groupByPremise: actionResolvers.GroupByPremiseResolver
  },
  Vision: {
    vision: actionResolvers.FindUniqueVisionResolver,
    findFirstVision: actionResolvers.FindFirstVisionResolver,
    visions: actionResolvers.FindManyVisionResolver,
    createVision: actionResolvers.CreateVisionResolver,
    createManyVision: actionResolvers.CreateManyVisionResolver,
    deleteVision: actionResolvers.DeleteVisionResolver,
    updateVision: actionResolvers.UpdateVisionResolver,
    deleteManyVision: actionResolvers.DeleteManyVisionResolver,
    updateManyVision: actionResolvers.UpdateManyVisionResolver,
    upsertVision: actionResolvers.UpsertVisionResolver,
    aggregateVision: actionResolvers.AggregateVisionResolver,
    groupByVision: actionResolvers.GroupByVisionResolver
  },
  Timeline: {
    timeline: actionResolvers.FindUniqueTimelineResolver,
    findFirstTimeline: actionResolvers.FindFirstTimelineResolver,
    timelines: actionResolvers.FindManyTimelineResolver,
    createTimeline: actionResolvers.CreateTimelineResolver,
    createManyTimeline: actionResolvers.CreateManyTimelineResolver,
    deleteTimeline: actionResolvers.DeleteTimelineResolver,
    updateTimeline: actionResolvers.UpdateTimelineResolver,
    deleteManyTimeline: actionResolvers.DeleteManyTimelineResolver,
    updateManyTimeline: actionResolvers.UpdateManyTimelineResolver,
    upsertTimeline: actionResolvers.UpsertTimelineResolver,
    aggregateTimeline: actionResolvers.AggregateTimelineResolver,
    groupByTimeline: actionResolvers.GroupByTimelineResolver
  },
  Tag: {
    tag: actionResolvers.FindUniqueTagResolver,
    findFirstTag: actionResolvers.FindFirstTagResolver,
    tags: actionResolvers.FindManyTagResolver,
    createTag: actionResolvers.CreateTagResolver,
    createManyTag: actionResolvers.CreateManyTagResolver,
    deleteTag: actionResolvers.DeleteTagResolver,
    updateTag: actionResolvers.UpdateTagResolver,
    deleteManyTag: actionResolvers.DeleteManyTagResolver,
    updateManyTag: actionResolvers.UpdateManyTagResolver,
    upsertTag: actionResolvers.UpsertTagResolver,
    aggregateTag: actionResolvers.AggregateTagResolver,
    groupByTag: actionResolvers.GroupByTagResolver
  },
  ActiveVisionOnPremise: {
    activeVisionOnPremise: actionResolvers.FindUniqueActiveVisionOnPremiseResolver,
    findFirstActiveVisionOnPremise: actionResolvers.FindFirstActiveVisionOnPremiseResolver,
    activeVisionOnPremises: actionResolvers.FindManyActiveVisionOnPremiseResolver,
    createActiveVisionOnPremise: actionResolvers.CreateActiveVisionOnPremiseResolver,
    createManyActiveVisionOnPremise: actionResolvers.CreateManyActiveVisionOnPremiseResolver,
    deleteActiveVisionOnPremise: actionResolvers.DeleteActiveVisionOnPremiseResolver,
    updateActiveVisionOnPremise: actionResolvers.UpdateActiveVisionOnPremiseResolver,
    deleteManyActiveVisionOnPremise: actionResolvers.DeleteManyActiveVisionOnPremiseResolver,
    updateManyActiveVisionOnPremise: actionResolvers.UpdateManyActiveVisionOnPremiseResolver,
    upsertActiveVisionOnPremise: actionResolvers.UpsertActiveVisionOnPremiseResolver,
    aggregateActiveVisionOnPremise: actionResolvers.AggregateActiveVisionOnPremiseResolver,
    groupByActiveVisionOnPremise: actionResolvers.GroupByActiveVisionOnPremiseResolver
  },
  TagsOnPremises: {
    findUniqueTagsOnPremises: actionResolvers.FindUniqueTagsOnPremisesResolver,
    findFirstTagsOnPremises: actionResolvers.FindFirstTagsOnPremisesResolver,
    findManyTagsOnPremises: actionResolvers.FindManyTagsOnPremisesResolver,
    createTagsOnPremises: actionResolvers.CreateTagsOnPremisesResolver,
    createManyTagsOnPremises: actionResolvers.CreateManyTagsOnPremisesResolver,
    deleteTagsOnPremises: actionResolvers.DeleteTagsOnPremisesResolver,
    updateTagsOnPremises: actionResolvers.UpdateTagsOnPremisesResolver,
    deleteManyTagsOnPremises: actionResolvers.DeleteManyTagsOnPremisesResolver,
    updateManyTagsOnPremises: actionResolvers.UpdateManyTagsOnPremisesResolver,
    upsertTagsOnPremises: actionResolvers.UpsertTagsOnPremisesResolver,
    aggregateTagsOnPremises: actionResolvers.AggregateTagsOnPremisesResolver,
    groupByTagsOnPremises: actionResolvers.GroupByTagsOnPremisesResolver
  },
  TagsOnTimelines: {
    findUniqueTagsOnTimelines: actionResolvers.FindUniqueTagsOnTimelinesResolver,
    findFirstTagsOnTimelines: actionResolvers.FindFirstTagsOnTimelinesResolver,
    findManyTagsOnTimelines: actionResolvers.FindManyTagsOnTimelinesResolver,
    createTagsOnTimelines: actionResolvers.CreateTagsOnTimelinesResolver,
    createManyTagsOnTimelines: actionResolvers.CreateManyTagsOnTimelinesResolver,
    deleteTagsOnTimelines: actionResolvers.DeleteTagsOnTimelinesResolver,
    updateTagsOnTimelines: actionResolvers.UpdateTagsOnTimelinesResolver,
    deleteManyTagsOnTimelines: actionResolvers.DeleteManyTagsOnTimelinesResolver,
    updateManyTagsOnTimelines: actionResolvers.UpdateManyTagsOnTimelinesResolver,
    upsertTagsOnTimelines: actionResolvers.UpsertTagsOnTimelinesResolver,
    aggregateTagsOnTimelines: actionResolvers.AggregateTagsOnTimelinesResolver,
    groupByTagsOnTimelines: actionResolvers.GroupByTagsOnTimelinesResolver
  },
  PremisesOnTimelines: {
    findUniquePremisesOnTimelines: actionResolvers.FindUniquePremisesOnTimelinesResolver,
    findFirstPremisesOnTimelines: actionResolvers.FindFirstPremisesOnTimelinesResolver,
    findManyPremisesOnTimelines: actionResolvers.FindManyPremisesOnTimelinesResolver,
    createPremisesOnTimelines: actionResolvers.CreatePremisesOnTimelinesResolver,
    createManyPremisesOnTimelines: actionResolvers.CreateManyPremisesOnTimelinesResolver,
    deletePremisesOnTimelines: actionResolvers.DeletePremisesOnTimelinesResolver,
    updatePremisesOnTimelines: actionResolvers.UpdatePremisesOnTimelinesResolver,
    deleteManyPremisesOnTimelines: actionResolvers.DeleteManyPremisesOnTimelinesResolver,
    updateManyPremisesOnTimelines: actionResolvers.UpdateManyPremisesOnTimelinesResolver,
    upsertPremisesOnTimelines: actionResolvers.UpsertPremisesOnTimelinesResolver,
    aggregatePremisesOnTimelines: actionResolvers.AggregatePremisesOnTimelinesResolver,
    groupByPremisesOnTimelines: actionResolvers.GroupByPremisesOnTimelinesResolver
  },
  Snapshot: {
    snapshot: actionResolvers.FindUniqueSnapshotResolver,
    findFirstSnapshot: actionResolvers.FindFirstSnapshotResolver,
    snapshots: actionResolvers.FindManySnapshotResolver,
    createSnapshot: actionResolvers.CreateSnapshotResolver,
    createManySnapshot: actionResolvers.CreateManySnapshotResolver,
    deleteSnapshot: actionResolvers.DeleteSnapshotResolver,
    updateSnapshot: actionResolvers.UpdateSnapshotResolver,
    deleteManySnapshot: actionResolvers.DeleteManySnapshotResolver,
    updateManySnapshot: actionResolvers.UpdateManySnapshotResolver,
    upsertSnapshot: actionResolvers.UpsertSnapshotResolver,
    aggregateSnapshot: actionResolvers.AggregateSnapshotResolver,
    groupBySnapshot: actionResolvers.GroupBySnapshotResolver
  },
  Thread: {
    thread: actionResolvers.FindUniqueThreadResolver,
    findFirstThread: actionResolvers.FindFirstThreadResolver,
    threads: actionResolvers.FindManyThreadResolver,
    createThread: actionResolvers.CreateThreadResolver,
    createManyThread: actionResolvers.CreateManyThreadResolver,
    deleteThread: actionResolvers.DeleteThreadResolver,
    updateThread: actionResolvers.UpdateThreadResolver,
    deleteManyThread: actionResolvers.DeleteManyThreadResolver,
    updateManyThread: actionResolvers.UpdateManyThreadResolver,
    upsertThread: actionResolvers.UpsertThreadResolver,
    aggregateThread: actionResolvers.AggregateThreadResolver,
    groupByThread: actionResolvers.GroupByThreadResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Premise: ["premise", "findFirstPremise", "premises", "createPremise", "createManyPremise", "deletePremise", "updatePremise", "deleteManyPremise", "updateManyPremise", "upsertPremise", "aggregatePremise", "groupByPremise"],
  Vision: ["vision", "findFirstVision", "visions", "createVision", "createManyVision", "deleteVision", "updateVision", "deleteManyVision", "updateManyVision", "upsertVision", "aggregateVision", "groupByVision"],
  Timeline: ["timeline", "findFirstTimeline", "timelines", "createTimeline", "createManyTimeline", "deleteTimeline", "updateTimeline", "deleteManyTimeline", "updateManyTimeline", "upsertTimeline", "aggregateTimeline", "groupByTimeline"],
  Tag: ["tag", "findFirstTag", "tags", "createTag", "createManyTag", "deleteTag", "updateTag", "deleteManyTag", "updateManyTag", "upsertTag", "aggregateTag", "groupByTag"],
  ActiveVisionOnPremise: ["activeVisionOnPremise", "findFirstActiveVisionOnPremise", "activeVisionOnPremises", "createActiveVisionOnPremise", "createManyActiveVisionOnPremise", "deleteActiveVisionOnPremise", "updateActiveVisionOnPremise", "deleteManyActiveVisionOnPremise", "updateManyActiveVisionOnPremise", "upsertActiveVisionOnPremise", "aggregateActiveVisionOnPremise", "groupByActiveVisionOnPremise"],
  TagsOnPremises: ["findUniqueTagsOnPremises", "findFirstTagsOnPremises", "findManyTagsOnPremises", "createTagsOnPremises", "createManyTagsOnPremises", "deleteTagsOnPremises", "updateTagsOnPremises", "deleteManyTagsOnPremises", "updateManyTagsOnPremises", "upsertTagsOnPremises", "aggregateTagsOnPremises", "groupByTagsOnPremises"],
  TagsOnTimelines: ["findUniqueTagsOnTimelines", "findFirstTagsOnTimelines", "findManyTagsOnTimelines", "createTagsOnTimelines", "createManyTagsOnTimelines", "deleteTagsOnTimelines", "updateTagsOnTimelines", "deleteManyTagsOnTimelines", "updateManyTagsOnTimelines", "upsertTagsOnTimelines", "aggregateTagsOnTimelines", "groupByTagsOnTimelines"],
  PremisesOnTimelines: ["findUniquePremisesOnTimelines", "findFirstPremisesOnTimelines", "findManyPremisesOnTimelines", "createPremisesOnTimelines", "createManyPremisesOnTimelines", "deletePremisesOnTimelines", "updatePremisesOnTimelines", "deleteManyPremisesOnTimelines", "updateManyPremisesOnTimelines", "upsertPremisesOnTimelines", "aggregatePremisesOnTimelines", "groupByPremisesOnTimelines"],
  Snapshot: ["snapshot", "findFirstSnapshot", "snapshots", "createSnapshot", "createManySnapshot", "deleteSnapshot", "updateSnapshot", "deleteManySnapshot", "updateManySnapshot", "upsertSnapshot", "aggregateSnapshot", "groupBySnapshot"],
  Thread: ["thread", "findFirstThread", "threads", "createThread", "createManyThread", "deleteThread", "updateThread", "deleteManyThread", "updateManyThread", "upsertThread", "aggregateThread", "groupByThread"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePremiseArgs: ["where"],
  FindFirstPremiseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPremiseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePremiseArgs: ["data"],
  CreateManyPremiseArgs: ["data", "skipDuplicates"],
  DeletePremiseArgs: ["where"],
  UpdatePremiseArgs: ["data", "where"],
  DeleteManyPremiseArgs: ["where"],
  UpdateManyPremiseArgs: ["data", "where"],
  UpsertPremiseArgs: ["where", "create", "update"],
  AggregatePremiseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPremiseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueVisionArgs: ["where"],
  FindFirstVisionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyVisionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateVisionArgs: ["data"],
  CreateManyVisionArgs: ["data", "skipDuplicates"],
  DeleteVisionArgs: ["where"],
  UpdateVisionArgs: ["data", "where"],
  DeleteManyVisionArgs: ["where"],
  UpdateManyVisionArgs: ["data", "where"],
  UpsertVisionArgs: ["where", "create", "update"],
  AggregateVisionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByVisionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTimelineArgs: ["where"],
  FindFirstTimelineArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTimelineArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTimelineArgs: ["data"],
  CreateManyTimelineArgs: ["data", "skipDuplicates"],
  DeleteTimelineArgs: ["where"],
  UpdateTimelineArgs: ["data", "where"],
  DeleteManyTimelineArgs: ["where"],
  UpdateManyTimelineArgs: ["data", "where"],
  UpsertTimelineArgs: ["where", "create", "update"],
  AggregateTimelineArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTimelineArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTagArgs: ["where"],
  FindFirstTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTagArgs: ["data"],
  CreateManyTagArgs: ["data", "skipDuplicates"],
  DeleteTagArgs: ["where"],
  UpdateTagArgs: ["data", "where"],
  DeleteManyTagArgs: ["where"],
  UpdateManyTagArgs: ["data", "where"],
  UpsertTagArgs: ["where", "create", "update"],
  AggregateTagArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTagArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueActiveVisionOnPremiseArgs: ["where"],
  FindFirstActiveVisionOnPremiseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyActiveVisionOnPremiseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateActiveVisionOnPremiseArgs: ["data"],
  CreateManyActiveVisionOnPremiseArgs: ["data", "skipDuplicates"],
  DeleteActiveVisionOnPremiseArgs: ["where"],
  UpdateActiveVisionOnPremiseArgs: ["data", "where"],
  DeleteManyActiveVisionOnPremiseArgs: ["where"],
  UpdateManyActiveVisionOnPremiseArgs: ["data", "where"],
  UpsertActiveVisionOnPremiseArgs: ["where", "create", "update"],
  AggregateActiveVisionOnPremiseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByActiveVisionOnPremiseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTagsOnPremisesArgs: ["where"],
  FindFirstTagsOnPremisesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTagsOnPremisesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTagsOnPremisesArgs: ["data"],
  CreateManyTagsOnPremisesArgs: ["data", "skipDuplicates"],
  DeleteTagsOnPremisesArgs: ["where"],
  UpdateTagsOnPremisesArgs: ["data", "where"],
  DeleteManyTagsOnPremisesArgs: ["where"],
  UpdateManyTagsOnPremisesArgs: ["data", "where"],
  UpsertTagsOnPremisesArgs: ["where", "create", "update"],
  AggregateTagsOnPremisesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTagsOnPremisesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTagsOnTimelinesArgs: ["where"],
  FindFirstTagsOnTimelinesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTagsOnTimelinesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTagsOnTimelinesArgs: ["data"],
  CreateManyTagsOnTimelinesArgs: ["data", "skipDuplicates"],
  DeleteTagsOnTimelinesArgs: ["where"],
  UpdateTagsOnTimelinesArgs: ["data", "where"],
  DeleteManyTagsOnTimelinesArgs: ["where"],
  UpdateManyTagsOnTimelinesArgs: ["data", "where"],
  UpsertTagsOnTimelinesArgs: ["where", "create", "update"],
  AggregateTagsOnTimelinesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTagsOnTimelinesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePremisesOnTimelinesArgs: ["where"],
  FindFirstPremisesOnTimelinesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPremisesOnTimelinesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePremisesOnTimelinesArgs: ["data"],
  CreateManyPremisesOnTimelinesArgs: ["data", "skipDuplicates"],
  DeletePremisesOnTimelinesArgs: ["where"],
  UpdatePremisesOnTimelinesArgs: ["data", "where"],
  DeleteManyPremisesOnTimelinesArgs: ["where"],
  UpdateManyPremisesOnTimelinesArgs: ["data", "where"],
  UpsertPremisesOnTimelinesArgs: ["where", "create", "update"],
  AggregatePremisesOnTimelinesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPremisesOnTimelinesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSnapshotArgs: ["where"],
  FindFirstSnapshotArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySnapshotArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSnapshotArgs: ["data"],
  CreateManySnapshotArgs: ["data", "skipDuplicates"],
  DeleteSnapshotArgs: ["where"],
  UpdateSnapshotArgs: ["data", "where"],
  DeleteManySnapshotArgs: ["where"],
  UpdateManySnapshotArgs: ["data", "where"],
  UpsertSnapshotArgs: ["where", "create", "update"],
  AggregateSnapshotArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySnapshotArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueThreadArgs: ["where"],
  FindFirstThreadArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyThreadArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateThreadArgs: ["data"],
  CreateManyThreadArgs: ["data", "skipDuplicates"],
  DeleteThreadArgs: ["where"],
  UpdateThreadArgs: ["data", "where"],
  DeleteManyThreadArgs: ["where"],
  UpdateManyThreadArgs: ["data", "where"],
  UpsertThreadArgs: ["where", "create", "update"],
  AggregateThreadArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByThreadArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Premise: relationResolvers.PremiseRelationsResolver,
  Vision: relationResolvers.VisionRelationsResolver,
  Timeline: relationResolvers.TimelineRelationsResolver,
  Tag: relationResolvers.TagRelationsResolver,
  ActiveVisionOnPremise: relationResolvers.ActiveVisionOnPremiseRelationsResolver,
  TagsOnPremises: relationResolvers.TagsOnPremisesRelationsResolver,
  TagsOnTimelines: relationResolvers.TagsOnTimelinesRelationsResolver,
  PremisesOnTimelines: relationResolvers.PremisesOnTimelinesRelationsResolver,
  Thread: relationResolvers.ThreadRelationsResolver
};
const relationResolversInfo = {
  User: ["premise", "vision", "timeline"],
  Premise: ["author", "vision", "thread", "premisesOnTimelines", "tagsOnPremises", "activeVisionOnPremise"],
  Vision: ["author", "premise", "activeVisionOnPremise"],
  Timeline: ["author", "premisesOnTimelines", "tagsOnTimelines"],
  Tag: ["tagsOnPremises", "tagsOnTimelines"],
  ActiveVisionOnPremise: ["premise", "vision"],
  TagsOnPremises: ["tag", "premise"],
  TagsOnTimelines: ["tag", "timeline"],
  PremisesOnTimelines: ["timeline", "premise"],
  Thread: ["premise", "parentThread", "childThreads"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "createdAt", "email", "name", "role"],
  Premise: ["id", "title", "createdAt", "updatedAt", "status", "authorId"],
  Vision: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "premiseId"],
  Timeline: ["id", "title", "description", "status", "authorId"],
  Tag: ["id", "label"],
  ActiveVisionOnPremise: ["premiseId", "visionId"],
  TagsOnPremises: ["tagId", "premiseId", "assignedAt"],
  TagsOnTimelines: ["tagId", "timelineId", "assignedAt"],
  PremisesOnTimelines: ["timelineId", "premiseId", "assignedAt"],
  Snapshot: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption"],
  Thread: ["id", "title", "activityDate", "description", "createdAt", "reference", "premiseId", "parentThreadId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "email", "name", "role", "_count", "_min", "_max"],
  AggregatePremise: ["_count", "_min", "_max"],
  PremiseGroupBy: ["id", "title", "createdAt", "updatedAt", "status", "authorId", "_count", "_min", "_max"],
  AggregateVision: ["_count", "_min", "_max"],
  VisionGroupBy: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "premiseId", "_count", "_min", "_max"],
  AggregateTimeline: ["_count", "_min", "_max"],
  TimelineGroupBy: ["id", "title", "description", "status", "authorId", "_count", "_min", "_max"],
  AggregateTag: ["_count", "_avg", "_sum", "_min", "_max"],
  TagGroupBy: ["id", "label", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateActiveVisionOnPremise: ["_count", "_min", "_max"],
  ActiveVisionOnPremiseGroupBy: ["premiseId", "visionId", "_count", "_min", "_max"],
  AggregateTagsOnPremises: ["_count", "_avg", "_sum", "_min", "_max"],
  TagsOnPremisesGroupBy: ["tagId", "premiseId", "assignedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTagsOnTimelines: ["_count", "_avg", "_sum", "_min", "_max"],
  TagsOnTimelinesGroupBy: ["tagId", "timelineId", "assignedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePremisesOnTimelines: ["_count", "_min", "_max"],
  PremisesOnTimelinesGroupBy: ["timelineId", "premiseId", "assignedAt", "_count", "_min", "_max"],
  AggregateSnapshot: ["_count", "_min", "_max"],
  SnapshotGroupBy: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption", "_count", "_min", "_max"],
  AggregateThread: ["_count", "_min", "_max"],
  ThreadGroupBy: ["id", "title", "activityDate", "description", "createdAt", "reference", "premiseId", "parentThreadId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["premise", "vision", "timeline"],
  UserCountAggregate: ["id", "createdAt", "email", "name", "role", "_all"],
  UserMinAggregate: ["id", "createdAt", "email", "name", "role"],
  UserMaxAggregate: ["id", "createdAt", "email", "name", "role"],
  PremiseCount: ["vision", "thread", "premisesOnTimelines", "tagsOnPremises", "activeVisionOnPremise"],
  PremiseCountAggregate: ["id", "title", "createdAt", "updatedAt", "status", "authorId", "_all"],
  PremiseMinAggregate: ["id", "title", "createdAt", "updatedAt", "status", "authorId"],
  PremiseMaxAggregate: ["id", "title", "createdAt", "updatedAt", "status", "authorId"],
  VisionCount: ["activeVisionOnPremise"],
  VisionCountAggregate: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "premiseId", "_all"],
  VisionMinAggregate: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "premiseId"],
  VisionMaxAggregate: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "premiseId"],
  TimelineCount: ["premisesOnTimelines", "tagsOnTimelines"],
  TimelineCountAggregate: ["id", "title", "description", "status", "authorId", "_all"],
  TimelineMinAggregate: ["id", "title", "description", "status", "authorId"],
  TimelineMaxAggregate: ["id", "title", "description", "status", "authorId"],
  TagCount: ["tagsOnPremises", "tagsOnTimelines"],
  TagCountAggregate: ["id", "label", "_all"],
  TagAvgAggregate: ["id"],
  TagSumAggregate: ["id"],
  TagMinAggregate: ["id", "label"],
  TagMaxAggregate: ["id", "label"],
  ActiveVisionOnPremiseCountAggregate: ["premiseId", "visionId", "_all"],
  ActiveVisionOnPremiseMinAggregate: ["premiseId", "visionId"],
  ActiveVisionOnPremiseMaxAggregate: ["premiseId", "visionId"],
  TagsOnPremisesCountAggregate: ["tagId", "premiseId", "assignedAt", "_all"],
  TagsOnPremisesAvgAggregate: ["tagId"],
  TagsOnPremisesSumAggregate: ["tagId"],
  TagsOnPremisesMinAggregate: ["tagId", "premiseId", "assignedAt"],
  TagsOnPremisesMaxAggregate: ["tagId", "premiseId", "assignedAt"],
  TagsOnTimelinesCountAggregate: ["tagId", "timelineId", "assignedAt", "_all"],
  TagsOnTimelinesAvgAggregate: ["tagId"],
  TagsOnTimelinesSumAggregate: ["tagId"],
  TagsOnTimelinesMinAggregate: ["tagId", "timelineId", "assignedAt"],
  TagsOnTimelinesMaxAggregate: ["tagId", "timelineId", "assignedAt"],
  PremisesOnTimelinesCountAggregate: ["timelineId", "premiseId", "assignedAt", "_all"],
  PremisesOnTimelinesMinAggregate: ["timelineId", "premiseId", "assignedAt"],
  PremisesOnTimelinesMaxAggregate: ["timelineId", "premiseId", "assignedAt"],
  SnapshotCountAggregate: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption", "_all"],
  SnapshotMinAggregate: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption"],
  SnapshotMaxAggregate: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption"],
  ThreadCount: ["childThreads"],
  ThreadCountAggregate: ["id", "title", "activityDate", "description", "createdAt", "reference", "premiseId", "parentThreadId", "_all"],
  ThreadMinAggregate: ["id", "title", "activityDate", "description", "createdAt", "reference", "premiseId", "parentThreadId"],
  ThreadMaxAggregate: ["id", "title", "activityDate", "description", "createdAt", "reference", "premiseId", "parentThreadId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "email", "name", "role", "premise", "vision", "timeline"],
  UserOrderByWithRelationInput: ["id", "createdAt", "email", "name", "role", "premise", "vision", "timeline"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "email", "name", "role", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "email", "name", "role"],
  PremiseWhereInput: ["AND", "OR", "NOT", "id", "title", "createdAt", "updatedAt", "status", "author", "authorId", "vision", "thread", "premisesOnTimelines", "tagsOnPremises", "activeVisionOnPremise"],
  PremiseOrderByWithRelationInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "authorId", "vision", "thread", "premisesOnTimelines", "tagsOnPremises", "activeVisionOnPremise"],
  PremiseWhereUniqueInput: ["id"],
  PremiseOrderByWithAggregationInput: ["id", "title", "createdAt", "updatedAt", "status", "authorId", "_count", "_max", "_min"],
  PremiseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "createdAt", "updatedAt", "status", "authorId"],
  VisionWhereInput: ["AND", "OR", "NOT", "id", "title", "activityDate", "description", "createdAt", "reference", "author", "authorId", "premise", "premiseId", "activeVisionOnPremise"],
  VisionOrderByWithRelationInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "authorId", "premise", "premiseId", "activeVisionOnPremise"],
  VisionWhereUniqueInput: ["id"],
  VisionOrderByWithAggregationInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "premiseId", "_count", "_max", "_min"],
  VisionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "premiseId"],
  TimelineWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "status", "author", "authorId", "premisesOnTimelines", "tagsOnTimelines"],
  TimelineOrderByWithRelationInput: ["id", "title", "description", "status", "author", "authorId", "premisesOnTimelines", "tagsOnTimelines"],
  TimelineWhereUniqueInput: ["id"],
  TimelineOrderByWithAggregationInput: ["id", "title", "description", "status", "authorId", "_count", "_max", "_min"],
  TimelineScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "status", "authorId"],
  TagWhereInput: ["AND", "OR", "NOT", "id", "label", "tagsOnPremises", "tagsOnTimelines"],
  TagOrderByWithRelationInput: ["id", "label", "tagsOnPremises", "tagsOnTimelines"],
  TagWhereUniqueInput: ["id", "label"],
  TagOrderByWithAggregationInput: ["id", "label", "_count", "_avg", "_max", "_min", "_sum"],
  TagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "label"],
  ActiveVisionOnPremiseWhereInput: ["AND", "OR", "NOT", "premise", "premiseId", "vision", "visionId"],
  ActiveVisionOnPremiseOrderByWithRelationInput: ["premise", "premiseId", "vision", "visionId"],
  ActiveVisionOnPremiseWhereUniqueInput: ["premiseId", "visionId_premiseId"],
  ActiveVisionOnPremiseOrderByWithAggregationInput: ["premiseId", "visionId", "_count", "_max", "_min"],
  ActiveVisionOnPremiseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "premiseId", "visionId"],
  TagsOnPremisesWhereInput: ["AND", "OR", "NOT", "tag", "tagId", "premise", "premiseId", "assignedAt"],
  TagsOnPremisesOrderByWithRelationInput: ["tag", "tagId", "premise", "premiseId", "assignedAt"],
  TagsOnPremisesWhereUniqueInput: ["tagId_premiseId"],
  TagsOnPremisesOrderByWithAggregationInput: ["tagId", "premiseId", "assignedAt", "_count", "_avg", "_max", "_min", "_sum"],
  TagsOnPremisesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "tagId", "premiseId", "assignedAt"],
  TagsOnTimelinesWhereInput: ["AND", "OR", "NOT", "tag", "tagId", "timeline", "timelineId", "assignedAt"],
  TagsOnTimelinesOrderByWithRelationInput: ["tag", "tagId", "timeline", "timelineId", "assignedAt"],
  TagsOnTimelinesWhereUniqueInput: ["tagId_timelineId"],
  TagsOnTimelinesOrderByWithAggregationInput: ["tagId", "timelineId", "assignedAt", "_count", "_avg", "_max", "_min", "_sum"],
  TagsOnTimelinesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "tagId", "timelineId", "assignedAt"],
  PremisesOnTimelinesWhereInput: ["AND", "OR", "NOT", "timeline", "timelineId", "premise", "premiseId", "assignedAt"],
  PremisesOnTimelinesOrderByWithRelationInput: ["timeline", "timelineId", "premise", "premiseId", "assignedAt"],
  PremisesOnTimelinesWhereUniqueInput: ["premiseId_timelineId"],
  PremisesOnTimelinesOrderByWithAggregationInput: ["timelineId", "premiseId", "assignedAt", "_count", "_max", "_min"],
  PremisesOnTimelinesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "timelineId", "premiseId", "assignedAt"],
  SnapshotWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "versionId", "url", "sourceUrl", "caption"],
  SnapshotOrderByWithRelationInput: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption"],
  SnapshotWhereUniqueInput: ["id"],
  SnapshotOrderByWithAggregationInput: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption", "_count", "_max", "_min"],
  SnapshotScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "versionId", "url", "sourceUrl", "caption"],
  ThreadWhereInput: ["AND", "OR", "NOT", "id", "title", "activityDate", "description", "createdAt", "reference", "premise", "premiseId", "parentThreadId", "parentThread", "childThreads"],
  ThreadOrderByWithRelationInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premise", "premiseId", "parentThreadId", "parentThread", "childThreads"],
  ThreadWhereUniqueInput: ["id"],
  ThreadOrderByWithAggregationInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premiseId", "parentThreadId", "_count", "_max", "_min"],
  ThreadScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "activityDate", "description", "createdAt", "reference", "premiseId", "parentThreadId"],
  UserCreateInput: ["id", "createdAt", "email", "name", "role", "premise", "vision", "timeline"],
  UserUpdateInput: ["id", "createdAt", "email", "name", "role", "premise", "vision", "timeline"],
  UserCreateManyInput: ["id", "createdAt", "email", "name", "role"],
  UserUpdateManyMutationInput: ["id", "createdAt", "email", "name", "role"],
  PremiseCreateInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "thread", "premisesOnTimelines", "tagsOnPremises", "activeVisionOnPremise"],
  PremiseUpdateInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "thread", "premisesOnTimelines", "tagsOnPremises", "activeVisionOnPremise"],
  PremiseCreateManyInput: ["id", "title", "createdAt", "updatedAt", "status", "authorId"],
  PremiseUpdateManyMutationInput: ["id", "title", "createdAt", "updatedAt", "status"],
  VisionCreateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "premise", "activeVisionOnPremise"],
  VisionUpdateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "premise", "activeVisionOnPremise"],
  VisionCreateManyInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "premiseId"],
  VisionUpdateManyMutationInput: ["id", "title", "activityDate", "description", "createdAt", "reference"],
  TimelineCreateInput: ["id", "title", "description", "status", "author", "premisesOnTimelines", "tagsOnTimelines"],
  TimelineUpdateInput: ["id", "title", "description", "status", "author", "premisesOnTimelines", "tagsOnTimelines"],
  TimelineCreateManyInput: ["id", "title", "description", "status", "authorId"],
  TimelineUpdateManyMutationInput: ["id", "title", "description", "status"],
  TagCreateInput: ["label", "tagsOnPremises", "tagsOnTimelines"],
  TagUpdateInput: ["label", "tagsOnPremises", "tagsOnTimelines"],
  TagCreateManyInput: ["id", "label"],
  TagUpdateManyMutationInput: ["label"],
  ActiveVisionOnPremiseCreateInput: ["premise", "vision"],
  ActiveVisionOnPremiseUpdateInput: ["premise", "vision"],
  ActiveVisionOnPremiseCreateManyInput: ["premiseId", "visionId"],
  ActiveVisionOnPremiseUpdateManyMutationInput: [],
  TagsOnPremisesCreateInput: ["tag", "premise", "assignedAt"],
  TagsOnPremisesUpdateInput: ["tag", "premise", "assignedAt"],
  TagsOnPremisesCreateManyInput: ["tagId", "premiseId", "assignedAt"],
  TagsOnPremisesUpdateManyMutationInput: ["assignedAt"],
  TagsOnTimelinesCreateInput: ["tag", "timeline", "assignedAt"],
  TagsOnTimelinesUpdateInput: ["tag", "timeline", "assignedAt"],
  TagsOnTimelinesCreateManyInput: ["tagId", "timelineId", "assignedAt"],
  TagsOnTimelinesUpdateManyMutationInput: ["assignedAt"],
  PremisesOnTimelinesCreateInput: ["timeline", "premise", "assignedAt"],
  PremisesOnTimelinesUpdateInput: ["timeline", "premise", "assignedAt"],
  PremisesOnTimelinesCreateManyInput: ["timelineId", "premiseId", "assignedAt"],
  PremisesOnTimelinesUpdateManyMutationInput: ["assignedAt"],
  SnapshotCreateInput: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption"],
  SnapshotUpdateInput: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption"],
  SnapshotCreateManyInput: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption"],
  SnapshotUpdateManyMutationInput: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption"],
  ThreadCreateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premise", "parentThread", "childThreads"],
  ThreadUpdateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premise", "parentThread", "childThreads"],
  ThreadCreateManyInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premiseId", "parentThreadId"],
  ThreadUpdateManyMutationInput: ["id", "title", "activityDate", "description", "createdAt", "reference"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  PremiseListRelationFilter: ["every", "some", "none"],
  VisionListRelationFilter: ["every", "some", "none"],
  TimelineListRelationFilter: ["every", "some", "none"],
  PremiseOrderByRelationAggregateInput: ["_count"],
  VisionOrderByRelationAggregateInput: ["_count"],
  TimelineOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "email", "name", "role"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "email", "name", "role"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "email", "name", "role"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumPremiseStatusFilter: ["equals", "in", "notIn", "not"],
  UserRelationFilter: ["is", "isNot"],
  ThreadListRelationFilter: ["every", "some", "none"],
  PremisesOnTimelinesListRelationFilter: ["every", "some", "none"],
  TagsOnPremisesListRelationFilter: ["every", "some", "none"],
  ActiveVisionOnPremiseListRelationFilter: ["every", "some", "none"],
  ThreadOrderByRelationAggregateInput: ["_count"],
  PremisesOnTimelinesOrderByRelationAggregateInput: ["_count"],
  TagsOnPremisesOrderByRelationAggregateInput: ["_count"],
  ActiveVisionOnPremiseOrderByRelationAggregateInput: ["_count"],
  PremiseCountOrderByAggregateInput: ["id", "title", "createdAt", "updatedAt", "status", "authorId"],
  PremiseMaxOrderByAggregateInput: ["id", "title", "createdAt", "updatedAt", "status", "authorId"],
  PremiseMinOrderByAggregateInput: ["id", "title", "createdAt", "updatedAt", "status", "authorId"],
  EnumPremiseStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  PremiseRelationFilter: ["is", "isNot"],
  VisionCountOrderByAggregateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "premiseId"],
  VisionMaxOrderByAggregateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "premiseId"],
  VisionMinOrderByAggregateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "premiseId"],
  TagsOnTimelinesListRelationFilter: ["every", "some", "none"],
  TagsOnTimelinesOrderByRelationAggregateInput: ["_count"],
  TimelineCountOrderByAggregateInput: ["id", "title", "description", "status", "authorId"],
  TimelineMaxOrderByAggregateInput: ["id", "title", "description", "status", "authorId"],
  TimelineMinOrderByAggregateInput: ["id", "title", "description", "status", "authorId"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TagCountOrderByAggregateInput: ["id", "label"],
  TagAvgOrderByAggregateInput: ["id"],
  TagMaxOrderByAggregateInput: ["id", "label"],
  TagMinOrderByAggregateInput: ["id", "label"],
  TagSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  VisionRelationFilter: ["is", "isNot"],
  ActiveVisionOnPremiseVisionIdPremiseIdCompoundUniqueInput: ["visionId", "premiseId"],
  ActiveVisionOnPremiseCountOrderByAggregateInput: ["premiseId", "visionId"],
  ActiveVisionOnPremiseMaxOrderByAggregateInput: ["premiseId", "visionId"],
  ActiveVisionOnPremiseMinOrderByAggregateInput: ["premiseId", "visionId"],
  TagRelationFilter: ["is", "isNot"],
  TagsOnPremisesTagIdPremiseIdCompoundUniqueInput: ["tagId", "premiseId"],
  TagsOnPremisesCountOrderByAggregateInput: ["tagId", "premiseId", "assignedAt"],
  TagsOnPremisesAvgOrderByAggregateInput: ["tagId"],
  TagsOnPremisesMaxOrderByAggregateInput: ["tagId", "premiseId", "assignedAt"],
  TagsOnPremisesMinOrderByAggregateInput: ["tagId", "premiseId", "assignedAt"],
  TagsOnPremisesSumOrderByAggregateInput: ["tagId"],
  TimelineRelationFilter: ["is", "isNot"],
  TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput: ["tagId", "timelineId"],
  TagsOnTimelinesCountOrderByAggregateInput: ["tagId", "timelineId", "assignedAt"],
  TagsOnTimelinesAvgOrderByAggregateInput: ["tagId"],
  TagsOnTimelinesMaxOrderByAggregateInput: ["tagId", "timelineId", "assignedAt"],
  TagsOnTimelinesMinOrderByAggregateInput: ["tagId", "timelineId", "assignedAt"],
  TagsOnTimelinesSumOrderByAggregateInput: ["tagId"],
  PremisesOnTimelinesPremiseIdTimelineIdCompoundUniqueInput: ["premiseId", "timelineId"],
  PremisesOnTimelinesCountOrderByAggregateInput: ["timelineId", "premiseId", "assignedAt"],
  PremisesOnTimelinesMaxOrderByAggregateInput: ["timelineId", "premiseId", "assignedAt"],
  PremisesOnTimelinesMinOrderByAggregateInput: ["timelineId", "premiseId", "assignedAt"],
  SnapshotCountOrderByAggregateInput: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption"],
  SnapshotMaxOrderByAggregateInput: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption"],
  SnapshotMinOrderByAggregateInput: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption"],
  ThreadRelationFilter: ["is", "isNot"],
  ThreadCountOrderByAggregateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premiseId", "parentThreadId"],
  ThreadMaxOrderByAggregateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premiseId", "parentThreadId"],
  ThreadMinOrderByAggregateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premiseId", "parentThreadId"],
  PremiseCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  VisionCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  TimelineCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  PremiseUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  VisionUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TimelineUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutPremiseInput: ["create", "connectOrCreate", "connect"],
  VisionCreateNestedManyWithoutPremiseInput: ["create", "connectOrCreate", "createMany", "connect"],
  ThreadCreateNestedManyWithoutPremiseInput: ["create", "connectOrCreate", "createMany", "connect"],
  PremisesOnTimelinesCreateNestedManyWithoutPremiseInput: ["create", "connectOrCreate", "createMany", "connect"],
  TagsOnPremisesCreateNestedManyWithoutPremiseInput: ["create", "connectOrCreate", "createMany", "connect"],
  ActiveVisionOnPremiseCreateNestedManyWithoutPremiseInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumPremiseStatusFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutPremiseInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  VisionUpdateManyWithoutPremiseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ThreadUpdateManyWithoutPremiseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PremisesOnTimelinesUpdateManyWithoutPremiseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TagsOnPremisesUpdateManyWithoutPremiseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ActiveVisionOnPremiseUpdateManyWithoutPremiseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutVisionInput: ["create", "connectOrCreate", "connect"],
  PremiseCreateNestedOneWithoutVisionInput: ["create", "connectOrCreate", "connect"],
  ActiveVisionOnPremiseCreateNestedManyWithoutVisionInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutVisionInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PremiseUpdateOneRequiredWithoutVisionInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ActiveVisionOnPremiseUpdateManyWithoutVisionInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutTimelineInput: ["create", "connectOrCreate", "connect"],
  PremisesOnTimelinesCreateNestedManyWithoutTimelineInput: ["create", "connectOrCreate", "createMany", "connect"],
  TagsOnTimelinesCreateNestedManyWithoutTimelineInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutTimelineInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PremisesOnTimelinesUpdateManyWithoutTimelineInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TagsOnTimelinesUpdateManyWithoutTimelineInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TagsOnPremisesCreateNestedManyWithoutTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  TagsOnTimelinesCreateNestedManyWithoutTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  TagsOnPremisesUpdateManyWithoutTagInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TagsOnTimelinesUpdateManyWithoutTagInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PremiseCreateNestedOneWithoutActiveVisionOnPremiseInput: ["create", "connectOrCreate", "connect"],
  VisionCreateNestedOneWithoutActiveVisionOnPremiseInput: ["create", "connectOrCreate", "connect"],
  PremiseUpdateOneRequiredWithoutActiveVisionOnPremiseInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  VisionUpdateOneRequiredWithoutActiveVisionOnPremiseInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TagCreateNestedOneWithoutTagsOnPremisesInput: ["create", "connectOrCreate", "connect"],
  PremiseCreateNestedOneWithoutTagsOnPremisesInput: ["create", "connectOrCreate", "connect"],
  TagUpdateOneRequiredWithoutTagsOnPremisesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PremiseUpdateOneRequiredWithoutTagsOnPremisesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TagCreateNestedOneWithoutTagsOnTimelinesInput: ["create", "connectOrCreate", "connect"],
  TimelineCreateNestedOneWithoutTagsOnTimelinesInput: ["create", "connectOrCreate", "connect"],
  TagUpdateOneRequiredWithoutTagsOnTimelinesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TimelineCreateNestedOneWithoutPremisesOnTimelinesInput: ["create", "connectOrCreate", "connect"],
  PremiseCreateNestedOneWithoutPremisesOnTimelinesInput: ["create", "connectOrCreate", "connect"],
  TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PremiseCreateNestedOneWithoutThreadInput: ["create", "connectOrCreate", "connect"],
  ThreadCreateNestedOneWithoutChildThreadsInput: ["create", "connectOrCreate", "connect"],
  ThreadCreateNestedManyWithoutParentThreadInput: ["create", "connectOrCreate", "createMany", "connect"],
  PremiseUpdateOneRequiredWithoutThreadInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ThreadUpdateOneWithoutChildThreadsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ThreadUpdateManyWithoutParentThreadInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumPremiseStatusFilter: ["equals", "in", "notIn", "not"],
  NestedEnumPremiseStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PremiseCreateWithoutAuthorInput: ["id", "title", "createdAt", "updatedAt", "status", "vision", "thread", "premisesOnTimelines", "tagsOnPremises", "activeVisionOnPremise"],
  PremiseCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PremiseCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  VisionCreateWithoutAuthorInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premise", "activeVisionOnPremise"],
  VisionCreateOrConnectWithoutAuthorInput: ["where", "create"],
  VisionCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  TimelineCreateWithoutAuthorInput: ["id", "title", "description", "status", "premisesOnTimelines", "tagsOnTimelines"],
  TimelineCreateOrConnectWithoutAuthorInput: ["where", "create"],
  TimelineCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  PremiseUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PremiseUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PremiseUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PremiseScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "createdAt", "updatedAt", "status", "authorId"],
  VisionUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  VisionUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  VisionUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  VisionScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "premiseId"],
  TimelineUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  TimelineUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  TimelineUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  TimelineScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "status", "authorId"],
  UserCreateWithoutPremiseInput: ["id", "createdAt", "email", "name", "role", "vision", "timeline"],
  UserCreateOrConnectWithoutPremiseInput: ["where", "create"],
  VisionCreateWithoutPremiseInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "activeVisionOnPremise"],
  VisionCreateOrConnectWithoutPremiseInput: ["where", "create"],
  VisionCreateManyPremiseInputEnvelope: ["data", "skipDuplicates"],
  ThreadCreateWithoutPremiseInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "parentThread", "childThreads"],
  ThreadCreateOrConnectWithoutPremiseInput: ["where", "create"],
  ThreadCreateManyPremiseInputEnvelope: ["data", "skipDuplicates"],
  PremisesOnTimelinesCreateWithoutPremiseInput: ["timeline", "assignedAt"],
  PremisesOnTimelinesCreateOrConnectWithoutPremiseInput: ["where", "create"],
  PremisesOnTimelinesCreateManyPremiseInputEnvelope: ["data", "skipDuplicates"],
  TagsOnPremisesCreateWithoutPremiseInput: ["tag", "assignedAt"],
  TagsOnPremisesCreateOrConnectWithoutPremiseInput: ["where", "create"],
  TagsOnPremisesCreateManyPremiseInputEnvelope: ["data", "skipDuplicates"],
  ActiveVisionOnPremiseCreateWithoutPremiseInput: ["vision"],
  ActiveVisionOnPremiseCreateOrConnectWithoutPremiseInput: ["where", "create"],
  ActiveVisionOnPremiseCreateManyPremiseInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutPremiseInput: ["update", "create"],
  UserUpdateWithoutPremiseInput: ["id", "createdAt", "email", "name", "role", "vision", "timeline"],
  VisionUpsertWithWhereUniqueWithoutPremiseInput: ["where", "update", "create"],
  VisionUpdateWithWhereUniqueWithoutPremiseInput: ["where", "data"],
  VisionUpdateManyWithWhereWithoutPremiseInput: ["where", "data"],
  ThreadUpsertWithWhereUniqueWithoutPremiseInput: ["where", "update", "create"],
  ThreadUpdateWithWhereUniqueWithoutPremiseInput: ["where", "data"],
  ThreadUpdateManyWithWhereWithoutPremiseInput: ["where", "data"],
  ThreadScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "activityDate", "description", "createdAt", "reference", "premiseId", "parentThreadId"],
  PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput: ["where", "update", "create"],
  PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput: ["where", "data"],
  PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput: ["where", "data"],
  PremisesOnTimelinesScalarWhereInput: ["AND", "OR", "NOT", "timelineId", "premiseId", "assignedAt"],
  TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput: ["where", "update", "create"],
  TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput: ["where", "data"],
  TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput: ["where", "data"],
  TagsOnPremisesScalarWhereInput: ["AND", "OR", "NOT", "tagId", "premiseId", "assignedAt"],
  ActiveVisionOnPremiseUpsertWithWhereUniqueWithoutPremiseInput: ["where", "update", "create"],
  ActiveVisionOnPremiseUpdateWithWhereUniqueWithoutPremiseInput: ["where", "data"],
  ActiveVisionOnPremiseUpdateManyWithWhereWithoutPremiseInput: ["where", "data"],
  ActiveVisionOnPremiseScalarWhereInput: ["AND", "OR", "NOT", "premiseId", "visionId"],
  UserCreateWithoutVisionInput: ["id", "createdAt", "email", "name", "role", "premise", "timeline"],
  UserCreateOrConnectWithoutVisionInput: ["where", "create"],
  PremiseCreateWithoutVisionInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "thread", "premisesOnTimelines", "tagsOnPremises", "activeVisionOnPremise"],
  PremiseCreateOrConnectWithoutVisionInput: ["where", "create"],
  ActiveVisionOnPremiseCreateWithoutVisionInput: ["premise"],
  ActiveVisionOnPremiseCreateOrConnectWithoutVisionInput: ["where", "create"],
  ActiveVisionOnPremiseCreateManyVisionInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutVisionInput: ["update", "create"],
  UserUpdateWithoutVisionInput: ["id", "createdAt", "email", "name", "role", "premise", "timeline"],
  PremiseUpsertWithoutVisionInput: ["update", "create"],
  PremiseUpdateWithoutVisionInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "thread", "premisesOnTimelines", "tagsOnPremises", "activeVisionOnPremise"],
  ActiveVisionOnPremiseUpsertWithWhereUniqueWithoutVisionInput: ["where", "update", "create"],
  ActiveVisionOnPremiseUpdateWithWhereUniqueWithoutVisionInput: ["where", "data"],
  ActiveVisionOnPremiseUpdateManyWithWhereWithoutVisionInput: ["where", "data"],
  UserCreateWithoutTimelineInput: ["id", "createdAt", "email", "name", "role", "premise", "vision"],
  UserCreateOrConnectWithoutTimelineInput: ["where", "create"],
  PremisesOnTimelinesCreateWithoutTimelineInput: ["premise", "assignedAt"],
  PremisesOnTimelinesCreateOrConnectWithoutTimelineInput: ["where", "create"],
  PremisesOnTimelinesCreateManyTimelineInputEnvelope: ["data", "skipDuplicates"],
  TagsOnTimelinesCreateWithoutTimelineInput: ["tag", "assignedAt"],
  TagsOnTimelinesCreateOrConnectWithoutTimelineInput: ["where", "create"],
  TagsOnTimelinesCreateManyTimelineInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutTimelineInput: ["update", "create"],
  UserUpdateWithoutTimelineInput: ["id", "createdAt", "email", "name", "role", "premise", "vision"],
  PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput: ["where", "update", "create"],
  PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput: ["where", "data"],
  PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput: ["where", "data"],
  TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput: ["where", "update", "create"],
  TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput: ["where", "data"],
  TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput: ["where", "data"],
  TagsOnTimelinesScalarWhereInput: ["AND", "OR", "NOT", "tagId", "timelineId", "assignedAt"],
  TagsOnPremisesCreateWithoutTagInput: ["premise", "assignedAt"],
  TagsOnPremisesCreateOrConnectWithoutTagInput: ["where", "create"],
  TagsOnPremisesCreateManyTagInputEnvelope: ["data", "skipDuplicates"],
  TagsOnTimelinesCreateWithoutTagInput: ["timeline", "assignedAt"],
  TagsOnTimelinesCreateOrConnectWithoutTagInput: ["where", "create"],
  TagsOnTimelinesCreateManyTagInputEnvelope: ["data", "skipDuplicates"],
  TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput: ["where", "update", "create"],
  TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput: ["where", "data"],
  TagsOnPremisesUpdateManyWithWhereWithoutTagInput: ["where", "data"],
  TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput: ["where", "update", "create"],
  TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput: ["where", "data"],
  TagsOnTimelinesUpdateManyWithWhereWithoutTagInput: ["where", "data"],
  PremiseCreateWithoutActiveVisionOnPremiseInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "thread", "premisesOnTimelines", "tagsOnPremises"],
  PremiseCreateOrConnectWithoutActiveVisionOnPremiseInput: ["where", "create"],
  VisionCreateWithoutActiveVisionOnPremiseInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "premise"],
  VisionCreateOrConnectWithoutActiveVisionOnPremiseInput: ["where", "create"],
  PremiseUpsertWithoutActiveVisionOnPremiseInput: ["update", "create"],
  PremiseUpdateWithoutActiveVisionOnPremiseInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "thread", "premisesOnTimelines", "tagsOnPremises"],
  VisionUpsertWithoutActiveVisionOnPremiseInput: ["update", "create"],
  VisionUpdateWithoutActiveVisionOnPremiseInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "premise"],
  TagCreateWithoutTagsOnPremisesInput: ["label", "tagsOnTimelines"],
  TagCreateOrConnectWithoutTagsOnPremisesInput: ["where", "create"],
  PremiseCreateWithoutTagsOnPremisesInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "thread", "premisesOnTimelines", "activeVisionOnPremise"],
  PremiseCreateOrConnectWithoutTagsOnPremisesInput: ["where", "create"],
  TagUpsertWithoutTagsOnPremisesInput: ["update", "create"],
  TagUpdateWithoutTagsOnPremisesInput: ["label", "tagsOnTimelines"],
  PremiseUpsertWithoutTagsOnPremisesInput: ["update", "create"],
  PremiseUpdateWithoutTagsOnPremisesInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "thread", "premisesOnTimelines", "activeVisionOnPremise"],
  TagCreateWithoutTagsOnTimelinesInput: ["label", "tagsOnPremises"],
  TagCreateOrConnectWithoutTagsOnTimelinesInput: ["where", "create"],
  TimelineCreateWithoutTagsOnTimelinesInput: ["id", "title", "description", "status", "author", "premisesOnTimelines"],
  TimelineCreateOrConnectWithoutTagsOnTimelinesInput: ["where", "create"],
  TagUpsertWithoutTagsOnTimelinesInput: ["update", "create"],
  TagUpdateWithoutTagsOnTimelinesInput: ["label", "tagsOnPremises"],
  TimelineUpsertWithoutTagsOnTimelinesInput: ["update", "create"],
  TimelineUpdateWithoutTagsOnTimelinesInput: ["id", "title", "description", "status", "author", "premisesOnTimelines"],
  TimelineCreateWithoutPremisesOnTimelinesInput: ["id", "title", "description", "status", "author", "tagsOnTimelines"],
  TimelineCreateOrConnectWithoutPremisesOnTimelinesInput: ["where", "create"],
  PremiseCreateWithoutPremisesOnTimelinesInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "thread", "tagsOnPremises", "activeVisionOnPremise"],
  PremiseCreateOrConnectWithoutPremisesOnTimelinesInput: ["where", "create"],
  TimelineUpsertWithoutPremisesOnTimelinesInput: ["update", "create"],
  TimelineUpdateWithoutPremisesOnTimelinesInput: ["id", "title", "description", "status", "author", "tagsOnTimelines"],
  PremiseUpsertWithoutPremisesOnTimelinesInput: ["update", "create"],
  PremiseUpdateWithoutPremisesOnTimelinesInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "thread", "tagsOnPremises", "activeVisionOnPremise"],
  PremiseCreateWithoutThreadInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "premisesOnTimelines", "tagsOnPremises", "activeVisionOnPremise"],
  PremiseCreateOrConnectWithoutThreadInput: ["where", "create"],
  ThreadCreateWithoutChildThreadsInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premise", "parentThread"],
  ThreadCreateOrConnectWithoutChildThreadsInput: ["where", "create"],
  ThreadCreateWithoutParentThreadInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premise", "childThreads"],
  ThreadCreateOrConnectWithoutParentThreadInput: ["where", "create"],
  ThreadCreateManyParentThreadInputEnvelope: ["data", "skipDuplicates"],
  PremiseUpsertWithoutThreadInput: ["update", "create"],
  PremiseUpdateWithoutThreadInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "premisesOnTimelines", "tagsOnPremises", "activeVisionOnPremise"],
  ThreadUpsertWithoutChildThreadsInput: ["update", "create"],
  ThreadUpdateWithoutChildThreadsInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premise", "parentThread"],
  ThreadUpsertWithWhereUniqueWithoutParentThreadInput: ["where", "update", "create"],
  ThreadUpdateWithWhereUniqueWithoutParentThreadInput: ["where", "data"],
  ThreadUpdateManyWithWhereWithoutParentThreadInput: ["where", "data"],
  PremiseCreateManyAuthorInput: ["id", "title", "createdAt", "updatedAt", "status"],
  VisionCreateManyAuthorInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premiseId"],
  TimelineCreateManyAuthorInput: ["id", "title", "description", "status"],
  PremiseUpdateWithoutAuthorInput: ["id", "title", "createdAt", "updatedAt", "status", "vision", "thread", "premisesOnTimelines", "tagsOnPremises", "activeVisionOnPremise"],
  VisionUpdateWithoutAuthorInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premise", "activeVisionOnPremise"],
  TimelineUpdateWithoutAuthorInput: ["id", "title", "description", "status", "premisesOnTimelines", "tagsOnTimelines"],
  VisionCreateManyPremiseInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId"],
  ThreadCreateManyPremiseInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "parentThreadId"],
  PremisesOnTimelinesCreateManyPremiseInput: ["timelineId", "assignedAt"],
  TagsOnPremisesCreateManyPremiseInput: ["tagId", "assignedAt"],
  ActiveVisionOnPremiseCreateManyPremiseInput: ["visionId"],
  VisionUpdateWithoutPremiseInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "activeVisionOnPremise"],
  ThreadUpdateWithoutPremiseInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "parentThread", "childThreads"],
  PremisesOnTimelinesUpdateWithoutPremiseInput: ["timeline", "assignedAt"],
  TagsOnPremisesUpdateWithoutPremiseInput: ["tag", "assignedAt"],
  ActiveVisionOnPremiseUpdateWithoutPremiseInput: ["vision"],
  ActiveVisionOnPremiseCreateManyVisionInput: ["premiseId"],
  ActiveVisionOnPremiseUpdateWithoutVisionInput: ["premise"],
  PremisesOnTimelinesCreateManyTimelineInput: ["premiseId", "assignedAt"],
  TagsOnTimelinesCreateManyTimelineInput: ["tagId", "assignedAt"],
  PremisesOnTimelinesUpdateWithoutTimelineInput: ["premise", "assignedAt"],
  TagsOnTimelinesUpdateWithoutTimelineInput: ["tag", "assignedAt"],
  TagsOnPremisesCreateManyTagInput: ["premiseId", "assignedAt"],
  TagsOnTimelinesCreateManyTagInput: ["timelineId", "assignedAt"],
  TagsOnPremisesUpdateWithoutTagInput: ["premise", "assignedAt"],
  TagsOnTimelinesUpdateWithoutTagInput: ["timeline", "assignedAt"],
  ThreadCreateManyParentThreadInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premiseId"],
  ThreadUpdateWithoutParentThreadInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premise", "childThreads"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

