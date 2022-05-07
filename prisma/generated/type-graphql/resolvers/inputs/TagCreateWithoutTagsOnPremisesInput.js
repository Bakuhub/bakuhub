"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateWithoutTagsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesCreateNestedManyWithoutTagInput_1 = require("../inputs/TagsOnTimelinesCreateNestedManyWithoutTagInput");
const TagsOnVisionsCreateNestedManyWithoutTagInput_1 = require("../inputs/TagsOnVisionsCreateNestedManyWithoutTagInput");
let TagCreateWithoutTagsOnPremisesInput = class TagCreateWithoutTagsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagCreateWithoutTagsOnPremisesInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCreateNestedManyWithoutTagInput_1.TagsOnVisionsCreateNestedManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCreateNestedManyWithoutTagInput_1.TagsOnVisionsCreateNestedManyWithoutTagInput)
], TagCreateWithoutTagsOnPremisesInput.prototype, "tagsOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateNestedManyWithoutTagInput_1.TagsOnTimelinesCreateNestedManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateNestedManyWithoutTagInput_1.TagsOnTimelinesCreateNestedManyWithoutTagInput)
], TagCreateWithoutTagsOnPremisesInput.prototype, "tagsOnTimelines", void 0);
TagCreateWithoutTagsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateWithoutTagsOnPremisesInput", {
        isAbstract: true
    })
], TagCreateWithoutTagsOnPremisesInput);
exports.TagCreateWithoutTagsOnPremisesInput = TagCreateWithoutTagsOnPremisesInput;
