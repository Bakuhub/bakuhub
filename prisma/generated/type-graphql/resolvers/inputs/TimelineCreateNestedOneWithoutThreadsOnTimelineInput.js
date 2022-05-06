"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateNestedOneWithoutThreadsOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateOrConnectWithoutThreadsOnTimelineInput_1 = require("../inputs/TimelineCreateOrConnectWithoutThreadsOnTimelineInput");
const TimelineCreateWithoutThreadsOnTimelineInput_1 = require("../inputs/TimelineCreateWithoutThreadsOnTimelineInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateNestedOneWithoutThreadsOnTimelineInput = class TimelineCreateNestedOneWithoutThreadsOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutThreadsOnTimelineInput_1.TimelineCreateWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutThreadsOnTimelineInput_1.TimelineCreateWithoutThreadsOnTimelineInput)
], TimelineCreateNestedOneWithoutThreadsOnTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutThreadsOnTimelineInput_1.TimelineCreateOrConnectWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateOrConnectWithoutThreadsOnTimelineInput_1.TimelineCreateOrConnectWithoutThreadsOnTimelineInput)
], TimelineCreateNestedOneWithoutThreadsOnTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateNestedOneWithoutThreadsOnTimelineInput.prototype, "connect", void 0);
TimelineCreateNestedOneWithoutThreadsOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateNestedOneWithoutThreadsOnTimelineInput", {
        isAbstract: true
    })
], TimelineCreateNestedOneWithoutThreadsOnTimelineInput);
exports.TimelineCreateNestedOneWithoutThreadsOnTimelineInput = TimelineCreateNestedOneWithoutThreadsOnTimelineInput;
