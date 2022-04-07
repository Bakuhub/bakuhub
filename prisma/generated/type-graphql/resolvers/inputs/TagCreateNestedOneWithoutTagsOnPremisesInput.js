"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateNestedOneWithoutTagsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateOrConnectWithoutTagsOnPremisesInput_1 = require("../inputs/TagCreateOrConnectWithoutTagsOnPremisesInput");
const TagCreateWithoutTagsOnPremisesInput_1 = require("../inputs/TagCreateWithoutTagsOnPremisesInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagCreateNestedOneWithoutTagsOnPremisesInput = class TagCreateNestedOneWithoutTagsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateWithoutTagsOnPremisesInput_1.TagCreateWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateWithoutTagsOnPremisesInput_1.TagCreateWithoutTagsOnPremisesInput)
], TagCreateNestedOneWithoutTagsOnPremisesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateOrConnectWithoutTagsOnPremisesInput_1.TagCreateOrConnectWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateOrConnectWithoutTagsOnPremisesInput_1.TagCreateOrConnectWithoutTagsOnPremisesInput)
], TagCreateNestedOneWithoutTagsOnPremisesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagCreateNestedOneWithoutTagsOnPremisesInput.prototype, "connect", void 0);
TagCreateNestedOneWithoutTagsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateNestedOneWithoutTagsOnPremisesInput", {
        isAbstract: true
    })
], TagCreateNestedOneWithoutTagsOnPremisesInput);
exports.TagCreateNestedOneWithoutTagsOnPremisesInput = TagCreateNestedOneWithoutTagsOnPremisesInput;
