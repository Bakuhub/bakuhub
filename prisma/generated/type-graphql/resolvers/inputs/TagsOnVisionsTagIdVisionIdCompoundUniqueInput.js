"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsTagIdVisionIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnVisionsTagIdVisionIdCompoundUniqueInput = class TagsOnVisionsTagIdVisionIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnVisionsTagIdVisionIdCompoundUniqueInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsTagIdVisionIdCompoundUniqueInput.prototype, "visionId", void 0);
TagsOnVisionsTagIdVisionIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsTagIdVisionIdCompoundUniqueInput", {
        isAbstract: true
    })
], TagsOnVisionsTagIdVisionIdCompoundUniqueInput);
exports.TagsOnVisionsTagIdVisionIdCompoundUniqueInput = TagsOnVisionsTagIdVisionIdCompoundUniqueInput;
