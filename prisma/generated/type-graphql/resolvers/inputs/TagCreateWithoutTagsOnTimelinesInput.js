"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateWithoutTagsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateNestedManyWithoutTagInput_1 = require("../inputs/TagsOnPremisesCreateNestedManyWithoutTagInput");
let TagCreateWithoutTagsOnTimelinesInput = class TagCreateWithoutTagsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagCreateWithoutTagsOnTimelinesInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateNestedManyWithoutTagInput_1.TagsOnPremisesCreateNestedManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateNestedManyWithoutTagInput_1.TagsOnPremisesCreateNestedManyWithoutTagInput)
], TagCreateWithoutTagsOnTimelinesInput.prototype, "tagsOnPremises", void 0);
TagCreateWithoutTagsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateWithoutTagsOnTimelinesInput", {
        isAbstract: true
    })
], TagCreateWithoutTagsOnTimelinesInput);
exports.TagCreateWithoutTagsOnTimelinesInput = TagCreateWithoutTagsOnTimelinesInput;
