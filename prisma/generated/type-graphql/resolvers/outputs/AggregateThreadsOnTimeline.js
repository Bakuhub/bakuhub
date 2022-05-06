"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThreadsOnTimeline = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCountAggregate_1 = require("../outputs/ThreadsOnTimelineCountAggregate");
const ThreadsOnTimelineMaxAggregate_1 = require("../outputs/ThreadsOnTimelineMaxAggregate");
const ThreadsOnTimelineMinAggregate_1 = require("../outputs/ThreadsOnTimelineMinAggregate");
let AggregateThreadsOnTimeline = class AggregateThreadsOnTimeline {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCountAggregate_1.ThreadsOnTimelineCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCountAggregate_1.ThreadsOnTimelineCountAggregate)
], AggregateThreadsOnTimeline.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineMinAggregate_1.ThreadsOnTimelineMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineMinAggregate_1.ThreadsOnTimelineMinAggregate)
], AggregateThreadsOnTimeline.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineMaxAggregate_1.ThreadsOnTimelineMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineMaxAggregate_1.ThreadsOnTimelineMaxAggregate)
], AggregateThreadsOnTimeline.prototype, "_max", void 0);
AggregateThreadsOnTimeline = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateThreadsOnTimeline", {
        isAbstract: true
    })
], AggregateThreadsOnTimeline);
exports.AggregateThreadsOnTimeline = AggregateThreadsOnTimeline;
