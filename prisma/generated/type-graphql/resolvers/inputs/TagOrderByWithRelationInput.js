"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesOrderByRelationAggregateInput_1 = require("../inputs/TagsOnPremisesOrderByRelationAggregateInput");
const TagsOnTimelinesOrderByRelationAggregateInput_1 = require("../inputs/TagsOnTimelinesOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TagOrderByWithRelationInput = class TagOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagOrderByWithRelationInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesOrderByRelationAggregateInput_1.TagsOnPremisesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesOrderByRelationAggregateInput_1.TagsOnPremisesOrderByRelationAggregateInput)
], TagOrderByWithRelationInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesOrderByRelationAggregateInput_1.TagsOnTimelinesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesOrderByRelationAggregateInput_1.TagsOnTimelinesOrderByRelationAggregateInput)
], TagOrderByWithRelationInput.prototype, "tagsOnTimelines", void 0);
TagOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagOrderByWithRelationInput", {
        isAbstract: true
    })
], TagOrderByWithRelationInput);
exports.TagOrderByWithRelationInput = TagOrderByWithRelationInput;
