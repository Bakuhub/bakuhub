"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesAvgAggregate_1 = require("../outputs/TagsOnTimelinesAvgAggregate");
const TagsOnTimelinesCountAggregate_1 = require("../outputs/TagsOnTimelinesCountAggregate");
const TagsOnTimelinesMaxAggregate_1 = require("../outputs/TagsOnTimelinesMaxAggregate");
const TagsOnTimelinesMinAggregate_1 = require("../outputs/TagsOnTimelinesMinAggregate");
const TagsOnTimelinesSumAggregate_1 = require("../outputs/TagsOnTimelinesSumAggregate");
let TagsOnTimelinesGroupBy = class TagsOnTimelinesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnTimelinesGroupBy.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesGroupBy.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnTimelinesGroupBy.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCountAggregate_1.TagsOnTimelinesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCountAggregate_1.TagsOnTimelinesCountAggregate)
], TagsOnTimelinesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesAvgAggregate_1.TagsOnTimelinesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesAvgAggregate_1.TagsOnTimelinesAvgAggregate)
], TagsOnTimelinesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesSumAggregate_1.TagsOnTimelinesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesSumAggregate_1.TagsOnTimelinesSumAggregate)
], TagsOnTimelinesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesMinAggregate_1.TagsOnTimelinesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesMinAggregate_1.TagsOnTimelinesMinAggregate)
], TagsOnTimelinesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesMaxAggregate_1.TagsOnTimelinesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesMaxAggregate_1.TagsOnTimelinesMaxAggregate)
], TagsOnTimelinesGroupBy.prototype, "_max", void 0);
TagsOnTimelinesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnTimelinesGroupBy", {
        isAbstract: true
    })
], TagsOnTimelinesGroupBy);
exports.TagsOnTimelinesGroupBy = TagsOnTimelinesGroupBy;
