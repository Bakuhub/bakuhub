"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesUpdateWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesUpdateWithoutPremiseInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../inputs/TagsOnPremisesWhereUniqueInput");
let TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput = class TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput)
], TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesUpdateWithoutPremiseInput_1.TagsOnPremisesUpdateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesUpdateWithoutPremiseInput_1.TagsOnPremisesUpdateWithoutPremiseInput)
], TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput.prototype, "data", void 0);
TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput", {
        isAbstract: true
    })
], TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput);
exports.TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput = TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput;
