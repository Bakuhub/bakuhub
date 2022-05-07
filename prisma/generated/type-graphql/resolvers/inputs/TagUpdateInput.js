"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TagsOnPremisesUpdateManyWithoutTagInput_1 = require("../inputs/TagsOnPremisesUpdateManyWithoutTagInput");
const TagsOnTimelinesUpdateManyWithoutTagInput_1 = require("../inputs/TagsOnTimelinesUpdateManyWithoutTagInput");
const TagsOnVisionsUpdateManyWithoutTagInput_1 = require("../inputs/TagsOnVisionsUpdateManyWithoutTagInput");
let TagUpdateInput = class TagUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TagUpdateInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyWithoutTagInput_1.TagsOnPremisesUpdateManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesUpdateManyWithoutTagInput_1.TagsOnPremisesUpdateManyWithoutTagInput)
], TagUpdateInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsUpdateManyWithoutTagInput_1.TagsOnVisionsUpdateManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsUpdateManyWithoutTagInput_1.TagsOnVisionsUpdateManyWithoutTagInput)
], TagUpdateInput.prototype, "tagsOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyWithoutTagInput_1.TagsOnTimelinesUpdateManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateManyWithoutTagInput_1.TagsOnTimelinesUpdateManyWithoutTagInput)
], TagUpdateInput.prototype, "tagsOnTimelines", void 0);
TagUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpdateInput", {
        isAbstract: true
    })
], TagUpdateInput);
exports.TagUpdateInput = TagUpdateInput;
