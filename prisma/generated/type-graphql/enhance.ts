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
  Account: crudResolvers.AccountCrudResolver,
  Session: crudResolvers.SessionCrudResolver,
  User: crudResolvers.UserCrudResolver,
  VerificationToken: crudResolvers.VerificationTokenCrudResolver,
  Premise: crudResolvers.PremiseCrudResolver,
  Vision: crudResolvers.VisionCrudResolver,
  Timeline: crudResolvers.TimelineCrudResolver,
  Tag: crudResolvers.TagCrudResolver,
  TagsOnPremises: crudResolvers.TagsOnPremisesCrudResolver,
  TagsOnTimelines: crudResolvers.TagsOnTimelinesCrudResolver,
  PremisesOnTimelines: crudResolvers.PremisesOnTimelinesCrudResolver,
  Snapshot: crudResolvers.SnapshotCrudResolver,
  Thread: crudResolvers.ThreadCrudResolver,
  ThreadsOnPremise: crudResolvers.ThreadsOnPremiseCrudResolver,
  ThreadsOnTimeline: crudResolvers.ThreadsOnTimelineCrudResolver,
  ThreadsOnVision: crudResolvers.ThreadsOnVisionCrudResolver
};
const actionResolversMap = {
  Account: {
    account: actionResolvers.FindUniqueAccountResolver,
    findFirstAccount: actionResolvers.FindFirstAccountResolver,
    accounts: actionResolvers.FindManyAccountResolver,
    createAccount: actionResolvers.CreateAccountResolver,
    createManyAccount: actionResolvers.CreateManyAccountResolver,
    deleteAccount: actionResolvers.DeleteAccountResolver,
    updateAccount: actionResolvers.UpdateAccountResolver,
    deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
    updateManyAccount: actionResolvers.UpdateManyAccountResolver,
    upsertAccount: actionResolvers.UpsertAccountResolver,
    aggregateAccount: actionResolvers.AggregateAccountResolver,
    groupByAccount: actionResolvers.GroupByAccountResolver
  },
  Session: {
    session: actionResolvers.FindUniqueSessionResolver,
    findFirstSession: actionResolvers.FindFirstSessionResolver,
    sessions: actionResolvers.FindManySessionResolver,
    createSession: actionResolvers.CreateSessionResolver,
    createManySession: actionResolvers.CreateManySessionResolver,
    deleteSession: actionResolvers.DeleteSessionResolver,
    updateSession: actionResolvers.UpdateSessionResolver,
    deleteManySession: actionResolvers.DeleteManySessionResolver,
    updateManySession: actionResolvers.UpdateManySessionResolver,
    upsertSession: actionResolvers.UpsertSessionResolver,
    aggregateSession: actionResolvers.AggregateSessionResolver,
    groupBySession: actionResolvers.GroupBySessionResolver
  },
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
  VerificationToken: {
    verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
    findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
    verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
    createVerificationToken: actionResolvers.CreateVerificationTokenResolver,
    createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
    deleteVerificationToken: actionResolvers.DeleteVerificationTokenResolver,
    updateVerificationToken: actionResolvers.UpdateVerificationTokenResolver,
    deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
    updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
    upsertVerificationToken: actionResolvers.UpsertVerificationTokenResolver,
    aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
    groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver
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
  },
  ThreadsOnPremise: {
    threadsOnPremise: actionResolvers.FindUniqueThreadsOnPremiseResolver,
    findFirstThreadsOnPremise: actionResolvers.FindFirstThreadsOnPremiseResolver,
    threadsOnPremises: actionResolvers.FindManyThreadsOnPremiseResolver,
    createThreadsOnPremise: actionResolvers.CreateThreadsOnPremiseResolver,
    createManyThreadsOnPremise: actionResolvers.CreateManyThreadsOnPremiseResolver,
    deleteThreadsOnPremise: actionResolvers.DeleteThreadsOnPremiseResolver,
    updateThreadsOnPremise: actionResolvers.UpdateThreadsOnPremiseResolver,
    deleteManyThreadsOnPremise: actionResolvers.DeleteManyThreadsOnPremiseResolver,
    updateManyThreadsOnPremise: actionResolvers.UpdateManyThreadsOnPremiseResolver,
    upsertThreadsOnPremise: actionResolvers.UpsertThreadsOnPremiseResolver,
    aggregateThreadsOnPremise: actionResolvers.AggregateThreadsOnPremiseResolver,
    groupByThreadsOnPremise: actionResolvers.GroupByThreadsOnPremiseResolver
  },
  ThreadsOnTimeline: {
    threadsOnTimeline: actionResolvers.FindUniqueThreadsOnTimelineResolver,
    findFirstThreadsOnTimeline: actionResolvers.FindFirstThreadsOnTimelineResolver,
    threadsOnTimelines: actionResolvers.FindManyThreadsOnTimelineResolver,
    createThreadsOnTimeline: actionResolvers.CreateThreadsOnTimelineResolver,
    createManyThreadsOnTimeline: actionResolvers.CreateManyThreadsOnTimelineResolver,
    deleteThreadsOnTimeline: actionResolvers.DeleteThreadsOnTimelineResolver,
    updateThreadsOnTimeline: actionResolvers.UpdateThreadsOnTimelineResolver,
    deleteManyThreadsOnTimeline: actionResolvers.DeleteManyThreadsOnTimelineResolver,
    updateManyThreadsOnTimeline: actionResolvers.UpdateManyThreadsOnTimelineResolver,
    upsertThreadsOnTimeline: actionResolvers.UpsertThreadsOnTimelineResolver,
    aggregateThreadsOnTimeline: actionResolvers.AggregateThreadsOnTimelineResolver,
    groupByThreadsOnTimeline: actionResolvers.GroupByThreadsOnTimelineResolver
  },
  ThreadsOnVision: {
    threadsOnVision: actionResolvers.FindUniqueThreadsOnVisionResolver,
    findFirstThreadsOnVision: actionResolvers.FindFirstThreadsOnVisionResolver,
    threadsOnVisions: actionResolvers.FindManyThreadsOnVisionResolver,
    createThreadsOnVision: actionResolvers.CreateThreadsOnVisionResolver,
    createManyThreadsOnVision: actionResolvers.CreateManyThreadsOnVisionResolver,
    deleteThreadsOnVision: actionResolvers.DeleteThreadsOnVisionResolver,
    updateThreadsOnVision: actionResolvers.UpdateThreadsOnVisionResolver,
    deleteManyThreadsOnVision: actionResolvers.DeleteManyThreadsOnVisionResolver,
    updateManyThreadsOnVision: actionResolvers.UpdateManyThreadsOnVisionResolver,
    upsertThreadsOnVision: actionResolvers.UpsertThreadsOnVisionResolver,
    aggregateThreadsOnVision: actionResolvers.AggregateThreadsOnVisionResolver,
    groupByThreadsOnVision: actionResolvers.GroupByThreadsOnVisionResolver
  }
};
const crudResolversInfo = {
  Account: ["account", "findFirstAccount", "accounts", "createAccount", "createManyAccount", "deleteAccount", "updateAccount", "deleteManyAccount", "updateManyAccount", "upsertAccount", "aggregateAccount", "groupByAccount"],
  Session: ["session", "findFirstSession", "sessions", "createSession", "createManySession", "deleteSession", "updateSession", "deleteManySession", "updateManySession", "upsertSession", "aggregateSession", "groupBySession"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  VerificationToken: ["verificationToken", "findFirstVerificationToken", "verificationTokens", "createVerificationToken", "createManyVerificationToken", "deleteVerificationToken", "updateVerificationToken", "deleteManyVerificationToken", "updateManyVerificationToken", "upsertVerificationToken", "aggregateVerificationToken", "groupByVerificationToken"],
  Premise: ["premise", "findFirstPremise", "premises", "createPremise", "createManyPremise", "deletePremise", "updatePremise", "deleteManyPremise", "updateManyPremise", "upsertPremise", "aggregatePremise", "groupByPremise"],
  Vision: ["vision", "findFirstVision", "visions", "createVision", "createManyVision", "deleteVision", "updateVision", "deleteManyVision", "updateManyVision", "upsertVision", "aggregateVision", "groupByVision"],
  Timeline: ["timeline", "findFirstTimeline", "timelines", "createTimeline", "createManyTimeline", "deleteTimeline", "updateTimeline", "deleteManyTimeline", "updateManyTimeline", "upsertTimeline", "aggregateTimeline", "groupByTimeline"],
  Tag: ["tag", "findFirstTag", "tags", "createTag", "createManyTag", "deleteTag", "updateTag", "deleteManyTag", "updateManyTag", "upsertTag", "aggregateTag", "groupByTag"],
  TagsOnPremises: ["findUniqueTagsOnPremises", "findFirstTagsOnPremises", "findManyTagsOnPremises", "createTagsOnPremises", "createManyTagsOnPremises", "deleteTagsOnPremises", "updateTagsOnPremises", "deleteManyTagsOnPremises", "updateManyTagsOnPremises", "upsertTagsOnPremises", "aggregateTagsOnPremises", "groupByTagsOnPremises"],
  TagsOnTimelines: ["findUniqueTagsOnTimelines", "findFirstTagsOnTimelines", "findManyTagsOnTimelines", "createTagsOnTimelines", "createManyTagsOnTimelines", "deleteTagsOnTimelines", "updateTagsOnTimelines", "deleteManyTagsOnTimelines", "updateManyTagsOnTimelines", "upsertTagsOnTimelines", "aggregateTagsOnTimelines", "groupByTagsOnTimelines"],
  PremisesOnTimelines: ["findUniquePremisesOnTimelines", "findFirstPremisesOnTimelines", "findManyPremisesOnTimelines", "createPremisesOnTimelines", "createManyPremisesOnTimelines", "deletePremisesOnTimelines", "updatePremisesOnTimelines", "deleteManyPremisesOnTimelines", "updateManyPremisesOnTimelines", "upsertPremisesOnTimelines", "aggregatePremisesOnTimelines", "groupByPremisesOnTimelines"],
  Snapshot: ["snapshot", "findFirstSnapshot", "snapshots", "createSnapshot", "createManySnapshot", "deleteSnapshot", "updateSnapshot", "deleteManySnapshot", "updateManySnapshot", "upsertSnapshot", "aggregateSnapshot", "groupBySnapshot"],
  Thread: ["thread", "findFirstThread", "threads", "createThread", "createManyThread", "deleteThread", "updateThread", "deleteManyThread", "updateManyThread", "upsertThread", "aggregateThread", "groupByThread"],
  ThreadsOnPremise: ["threadsOnPremise", "findFirstThreadsOnPremise", "threadsOnPremises", "createThreadsOnPremise", "createManyThreadsOnPremise", "deleteThreadsOnPremise", "updateThreadsOnPremise", "deleteManyThreadsOnPremise", "updateManyThreadsOnPremise", "upsertThreadsOnPremise", "aggregateThreadsOnPremise", "groupByThreadsOnPremise"],
  ThreadsOnTimeline: ["threadsOnTimeline", "findFirstThreadsOnTimeline", "threadsOnTimelines", "createThreadsOnTimeline", "createManyThreadsOnTimeline", "deleteThreadsOnTimeline", "updateThreadsOnTimeline", "deleteManyThreadsOnTimeline", "updateManyThreadsOnTimeline", "upsertThreadsOnTimeline", "aggregateThreadsOnTimeline", "groupByThreadsOnTimeline"],
  ThreadsOnVision: ["threadsOnVision", "findFirstThreadsOnVision", "threadsOnVisions", "createThreadsOnVision", "createManyThreadsOnVision", "deleteThreadsOnVision", "updateThreadsOnVision", "deleteManyThreadsOnVision", "updateManyThreadsOnVision", "upsertThreadsOnVision", "aggregateThreadsOnVision", "groupByThreadsOnVision"]
};
const argsInfo = {
  FindUniqueAccountArgs: ["where"],
  FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAccountArgs: ["data"],
  CreateManyAccountArgs: ["data", "skipDuplicates"],
  DeleteAccountArgs: ["where"],
  UpdateAccountArgs: ["data", "where"],
  DeleteManyAccountArgs: ["where"],
  UpdateManyAccountArgs: ["data", "where"],
  UpsertAccountArgs: ["where", "create", "update"],
  AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSessionArgs: ["where"],
  FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSessionArgs: ["data"],
  CreateManySessionArgs: ["data", "skipDuplicates"],
  DeleteSessionArgs: ["where"],
  UpdateSessionArgs: ["data", "where"],
  DeleteManySessionArgs: ["where"],
  UpdateManySessionArgs: ["data", "where"],
  UpsertSessionArgs: ["where", "create", "update"],
  AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  FindUniqueVerificationTokenArgs: ["where"],
  FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateVerificationTokenArgs: ["data"],
  CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
  DeleteVerificationTokenArgs: ["where"],
  UpdateVerificationTokenArgs: ["data", "where"],
  DeleteManyVerificationTokenArgs: ["where"],
  UpdateManyVerificationTokenArgs: ["data", "where"],
  UpsertVerificationTokenArgs: ["where", "create", "update"],
  AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  GroupByThreadArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueThreadsOnPremiseArgs: ["where"],
  FindFirstThreadsOnPremiseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyThreadsOnPremiseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateThreadsOnPremiseArgs: ["data"],
  CreateManyThreadsOnPremiseArgs: ["data", "skipDuplicates"],
  DeleteThreadsOnPremiseArgs: ["where"],
  UpdateThreadsOnPremiseArgs: ["data", "where"],
  DeleteManyThreadsOnPremiseArgs: ["where"],
  UpdateManyThreadsOnPremiseArgs: ["data", "where"],
  UpsertThreadsOnPremiseArgs: ["where", "create", "update"],
  AggregateThreadsOnPremiseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByThreadsOnPremiseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueThreadsOnTimelineArgs: ["where"],
  FindFirstThreadsOnTimelineArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyThreadsOnTimelineArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateThreadsOnTimelineArgs: ["data"],
  CreateManyThreadsOnTimelineArgs: ["data", "skipDuplicates"],
  DeleteThreadsOnTimelineArgs: ["where"],
  UpdateThreadsOnTimelineArgs: ["data", "where"],
  DeleteManyThreadsOnTimelineArgs: ["where"],
  UpdateManyThreadsOnTimelineArgs: ["data", "where"],
  UpsertThreadsOnTimelineArgs: ["where", "create", "update"],
  AggregateThreadsOnTimelineArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByThreadsOnTimelineArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueThreadsOnVisionArgs: ["where"],
  FindFirstThreadsOnVisionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyThreadsOnVisionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateThreadsOnVisionArgs: ["data"],
  CreateManyThreadsOnVisionArgs: ["data", "skipDuplicates"],
  DeleteThreadsOnVisionArgs: ["where"],
  UpdateThreadsOnVisionArgs: ["data", "where"],
  DeleteManyThreadsOnVisionArgs: ["where"],
  UpdateManyThreadsOnVisionArgs: ["data", "where"],
  UpsertThreadsOnVisionArgs: ["where", "create", "update"],
  AggregateThreadsOnVisionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByThreadsOnVisionArgs: ["where", "orderBy", "by", "having", "take", "skip"]
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
  Account: relationResolvers.AccountRelationsResolver,
  Session: relationResolvers.SessionRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Premise: relationResolvers.PremiseRelationsResolver,
  Vision: relationResolvers.VisionRelationsResolver,
  Timeline: relationResolvers.TimelineRelationsResolver,
  Tag: relationResolvers.TagRelationsResolver,
  TagsOnPremises: relationResolvers.TagsOnPremisesRelationsResolver,
  TagsOnTimelines: relationResolvers.TagsOnTimelinesRelationsResolver,
  PremisesOnTimelines: relationResolvers.PremisesOnTimelinesRelationsResolver,
  Thread: relationResolvers.ThreadRelationsResolver,
  ThreadsOnPremise: relationResolvers.ThreadsOnPremiseRelationsResolver,
  ThreadsOnTimeline: relationResolvers.ThreadsOnTimelineRelationsResolver,
  ThreadsOnVision: relationResolvers.ThreadsOnVisionRelationsResolver
};
const relationResolversInfo = {
  Account: ["user"],
  Session: ["user"],
  User: ["accounts", "sessions", "premise", "thread", "vision", "timeline"],
  Premise: ["author", "vision", "premisesOnTimelines", "tagsOnPremises", "threadsOnPremise"],
  Vision: ["author", "premise", "prevVision", "nextVision", "threadsOnVision"],
  Timeline: ["author", "premisesOnTimelines", "tagsOnTimelines", "threadsOnTimeline"],
  Tag: ["tagsOnPremises", "tagsOnTimelines"],
  TagsOnPremises: ["tag", "premise"],
  TagsOnTimelines: ["tag", "timeline"],
  PremisesOnTimelines: ["timeline", "premise"],
  Thread: ["author", "parentThread", "childThreads", "threadsOnPremise", "threadsOnTimeline", "threadsOnVision"],
  ThreadsOnPremise: ["thread", "premise"],
  ThreadsOnTimeline: ["thread", "timeline"],
  ThreadsOnVision: ["thread", "vision"]
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
  Account: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  Session: ["id", "sessionToken", "userId", "expires"],
  User: ["id", "name", "email", "emailVerified", "image"],
  VerificationToken: ["identifier", "token", "expires"],
  Premise: ["id", "title", "createdAt", "updatedAt", "status", "authorId"],
  Vision: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "thumbnail", "premiseId", "draftMode", "prevVisionId"],
  Timeline: ["id", "title", "description", "status", "authorId"],
  Tag: ["id", "label"],
  TagsOnPremises: ["tagId", "premiseId", "assignedAt"],
  TagsOnTimelines: ["tagId", "timelineId", "assignedAt"],
  PremisesOnTimelines: ["timelineId", "premiseId", "assignedAt"],
  Snapshot: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption"],
  Thread: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "parentThreadId"],
  ThreadsOnPremise: ["threadId", "premiseId", "assignedAt"],
  ThreadsOnTimeline: ["threadId", "timelineId", "assignedAt"],
  ThreadsOnVision: ["threadId", "visionId", "assignedAt"]
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
  AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
  AccountGroupBy: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSession: ["_count", "_min", "_max"],
  SessionGroupBy: ["id", "sessionToken", "userId", "expires", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "name", "email", "emailVerified", "image", "_count", "_min", "_max"],
  AggregateVerificationToken: ["_count", "_min", "_max"],
  VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
  AggregatePremise: ["_count", "_min", "_max"],
  PremiseGroupBy: ["id", "title", "createdAt", "updatedAt", "status", "authorId", "_count", "_min", "_max"],
  AggregateVision: ["_count", "_min", "_max"],
  VisionGroupBy: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "thumbnail", "premiseId", "draftMode", "prevVisionId", "_count", "_min", "_max"],
  AggregateTimeline: ["_count", "_min", "_max"],
  TimelineGroupBy: ["id", "title", "description", "status", "authorId", "_count", "_min", "_max"],
  AggregateTag: ["_count", "_avg", "_sum", "_min", "_max"],
  TagGroupBy: ["id", "label", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTagsOnPremises: ["_count", "_avg", "_sum", "_min", "_max"],
  TagsOnPremisesGroupBy: ["tagId", "premiseId", "assignedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTagsOnTimelines: ["_count", "_avg", "_sum", "_min", "_max"],
  TagsOnTimelinesGroupBy: ["tagId", "timelineId", "assignedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePremisesOnTimelines: ["_count", "_min", "_max"],
  PremisesOnTimelinesGroupBy: ["timelineId", "premiseId", "assignedAt", "_count", "_min", "_max"],
  AggregateSnapshot: ["_count", "_min", "_max"],
  SnapshotGroupBy: ["id", "createdAt", "versionId", "url", "sourceUrl", "caption", "_count", "_min", "_max"],
  AggregateThread: ["_count", "_min", "_max"],
  ThreadGroupBy: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "parentThreadId", "_count", "_min", "_max"],
  AggregateThreadsOnPremise: ["_count", "_min", "_max"],
  ThreadsOnPremiseGroupBy: ["threadId", "premiseId", "assignedAt", "_count", "_min", "_max"],
  AggregateThreadsOnTimeline: ["_count", "_min", "_max"],
  ThreadsOnTimelineGroupBy: ["threadId", "timelineId", "assignedAt", "_count", "_min", "_max"],
  AggregateThreadsOnVision: ["_count", "_min", "_max"],
  ThreadsOnVisionGroupBy: ["threadId", "visionId", "assignedAt", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  AccountCountAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_all"],
  AccountAvgAggregate: ["expires_at"],
  AccountSumAggregate: ["expires_at"],
  AccountMinAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountMaxAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCountAggregate: ["id", "sessionToken", "userId", "expires", "_all"],
  SessionMinAggregate: ["id", "sessionToken", "userId", "expires"],
  SessionMaxAggregate: ["id", "sessionToken", "userId", "expires"],
  UserCount: ["accounts", "sessions", "premise", "thread", "vision", "timeline"],
  UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "_all"],
  UserMinAggregate: ["id", "name", "email", "emailVerified", "image"],
  UserMaxAggregate: ["id", "name", "email", "emailVerified", "image"],
  VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
  VerificationTokenMinAggregate: ["identifier", "token", "expires"],
  VerificationTokenMaxAggregate: ["identifier", "token", "expires"],
  PremiseCount: ["vision", "premisesOnTimelines", "tagsOnPremises", "threadsOnPremise"],
  PremiseCountAggregate: ["id", "title", "createdAt", "updatedAt", "status", "authorId", "_all"],
  PremiseMinAggregate: ["id", "title", "createdAt", "updatedAt", "status", "authorId"],
  PremiseMaxAggregate: ["id", "title", "createdAt", "updatedAt", "status", "authorId"],
  VisionCount: ["nextVision", "threadsOnVision"],
  VisionCountAggregate: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "thumbnail", "premiseId", "draftMode", "prevVisionId", "_all"],
  VisionMinAggregate: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "thumbnail", "premiseId", "draftMode", "prevVisionId"],
  VisionMaxAggregate: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "thumbnail", "premiseId", "draftMode", "prevVisionId"],
  TimelineCount: ["premisesOnTimelines", "tagsOnTimelines", "threadsOnTimeline"],
  TimelineCountAggregate: ["id", "title", "description", "status", "authorId", "_all"],
  TimelineMinAggregate: ["id", "title", "description", "status", "authorId"],
  TimelineMaxAggregate: ["id", "title", "description", "status", "authorId"],
  TagCount: ["tagsOnPremises", "tagsOnTimelines"],
  TagCountAggregate: ["id", "label", "_all"],
  TagAvgAggregate: ["id"],
  TagSumAggregate: ["id"],
  TagMinAggregate: ["id", "label"],
  TagMaxAggregate: ["id", "label"],
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
  ThreadCountAggregate: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "parentThreadId", "_all"],
  ThreadMinAggregate: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "parentThreadId"],
  ThreadMaxAggregate: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "parentThreadId"],
  ThreadsOnPremiseCountAggregate: ["threadId", "premiseId", "assignedAt", "_all"],
  ThreadsOnPremiseMinAggregate: ["threadId", "premiseId", "assignedAt"],
  ThreadsOnPremiseMaxAggregate: ["threadId", "premiseId", "assignedAt"],
  ThreadsOnTimelineCountAggregate: ["threadId", "timelineId", "assignedAt", "_all"],
  ThreadsOnTimelineMinAggregate: ["threadId", "timelineId", "assignedAt"],
  ThreadsOnTimelineMaxAggregate: ["threadId", "timelineId", "assignedAt"],
  ThreadsOnVisionCountAggregate: ["threadId", "visionId", "assignedAt", "_all"],
  ThreadsOnVisionMinAggregate: ["threadId", "visionId", "assignedAt"],
  ThreadsOnVisionMaxAggregate: ["threadId", "visionId", "assignedAt"]
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
  AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountOrderByWithRelationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountWhereUniqueInput: ["id", "provider_providerAccountId"],
  AccountOrderByWithAggregationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_max", "_min", "_sum"],
  AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires", "user"],
  SessionOrderByWithRelationInput: ["id", "sessionToken", "userId", "expires", "user"],
  SessionWhereUniqueInput: ["id", "sessionToken"],
  SessionOrderByWithAggregationInput: ["id", "sessionToken", "userId", "expires", "_count", "_max", "_min"],
  SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "accounts", "sessions", "premise", "thread", "vision", "timeline"],
  UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "premise", "thread", "vision", "timeline"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image"],
  VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
  VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
  VerificationTokenWhereUniqueInput: ["token", "identifier_token"],
  VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
  VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
  PremiseWhereInput: ["AND", "OR", "NOT", "id", "title", "createdAt", "updatedAt", "status", "author", "authorId", "vision", "premisesOnTimelines", "tagsOnPremises", "threadsOnPremise"],
  PremiseOrderByWithRelationInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "authorId", "vision", "premisesOnTimelines", "tagsOnPremises", "threadsOnPremise"],
  PremiseWhereUniqueInput: ["id"],
  PremiseOrderByWithAggregationInput: ["id", "title", "createdAt", "updatedAt", "status", "authorId", "_count", "_max", "_min"],
  PremiseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "createdAt", "updatedAt", "status", "authorId"],
  VisionWhereInput: ["AND", "OR", "NOT", "id", "title", "activityDate", "description", "createdAt", "reference", "author", "authorId", "premise", "thumbnail", "premiseId", "draftMode", "prevVisionId", "prevVision", "nextVision", "threadsOnVision"],
  VisionOrderByWithRelationInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "authorId", "premise", "thumbnail", "premiseId", "draftMode", "prevVisionId", "prevVision", "nextVision", "threadsOnVision"],
  VisionWhereUniqueInput: ["id"],
  VisionOrderByWithAggregationInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "thumbnail", "premiseId", "draftMode", "prevVisionId", "_count", "_max", "_min"],
  VisionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "thumbnail", "premiseId", "draftMode", "prevVisionId"],
  TimelineWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "status", "author", "authorId", "premisesOnTimelines", "tagsOnTimelines", "threadsOnTimeline"],
  TimelineOrderByWithRelationInput: ["id", "title", "description", "status", "author", "authorId", "premisesOnTimelines", "tagsOnTimelines", "threadsOnTimeline"],
  TimelineWhereUniqueInput: ["id"],
  TimelineOrderByWithAggregationInput: ["id", "title", "description", "status", "authorId", "_count", "_max", "_min"],
  TimelineScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "status", "authorId"],
  TagWhereInput: ["AND", "OR", "NOT", "id", "label", "tagsOnPremises", "tagsOnTimelines"],
  TagOrderByWithRelationInput: ["id", "label", "tagsOnPremises", "tagsOnTimelines"],
  TagWhereUniqueInput: ["id", "label"],
  TagOrderByWithAggregationInput: ["id", "label", "_count", "_avg", "_max", "_min", "_sum"],
  TagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "label"],
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
  ThreadWhereInput: ["AND", "OR", "NOT", "id", "title", "activityDate", "description", "createdAt", "reference", "author", "authorId", "parentThreadId", "parentThread", "childThreads", "threadsOnPremise", "threadsOnTimeline", "threadsOnVision"],
  ThreadOrderByWithRelationInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "authorId", "parentThreadId", "parentThread", "childThreads", "threadsOnPremise", "threadsOnTimeline", "threadsOnVision"],
  ThreadWhereUniqueInput: ["id"],
  ThreadOrderByWithAggregationInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "parentThreadId", "_count", "_max", "_min"],
  ThreadScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "parentThreadId"],
  ThreadsOnPremiseWhereInput: ["AND", "OR", "NOT", "thread", "threadId", "premise", "premiseId", "assignedAt"],
  ThreadsOnPremiseOrderByWithRelationInput: ["thread", "threadId", "premise", "premiseId", "assignedAt"],
  ThreadsOnPremiseWhereUniqueInput: ["threadId", "threadId_premiseId"],
  ThreadsOnPremiseOrderByWithAggregationInput: ["threadId", "premiseId", "assignedAt", "_count", "_max", "_min"],
  ThreadsOnPremiseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "threadId", "premiseId", "assignedAt"],
  ThreadsOnTimelineWhereInput: ["AND", "OR", "NOT", "thread", "threadId", "timeline", "timelineId", "assignedAt"],
  ThreadsOnTimelineOrderByWithRelationInput: ["thread", "threadId", "timeline", "timelineId", "assignedAt"],
  ThreadsOnTimelineWhereUniqueInput: ["threadId", "threadId_timelineId"],
  ThreadsOnTimelineOrderByWithAggregationInput: ["threadId", "timelineId", "assignedAt", "_count", "_max", "_min"],
  ThreadsOnTimelineScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "threadId", "timelineId", "assignedAt"],
  ThreadsOnVisionWhereInput: ["AND", "OR", "NOT", "thread", "threadId", "vision", "visionId", "assignedAt"],
  ThreadsOnVisionOrderByWithRelationInput: ["thread", "threadId", "vision", "visionId", "assignedAt"],
  ThreadsOnVisionWhereUniqueInput: ["threadId", "threadId_visionId"],
  ThreadsOnVisionOrderByWithAggregationInput: ["threadId", "visionId", "assignedAt", "_count", "_max", "_min"],
  ThreadsOnVisionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "threadId", "visionId", "assignedAt"],
  AccountCreateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountUpdateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountCreateManyInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountUpdateManyMutationInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCreateInput: ["id", "sessionToken", "expires", "user"],
  SessionUpdateInput: ["id", "sessionToken", "expires", "user"],
  SessionCreateManyInput: ["id", "sessionToken", "userId", "expires"],
  SessionUpdateManyMutationInput: ["id", "sessionToken", "expires"],
  UserCreateInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "premise", "thread", "vision", "timeline"],
  UserUpdateInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "premise", "thread", "vision", "timeline"],
  UserCreateManyInput: ["id", "name", "email", "emailVerified", "image"],
  UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "image"],
  VerificationTokenCreateInput: ["identifier", "token", "expires"],
  VerificationTokenUpdateInput: ["identifier", "token", "expires"],
  VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
  VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
  PremiseCreateInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "premisesOnTimelines", "tagsOnPremises", "threadsOnPremise"],
  PremiseUpdateInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "premisesOnTimelines", "tagsOnPremises", "threadsOnPremise"],
  PremiseCreateManyInput: ["id", "title", "createdAt", "updatedAt", "status", "authorId"],
  PremiseUpdateManyMutationInput: ["id", "title", "createdAt", "updatedAt", "status"],
  VisionCreateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "premise", "thumbnail", "draftMode", "prevVision", "nextVision", "threadsOnVision"],
  VisionUpdateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "premise", "thumbnail", "draftMode", "prevVision", "nextVision", "threadsOnVision"],
  VisionCreateManyInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "thumbnail", "premiseId", "draftMode", "prevVisionId"],
  VisionUpdateManyMutationInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "thumbnail", "draftMode"],
  TimelineCreateInput: ["id", "title", "description", "status", "author", "premisesOnTimelines", "tagsOnTimelines", "threadsOnTimeline"],
  TimelineUpdateInput: ["id", "title", "description", "status", "author", "premisesOnTimelines", "tagsOnTimelines", "threadsOnTimeline"],
  TimelineCreateManyInput: ["id", "title", "description", "status", "authorId"],
  TimelineUpdateManyMutationInput: ["id", "title", "description", "status"],
  TagCreateInput: ["label", "tagsOnPremises", "tagsOnTimelines"],
  TagUpdateInput: ["label", "tagsOnPremises", "tagsOnTimelines"],
  TagCreateManyInput: ["id", "label"],
  TagUpdateManyMutationInput: ["label"],
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
  ThreadCreateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "parentThread", "childThreads", "threadsOnPremise", "threadsOnTimeline", "threadsOnVision"],
  ThreadUpdateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "parentThread", "childThreads", "threadsOnPremise", "threadsOnTimeline", "threadsOnVision"],
  ThreadCreateManyInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "parentThreadId"],
  ThreadUpdateManyMutationInput: ["id", "title", "activityDate", "description", "createdAt", "reference"],
  ThreadsOnPremiseCreateInput: ["thread", "premise", "assignedAt"],
  ThreadsOnPremiseUpdateInput: ["thread", "premise", "assignedAt"],
  ThreadsOnPremiseCreateManyInput: ["threadId", "premiseId", "assignedAt"],
  ThreadsOnPremiseUpdateManyMutationInput: ["assignedAt"],
  ThreadsOnTimelineCreateInput: ["thread", "timeline", "assignedAt"],
  ThreadsOnTimelineUpdateInput: ["thread", "timeline", "assignedAt"],
  ThreadsOnTimelineCreateManyInput: ["threadId", "timelineId", "assignedAt"],
  ThreadsOnTimelineUpdateManyMutationInput: ["assignedAt"],
  ThreadsOnVisionCreateInput: ["thread", "vision", "assignedAt"],
  ThreadsOnVisionUpdateInput: ["thread", "vision", "assignedAt"],
  ThreadsOnVisionCreateManyInput: ["threadId", "visionId", "assignedAt"],
  ThreadsOnVisionUpdateManyMutationInput: ["assignedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
  AccountCountOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountAvgOrderByAggregateInput: ["expires_at"],
  AccountMaxOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountMinOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountSumOrderByAggregateInput: ["expires_at"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SessionCountOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  SessionMaxOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  SessionMinOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  AccountListRelationFilter: ["every", "some", "none"],
  SessionListRelationFilter: ["every", "some", "none"],
  PremiseListRelationFilter: ["every", "some", "none"],
  ThreadListRelationFilter: ["every", "some", "none"],
  VisionListRelationFilter: ["every", "some", "none"],
  TimelineListRelationFilter: ["every", "some", "none"],
  AccountOrderByRelationAggregateInput: ["_count"],
  SessionOrderByRelationAggregateInput: ["_count"],
  PremiseOrderByRelationAggregateInput: ["_count"],
  ThreadOrderByRelationAggregateInput: ["_count"],
  VisionOrderByRelationAggregateInput: ["_count"],
  TimelineOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
  UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
  UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
  VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
  VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
  VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
  EnumPremiseStatusFilter: ["equals", "in", "notIn", "not"],
  PremisesOnTimelinesListRelationFilter: ["every", "some", "none"],
  TagsOnPremisesListRelationFilter: ["every", "some", "none"],
  ThreadsOnPremiseListRelationFilter: ["every", "some", "none"],
  PremisesOnTimelinesOrderByRelationAggregateInput: ["_count"],
  TagsOnPremisesOrderByRelationAggregateInput: ["_count"],
  ThreadsOnPremiseOrderByRelationAggregateInput: ["_count"],
  PremiseCountOrderByAggregateInput: ["id", "title", "createdAt", "updatedAt", "status", "authorId"],
  PremiseMaxOrderByAggregateInput: ["id", "title", "createdAt", "updatedAt", "status", "authorId"],
  PremiseMinOrderByAggregateInput: ["id", "title", "createdAt", "updatedAt", "status", "authorId"],
  EnumPremiseStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  PremiseRelationFilter: ["is", "isNot"],
  BoolFilter: ["equals", "not"],
  VisionRelationFilter: ["is", "isNot"],
  ThreadsOnVisionListRelationFilter: ["every", "some", "none"],
  ThreadsOnVisionOrderByRelationAggregateInput: ["_count"],
  VisionCountOrderByAggregateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "thumbnail", "premiseId", "draftMode", "prevVisionId"],
  VisionMaxOrderByAggregateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "thumbnail", "premiseId", "draftMode", "prevVisionId"],
  VisionMinOrderByAggregateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "thumbnail", "premiseId", "draftMode", "prevVisionId"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  TagsOnTimelinesListRelationFilter: ["every", "some", "none"],
  ThreadsOnTimelineListRelationFilter: ["every", "some", "none"],
  TagsOnTimelinesOrderByRelationAggregateInput: ["_count"],
  ThreadsOnTimelineOrderByRelationAggregateInput: ["_count"],
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
  ThreadsOnPremiseRelationFilter: ["is", "isNot"],
  ThreadsOnTimelineRelationFilter: ["is", "isNot"],
  ThreadsOnVisionRelationFilter: ["is", "isNot"],
  ThreadCountOrderByAggregateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "parentThreadId"],
  ThreadMaxOrderByAggregateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "parentThreadId"],
  ThreadMinOrderByAggregateInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "parentThreadId"],
  ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput: ["threadId", "premiseId"],
  ThreadsOnPremiseCountOrderByAggregateInput: ["threadId", "premiseId", "assignedAt"],
  ThreadsOnPremiseMaxOrderByAggregateInput: ["threadId", "premiseId", "assignedAt"],
  ThreadsOnPremiseMinOrderByAggregateInput: ["threadId", "premiseId", "assignedAt"],
  ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput: ["threadId", "timelineId"],
  ThreadsOnTimelineCountOrderByAggregateInput: ["threadId", "timelineId", "assignedAt"],
  ThreadsOnTimelineMaxOrderByAggregateInput: ["threadId", "timelineId", "assignedAt"],
  ThreadsOnTimelineMinOrderByAggregateInput: ["threadId", "timelineId", "assignedAt"],
  ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput: ["threadId", "visionId"],
  ThreadsOnVisionCountOrderByAggregateInput: ["threadId", "visionId", "assignedAt"],
  ThreadsOnVisionMaxOrderByAggregateInput: ["threadId", "visionId", "assignedAt"],
  ThreadsOnVisionMinOrderByAggregateInput: ["threadId", "visionId", "assignedAt"],
  UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutAccountsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutSessionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  PremiseCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  ThreadCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  VisionCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  TimelineCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  AccountUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SessionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PremiseUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ThreadUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  VisionUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TimelineUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutPremiseInput: ["create", "connectOrCreate", "connect"],
  VisionCreateNestedManyWithoutPremiseInput: ["create", "connectOrCreate", "createMany", "connect"],
  PremisesOnTimelinesCreateNestedManyWithoutPremiseInput: ["create", "connectOrCreate", "createMany", "connect"],
  TagsOnPremisesCreateNestedManyWithoutPremiseInput: ["create", "connectOrCreate", "createMany", "connect"],
  ThreadsOnPremiseCreateNestedManyWithoutPremiseInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumPremiseStatusFieldUpdateOperationsInput: ["set"],
  UserUpdateOneWithoutPremiseInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  VisionUpdateManyWithoutPremiseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PremisesOnTimelinesUpdateManyWithoutPremiseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TagsOnPremisesUpdateManyWithoutPremiseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ThreadsOnPremiseUpdateManyWithoutPremiseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutVisionInput: ["create", "connectOrCreate", "connect"],
  PremiseCreateNestedOneWithoutVisionInput: ["create", "connectOrCreate", "connect"],
  VisionCreateNestedOneWithoutNextVisionInput: ["create", "connectOrCreate", "connect"],
  VisionCreateNestedManyWithoutPrevVisionInput: ["create", "connectOrCreate", "createMany", "connect"],
  ThreadsOnVisionCreateNestedManyWithoutVisionInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneWithoutVisionInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  PremiseUpdateOneRequiredWithoutVisionInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BoolFieldUpdateOperationsInput: ["set"],
  VisionUpdateOneWithoutNextVisionInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  VisionUpdateManyWithoutPrevVisionInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ThreadsOnVisionUpdateManyWithoutVisionInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutTimelineInput: ["create", "connectOrCreate", "connect"],
  PremisesOnTimelinesCreateNestedManyWithoutTimelineInput: ["create", "connectOrCreate", "createMany", "connect"],
  TagsOnTimelinesCreateNestedManyWithoutTimelineInput: ["create", "connectOrCreate", "createMany", "connect"],
  ThreadsOnTimelineCreateNestedManyWithoutTimelineInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutTimelineInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PremisesOnTimelinesUpdateManyWithoutTimelineInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TagsOnTimelinesUpdateManyWithoutTimelineInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ThreadsOnTimelineUpdateManyWithoutTimelineInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TagsOnPremisesCreateNestedManyWithoutTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  TagsOnTimelinesCreateNestedManyWithoutTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  TagsOnPremisesUpdateManyWithoutTagInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TagsOnTimelinesUpdateManyWithoutTagInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
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
  UserCreateNestedOneWithoutThreadInput: ["create", "connectOrCreate", "connect"],
  ThreadCreateNestedOneWithoutChildThreadsInput: ["create", "connectOrCreate", "connect"],
  ThreadCreateNestedManyWithoutParentThreadInput: ["create", "connectOrCreate", "createMany", "connect"],
  ThreadsOnPremiseCreateNestedOneWithoutThreadInput: ["create", "connectOrCreate", "connect"],
  ThreadsOnTimelineCreateNestedOneWithoutThreadInput: ["create", "connectOrCreate", "connect"],
  ThreadsOnVisionCreateNestedOneWithoutThreadInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutThreadInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ThreadUpdateOneWithoutChildThreadsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ThreadUpdateManyWithoutParentThreadInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ThreadsOnPremiseUpdateOneWithoutThreadInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ThreadsOnTimelineUpdateOneWithoutThreadInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ThreadsOnVisionUpdateOneWithoutThreadInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ThreadCreateNestedOneWithoutThreadsOnPremiseInput: ["create", "connectOrCreate", "connect"],
  PremiseCreateNestedOneWithoutThreadsOnPremiseInput: ["create", "connectOrCreate", "connect"],
  ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ThreadCreateNestedOneWithoutThreadsOnTimelineInput: ["create", "connectOrCreate", "connect"],
  TimelineCreateNestedOneWithoutThreadsOnTimelineInput: ["create", "connectOrCreate", "connect"],
  ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ThreadCreateNestedOneWithoutThreadsOnVisionInput: ["create", "connectOrCreate", "connect"],
  VisionCreateNestedOneWithoutThreadsOnVisionInput: ["create", "connectOrCreate", "connect"],
  ThreadUpdateOneRequiredWithoutThreadsOnVisionInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  VisionUpdateOneRequiredWithoutThreadsOnVisionInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumPremiseStatusFilter: ["equals", "in", "notIn", "not"],
  NestedEnumPremiseStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "sessions", "premise", "thread", "vision", "timeline"],
  UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
  UserUpsertWithoutAccountsInput: ["update", "create"],
  UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "sessions", "premise", "thread", "vision", "timeline"],
  UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "accounts", "premise", "thread", "vision", "timeline"],
  UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
  UserUpsertWithoutSessionsInput: ["update", "create"],
  UserUpdateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "accounts", "premise", "thread", "vision", "timeline"],
  AccountCreateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountCreateOrConnectWithoutUserInput: ["where", "create"],
  AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  SessionCreateWithoutUserInput: ["id", "sessionToken", "expires"],
  SessionCreateOrConnectWithoutUserInput: ["where", "create"],
  SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  PremiseCreateWithoutAuthorInput: ["id", "title", "createdAt", "updatedAt", "status", "vision", "premisesOnTimelines", "tagsOnPremises", "threadsOnPremise"],
  PremiseCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PremiseCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  ThreadCreateWithoutAuthorInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "parentThread", "childThreads", "threadsOnPremise", "threadsOnTimeline", "threadsOnVision"],
  ThreadCreateOrConnectWithoutAuthorInput: ["where", "create"],
  ThreadCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  VisionCreateWithoutAuthorInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premise", "thumbnail", "draftMode", "prevVision", "nextVision", "threadsOnVision"],
  VisionCreateOrConnectWithoutAuthorInput: ["where", "create"],
  VisionCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  TimelineCreateWithoutAuthorInput: ["id", "title", "description", "status", "premisesOnTimelines", "tagsOnTimelines", "threadsOnTimeline"],
  TimelineCreateOrConnectWithoutAuthorInput: ["where", "create"],
  TimelineCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
  PremiseUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PremiseUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PremiseUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PremiseScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "createdAt", "updatedAt", "status", "authorId"],
  ThreadUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  ThreadUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  ThreadUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  ThreadScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "parentThreadId"],
  VisionUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  VisionUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  VisionUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  VisionScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "thumbnail", "premiseId", "draftMode", "prevVisionId"],
  TimelineUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  TimelineUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  TimelineUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  TimelineScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "status", "authorId"],
  UserCreateWithoutPremiseInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "thread", "vision", "timeline"],
  UserCreateOrConnectWithoutPremiseInput: ["where", "create"],
  VisionCreateWithoutPremiseInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "thumbnail", "draftMode", "prevVision", "nextVision", "threadsOnVision"],
  VisionCreateOrConnectWithoutPremiseInput: ["where", "create"],
  VisionCreateManyPremiseInputEnvelope: ["data", "skipDuplicates"],
  PremisesOnTimelinesCreateWithoutPremiseInput: ["timeline", "assignedAt"],
  PremisesOnTimelinesCreateOrConnectWithoutPremiseInput: ["where", "create"],
  PremisesOnTimelinesCreateManyPremiseInputEnvelope: ["data", "skipDuplicates"],
  TagsOnPremisesCreateWithoutPremiseInput: ["tag", "assignedAt"],
  TagsOnPremisesCreateOrConnectWithoutPremiseInput: ["where", "create"],
  TagsOnPremisesCreateManyPremiseInputEnvelope: ["data", "skipDuplicates"],
  ThreadsOnPremiseCreateWithoutPremiseInput: ["thread", "assignedAt"],
  ThreadsOnPremiseCreateOrConnectWithoutPremiseInput: ["where", "create"],
  ThreadsOnPremiseCreateManyPremiseInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutPremiseInput: ["update", "create"],
  UserUpdateWithoutPremiseInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "thread", "vision", "timeline"],
  VisionUpsertWithWhereUniqueWithoutPremiseInput: ["where", "update", "create"],
  VisionUpdateWithWhereUniqueWithoutPremiseInput: ["where", "data"],
  VisionUpdateManyWithWhereWithoutPremiseInput: ["where", "data"],
  PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput: ["where", "update", "create"],
  PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput: ["where", "data"],
  PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput: ["where", "data"],
  PremisesOnTimelinesScalarWhereInput: ["AND", "OR", "NOT", "timelineId", "premiseId", "assignedAt"],
  TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput: ["where", "update", "create"],
  TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput: ["where", "data"],
  TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput: ["where", "data"],
  TagsOnPremisesScalarWhereInput: ["AND", "OR", "NOT", "tagId", "premiseId", "assignedAt"],
  ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput: ["where", "update", "create"],
  ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput: ["where", "data"],
  ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput: ["where", "data"],
  ThreadsOnPremiseScalarWhereInput: ["AND", "OR", "NOT", "threadId", "premiseId", "assignedAt"],
  UserCreateWithoutVisionInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "premise", "thread", "timeline"],
  UserCreateOrConnectWithoutVisionInput: ["where", "create"],
  PremiseCreateWithoutVisionInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "premisesOnTimelines", "tagsOnPremises", "threadsOnPremise"],
  PremiseCreateOrConnectWithoutVisionInput: ["where", "create"],
  VisionCreateWithoutNextVisionInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "premise", "thumbnail", "draftMode", "prevVision", "threadsOnVision"],
  VisionCreateOrConnectWithoutNextVisionInput: ["where", "create"],
  VisionCreateWithoutPrevVisionInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "premise", "thumbnail", "draftMode", "nextVision", "threadsOnVision"],
  VisionCreateOrConnectWithoutPrevVisionInput: ["where", "create"],
  VisionCreateManyPrevVisionInputEnvelope: ["data", "skipDuplicates"],
  ThreadsOnVisionCreateWithoutVisionInput: ["thread", "assignedAt"],
  ThreadsOnVisionCreateOrConnectWithoutVisionInput: ["where", "create"],
  ThreadsOnVisionCreateManyVisionInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutVisionInput: ["update", "create"],
  UserUpdateWithoutVisionInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "premise", "thread", "timeline"],
  PremiseUpsertWithoutVisionInput: ["update", "create"],
  PremiseUpdateWithoutVisionInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "premisesOnTimelines", "tagsOnPremises", "threadsOnPremise"],
  VisionUpsertWithoutNextVisionInput: ["update", "create"],
  VisionUpdateWithoutNextVisionInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "premise", "thumbnail", "draftMode", "prevVision", "threadsOnVision"],
  VisionUpsertWithWhereUniqueWithoutPrevVisionInput: ["where", "update", "create"],
  VisionUpdateWithWhereUniqueWithoutPrevVisionInput: ["where", "data"],
  VisionUpdateManyWithWhereWithoutPrevVisionInput: ["where", "data"],
  ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput: ["where", "update", "create"],
  ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput: ["where", "data"],
  ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput: ["where", "data"],
  ThreadsOnVisionScalarWhereInput: ["AND", "OR", "NOT", "threadId", "visionId", "assignedAt"],
  UserCreateWithoutTimelineInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "premise", "thread", "vision"],
  UserCreateOrConnectWithoutTimelineInput: ["where", "create"],
  PremisesOnTimelinesCreateWithoutTimelineInput: ["premise", "assignedAt"],
  PremisesOnTimelinesCreateOrConnectWithoutTimelineInput: ["where", "create"],
  PremisesOnTimelinesCreateManyTimelineInputEnvelope: ["data", "skipDuplicates"],
  TagsOnTimelinesCreateWithoutTimelineInput: ["tag", "assignedAt"],
  TagsOnTimelinesCreateOrConnectWithoutTimelineInput: ["where", "create"],
  TagsOnTimelinesCreateManyTimelineInputEnvelope: ["data", "skipDuplicates"],
  ThreadsOnTimelineCreateWithoutTimelineInput: ["thread", "assignedAt"],
  ThreadsOnTimelineCreateOrConnectWithoutTimelineInput: ["where", "create"],
  ThreadsOnTimelineCreateManyTimelineInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutTimelineInput: ["update", "create"],
  UserUpdateWithoutTimelineInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "premise", "thread", "vision"],
  PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput: ["where", "update", "create"],
  PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput: ["where", "data"],
  PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput: ["where", "data"],
  TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput: ["where", "update", "create"],
  TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput: ["where", "data"],
  TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput: ["where", "data"],
  TagsOnTimelinesScalarWhereInput: ["AND", "OR", "NOT", "tagId", "timelineId", "assignedAt"],
  ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput: ["where", "update", "create"],
  ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput: ["where", "data"],
  ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput: ["where", "data"],
  ThreadsOnTimelineScalarWhereInput: ["AND", "OR", "NOT", "threadId", "timelineId", "assignedAt"],
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
  TagCreateWithoutTagsOnPremisesInput: ["label", "tagsOnTimelines"],
  TagCreateOrConnectWithoutTagsOnPremisesInput: ["where", "create"],
  PremiseCreateWithoutTagsOnPremisesInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "premisesOnTimelines", "threadsOnPremise"],
  PremiseCreateOrConnectWithoutTagsOnPremisesInput: ["where", "create"],
  TagUpsertWithoutTagsOnPremisesInput: ["update", "create"],
  TagUpdateWithoutTagsOnPremisesInput: ["label", "tagsOnTimelines"],
  PremiseUpsertWithoutTagsOnPremisesInput: ["update", "create"],
  PremiseUpdateWithoutTagsOnPremisesInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "premisesOnTimelines", "threadsOnPremise"],
  TagCreateWithoutTagsOnTimelinesInput: ["label", "tagsOnPremises"],
  TagCreateOrConnectWithoutTagsOnTimelinesInput: ["where", "create"],
  TimelineCreateWithoutTagsOnTimelinesInput: ["id", "title", "description", "status", "author", "premisesOnTimelines", "threadsOnTimeline"],
  TimelineCreateOrConnectWithoutTagsOnTimelinesInput: ["where", "create"],
  TagUpsertWithoutTagsOnTimelinesInput: ["update", "create"],
  TagUpdateWithoutTagsOnTimelinesInput: ["label", "tagsOnPremises"],
  TimelineUpsertWithoutTagsOnTimelinesInput: ["update", "create"],
  TimelineUpdateWithoutTagsOnTimelinesInput: ["id", "title", "description", "status", "author", "premisesOnTimelines", "threadsOnTimeline"],
  TimelineCreateWithoutPremisesOnTimelinesInput: ["id", "title", "description", "status", "author", "tagsOnTimelines", "threadsOnTimeline"],
  TimelineCreateOrConnectWithoutPremisesOnTimelinesInput: ["where", "create"],
  PremiseCreateWithoutPremisesOnTimelinesInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "tagsOnPremises", "threadsOnPremise"],
  PremiseCreateOrConnectWithoutPremisesOnTimelinesInput: ["where", "create"],
  TimelineUpsertWithoutPremisesOnTimelinesInput: ["update", "create"],
  TimelineUpdateWithoutPremisesOnTimelinesInput: ["id", "title", "description", "status", "author", "tagsOnTimelines", "threadsOnTimeline"],
  PremiseUpsertWithoutPremisesOnTimelinesInput: ["update", "create"],
  PremiseUpdateWithoutPremisesOnTimelinesInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "tagsOnPremises", "threadsOnPremise"],
  UserCreateWithoutThreadInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "premise", "vision", "timeline"],
  UserCreateOrConnectWithoutThreadInput: ["where", "create"],
  ThreadCreateWithoutChildThreadsInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "parentThread", "threadsOnPremise", "threadsOnTimeline", "threadsOnVision"],
  ThreadCreateOrConnectWithoutChildThreadsInput: ["where", "create"],
  ThreadCreateWithoutParentThreadInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "childThreads", "threadsOnPremise", "threadsOnTimeline", "threadsOnVision"],
  ThreadCreateOrConnectWithoutParentThreadInput: ["where", "create"],
  ThreadCreateManyParentThreadInputEnvelope: ["data", "skipDuplicates"],
  ThreadsOnPremiseCreateWithoutThreadInput: ["premise", "assignedAt"],
  ThreadsOnPremiseCreateOrConnectWithoutThreadInput: ["where", "create"],
  ThreadsOnTimelineCreateWithoutThreadInput: ["timeline", "assignedAt"],
  ThreadsOnTimelineCreateOrConnectWithoutThreadInput: ["where", "create"],
  ThreadsOnVisionCreateWithoutThreadInput: ["vision", "assignedAt"],
  ThreadsOnVisionCreateOrConnectWithoutThreadInput: ["where", "create"],
  UserUpsertWithoutThreadInput: ["update", "create"],
  UserUpdateWithoutThreadInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "premise", "vision", "timeline"],
  ThreadUpsertWithoutChildThreadsInput: ["update", "create"],
  ThreadUpdateWithoutChildThreadsInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "parentThread", "threadsOnPremise", "threadsOnTimeline", "threadsOnVision"],
  ThreadUpsertWithWhereUniqueWithoutParentThreadInput: ["where", "update", "create"],
  ThreadUpdateWithWhereUniqueWithoutParentThreadInput: ["where", "data"],
  ThreadUpdateManyWithWhereWithoutParentThreadInput: ["where", "data"],
  ThreadsOnPremiseUpsertWithoutThreadInput: ["update", "create"],
  ThreadsOnPremiseUpdateWithoutThreadInput: ["premise", "assignedAt"],
  ThreadsOnTimelineUpsertWithoutThreadInput: ["update", "create"],
  ThreadsOnTimelineUpdateWithoutThreadInput: ["timeline", "assignedAt"],
  ThreadsOnVisionUpsertWithoutThreadInput: ["update", "create"],
  ThreadsOnVisionUpdateWithoutThreadInput: ["vision", "assignedAt"],
  ThreadCreateWithoutThreadsOnPremiseInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "parentThread", "childThreads", "threadsOnTimeline", "threadsOnVision"],
  ThreadCreateOrConnectWithoutThreadsOnPremiseInput: ["where", "create"],
  PremiseCreateWithoutThreadsOnPremiseInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "premisesOnTimelines", "tagsOnPremises"],
  PremiseCreateOrConnectWithoutThreadsOnPremiseInput: ["where", "create"],
  ThreadUpsertWithoutThreadsOnPremiseInput: ["update", "create"],
  ThreadUpdateWithoutThreadsOnPremiseInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "parentThread", "childThreads", "threadsOnTimeline", "threadsOnVision"],
  PremiseUpsertWithoutThreadsOnPremiseInput: ["update", "create"],
  PremiseUpdateWithoutThreadsOnPremiseInput: ["id", "title", "createdAt", "updatedAt", "status", "author", "vision", "premisesOnTimelines", "tagsOnPremises"],
  ThreadCreateWithoutThreadsOnTimelineInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "parentThread", "childThreads", "threadsOnPremise", "threadsOnVision"],
  ThreadCreateOrConnectWithoutThreadsOnTimelineInput: ["where", "create"],
  TimelineCreateWithoutThreadsOnTimelineInput: ["id", "title", "description", "status", "author", "premisesOnTimelines", "tagsOnTimelines"],
  TimelineCreateOrConnectWithoutThreadsOnTimelineInput: ["where", "create"],
  ThreadUpsertWithoutThreadsOnTimelineInput: ["update", "create"],
  ThreadUpdateWithoutThreadsOnTimelineInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "parentThread", "childThreads", "threadsOnPremise", "threadsOnVision"],
  TimelineUpsertWithoutThreadsOnTimelineInput: ["update", "create"],
  TimelineUpdateWithoutThreadsOnTimelineInput: ["id", "title", "description", "status", "author", "premisesOnTimelines", "tagsOnTimelines"],
  ThreadCreateWithoutThreadsOnVisionInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "parentThread", "childThreads", "threadsOnPremise", "threadsOnTimeline"],
  ThreadCreateOrConnectWithoutThreadsOnVisionInput: ["where", "create"],
  VisionCreateWithoutThreadsOnVisionInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "premise", "thumbnail", "draftMode", "prevVision", "nextVision"],
  VisionCreateOrConnectWithoutThreadsOnVisionInput: ["where", "create"],
  ThreadUpsertWithoutThreadsOnVisionInput: ["update", "create"],
  ThreadUpdateWithoutThreadsOnVisionInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "parentThread", "childThreads", "threadsOnPremise", "threadsOnTimeline"],
  VisionUpsertWithoutThreadsOnVisionInput: ["update", "create"],
  VisionUpdateWithoutThreadsOnVisionInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "premise", "thumbnail", "draftMode", "prevVision", "nextVision"],
  AccountCreateManyUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCreateManyUserInput: ["id", "sessionToken", "expires"],
  PremiseCreateManyAuthorInput: ["id", "title", "createdAt", "updatedAt", "status"],
  ThreadCreateManyAuthorInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "parentThreadId"],
  VisionCreateManyAuthorInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "thumbnail", "premiseId", "draftMode", "prevVisionId"],
  TimelineCreateManyAuthorInput: ["id", "title", "description", "status"],
  AccountUpdateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionUpdateWithoutUserInput: ["id", "sessionToken", "expires"],
  PremiseUpdateWithoutAuthorInput: ["id", "title", "createdAt", "updatedAt", "status", "vision", "premisesOnTimelines", "tagsOnPremises", "threadsOnPremise"],
  ThreadUpdateWithoutAuthorInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "parentThread", "childThreads", "threadsOnPremise", "threadsOnTimeline", "threadsOnVision"],
  VisionUpdateWithoutAuthorInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "premise", "thumbnail", "draftMode", "prevVision", "nextVision", "threadsOnVision"],
  TimelineUpdateWithoutAuthorInput: ["id", "title", "description", "status", "premisesOnTimelines", "tagsOnTimelines", "threadsOnTimeline"],
  VisionCreateManyPremiseInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "thumbnail", "draftMode", "prevVisionId"],
  PremisesOnTimelinesCreateManyPremiseInput: ["timelineId", "assignedAt"],
  TagsOnPremisesCreateManyPremiseInput: ["tagId", "assignedAt"],
  ThreadsOnPremiseCreateManyPremiseInput: ["threadId", "assignedAt"],
  VisionUpdateWithoutPremiseInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "thumbnail", "draftMode", "prevVision", "nextVision", "threadsOnVision"],
  PremisesOnTimelinesUpdateWithoutPremiseInput: ["timeline", "assignedAt"],
  TagsOnPremisesUpdateWithoutPremiseInput: ["tag", "assignedAt"],
  ThreadsOnPremiseUpdateWithoutPremiseInput: ["thread", "assignedAt"],
  VisionCreateManyPrevVisionInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId", "thumbnail", "premiseId", "draftMode"],
  ThreadsOnVisionCreateManyVisionInput: ["threadId", "assignedAt"],
  VisionUpdateWithoutPrevVisionInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "premise", "thumbnail", "draftMode", "nextVision", "threadsOnVision"],
  ThreadsOnVisionUpdateWithoutVisionInput: ["thread", "assignedAt"],
  PremisesOnTimelinesCreateManyTimelineInput: ["premiseId", "assignedAt"],
  TagsOnTimelinesCreateManyTimelineInput: ["tagId", "assignedAt"],
  ThreadsOnTimelineCreateManyTimelineInput: ["threadId", "assignedAt"],
  PremisesOnTimelinesUpdateWithoutTimelineInput: ["premise", "assignedAt"],
  TagsOnTimelinesUpdateWithoutTimelineInput: ["tag", "assignedAt"],
  ThreadsOnTimelineUpdateWithoutTimelineInput: ["thread", "assignedAt"],
  TagsOnPremisesCreateManyTagInput: ["premiseId", "assignedAt"],
  TagsOnTimelinesCreateManyTagInput: ["timelineId", "assignedAt"],
  TagsOnPremisesUpdateWithoutTagInput: ["premise", "assignedAt"],
  TagsOnTimelinesUpdateWithoutTagInput: ["timeline", "assignedAt"],
  ThreadCreateManyParentThreadInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "authorId"],
  ThreadUpdateWithoutParentThreadInput: ["id", "title", "activityDate", "description", "createdAt", "reference", "author", "childThreads", "threadsOnPremise", "threadsOnTimeline", "threadsOnVision"]
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

