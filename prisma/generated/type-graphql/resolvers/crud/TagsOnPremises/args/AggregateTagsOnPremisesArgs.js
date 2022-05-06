"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTagsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesOrderByWithRelationInput_1 = require("../../../inputs/TagsOnPremisesOrderByWithRelationInput");
const TagsOnPremisesWhereInput_1 = require("../../../inputs/TagsOnPremisesWhereInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../../../inputs/TagsOnPremisesWhereUniqueInput");
let AggregateTagsOnPremisesArgs = class AggregateTagsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput)
], AggregateTagsOnPremisesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesOrderByWithRelationInput_1.TagsOnPremisesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTagsOnPremisesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput)
], AggregateTagsOnPremisesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTagsOnPremisesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTagsOnPremisesArgs.prototype, "skip", void 0);
AggregateTagsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTagsOnPremisesArgs);
exports.AggregateTagsOnPremisesArgs = AggregateTagsOnPremisesArgs;
