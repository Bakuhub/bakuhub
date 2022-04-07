"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateOrConnectWithoutTagsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateWithoutTagsOnTimelinesInput_1 = require("../inputs/TagCreateWithoutTagsOnTimelinesInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagCreateOrConnectWithoutTagsOnTimelinesInput = class TagCreateOrConnectWithoutTagsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagCreateOrConnectWithoutTagsOnTimelinesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateWithoutTagsOnTimelinesInput_1.TagCreateWithoutTagsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateWithoutTagsOnTimelinesInput_1.TagCreateWithoutTagsOnTimelinesInput)
], TagCreateOrConnectWithoutTagsOnTimelinesInput.prototype, "create", void 0);
TagCreateOrConnectWithoutTagsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateOrConnectWithoutTagsOnTimelinesInput", {
        isAbstract: true
    })
], TagCreateOrConnectWithoutTagsOnTimelinesInput);
exports.TagCreateOrConnectWithoutTagsOnTimelinesInput = TagCreateOrConnectWithoutTagsOnTimelinesInput;
