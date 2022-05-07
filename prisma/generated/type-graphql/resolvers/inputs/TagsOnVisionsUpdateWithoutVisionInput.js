"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsUpdateWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const TagUpdateOneRequiredWithoutTagsOnVisionsInput_1 = require("../inputs/TagUpdateOneRequiredWithoutTagsOnVisionsInput");
let TagsOnVisionsUpdateWithoutVisionInput = class TagsOnVisionsUpdateWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutTagsOnVisionsInput_1.TagUpdateOneRequiredWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagUpdateOneRequiredWithoutTagsOnVisionsInput_1.TagUpdateOneRequiredWithoutTagsOnVisionsInput)
], TagsOnVisionsUpdateWithoutVisionInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TagsOnVisionsUpdateWithoutVisionInput.prototype, "assignedAt", void 0);
TagsOnVisionsUpdateWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsUpdateWithoutVisionInput", {
        isAbstract: true
    })
], TagsOnVisionsUpdateWithoutVisionInput);
exports.TagsOnVisionsUpdateWithoutVisionInput = TagsOnVisionsUpdateWithoutVisionInput;
