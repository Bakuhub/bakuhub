"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesCreateInput_1 = require("../../../inputs/TagsOnTimelinesCreateInput");
let CreateTagsOnTimelinesArgs = class CreateTagsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateInput_1.TagsOnTimelinesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateInput_1.TagsOnTimelinesCreateInput)
], CreateTagsOnTimelinesArgs.prototype, "data", void 0);
CreateTagsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateTagsOnTimelinesArgs);
exports.CreateTagsOnTimelinesArgs = CreateTagsOnTimelinesArgs;
