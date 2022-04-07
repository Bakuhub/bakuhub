"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateThreadsOnTimelineArgs_1 = require("./args/AggregateThreadsOnTimelineArgs");
const CreateManyThreadsOnTimelineArgs_1 = require("./args/CreateManyThreadsOnTimelineArgs");
const CreateThreadsOnTimelineArgs_1 = require("./args/CreateThreadsOnTimelineArgs");
const DeleteManyThreadsOnTimelineArgs_1 = require("./args/DeleteManyThreadsOnTimelineArgs");
const DeleteThreadsOnTimelineArgs_1 = require("./args/DeleteThreadsOnTimelineArgs");
const FindFirstThreadsOnTimelineArgs_1 = require("./args/FindFirstThreadsOnTimelineArgs");
const FindManyThreadsOnTimelineArgs_1 = require("./args/FindManyThreadsOnTimelineArgs");
const FindUniqueThreadsOnTimelineArgs_1 = require("./args/FindUniqueThreadsOnTimelineArgs");
const GroupByThreadsOnTimelineArgs_1 = require("./args/GroupByThreadsOnTimelineArgs");
const UpdateManyThreadsOnTimelineArgs_1 = require("./args/UpdateManyThreadsOnTimelineArgs");
const UpdateThreadsOnTimelineArgs_1 = require("./args/UpdateThreadsOnTimelineArgs");
const UpsertThreadsOnTimelineArgs_1 = require("./args/UpsertThreadsOnTimelineArgs");
const helpers_1 = require("../../../helpers");
const ThreadsOnTimeline_1 = require("../../../models/ThreadsOnTimeline");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateThreadsOnTimeline_1 = require("../../outputs/AggregateThreadsOnTimeline");
const ThreadsOnTimelineGroupBy_1 = require("../../outputs/ThreadsOnTimelineGroupBy");
let ThreadsOnTimelineCrudResolver = class ThreadsOnTimelineCrudResolver {
    async threadsOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstThreadsOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async threadsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createThreadsOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyThreadsOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteThreadsOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateThreadsOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyThreadsOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyThreadsOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertThreadsOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateThreadsOnTimeline(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByThreadsOnTimeline(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ThreadsOnTimeline_1.ThreadsOnTimeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueThreadsOnTimelineArgs_1.FindUniqueThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnTimelineCrudResolver.prototype, "threadsOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ThreadsOnTimeline_1.ThreadsOnTimeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstThreadsOnTimelineArgs_1.FindFirstThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnTimelineCrudResolver.prototype, "findFirstThreadsOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThreadsOnTimeline_1.ThreadsOnTimeline], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyThreadsOnTimelineArgs_1.FindManyThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnTimelineCrudResolver.prototype, "threadsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnTimeline_1.ThreadsOnTimeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateThreadsOnTimelineArgs_1.CreateThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnTimelineCrudResolver.prototype, "createThreadsOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyThreadsOnTimelineArgs_1.CreateManyThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnTimelineCrudResolver.prototype, "createManyThreadsOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnTimeline_1.ThreadsOnTimeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteThreadsOnTimelineArgs_1.DeleteThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnTimelineCrudResolver.prototype, "deleteThreadsOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnTimeline_1.ThreadsOnTimeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateThreadsOnTimelineArgs_1.UpdateThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnTimelineCrudResolver.prototype, "updateThreadsOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyThreadsOnTimelineArgs_1.DeleteManyThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnTimelineCrudResolver.prototype, "deleteManyThreadsOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyThreadsOnTimelineArgs_1.UpdateManyThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnTimelineCrudResolver.prototype, "updateManyThreadsOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnTimeline_1.ThreadsOnTimeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertThreadsOnTimelineArgs_1.UpsertThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnTimelineCrudResolver.prototype, "upsertThreadsOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateThreadsOnTimeline_1.AggregateThreadsOnTimeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateThreadsOnTimelineArgs_1.AggregateThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnTimelineCrudResolver.prototype, "aggregateThreadsOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThreadsOnTimelineGroupBy_1.ThreadsOnTimelineGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByThreadsOnTimelineArgs_1.GroupByThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnTimelineCrudResolver.prototype, "groupByThreadsOnTimeline", null);
ThreadsOnTimelineCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnTimeline_1.ThreadsOnTimeline)
], ThreadsOnTimelineCrudResolver);
exports.ThreadsOnTimelineCrudResolver = ThreadsOnTimelineCrudResolver;
