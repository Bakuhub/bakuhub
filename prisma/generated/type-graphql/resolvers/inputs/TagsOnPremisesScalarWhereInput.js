"use strict";
var TagsOnPremisesScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let TagsOnPremisesScalarWhereInput = TagsOnPremisesScalarWhereInput_1 = class TagsOnPremisesScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TagsOnPremisesScalarWhereInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TagsOnPremisesScalarWhereInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TagsOnPremisesScalarWhereInput.prototype, "assignedAt", void 0);
TagsOnPremisesScalarWhereInput = TagsOnPremisesScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesScalarWhereInput", {
        isAbstract: true
    })
], TagsOnPremisesScalarWhereInput);
exports.TagsOnPremisesScalarWhereInput = TagsOnPremisesScalarWhereInput;
