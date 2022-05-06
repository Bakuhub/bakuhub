"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTagsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesOrderByWithRelationInput_1 = require("../../../inputs/TagsOnTimelinesOrderByWithRelationInput");
const TagsOnTimelinesWhereInput_1 = require("../../../inputs/TagsOnTimelinesWhereInput");
const TagsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/TagsOnTimelinesWhereUniqueInput");
const TagsOnTimelinesScalarFieldEnum_1 = require("../../../../enums/TagsOnTimelinesScalarFieldEnum");
let FindManyTagsOnTimelinesArgs = class FindManyTagsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput)
], FindManyTagsOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesOrderByWithRelationInput_1.TagsOnTimelinesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTagsOnTimelinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput)
], FindManyTagsOnTimelinesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTagsOnTimelinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTagsOnTimelinesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesScalarFieldEnum_1.TagsOnTimelinesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTagsOnTimelinesArgs.prototype, "distinct", void 0);
FindManyTagsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTagsOnTimelinesArgs);
exports.FindManyTagsOnTimelinesArgs = FindManyTagsOnTimelinesArgs;
