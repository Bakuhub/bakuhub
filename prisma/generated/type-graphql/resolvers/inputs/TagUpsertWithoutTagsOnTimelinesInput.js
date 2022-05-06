"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpsertWithoutTagsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateWithoutTagsOnTimelinesInput_1 = require("../inputs/TagCreateWithoutTagsOnTimelinesInput");
const TagUpdateWithoutTagsOnTimelinesInput_1 = require("../inputs/TagUpdateWithoutTagsOnTimelinesInput");
let TagUpsertWithoutTagsOnTimelinesInput = class TagUpsertWithoutTagsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateWithoutTagsOnTimelinesInput_1.TagUpdateWithoutTagsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagUpdateWithoutTagsOnTimelinesInput_1.TagUpdateWithoutTagsOnTimelinesInput)
], TagUpsertWithoutTagsOnTimelinesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateWithoutTagsOnTimelinesInput_1.TagCreateWithoutTagsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateWithoutTagsOnTimelinesInput_1.TagCreateWithoutTagsOnTimelinesInput)
], TagUpsertWithoutTagsOnTimelinesInput.prototype, "create", void 0);
TagUpsertWithoutTagsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpsertWithoutTagsOnTimelinesInput", {
        isAbstract: true
    })
], TagUpsertWithoutTagsOnTimelinesInput);
exports.TagUpsertWithoutTagsOnTimelinesInput = TagUpsertWithoutTagsOnTimelinesInput;
