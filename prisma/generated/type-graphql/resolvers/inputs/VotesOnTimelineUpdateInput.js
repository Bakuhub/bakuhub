"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const TimelineUpdateOneRequiredWithoutVotesOnTimelineInput_1 = require("../inputs/TimelineUpdateOneRequiredWithoutVotesOnTimelineInput");
const UserUpdateOneRequiredWithoutVotesOnTimelineInput_1 = require("../inputs/UserUpdateOneRequiredWithoutVotesOnTimelineInput");
let VotesOnTimelineUpdateInput = class VotesOnTimelineUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVotesOnTimelineInput_1.UserUpdateOneRequiredWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutVotesOnTimelineInput_1.UserUpdateOneRequiredWithoutVotesOnTimelineInput)
], VotesOnTimelineUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutVotesOnTimelineInput_1.TimelineUpdateOneRequiredWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateOneRequiredWithoutVotesOnTimelineInput_1.TimelineUpdateOneRequiredWithoutVotesOnTimelineInput)
], VotesOnTimelineUpdateInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], VotesOnTimelineUpdateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnTimelineUpdateInput.prototype, "createdAt", void 0);
VotesOnTimelineUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineUpdateInput", {
        isAbstract: true
    })
], VotesOnTimelineUpdateInput);
exports.VotesOnTimelineUpdateInput = VotesOnTimelineUpdateInput;
