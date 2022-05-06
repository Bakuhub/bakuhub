"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTagsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesUpdateManyMutationInput_1 = require("../../../inputs/TagsOnTimelinesUpdateManyMutationInput");
const TagsOnTimelinesWhereInput_1 = require("../../../inputs/TagsOnTimelinesWhereInput");
let UpdateManyTagsOnTimelinesArgs = class UpdateManyTagsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyMutationInput_1.TagsOnTimelinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateManyMutationInput_1.TagsOnTimelinesUpdateManyMutationInput)
], UpdateManyTagsOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput)
], UpdateManyTagsOnTimelinesArgs.prototype, "where", void 0);
UpdateManyTagsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTagsOnTimelinesArgs);
exports.UpdateManyTagsOnTimelinesArgs = UpdateManyTagsOnTimelinesArgs;
