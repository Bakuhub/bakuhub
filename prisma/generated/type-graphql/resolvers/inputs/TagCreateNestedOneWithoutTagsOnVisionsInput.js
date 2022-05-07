"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateNestedOneWithoutTagsOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateOrConnectWithoutTagsOnVisionsInput_1 = require("../inputs/TagCreateOrConnectWithoutTagsOnVisionsInput");
const TagCreateWithoutTagsOnVisionsInput_1 = require("../inputs/TagCreateWithoutTagsOnVisionsInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagCreateNestedOneWithoutTagsOnVisionsInput = class TagCreateNestedOneWithoutTagsOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateWithoutTagsOnVisionsInput_1.TagCreateWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateWithoutTagsOnVisionsInput_1.TagCreateWithoutTagsOnVisionsInput)
], TagCreateNestedOneWithoutTagsOnVisionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateOrConnectWithoutTagsOnVisionsInput_1.TagCreateOrConnectWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateOrConnectWithoutTagsOnVisionsInput_1.TagCreateOrConnectWithoutTagsOnVisionsInput)
], TagCreateNestedOneWithoutTagsOnVisionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagCreateNestedOneWithoutTagsOnVisionsInput.prototype, "connect", void 0);
TagCreateNestedOneWithoutTagsOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateNestedOneWithoutTagsOnVisionsInput", {
        isAbstract: true
    })
], TagCreateNestedOneWithoutTagsOnVisionsInput);
exports.TagCreateNestedOneWithoutTagsOnVisionsInput = TagCreateNestedOneWithoutTagsOnVisionsInput;
