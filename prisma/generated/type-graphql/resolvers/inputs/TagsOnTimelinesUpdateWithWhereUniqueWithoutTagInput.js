"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesUpdateWithoutTagInput_1 = require("../inputs/TagsOnTimelinesUpdateWithoutTagInput");
const TagsOnTimelinesWhereUniqueInput_1 = require("../inputs/TagsOnTimelinesWhereUniqueInput");
let TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput = class TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput)
], TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateWithoutTagInput_1.TagsOnTimelinesUpdateWithoutTagInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateWithoutTagInput_1.TagsOnTimelinesUpdateWithoutTagInput)
], TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput.prototype, "data", void 0);
TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput", {
        isAbstract: true
    })
], TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput);
exports.TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput = TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput;
