"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesUpdateWithoutTagInput_1 = require("../inputs/TagsOnPremisesUpdateWithoutTagInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../inputs/TagsOnPremisesWhereUniqueInput");
let TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput = class TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput)
], TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesUpdateWithoutTagInput_1.TagsOnPremisesUpdateWithoutTagInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesUpdateWithoutTagInput_1.TagsOnPremisesUpdateWithoutTagInput)
], TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput.prototype, "data", void 0);
TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput", {
        isAbstract: true
    })
], TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput);
exports.TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput = TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput;
