"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTagsOnTimelines = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesAvgAggregate_1 = require("../outputs/TagsOnTimelinesAvgAggregate");
const TagsOnTimelinesCountAggregate_1 = require("../outputs/TagsOnTimelinesCountAggregate");
const TagsOnTimelinesMaxAggregate_1 = require("../outputs/TagsOnTimelinesMaxAggregate");
const TagsOnTimelinesMinAggregate_1 = require("../outputs/TagsOnTimelinesMinAggregate");
const TagsOnTimelinesSumAggregate_1 = require("../outputs/TagsOnTimelinesSumAggregate");
let AggregateTagsOnTimelines = class AggregateTagsOnTimelines {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCountAggregate_1.TagsOnTimelinesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCountAggregate_1.TagsOnTimelinesCountAggregate)
], AggregateTagsOnTimelines.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesAvgAggregate_1.TagsOnTimelinesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesAvgAggregate_1.TagsOnTimelinesAvgAggregate)
], AggregateTagsOnTimelines.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesSumAggregate_1.TagsOnTimelinesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesSumAggregate_1.TagsOnTimelinesSumAggregate)
], AggregateTagsOnTimelines.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesMinAggregate_1.TagsOnTimelinesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesMinAggregate_1.TagsOnTimelinesMinAggregate)
], AggregateTagsOnTimelines.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesMaxAggregate_1.TagsOnTimelinesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesMaxAggregate_1.TagsOnTimelinesMaxAggregate)
], AggregateTagsOnTimelines.prototype, "_max", void 0);
AggregateTagsOnTimelines = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTagsOnTimelines", {
        isAbstract: true
    })
], AggregateTagsOnTimelines);
exports.AggregateTagsOnTimelines = AggregateTagsOnTimelines;
