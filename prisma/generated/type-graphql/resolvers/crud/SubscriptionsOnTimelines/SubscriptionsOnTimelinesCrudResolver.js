"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSubscriptionsOnTimelinesArgs_1 = require("./args/AggregateSubscriptionsOnTimelinesArgs");
const CreateManySubscriptionsOnTimelinesArgs_1 = require("./args/CreateManySubscriptionsOnTimelinesArgs");
const CreateSubscriptionsOnTimelinesArgs_1 = require("./args/CreateSubscriptionsOnTimelinesArgs");
const DeleteManySubscriptionsOnTimelinesArgs_1 = require("./args/DeleteManySubscriptionsOnTimelinesArgs");
const DeleteSubscriptionsOnTimelinesArgs_1 = require("./args/DeleteSubscriptionsOnTimelinesArgs");
const FindFirstSubscriptionsOnTimelinesArgs_1 = require("./args/FindFirstSubscriptionsOnTimelinesArgs");
const FindManySubscriptionsOnTimelinesArgs_1 = require("./args/FindManySubscriptionsOnTimelinesArgs");
const FindUniqueSubscriptionsOnTimelinesArgs_1 = require("./args/FindUniqueSubscriptionsOnTimelinesArgs");
const GroupBySubscriptionsOnTimelinesArgs_1 = require("./args/GroupBySubscriptionsOnTimelinesArgs");
const UpdateManySubscriptionsOnTimelinesArgs_1 = require("./args/UpdateManySubscriptionsOnTimelinesArgs");
const UpdateSubscriptionsOnTimelinesArgs_1 = require("./args/UpdateSubscriptionsOnTimelinesArgs");
const UpsertSubscriptionsOnTimelinesArgs_1 = require("./args/UpsertSubscriptionsOnTimelinesArgs");
const helpers_1 = require("../../../helpers");
const SubscriptionsOnTimelines_1 = require("../../../models/SubscriptionsOnTimelines");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSubscriptionsOnTimelines_1 = require("../../outputs/AggregateSubscriptionsOnTimelines");
const SubscriptionsOnTimelinesGroupBy_1 = require("../../outputs/SubscriptionsOnTimelinesGroupBy");
let SubscriptionsOnTimelinesCrudResolver = class SubscriptionsOnTimelinesCrudResolver {
    async findUniqueSubscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSubscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManySubscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSubscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManySubscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSubscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSubscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySubscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySubscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSubscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSubscriptionsOnTimelines(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySubscriptionsOnTimelines(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSubscriptionsOnTimelinesArgs_1.FindUniqueSubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnTimelinesCrudResolver.prototype, "findUniqueSubscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSubscriptionsOnTimelinesArgs_1.FindFirstSubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnTimelinesCrudResolver.prototype, "findFirstSubscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SubscriptionsOnTimelines_1.SubscriptionsOnTimelines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySubscriptionsOnTimelinesArgs_1.FindManySubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnTimelinesCrudResolver.prototype, "findManySubscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateSubscriptionsOnTimelinesArgs_1.CreateSubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnTimelinesCrudResolver.prototype, "createSubscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySubscriptionsOnTimelinesArgs_1.CreateManySubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnTimelinesCrudResolver.prototype, "createManySubscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteSubscriptionsOnTimelinesArgs_1.DeleteSubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnTimelinesCrudResolver.prototype, "deleteSubscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateSubscriptionsOnTimelinesArgs_1.UpdateSubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnTimelinesCrudResolver.prototype, "updateSubscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySubscriptionsOnTimelinesArgs_1.DeleteManySubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnTimelinesCrudResolver.prototype, "deleteManySubscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySubscriptionsOnTimelinesArgs_1.UpdateManySubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnTimelinesCrudResolver.prototype, "updateManySubscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSubscriptionsOnTimelinesArgs_1.UpsertSubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnTimelinesCrudResolver.prototype, "upsertSubscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSubscriptionsOnTimelines_1.AggregateSubscriptionsOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSubscriptionsOnTimelinesArgs_1.AggregateSubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnTimelinesCrudResolver.prototype, "aggregateSubscriptionsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SubscriptionsOnTimelinesGroupBy_1.SubscriptionsOnTimelinesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySubscriptionsOnTimelinesArgs_1.GroupBySubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnTimelinesCrudResolver.prototype, "groupBySubscriptionsOnTimelines", null);
SubscriptionsOnTimelinesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines)
], SubscriptionsOnTimelinesCrudResolver);
exports.SubscriptionsOnTimelinesCrudResolver = SubscriptionsOnTimelinesCrudResolver;
