"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumReactionFieldUpdateOperationsInput_1 = require("../inputs/EnumReactionFieldUpdateOperationsInput");
const TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput_1 = require("../inputs/TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput");
let ReactionOnTimelinesUpdateWithoutUserInput = class ReactionOnTimelinesUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput)
], ReactionOnTimelinesUpdateWithoutUserInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput)
], ReactionOnTimelinesUpdateWithoutUserInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionOnTimelinesUpdateWithoutUserInput.prototype, "createdAt", void 0);
ReactionOnTimelinesUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesUpdateWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnTimelinesUpdateWithoutUserInput);
exports.ReactionOnTimelinesUpdateWithoutUserInput = ReactionOnTimelinesUpdateWithoutUserInput;
