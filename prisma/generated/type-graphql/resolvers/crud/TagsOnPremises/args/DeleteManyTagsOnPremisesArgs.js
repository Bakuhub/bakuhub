"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTagsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesWhereInput_1 = require("../../../inputs/TagsOnPremisesWhereInput");
let DeleteManyTagsOnPremisesArgs = class DeleteManyTagsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput)
], DeleteManyTagsOnPremisesArgs.prototype, "where", void 0);
DeleteManyTagsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTagsOnPremisesArgs);
exports.DeleteManyTagsOnPremisesArgs = DeleteManyTagsOnPremisesArgs;
