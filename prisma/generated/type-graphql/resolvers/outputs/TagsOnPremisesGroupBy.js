"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesAvgAggregate_1 = require("../outputs/TagsOnPremisesAvgAggregate");
const TagsOnPremisesCountAggregate_1 = require("../outputs/TagsOnPremisesCountAggregate");
const TagsOnPremisesMaxAggregate_1 = require("../outputs/TagsOnPremisesMaxAggregate");
const TagsOnPremisesMinAggregate_1 = require("../outputs/TagsOnPremisesMinAggregate");
const TagsOnPremisesSumAggregate_1 = require("../outputs/TagsOnPremisesSumAggregate");
let TagsOnPremisesGroupBy = class TagsOnPremisesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnPremisesGroupBy.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesGroupBy.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnPremisesGroupBy.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCountAggregate_1.TagsOnPremisesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCountAggregate_1.TagsOnPremisesCountAggregate)
], TagsOnPremisesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesAvgAggregate_1.TagsOnPremisesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesAvgAggregate_1.TagsOnPremisesAvgAggregate)
], TagsOnPremisesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesSumAggregate_1.TagsOnPremisesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesSumAggregate_1.TagsOnPremisesSumAggregate)
], TagsOnPremisesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesMinAggregate_1.TagsOnPremisesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesMinAggregate_1.TagsOnPremisesMinAggregate)
], TagsOnPremisesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesMaxAggregate_1.TagsOnPremisesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesMaxAggregate_1.TagsOnPremisesMaxAggregate)
], TagsOnPremisesGroupBy.prototype, "_max", void 0);
TagsOnPremisesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnPremisesGroupBy", {
        isAbstract: true
    })
], TagsOnPremisesGroupBy);
exports.TagsOnPremisesGroupBy = TagsOnPremisesGroupBy;
