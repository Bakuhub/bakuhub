"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTagsOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsCreateInput_1 = require("../../../inputs/TagsOnVisionsCreateInput");
const TagsOnVisionsUpdateInput_1 = require("../../../inputs/TagsOnVisionsUpdateInput");
const TagsOnVisionsWhereUniqueInput_1 = require("../../../inputs/TagsOnVisionsWhereUniqueInput");
let UpsertTagsOnVisionsArgs = class UpsertTagsOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput)
], UpsertTagsOnVisionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCreateInput_1.TagsOnVisionsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCreateInput_1.TagsOnVisionsCreateInput)
], UpsertTagsOnVisionsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsUpdateInput_1.TagsOnVisionsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsUpdateInput_1.TagsOnVisionsUpdateInput)
], UpsertTagsOnVisionsArgs.prototype, "update", void 0);
UpsertTagsOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertTagsOnVisionsArgs);
exports.UpsertTagsOnVisionsArgs = UpsertTagsOnVisionsArgs;
