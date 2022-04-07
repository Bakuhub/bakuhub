"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseUpdateWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput_1 = require("../inputs/PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput");
let ThreadsOnPremiseUpdateWithoutThreadInput = class ThreadsOnPremiseUpdateWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput_1.PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput_1.PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput)
], ThreadsOnPremiseUpdateWithoutThreadInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ThreadsOnPremiseUpdateWithoutThreadInput.prototype, "assignedAt", void 0);
ThreadsOnPremiseUpdateWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseUpdateWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnPremiseUpdateWithoutThreadInput);
exports.ThreadsOnPremiseUpdateWithoutThreadInput = ThreadsOnPremiseUpdateWithoutThreadInput;
