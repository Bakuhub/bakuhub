"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsCreateWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateNestedOneWithoutTagsOnVisionsInput_1 = require("../inputs/VisionCreateNestedOneWithoutTagsOnVisionsInput");
let TagsOnVisionsCreateWithoutTagInput = class TagsOnVisionsCreateWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutTagsOnVisionsInput_1.VisionCreateNestedOneWithoutTagsOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutTagsOnVisionsInput_1.VisionCreateNestedOneWithoutTagsOnVisionsInput)
], TagsOnVisionsCreateWithoutTagInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnVisionsCreateWithoutTagInput.prototype, "assignedAt", void 0);
TagsOnVisionsCreateWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsCreateWithoutTagInput", {
        isAbstract: true
    })
], TagsOnVisionsCreateWithoutTagInput);
exports.TagsOnVisionsCreateWithoutTagInput = TagsOnVisionsCreateWithoutTagInput;
