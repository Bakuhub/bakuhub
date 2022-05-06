"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateThreadsOnPremiseArgs_1 = require("./args/AggregateThreadsOnPremiseArgs");
const CreateManyThreadsOnPremiseArgs_1 = require("./args/CreateManyThreadsOnPremiseArgs");
const CreateThreadsOnPremiseArgs_1 = require("./args/CreateThreadsOnPremiseArgs");
const DeleteManyThreadsOnPremiseArgs_1 = require("./args/DeleteManyThreadsOnPremiseArgs");
const DeleteThreadsOnPremiseArgs_1 = require("./args/DeleteThreadsOnPremiseArgs");
const FindFirstThreadsOnPremiseArgs_1 = require("./args/FindFirstThreadsOnPremiseArgs");
const FindManyThreadsOnPremiseArgs_1 = require("./args/FindManyThreadsOnPremiseArgs");
const FindUniqueThreadsOnPremiseArgs_1 = require("./args/FindUniqueThreadsOnPremiseArgs");
const GroupByThreadsOnPremiseArgs_1 = require("./args/GroupByThreadsOnPremiseArgs");
const UpdateManyThreadsOnPremiseArgs_1 = require("./args/UpdateManyThreadsOnPremiseArgs");
const UpdateThreadsOnPremiseArgs_1 = require("./args/UpdateThreadsOnPremiseArgs");
const UpsertThreadsOnPremiseArgs_1 = require("./args/UpsertThreadsOnPremiseArgs");
const helpers_1 = require("../../../helpers");
const ThreadsOnPremise_1 = require("../../../models/ThreadsOnPremise");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateThreadsOnPremise_1 = require("../../outputs/AggregateThreadsOnPremise");
const ThreadsOnPremiseGroupBy_1 = require("../../outputs/ThreadsOnPremiseGroupBy");
let ThreadsOnPremiseCrudResolver = class ThreadsOnPremiseCrudResolver {
    async threadsOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstThreadsOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async threadsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createThreadsOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyThreadsOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteThreadsOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateThreadsOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyThreadsOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyThreadsOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertThreadsOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateThreadsOnPremise(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByThreadsOnPremise(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ThreadsOnPremise_1.ThreadsOnPremise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueThreadsOnPremiseArgs_1.FindUniqueThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnPremiseCrudResolver.prototype, "threadsOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ThreadsOnPremise_1.ThreadsOnPremise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstThreadsOnPremiseArgs_1.FindFirstThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnPremiseCrudResolver.prototype, "findFirstThreadsOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThreadsOnPremise_1.ThreadsOnPremise], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyThreadsOnPremiseArgs_1.FindManyThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnPremiseCrudResolver.prototype, "threadsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnPremise_1.ThreadsOnPremise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateThreadsOnPremiseArgs_1.CreateThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnPremiseCrudResolver.prototype, "createThreadsOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyThreadsOnPremiseArgs_1.CreateManyThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnPremiseCrudResolver.prototype, "createManyThreadsOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnPremise_1.ThreadsOnPremise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteThreadsOnPremiseArgs_1.DeleteThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnPremiseCrudResolver.prototype, "deleteThreadsOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnPremise_1.ThreadsOnPremise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateThreadsOnPremiseArgs_1.UpdateThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnPremiseCrudResolver.prototype, "updateThreadsOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyThreadsOnPremiseArgs_1.DeleteManyThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnPremiseCrudResolver.prototype, "deleteManyThreadsOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyThreadsOnPremiseArgs_1.UpdateManyThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnPremiseCrudResolver.prototype, "updateManyThreadsOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnPremise_1.ThreadsOnPremise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertThreadsOnPremiseArgs_1.UpsertThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnPremiseCrudResolver.prototype, "upsertThreadsOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateThreadsOnPremise_1.AggregateThreadsOnPremise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateThreadsOnPremiseArgs_1.AggregateThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnPremiseCrudResolver.prototype, "aggregateThreadsOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThreadsOnPremiseGroupBy_1.ThreadsOnPremiseGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByThreadsOnPremiseArgs_1.GroupByThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnPremiseCrudResolver.prototype, "groupByThreadsOnPremise", null);
ThreadsOnPremiseCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnPremise_1.ThreadsOnPremise)
], ThreadsOnPremiseCrudResolver);
exports.ThreadsOnPremiseCrudResolver = ThreadsOnPremiseCrudResolver;
