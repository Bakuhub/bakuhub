"use strict";
var TagsOnTimelinesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TagRelationFilter_1 = require("../inputs/TagRelationFilter");
const TimelineRelationFilter_1 = require("../inputs/TimelineRelationFilter");
let TagsOnTimelinesWhereInput = TagsOnTimelinesWhereInput_1 = class TagsOnTimelinesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagRelationFilter_1.TagRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagRelationFilter_1.TagRelationFilter)
], TagsOnTimelinesWhereInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TagsOnTimelinesWhereInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineRelationFilter_1.TimelineRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineRelationFilter_1.TimelineRelationFilter)
], TagsOnTimelinesWhereInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TagsOnTimelinesWhereInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TagsOnTimelinesWhereInput.prototype, "assignedAt", void 0);
TagsOnTimelinesWhereInput = TagsOnTimelinesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesWhereInput", {
        isAbstract: true
    })
], TagsOnTimelinesWhereInput);
exports.TagsOnTimelinesWhereInput = TagsOnTimelinesWhereInput;
