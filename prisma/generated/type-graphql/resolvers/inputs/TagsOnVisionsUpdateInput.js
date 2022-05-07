"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const TagUpdateOneRequiredWithoutTagsOnVisionsInput_1 = require("../inputs/TagUpdateOneRequiredWithoutTagsOnVisionsInput");
const VisionUpdateOneRequiredWithoutTagsOnVisionsInput_1 = require("../inputs/VisionUpdateOneRequiredWithoutTagsOnVisionsInput");
let TagsOnVisionsUpdateInput = class TagsOnVisionsUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutTagsOnVisionsInput_1.TagUpdateOneRequiredWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagUpdateOneRequiredWithoutTagsOnVisionsInput_1.TagUpdateOneRequiredWithoutTagsOnVisionsInput)
], TagsOnVisionsUpdateInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutTagsOnVisionsInput_1.VisionUpdateOneRequiredWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneRequiredWithoutTagsOnVisionsInput_1.VisionUpdateOneRequiredWithoutTagsOnVisionsInput)
], TagsOnVisionsUpdateInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TagsOnVisionsUpdateInput.prototype, "assignedAt", void 0);
TagsOnVisionsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsUpdateInput", {
        isAbstract: true
    })
], TagsOnVisionsUpdateInput);
exports.TagsOnVisionsUpdateInput = TagsOnVisionsUpdateInput;
