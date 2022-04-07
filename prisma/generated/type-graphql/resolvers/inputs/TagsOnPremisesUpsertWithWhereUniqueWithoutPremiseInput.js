"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesCreateWithoutPremiseInput");
const TagsOnPremisesUpdateWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesUpdateWithoutPremiseInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../inputs/TagsOnPremisesWhereUniqueInput");
let TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput = class TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput)
], TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesUpdateWithoutPremiseInput_1.TagsOnPremisesUpdateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesUpdateWithoutPremiseInput_1.TagsOnPremisesUpdateWithoutPremiseInput)
], TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateWithoutPremiseInput_1.TagsOnPremisesCreateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateWithoutPremiseInput_1.TagsOnPremisesCreateWithoutPremiseInput)
], TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput.prototype, "create", void 0);
TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput", {
        isAbstract: true
    })
], TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput);
exports.TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput = TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput;
