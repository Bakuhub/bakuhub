"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateInput_1 = require("../../../inputs/TagsOnPremisesCreateInput");
let CreateTagsOnPremisesArgs = class CreateTagsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateInput_1.TagsOnPremisesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateInput_1.TagsOnPremisesCreateInput)
], CreateTagsOnPremisesArgs.prototype, "data", void 0);
CreateTagsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateTagsOnPremisesArgs);
exports.CreateTagsOnPremisesArgs = CreateTagsOnPremisesArgs;
