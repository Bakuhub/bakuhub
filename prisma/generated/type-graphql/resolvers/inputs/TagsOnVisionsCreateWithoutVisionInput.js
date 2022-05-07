"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsCreateWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateNestedOneWithoutTagsOnVisionsInput_1 = require("../inputs/TagCreateNestedOneWithoutTagsOnVisionsInput");
let TagsOnVisionsCreateWithoutVisionInput = class TagsOnVisionsCreateWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateNestedOneWithoutTagsOnVisionsInput_1.TagCreateNestedOneWithoutTagsOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateNestedOneWithoutTagsOnVisionsInput_1.TagCreateNestedOneWithoutTagsOnVisionsInput)
], TagsOnVisionsCreateWithoutVisionInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnVisionsCreateWithoutVisionInput.prototype, "assignedAt", void 0);
TagsOnVisionsCreateWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsCreateWithoutVisionInput", {
        isAbstract: true
    })
], TagsOnVisionsCreateWithoutVisionInput);
exports.TagsOnVisionsCreateWithoutVisionInput = TagsOnVisionsCreateWithoutVisionInput;
