"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnPremiseMinAggregate = class VotesOnPremiseMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseMinAggregate.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnPremiseMinAggregate.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnPremiseMinAggregate.prototype, "createdAt", void 0);
VotesOnPremiseMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnPremiseMinAggregate", {
        isAbstract: true
    })
], VotesOnPremiseMinAggregate);
exports.VotesOnPremiseMinAggregate = VotesOnPremiseMinAggregate;
