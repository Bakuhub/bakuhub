"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesUpdateWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const TagUpdateOneRequiredWithoutTagsOnPremisesInput_1 = require("../inputs/TagUpdateOneRequiredWithoutTagsOnPremisesInput");
let TagsOnPremisesUpdateWithoutPremiseInput = class TagsOnPremisesUpdateWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutTagsOnPremisesInput_1.TagUpdateOneRequiredWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagUpdateOneRequiredWithoutTagsOnPremisesInput_1.TagUpdateOneRequiredWithoutTagsOnPremisesInput)
], TagsOnPremisesUpdateWithoutPremiseInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TagsOnPremisesUpdateWithoutPremiseInput.prototype, "assignedAt", void 0);
TagsOnPremisesUpdateWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesUpdateWithoutPremiseInput", {
        isAbstract: true
    })
], TagsOnPremisesUpdateWithoutPremiseInput);
exports.TagsOnPremisesUpdateWithoutPremiseInput = TagsOnPremisesUpdateWithoutPremiseInput;
