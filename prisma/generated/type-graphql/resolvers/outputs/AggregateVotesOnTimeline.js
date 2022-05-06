"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVotesOnTimeline = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineAvgAggregate_1 = require("../outputs/VotesOnTimelineAvgAggregate");
const VotesOnTimelineCountAggregate_1 = require("../outputs/VotesOnTimelineCountAggregate");
const VotesOnTimelineMaxAggregate_1 = require("../outputs/VotesOnTimelineMaxAggregate");
const VotesOnTimelineMinAggregate_1 = require("../outputs/VotesOnTimelineMinAggregate");
const VotesOnTimelineSumAggregate_1 = require("../outputs/VotesOnTimelineSumAggregate");
let AggregateVotesOnTimeline = class AggregateVotesOnTimeline {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCountAggregate_1.VotesOnTimelineCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCountAggregate_1.VotesOnTimelineCountAggregate)
], AggregateVotesOnTimeline.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineAvgAggregate_1.VotesOnTimelineAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineAvgAggregate_1.VotesOnTimelineAvgAggregate)
], AggregateVotesOnTimeline.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineSumAggregate_1.VotesOnTimelineSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineSumAggregate_1.VotesOnTimelineSumAggregate)
], AggregateVotesOnTimeline.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineMinAggregate_1.VotesOnTimelineMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineMinAggregate_1.VotesOnTimelineMinAggregate)
], AggregateVotesOnTimeline.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineMaxAggregate_1.VotesOnTimelineMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineMaxAggregate_1.VotesOnTimelineMaxAggregate)
], AggregateVotesOnTimeline.prototype, "_max", void 0);
AggregateVotesOnTimeline = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateVotesOnTimeline", {
        isAbstract: true
    })
], AggregateVotesOnTimeline);
exports.AggregateVotesOnTimeline = AggregateVotesOnTimeline;
