"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumReactionFieldUpdateOperationsInput_1 = require("../inputs/EnumReactionFieldUpdateOperationsInput");
let ReactionOnVisionsUpdateManyMutationInput = class ReactionOnVisionsUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput)
], ReactionOnVisionsUpdateManyMutationInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionOnVisionsUpdateManyMutationInput.prototype, "createdAt", void 0);
ReactionOnVisionsUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsUpdateManyMutationInput", {
        isAbstract: true
    })
], ReactionOnVisionsUpdateManyMutationInput);
exports.ReactionOnVisionsUpdateManyMutationInput = ReactionOnVisionsUpdateManyMutationInput;
