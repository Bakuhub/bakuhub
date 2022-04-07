"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumReactionFieldUpdateOperationsInput_1 = require("../inputs/EnumReactionFieldUpdateOperationsInput");
let ReactionOnThreadsUpdateManyMutationInput = class ReactionOnThreadsUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput)
], ReactionOnThreadsUpdateManyMutationInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionOnThreadsUpdateManyMutationInput.prototype, "createdAt", void 0);
ReactionOnThreadsUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsUpdateManyMutationInput", {
        isAbstract: true
    })
], ReactionOnThreadsUpdateManyMutationInput);
exports.ReactionOnThreadsUpdateManyMutationInput = ReactionOnThreadsUpdateManyMutationInput;
