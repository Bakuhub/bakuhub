"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesCreateWithoutTagInput_1 = require("../inputs/TagsOnTimelinesCreateWithoutTagInput");
const TagsOnTimelinesUpdateWithoutTagInput_1 = require("../inputs/TagsOnTimelinesUpdateWithoutTagInput");
const TagsOnTimelinesWhereUniqueInput_1 = require("../inputs/TagsOnTimelinesWhereUniqueInput");
let TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput = class TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput)
], TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateWithoutTagInput_1.TagsOnTimelinesUpdateWithoutTagInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateWithoutTagInput_1.TagsOnTimelinesUpdateWithoutTagInput)
], TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateWithoutTagInput_1.TagsOnTimelinesCreateWithoutTagInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateWithoutTagInput_1.TagsOnTimelinesCreateWithoutTagInput)
], TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput.prototype, "create", void 0);
TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput", {
        isAbstract: true
    })
], TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput);
exports.TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput = TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput;
