"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReactionOnThreadsArgs_1 = require("./args/AggregateReactionOnThreadsArgs");
const CreateManyReactionOnThreadsArgs_1 = require("./args/CreateManyReactionOnThreadsArgs");
const CreateReactionOnThreadsArgs_1 = require("./args/CreateReactionOnThreadsArgs");
const DeleteManyReactionOnThreadsArgs_1 = require("./args/DeleteManyReactionOnThreadsArgs");
const DeleteReactionOnThreadsArgs_1 = require("./args/DeleteReactionOnThreadsArgs");
const FindFirstReactionOnThreadsArgs_1 = require("./args/FindFirstReactionOnThreadsArgs");
const FindManyReactionOnThreadsArgs_1 = require("./args/FindManyReactionOnThreadsArgs");
const FindUniqueReactionOnThreadsArgs_1 = require("./args/FindUniqueReactionOnThreadsArgs");
const GroupByReactionOnThreadsArgs_1 = require("./args/GroupByReactionOnThreadsArgs");
const UpdateManyReactionOnThreadsArgs_1 = require("./args/UpdateManyReactionOnThreadsArgs");
const UpdateReactionOnThreadsArgs_1 = require("./args/UpdateReactionOnThreadsArgs");
const UpsertReactionOnThreadsArgs_1 = require("./args/UpsertReactionOnThreadsArgs");
const helpers_1 = require("../../../helpers");
const ReactionOnThreads_1 = require("../../../models/ReactionOnThreads");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReactionOnThreads_1 = require("../../outputs/AggregateReactionOnThreads");
const ReactionOnThreadsGroupBy_1 = require("../../outputs/ReactionOnThreadsGroupBy");
let ReactionOnThreadsCrudResolver = class ReactionOnThreadsCrudResolver {
    async findUniqueReactionOnThreads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReactionOnThreads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyReactionOnThreads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createReactionOnThreads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyReactionOnThreads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteReactionOnThreads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateReactionOnThreads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyReactionOnThreads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyReactionOnThreads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertReactionOnThreads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateReactionOnThreads(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByReactionOnThreads(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ReactionOnThreads_1.ReactionOnThreads, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReactionOnThreadsArgs_1.FindUniqueReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnThreadsCrudResolver.prototype, "findUniqueReactionOnThreads", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ReactionOnThreads_1.ReactionOnThreads, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReactionOnThreadsArgs_1.FindFirstReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnThreadsCrudResolver.prototype, "findFirstReactionOnThreads", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReactionOnThreads_1.ReactionOnThreads], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReactionOnThreadsArgs_1.FindManyReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnThreadsCrudResolver.prototype, "findManyReactionOnThreads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnThreads_1.ReactionOnThreads, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateReactionOnThreadsArgs_1.CreateReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnThreadsCrudResolver.prototype, "createReactionOnThreads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReactionOnThreadsArgs_1.CreateManyReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnThreadsCrudResolver.prototype, "createManyReactionOnThreads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnThreads_1.ReactionOnThreads, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReactionOnThreadsArgs_1.DeleteReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnThreadsCrudResolver.prototype, "deleteReactionOnThreads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnThreads_1.ReactionOnThreads, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateReactionOnThreadsArgs_1.UpdateReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnThreadsCrudResolver.prototype, "updateReactionOnThreads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReactionOnThreadsArgs_1.DeleteManyReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnThreadsCrudResolver.prototype, "deleteManyReactionOnThreads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReactionOnThreadsArgs_1.UpdateManyReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnThreadsCrudResolver.prototype, "updateManyReactionOnThreads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnThreads_1.ReactionOnThreads, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertReactionOnThreadsArgs_1.UpsertReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnThreadsCrudResolver.prototype, "upsertReactionOnThreads", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReactionOnThreads_1.AggregateReactionOnThreads, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReactionOnThreadsArgs_1.AggregateReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnThreadsCrudResolver.prototype, "aggregateReactionOnThreads", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReactionOnThreadsGroupBy_1.ReactionOnThreadsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReactionOnThreadsArgs_1.GroupByReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnThreadsCrudResolver.prototype, "groupByReactionOnThreads", null);
ReactionOnThreadsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnThreads_1.ReactionOnThreads)
], ReactionOnThreadsCrudResolver);
exports.ReactionOnThreadsCrudResolver = ReactionOnThreadsCrudResolver;
