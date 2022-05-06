"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTagsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateInput_1 = require("../../../inputs/TagsOnPremisesCreateInput");
const TagsOnPremisesUpdateInput_1 = require("../../../inputs/TagsOnPremisesUpdateInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../../../inputs/TagsOnPremisesWhereUniqueInput");
let UpsertTagsOnPremisesArgs = class UpsertTagsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput)
], UpsertTagsOnPremisesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateInput_1.TagsOnPremisesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateInput_1.TagsOnPremisesCreateInput)
], UpsertTagsOnPremisesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesUpdateInput_1.TagsOnPremisesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesUpdateInput_1.TagsOnPremisesUpdateInput)
], UpsertTagsOnPremisesArgs.prototype, "update", void 0);
UpsertTagsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertTagsOnPremisesArgs);
exports.UpsertTagsOnPremisesArgs = UpsertTagsOnPremisesArgs;
