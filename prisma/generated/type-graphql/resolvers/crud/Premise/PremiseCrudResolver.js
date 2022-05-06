"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePremiseArgs_1 = require("./args/AggregatePremiseArgs");
const CreateManyPremiseArgs_1 = require("./args/CreateManyPremiseArgs");
const CreatePremiseArgs_1 = require("./args/CreatePremiseArgs");
const DeleteManyPremiseArgs_1 = require("./args/DeleteManyPremiseArgs");
const DeletePremiseArgs_1 = require("./args/DeletePremiseArgs");
const FindFirstPremiseArgs_1 = require("./args/FindFirstPremiseArgs");
const FindManyPremiseArgs_1 = require("./args/FindManyPremiseArgs");
const FindUniquePremiseArgs_1 = require("./args/FindUniquePremiseArgs");
const GroupByPremiseArgs_1 = require("./args/GroupByPremiseArgs");
const UpdateManyPremiseArgs_1 = require("./args/UpdateManyPremiseArgs");
const UpdatePremiseArgs_1 = require("./args/UpdatePremiseArgs");
const UpsertPremiseArgs_1 = require("./args/UpsertPremiseArgs");
const helpers_1 = require("../../../helpers");
const Premise_1 = require("../../../models/Premise");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePremise_1 = require("../../outputs/AggregatePremise");
const PremiseGroupBy_1 = require("../../outputs/PremiseGroupBy");
let PremiseCrudResolver = class PremiseCrudResolver {
    async premise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async premises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deletePremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updatePremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregatePremise(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByPremise(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Premise_1.Premise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePremiseArgs_1.FindUniquePremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseCrudResolver.prototype, "premise", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Premise_1.Premise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPremiseArgs_1.FindFirstPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseCrudResolver.prototype, "findFirstPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Premise_1.Premise], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPremiseArgs_1.FindManyPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseCrudResolver.prototype, "premises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Premise_1.Premise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePremiseArgs_1.CreatePremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseCrudResolver.prototype, "createPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPremiseArgs_1.CreateManyPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseCrudResolver.prototype, "createManyPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Premise_1.Premise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeletePremiseArgs_1.DeletePremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseCrudResolver.prototype, "deletePremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Premise_1.Premise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdatePremiseArgs_1.UpdatePremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseCrudResolver.prototype, "updatePremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPremiseArgs_1.DeleteManyPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseCrudResolver.prototype, "deleteManyPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPremiseArgs_1.UpdateManyPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseCrudResolver.prototype, "updateManyPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Premise_1.Premise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertPremiseArgs_1.UpsertPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseCrudResolver.prototype, "upsertPremise", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePremise_1.AggregatePremise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePremiseArgs_1.AggregatePremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseCrudResolver.prototype, "aggregatePremise", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PremiseGroupBy_1.PremiseGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPremiseArgs_1.GroupByPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseCrudResolver.prototype, "groupByPremise", null);
PremiseCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Premise_1.Premise)
], PremiseCrudResolver);
exports.PremiseCrudResolver = PremiseCrudResolver;
