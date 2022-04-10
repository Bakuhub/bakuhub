"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseUpdateWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutVotesOnPremiseInput_1 = require("../inputs/UserUpdateOneRequiredWithoutVotesOnPremiseInput");
let VotesOnPremiseUpdateWithoutPremiseInput = class VotesOnPremiseUpdateWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVotesOnPremiseInput_1.UserUpdateOneRequiredWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutVotesOnPremiseInput_1.UserUpdateOneRequiredWithoutVotesOnPremiseInput)
], VotesOnPremiseUpdateWithoutPremiseInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], VotesOnPremiseUpdateWithoutPremiseInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnPremiseUpdateWithoutPremiseInput.prototype, "createdAt", void 0);
VotesOnPremiseUpdateWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseUpdateWithoutPremiseInput", {
        isAbstract: true
    })
], VotesOnPremiseUpdateWithoutPremiseInput);
exports.VotesOnPremiseUpdateWithoutPremiseInput = VotesOnPremiseUpdateWithoutPremiseInput;
