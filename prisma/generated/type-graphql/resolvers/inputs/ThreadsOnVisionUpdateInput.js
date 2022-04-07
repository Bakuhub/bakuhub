"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ThreadUpdateOneRequiredWithoutThreadsOnVisionInput_1 = require("../inputs/ThreadUpdateOneRequiredWithoutThreadsOnVisionInput");
const VisionUpdateOneRequiredWithoutThreadsOnVisionInput_1 = require("../inputs/VisionUpdateOneRequiredWithoutThreadsOnVisionInput");
let ThreadsOnVisionUpdateInput = class ThreadsOnVisionUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutThreadsOnVisionInput_1.ThreadUpdateOneRequiredWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneRequiredWithoutThreadsOnVisionInput_1.ThreadUpdateOneRequiredWithoutThreadsOnVisionInput)
], ThreadsOnVisionUpdateInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutThreadsOnVisionInput_1.VisionUpdateOneRequiredWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneRequiredWithoutThreadsOnVisionInput_1.VisionUpdateOneRequiredWithoutThreadsOnVisionInput)
], ThreadsOnVisionUpdateInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadsOnVisionUpdateInput.prototype, "assignedAt", void 0);
ThreadsOnVisionUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionUpdateInput", {
        isAbstract: true
    })
], ThreadsOnVisionUpdateInput);
exports.ThreadsOnVisionUpdateInput = ThreadsOnVisionUpdateInput;
