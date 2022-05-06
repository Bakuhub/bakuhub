"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateThreadArgs_1 = require("./args/AggregateThreadArgs");
const CreateManyThreadArgs_1 = require("./args/CreateManyThreadArgs");
const CreateThreadArgs_1 = require("./args/CreateThreadArgs");
const DeleteManyThreadArgs_1 = require("./args/DeleteManyThreadArgs");
const DeleteThreadArgs_1 = require("./args/DeleteThreadArgs");
const FindFirstThreadArgs_1 = require("./args/FindFirstThreadArgs");
const FindManyThreadArgs_1 = require("./args/FindManyThreadArgs");
const FindUniqueThreadArgs_1 = require("./args/FindUniqueThreadArgs");
const GroupByThreadArgs_1 = require("./args/GroupByThreadArgs");
const UpdateManyThreadArgs_1 = require("./args/UpdateManyThreadArgs");
const UpdateThreadArgs_1 = require("./args/UpdateThreadArgs");
const UpsertThreadArgs_1 = require("./args/UpsertThreadArgs");
const helpers_1 = require("../../../helpers");
const Thread_1 = require("../../../models/Thread");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateThread_1 = require("../../outputs/AggregateThread");
const ThreadGroupBy_1 = require("../../outputs/ThreadGroupBy");
let ThreadCrudResolver = class ThreadCrudResolver {
    async thread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async threads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateThread(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByThread(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Thread_1.Thread, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueThreadArgs_1.FindUniqueThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadCrudResolver.prototype, "thread", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Thread_1.Thread, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstThreadArgs_1.FindFirstThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadCrudResolver.prototype, "findFirstThread", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Thread_1.Thread], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyThreadArgs_1.FindManyThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadCrudResolver.prototype, "threads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Thread_1.Thread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateThreadArgs_1.CreateThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadCrudResolver.prototype, "createThread", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyThreadArgs_1.CreateManyThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadCrudResolver.prototype, "createManyThread", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Thread_1.Thread, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteThreadArgs_1.DeleteThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadCrudResolver.prototype, "deleteThread", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Thread_1.Thread, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateThreadArgs_1.UpdateThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadCrudResolver.prototype, "updateThread", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyThreadArgs_1.DeleteManyThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadCrudResolver.prototype, "deleteManyThread", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyThreadArgs_1.UpdateManyThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadCrudResolver.prototype, "updateManyThread", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Thread_1.Thread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertThreadArgs_1.UpsertThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadCrudResolver.prototype, "upsertThread", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateThread_1.AggregateThread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateThreadArgs_1.AggregateThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadCrudResolver.prototype, "aggregateThread", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThreadGroupBy_1.ThreadGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByThreadArgs_1.GroupByThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadCrudResolver.prototype, "groupByThread", null);
ThreadCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Thread_1.Thread)
], ThreadCrudResolver);
exports.ThreadCrudResolver = ThreadCrudResolver;
