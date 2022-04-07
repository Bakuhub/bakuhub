"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumReactionFieldUpdateOperationsInput_1 = require("../inputs/EnumReactionFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutReactionOnVisionsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutReactionOnVisionsInput");
const VisionUpdateOneRequiredWithoutReactionOnVisionsInput_1 = require("../inputs/VisionUpdateOneRequiredWithoutReactionOnVisionsInput");
let ReactionOnVisionsUpdateInput = class ReactionOnVisionsUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionOnVisionsInput_1.UserUpdateOneRequiredWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutReactionOnVisionsInput_1.UserUpdateOneRequiredWithoutReactionOnVisionsInput)
], ReactionOnVisionsUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutReactionOnVisionsInput_1.VisionUpdateOneRequiredWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneRequiredWithoutReactionOnVisionsInput_1.VisionUpdateOneRequiredWithoutReactionOnVisionsInput)
], ReactionOnVisionsUpdateInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput)
], ReactionOnVisionsUpdateInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionOnVisionsUpdateInput.prototype, "createdAt", void 0);
ReactionOnVisionsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsUpdateInput", {
        isAbstract: true
    })
], ReactionOnVisionsUpdateInput);
exports.ReactionOnVisionsUpdateInput = ReactionOnVisionsUpdateInput;
