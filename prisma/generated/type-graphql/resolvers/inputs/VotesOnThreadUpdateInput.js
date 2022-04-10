"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const ThreadUpdateOneRequiredWithoutVotesOnThreadInput_1 = require("../inputs/ThreadUpdateOneRequiredWithoutVotesOnThreadInput");
const UserUpdateOneRequiredWithoutVotesOnThreadInput_1 = require("../inputs/UserUpdateOneRequiredWithoutVotesOnThreadInput");
let VotesOnThreadUpdateInput = class VotesOnThreadUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVotesOnThreadInput_1.UserUpdateOneRequiredWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutVotesOnThreadInput_1.UserUpdateOneRequiredWithoutVotesOnThreadInput)
], VotesOnThreadUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutVotesOnThreadInput_1.ThreadUpdateOneRequiredWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneRequiredWithoutVotesOnThreadInput_1.ThreadUpdateOneRequiredWithoutVotesOnThreadInput)
], VotesOnThreadUpdateInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], VotesOnThreadUpdateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnThreadUpdateInput.prototype, "createdAt", void 0);
VotesOnThreadUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadUpdateInput", {
        isAbstract: true
    })
], VotesOnThreadUpdateInput);
exports.VotesOnThreadUpdateInput = VotesOnThreadUpdateInput;
