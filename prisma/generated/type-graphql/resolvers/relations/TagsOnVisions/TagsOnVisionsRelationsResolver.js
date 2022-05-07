"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tag_1 = require("../../../models/Tag");
const TagsOnVisions_1 = require("../../../models/TagsOnVisions");
const Vision_1 = require("../../../models/Vision");
const helpers_1 = require("../../../helpers");
let TagsOnVisionsRelationsResolver = class TagsOnVisionsRelationsResolver {
    async tag(tagsOnVisions, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.findUnique({
            where: {
                tagId_visionId: {
                    tagId: tagsOnVisions.tagId,
                    visionId: tagsOnVisions.visionId,
                },
            },
        }).tag({});
    }
    async vision(tagsOnVisions, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.findUnique({
            where: {
                tagId_visionId: {
                    tagId: tagsOnVisions.tagId,
                    visionId: tagsOnVisions.visionId,
                },
            },
        }).vision({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TagsOnVisions_1.TagsOnVisions, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnVisionsRelationsResolver.prototype, "tag", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Vision_1.Vision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TagsOnVisions_1.TagsOnVisions, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnVisionsRelationsResolver.prototype, "vision", null);
TagsOnVisionsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnVisions_1.TagsOnVisions)
], TagsOnVisionsRelationsResolver);
exports.TagsOnVisionsRelationsResolver = TagsOnVisionsRelationsResolver;
