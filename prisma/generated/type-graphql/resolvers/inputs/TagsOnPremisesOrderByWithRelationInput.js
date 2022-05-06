"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseOrderByWithRelationInput_1 = require("../inputs/PremiseOrderByWithRelationInput");
const TagOrderByWithRelationInput_1 = require("../inputs/TagOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnPremisesOrderByWithRelationInput = class TagsOnPremisesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagOrderByWithRelationInput_1.TagOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagOrderByWithRelationInput_1.TagOrderByWithRelationInput)
], TagsOnPremisesOrderByWithRelationInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesOrderByWithRelationInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseOrderByWithRelationInput_1.PremiseOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseOrderByWithRelationInput_1.PremiseOrderByWithRelationInput)
], TagsOnPremisesOrderByWithRelationInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesOrderByWithRelationInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesOrderByWithRelationInput.prototype, "assignedAt", void 0);
TagsOnPremisesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesOrderByWithRelationInput", {
        isAbstract: true
    })
], TagsOnPremisesOrderByWithRelationInput);
exports.TagsOnPremisesOrderByWithRelationInput = TagsOnPremisesOrderByWithRelationInput;
