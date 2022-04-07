"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput_1 = require("../inputs/PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput");
const ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput_1 = require("../inputs/ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput");
let ThreadsOnPremiseUpdateInput = class ThreadsOnPremiseUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput_1.ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput_1.ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput)
], ThreadsOnPremiseUpdateInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput_1.PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput_1.PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput)
], ThreadsOnPremiseUpdateInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadsOnPremiseUpdateInput.prototype, "assignedAt", void 0);
ThreadsOnPremiseUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseUpdateInput", {
        isAbstract: true
    })
], ThreadsOnPremiseUpdateInput);
exports.ThreadsOnPremiseUpdateInput = ThreadsOnPremiseUpdateInput;
