"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsAvgAggregate_1 = require("../outputs/TagsOnVisionsAvgAggregate");
const TagsOnVisionsCountAggregate_1 = require("../outputs/TagsOnVisionsCountAggregate");
const TagsOnVisionsMaxAggregate_1 = require("../outputs/TagsOnVisionsMaxAggregate");
const TagsOnVisionsMinAggregate_1 = require("../outputs/TagsOnVisionsMinAggregate");
const TagsOnVisionsSumAggregate_1 = require("../outputs/TagsOnVisionsSumAggregate");
let TagsOnVisionsGroupBy = class TagsOnVisionsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnVisionsGroupBy.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsGroupBy.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnVisionsGroupBy.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCountAggregate_1.TagsOnVisionsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCountAggregate_1.TagsOnVisionsCountAggregate)
], TagsOnVisionsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsAvgAggregate_1.TagsOnVisionsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsAvgAggregate_1.TagsOnVisionsAvgAggregate)
], TagsOnVisionsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsSumAggregate_1.TagsOnVisionsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsSumAggregate_1.TagsOnVisionsSumAggregate)
], TagsOnVisionsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsMinAggregate_1.TagsOnVisionsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsMinAggregate_1.TagsOnVisionsMinAggregate)
], TagsOnVisionsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsMaxAggregate_1.TagsOnVisionsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsMaxAggregate_1.TagsOnVisionsMaxAggregate)
], TagsOnVisionsGroupBy.prototype, "_max", void 0);
TagsOnVisionsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsOnVisionsGroupBy", {
        isAbstract: true
    })
], TagsOnVisionsGroupBy);
exports.TagsOnVisionsGroupBy = TagsOnVisionsGroupBy;
