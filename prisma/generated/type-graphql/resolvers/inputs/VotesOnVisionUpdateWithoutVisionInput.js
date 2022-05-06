"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionUpdateWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutVotesOnVisionInput_1 = require("../inputs/UserUpdateOneRequiredWithoutVotesOnVisionInput");
let VotesOnVisionUpdateWithoutVisionInput = class VotesOnVisionUpdateWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVotesOnVisionInput_1.UserUpdateOneRequiredWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutVotesOnVisionInput_1.UserUpdateOneRequiredWithoutVotesOnVisionInput)
], VotesOnVisionUpdateWithoutVisionInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], VotesOnVisionUpdateWithoutVisionInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnVisionUpdateWithoutVisionInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnVisionUpdateWithoutVisionInput.prototype, "updatedAt", void 0);
VotesOnVisionUpdateWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionUpdateWithoutVisionInput", {
        isAbstract: true
    })
], VotesOnVisionUpdateWithoutVisionInput);
exports.VotesOnVisionUpdateWithoutVisionInput = VotesOnVisionUpdateWithoutVisionInput;
