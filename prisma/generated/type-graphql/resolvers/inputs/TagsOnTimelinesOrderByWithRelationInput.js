"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagOrderByWithRelationInput_1 = require("../inputs/TagOrderByWithRelationInput");
const TimelineOrderByWithRelationInput_1 = require("../inputs/TimelineOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnTimelinesOrderByWithRelationInput = class TagsOnTimelinesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagOrderByWithRelationInput_1.TagOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagOrderByWithRelationInput_1.TagOrderByWithRelationInput)
], TagsOnTimelinesOrderByWithRelationInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesOrderByWithRelationInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineOrderByWithRelationInput_1.TimelineOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineOrderByWithRelationInput_1.TimelineOrderByWithRelationInput)
], TagsOnTimelinesOrderByWithRelationInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesOrderByWithRelationInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesOrderByWithRelationInput.prototype, "assignedAt", void 0);
TagsOnTimelinesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesOrderByWithRelationInput", {
        isAbstract: true
    })
], TagsOnTimelinesOrderByWithRelationInput);
exports.TagsOnTimelinesOrderByWithRelationInput = TagsOnTimelinesOrderByWithRelationInput;
