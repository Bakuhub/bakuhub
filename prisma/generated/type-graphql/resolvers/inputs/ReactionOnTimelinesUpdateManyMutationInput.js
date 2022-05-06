"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumReactionFieldUpdateOperationsInput_1 = require("../inputs/EnumReactionFieldUpdateOperationsInput");
let ReactionOnTimelinesUpdateManyMutationInput = class ReactionOnTimelinesUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput)
], ReactionOnTimelinesUpdateManyMutationInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionOnTimelinesUpdateManyMutationInput.prototype, "createdAt", void 0);
ReactionOnTimelinesUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesUpdateManyMutationInput", {
        isAbstract: true
    })
], ReactionOnTimelinesUpdateManyMutationInput);
exports.ReactionOnTimelinesUpdateManyMutationInput = ReactionOnTimelinesUpdateManyMutationInput;
