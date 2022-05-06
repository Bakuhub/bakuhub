"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateWithoutTagsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TagsOnPremisesUpdateManyWithoutTagInput_1 = require("../inputs/TagsOnPremisesUpdateManyWithoutTagInput");
let TagUpdateWithoutTagsOnTimelinesInput = class TagUpdateWithoutTagsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TagUpdateWithoutTagsOnTimelinesInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyWithoutTagInput_1.TagsOnPremisesUpdateManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesUpdateManyWithoutTagInput_1.TagsOnPremisesUpdateManyWithoutTagInput)
], TagUpdateWithoutTagsOnTimelinesInput.prototype, "tagsOnPremises", void 0);
TagUpdateWithoutTagsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpdateWithoutTagsOnTimelinesInput", {
        isAbstract: true
    })
], TagUpdateWithoutTagsOnTimelinesInput);
exports.TagUpdateWithoutTagsOnTimelinesInput = TagUpdateWithoutTagsOnTimelinesInput;
