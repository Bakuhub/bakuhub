"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionUpdateWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ThreadUpdateOneRequiredWithoutThreadsOnVisionInput_1 = require("../inputs/ThreadUpdateOneRequiredWithoutThreadsOnVisionInput");
let ThreadsOnVisionUpdateWithoutVisionInput = class ThreadsOnVisionUpdateWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutThreadsOnVisionInput_1.ThreadUpdateOneRequiredWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneRequiredWithoutThreadsOnVisionInput_1.ThreadUpdateOneRequiredWithoutThreadsOnVisionInput)
], ThreadsOnVisionUpdateWithoutVisionInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadsOnVisionUpdateWithoutVisionInput.prototype, "assignedAt", void 0);
ThreadsOnVisionUpdateWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionUpdateWithoutVisionInput", {
        isAbstract: true
    })
], ThreadsOnVisionUpdateWithoutVisionInput);
exports.ThreadsOnVisionUpdateWithoutVisionInput = ThreadsOnVisionUpdateWithoutVisionInput;
