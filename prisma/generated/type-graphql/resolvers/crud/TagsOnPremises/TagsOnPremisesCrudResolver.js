"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTagsOnPremisesArgs_1 = require("./args/AggregateTagsOnPremisesArgs");
const CreateManyTagsOnPremisesArgs_1 = require("./args/CreateManyTagsOnPremisesArgs");
const CreateTagsOnPremisesArgs_1 = require("./args/CreateTagsOnPremisesArgs");
const DeleteManyTagsOnPremisesArgs_1 = require("./args/DeleteManyTagsOnPremisesArgs");
const DeleteTagsOnPremisesArgs_1 = require("./args/DeleteTagsOnPremisesArgs");
const FindFirstTagsOnPremisesArgs_1 = require("./args/FindFirstTagsOnPremisesArgs");
const FindManyTagsOnPremisesArgs_1 = require("./args/FindManyTagsOnPremisesArgs");
const FindUniqueTagsOnPremisesArgs_1 = require("./args/FindUniqueTagsOnPremisesArgs");
const GroupByTagsOnPremisesArgs_1 = require("./args/GroupByTagsOnPremisesArgs");
const UpdateManyTagsOnPremisesArgs_1 = require("./args/UpdateManyTagsOnPremisesArgs");
const UpdateTagsOnPremisesArgs_1 = require("./args/UpdateTagsOnPremisesArgs");
const UpsertTagsOnPremisesArgs_1 = require("./args/UpsertTagsOnPremisesArgs");
const helpers_1 = require("../../../helpers");
const TagsOnPremises_1 = require("../../../models/TagsOnPremises");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTagsOnPremises_1 = require("../../outputs/AggregateTagsOnPremises");
const TagsOnPremisesGroupBy_1 = require("../../outputs/TagsOnPremisesGroupBy");
let TagsOnPremisesCrudResolver = class TagsOnPremisesCrudResolver {
    async findUniqueTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTagsOnPremises(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTagsOnPremises(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TagsOnPremises_1.TagsOnPremises, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTagsOnPremisesArgs_1.FindUniqueTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnPremisesCrudResolver.prototype, "findUniqueTagsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TagsOnPremises_1.TagsOnPremises, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTagsOnPremisesArgs_1.FindFirstTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnPremisesCrudResolver.prototype, "findFirstTagsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TagsOnPremises_1.TagsOnPremises], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTagsOnPremisesArgs_1.FindManyTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnPremisesCrudResolver.prototype, "findManyTagsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TagsOnPremises_1.TagsOnPremises, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTagsOnPremisesArgs_1.CreateTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnPremisesCrudResolver.prototype, "createTagsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTagsOnPremisesArgs_1.CreateManyTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnPremisesCrudResolver.prototype, "createManyTagsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TagsOnPremises_1.TagsOnPremises, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTagsOnPremisesArgs_1.DeleteTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnPremisesCrudResolver.prototype, "deleteTagsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TagsOnPremises_1.TagsOnPremises, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTagsOnPremisesArgs_1.UpdateTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnPremisesCrudResolver.prototype, "updateTagsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTagsOnPremisesArgs_1.DeleteManyTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnPremisesCrudResolver.prototype, "deleteManyTagsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTagsOnPremisesArgs_1.UpdateManyTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnPremisesCrudResolver.prototype, "updateManyTagsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TagsOnPremises_1.TagsOnPremises, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTagsOnPremisesArgs_1.UpsertTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnPremisesCrudResolver.prototype, "upsertTagsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTagsOnPremises_1.AggregateTagsOnPremises, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTagsOnPremisesArgs_1.AggregateTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnPremisesCrudResolver.prototype, "aggregateTagsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TagsOnPremisesGroupBy_1.TagsOnPremisesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTagsOnPremisesArgs_1.GroupByTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnPremisesCrudResolver.prototype, "groupByTagsOnPremises", null);
TagsOnPremisesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnPremises_1.TagsOnPremises)
], TagsOnPremisesCrudResolver);
exports.TagsOnPremisesCrudResolver = TagsOnPremisesCrudResolver;
