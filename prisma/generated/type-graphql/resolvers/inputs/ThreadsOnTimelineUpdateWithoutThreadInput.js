"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineUpdateWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput_1 = require("../inputs/TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput");
let ThreadsOnTimelineUpdateWithoutThreadInput = class ThreadsOnTimelineUpdateWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput_1.TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput_1.TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput)
], ThreadsOnTimelineUpdateWithoutThreadInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadsOnTimelineUpdateWithoutThreadInput.prototype, "assignedAt", void 0);
ThreadsOnTimelineUpdateWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineUpdateWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnTimelineUpdateWithoutThreadInput);
exports.ThreadsOnTimelineUpdateWithoutThreadInput = ThreadsOnTimelineUpdateWithoutThreadInput;
