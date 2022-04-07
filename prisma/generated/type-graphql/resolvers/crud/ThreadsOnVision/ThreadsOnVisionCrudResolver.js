"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateThreadsOnVisionArgs_1 = require("./args/AggregateThreadsOnVisionArgs");
const CreateManyThreadsOnVisionArgs_1 = require("./args/CreateManyThreadsOnVisionArgs");
const CreateThreadsOnVisionArgs_1 = require("./args/CreateThreadsOnVisionArgs");
const DeleteManyThreadsOnVisionArgs_1 = require("./args/DeleteManyThreadsOnVisionArgs");
const DeleteThreadsOnVisionArgs_1 = require("./args/DeleteThreadsOnVisionArgs");
const FindFirstThreadsOnVisionArgs_1 = require("./args/FindFirstThreadsOnVisionArgs");
const FindManyThreadsOnVisionArgs_1 = require("./args/FindManyThreadsOnVisionArgs");
const FindUniqueThreadsOnVisionArgs_1 = require("./args/FindUniqueThreadsOnVisionArgs");
const GroupByThreadsOnVisionArgs_1 = require("./args/GroupByThreadsOnVisionArgs");
const UpdateManyThreadsOnVisionArgs_1 = require("./args/UpdateManyThreadsOnVisionArgs");
const UpdateThreadsOnVisionArgs_1 = require("./args/UpdateThreadsOnVisionArgs");
const UpsertThreadsOnVisionArgs_1 = require("./args/UpsertThreadsOnVisionArgs");
const helpers_1 = require("../../../helpers");
const ThreadsOnVision_1 = require("../../../models/ThreadsOnVision");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateThreadsOnVision_1 = require("../../outputs/AggregateThreadsOnVision");
const ThreadsOnVisionGroupBy_1 = require("../../outputs/ThreadsOnVisionGroupBy");
let ThreadsOnVisionCrudResolver = class ThreadsOnVisionCrudResolver {
    async threadsOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstThreadsOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async threadsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createThreadsOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyThreadsOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteThreadsOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateThreadsOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyThreadsOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyThreadsOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertThreadsOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateThreadsOnVision(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByThreadsOnVision(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ThreadsOnVision_1.ThreadsOnVision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueThreadsOnVisionArgs_1.FindUniqueThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnVisionCrudResolver.prototype, "threadsOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ThreadsOnVision_1.ThreadsOnVision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstThreadsOnVisionArgs_1.FindFirstThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnVisionCrudResolver.prototype, "findFirstThreadsOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThreadsOnVision_1.ThreadsOnVision], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyThreadsOnVisionArgs_1.FindManyThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnVisionCrudResolver.prototype, "threadsOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnVision_1.ThreadsOnVision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateThreadsOnVisionArgs_1.CreateThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnVisionCrudResolver.prototype, "createThreadsOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyThreadsOnVisionArgs_1.CreateManyThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnVisionCrudResolver.prototype, "createManyThreadsOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnVision_1.ThreadsOnVision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteThreadsOnVisionArgs_1.DeleteThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnVisionCrudResolver.prototype, "deleteThreadsOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnVision_1.ThreadsOnVision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateThreadsOnVisionArgs_1.UpdateThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnVisionCrudResolver.prototype, "updateThreadsOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyThreadsOnVisionArgs_1.DeleteManyThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnVisionCrudResolver.prototype, "deleteManyThreadsOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyThreadsOnVisionArgs_1.UpdateManyThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnVisionCrudResolver.prototype, "updateManyThreadsOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnVision_1.ThreadsOnVision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertThreadsOnVisionArgs_1.UpsertThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnVisionCrudResolver.prototype, "upsertThreadsOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateThreadsOnVision_1.AggregateThreadsOnVision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateThreadsOnVisionArgs_1.AggregateThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnVisionCrudResolver.prototype, "aggregateThreadsOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThreadsOnVisionGroupBy_1.ThreadsOnVisionGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByThreadsOnVisionArgs_1.GroupByThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnVisionCrudResolver.prototype, "groupByThreadsOnVision", null);
ThreadsOnVisionCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnVision_1.ThreadsOnVision)
], ThreadsOnVisionCrudResolver);
exports.ThreadsOnVisionCrudResolver = ThreadsOnVisionCrudResolver;
