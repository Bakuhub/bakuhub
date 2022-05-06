"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
let VotesOnThreadUpdateManyMutationInput = class VotesOnThreadUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], VotesOnThreadUpdateManyMutationInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnThreadUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnThreadUpdateManyMutationInput.prototype, "updatedAt", void 0);
VotesOnThreadUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadUpdateManyMutationInput", {
        isAbstract: true
    })
], VotesOnThreadUpdateManyMutationInput);
exports.VotesOnThreadUpdateManyMutationInput = VotesOnThreadUpdateManyMutationInput;
