"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsUpdateWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumReactionFieldUpdateOperationsInput_1 = require("../inputs/EnumReactionFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutReactionOnVisionsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutReactionOnVisionsInput");
let ReactionOnVisionsUpdateWithoutVisionInput = class ReactionOnVisionsUpdateWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionOnVisionsInput_1.UserUpdateOneRequiredWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutReactionOnVisionsInput_1.UserUpdateOneRequiredWithoutReactionOnVisionsInput)
], ReactionOnVisionsUpdateWithoutVisionInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput)
], ReactionOnVisionsUpdateWithoutVisionInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionOnVisionsUpdateWithoutVisionInput.prototype, "createdAt", void 0);
ReactionOnVisionsUpdateWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsUpdateWithoutVisionInput", {
        isAbstract: true
    })
], ReactionOnVisionsUpdateWithoutVisionInput);
exports.ReactionOnVisionsUpdateWithoutVisionInput = ReactionOnVisionsUpdateWithoutVisionInput;
