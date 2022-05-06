"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesTagIdPremiseIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnPremisesTagIdPremiseIdCompoundUniqueInput = class TagsOnPremisesTagIdPremiseIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnPremisesTagIdPremiseIdCompoundUniqueInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesTagIdPremiseIdCompoundUniqueInput.prototype, "premiseId", void 0);
TagsOnPremisesTagIdPremiseIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesTagIdPremiseIdCompoundUniqueInput", {
        isAbstract: true
    })
], TagsOnPremisesTagIdPremiseIdCompoundUniqueInput);
exports.TagsOnPremisesTagIdPremiseIdCompoundUniqueInput = TagsOnPremisesTagIdPremiseIdCompoundUniqueInput;
