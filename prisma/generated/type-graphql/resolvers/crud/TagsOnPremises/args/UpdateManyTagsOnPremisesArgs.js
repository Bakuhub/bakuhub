"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTagsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesUpdateManyMutationInput_1 = require("../../../inputs/TagsOnPremisesUpdateManyMutationInput");
const TagsOnPremisesWhereInput_1 = require("../../../inputs/TagsOnPremisesWhereInput");
let UpdateManyTagsOnPremisesArgs = class UpdateManyTagsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyMutationInput_1.TagsOnPremisesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesUpdateManyMutationInput_1.TagsOnPremisesUpdateManyMutationInput)
], UpdateManyTagsOnPremisesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput)
], UpdateManyTagsOnPremisesArgs.prototype, "where", void 0);
UpdateManyTagsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTagsOnPremisesArgs);
exports.UpdateManyTagsOnPremisesArgs = UpdateManyTagsOnPremisesArgs;
