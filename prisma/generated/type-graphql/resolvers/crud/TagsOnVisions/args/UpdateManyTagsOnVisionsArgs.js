"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTagsOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsUpdateManyMutationInput_1 = require("../../../inputs/TagsOnVisionsUpdateManyMutationInput");
const TagsOnVisionsWhereInput_1 = require("../../../inputs/TagsOnVisionsWhereInput");
let UpdateManyTagsOnVisionsArgs = class UpdateManyTagsOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsUpdateManyMutationInput_1.TagsOnVisionsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsUpdateManyMutationInput_1.TagsOnVisionsUpdateManyMutationInput)
], UpdateManyTagsOnVisionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput)
], UpdateManyTagsOnVisionsArgs.prototype, "where", void 0);
UpdateManyTagsOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTagsOnVisionsArgs);
exports.UpdateManyTagsOnVisionsArgs = UpdateManyTagsOnVisionsArgs;
