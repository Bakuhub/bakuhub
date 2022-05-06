"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateVotesOnPremiseArgs_1 = require("./args/AggregateVotesOnPremiseArgs");
const CreateManyVotesOnPremiseArgs_1 = require("./args/CreateManyVotesOnPremiseArgs");
const CreateVotesOnPremiseArgs_1 = require("./args/CreateVotesOnPremiseArgs");
const DeleteManyVotesOnPremiseArgs_1 = require("./args/DeleteManyVotesOnPremiseArgs");
const DeleteVotesOnPremiseArgs_1 = require("./args/DeleteVotesOnPremiseArgs");
const FindFirstVotesOnPremiseArgs_1 = require("./args/FindFirstVotesOnPremiseArgs");
const FindManyVotesOnPremiseArgs_1 = require("./args/FindManyVotesOnPremiseArgs");
const FindUniqueVotesOnPremiseArgs_1 = require("./args/FindUniqueVotesOnPremiseArgs");
const GroupByVotesOnPremiseArgs_1 = require("./args/GroupByVotesOnPremiseArgs");
const UpdateManyVotesOnPremiseArgs_1 = require("./args/UpdateManyVotesOnPremiseArgs");
const UpdateVotesOnPremiseArgs_1 = require("./args/UpdateVotesOnPremiseArgs");
const UpsertVotesOnPremiseArgs_1 = require("./args/UpsertVotesOnPremiseArgs");
const helpers_1 = require("../../../helpers");
const VotesOnPremise_1 = require("../../../models/VotesOnPremise");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateVotesOnPremise_1 = require("../../outputs/AggregateVotesOnPremise");
const VotesOnPremiseGroupBy_1 = require("../../outputs/VotesOnPremiseGroupBy");
let VotesOnPremiseCrudResolver = class VotesOnPremiseCrudResolver {
    async votesOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstVotesOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async votesOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createVotesOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyVotesOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteVotesOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateVotesOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyVotesOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyVotesOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertVotesOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateVotesOnPremise(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByVotesOnPremise(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => VotesOnPremise_1.VotesOnPremise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVotesOnPremiseArgs_1.FindUniqueVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnPremiseCrudResolver.prototype, "votesOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => VotesOnPremise_1.VotesOnPremise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVotesOnPremiseArgs_1.FindFirstVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnPremiseCrudResolver.prototype, "findFirstVotesOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VotesOnPremise_1.VotesOnPremise], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyVotesOnPremiseArgs_1.FindManyVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnPremiseCrudResolver.prototype, "votesOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnPremise_1.VotesOnPremise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateVotesOnPremiseArgs_1.CreateVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnPremiseCrudResolver.prototype, "createVotesOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyVotesOnPremiseArgs_1.CreateManyVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnPremiseCrudResolver.prototype, "createManyVotesOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnPremise_1.VotesOnPremise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteVotesOnPremiseArgs_1.DeleteVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnPremiseCrudResolver.prototype, "deleteVotesOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnPremise_1.VotesOnPremise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateVotesOnPremiseArgs_1.UpdateVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnPremiseCrudResolver.prototype, "updateVotesOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyVotesOnPremiseArgs_1.DeleteManyVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnPremiseCrudResolver.prototype, "deleteManyVotesOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyVotesOnPremiseArgs_1.UpdateManyVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnPremiseCrudResolver.prototype, "updateManyVotesOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnPremise_1.VotesOnPremise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertVotesOnPremiseArgs_1.UpsertVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnPremiseCrudResolver.prototype, "upsertVotesOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVotesOnPremise_1.AggregateVotesOnPremise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVotesOnPremiseArgs_1.AggregateVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnPremiseCrudResolver.prototype, "aggregateVotesOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VotesOnPremiseGroupBy_1.VotesOnPremiseGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByVotesOnPremiseArgs_1.GroupByVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnPremiseCrudResolver.prototype, "groupByVotesOnPremise", null);
VotesOnPremiseCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnPremise_1.VotesOnPremise)
], VotesOnPremiseCrudResolver);
exports.VotesOnPremiseCrudResolver = VotesOnPremiseCrudResolver;
