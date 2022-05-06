"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateNestedOneWithoutReactionOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateOrConnectWithoutReactionOnTimelinesInput_1 = require("../inputs/TimelineCreateOrConnectWithoutReactionOnTimelinesInput");
const TimelineCreateWithoutReactionOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutReactionOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateNestedOneWithoutReactionOnTimelinesInput = class TimelineCreateNestedOneWithoutReactionOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutReactionOnTimelinesInput_1.TimelineCreateWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutReactionOnTimelinesInput_1.TimelineCreateWithoutReactionOnTimelinesInput)
], TimelineCreateNestedOneWithoutReactionOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutReactionOnTimelinesInput_1.TimelineCreateOrConnectWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateOrConnectWithoutReactionOnTimelinesInput_1.TimelineCreateOrConnectWithoutReactionOnTimelinesInput)
], TimelineCreateNestedOneWithoutReactionOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateNestedOneWithoutReactionOnTimelinesInput.prototype, "connect", void 0);
TimelineCreateNestedOneWithoutReactionOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateNestedOneWithoutReactionOnTimelinesInput", {
        isAbstract: true
    })
], TimelineCreateNestedOneWithoutReactionOnTimelinesInput);
exports.TimelineCreateNestedOneWithoutReactionOnTimelinesInput = TimelineCreateNestedOneWithoutReactionOnTimelinesInput;
