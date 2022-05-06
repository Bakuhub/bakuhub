"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateWithoutTagInput_1 = require("../inputs/TagsOnPremisesCreateWithoutTagInput");
const TagsOnPremisesUpdateWithoutTagInput_1 = require("../inputs/TagsOnPremisesUpdateWithoutTagInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../inputs/TagsOnPremisesWhereUniqueInput");
let TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput = class TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput)
], TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesUpdateWithoutTagInput_1.TagsOnPremisesUpdateWithoutTagInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesUpdateWithoutTagInput_1.TagsOnPremisesUpdateWithoutTagInput)
], TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateWithoutTagInput_1.TagsOnPremisesCreateWithoutTagInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateWithoutTagInput_1.TagsOnPremisesCreateWithoutTagInput)
], TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput.prototype, "create", void 0);
TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput", {
        isAbstract: true
    })
], TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput);
exports.TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput = TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput;
