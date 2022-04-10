"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadUserIdThreadIdCompoundUniqueInput_1 = require("../inputs/VotesOnThreadUserIdThreadIdCompoundUniqueInput");
let VotesOnThreadWhereUniqueInput = class VotesOnThreadWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUserIdThreadIdCompoundUniqueInput_1.VotesOnThreadUserIdThreadIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUserIdThreadIdCompoundUniqueInput_1.VotesOnThreadUserIdThreadIdCompoundUniqueInput)
], VotesOnThreadWhereUniqueInput.prototype, "userId_threadId", void 0);
VotesOnThreadWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadWhereUniqueInput", {
        isAbstract: true
    })
], VotesOnThreadWhereUniqueInput);
exports.VotesOnThreadWhereUniqueInput = VotesOnThreadWhereUniqueInput;
