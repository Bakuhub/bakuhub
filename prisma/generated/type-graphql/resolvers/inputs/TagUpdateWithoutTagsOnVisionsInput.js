"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateWithoutTagsOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TagsOnPremisesUpdateManyWithoutTagInput_1 = require("../inputs/TagsOnPremisesUpdateManyWithoutTagInput");
const TagsOnTimelinesUpdateManyWithoutTagInput_1 = require("../inputs/TagsOnTimelinesUpdateManyWithoutTagInput");
let TagUpdateWithoutTagsOnVisionsInput = class TagUpdateWithoutTagsOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TagUpdateWithoutTagsOnVisionsInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyWithoutTagInput_1.TagsOnPremisesUpdateManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesUpdateManyWithoutTagInput_1.TagsOnPremisesUpdateManyWithoutTagInput)
], TagUpdateWithoutTagsOnVisionsInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyWithoutTagInput_1.TagsOnTimelinesUpdateManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateManyWithoutTagInput_1.TagsOnTimelinesUpdateManyWithoutTagInput)
], TagUpdateWithoutTagsOnVisionsInput.prototype, "tagsOnTimelines", void 0);
TagUpdateWithoutTagsOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpdateWithoutTagsOnVisionsInput", {
        isAbstract: true
    })
], TagUpdateWithoutTagsOnVisionsInput);
exports.TagUpdateWithoutTagsOnVisionsInput = TagUpdateWithoutTagsOnVisionsInput;
