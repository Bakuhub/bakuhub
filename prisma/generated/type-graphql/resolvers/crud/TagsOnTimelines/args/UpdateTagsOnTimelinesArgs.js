"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTagsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesUpdateInput_1 = require("../../../inputs/TagsOnTimelinesUpdateInput");
const TagsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/TagsOnTimelinesWhereUniqueInput");
let UpdateTagsOnTimelinesArgs = class UpdateTagsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateInput_1.TagsOnTimelinesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateInput_1.TagsOnTimelinesUpdateInput)
], UpdateTagsOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput)
], UpdateTagsOnTimelinesArgs.prototype, "where", void 0);
UpdateTagsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateTagsOnTimelinesArgs);
exports.UpdateTagsOnTimelinesArgs = UpdateTagsOnTimelinesArgs;
