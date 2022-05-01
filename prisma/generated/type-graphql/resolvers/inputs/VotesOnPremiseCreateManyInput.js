"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnPremiseCreateManyInput = class VotesOnPremiseCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseCreateManyInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnPremiseCreateManyInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnPremiseCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnPremiseCreateManyInput.prototype, "updatedAt", void 0);
VotesOnPremiseCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseCreateManyInput", {
        isAbstract: true
    })
], VotesOnPremiseCreateManyInput);
exports.VotesOnPremiseCreateManyInput = VotesOnPremiseCreateManyInput;
