"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionUserIdVisionIdCompoundUniqueInput_1 = require("../inputs/VotesOnVisionUserIdVisionIdCompoundUniqueInput");
let VotesOnVisionWhereUniqueInput = class VotesOnVisionWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUserIdVisionIdCompoundUniqueInput_1.VotesOnVisionUserIdVisionIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUserIdVisionIdCompoundUniqueInput_1.VotesOnVisionUserIdVisionIdCompoundUniqueInput)
], VotesOnVisionWhereUniqueInput.prototype, "userId_visionId", void 0);
VotesOnVisionWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionWhereUniqueInput", {
        isAbstract: true
    })
], VotesOnVisionWhereUniqueInput);
exports.VotesOnVisionWhereUniqueInput = VotesOnVisionWhereUniqueInput;
