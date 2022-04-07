"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReactionOnTimelinesArgs_1 = require("./args/AggregateReactionOnTimelinesArgs");
const CreateManyReactionOnTimelinesArgs_1 = require("./args/CreateManyReactionOnTimelinesArgs");
const CreateReactionOnTimelinesArgs_1 = require("./args/CreateReactionOnTimelinesArgs");
const DeleteManyReactionOnTimelinesArgs_1 = require("./args/DeleteManyReactionOnTimelinesArgs");
const DeleteReactionOnTimelinesArgs_1 = require("./args/DeleteReactionOnTimelinesArgs");
const FindFirstReactionOnTimelinesArgs_1 = require("./args/FindFirstReactionOnTimelinesArgs");
const FindManyReactionOnTimelinesArgs_1 = require("./args/FindManyReactionOnTimelinesArgs");
const FindUniqueReactionOnTimelinesArgs_1 = require("./args/FindUniqueReactionOnTimelinesArgs");
const GroupByReactionOnTimelinesArgs_1 = require("./args/GroupByReactionOnTimelinesArgs");
const UpdateManyReactionOnTimelinesArgs_1 = require("./args/UpdateManyReactionOnTimelinesArgs");
const UpdateReactionOnTimelinesArgs_1 = require("./args/UpdateReactionOnTimelinesArgs");
const UpsertReactionOnTimelinesArgs_1 = require("./args/UpsertReactionOnTimelinesArgs");
const helpers_1 = require("../../../helpers");
const ReactionOnTimelines_1 = require("../../../models/ReactionOnTimelines");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReactionOnTimelines_1 = require("../../outputs/AggregateReactionOnTimelines");
const ReactionOnTimelinesGroupBy_1 = require("../../outputs/ReactionOnTimelinesGroupBy");
let ReactionOnTimelinesCrudResolver = class ReactionOnTimelinesCrudResolver {
    async findUniqueReactionOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReactionOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyReactionOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createReactionOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyReactionOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteReactionOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateReactionOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyReactionOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyReactionOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertReactionOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateReactionOnTimelines(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByReactionOnTimelines(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ReactionOnTimelines_1.ReactionOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReactionOnTimelinesArgs_1.FindUniqueReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnTimelinesCrudResolver.prototype, "findUniqueReactionOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ReactionOnTimelines_1.ReactionOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReactionOnTimelinesArgs_1.FindFirstReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnTimelinesCrudResolver.prototype, "findFirstReactionOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReactionOnTimelines_1.ReactionOnTimelines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReactionOnTimelinesArgs_1.FindManyReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnTimelinesCrudResolver.prototype, "findManyReactionOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnTimelines_1.ReactionOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateReactionOnTimelinesArgs_1.CreateReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnTimelinesCrudResolver.prototype, "createReactionOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReactionOnTimelinesArgs_1.CreateManyReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnTimelinesCrudResolver.prototype, "createManyReactionOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnTimelines_1.ReactionOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReactionOnTimelinesArgs_1.DeleteReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnTimelinesCrudResolver.prototype, "deleteReactionOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnTimelines_1.ReactionOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateReactionOnTimelinesArgs_1.UpdateReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnTimelinesCrudResolver.prototype, "updateReactionOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReactionOnTimelinesArgs_1.DeleteManyReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnTimelinesCrudResolver.prototype, "deleteManyReactionOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReactionOnTimelinesArgs_1.UpdateManyReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnTimelinesCrudResolver.prototype, "updateManyReactionOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnTimelines_1.ReactionOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertReactionOnTimelinesArgs_1.UpsertReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnTimelinesCrudResolver.prototype, "upsertReactionOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReactionOnTimelines_1.AggregateReactionOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReactionOnTimelinesArgs_1.AggregateReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnTimelinesCrudResolver.prototype, "aggregateReactionOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReactionOnTimelinesGroupBy_1.ReactionOnTimelinesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReactionOnTimelinesArgs_1.GroupByReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnTimelinesCrudResolver.prototype, "groupByReactionOnTimelines", null);
ReactionOnTimelinesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnTimelines_1.ReactionOnTimelines)
], ReactionOnTimelinesCrudResolver);
exports.ReactionOnTimelinesCrudResolver = ReactionOnTimelinesCrudResolver;
