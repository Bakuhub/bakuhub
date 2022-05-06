"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCreateWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateNestedOneWithoutTagsOnPremisesInput_1 = require("../inputs/TagCreateNestedOneWithoutTagsOnPremisesInput");
let TagsOnPremisesCreateWithoutPremiseInput = class TagsOnPremisesCreateWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateNestedOneWithoutTagsOnPremisesInput_1.TagCreateNestedOneWithoutTagsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateNestedOneWithoutTagsOnPremisesInput_1.TagCreateNestedOneWithoutTagsOnPremisesInput)
], TagsOnPremisesCreateWithoutPremiseInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnPremisesCreateWithoutPremiseInput.prototype, "assignedAt", void 0);
TagsOnPremisesCreateWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesCreateWithoutPremiseInput", {
        isAbstract: true
    })
], TagsOnPremisesCreateWithoutPremiseInput);
exports.TagsOnPremisesCreateWithoutPremiseInput = TagsOnPremisesCreateWithoutPremiseInput;
