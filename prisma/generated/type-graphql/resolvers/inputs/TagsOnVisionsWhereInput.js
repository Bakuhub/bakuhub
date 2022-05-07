"use strict";
var TagsOnVisionsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TagRelationFilter_1 = require("../inputs/TagRelationFilter");
const VisionRelationFilter_1 = require("../inputs/VisionRelationFilter");
let TagsOnVisionsWhereInput = TagsOnVisionsWhereInput_1 = class TagsOnVisionsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagRelationFilter_1.TagRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagRelationFilter_1.TagRelationFilter)
], TagsOnVisionsWhereInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TagsOnVisionsWhereInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionRelationFilter_1.VisionRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionRelationFilter_1.VisionRelationFilter)
], TagsOnVisionsWhereInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TagsOnVisionsWhereInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TagsOnVisionsWhereInput.prototype, "assignedAt", void 0);
TagsOnVisionsWhereInput = TagsOnVisionsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsWhereInput", {
        isAbstract: true
    })
], TagsOnVisionsWhereInput);
exports.TagsOnVisionsWhereInput = TagsOnVisionsWhereInput;
