"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesTagIdPremiseIdCompoundUniqueInput_1 = require("../inputs/TagsOnPremisesTagIdPremiseIdCompoundUniqueInput");
let TagsOnPremisesWhereUniqueInput = class TagsOnPremisesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesTagIdPremiseIdCompoundUniqueInput_1.TagsOnPremisesTagIdPremiseIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesTagIdPremiseIdCompoundUniqueInput_1.TagsOnPremisesTagIdPremiseIdCompoundUniqueInput)
], TagsOnPremisesWhereUniqueInput.prototype, "tagId_premiseId", void 0);
TagsOnPremisesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesWhereUniqueInput", {
        isAbstract: true
    })
], TagsOnPremisesWhereUniqueInput);
exports.TagsOnPremisesWhereUniqueInput = TagsOnPremisesWhereUniqueInput;
