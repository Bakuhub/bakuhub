"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsUserIdThreadIdCompoundUniqueInput_1 = require("../inputs/ReactionOnThreadsUserIdThreadIdCompoundUniqueInput");
let ReactionOnThreadsWhereUniqueInput = class ReactionOnThreadsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUserIdThreadIdCompoundUniqueInput_1.ReactionOnThreadsUserIdThreadIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUserIdThreadIdCompoundUniqueInput_1.ReactionOnThreadsUserIdThreadIdCompoundUniqueInput)
], ReactionOnThreadsWhereUniqueInput.prototype, "userId_threadId", void 0);
ReactionOnThreadsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsWhereUniqueInput", {
        isAbstract: true
    })
], ReactionOnThreadsWhereUniqueInput);
exports.ReactionOnThreadsWhereUniqueInput = ReactionOnThreadsWhereUniqueInput;
