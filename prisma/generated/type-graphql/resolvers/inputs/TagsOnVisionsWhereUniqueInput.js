"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsTagIdVisionIdCompoundUniqueInput_1 = require("../inputs/TagsOnVisionsTagIdVisionIdCompoundUniqueInput");
let TagsOnVisionsWhereUniqueInput = class TagsOnVisionsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsTagIdVisionIdCompoundUniqueInput_1.TagsOnVisionsTagIdVisionIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsTagIdVisionIdCompoundUniqueInput_1.TagsOnVisionsTagIdVisionIdCompoundUniqueInput)
], TagsOnVisionsWhereUniqueInput.prototype, "tagId_visionId", void 0);
TagsOnVisionsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsWhereUniqueInput", {
        isAbstract: true
    })
], TagsOnVisionsWhereUniqueInput);
exports.TagsOnVisionsWhereUniqueInput = TagsOnVisionsWhereUniqueInput;
