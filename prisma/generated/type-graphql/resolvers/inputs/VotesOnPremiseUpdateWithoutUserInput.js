"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const PremiseUpdateOneRequiredWithoutVotesOnPremiseInput_1 = require("../inputs/PremiseUpdateOneRequiredWithoutVotesOnPremiseInput");
let VotesOnPremiseUpdateWithoutUserInput = class VotesOnPremiseUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutVotesOnPremiseInput_1.PremiseUpdateOneRequiredWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateOneRequiredWithoutVotesOnPremiseInput_1.PremiseUpdateOneRequiredWithoutVotesOnPremiseInput)
], VotesOnPremiseUpdateWithoutUserInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], VotesOnPremiseUpdateWithoutUserInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnPremiseUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnPremiseUpdateWithoutUserInput.prototype, "updatedAt", void 0);
VotesOnPremiseUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseUpdateWithoutUserInput", {
        isAbstract: true
    })
], VotesOnPremiseUpdateWithoutUserInput);
exports.VotesOnPremiseUpdateWithoutUserInput = VotesOnPremiseUpdateWithoutUserInput;
