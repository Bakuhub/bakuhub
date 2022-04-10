"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseCreateManyPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnPremiseCreateManyPremiseInput = class VotesOnPremiseCreateManyPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseCreateManyPremiseInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnPremiseCreateManyPremiseInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnPremiseCreateManyPremiseInput.prototype, "createdAt", void 0);
VotesOnPremiseCreateManyPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseCreateManyPremiseInput", {
        isAbstract: true
    })
], VotesOnPremiseCreateManyPremiseInput);
exports.VotesOnPremiseCreateManyPremiseInput = VotesOnPremiseCreateManyPremiseInput;
