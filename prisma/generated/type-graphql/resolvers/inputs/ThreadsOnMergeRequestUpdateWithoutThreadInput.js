"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestUpdateWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput_1 = require("../inputs/MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput");
let ThreadsOnMergeRequestUpdateWithoutThreadInput = class ThreadsOnMergeRequestUpdateWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput_1.MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput_1.MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput)
], ThreadsOnMergeRequestUpdateWithoutThreadInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadsOnMergeRequestUpdateWithoutThreadInput.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestUpdateWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestUpdateWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestUpdateWithoutThreadInput);
exports.ThreadsOnMergeRequestUpdateWithoutThreadInput = ThreadsOnMergeRequestUpdateWithoutThreadInput;
