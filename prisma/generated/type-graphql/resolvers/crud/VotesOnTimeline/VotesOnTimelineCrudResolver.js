"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateVotesOnTimelineArgs_1 = require("./args/AggregateVotesOnTimelineArgs");
const CreateManyVotesOnTimelineArgs_1 = require("./args/CreateManyVotesOnTimelineArgs");
const CreateVotesOnTimelineArgs_1 = require("./args/CreateVotesOnTimelineArgs");
const DeleteManyVotesOnTimelineArgs_1 = require("./args/DeleteManyVotesOnTimelineArgs");
const DeleteVotesOnTimelineArgs_1 = require("./args/DeleteVotesOnTimelineArgs");
const FindFirstVotesOnTimelineArgs_1 = require("./args/FindFirstVotesOnTimelineArgs");
const FindManyVotesOnTimelineArgs_1 = require("./args/FindManyVotesOnTimelineArgs");
const FindUniqueVotesOnTimelineArgs_1 = require("./args/FindUniqueVotesOnTimelineArgs");
const GroupByVotesOnTimelineArgs_1 = require("./args/GroupByVotesOnTimelineArgs");
const UpdateManyVotesOnTimelineArgs_1 = require("./args/UpdateManyVotesOnTimelineArgs");
const UpdateVotesOnTimelineArgs_1 = require("./args/UpdateVotesOnTimelineArgs");
const UpsertVotesOnTimelineArgs_1 = require("./args/UpsertVotesOnTimelineArgs");
const helpers_1 = require("../../../helpers");
const VotesOnTimeline_1 = require("../../../models/VotesOnTimeline");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateVotesOnTimeline_1 = require("../../outputs/AggregateVotesOnTimeline");
const VotesOnTimelineGroupBy_1 = require("../../outputs/VotesOnTimelineGroupBy");
let VotesOnTimelineCrudResolver = class VotesOnTimelineCrudResolver {
    async votesOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstVotesOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async votesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createVotesOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyVotesOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteVotesOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateVotesOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyVotesOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyVotesOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertVotesOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateVotesOnTimeline(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByVotesOnTimeline(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => VotesOnTimeline_1.VotesOnTimeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVotesOnTimelineArgs_1.FindUniqueVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnTimelineCrudResolver.prototype, "votesOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => VotesOnTimeline_1.VotesOnTimeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVotesOnTimelineArgs_1.FindFirstVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnTimelineCrudResolver.prototype, "findFirstVotesOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VotesOnTimeline_1.VotesOnTimeline], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyVotesOnTimelineArgs_1.FindManyVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnTimelineCrudResolver.prototype, "votesOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnTimeline_1.VotesOnTimeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateVotesOnTimelineArgs_1.CreateVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnTimelineCrudResolver.prototype, "createVotesOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyVotesOnTimelineArgs_1.CreateManyVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnTimelineCrudResolver.prototype, "createManyVotesOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnTimeline_1.VotesOnTimeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteVotesOnTimelineArgs_1.DeleteVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnTimelineCrudResolver.prototype, "deleteVotesOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnTimeline_1.VotesOnTimeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateVotesOnTimelineArgs_1.UpdateVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnTimelineCrudResolver.prototype, "updateVotesOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyVotesOnTimelineArgs_1.DeleteManyVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnTimelineCrudResolver.prototype, "deleteManyVotesOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyVotesOnTimelineArgs_1.UpdateManyVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnTimelineCrudResolver.prototype, "updateManyVotesOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnTimeline_1.VotesOnTimeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertVotesOnTimelineArgs_1.UpsertVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnTimelineCrudResolver.prototype, "upsertVotesOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVotesOnTimeline_1.AggregateVotesOnTimeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVotesOnTimelineArgs_1.AggregateVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnTimelineCrudResolver.prototype, "aggregateVotesOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VotesOnTimelineGroupBy_1.VotesOnTimelineGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByVotesOnTimelineArgs_1.GroupByVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnTimelineCrudResolver.prototype, "groupByVotesOnTimeline", null);
VotesOnTimelineCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnTimeline_1.VotesOnTimeline)
], VotesOnTimelineCrudResolver);
exports.VotesOnTimelineCrudResolver = VotesOnTimelineCrudResolver;
