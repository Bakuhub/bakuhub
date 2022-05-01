"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSupscriptionsOnTimelinesArgs_1 = require("./args/AggregateSupscriptionsOnTimelinesArgs");
const CreateManySupscriptionsOnTimelinesArgs_1 = require("./args/CreateManySupscriptionsOnTimelinesArgs");
const CreateSupscriptionsOnTimelinesArgs_1 = require("./args/CreateSupscriptionsOnTimelinesArgs");
const DeleteManySupscriptionsOnTimelinesArgs_1 = require("./args/DeleteManySupscriptionsOnTimelinesArgs");
const DeleteSupscriptionsOnTimelinesArgs_1 = require("./args/DeleteSupscriptionsOnTimelinesArgs");
const FindFirstSupscriptionsOnTimelinesArgs_1 = require("./args/FindFirstSupscriptionsOnTimelinesArgs");
const FindManySupscriptionsOnTimelinesArgs_1 = require("./args/FindManySupscriptionsOnTimelinesArgs");
const FindUniqueSupscriptionsOnTimelinesArgs_1 = require("./args/FindUniqueSupscriptionsOnTimelinesArgs");
const GroupBySupscriptionsOnTimelinesArgs_1 = require("./args/GroupBySupscriptionsOnTimelinesArgs");
const UpdateManySupscriptionsOnTimelinesArgs_1 = require("./args/UpdateManySupscriptionsOnTimelinesArgs");
const UpdateSupscriptionsOnTimelinesArgs_1 = require("./args/UpdateSupscriptionsOnTimelinesArgs");
const UpsertSupscriptionsOnTimelinesArgs_1 = require("./args/UpsertSupscriptionsOnTimelinesArgs");
const helpers_1 = require("../../../helpers");
const SupscriptionsOnTimelines_1 = require("../../../models/SupscriptionsOnTimelines");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSupscriptionsOnTimelines_1 = require("../../outputs/AggregateSupscriptionsOnTimelines");
const SupscriptionsOnTimelinesGroupBy_1 = require("../../outputs/SupscriptionsOnTimelinesGroupBy");
let SupscriptionsOnTimelinesCrudResolver = class SupscriptionsOnTimelinesCrudResolver {
    async findUniqueSupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManySupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManySupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSupscriptionsOnTimelines(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySupscriptionsOnTimelines(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSupscriptionsOnTimelinesArgs_1.FindUniqueSupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SupscriptionsOnTimelinesCrudResolver.prototype, "findUniqueSupscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSupscriptionsOnTimelinesArgs_1.FindFirstSupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SupscriptionsOnTimelinesCrudResolver.prototype, "findFirstSupscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SupscriptionsOnTimelines_1.SupscriptionsOnTimelines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySupscriptionsOnTimelinesArgs_1.FindManySupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SupscriptionsOnTimelinesCrudResolver.prototype, "findManySupscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateSupscriptionsOnTimelinesArgs_1.CreateSupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SupscriptionsOnTimelinesCrudResolver.prototype, "createSupscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySupscriptionsOnTimelinesArgs_1.CreateManySupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SupscriptionsOnTimelinesCrudResolver.prototype, "createManySupscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteSupscriptionsOnTimelinesArgs_1.DeleteSupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SupscriptionsOnTimelinesCrudResolver.prototype, "deleteSupscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateSupscriptionsOnTimelinesArgs_1.UpdateSupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SupscriptionsOnTimelinesCrudResolver.prototype, "updateSupscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySupscriptionsOnTimelinesArgs_1.DeleteManySupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SupscriptionsOnTimelinesCrudResolver.prototype, "deleteManySupscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySupscriptionsOnTimelinesArgs_1.UpdateManySupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SupscriptionsOnTimelinesCrudResolver.prototype, "updateManySupscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSupscriptionsOnTimelinesArgs_1.UpsertSupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SupscriptionsOnTimelinesCrudResolver.prototype, "upsertSupscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSupscriptionsOnTimelines_1.AggregateSupscriptionsOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSupscriptionsOnTimelinesArgs_1.AggregateSupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SupscriptionsOnTimelinesCrudResolver.prototype, "aggregateSupscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SupscriptionsOnTimelinesGroupBy_1.SupscriptionsOnTimelinesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySupscriptionsOnTimelinesArgs_1.GroupBySupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SupscriptionsOnTimelinesCrudResolver.prototype, "groupBySupscriptionsOnTimelines", null);
SupscriptionsOnTimelinesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines)
], SupscriptionsOnTimelinesCrudResolver);
exports.SupscriptionsOnTimelinesCrudResolver = SupscriptionsOnTimelinesCrudResolver;
