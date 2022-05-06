"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremise = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnPremise = class VotesOnPremise {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremise.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremise.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnPremise.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnPremise.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnPremise.prototype, "updatedAt", void 0);
VotesOnPremise = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnPremise", {
        isAbstract: true
    })
], VotesOnPremise);
exports.VotesOnPremise = VotesOnPremise;
