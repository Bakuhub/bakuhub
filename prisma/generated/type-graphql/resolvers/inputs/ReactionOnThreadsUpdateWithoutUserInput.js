"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumReactionFieldUpdateOperationsInput_1 = require("../inputs/EnumReactionFieldUpdateOperationsInput");
const ThreadUpdateOneRequiredWithoutReactionOnThreadsInput_1 = require("../inputs/ThreadUpdateOneRequiredWithoutReactionOnThreadsInput");
let ReactionOnThreadsUpdateWithoutUserInput = class ReactionOnThreadsUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutReactionOnThreadsInput_1.ThreadUpdateOneRequiredWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneRequiredWithoutReactionOnThreadsInput_1.ThreadUpdateOneRequiredWithoutReactionOnThreadsInput)
], ReactionOnThreadsUpdateWithoutUserInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput)
], ReactionOnThreadsUpdateWithoutUserInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionOnThreadsUpdateWithoutUserInput.prototype, "createdAt", void 0);
ReactionOnThreadsUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsUpdateWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnThreadsUpdateWithoutUserInput);
exports.ReactionOnThreadsUpdateWithoutUserInput = ReactionOnThreadsUpdateWithoutUserInput;
