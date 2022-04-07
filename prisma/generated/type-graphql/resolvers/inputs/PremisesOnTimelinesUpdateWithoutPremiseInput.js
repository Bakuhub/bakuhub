"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesUpdateWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput_1 = require("../inputs/TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput");
let PremisesOnTimelinesUpdateWithoutPremiseInput = class PremisesOnTimelinesUpdateWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput)
], PremisesOnTimelinesUpdateWithoutPremiseInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PremisesOnTimelinesUpdateWithoutPremiseInput.prototype, "assignedAt", void 0);
PremisesOnTimelinesUpdateWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesUpdateWithoutPremiseInput", {
        isAbstract: true
    })
], PremisesOnTimelinesUpdateWithoutPremiseInput);
exports.PremisesOnTimelinesUpdateWithoutPremiseInput = PremisesOnTimelinesUpdateWithoutPremiseInput;
