"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVotesOnVision = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionAvgAggregate_1 = require("../outputs/VotesOnVisionAvgAggregate");
const VotesOnVisionCountAggregate_1 = require("../outputs/VotesOnVisionCountAggregate");
const VotesOnVisionMaxAggregate_1 = require("../outputs/VotesOnVisionMaxAggregate");
const VotesOnVisionMinAggregate_1 = require("../outputs/VotesOnVisionMinAggregate");
const VotesOnVisionSumAggregate_1 = require("../outputs/VotesOnVisionSumAggregate");
let AggregateVotesOnVision = class AggregateVotesOnVision {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCountAggregate_1.VotesOnVisionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCountAggregate_1.VotesOnVisionCountAggregate)
], AggregateVotesOnVision.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionAvgAggregate_1.VotesOnVisionAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionAvgAggregate_1.VotesOnVisionAvgAggregate)
], AggregateVotesOnVision.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionSumAggregate_1.VotesOnVisionSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionSumAggregate_1.VotesOnVisionSumAggregate)
], AggregateVotesOnVision.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionMinAggregate_1.VotesOnVisionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionMinAggregate_1.VotesOnVisionMinAggregate)
], AggregateVotesOnVision.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionMaxAggregate_1.VotesOnVisionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionMaxAggregate_1.VotesOnVisionMaxAggregate)
], AggregateVotesOnVision.prototype, "_max", void 0);
AggregateVotesOnVision = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateVotesOnVision", {
        isAbstract: true
    })
], AggregateVotesOnVision);
exports.AggregateVotesOnVision = AggregateVotesOnVision;
