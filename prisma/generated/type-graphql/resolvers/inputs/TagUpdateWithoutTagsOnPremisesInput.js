"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateWithoutTagsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TagsOnTimelinesUpdateManyWithoutTagInput_1 = require("../inputs/TagsOnTimelinesUpdateManyWithoutTagInput");
const TagsOnVisionsUpdateManyWithoutTagInput_1 = require("../inputs/TagsOnVisionsUpdateManyWithoutTagInput");
let TagUpdateWithoutTagsOnPremisesInput = class TagUpdateWithoutTagsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TagUpdateWithoutTagsOnPremisesInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsUpdateManyWithoutTagInput_1.TagsOnVisionsUpdateManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsUpdateManyWithoutTagInput_1.TagsOnVisionsUpdateManyWithoutTagInput)
], TagUpdateWithoutTagsOnPremisesInput.prototype, "tagsOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyWithoutTagInput_1.TagsOnTimelinesUpdateManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateManyWithoutTagInput_1.TagsOnTimelinesUpdateManyWithoutTagInput)
], TagUpdateWithoutTagsOnPremisesInput.prototype, "tagsOnTimelines", void 0);
TagUpdateWithoutTagsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpdateWithoutTagsOnPremisesInput", {
        isAbstract: true
    })
], TagUpdateWithoutTagsOnPremisesInput);
exports.TagUpdateWithoutTagsOnPremisesInput = TagUpdateWithoutTagsOnPremisesInput;
