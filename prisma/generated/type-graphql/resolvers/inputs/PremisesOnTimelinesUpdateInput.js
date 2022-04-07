"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput_1 = require("../inputs/PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput");
const TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput_1 = require("../inputs/TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput");
let PremisesOnTimelinesUpdateInput = class PremisesOnTimelinesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput)
], PremisesOnTimelinesUpdateInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput_1.PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput_1.PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput)
], PremisesOnTimelinesUpdateInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PremisesOnTimelinesUpdateInput.prototype, "assignedAt", void 0);
PremisesOnTimelinesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesUpdateInput", {
        isAbstract: true
    })
], PremisesOnTimelinesUpdateInput);
exports.PremisesOnTimelinesUpdateInput = PremisesOnTimelinesUpdateInput;
