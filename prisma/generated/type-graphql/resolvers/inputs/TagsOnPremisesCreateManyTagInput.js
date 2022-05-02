"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCreateManyTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsOnPremisesCreateManyTagInput = class TagsOnPremisesCreateManyTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesCreateManyTagInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TagsOnPremisesCreateManyTagInput.prototype, "assignedAt", void 0);
TagsOnPremisesCreateManyTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesCreateManyTagInput", {
        isAbstract: true
    })
], TagsOnPremisesCreateManyTagInput);
exports.TagsOnPremisesCreateManyTagInput = TagsOnPremisesCreateManyTagInput;