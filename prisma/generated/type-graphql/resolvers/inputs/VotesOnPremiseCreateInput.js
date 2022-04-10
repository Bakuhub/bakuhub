"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateNestedOneWithoutVotesOnPremiseInput_1 = require("../inputs/PremiseCreateNestedOneWithoutVotesOnPremiseInput");
const UserCreateNestedOneWithoutVotesOnPremiseInput_1 = require("../inputs/UserCreateNestedOneWithoutVotesOnPremiseInput");
let VotesOnPremiseCreateInput = class VotesOnPremiseCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnPremiseInput_1.UserCreateNestedOneWithoutVotesOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVotesOnPremiseInput_1.UserCreateNestedOneWithoutVotesOnPremiseInput)
], VotesOnPremiseCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutVotesOnPremiseInput_1.PremiseCreateNestedOneWithoutVotesOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedOneWithoutVotesOnPremiseInput_1.PremiseCreateNestedOneWithoutVotesOnPremiseInput)
], VotesOnPremiseCreateInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnPremiseCreateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnPremiseCreateInput.prototype, "createdAt", void 0);
VotesOnPremiseCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseCreateInput", {
        isAbstract: true
    })
], VotesOnPremiseCreateInput);
exports.VotesOnPremiseCreateInput = VotesOnPremiseCreateInput;
