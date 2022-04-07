"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTimelineArgs_1 = require("./args/AggregateTimelineArgs");
const CreateManyTimelineArgs_1 = require("./args/CreateManyTimelineArgs");
const CreateTimelineArgs_1 = require("./args/CreateTimelineArgs");
const DeleteManyTimelineArgs_1 = require("./args/DeleteManyTimelineArgs");
const DeleteTimelineArgs_1 = require("./args/DeleteTimelineArgs");
const FindFirstTimelineArgs_1 = require("./args/FindFirstTimelineArgs");
const FindManyTimelineArgs_1 = require("./args/FindManyTimelineArgs");
const FindUniqueTimelineArgs_1 = require("./args/FindUniqueTimelineArgs");
const GroupByTimelineArgs_1 = require("./args/GroupByTimelineArgs");
const UpdateManyTimelineArgs_1 = require("./args/UpdateManyTimelineArgs");
const UpdateTimelineArgs_1 = require("./args/UpdateTimelineArgs");
const UpsertTimelineArgs_1 = require("./args/UpsertTimelineArgs");
const helpers_1 = require("../../../helpers");
const Timeline_1 = require("../../../models/Timeline");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTimeline_1 = require("../../outputs/AggregateTimeline");
const TimelineGroupBy_1 = require("../../outputs/TimelineGroupBy");
let TimelineCrudResolver = class TimelineCrudResolver {
    async timeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async timelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTimeline(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTimeline(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Timeline_1.Timeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTimelineArgs_1.FindUniqueTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineCrudResolver.prototype, "timeline", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Timeline_1.Timeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTimelineArgs_1.FindFirstTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineCrudResolver.prototype, "findFirstTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Timeline_1.Timeline], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTimelineArgs_1.FindManyTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineCrudResolver.prototype, "timelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Timeline_1.Timeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTimelineArgs_1.CreateTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineCrudResolver.prototype, "createTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTimelineArgs_1.CreateManyTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineCrudResolver.prototype, "createManyTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Timeline_1.Timeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTimelineArgs_1.DeleteTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineCrudResolver.prototype, "deleteTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Timeline_1.Timeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTimelineArgs_1.UpdateTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineCrudResolver.prototype, "updateTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTimelineArgs_1.DeleteManyTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineCrudResolver.prototype, "deleteManyTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTimelineArgs_1.UpdateManyTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineCrudResolver.prototype, "updateManyTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Timeline_1.Timeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTimelineArgs_1.UpsertTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineCrudResolver.prototype, "upsertTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTimeline_1.AggregateTimeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTimelineArgs_1.AggregateTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineCrudResolver.prototype, "aggregateTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TimelineGroupBy_1.TimelineGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTimelineArgs_1.GroupByTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineCrudResolver.prototype, "groupByTimeline", null);
TimelineCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Timeline_1.Timeline)
], TimelineCrudResolver);
exports.TimelineCrudResolver = TimelineCrudResolver;
