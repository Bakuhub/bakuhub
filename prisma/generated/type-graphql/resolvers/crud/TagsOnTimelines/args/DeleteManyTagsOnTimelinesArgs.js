"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTagsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesWhereInput_1 = require("../../../inputs/TagsOnTimelinesWhereInput");
let DeleteManyTagsOnTimelinesArgs = class DeleteManyTagsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput)
], DeleteManyTagsOnTimelinesArgs.prototype, "where", void 0);
DeleteManyTagsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTagsOnTimelinesArgs);
exports.DeleteManyTagsOnTimelinesArgs = DeleteManyTagsOnTimelinesArgs;
