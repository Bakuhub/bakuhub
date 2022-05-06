"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionUpdateWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const VisionUpdateOneRequiredWithoutThreadsOnVisionInput_1 = require("../inputs/VisionUpdateOneRequiredWithoutThreadsOnVisionInput");
let ThreadsOnVisionUpdateWithoutThreadInput = class ThreadsOnVisionUpdateWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutThreadsOnVisionInput_1.VisionUpdateOneRequiredWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneRequiredWithoutThreadsOnVisionInput_1.VisionUpdateOneRequiredWithoutThreadsOnVisionInput)
], ThreadsOnVisionUpdateWithoutThreadInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadsOnVisionUpdateWithoutThreadInput.prototype, "assignedAt", void 0);
ThreadsOnVisionUpdateWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionUpdateWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnVisionUpdateWithoutThreadInput);
exports.ThreadsOnVisionUpdateWithoutThreadInput = ThreadsOnVisionUpdateWithoutThreadInput;
