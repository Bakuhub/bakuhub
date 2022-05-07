"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagTagsOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsOrderByWithRelationInput_1 = require("../../../inputs/TagsOnVisionsOrderByWithRelationInput");
const TagsOnVisionsWhereInput_1 = require("../../../inputs/TagsOnVisionsWhereInput");
const TagsOnVisionsWhereUniqueInput_1 = require("../../../inputs/TagsOnVisionsWhereUniqueInput");
const TagsOnVisionsScalarFieldEnum_1 = require("../../../../enums/TagsOnVisionsScalarFieldEnum");
let TagTagsOnVisionsArgs = class TagTagsOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput)
], TagTagsOnVisionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsOrderByWithRelationInput_1.TagsOnVisionsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagTagsOnVisionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput)
], TagTagsOnVisionsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagTagsOnVisionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagTagsOnVisionsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsScalarFieldEnum_1.TagsOnVisionsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagTagsOnVisionsArgs.prototype, "distinct", void 0);
TagTagsOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TagTagsOnVisionsArgs);
exports.TagTagsOnVisionsArgs = TagTagsOnVisionsArgs;
