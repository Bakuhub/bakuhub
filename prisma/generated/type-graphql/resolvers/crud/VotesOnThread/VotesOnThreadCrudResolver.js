"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateVotesOnThreadArgs_1 = require("./args/AggregateVotesOnThreadArgs");
const CreateManyVotesOnThreadArgs_1 = require("./args/CreateManyVotesOnThreadArgs");
const CreateVotesOnThreadArgs_1 = require("./args/CreateVotesOnThreadArgs");
const DeleteManyVotesOnThreadArgs_1 = require("./args/DeleteManyVotesOnThreadArgs");
const DeleteVotesOnThreadArgs_1 = require("./args/DeleteVotesOnThreadArgs");
const FindFirstVotesOnThreadArgs_1 = require("./args/FindFirstVotesOnThreadArgs");
const FindManyVotesOnThreadArgs_1 = require("./args/FindManyVotesOnThreadArgs");
const FindUniqueVotesOnThreadArgs_1 = require("./args/FindUniqueVotesOnThreadArgs");
const GroupByVotesOnThreadArgs_1 = require("./args/GroupByVotesOnThreadArgs");
const UpdateManyVotesOnThreadArgs_1 = require("./args/UpdateManyVotesOnThreadArgs");
const UpdateVotesOnThreadArgs_1 = require("./args/UpdateVotesOnThreadArgs");
const UpsertVotesOnThreadArgs_1 = require("./args/UpsertVotesOnThreadArgs");
const helpers_1 = require("../../../helpers");
const VotesOnThread_1 = require("../../../models/VotesOnThread");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateVotesOnThread_1 = require("../../outputs/AggregateVotesOnThread");
const VotesOnThreadGroupBy_1 = require("../../outputs/VotesOnThreadGroupBy");
let VotesOnThreadCrudResolver = class VotesOnThreadCrudResolver {
    async votesOnThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstVotesOnThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async votesOnThreads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createVotesOnThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyVotesOnThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteVotesOnThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateVotesOnThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyVotesOnThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyVotesOnThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertVotesOnThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateVotesOnThread(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByVotesOnThread(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => VotesOnThread_1.VotesOnThread, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVotesOnThreadArgs_1.FindUniqueVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnThreadCrudResolver.prototype, "votesOnThread", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => VotesOnThread_1.VotesOnThread, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVotesOnThreadArgs_1.FindFirstVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnThreadCrudResolver.prototype, "findFirstVotesOnThread", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VotesOnThread_1.VotesOnThread], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyVotesOnThreadArgs_1.FindManyVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnThreadCrudResolver.prototype, "votesOnThreads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnThread_1.VotesOnThread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateVotesOnThreadArgs_1.CreateVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnThreadCrudResolver.prototype, "createVotesOnThread", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyVotesOnThreadArgs_1.CreateManyVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnThreadCrudResolver.prototype, "createManyVotesOnThread", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnThread_1.VotesOnThread, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteVotesOnThreadArgs_1.DeleteVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnThreadCrudResolver.prototype, "deleteVotesOnThread", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnThread_1.VotesOnThread, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateVotesOnThreadArgs_1.UpdateVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnThreadCrudResolver.prototype, "updateVotesOnThread", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyVotesOnThreadArgs_1.DeleteManyVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnThreadCrudResolver.prototype, "deleteManyVotesOnThread", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyVotesOnThreadArgs_1.UpdateManyVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnThreadCrudResolver.prototype, "updateManyVotesOnThread", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnThread_1.VotesOnThread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertVotesOnThreadArgs_1.UpsertVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnThreadCrudResolver.prototype, "upsertVotesOnThread", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVotesOnThread_1.AggregateVotesOnThread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVotesOnThreadArgs_1.AggregateVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnThreadCrudResolver.prototype, "aggregateVotesOnThread", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VotesOnThreadGroupBy_1.VotesOnThreadGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByVotesOnThreadArgs_1.GroupByVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnThreadCrudResolver.prototype, "groupByVotesOnThread", null);
VotesOnThreadCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnThread_1.VotesOnThread)
], VotesOnThreadCrudResolver);
exports.VotesOnThreadCrudResolver = VotesOnThreadCrudResolver;
