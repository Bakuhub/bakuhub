"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateThreadsOnMergeRequestArgs_1 = require("./args/AggregateThreadsOnMergeRequestArgs");
const CreateManyThreadsOnMergeRequestArgs_1 = require("./args/CreateManyThreadsOnMergeRequestArgs");
const CreateThreadsOnMergeRequestArgs_1 = require("./args/CreateThreadsOnMergeRequestArgs");
const DeleteManyThreadsOnMergeRequestArgs_1 = require("./args/DeleteManyThreadsOnMergeRequestArgs");
const DeleteThreadsOnMergeRequestArgs_1 = require("./args/DeleteThreadsOnMergeRequestArgs");
const FindFirstThreadsOnMergeRequestArgs_1 = require("./args/FindFirstThreadsOnMergeRequestArgs");
const FindManyThreadsOnMergeRequestArgs_1 = require("./args/FindManyThreadsOnMergeRequestArgs");
const FindUniqueThreadsOnMergeRequestArgs_1 = require("./args/FindUniqueThreadsOnMergeRequestArgs");
const GroupByThreadsOnMergeRequestArgs_1 = require("./args/GroupByThreadsOnMergeRequestArgs");
const UpdateManyThreadsOnMergeRequestArgs_1 = require("./args/UpdateManyThreadsOnMergeRequestArgs");
const UpdateThreadsOnMergeRequestArgs_1 = require("./args/UpdateThreadsOnMergeRequestArgs");
const UpsertThreadsOnMergeRequestArgs_1 = require("./args/UpsertThreadsOnMergeRequestArgs");
const helpers_1 = require("../../../helpers");
const ThreadsOnMergeRequest_1 = require("../../../models/ThreadsOnMergeRequest");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateThreadsOnMergeRequest_1 = require("../../outputs/AggregateThreadsOnMergeRequest");
const ThreadsOnMergeRequestGroupBy_1 = require("../../outputs/ThreadsOnMergeRequestGroupBy");
let ThreadsOnMergeRequestCrudResolver = class ThreadsOnMergeRequestCrudResolver {
    async threadsOnMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstThreadsOnMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async threadsOnMergeRequests(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createThreadsOnMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyThreadsOnMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteThreadsOnMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateThreadsOnMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyThreadsOnMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyThreadsOnMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertThreadsOnMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateThreadsOnMergeRequest(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByThreadsOnMergeRequest(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueThreadsOnMergeRequestArgs_1.FindUniqueThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnMergeRequestCrudResolver.prototype, "threadsOnMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstThreadsOnMergeRequestArgs_1.FindFirstThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnMergeRequestCrudResolver.prototype, "findFirstThreadsOnMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThreadsOnMergeRequest_1.ThreadsOnMergeRequest], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyThreadsOnMergeRequestArgs_1.FindManyThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnMergeRequestCrudResolver.prototype, "threadsOnMergeRequests", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateThreadsOnMergeRequestArgs_1.CreateThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnMergeRequestCrudResolver.prototype, "createThreadsOnMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyThreadsOnMergeRequestArgs_1.CreateManyThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnMergeRequestCrudResolver.prototype, "createManyThreadsOnMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteThreadsOnMergeRequestArgs_1.DeleteThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnMergeRequestCrudResolver.prototype, "deleteThreadsOnMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateThreadsOnMergeRequestArgs_1.UpdateThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnMergeRequestCrudResolver.prototype, "updateThreadsOnMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyThreadsOnMergeRequestArgs_1.DeleteManyThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnMergeRequestCrudResolver.prototype, "deleteManyThreadsOnMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyThreadsOnMergeRequestArgs_1.UpdateManyThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnMergeRequestCrudResolver.prototype, "updateManyThreadsOnMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertThreadsOnMergeRequestArgs_1.UpsertThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnMergeRequestCrudResolver.prototype, "upsertThreadsOnMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateThreadsOnMergeRequest_1.AggregateThreadsOnMergeRequest, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateThreadsOnMergeRequestArgs_1.AggregateThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnMergeRequestCrudResolver.prototype, "aggregateThreadsOnMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThreadsOnMergeRequestGroupBy_1.ThreadsOnMergeRequestGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByThreadsOnMergeRequestArgs_1.GroupByThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnMergeRequestCrudResolver.prototype, "groupByThreadsOnMergeRequest", null);
ThreadsOnMergeRequestCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest)
], ThreadsOnMergeRequestCrudResolver);
exports.ThreadsOnMergeRequestCrudResolver = ThreadsOnMergeRequestCrudResolver;
