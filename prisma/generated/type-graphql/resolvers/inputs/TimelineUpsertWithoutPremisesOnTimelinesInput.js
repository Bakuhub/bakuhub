"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpsertWithoutPremisesOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutPremisesOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutPremisesOnTimelinesInput");
const TimelineUpdateWithoutPremisesOnTimelinesInput_1 = require("../inputs/TimelineUpdateWithoutPremisesOnTimelinesInput");
let TimelineUpsertWithoutPremisesOnTimelinesInput = class TimelineUpsertWithoutPremisesOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutPremisesOnTimelinesInput_1.TimelineUpdateWithoutPremisesOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutPremisesOnTimelinesInput_1.TimelineUpdateWithoutPremisesOnTimelinesInput)
], TimelineUpsertWithoutPremisesOnTimelinesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutPremisesOnTimelinesInput_1.TimelineCreateWithoutPremisesOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutPremisesOnTimelinesInput_1.TimelineCreateWithoutPremisesOnTimelinesInput)
], TimelineUpsertWithoutPremisesOnTimelinesInput.prototype, "create", void 0);
TimelineUpsertWithoutPremisesOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpsertWithoutPremisesOnTimelinesInput", {
        isAbstract: true
    })
], TimelineUpsertWithoutPremisesOnTimelinesInput);
exports.TimelineUpsertWithoutPremisesOnTimelinesInput = TimelineUpsertWithoutPremisesOnTimelinesInput;
