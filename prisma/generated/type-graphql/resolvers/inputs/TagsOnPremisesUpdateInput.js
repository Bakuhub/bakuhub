"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PremiseUpdateOneRequiredWithoutTagsOnPremisesInput_1 = require("../inputs/PremiseUpdateOneRequiredWithoutTagsOnPremisesInput");
const TagUpdateOneRequiredWithoutTagsOnPremisesInput_1 = require("../inputs/TagUpdateOneRequiredWithoutTagsOnPremisesInput");
let TagsOnPremisesUpdateInput = class TagsOnPremisesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutTagsOnPremisesInput_1.TagUpdateOneRequiredWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagUpdateOneRequiredWithoutTagsOnPremisesInput_1.TagUpdateOneRequiredWithoutTagsOnPremisesInput)
], TagsOnPremisesUpdateInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutTagsOnPremisesInput_1.PremiseUpdateOneRequiredWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateOneRequiredWithoutTagsOnPremisesInput_1.PremiseUpdateOneRequiredWithoutTagsOnPremisesInput)
], TagsOnPremisesUpdateInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TagsOnPremisesUpdateInput.prototype, "assignedAt", void 0);
TagsOnPremisesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesUpdateInput", {
        isAbstract: true
    })
], TagsOnPremisesUpdateInput);
exports.TagsOnPremisesUpdateInput = TagsOnPremisesUpdateInput;
