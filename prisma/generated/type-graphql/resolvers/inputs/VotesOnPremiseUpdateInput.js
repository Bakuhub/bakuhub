"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const PremiseUpdateOneRequiredWithoutVotesOnPremiseInput_1 = require("../inputs/PremiseUpdateOneRequiredWithoutVotesOnPremiseInput");
const UserUpdateOneRequiredWithoutVotesOnPremiseInput_1 = require("../inputs/UserUpdateOneRequiredWithoutVotesOnPremiseInput");
let VotesOnPremiseUpdateInput = class VotesOnPremiseUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVotesOnPremiseInput_1.UserUpdateOneRequiredWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutVotesOnPremiseInput_1.UserUpdateOneRequiredWithoutVotesOnPremiseInput)
], VotesOnPremiseUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutVotesOnPremiseInput_1.PremiseUpdateOneRequiredWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateOneRequiredWithoutVotesOnPremiseInput_1.PremiseUpdateOneRequiredWithoutVotesOnPremiseInput)
], VotesOnPremiseUpdateInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], VotesOnPremiseUpdateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnPremiseUpdateInput.prototype, "createdAt", void 0);
VotesOnPremiseUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseUpdateInput", {
        isAbstract: true
    })
], VotesOnPremiseUpdateInput);
exports.VotesOnPremiseUpdateInput = VotesOnPremiseUpdateInput;
