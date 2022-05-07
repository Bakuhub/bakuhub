"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateOneRequiredWithoutTagsOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateOrConnectWithoutTagsOnVisionsInput_1 = require("../inputs/TagCreateOrConnectWithoutTagsOnVisionsInput");
const TagCreateWithoutTagsOnVisionsInput_1 = require("../inputs/TagCreateWithoutTagsOnVisionsInput");
const TagUpdateWithoutTagsOnVisionsInput_1 = require("../inputs/TagUpdateWithoutTagsOnVisionsInput");
const TagUpsertWithoutTagsOnVisionsInput_1 = require("../inputs/TagUpsertWithoutTagsOnVisionsInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagUpdateOneRequiredWithoutTagsOnVisionsInput = class TagUpdateOneRequiredWithoutTagsOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateWithoutTagsOnVisionsInput_1.TagCreateWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateWithoutTagsOnVisionsInput_1.TagCreateWithoutTagsOnVisionsInput)
], TagUpdateOneRequiredWithoutTagsOnVisionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateOrConnectWithoutTagsOnVisionsInput_1.TagCreateOrConnectWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateOrConnectWithoutTagsOnVisionsInput_1.TagCreateOrConnectWithoutTagsOnVisionsInput)
], TagUpdateOneRequiredWithoutTagsOnVisionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpsertWithoutTagsOnVisionsInput_1.TagUpsertWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagUpsertWithoutTagsOnVisionsInput_1.TagUpsertWithoutTagsOnVisionsInput)
], TagUpdateOneRequiredWithoutTagsOnVisionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagUpdateOneRequiredWithoutTagsOnVisionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateWithoutTagsOnVisionsInput_1.TagUpdateWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagUpdateWithoutTagsOnVisionsInput_1.TagUpdateWithoutTagsOnVisionsInput)
], TagUpdateOneRequiredWithoutTagsOnVisionsInput.prototype, "update", void 0);
TagUpdateOneRequiredWithoutTagsOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpdateOneRequiredWithoutTagsOnVisionsInput", {
        isAbstract: true
    })
], TagUpdateOneRequiredWithoutTagsOnVisionsInput);
exports.TagUpdateOneRequiredWithoutTagsOnVisionsInput = TagUpdateOneRequiredWithoutTagsOnVisionsInput;
