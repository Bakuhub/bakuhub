"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutVotesOnVisionInput_1 = require("../inputs/UserUpdateOneRequiredWithoutVotesOnVisionInput");
const VisionUpdateOneRequiredWithoutVotesOnVisionInput_1 = require("../inputs/VisionUpdateOneRequiredWithoutVotesOnVisionInput");
let VotesOnVisionUpdateInput = class VotesOnVisionUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVotesOnVisionInput_1.UserUpdateOneRequiredWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutVotesOnVisionInput_1.UserUpdateOneRequiredWithoutVotesOnVisionInput)
], VotesOnVisionUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutVotesOnVisionInput_1.VisionUpdateOneRequiredWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneRequiredWithoutVotesOnVisionInput_1.VisionUpdateOneRequiredWithoutVotesOnVisionInput)
], VotesOnVisionUpdateInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], VotesOnVisionUpdateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnVisionUpdateInput.prototype, "createdAt", void 0);
VotesOnVisionUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionUpdateInput", {
        isAbstract: true
    })
], VotesOnVisionUpdateInput);
exports.VotesOnVisionUpdateInput = VotesOnVisionUpdateInput;
