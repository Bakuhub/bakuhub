"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseUpdateWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput_1 = require("../inputs/ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput");
let ThreadsOnPremiseUpdateWithoutPremiseInput = class ThreadsOnPremiseUpdateWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput_1.ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput_1.ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput)
], ThreadsOnPremiseUpdateWithoutPremiseInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadsOnPremiseUpdateWithoutPremiseInput.prototype, "assignedAt", void 0);
ThreadsOnPremiseUpdateWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseUpdateWithoutPremiseInput", {
        isAbstract: true
    })
], ThreadsOnPremiseUpdateWithoutPremiseInput);
exports.ThreadsOnPremiseUpdateWithoutPremiseInput = ThreadsOnPremiseUpdateWithoutPremiseInput;
