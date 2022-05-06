"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTagsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/TagsOnTimelinesWhereUniqueInput");
let FindUniqueTagsOnTimelinesArgs = class FindUniqueTagsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput)
], FindUniqueTagsOnTimelinesArgs.prototype, "where", void 0);
FindUniqueTagsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTagsOnTimelinesArgs);
exports.FindUniqueTagsOnTimelinesArgs = FindUniqueTagsOnTimelinesArgs;
