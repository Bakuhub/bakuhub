"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput_1 = require("../inputs/TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput");
let TagsOnTimelinesWhereUniqueInput = class TagsOnTimelinesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput_1.TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput_1.TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput)
], TagsOnTimelinesWhereUniqueInput.prototype, "tagId_timelineId", void 0);
TagsOnTimelinesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesWhereUniqueInput", {
        isAbstract: true
    })
], TagsOnTimelinesWhereUniqueInput);
exports.TagsOnTimelinesWhereUniqueInput = TagsOnTimelinesWhereUniqueInput;
