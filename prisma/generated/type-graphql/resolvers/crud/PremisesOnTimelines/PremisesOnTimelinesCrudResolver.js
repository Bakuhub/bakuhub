"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePremisesOnTimelinesArgs_1 = require("./args/AggregatePremisesOnTimelinesArgs");
const CreateManyPremisesOnTimelinesArgs_1 = require("./args/CreateManyPremisesOnTimelinesArgs");
const CreatePremisesOnTimelinesArgs_1 = require("./args/CreatePremisesOnTimelinesArgs");
const DeleteManyPremisesOnTimelinesArgs_1 = require("./args/DeleteManyPremisesOnTimelinesArgs");
const DeletePremisesOnTimelinesArgs_1 = require("./args/DeletePremisesOnTimelinesArgs");
const FindFirstPremisesOnTimelinesArgs_1 = require("./args/FindFirstPremisesOnTimelinesArgs");
const FindManyPremisesOnTimelinesArgs_1 = require("./args/FindManyPremisesOnTimelinesArgs");
const FindUniquePremisesOnTimelinesArgs_1 = require("./args/FindUniquePremisesOnTimelinesArgs");
const GroupByPremisesOnTimelinesArgs_1 = require("./args/GroupByPremisesOnTimelinesArgs");
const UpdateManyPremisesOnTimelinesArgs_1 = require("./args/UpdateManyPremisesOnTimelinesArgs");
const UpdatePremisesOnTimelinesArgs_1 = require("./args/UpdatePremisesOnTimelinesArgs");
const UpsertPremisesOnTimelinesArgs_1 = require("./args/UpsertPremisesOnTimelinesArgs");
const helpers_1 = require("../../../helpers");
const PremisesOnTimelines_1 = require("../../../models/PremisesOnTimelines");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePremisesOnTimelines_1 = require("../../outputs/AggregatePremisesOnTimelines");
const PremisesOnTimelinesGroupBy_1 = require("../../outputs/PremisesOnTimelinesGroupBy");
let PremisesOnTimelinesCrudResolver = class PremisesOnTimelinesCrudResolver {
    async findUniquePremisesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPremisesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyPremisesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createPremisesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyPremisesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deletePremisesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updatePremisesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPremisesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyPremisesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertPremisesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregatePremisesOnTimelines(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByPremisesOnTimelines(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => PremisesOnTimelines_1.PremisesOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePremisesOnTimelinesArgs_1.FindUniquePremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremisesOnTimelinesCrudResolver.prototype, "findUniquePremisesOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => PremisesOnTimelines_1.PremisesOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPremisesOnTimelinesArgs_1.FindFirstPremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremisesOnTimelinesCrudResolver.prototype, "findFirstPremisesOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PremisesOnTimelines_1.PremisesOnTimelines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPremisesOnTimelinesArgs_1.FindManyPremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremisesOnTimelinesCrudResolver.prototype, "findManyPremisesOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PremisesOnTimelines_1.PremisesOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePremisesOnTimelinesArgs_1.CreatePremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremisesOnTimelinesCrudResolver.prototype, "createPremisesOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPremisesOnTimelinesArgs_1.CreateManyPremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremisesOnTimelinesCrudResolver.prototype, "createManyPremisesOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PremisesOnTimelines_1.PremisesOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeletePremisesOnTimelinesArgs_1.DeletePremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremisesOnTimelinesCrudResolver.prototype, "deletePremisesOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PremisesOnTimelines_1.PremisesOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdatePremisesOnTimelinesArgs_1.UpdatePremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremisesOnTimelinesCrudResolver.prototype, "updatePremisesOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPremisesOnTimelinesArgs_1.DeleteManyPremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremisesOnTimelinesCrudResolver.prototype, "deleteManyPremisesOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPremisesOnTimelinesArgs_1.UpdateManyPremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremisesOnTimelinesCrudResolver.prototype, "updateManyPremisesOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PremisesOnTimelines_1.PremisesOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertPremisesOnTimelinesArgs_1.UpsertPremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremisesOnTimelinesCrudResolver.prototype, "upsertPremisesOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePremisesOnTimelines_1.AggregatePremisesOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePremisesOnTimelinesArgs_1.AggregatePremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremisesOnTimelinesCrudResolver.prototype, "aggregatePremisesOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PremisesOnTimelinesGroupBy_1.PremisesOnTimelinesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPremisesOnTimelinesArgs_1.GroupByPremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremisesOnTimelinesCrudResolver.prototype, "groupByPremisesOnTimelines", null);
PremisesOnTimelinesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PremisesOnTimelines_1.PremisesOnTimelines)
], PremisesOnTimelinesCrudResolver);
exports.PremisesOnTimelinesCrudResolver = PremisesOnTimelinesCrudResolver;
