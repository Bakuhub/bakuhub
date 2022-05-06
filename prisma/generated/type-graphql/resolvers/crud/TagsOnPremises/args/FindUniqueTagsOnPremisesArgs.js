"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTagsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesWhereUniqueInput_1 = require("../../../inputs/TagsOnPremisesWhereUniqueInput");
let FindUniqueTagsOnPremisesArgs = class FindUniqueTagsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput)
], FindUniqueTagsOnPremisesArgs.prototype, "where", void 0);
FindUniqueTagsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTagsOnPremisesArgs);
exports.FindUniqueTagsOnPremisesArgs = FindUniqueTagsOnPremisesArgs;
