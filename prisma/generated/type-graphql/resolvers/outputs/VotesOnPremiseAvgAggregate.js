"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnPremiseAvgAggregate = class VotesOnPremiseAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnPremiseAvgAggregate.prototype, "vote", void 0);
VotesOnPremiseAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnPremiseAvgAggregate", {
        isAbstract: true
    })
], VotesOnPremiseAvgAggregate);
exports.VotesOnPremiseAvgAggregate = VotesOnPremiseAvgAggregate;
