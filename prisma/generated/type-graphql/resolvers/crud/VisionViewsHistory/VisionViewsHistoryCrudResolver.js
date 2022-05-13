"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateVisionViewsHistoryArgs_1 = require("./args/AggregateVisionViewsHistoryArgs");
const CreateManyVisionViewsHistoryArgs_1 = require("./args/CreateManyVisionViewsHistoryArgs");
const CreateVisionViewsHistoryArgs_1 = require("./args/CreateVisionViewsHistoryArgs");
const DeleteManyVisionViewsHistoryArgs_1 = require("./args/DeleteManyVisionViewsHistoryArgs");
const DeleteVisionViewsHistoryArgs_1 = require("./args/DeleteVisionViewsHistoryArgs");
const FindFirstVisionViewsHistoryArgs_1 = require("./args/FindFirstVisionViewsHistoryArgs");
const FindManyVisionViewsHistoryArgs_1 = require("./args/FindManyVisionViewsHistoryArgs");
const FindUniqueVisionViewsHistoryArgs_1 = require("./args/FindUniqueVisionViewsHistoryArgs");
const GroupByVisionViewsHistoryArgs_1 = require("./args/GroupByVisionViewsHistoryArgs");
const UpdateManyVisionViewsHistoryArgs_1 = require("./args/UpdateManyVisionViewsHistoryArgs");
const UpdateVisionViewsHistoryArgs_1 = require("./args/UpdateVisionViewsHistoryArgs");
const UpsertVisionViewsHistoryArgs_1 = require("./args/UpsertVisionViewsHistoryArgs");
const helpers_1 = require("../../../helpers");
const VisionViewsHistory_1 = require("../../../models/VisionViewsHistory");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateVisionViewsHistory_1 = require("../../outputs/AggregateVisionViewsHistory");
const VisionViewsHistoryGroupBy_1 = require("../../outputs/VisionViewsHistoryGroupBy");
let VisionViewsHistoryCrudResolver = class VisionViewsHistoryCrudResolver {
    async visionViewsHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstVisionViewsHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async visionViewsHistories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createVisionViewsHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyVisionViewsHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteVisionViewsHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateVisionViewsHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyVisionViewsHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyVisionViewsHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertVisionViewsHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateVisionViewsHistory(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByVisionViewsHistory(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => VisionViewsHistory_1.VisionViewsHistory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVisionViewsHistoryArgs_1.FindUniqueVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionViewsHistoryCrudResolver.prototype, "visionViewsHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => VisionViewsHistory_1.VisionViewsHistory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVisionViewsHistoryArgs_1.FindFirstVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionViewsHistoryCrudResolver.prototype, "findFirstVisionViewsHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VisionViewsHistory_1.VisionViewsHistory], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyVisionViewsHistoryArgs_1.FindManyVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionViewsHistoryCrudResolver.prototype, "visionViewsHistories", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VisionViewsHistory_1.VisionViewsHistory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateVisionViewsHistoryArgs_1.CreateVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionViewsHistoryCrudResolver.prototype, "createVisionViewsHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyVisionViewsHistoryArgs_1.CreateManyVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionViewsHistoryCrudResolver.prototype, "createManyVisionViewsHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VisionViewsHistory_1.VisionViewsHistory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteVisionViewsHistoryArgs_1.DeleteVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionViewsHistoryCrudResolver.prototype, "deleteVisionViewsHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VisionViewsHistory_1.VisionViewsHistory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateVisionViewsHistoryArgs_1.UpdateVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionViewsHistoryCrudResolver.prototype, "updateVisionViewsHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyVisionViewsHistoryArgs_1.DeleteManyVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionViewsHistoryCrudResolver.prototype, "deleteManyVisionViewsHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyVisionViewsHistoryArgs_1.UpdateManyVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionViewsHistoryCrudResolver.prototype, "updateManyVisionViewsHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VisionViewsHistory_1.VisionViewsHistory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertVisionViewsHistoryArgs_1.UpsertVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionViewsHistoryCrudResolver.prototype, "upsertVisionViewsHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVisionViewsHistory_1.AggregateVisionViewsHistory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVisionViewsHistoryArgs_1.AggregateVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionViewsHistoryCrudResolver.prototype, "aggregateVisionViewsHistory", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VisionViewsHistoryGroupBy_1.VisionViewsHistoryGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByVisionViewsHistoryArgs_1.GroupByVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionViewsHistoryCrudResolver.prototype, "groupByVisionViewsHistory", null);
VisionViewsHistoryCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VisionViewsHistory_1.VisionViewsHistory)
], VisionViewsHistoryCrudResolver);
exports.VisionViewsHistoryCrudResolver = VisionViewsHistoryCrudResolver;
