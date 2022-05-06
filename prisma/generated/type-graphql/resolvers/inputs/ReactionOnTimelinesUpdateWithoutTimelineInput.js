"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesUpdateWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumReactionFieldUpdateOperationsInput_1 = require("../inputs/EnumReactionFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutReactionOnTimelinesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutReactionOnTimelinesInput");
let ReactionOnTimelinesUpdateWithoutTimelineInput = class ReactionOnTimelinesUpdateWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionOnTimelinesInput_1.UserUpdateOneRequiredWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutReactionOnTimelinesInput_1.UserUpdateOneRequiredWithoutReactionOnTimelinesInput)
], ReactionOnTimelinesUpdateWithoutTimelineInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput)
], ReactionOnTimelinesUpdateWithoutTimelineInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionOnTimelinesUpdateWithoutTimelineInput.prototype, "createdAt", void 0);
ReactionOnTimelinesUpdateWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesUpdateWithoutTimelineInput", {
        isAbstract: true
    })
], ReactionOnTimelinesUpdateWithoutTimelineInput);
exports.ReactionOnTimelinesUpdateWithoutTimelineInput = ReactionOnTimelinesUpdateWithoutTimelineInput;
