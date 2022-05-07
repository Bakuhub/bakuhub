"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagsOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsCreateInput_1 = require("../../../inputs/TagsOnVisionsCreateInput");
let CreateTagsOnVisionsArgs = class CreateTagsOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCreateInput_1.TagsOnVisionsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCreateInput_1.TagsOnVisionsCreateInput)
], CreateTagsOnVisionsArgs.prototype, "data", void 0);
CreateTagsOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateTagsOnVisionsArgs);
exports.CreateTagsOnVisionsArgs = CreateTagsOnVisionsArgs;
