"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumReactionFieldUpdateOperationsInput_1 = require("../inputs/EnumReactionFieldUpdateOperationsInput");
const VisionUpdateOneRequiredWithoutReactionOnVisionsInput_1 = require("../inputs/VisionUpdateOneRequiredWithoutReactionOnVisionsInput");
let ReactionOnVisionsUpdateWithoutUserInput = class ReactionOnVisionsUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutReactionOnVisionsInput_1.VisionUpdateOneRequiredWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneRequiredWithoutReactionOnVisionsInput_1.VisionUpdateOneRequiredWithoutReactionOnVisionsInput)
], ReactionOnVisionsUpdateWithoutUserInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput)
], ReactionOnVisionsUpdateWithoutUserInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionOnVisionsUpdateWithoutUserInput.prototype, "createdAt", void 0);
ReactionOnVisionsUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsUpdateWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnVisionsUpdateWithoutUserInput);
exports.ReactionOnVisionsUpdateWithoutUserInput = ReactionOnVisionsUpdateWithoutUserInput;
