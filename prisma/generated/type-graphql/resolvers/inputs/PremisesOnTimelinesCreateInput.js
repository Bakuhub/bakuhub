"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateNestedOneWithoutPremisesOnTimelinesInput_1 = require("../inputs/PremiseCreateNestedOneWithoutPremisesOnTimelinesInput");
const TimelineCreateNestedOneWithoutPremisesOnTimelinesInput_1 = require("../inputs/TimelineCreateNestedOneWithoutPremisesOnTimelinesInput");
let PremisesOnTimelinesCreateInput = class PremisesOnTimelinesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutPremisesOnTimelinesInput_1.TimelineCreateNestedOneWithoutPremisesOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedOneWithoutPremisesOnTimelinesInput_1.TimelineCreateNestedOneWithoutPremisesOnTimelinesInput)
], PremisesOnTimelinesCreateInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutPremisesOnTimelinesInput_1.PremiseCreateNestedOneWithoutPremisesOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedOneWithoutPremisesOnTimelinesInput_1.PremiseCreateNestedOneWithoutPremisesOnTimelinesInput)
], PremisesOnTimelinesCreateInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremisesOnTimelinesCreateInput.prototype, "assignedAt", void 0);
PremisesOnTimelinesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesCreateInput", {
        isAbstract: true
    })
], PremisesOnTimelinesCreateInput);
exports.PremisesOnTimelinesCreateInput = PremisesOnTimelinesCreateInput;
