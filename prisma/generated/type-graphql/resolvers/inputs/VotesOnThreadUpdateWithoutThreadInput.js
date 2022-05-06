"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadUpdateWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutVotesOnThreadInput_1 = require("../inputs/UserUpdateOneRequiredWithoutVotesOnThreadInput");
let VotesOnThreadUpdateWithoutThreadInput = class VotesOnThreadUpdateWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVotesOnThreadInput_1.UserUpdateOneRequiredWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutVotesOnThreadInput_1.UserUpdateOneRequiredWithoutVotesOnThreadInput)
], VotesOnThreadUpdateWithoutThreadInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], VotesOnThreadUpdateWithoutThreadInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnThreadUpdateWithoutThreadInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnThreadUpdateWithoutThreadInput.prototype, "updatedAt", void 0);
VotesOnThreadUpdateWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadUpdateWithoutThreadInput", {
        isAbstract: true
    })
], VotesOnThreadUpdateWithoutThreadInput);
exports.VotesOnThreadUpdateWithoutThreadInput = VotesOnThreadUpdateWithoutThreadInput;
