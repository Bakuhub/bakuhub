"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateVotesOnVisionArgs_1 = require("./args/AggregateVotesOnVisionArgs");
const CreateManyVotesOnVisionArgs_1 = require("./args/CreateManyVotesOnVisionArgs");
const CreateVotesOnVisionArgs_1 = require("./args/CreateVotesOnVisionArgs");
const DeleteManyVotesOnVisionArgs_1 = require("./args/DeleteManyVotesOnVisionArgs");
const DeleteVotesOnVisionArgs_1 = require("./args/DeleteVotesOnVisionArgs");
const FindFirstVotesOnVisionArgs_1 = require("./args/FindFirstVotesOnVisionArgs");
const FindManyVotesOnVisionArgs_1 = require("./args/FindManyVotesOnVisionArgs");
const FindUniqueVotesOnVisionArgs_1 = require("./args/FindUniqueVotesOnVisionArgs");
const GroupByVotesOnVisionArgs_1 = require("./args/GroupByVotesOnVisionArgs");
const UpdateManyVotesOnVisionArgs_1 = require("./args/UpdateManyVotesOnVisionArgs");
const UpdateVotesOnVisionArgs_1 = require("./args/UpdateVotesOnVisionArgs");
const UpsertVotesOnVisionArgs_1 = require("./args/UpsertVotesOnVisionArgs");
const helpers_1 = require("../../../helpers");
const VotesOnVision_1 = require("../../../models/VotesOnVision");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateVotesOnVision_1 = require("../../outputs/AggregateVotesOnVision");
const VotesOnVisionGroupBy_1 = require("../../outputs/VotesOnVisionGroupBy");
let VotesOnVisionCrudResolver = class VotesOnVisionCrudResolver {
    async votesOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstVotesOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async votesOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createVotesOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyVotesOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteVotesOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateVotesOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyVotesOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyVotesOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertVotesOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateVotesOnVision(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByVotesOnVision(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => VotesOnVision_1.VotesOnVision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVotesOnVisionArgs_1.FindUniqueVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnVisionCrudResolver.prototype, "votesOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => VotesOnVision_1.VotesOnVision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVotesOnVisionArgs_1.FindFirstVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnVisionCrudResolver.prototype, "findFirstVotesOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VotesOnVision_1.VotesOnVision], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyVotesOnVisionArgs_1.FindManyVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnVisionCrudResolver.prototype, "votesOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnVision_1.VotesOnVision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateVotesOnVisionArgs_1.CreateVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnVisionCrudResolver.prototype, "createVotesOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyVotesOnVisionArgs_1.CreateManyVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnVisionCrudResolver.prototype, "createManyVotesOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnVision_1.VotesOnVision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteVotesOnVisionArgs_1.DeleteVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnVisionCrudResolver.prototype, "deleteVotesOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnVision_1.VotesOnVision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateVotesOnVisionArgs_1.UpdateVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnVisionCrudResolver.prototype, "updateVotesOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyVotesOnVisionArgs_1.DeleteManyVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnVisionCrudResolver.prototype, "deleteManyVotesOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyVotesOnVisionArgs_1.UpdateManyVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnVisionCrudResolver.prototype, "updateManyVotesOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnVision_1.VotesOnVision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertVotesOnVisionArgs_1.UpsertVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnVisionCrudResolver.prototype, "upsertVotesOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVotesOnVision_1.AggregateVotesOnVision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVotesOnVisionArgs_1.AggregateVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnVisionCrudResolver.prototype, "aggregateVotesOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VotesOnVisionGroupBy_1.VotesOnVisionGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByVotesOnVisionArgs_1.GroupByVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnVisionCrudResolver.prototype, "groupByVotesOnVision", null);
VotesOnVisionCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnVision_1.VotesOnVision)
], VotesOnVisionCrudResolver);
exports.VotesOnVisionCrudResolver = VotesOnVisionCrudResolver;
