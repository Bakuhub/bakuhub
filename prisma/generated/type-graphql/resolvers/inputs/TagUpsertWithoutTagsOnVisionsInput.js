"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpsertWithoutTagsOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateWithoutTagsOnVisionsInput_1 = require("../inputs/TagCreateWithoutTagsOnVisionsInput");
const TagUpdateWithoutTagsOnVisionsInput_1 = require("../inputs/TagUpdateWithoutTagsOnVisionsInput");
let TagUpsertWithoutTagsOnVisionsInput = class TagUpsertWithoutTagsOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateWithoutTagsOnVisionsInput_1.TagUpdateWithoutTagsOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagUpdateWithoutTagsOnVisionsInput_1.TagUpdateWithoutTagsOnVisionsInput)
], TagUpsertWithoutTagsOnVisionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateWithoutTagsOnVisionsInput_1.TagCreateWithoutTagsOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateWithoutTagsOnVisionsInput_1.TagCreateWithoutTagsOnVisionsInput)
], TagUpsertWithoutTagsOnVisionsInput.prototype, "create", void 0);
TagUpsertWithoutTagsOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpsertWithoutTagsOnVisionsInput", {
        isAbstract: true
    })
], TagUpsertWithoutTagsOnVisionsInput);
exports.TagUpsertWithoutTagsOnVisionsInput = TagUpsertWithoutTagsOnVisionsInput;
