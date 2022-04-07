"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTagsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesOrderByWithRelationInput_1 = require("../../../inputs/TagsOnPremisesOrderByWithRelationInput");
const TagsOnPremisesWhereInput_1 = require("../../../inputs/TagsOnPremisesWhereInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../../../inputs/TagsOnPremisesWhereUniqueInput");
const TagsOnPremisesScalarFieldEnum_1 = require("../../../../enums/TagsOnPremisesScalarFieldEnum");
let FindFirstTagsOnPremisesArgs = class FindFirstTagsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput)
], FindFirstTagsOnPremisesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesOrderByWithRelationInput_1.TagsOnPremisesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTagsOnPremisesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput)
], FindFirstTagsOnPremisesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTagsOnPremisesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTagsOnPremisesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesScalarFieldEnum_1.TagsOnPremisesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTagsOnPremisesArgs.prototype, "distinct", void 0);
FindFirstTagsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTagsOnPremisesArgs);
exports.FindFirstTagsOnPremisesArgs = FindFirstTagsOnPremisesArgs;
