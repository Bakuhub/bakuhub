"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestUpdateWithoutMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput_1 = require("../inputs/ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput");
let ThreadsOnMergeRequestUpdateWithoutMergeRequestInput = class ThreadsOnMergeRequestUpdateWithoutMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput_1.ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput_1.ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput)
], ThreadsOnMergeRequestUpdateWithoutMergeRequestInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadsOnMergeRequestUpdateWithoutMergeRequestInput.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestUpdateWithoutMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestUpdateWithoutMergeRequestInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestUpdateWithoutMergeRequestInput);
exports.ThreadsOnMergeRequestUpdateWithoutMergeRequestInput = ThreadsOnMergeRequestUpdateWithoutMergeRequestInput;
