"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const ThreadUpdateOneRequiredWithoutVotesOnThreadInput_1 = require("../inputs/ThreadUpdateOneRequiredWithoutVotesOnThreadInput");
let VotesOnThreadUpdateWithoutUserInput = class VotesOnThreadUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutVotesOnThreadInput_1.ThreadUpdateOneRequiredWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneRequiredWithoutVotesOnThreadInput_1.ThreadUpdateOneRequiredWithoutVotesOnThreadInput)
], VotesOnThreadUpdateWithoutUserInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], VotesOnThreadUpdateWithoutUserInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnThreadUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnThreadUpdateWithoutUserInput.prototype, "updatedAt", void 0);
VotesOnThreadUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadUpdateWithoutUserInput", {
        isAbstract: true
    })
], VotesOnThreadUpdateWithoutUserInput);
exports.VotesOnThreadUpdateWithoutUserInput = VotesOnThreadUpdateWithoutUserInput;
