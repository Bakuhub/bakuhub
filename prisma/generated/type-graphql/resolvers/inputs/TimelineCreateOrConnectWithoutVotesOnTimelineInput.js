"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateOrConnectWithoutVotesOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutVotesOnTimelineInput_1 = require("../inputs/TimelineCreateWithoutVotesOnTimelineInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateOrConnectWithoutVotesOnTimelineInput = class TimelineCreateOrConnectWithoutVotesOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateOrConnectWithoutVotesOnTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutVotesOnTimelineInput_1.TimelineCreateWithoutVotesOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutVotesOnTimelineInput_1.TimelineCreateWithoutVotesOnTimelineInput)
], TimelineCreateOrConnectWithoutVotesOnTimelineInput.prototype, "create", void 0);
TimelineCreateOrConnectWithoutVotesOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateOrConnectWithoutVotesOnTimelineInput", {
        isAbstract: true
    })
], TimelineCreateOrConnectWithoutVotesOnTimelineInput);
exports.TimelineCreateOrConnectWithoutVotesOnTimelineInput = TimelineCreateOrConnectWithoutVotesOnTimelineInput;
