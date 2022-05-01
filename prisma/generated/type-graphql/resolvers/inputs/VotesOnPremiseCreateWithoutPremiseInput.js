"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseCreateWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutVotesOnPremiseInput_1 = require("../inputs/UserCreateNestedOneWithoutVotesOnPremiseInput");
let VotesOnPremiseCreateWithoutPremiseInput = class VotesOnPremiseCreateWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnPremiseInput_1.UserCreateNestedOneWithoutVotesOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVotesOnPremiseInput_1.UserCreateNestedOneWithoutVotesOnPremiseInput)
], VotesOnPremiseCreateWithoutPremiseInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnPremiseCreateWithoutPremiseInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnPremiseCreateWithoutPremiseInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnPremiseCreateWithoutPremiseInput.prototype, "updatedAt", void 0);
VotesOnPremiseCreateWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseCreateWithoutPremiseInput", {
        isAbstract: true
    })
], VotesOnPremiseCreateWithoutPremiseInput);
exports.VotesOnPremiseCreateWithoutPremiseInput = VotesOnPremiseCreateWithoutPremiseInput;
