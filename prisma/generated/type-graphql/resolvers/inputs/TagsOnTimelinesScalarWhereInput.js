"use strict";
var TagsOnTimelinesScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let TagsOnTimelinesScalarWhereInput = TagsOnTimelinesScalarWhereInput_1 = class TagsOnTimelinesScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TagsOnTimelinesScalarWhereInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TagsOnTimelinesScalarWhereInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TagsOnTimelinesScalarWhereInput.prototype, "assignedAt", void 0);
TagsOnTimelinesScalarWhereInput = TagsOnTimelinesScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesScalarWhereInput", {
        isAbstract: true
    })
], TagsOnTimelinesScalarWhereInput);
exports.TagsOnTimelinesScalarWhereInput = TagsOnTimelinesScalarWhereInput;
