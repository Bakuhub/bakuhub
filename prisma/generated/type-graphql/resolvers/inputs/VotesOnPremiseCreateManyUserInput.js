"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnPremiseCreateManyUserInput = class VotesOnPremiseCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseCreateManyUserInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnPremiseCreateManyUserInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnPremiseCreateManyUserInput.prototype, "createdAt", void 0);
VotesOnPremiseCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseCreateManyUserInput", {
        isAbstract: true
    })
], VotesOnPremiseCreateManyUserInput);
exports.VotesOnPremiseCreateManyUserInput = VotesOnPremiseCreateManyUserInput;
