"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCreateManyPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnPremisesCreateManyPremiseInput = class TagsOnPremisesCreateManyPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnPremisesCreateManyPremiseInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnPremisesCreateManyPremiseInput.prototype, "assignedAt", void 0);
TagsOnPremisesCreateManyPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesCreateManyPremiseInput", {
        isAbstract: true
    })
], TagsOnPremisesCreateManyPremiseInput);
exports.TagsOnPremisesCreateManyPremiseInput = TagsOnPremisesCreateManyPremiseInput;
