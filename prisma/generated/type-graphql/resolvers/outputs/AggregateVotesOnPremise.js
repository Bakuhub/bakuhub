"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVotesOnPremise = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseAvgAggregate_1 = require("../outputs/VotesOnPremiseAvgAggregate");
const VotesOnPremiseCountAggregate_1 = require("../outputs/VotesOnPremiseCountAggregate");
const VotesOnPremiseMaxAggregate_1 = require("../outputs/VotesOnPremiseMaxAggregate");
const VotesOnPremiseMinAggregate_1 = require("../outputs/VotesOnPremiseMinAggregate");
const VotesOnPremiseSumAggregate_1 = require("../outputs/VotesOnPremiseSumAggregate");
let AggregateVotesOnPremise = class AggregateVotesOnPremise {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCountAggregate_1.VotesOnPremiseCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCountAggregate_1.VotesOnPremiseCountAggregate)
], AggregateVotesOnPremise.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseAvgAggregate_1.VotesOnPremiseAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseAvgAggregate_1.VotesOnPremiseAvgAggregate)
], AggregateVotesOnPremise.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseSumAggregate_1.VotesOnPremiseSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseSumAggregate_1.VotesOnPremiseSumAggregate)
], AggregateVotesOnPremise.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseMinAggregate_1.VotesOnPremiseMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseMinAggregate_1.VotesOnPremiseMinAggregate)
], AggregateVotesOnPremise.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseMaxAggregate_1.VotesOnPremiseMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseMaxAggregate_1.VotesOnPremiseMaxAggregate)
], AggregateVotesOnPremise.prototype, "_max", void 0);
AggregateVotesOnPremise = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateVotesOnPremise", {
        isAbstract: true
    })
], AggregateVotesOnPremise);
exports.AggregateVotesOnPremise = AggregateVotesOnPremise;
