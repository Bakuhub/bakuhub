"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTagsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesOrderByWithRelationInput_1 = require("../../../inputs/TagsOnPremisesOrderByWithRelationInput");
const TagsOnPremisesWhereInput_1 = require("../../../inputs/TagsOnPremisesWhereInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../../../inputs/TagsOnPremisesWhereUniqueInput");
const TagsOnPremisesScalarFieldEnum_1 = require("../../../../enums/TagsOnPremisesScalarFieldEnum");
let FindManyTagsOnPremisesArgs = class FindManyTagsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput)
], FindManyTagsOnPremisesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesOrderByWithRelationInput_1.TagsOnPremisesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTagsOnPremisesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput)
], FindManyTagsOnPremisesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTagsOnPremisesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTagsOnPremisesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesScalarFieldEnum_1.TagsOnPremisesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTagsOnPremisesArgs.prototype, "distinct", void 0);
FindManyTagsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTagsOnPremisesArgs);
exports.FindManyTagsOnPremisesArgs = FindManyTagsOnPremisesArgs;
