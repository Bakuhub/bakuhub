"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTagsOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsWhereInput_1 = require("../../../inputs/TagsOnVisionsWhereInput");
let DeleteManyTagsOnVisionsArgs = class DeleteManyTagsOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput)
], DeleteManyTagsOnVisionsArgs.prototype, "where", void 0);
DeleteManyTagsOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTagsOnVisionsArgs);
exports.DeleteManyTagsOnVisionsArgs = DeleteManyTagsOnVisionsArgs;
