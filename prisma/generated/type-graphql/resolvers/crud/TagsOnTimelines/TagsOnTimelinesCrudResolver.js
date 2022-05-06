"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTagsOnTimelinesArgs_1 = require("./args/AggregateTagsOnTimelinesArgs");
const CreateManyTagsOnTimelinesArgs_1 = require("./args/CreateManyTagsOnTimelinesArgs");
const CreateTagsOnTimelinesArgs_1 = require("./args/CreateTagsOnTimelinesArgs");
const DeleteManyTagsOnTimelinesArgs_1 = require("./args/DeleteManyTagsOnTimelinesArgs");
const DeleteTagsOnTimelinesArgs_1 = require("./args/DeleteTagsOnTimelinesArgs");
const FindFirstTagsOnTimelinesArgs_1 = require("./args/FindFirstTagsOnTimelinesArgs");
const FindManyTagsOnTimelinesArgs_1 = require("./args/FindManyTagsOnTimelinesArgs");
const FindUniqueTagsOnTimelinesArgs_1 = require("./args/FindUniqueTagsOnTimelinesArgs");
const GroupByTagsOnTimelinesArgs_1 = require("./args/GroupByTagsOnTimelinesArgs");
const UpdateManyTagsOnTimelinesArgs_1 = require("./args/UpdateManyTagsOnTimelinesArgs");
const UpdateTagsOnTimelinesArgs_1 = require("./args/UpdateTagsOnTimelinesArgs");
const UpsertTagsOnTimelinesArgs_1 = require("./args/UpsertTagsOnTimelinesArgs");
const helpers_1 = require("../../../helpers");
const TagsOnTimelines_1 = require("../../../models/TagsOnTimelines");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTagsOnTimelines_1 = require("../../outputs/AggregateTagsOnTimelines");
const TagsOnTimelinesGroupBy_1 = require("../../outputs/TagsOnTimelinesGroupBy");
let TagsOnTimelinesCrudResolver = class TagsOnTimelinesCrudResolver {
    async findUniqueTagsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTagsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTagsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTagsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTagsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTagsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTagsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTagsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTagsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTagsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTagsOnTimelines(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTagsOnTimelines(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TagsOnTimelines_1.TagsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTagsOnTimelinesArgs_1.FindUniqueTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnTimelinesCrudResolver.prototype, "findUniqueTagsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TagsOnTimelines_1.TagsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTagsOnTimelinesArgs_1.FindFirstTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnTimelinesCrudResolver.prototype, "findFirstTagsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TagsOnTimelines_1.TagsOnTimelines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTagsOnTimelinesArgs_1.FindManyTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnTimelinesCrudResolver.prototype, "findManyTagsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TagsOnTimelines_1.TagsOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTagsOnTimelinesArgs_1.CreateTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnTimelinesCrudResolver.prototype, "createTagsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTagsOnTimelinesArgs_1.CreateManyTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnTimelinesCrudResolver.prototype, "createManyTagsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TagsOnTimelines_1.TagsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTagsOnTimelinesArgs_1.DeleteTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnTimelinesCrudResolver.prototype, "deleteTagsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TagsOnTimelines_1.TagsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTagsOnTimelinesArgs_1.UpdateTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnTimelinesCrudResolver.prototype, "updateTagsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTagsOnTimelinesArgs_1.DeleteManyTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnTimelinesCrudResolver.prototype, "deleteManyTagsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTagsOnTimelinesArgs_1.UpdateManyTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnTimelinesCrudResolver.prototype, "updateManyTagsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TagsOnTimelines_1.TagsOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTagsOnTimelinesArgs_1.UpsertTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnTimelinesCrudResolver.prototype, "upsertTagsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTagsOnTimelines_1.AggregateTagsOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTagsOnTimelinesArgs_1.AggregateTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnTimelinesCrudResolver.prototype, "aggregateTagsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TagsOnTimelinesGroupBy_1.TagsOnTimelinesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTagsOnTimelinesArgs_1.GroupByTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnTimelinesCrudResolver.prototype, "groupByTagsOnTimelines", null);
TagsOnTimelinesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnTimelines_1.TagsOnTimelines)
], TagsOnTimelinesCrudResolver);
exports.TagsOnTimelinesCrudResolver = TagsOnTimelinesCrudResolver;
