"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnPremisesCreateManyInput = class TagsOnPremisesCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagsOnPremisesCreateManyInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesCreateManyInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnPremisesCreateManyInput.prototype, "assignedAt", void 0);
TagsOnPremisesCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesCreateManyInput", {
        isAbstract: true
    })
], TagsOnPremisesCreateManyInput);
exports.TagsOnPremisesCreateManyInput = TagsOnPremisesCreateManyInput;
