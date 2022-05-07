"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateOrConnectWithoutTagsOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateWithoutTagsOnVisionsInput_1 = require("../inputs/TagCreateWithoutTagsOnVisionsInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagCreateOrConnectWithoutTagsOnVisionsInput = class TagCreateOrConnectWithoutTagsOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagCreateOrConnectWithoutTagsOnVisionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateWithoutTagsOnVisionsInput_1.TagCreateWithoutTagsOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateWithoutTagsOnVisionsInput_1.TagCreateWithoutTagsOnVisionsInput)
], TagCreateOrConnectWithoutTagsOnVisionsInput.prototype, "create", void 0);
TagCreateOrConnectWithoutTagsOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateOrConnectWithoutTagsOnVisionsInput", {
        isAbstract: true
    })
], TagCreateOrConnectWithoutTagsOnVisionsInput);
exports.TagCreateOrConnectWithoutTagsOnVisionsInput = TagCreateOrConnectWithoutTagsOnVisionsInput;
