"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesUpdateWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput_1 = require("../inputs/PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput");
let PremisesOnTimelinesUpdateWithoutTimelineInput = class PremisesOnTimelinesUpdateWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput_1.PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput_1.PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput)
], PremisesOnTimelinesUpdateWithoutTimelineInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PremisesOnTimelinesUpdateWithoutTimelineInput.prototype, "assignedAt", void 0);
PremisesOnTimelinesUpdateWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesUpdateWithoutTimelineInput", {
        isAbstract: true
    })
], PremisesOnTimelinesUpdateWithoutTimelineInput);
exports.PremisesOnTimelinesUpdateWithoutTimelineInput = PremisesOnTimelinesUpdateWithoutTimelineInput;
