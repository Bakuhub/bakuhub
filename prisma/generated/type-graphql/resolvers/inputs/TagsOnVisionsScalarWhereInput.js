"use strict";
var TagsOnVisionsScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let TagsOnVisionsScalarWhereInput = TagsOnVisionsScalarWhereInput_1 = class TagsOnVisionsScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TagsOnVisionsScalarWhereInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TagsOnVisionsScalarWhereInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TagsOnVisionsScalarWhereInput.prototype, "assignedAt", void 0);
TagsOnVisionsScalarWhereInput = TagsOnVisionsScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsScalarWhereInput", {
        isAbstract: true
    })
], TagsOnVisionsScalarWhereInput);
exports.TagsOnVisionsScalarWhereInput = TagsOnVisionsScalarWhereInput;
