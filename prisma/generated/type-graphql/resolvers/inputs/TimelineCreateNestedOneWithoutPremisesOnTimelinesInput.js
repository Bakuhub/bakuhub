"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateNestedOneWithoutPremisesOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateOrConnectWithoutPremisesOnTimelinesInput_1 = require("../inputs/TimelineCreateOrConnectWithoutPremisesOnTimelinesInput");
const TimelineCreateWithoutPremisesOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutPremisesOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateNestedOneWithoutPremisesOnTimelinesInput = class TimelineCreateNestedOneWithoutPremisesOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutPremisesOnTimelinesInput_1.TimelineCreateWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutPremisesOnTimelinesInput_1.TimelineCreateWithoutPremisesOnTimelinesInput)
], TimelineCreateNestedOneWithoutPremisesOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutPremisesOnTimelinesInput_1.TimelineCreateOrConnectWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateOrConnectWithoutPremisesOnTimelinesInput_1.TimelineCreateOrConnectWithoutPremisesOnTimelinesInput)
], TimelineCreateNestedOneWithoutPremisesOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateNestedOneWithoutPremisesOnTimelinesInput.prototype, "connect", void 0);
TimelineCreateNestedOneWithoutPremisesOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateNestedOneWithoutPremisesOnTimelinesInput", {
        isAbstract: true
    })
], TimelineCreateNestedOneWithoutPremisesOnTimelinesInput);
exports.TimelineCreateNestedOneWithoutPremisesOnTimelinesInput = TimelineCreateNestedOneWithoutPremisesOnTimelinesInput;
