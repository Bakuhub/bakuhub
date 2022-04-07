"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesUpdateWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PremiseUpdateOneRequiredWithoutTagsOnPremisesInput_1 = require("../inputs/PremiseUpdateOneRequiredWithoutTagsOnPremisesInput");
let TagsOnPremisesUpdateWithoutTagInput = class TagsOnPremisesUpdateWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutTagsOnPremisesInput_1.PremiseUpdateOneRequiredWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateOneRequiredWithoutTagsOnPremisesInput_1.PremiseUpdateOneRequiredWithoutTagsOnPremisesInput)
], TagsOnPremisesUpdateWithoutTagInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TagsOnPremisesUpdateWithoutTagInput.prototype, "assignedAt", void 0);
TagsOnPremisesUpdateWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesUpdateWithoutTagInput", {
        isAbstract: true
    })
], TagsOnPremisesUpdateWithoutTagInput);
exports.TagsOnPremisesUpdateWithoutTagInput = TagsOnPremisesUpdateWithoutTagInput;
