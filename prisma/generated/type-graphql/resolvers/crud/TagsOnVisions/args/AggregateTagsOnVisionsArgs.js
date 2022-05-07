"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTagsOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsOrderByWithRelationInput_1 = require("../../../inputs/TagsOnVisionsOrderByWithRelationInput");
const TagsOnVisionsWhereInput_1 = require("../../../inputs/TagsOnVisionsWhereInput");
const TagsOnVisionsWhereUniqueInput_1 = require("../../../inputs/TagsOnVisionsWhereUniqueInput");
let AggregateTagsOnVisionsArgs = class AggregateTagsOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput)
], AggregateTagsOnVisionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsOrderByWithRelationInput_1.TagsOnVisionsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTagsOnVisionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput)
], AggregateTagsOnVisionsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTagsOnVisionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTagsOnVisionsArgs.prototype, "skip", void 0);
AggregateTagsOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTagsOnVisionsArgs);
exports.AggregateTagsOnVisionsArgs = AggregateTagsOnVisionsArgs;
