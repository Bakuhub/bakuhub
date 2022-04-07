"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReactionOnTimelines = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCountAggregate_1 = require("../outputs/ReactionOnTimelinesCountAggregate");
const ReactionOnTimelinesMaxAggregate_1 = require("../outputs/ReactionOnTimelinesMaxAggregate");
const ReactionOnTimelinesMinAggregate_1 = require("../outputs/ReactionOnTimelinesMinAggregate");
let AggregateReactionOnTimelines = class AggregateReactionOnTimelines {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCountAggregate_1.ReactionOnTimelinesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCountAggregate_1.ReactionOnTimelinesCountAggregate)
], AggregateReactionOnTimelines.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesMinAggregate_1.ReactionOnTimelinesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesMinAggregate_1.ReactionOnTimelinesMinAggregate)
], AggregateReactionOnTimelines.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesMaxAggregate_1.ReactionOnTimelinesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesMaxAggregate_1.ReactionOnTimelinesMaxAggregate)
], AggregateReactionOnTimelines.prototype, "_max", void 0);
AggregateReactionOnTimelines = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateReactionOnTimelines", {
        isAbstract: true
    })
], AggregateReactionOnTimelines);
exports.AggregateReactionOnTimelines = AggregateReactionOnTimelines;
