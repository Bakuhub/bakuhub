"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateWithoutTagsOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateNestedManyWithoutTagInput_1 = require("../inputs/TagsOnPremisesCreateNestedManyWithoutTagInput");
const TagsOnTimelinesCreateNestedManyWithoutTagInput_1 = require("../inputs/TagsOnTimelinesCreateNestedManyWithoutTagInput");
let TagCreateWithoutTagsOnVisionsInput = class TagCreateWithoutTagsOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagCreateWithoutTagsOnVisionsInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateNestedManyWithoutTagInput_1.TagsOnPremisesCreateNestedManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateNestedManyWithoutTagInput_1.TagsOnPremisesCreateNestedManyWithoutTagInput)
], TagCreateWithoutTagsOnVisionsInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateNestedManyWithoutTagInput_1.TagsOnTimelinesCreateNestedManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateNestedManyWithoutTagInput_1.TagsOnTimelinesCreateNestedManyWithoutTagInput)
], TagCreateWithoutTagsOnVisionsInput.prototype, "tagsOnTimelines", void 0);
TagCreateWithoutTagsOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateWithoutTagsOnVisionsInput", {
        isAbstract: true
    })
], TagCreateWithoutTagsOnVisionsInput);
exports.TagCreateWithoutTagsOnVisionsInput = TagCreateWithoutTagsOnVisionsInput;
