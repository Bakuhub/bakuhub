"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesCreateOrConnectWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesCreateWithoutTagInput_1 = require("../inputs/TagsOnTimelinesCreateWithoutTagInput");
const TagsOnTimelinesWhereUniqueInput_1 = require("../inputs/TagsOnTimelinesWhereUniqueInput");
let TagsOnTimelinesCreateOrConnectWithoutTagInput = class TagsOnTimelinesCreateOrConnectWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput)
], TagsOnTimelinesCreateOrConnectWithoutTagInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateWithoutTagInput_1.TagsOnTimelinesCreateWithoutTagInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateWithoutTagInput_1.TagsOnTimelinesCreateWithoutTagInput)
], TagsOnTimelinesCreateOrConnectWithoutTagInput.prototype, "create", void 0);
TagsOnTimelinesCreateOrConnectWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesCreateOrConnectWithoutTagInput", {
        isAbstract: true
    })
], TagsOnTimelinesCreateOrConnectWithoutTagInput);
exports.TagsOnTimelinesCreateOrConnectWithoutTagInput = TagsOnTimelinesCreateOrConnectWithoutTagInput;
