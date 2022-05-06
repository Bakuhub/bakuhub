"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReactionOnVisionsArgs_1 = require("./args/AggregateReactionOnVisionsArgs");
const CreateManyReactionOnVisionsArgs_1 = require("./args/CreateManyReactionOnVisionsArgs");
const CreateReactionOnVisionsArgs_1 = require("./args/CreateReactionOnVisionsArgs");
const DeleteManyReactionOnVisionsArgs_1 = require("./args/DeleteManyReactionOnVisionsArgs");
const DeleteReactionOnVisionsArgs_1 = require("./args/DeleteReactionOnVisionsArgs");
const FindFirstReactionOnVisionsArgs_1 = require("./args/FindFirstReactionOnVisionsArgs");
const FindManyReactionOnVisionsArgs_1 = require("./args/FindManyReactionOnVisionsArgs");
const FindUniqueReactionOnVisionsArgs_1 = require("./args/FindUniqueReactionOnVisionsArgs");
const GroupByReactionOnVisionsArgs_1 = require("./args/GroupByReactionOnVisionsArgs");
const UpdateManyReactionOnVisionsArgs_1 = require("./args/UpdateManyReactionOnVisionsArgs");
const UpdateReactionOnVisionsArgs_1 = require("./args/UpdateReactionOnVisionsArgs");
const UpsertReactionOnVisionsArgs_1 = require("./args/UpsertReactionOnVisionsArgs");
const helpers_1 = require("../../../helpers");
const ReactionOnVisions_1 = require("../../../models/ReactionOnVisions");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReactionOnVisions_1 = require("../../outputs/AggregateReactionOnVisions");
const ReactionOnVisionsGroupBy_1 = require("../../outputs/ReactionOnVisionsGroupBy");
let ReactionOnVisionsCrudResolver = class ReactionOnVisionsCrudResolver {
    async findUniqueReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateReactionOnVisions(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByReactionOnVisions(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ReactionOnVisions_1.ReactionOnVisions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReactionOnVisionsArgs_1.FindUniqueReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnVisionsCrudResolver.prototype, "findUniqueReactionOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ReactionOnVisions_1.ReactionOnVisions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReactionOnVisionsArgs_1.FindFirstReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnVisionsCrudResolver.prototype, "findFirstReactionOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReactionOnVisions_1.ReactionOnVisions], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReactionOnVisionsArgs_1.FindManyReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnVisionsCrudResolver.prototype, "findManyReactionOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnVisions_1.ReactionOnVisions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateReactionOnVisionsArgs_1.CreateReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnVisionsCrudResolver.prototype, "createReactionOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReactionOnVisionsArgs_1.CreateManyReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnVisionsCrudResolver.prototype, "createManyReactionOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnVisions_1.ReactionOnVisions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReactionOnVisionsArgs_1.DeleteReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnVisionsCrudResolver.prototype, "deleteReactionOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnVisions_1.ReactionOnVisions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateReactionOnVisionsArgs_1.UpdateReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnVisionsCrudResolver.prototype, "updateReactionOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReactionOnVisionsArgs_1.DeleteManyReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnVisionsCrudResolver.prototype, "deleteManyReactionOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReactionOnVisionsArgs_1.UpdateManyReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnVisionsCrudResolver.prototype, "updateManyReactionOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnVisions_1.ReactionOnVisions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertReactionOnVisionsArgs_1.UpsertReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnVisionsCrudResolver.prototype, "upsertReactionOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReactionOnVisions_1.AggregateReactionOnVisions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReactionOnVisionsArgs_1.AggregateReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnVisionsCrudResolver.prototype, "aggregateReactionOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReactionOnVisionsGroupBy_1.ReactionOnVisionsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReactionOnVisionsArgs_1.GroupByReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnVisionsCrudResolver.prototype, "groupByReactionOnVisions", null);
ReactionOnVisionsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnVisions_1.ReactionOnVisions)
], ReactionOnVisionsCrudResolver);
exports.ReactionOnVisionsCrudResolver = ReactionOnVisionsCrudResolver;
