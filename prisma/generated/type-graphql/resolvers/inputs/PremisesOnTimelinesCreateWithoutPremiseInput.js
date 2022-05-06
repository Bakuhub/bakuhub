"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesCreateWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateNestedOneWithoutPremisesOnTimelinesInput_1 = require("../inputs/TimelineCreateNestedOneWithoutPremisesOnTimelinesInput");
let PremisesOnTimelinesCreateWithoutPremiseInput = class PremisesOnTimelinesCreateWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutPremisesOnTimelinesInput_1.TimelineCreateNestedOneWithoutPremisesOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedOneWithoutPremisesOnTimelinesInput_1.TimelineCreateNestedOneWithoutPremisesOnTimelinesInput)
], PremisesOnTimelinesCreateWithoutPremiseInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremisesOnTimelinesCreateWithoutPremiseInput.prototype, "assignedAt", void 0);
PremisesOnTimelinesCreateWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesCreateWithoutPremiseInput", {
        isAbstract: true
    })
], PremisesOnTimelinesCreateWithoutPremiseInput);
exports.PremisesOnTimelinesCreateWithoutPremiseInput = PremisesOnTimelinesCreateWithoutPremiseInput;
