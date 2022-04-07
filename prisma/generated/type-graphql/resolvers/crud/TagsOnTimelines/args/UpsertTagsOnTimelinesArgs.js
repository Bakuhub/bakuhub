"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTagsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesCreateInput_1 = require("../../../inputs/TagsOnTimelinesCreateInput");
const TagsOnTimelinesUpdateInput_1 = require("../../../inputs/TagsOnTimelinesUpdateInput");
const TagsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/TagsOnTimelinesWhereUniqueInput");
let UpsertTagsOnTimelinesArgs = class UpsertTagsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput)
], UpsertTagsOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateInput_1.TagsOnTimelinesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateInput_1.TagsOnTimelinesCreateInput)
], UpsertTagsOnTimelinesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateInput_1.TagsOnTimelinesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateInput_1.TagsOnTimelinesUpdateInput)
], UpsertTagsOnTimelinesArgs.prototype, "update", void 0);
UpsertTagsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertTagsOnTimelinesArgs);
exports.UpsertTagsOnTimelinesArgs = UpsertTagsOnTimelinesArgs;
