"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Premise_1 = require("../../../models/Premise");
const Tag_1 = require("../../../models/Tag");
const TagsOnPremises_1 = require("../../../models/TagsOnPremises");
const helpers_1 = require("../../../helpers");
let TagsOnPremisesRelationsResolver = class TagsOnPremisesRelationsResolver {
    async tag(tagsOnPremises, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.findUnique({
            where: {
                tagId_premiseId: {
                    tagId: tagsOnPremises.tagId,
                    premiseId: tagsOnPremises.premiseId,
                },
            },
        }).tag({});
    }
    async premise(tagsOnPremises, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.findUnique({
            where: {
                tagId_premiseId: {
                    tagId: tagsOnPremises.tagId,
                    premiseId: tagsOnPremises.premiseId,
                },
            },
        }).premise({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TagsOnPremises_1.TagsOnPremises, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnPremisesRelationsResolver.prototype, "tag", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Premise_1.Premise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TagsOnPremises_1.TagsOnPremises, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnPremisesRelationsResolver.prototype, "premise", null);
TagsOnPremisesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnPremises_1.TagsOnPremises)
], TagsOnPremisesRelationsResolver);
exports.TagsOnPremisesRelationsResolver = TagsOnPremisesRelationsResolver;
