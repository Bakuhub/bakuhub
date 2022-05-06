"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTimeline = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCountAggregate_1 = require("../outputs/TimelineCountAggregate");
const TimelineMaxAggregate_1 = require("../outputs/TimelineMaxAggregate");
const TimelineMinAggregate_1 = require("../outputs/TimelineMinAggregate");
let AggregateTimeline = class AggregateTimeline {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCountAggregate_1.TimelineCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCountAggregate_1.TimelineCountAggregate)
], AggregateTimeline.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineMinAggregate_1.TimelineMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineMinAggregate_1.TimelineMinAggregate)
], AggregateTimeline.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineMaxAggregate_1.TimelineMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineMaxAggregate_1.TimelineMaxAggregate)
], AggregateTimeline.prototype, "_max", void 0);
AggregateTimeline = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTimeline", {
        isAbstract: true
    })
], AggregateTimeline);
exports.AggregateTimeline = AggregateTimeline;
