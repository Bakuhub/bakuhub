"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineUpdateWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutVotesOnTimelineInput_1 = require("../inputs/UserUpdateOneRequiredWithoutVotesOnTimelineInput");
let VotesOnTimelineUpdateWithoutTimelineInput = class VotesOnTimelineUpdateWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVotesOnTimelineInput_1.UserUpdateOneRequiredWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutVotesOnTimelineInput_1.UserUpdateOneRequiredWithoutVotesOnTimelineInput)
], VotesOnTimelineUpdateWithoutTimelineInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], VotesOnTimelineUpdateWithoutTimelineInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnTimelineUpdateWithoutTimelineInput.prototype, "createdAt", void 0);
VotesOnTimelineUpdateWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineUpdateWithoutTimelineInput", {
        isAbstract: true
    })
], VotesOnTimelineUpdateWithoutTimelineInput);
exports.VotesOnTimelineUpdateWithoutTimelineInput = VotesOnTimelineUpdateWithoutTimelineInput;
