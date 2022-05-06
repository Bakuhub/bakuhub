"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCreateWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateNestedOneWithoutTagsOnPremisesInput_1 = require("../inputs/PremiseCreateNestedOneWithoutTagsOnPremisesInput");
let TagsOnPremisesCreateWithoutTagInput = class TagsOnPremisesCreateWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutTagsOnPremisesInput_1.PremiseCreateNestedOneWithoutTagsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedOneWithoutTagsOnPremisesInput_1.PremiseCreateNestedOneWithoutTagsOnPremisesInput)
], TagsOnPremisesCreateWithoutTagInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnPremisesCreateWithoutTagInput.prototype, "assignedAt", void 0);
TagsOnPremisesCreateWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesCreateWithoutTagInput", {
        isAbstract: true
    })
], TagsOnPremisesCreateWithoutTagInput);
exports.TagsOnPremisesCreateWithoutTagInput = TagsOnPremisesCreateWithoutTagInput;
