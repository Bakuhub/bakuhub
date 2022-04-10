"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateNestedOneWithoutVotesOnPremiseInput_1 = require("../inputs/PremiseCreateNestedOneWithoutVotesOnPremiseInput");
let VotesOnPremiseCreateWithoutUserInput = class VotesOnPremiseCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutVotesOnPremiseInput_1.PremiseCreateNestedOneWithoutVotesOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedOneWithoutVotesOnPremiseInput_1.PremiseCreateNestedOneWithoutVotesOnPremiseInput)
], VotesOnPremiseCreateWithoutUserInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnPremiseCreateWithoutUserInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnPremiseCreateWithoutUserInput.prototype, "createdAt", void 0);
VotesOnPremiseCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseCreateWithoutUserInput", {
        isAbstract: true
    })
], VotesOnPremiseCreateWithoutUserInput);
exports.VotesOnPremiseCreateWithoutUserInput = VotesOnPremiseCreateWithoutUserInput;
