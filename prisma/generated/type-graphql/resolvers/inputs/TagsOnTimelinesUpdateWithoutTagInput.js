"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesUpdateWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput_1 = require("../inputs/TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput");
let TagsOnTimelinesUpdateWithoutTagInput = class TagsOnTimelinesUpdateWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput)
], TagsOnTimelinesUpdateWithoutTagInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TagsOnTimelinesUpdateWithoutTagInput.prototype, "assignedAt", void 0);
TagsOnTimelinesUpdateWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesUpdateWithoutTagInput", {
        isAbstract: true
    })
], TagsOnTimelinesUpdateWithoutTagInput);
exports.TagsOnTimelinesUpdateWithoutTagInput = TagsOnTimelinesUpdateWithoutTagInput;
