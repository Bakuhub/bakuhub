"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsUpdateWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const VisionUpdateOneRequiredWithoutTagsOnVisionsInput_1 = require("../inputs/VisionUpdateOneRequiredWithoutTagsOnVisionsInput");
let TagsOnVisionsUpdateWithoutTagInput = class TagsOnVisionsUpdateWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutTagsOnVisionsInput_1.VisionUpdateOneRequiredWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneRequiredWithoutTagsOnVisionsInput_1.VisionUpdateOneRequiredWithoutTagsOnVisionsInput)
], TagsOnVisionsUpdateWithoutTagInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TagsOnVisionsUpdateWithoutTagInput.prototype, "assignedAt", void 0);
TagsOnVisionsUpdateWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsUpdateWithoutTagInput", {
        isAbstract: true
    })
], TagsOnVisionsUpdateWithoutTagInput);
exports.TagsOnVisionsUpdateWithoutTagInput = TagsOnVisionsUpdateWithoutTagInput;
