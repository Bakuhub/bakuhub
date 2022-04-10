"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateNestedOneWithoutVotesOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateOrConnectWithoutVotesOnTimelineInput_1 = require("../inputs/TimelineCreateOrConnectWithoutVotesOnTimelineInput");
const TimelineCreateWithoutVotesOnTimelineInput_1 = require("../inputs/TimelineCreateWithoutVotesOnTimelineInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateNestedOneWithoutVotesOnTimelineInput = class TimelineCreateNestedOneWithoutVotesOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutVotesOnTimelineInput_1.TimelineCreateWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutVotesOnTimelineInput_1.TimelineCreateWithoutVotesOnTimelineInput)
], TimelineCreateNestedOneWithoutVotesOnTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutVotesOnTimelineInput_1.TimelineCreateOrConnectWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateOrConnectWithoutVotesOnTimelineInput_1.TimelineCreateOrConnectWithoutVotesOnTimelineInput)
], TimelineCreateNestedOneWithoutVotesOnTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateNestedOneWithoutVotesOnTimelineInput.prototype, "connect", void 0);
TimelineCreateNestedOneWithoutVotesOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateNestedOneWithoutVotesOnTimelineInput", {
        isAbstract: true
    })
], TimelineCreateNestedOneWithoutVotesOnTimelineInput);
exports.TimelineCreateNestedOneWithoutVotesOnTimelineInput = TimelineCreateNestedOneWithoutVotesOnTimelineInput;
