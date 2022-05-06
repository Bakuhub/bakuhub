"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineUpdateWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput_1 = require("../inputs/ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput");
let ThreadsOnTimelineUpdateWithoutTimelineInput = class ThreadsOnTimelineUpdateWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput_1.ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput_1.ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput)
], ThreadsOnTimelineUpdateWithoutTimelineInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadsOnTimelineUpdateWithoutTimelineInput.prototype, "assignedAt", void 0);
ThreadsOnTimelineUpdateWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineUpdateWithoutTimelineInput", {
        isAbstract: true
    })
], ThreadsOnTimelineUpdateWithoutTimelineInput);
exports.ThreadsOnTimelineUpdateWithoutTimelineInput = ThreadsOnTimelineUpdateWithoutTimelineInput;
