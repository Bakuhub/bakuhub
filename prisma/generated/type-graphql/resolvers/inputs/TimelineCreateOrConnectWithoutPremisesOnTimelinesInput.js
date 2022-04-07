"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateOrConnectWithoutPremisesOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutPremisesOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutPremisesOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateOrConnectWithoutPremisesOnTimelinesInput = class TimelineCreateOrConnectWithoutPremisesOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateOrConnectWithoutPremisesOnTimelinesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutPremisesOnTimelinesInput_1.TimelineCreateWithoutPremisesOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutPremisesOnTimelinesInput_1.TimelineCreateWithoutPremisesOnTimelinesInput)
], TimelineCreateOrConnectWithoutPremisesOnTimelinesInput.prototype, "create", void 0);
TimelineCreateOrConnectWithoutPremisesOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateOrConnectWithoutPremisesOnTimelinesInput", {
        isAbstract: true
    })
], TimelineCreateOrConnectWithoutPremisesOnTimelinesInput);
exports.TimelineCreateOrConnectWithoutPremisesOnTimelinesInput = TimelineCreateOrConnectWithoutPremisesOnTimelinesInput;
