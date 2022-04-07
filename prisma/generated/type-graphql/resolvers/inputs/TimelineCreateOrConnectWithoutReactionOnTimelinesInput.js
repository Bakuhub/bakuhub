"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateOrConnectWithoutReactionOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutReactionOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutReactionOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateOrConnectWithoutReactionOnTimelinesInput = class TimelineCreateOrConnectWithoutReactionOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateOrConnectWithoutReactionOnTimelinesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutReactionOnTimelinesInput_1.TimelineCreateWithoutReactionOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutReactionOnTimelinesInput_1.TimelineCreateWithoutReactionOnTimelinesInput)
], TimelineCreateOrConnectWithoutReactionOnTimelinesInput.prototype, "create", void 0);
TimelineCreateOrConnectWithoutReactionOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateOrConnectWithoutReactionOnTimelinesInput", {
        isAbstract: true
    })
], TimelineCreateOrConnectWithoutReactionOnTimelinesInput);
exports.TimelineCreateOrConnectWithoutReactionOnTimelinesInput = TimelineCreateOrConnectWithoutReactionOnTimelinesInput;
