"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsUpdateWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumReactionFieldUpdateOperationsInput_1 = require("../inputs/EnumReactionFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutReactionOnThreadsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutReactionOnThreadsInput");
let ReactionOnThreadsUpdateWithoutThreadInput = class ReactionOnThreadsUpdateWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionOnThreadsInput_1.UserUpdateOneRequiredWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutReactionOnThreadsInput_1.UserUpdateOneRequiredWithoutReactionOnThreadsInput)
], ReactionOnThreadsUpdateWithoutThreadInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput)
], ReactionOnThreadsUpdateWithoutThreadInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionOnThreadsUpdateWithoutThreadInput.prototype, "createdAt", void 0);
ReactionOnThreadsUpdateWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsUpdateWithoutThreadInput", {
        isAbstract: true
    })
], ReactionOnThreadsUpdateWithoutThreadInput);
exports.ReactionOnThreadsUpdateWithoutThreadInput = ReactionOnThreadsUpdateWithoutThreadInput;
