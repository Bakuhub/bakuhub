"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTagsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesUpdateInput_1 = require("../../../inputs/TagsOnPremisesUpdateInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../../../inputs/TagsOnPremisesWhereUniqueInput");
let UpdateTagsOnPremisesArgs = class UpdateTagsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesUpdateInput_1.TagsOnPremisesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesUpdateInput_1.TagsOnPremisesUpdateInput)
], UpdateTagsOnPremisesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput)
], UpdateTagsOnPremisesArgs.prototype, "where", void 0);
UpdateTagsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateTagsOnPremisesArgs);
exports.UpdateTagsOnPremisesArgs = UpdateTagsOnPremisesArgs;
