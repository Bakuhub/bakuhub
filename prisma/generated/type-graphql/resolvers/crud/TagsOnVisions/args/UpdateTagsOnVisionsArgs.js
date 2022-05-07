"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTagsOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsUpdateInput_1 = require("../../../inputs/TagsOnVisionsUpdateInput");
const TagsOnVisionsWhereUniqueInput_1 = require("../../../inputs/TagsOnVisionsWhereUniqueInput");
let UpdateTagsOnVisionsArgs = class UpdateTagsOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsUpdateInput_1.TagsOnVisionsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsUpdateInput_1.TagsOnVisionsUpdateInput)
], UpdateTagsOnVisionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput)
], UpdateTagsOnVisionsArgs.prototype, "where", void 0);
UpdateTagsOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateTagsOnVisionsArgs);
exports.UpdateTagsOnVisionsArgs = UpdateTagsOnVisionsArgs;
