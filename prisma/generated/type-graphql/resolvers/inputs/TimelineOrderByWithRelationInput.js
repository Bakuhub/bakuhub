"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesOrderByRelationAggregateInput_1 = require("../inputs/PremisesOnTimelinesOrderByRelationAggregateInput");
const ReactionOnTimelinesOrderByRelationAggregateInput_1 = require("../inputs/ReactionOnTimelinesOrderByRelationAggregateInput");
const TagsOnTimelinesOrderByRelationAggregateInput_1 = require("../inputs/TagsOnTimelinesOrderByRelationAggregateInput");
const ThreadsOnTimelineOrderByRelationAggregateInput_1 = require("../inputs/ThreadsOnTimelineOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const VotesOnTimelineOrderByRelationAggregateInput_1 = require("../inputs/VotesOnTimelineOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TimelineOrderByWithRelationInput = class TimelineOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], TimelineOrderByWithRelationInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineOrderByWithRelationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesOrderByRelationAggregateInput_1.PremisesOnTimelinesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesOrderByRelationAggregateInput_1.PremisesOnTimelinesOrderByRelationAggregateInput)
], TimelineOrderByWithRelationInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesOrderByRelationAggregateInput_1.TagsOnTimelinesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesOrderByRelationAggregateInput_1.TagsOnTimelinesOrderByRelationAggregateInput)
], TimelineOrderByWithRelationInput.prototype, "tagsOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineOrderByRelationAggregateInput_1.ThreadsOnTimelineOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineOrderByRelationAggregateInput_1.ThreadsOnTimelineOrderByRelationAggregateInput)
], TimelineOrderByWithRelationInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesOrderByRelationAggregateInput_1.ReactionOnTimelinesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesOrderByRelationAggregateInput_1.ReactionOnTimelinesOrderByRelationAggregateInput)
], TimelineOrderByWithRelationInput.prototype, "ReactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineOrderByRelationAggregateInput_1.VotesOnTimelineOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineOrderByRelationAggregateInput_1.VotesOnTimelineOrderByRelationAggregateInput)
], TimelineOrderByWithRelationInput.prototype, "votesOnTimeline", void 0);
TimelineOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineOrderByWithRelationInput", {
        isAbstract: true
    })
], TimelineOrderByWithRelationInput);
exports.TimelineOrderByWithRelationInput = TimelineOrderByWithRelationInput;
