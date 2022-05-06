"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
let VotesOnTimelineUpdateManyMutationInput = class VotesOnTimelineUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], VotesOnTimelineUpdateManyMutationInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnTimelineUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnTimelineUpdateManyMutationInput.prototype, "updatedAt", void 0);
VotesOnTimelineUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineUpdateManyMutationInput", {
        isAbstract: true
    })
], VotesOnTimelineUpdateManyMutationInput);
exports.VotesOnTimelineUpdateManyMutationInput = VotesOnTimelineUpdateManyMutationInput;
