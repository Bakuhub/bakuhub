"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpsertWithoutTagsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateWithoutTagsOnPremisesInput_1 = require("../inputs/TagCreateWithoutTagsOnPremisesInput");
const TagUpdateWithoutTagsOnPremisesInput_1 = require("../inputs/TagUpdateWithoutTagsOnPremisesInput");
let TagUpsertWithoutTagsOnPremisesInput = class TagUpsertWithoutTagsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateWithoutTagsOnPremisesInput_1.TagUpdateWithoutTagsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagUpdateWithoutTagsOnPremisesInput_1.TagUpdateWithoutTagsOnPremisesInput)
], TagUpsertWithoutTagsOnPremisesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateWithoutTagsOnPremisesInput_1.TagCreateWithoutTagsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateWithoutTagsOnPremisesInput_1.TagCreateWithoutTagsOnPremisesInput)
], TagUpsertWithoutTagsOnPremisesInput.prototype, "create", void 0);
TagUpsertWithoutTagsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpsertWithoutTagsOnPremisesInput", {
        isAbstract: true
    })
], TagUpsertWithoutTagsOnPremisesInput);
exports.TagUpsertWithoutTagsOnPremisesInput = TagUpsertWithoutTagsOnPremisesInput;
