"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput_1 = require("../inputs/ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput");
const TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput_1 = require("../inputs/TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput");
let ThreadsOnTimelineUpdateInput = class ThreadsOnTimelineUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput_1.ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput_1.ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput)
], ThreadsOnTimelineUpdateInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput_1.TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput_1.TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput)
], ThreadsOnTimelineUpdateInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadsOnTimelineUpdateInput.prototype, "assignedAt", void 0);
ThreadsOnTimelineUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineUpdateInput", {
        isAbstract: true
    })
], ThreadsOnTimelineUpdateInput);
exports.ThreadsOnTimelineUpdateInput = ThreadsOnTimelineUpdateInput;
