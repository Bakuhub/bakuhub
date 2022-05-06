"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumReactionFieldUpdateOperationsInput_1 = require("../inputs/EnumReactionFieldUpdateOperationsInput");
const TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput_1 = require("../inputs/TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput");
const UserUpdateOneRequiredWithoutReactionOnTimelinesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutReactionOnTimelinesInput");
let ReactionOnTimelinesUpdateInput = class ReactionOnTimelinesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionOnTimelinesInput_1.UserUpdateOneRequiredWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutReactionOnTimelinesInput_1.UserUpdateOneRequiredWithoutReactionOnTimelinesInput)
], ReactionOnTimelinesUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput)
], ReactionOnTimelinesUpdateInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput)
], ReactionOnTimelinesUpdateInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionOnTimelinesUpdateInput.prototype, "createdAt", void 0);
ReactionOnTimelinesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesUpdateInput", {
        isAbstract: true
    })
], ReactionOnTimelinesUpdateInput);
exports.ReactionOnTimelinesUpdateInput = ReactionOnTimelinesUpdateInput;
