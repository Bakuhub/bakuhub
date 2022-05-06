"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseUserIdPremiseIdCompoundUniqueInput_1 = require("../inputs/VotesOnPremiseUserIdPremiseIdCompoundUniqueInput");
let VotesOnPremiseWhereUniqueInput = class VotesOnPremiseWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUserIdPremiseIdCompoundUniqueInput_1.VotesOnPremiseUserIdPremiseIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUserIdPremiseIdCompoundUniqueInput_1.VotesOnPremiseUserIdPremiseIdCompoundUniqueInput)
], VotesOnPremiseWhereUniqueInput.prototype, "userId_premiseId", void 0);
VotesOnPremiseWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseWhereUniqueInput", {
        isAbstract: true
    })
], VotesOnPremiseWhereUniqueInput);
exports.VotesOnPremiseWhereUniqueInput = VotesOnPremiseWhereUniqueInput;
