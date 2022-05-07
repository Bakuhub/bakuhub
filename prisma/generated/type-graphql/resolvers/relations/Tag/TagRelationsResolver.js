"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tag_1 = require("../../../models/Tag");
const TagsOnPremises_1 = require("../../../models/TagsOnPremises");
const TagsOnTimelines_1 = require("../../../models/TagsOnTimelines");
const TagsOnVisions_1 = require("../../../models/TagsOnVisions");
const TagTagsOnPremisesArgs_1 = require("./args/TagTagsOnPremisesArgs");
const TagTagsOnTimelinesArgs_1 = require("./args/TagTagsOnTimelinesArgs");
const TagTagsOnVisionsArgs_1 = require("./args/TagTagsOnVisionsArgs");
const helpers_1 = require("../../../helpers");
let TagRelationsResolver = class TagRelationsResolver {
    async tagsOnPremises(tag, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findUnique({
            where: {
                id: tag.id,
            },
        }).tagsOnPremises(args);
    }
    async tagsOnVisions(tag, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findUnique({
            where: {
                id: tag.id,
            },
        }).tagsOnVisions(args);
    }
    async tagsOnTimelines(tag, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findUnique({
            where: {
                id: tag.id,
            },
        }).tagsOnTimelines(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [TagsOnPremises_1.TagsOnPremises], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tag_1.Tag, Object, TagTagsOnPremisesArgs_1.TagTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagRelationsResolver.prototype, "tagsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [TagsOnVisions_1.TagsOnVisions], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tag_1.Tag, Object, TagTagsOnVisionsArgs_1.TagTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagRelationsResolver.prototype, "tagsOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [TagsOnTimelines_1.TagsOnTimelines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tag_1.Tag, Object, TagTagsOnTimelinesArgs_1.TagTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagRelationsResolver.prototype, "tagsOnTimelines", null);
TagRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tag_1.Tag)
], TagRelationsResolver);
exports.TagRelationsResolver = TagRelationsResolver;
