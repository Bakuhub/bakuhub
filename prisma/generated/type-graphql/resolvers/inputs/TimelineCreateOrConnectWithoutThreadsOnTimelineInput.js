"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateOrConnectWithoutThreadsOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutThreadsOnTimelineInput_1 = require("../inputs/TimelineCreateWithoutThreadsOnTimelineInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateOrConnectWithoutThreadsOnTimelineInput = class TimelineCreateOrConnectWithoutThreadsOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateOrConnectWithoutThreadsOnTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutThreadsOnTimelineInput_1.TimelineCreateWithoutThreadsOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutThreadsOnTimelineInput_1.TimelineCreateWithoutThreadsOnTimelineInput)
], TimelineCreateOrConnectWithoutThreadsOnTimelineInput.prototype, "create", void 0);
TimelineCreateOrConnectWithoutThreadsOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateOrConnectWithoutThreadsOnTimelineInput", {
        isAbstract: true
    })
], TimelineCreateOrConnectWithoutThreadsOnTimelineInput);
exports.TimelineCreateOrConnectWithoutThreadsOnTimelineInput = TimelineCreateOrConnectWithoutThreadsOnTimelineInput;
