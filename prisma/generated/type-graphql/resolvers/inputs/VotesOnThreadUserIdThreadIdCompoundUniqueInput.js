"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadUserIdThreadIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnThreadUserIdThreadIdCompoundUniqueInput = class VotesOnThreadUserIdThreadIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadUserIdThreadIdCompoundUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadUserIdThreadIdCompoundUniqueInput.prototype, "threadId", void 0);
VotesOnThreadUserIdThreadIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadUserIdThreadIdCompoundUniqueInput", {
        isAbstract: true
    })
], VotesOnThreadUserIdThreadIdCompoundUniqueInput);
exports.VotesOnThreadUserIdThreadIdCompoundUniqueInput = VotesOnThreadUserIdThreadIdCompoundUniqueInput;
