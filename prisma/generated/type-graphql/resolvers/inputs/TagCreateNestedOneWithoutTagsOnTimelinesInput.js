"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateNestedOneWithoutTagsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateOrConnectWithoutTagsOnTimelinesInput_1 = require("../inputs/TagCreateOrConnectWithoutTagsOnTimelinesInput");
const TagCreateWithoutTagsOnTimelinesInput_1 = require("../inputs/TagCreateWithoutTagsOnTimelinesInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagCreateNestedOneWithoutTagsOnTimelinesInput = class TagCreateNestedOneWithoutTagsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateWithoutTagsOnTimelinesInput_1.TagCreateWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateWithoutTagsOnTimelinesInput_1.TagCreateWithoutTagsOnTimelinesInput)
], TagCreateNestedOneWithoutTagsOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateOrConnectWithoutTagsOnTimelinesInput_1.TagCreateOrConnectWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateOrConnectWithoutTagsOnTimelinesInput_1.TagCreateOrConnectWithoutTagsOnTimelinesInput)
], TagCreateNestedOneWithoutTagsOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagCreateNestedOneWithoutTagsOnTimelinesInput.prototype, "connect", void 0);
TagCreateNestedOneWithoutTagsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateNestedOneWithoutTagsOnTimelinesInput", {
        isAbstract: true
    })
], TagCreateNestedOneWithoutTagsOnTimelinesInput);
exports.TagCreateNestedOneWithoutTagsOnTimelinesInput = TagCreateNestedOneWithoutTagsOnTimelinesInput;
