"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tag_1 = require("../../../models/Tag");
const TagsOnTimelines_1 = require("../../../models/TagsOnTimelines");
const Timeline_1 = require("../../../models/Timeline");
const helpers_1 = require("../../../helpers");
let TagsOnTimelinesRelationsResolver = class TagsOnTimelinesRelationsResolver {
    async tag(tagsOnTimelines, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.findUnique({
            where: {
                tagId_timelineId: {
                    tagId: tagsOnTimelines.tagId,
                    timelineId: tagsOnTimelines.timelineId,
                },
            },
        }).tag({});
    }
    async timeline(tagsOnTimelines, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.findUnique({
            where: {
                tagId_timelineId: {
                    tagId: tagsOnTimelines.tagId,
                    timelineId: tagsOnTimelines.timelineId,
                },
            },
        }).timeline({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TagsOnTimelines_1.TagsOnTimelines, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnTimelinesRelationsResolver.prototype, "tag", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Timeline_1.Timeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TagsOnTimelines_1.TagsOnTimelines, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsOnTimelinesRelationsResolver.prototype, "timeline", null);
TagsOnTimelinesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnTimelines_1.TagsOnTimelines)
], TagsOnTimelinesRelationsResolver);
exports.TagsOnTimelinesRelationsResolver = TagsOnTimelinesRelationsResolver;
