"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesUpdateWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const TagUpdateOneRequiredWithoutTagsOnTimelinesInput_1 = require("../inputs/TagUpdateOneRequiredWithoutTagsOnTimelinesInput");
let TagsOnTimelinesUpdateWithoutTimelineInput = class TagsOnTimelinesUpdateWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutTagsOnTimelinesInput_1.TagUpdateOneRequiredWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagUpdateOneRequiredWithoutTagsOnTimelinesInput_1.TagUpdateOneRequiredWithoutTagsOnTimelinesInput)
], TagsOnTimelinesUpdateWithoutTimelineInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TagsOnTimelinesUpdateWithoutTimelineInput.prototype, "assignedAt", void 0);
TagsOnTimelinesUpdateWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesUpdateWithoutTimelineInput", {
        isAbstract: true
    })
], TagsOnTimelinesUpdateWithoutTimelineInput);
exports.TagsOnTimelinesUpdateWithoutTimelineInput = TagsOnTimelinesUpdateWithoutTimelineInput;
