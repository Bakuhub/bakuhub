"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
let ThreadsOnTimelineUpdateManyMutationInput = class ThreadsOnTimelineUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadsOnTimelineUpdateManyMutationInput.prototype, "assignedAt", void 0);
ThreadsOnTimelineUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineUpdateManyMutationInput", {
        isAbstract: true
    })
], ThreadsOnTimelineUpdateManyMutationInput);
exports.ThreadsOnTimelineUpdateManyMutationInput = ThreadsOnTimelineUpdateManyMutationInput;
