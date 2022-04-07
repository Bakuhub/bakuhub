"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateNestedOneWithoutThreadsOnTimelineInput_1 = require("../inputs/ThreadCreateNestedOneWithoutThreadsOnTimelineInput");
const TimelineCreateNestedOneWithoutThreadsOnTimelineInput_1 = require("../inputs/TimelineCreateNestedOneWithoutThreadsOnTimelineInput");
let ThreadsOnTimelineCreateInput = class ThreadsOnTimelineCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnTimelineInput_1.ThreadCreateNestedOneWithoutThreadsOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedOneWithoutThreadsOnTimelineInput_1.ThreadCreateNestedOneWithoutThreadsOnTimelineInput)
], ThreadsOnTimelineCreateInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutThreadsOnTimelineInput_1.TimelineCreateNestedOneWithoutThreadsOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedOneWithoutThreadsOnTimelineInput_1.TimelineCreateNestedOneWithoutThreadsOnTimelineInput)
], ThreadsOnTimelineCreateInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnTimelineCreateInput.prototype, "assignedAt", void 0);
ThreadsOnTimelineCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineCreateInput", {
        isAbstract: true
    })
], ThreadsOnTimelineCreateInput);
exports.ThreadsOnTimelineCreateInput = ThreadsOnTimelineCreateInput;
