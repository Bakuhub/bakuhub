"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTagsOnVisionsArgs_1 = require("./args/AggregateTagsOnVisionsArgs");
const CreateManyTagsOnVisionsArgs_1 = require("./args/CreateManyTagsOnVisionsArgs");
const CreateTagsOnVisionsArgs_1 = require("./args/CreateTagsOnVisionsArgs");
const DeleteManyTagsOnVisionsArgs_1 = require("./args/DeleteManyTagsOnVisionsArgs");
const DeleteTagsOnVisionsArgs_1 = require("./args/DeleteTagsOnVisionsArgs");
const FindFirstTagsOnVisionsArgs_1 = require("./args/FindFirstTagsOnVisionsArgs");
const FindManyTagsOnVisionsArgs_1 = require("./args/FindManyTagsOnVisionsArgs");
const FindUniqueTagsOnVisionsArgs_1 = require("./args/FindUniqueTagsOnVisionsArgs");
const GroupByTagsOnVisionsArgs_1 = require("./args/GroupByTagsOnVisionsArgs");
const UpdateManyTagsOnVisionsArgs_1 = require("./args/UpdateManyTagsOnVisionsArgs");
const UpdateTagsOnVisionsArgs_1 = require("./args/UpdateTagsOnVisionsArgs");
const UpsertTagsOnVisionsArgs_1 = require("./args/UpsertTagsOnVisionsArgs");
const helpers_1 = require("../../../helpers");
const TagsOnVisions_1 = require("../../../models/TagsOnVisions");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTagsOnVisions_1 = require("../../outputs/AggregateTagsOnVisions");
const TagsOnVisionsGroupBy_1 = require("../../outputs/TagsOnVisionsGroupBy");
let TagsOnVisionsCrudResolver = class TagsOnVisionsCrudResolver {
    async findUniqueTagsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTagsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTagsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTagsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTagsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTagsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTagsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTagsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTagsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTagsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTagsOnVisions(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTagsOnVisions(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TagsOnVisions_1.TagsOnVisions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTagsOnVisionsArgs_1.FindUniqueTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnVisionsCrudResolver.prototype, "findUniqueTagsOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TagsOnVisions_1.TagsOnVisions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTagsOnVisionsArgs_1.FindFirstTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnVisionsCrudResolver.prototype, "findFirstTagsOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TagsOnVisions_1.TagsOnVisions], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTagsOnVisionsArgs_1.FindManyTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnVisionsCrudResolver.prototype, "findManyTagsOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TagsOnVisions_1.TagsOnVisions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTagsOnVisionsArgs_1.CreateTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnVisionsCrudResolver.prototype, "createTagsOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTagsOnVisionsArgs_1.CreateManyTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnVisionsCrudResolver.prototype, "createManyTagsOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TagsOnVisions_1.TagsOnVisions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTagsOnVisionsArgs_1.DeleteTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnVisionsCrudResolver.prototype, "deleteTagsOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TagsOnVisions_1.TagsOnVisions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTagsOnVisionsArgs_1.UpdateTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnVisionsCrudResolver.prototype, "updateTagsOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTagsOnVisionsArgs_1.DeleteManyTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnVisionsCrudResolver.prototype, "deleteManyTagsOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTagsOnVisionsArgs_1.UpdateManyTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnVisionsCrudResolver.prototype, "updateManyTagsOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TagsOnVisions_1.TagsOnVisions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTagsOnVisionsArgs_1.UpsertTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnVisionsCrudResolver.prototype, "upsertTagsOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTagsOnVisions_1.AggregateTagsOnVisions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTagsOnVisionsArgs_1.AggregateTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnVisionsCrudResolver.prototype, "aggregateTagsOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TagsOnVisionsGroupBy_1.TagsOnVisionsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTagsOnVisionsArgs_1.GroupByTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnVisionsCrudResolver.prototype, "groupByTagsOnVisions", null);
TagsOnVisionsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnVisions_1.TagsOnVisions)
], TagsOnVisionsCrudResolver);
exports.TagsOnVisionsCrudResolver = TagsOnVisionsCrudResolver;
