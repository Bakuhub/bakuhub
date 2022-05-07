"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTagsOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsWhereUniqueInput_1 = require("../../../inputs/TagsOnVisionsWhereUniqueInput");
let DeleteTagsOnVisionsArgs = class DeleteTagsOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput)
], DeleteTagsOnVisionsArgs.prototype, "where", void 0);
DeleteTagsOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteTagsOnVisionsArgs);
exports.DeleteTagsOnVisionsArgs = DeleteTagsOnVisionsArgs;
