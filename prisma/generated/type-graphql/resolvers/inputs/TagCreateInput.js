"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateNestedManyWithoutTagInput_1 = require("../inputs/TagsOnPremisesCreateNestedManyWithoutTagInput");
const TagsOnTimelinesCreateNestedManyWithoutTagInput_1 = require("../inputs/TagsOnTimelinesCreateNestedManyWithoutTagInput");
let TagCreateInput = class TagCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagCreateInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateNestedManyWithoutTagInput_1.TagsOnPremisesCreateNestedManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateNestedManyWithoutTagInput_1.TagsOnPremisesCreateNestedManyWithoutTagInput)
], TagCreateInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateNestedManyWithoutTagInput_1.TagsOnTimelinesCreateNestedManyWithoutTagInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateNestedManyWithoutTagInput_1.TagsOnTimelinesCreateNestedManyWithoutTagInput)
], TagCreateInput.prototype, "tagsOnTimelines", void 0);
TagCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateInput", {
        isAbstract: true
    })
], TagCreateInput);
exports.TagCreateInput = TagCreateInput;
