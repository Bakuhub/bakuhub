"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesCreateWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateNestedOneWithoutTagsOnTimelinesInput_1 = require("../inputs/TagCreateNestedOneWithoutTagsOnTimelinesInput");
let TagsOnTimelinesCreateWithoutTimelineInput = class TagsOnTimelinesCreateWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateNestedOneWithoutTagsOnTimelinesInput_1.TagCreateNestedOneWithoutTagsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateNestedOneWithoutTagsOnTimelinesInput_1.TagCreateNestedOneWithoutTagsOnTimelinesInput)
], TagsOnTimelinesCreateWithoutTimelineInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnTimelinesCreateWithoutTimelineInput.prototype, "assignedAt", void 0);
TagsOnTimelinesCreateWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesCreateWithoutTimelineInput", {
        isAbstract: true
    })
], TagsOnTimelinesCreateWithoutTimelineInput);
exports.TagsOnTimelinesCreateWithoutTimelineInput = TagsOnTimelinesCreateWithoutTimelineInput;
