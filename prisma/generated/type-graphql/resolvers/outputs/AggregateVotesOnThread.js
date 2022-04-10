"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVotesOnThread = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadAvgAggregate_1 = require("../outputs/VotesOnThreadAvgAggregate");
const VotesOnThreadCountAggregate_1 = require("../outputs/VotesOnThreadCountAggregate");
const VotesOnThreadMaxAggregate_1 = require("../outputs/VotesOnThreadMaxAggregate");
const VotesOnThreadMinAggregate_1 = require("../outputs/VotesOnThreadMinAggregate");
const VotesOnThreadSumAggregate_1 = require("../outputs/VotesOnThreadSumAggregate");
let AggregateVotesOnThread = class AggregateVotesOnThread {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCountAggregate_1.VotesOnThreadCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCountAggregate_1.VotesOnThreadCountAggregate)
], AggregateVotesOnThread.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadAvgAggregate_1.VotesOnThreadAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadAvgAggregate_1.VotesOnThreadAvgAggregate)
], AggregateVotesOnThread.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadSumAggregate_1.VotesOnThreadSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadSumAggregate_1.VotesOnThreadSumAggregate)
], AggregateVotesOnThread.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadMinAggregate_1.VotesOnThreadMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadMinAggregate_1.VotesOnThreadMinAggregate)
], AggregateVotesOnThread.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadMaxAggregate_1.VotesOnThreadMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadMaxAggregate_1.VotesOnThreadMaxAggregate)
], AggregateVotesOnThread.prototype, "_max", void 0);
AggregateVotesOnThread = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateVotesOnThread", {
        isAbstract: true
    })
], AggregateVotesOnThread);
exports.AggregateVotesOnThread = AggregateVotesOnThread;
