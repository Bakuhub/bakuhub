"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionUserIdVisionIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnVisionUserIdVisionIdCompoundUniqueInput = class VotesOnVisionUserIdVisionIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionUserIdVisionIdCompoundUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionUserIdVisionIdCompoundUniqueInput.prototype, "visionId", void 0);
VotesOnVisionUserIdVisionIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionUserIdVisionIdCompoundUniqueInput", {
        isAbstract: true
    })
], VotesOnVisionUserIdVisionIdCompoundUniqueInput);
exports.VotesOnVisionUserIdVisionIdCompoundUniqueInput = VotesOnVisionUserIdVisionIdCompoundUniqueInput;
