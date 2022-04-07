"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
let ThreadsOnMergeRequestUpdateManyMutationInput = class ThreadsOnMergeRequestUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadsOnMergeRequestUpdateManyMutationInput.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestUpdateManyMutationInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestUpdateManyMutationInput);
exports.ThreadsOnMergeRequestUpdateManyMutationInput = ThreadsOnMergeRequestUpdateManyMutationInput;
