"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseUserIdPremiseIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnPremiseUserIdPremiseIdCompoundUniqueInput = class VotesOnPremiseUserIdPremiseIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseUserIdPremiseIdCompoundUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseUserIdPremiseIdCompoundUniqueInput.prototype, "premiseId", void 0);
VotesOnPremiseUserIdPremiseIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseUserIdPremiseIdCompoundUniqueInput", {
        isAbstract: true
    })
], VotesOnPremiseUserIdPremiseIdCompoundUniqueInput);
exports.VotesOnPremiseUserIdPremiseIdCompoundUniqueInput = VotesOnPremiseUserIdPremiseIdCompoundUniqueInput;
