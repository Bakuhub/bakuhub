"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTagsOnVisions = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsAvgAggregate_1 = require("../outputs/TagsOnVisionsAvgAggregate");
const TagsOnVisionsCountAggregate_1 = require("../outputs/TagsOnVisionsCountAggregate");
const TagsOnVisionsMaxAggregate_1 = require("../outputs/TagsOnVisionsMaxAggregate");
const TagsOnVisionsMinAggregate_1 = require("../outputs/TagsOnVisionsMinAggregate");
const TagsOnVisionsSumAggregate_1 = require("../outputs/TagsOnVisionsSumAggregate");
let AggregateTagsOnVisions = class AggregateTagsOnVisions {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCountAggregate_1.TagsOnVisionsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCountAggregate_1.TagsOnVisionsCountAggregate)
], AggregateTagsOnVisions.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsAvgAggregate_1.TagsOnVisionsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsAvgAggregate_1.TagsOnVisionsAvgAggregate)
], AggregateTagsOnVisions.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsSumAggregate_1.TagsOnVisionsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsSumAggregate_1.TagsOnVisionsSumAggregate)
], AggregateTagsOnVisions.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsMinAggregate_1.TagsOnVisionsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsMinAggregate_1.TagsOnVisionsMinAggregate)
], AggregateTagsOnVisions.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsMaxAggregate_1.TagsOnVisionsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsMaxAggregate_1.TagsOnVisionsMaxAggregate)
], AggregateTagsOnVisions.prototype, "_max", void 0);
AggregateTagsOnVisions = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTagsOnVisions", {
        isAbstract: true
    })
], AggregateTagsOnVisions);
exports.AggregateTagsOnVisions = AggregateTagsOnVisions;
