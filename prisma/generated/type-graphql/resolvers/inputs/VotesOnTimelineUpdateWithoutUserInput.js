"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const TimelineUpdateOneRequiredWithoutVotesOnTimelineInput_1 = require("../inputs/TimelineUpdateOneRequiredWithoutVotesOnTimelineInput");
let VotesOnTimelineUpdateWithoutUserInput = class VotesOnTimelineUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutVotesOnTimelineInput_1.TimelineUpdateOneRequiredWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateOneRequiredWithoutVotesOnTimelineInput_1.TimelineUpdateOneRequiredWithoutVotesOnTimelineInput)
], VotesOnTimelineUpdateWithoutUserInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], VotesOnTimelineUpdateWithoutUserInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VotesOnTimelineUpdateWithoutUserInput.prototype, "createdAt", void 0);
VotesOnTimelineUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineUpdateWithoutUserInput", {
        isAbstract: true
    })
], VotesOnTimelineUpdateWithoutUserInput);
exports.VotesOnTimelineUpdateWithoutUserInput = VotesOnTimelineUpdateWithoutUserInput;
