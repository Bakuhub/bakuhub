"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const TagUpdateOneRequiredWithoutTagsOnTimelinesInput_1 = require("../inputs/TagUpdateOneRequiredWithoutTagsOnTimelinesInput");
const TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput_1 = require("../inputs/TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput");
let TagsOnTimelinesUpdateInput = class TagsOnTimelinesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutTagsOnTimelinesInput_1.TagUpdateOneRequiredWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagUpdateOneRequiredWithoutTagsOnTimelinesInput_1.TagUpdateOneRequiredWithoutTagsOnTimelinesInput)
], TagsOnTimelinesUpdateInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput)
], TagsOnTimelinesUpdateInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TagsOnTimelinesUpdateInput.prototype, "assignedAt", void 0);
TagsOnTimelinesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesUpdateInput", {
        isAbstract: true
    })
], TagsOnTimelinesUpdateInput);
exports.TagsOnTimelinesUpdateInput = TagsOnTimelinesUpdateInput;
