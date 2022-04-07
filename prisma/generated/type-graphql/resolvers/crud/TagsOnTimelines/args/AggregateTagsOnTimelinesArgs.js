"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTagsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesOrderByWithRelationInput_1 = require("../../../inputs/TagsOnTimelinesOrderByWithRelationInput");
const TagsOnTimelinesWhereInput_1 = require("../../../inputs/TagsOnTimelinesWhereInput");
const TagsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/TagsOnTimelinesWhereUniqueInput");
let AggregateTagsOnTimelinesArgs = class AggregateTagsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput)
], AggregateTagsOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesOrderByWithRelationInput_1.TagsOnTimelinesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTagsOnTimelinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput)
], AggregateTagsOnTimelinesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTagsOnTimelinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTagsOnTimelinesArgs.prototype, "skip", void 0);
AggregateTagsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTagsOnTimelinesArgs);
exports.AggregateTagsOnTimelinesArgs = AggregateTagsOnTimelinesArgs;
