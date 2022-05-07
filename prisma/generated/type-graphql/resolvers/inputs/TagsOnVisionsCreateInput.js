"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateNestedOneWithoutTagsOnVisionsInput_1 = require("../inputs/TagCreateNestedOneWithoutTagsOnVisionsInput");
const VisionCreateNestedOneWithoutTagsOnVisionsInput_1 = require("../inputs/VisionCreateNestedOneWithoutTagsOnVisionsInput");
let TagsOnVisionsCreateInput = class TagsOnVisionsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateNestedOneWithoutTagsOnVisionsInput_1.TagCreateNestedOneWithoutTagsOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateNestedOneWithoutTagsOnVisionsInput_1.TagCreateNestedOneWithoutTagsOnVisionsInput)
], TagsOnVisionsCreateInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutTagsOnVisionsInput_1.VisionCreateNestedOneWithoutTagsOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutTagsOnVisionsInput_1.VisionCreateNestedOneWithoutTagsOnVisionsInput)
], TagsOnVisionsCreateInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnVisionsCreateInput.prototype, "assignedAt", void 0);
TagsOnVisionsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsCreateInput", {
        isAbstract: true
    })
], TagsOnVisionsCreateInput);
exports.TagsOnVisionsCreateInput = TagsOnVisionsCreateInput;
