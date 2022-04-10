"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const VisionUpdateOneRequiredWithoutVotesOnVisionInput_1 = require("../inputs/VisionUpdateOneRequiredWithoutVotesOnVisionInput");
let VotesOnVisionUpdateWithoutUserInput = class VotesOnVisionUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutVotesOnVisionInput_1.VisionUpdateOneRequiredWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneRequiredWithoutVotesOnVisionInput_1.VisionUpdateOneRequiredWithoutVotesOnVisionInput)
], VotesOnVisionUpdateWithoutUserInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], VotesOnVisionUpdateWithoutUserInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnVisionUpdateWithoutUserInput.prototype, "createdAt", void 0);
VotesOnVisionUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionUpdateWithoutUserInput", {
        isAbstract: true
    })
], VotesOnVisionUpdateWithoutUserInput);
exports.VotesOnVisionUpdateWithoutUserInput = VotesOnVisionUpdateWithoutUserInput;
