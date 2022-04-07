"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateNestedOneWithoutTagsOnPremisesInput_1 = require("../inputs/PremiseCreateNestedOneWithoutTagsOnPremisesInput");
const TagCreateNestedOneWithoutTagsOnPremisesInput_1 = require("../inputs/TagCreateNestedOneWithoutTagsOnPremisesInput");
let TagsOnPremisesCreateInput = class TagsOnPremisesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateNestedOneWithoutTagsOnPremisesInput_1.TagCreateNestedOneWithoutTagsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateNestedOneWithoutTagsOnPremisesInput_1.TagCreateNestedOneWithoutTagsOnPremisesInput)
], TagsOnPremisesCreateInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutTagsOnPremisesInput_1.PremiseCreateNestedOneWithoutTagsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedOneWithoutTagsOnPremisesInput_1.PremiseCreateNestedOneWithoutTagsOnPremisesInput)
], TagsOnPremisesCreateInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnPremisesCreateInput.prototype, "assignedAt", void 0);
TagsOnPremisesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesCreateInput", {
        isAbstract: true
    })
], TagsOnPremisesCreateInput);
exports.TagsOnPremisesCreateInput = TagsOnPremisesCreateInput;
