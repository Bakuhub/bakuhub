"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumReactionFieldUpdateOperationsInput_1 = require("../inputs/EnumReactionFieldUpdateOperationsInput");
const ThreadUpdateOneRequiredWithoutReactionOnThreadsInput_1 = require("../inputs/ThreadUpdateOneRequiredWithoutReactionOnThreadsInput");
const UserUpdateOneRequiredWithoutReactionOnThreadsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutReactionOnThreadsInput");
let ReactionOnThreadsUpdateInput = class ReactionOnThreadsUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionOnThreadsInput_1.UserUpdateOneRequiredWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutReactionOnThreadsInput_1.UserUpdateOneRequiredWithoutReactionOnThreadsInput)
], ReactionOnThreadsUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutReactionOnThreadsInput_1.ThreadUpdateOneRequiredWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateOneRequiredWithoutReactionOnThreadsInput_1.ThreadUpdateOneRequiredWithoutReactionOnThreadsInput)
], ReactionOnThreadsUpdateInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFieldUpdateOperationsInput_1.EnumReactionFieldUpdateOperationsInput)
], ReactionOnThreadsUpdateInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionOnThreadsUpdateInput.prototype, "createdAt", void 0);
ReactionOnThreadsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsUpdateInput", {
        isAbstract: true
    })
], ReactionOnThreadsUpdateInput);
exports.ReactionOnThreadsUpdateInput = ReactionOnThreadsUpdateInput;
