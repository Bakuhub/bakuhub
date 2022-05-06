"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTagsOnPremises = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesAvgAggregate_1 = require("../outputs/TagsOnPremisesAvgAggregate");
const TagsOnPremisesCountAggregate_1 = require("../outputs/TagsOnPremisesCountAggregate");
const TagsOnPremisesMaxAggregate_1 = require("../outputs/TagsOnPremisesMaxAggregate");
const TagsOnPremisesMinAggregate_1 = require("../outputs/TagsOnPremisesMinAggregate");
const TagsOnPremisesSumAggregate_1 = require("../outputs/TagsOnPremisesSumAggregate");
let AggregateTagsOnPremises = class AggregateTagsOnPremises {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCountAggregate_1.TagsOnPremisesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCountAggregate_1.TagsOnPremisesCountAggregate)
], AggregateTagsOnPremises.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesAvgAggregate_1.TagsOnPremisesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesAvgAggregate_1.TagsOnPremisesAvgAggregate)
], AggregateTagsOnPremises.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesSumAggregate_1.TagsOnPremisesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesSumAggregate_1.TagsOnPremisesSumAggregate)
], AggregateTagsOnPremises.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesMinAggregate_1.TagsOnPremisesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesMinAggregate_1.TagsOnPremisesMinAggregate)
], AggregateTagsOnPremises.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesMaxAggregate_1.TagsOnPremisesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesMaxAggregate_1.TagsOnPremisesMaxAggregate)
], AggregateTagsOnPremises.prototype, "_max", void 0);
AggregateTagsOnPremises = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTagsOnPremises", {
        isAbstract: true
    })
], AggregateTagsOnPremises);
exports.AggregateTagsOnPremises = AggregateTagsOnPremises;
