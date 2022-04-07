"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput_1 = require("../inputs/MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput");
const ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput_1 = require("../inputs/ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput");
let ThreadsOnMergeRequestUpdateInput = class ThreadsOnMergeRequestUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput_1.ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput_1.ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput)
], ThreadsOnMergeRequestUpdateInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput_1.MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput_1.MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput)
], ThreadsOnMergeRequestUpdateInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadsOnMergeRequestUpdateInput.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestUpdateInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestUpdateInput);
exports.ThreadsOnMergeRequestUpdateInput = ThreadsOnMergeRequestUpdateInput;
