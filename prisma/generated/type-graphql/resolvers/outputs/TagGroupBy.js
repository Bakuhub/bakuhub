"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagAvgAggregate_1 = require("../outputs/TagAvgAggregate");
const TagCountAggregate_1 = require("../outputs/TagCountAggregate");
const TagMaxAggregate_1 = require("../outputs/TagMaxAggregate");
const TagMinAggregate_1 = require("../outputs/TagMinAggregate");
const TagSumAggregate_1 = require("../outputs/TagSumAggregate");
let TagGroupBy = class TagGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagGroupBy.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCountAggregate_1.TagCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCountAggregate_1.TagCountAggregate)
], TagGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagAvgAggregate_1.TagAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagAvgAggregate_1.TagAvgAggregate)
], TagGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagSumAggregate_1.TagSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagSumAggregate_1.TagSumAggregate)
], TagGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagMinAggregate_1.TagMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagMinAggregate_1.TagMinAggregate)
], TagGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagMaxAggregate_1.TagMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagMaxAggregate_1.TagMaxAggregate)
], TagGroupBy.prototype, "_max", void 0);
TagGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagGroupBy", {
        isAbstract: true
    })
], TagGroupBy);
exports.TagGroupBy = TagGroupBy;
