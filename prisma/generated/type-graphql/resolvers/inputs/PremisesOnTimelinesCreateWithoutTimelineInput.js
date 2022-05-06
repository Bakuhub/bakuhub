"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesCreateWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateNestedOneWithoutPremisesOnTimelinesInput_1 = require("../inputs/PremiseCreateNestedOneWithoutPremisesOnTimelinesInput");
let PremisesOnTimelinesCreateWithoutTimelineInput = class PremisesOnTimelinesCreateWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutPremisesOnTimelinesInput_1.PremiseCreateNestedOneWithoutPremisesOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedOneWithoutPremisesOnTimelinesInput_1.PremiseCreateNestedOneWithoutPremisesOnTimelinesInput)
], PremisesOnTimelinesCreateWithoutTimelineInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremisesOnTimelinesCreateWithoutTimelineInput.prototype, "assignedAt", void 0);
PremisesOnTimelinesCreateWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesCreateWithoutTimelineInput", {
        isAbstract: true
    })
], PremisesOnTimelinesCreateWithoutTimelineInput);
exports.PremisesOnTimelinesCreateWithoutTimelineInput = PremisesOnTimelinesCreateWithoutTimelineInput;
