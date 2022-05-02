"use strict";
var ThreadOrderByWithRelationInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsOrderByRelationAggregateInput_1 = require("../inputs/ReactionOnThreadsOrderByRelationAggregateInput");
const ThreadOrderByRelationAggregateInput_1 = require("../inputs/ThreadOrderByRelationAggregateInput");
const ThreadsOnMergeRequestOrderByWithRelationInput_1 = require("../inputs/ThreadsOnMergeRequestOrderByWithRelationInput");
const ThreadsOnPremiseOrderByWithRelationInput_1 = require("../inputs/ThreadsOnPremiseOrderByWithRelationInput");
const ThreadsOnTimelineOrderByWithRelationInput_1 = require("../inputs/ThreadsOnTimelineOrderByWithRelationInput");
const ThreadsOnVisionOrderByWithRelationInput_1 = require("../inputs/ThreadsOnVisionOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const VotesOnThreadOrderByRelationAggregateInput_1 = require("../inputs/VotesOnThreadOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadOrderByWithRelationInput = ThreadOrderByWithRelationInput_1 = class ThreadOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithRelationInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithRelationInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], ThreadOrderByWithRelationInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithRelationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithRelationInput.prototype, "parentThreadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadOrderByWithRelationInput_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadOrderByWithRelationInput)
], ThreadOrderByWithRelationInput.prototype, "parentThread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadOrderByRelationAggregateInput_1.ThreadOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadOrderByRelationAggregateInput_1.ThreadOrderByRelationAggregateInput)
], ThreadOrderByWithRelationInput.prototype, "childThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseOrderByWithRelationInput_1.ThreadsOnPremiseOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseOrderByWithRelationInput_1.ThreadsOnPremiseOrderByWithRelationInput)
], ThreadOrderByWithRelationInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineOrderByWithRelationInput_1.ThreadsOnTimelineOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineOrderByWithRelationInput_1.ThreadsOnTimelineOrderByWithRelationInput)
], ThreadOrderByWithRelationInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionOrderByWithRelationInput_1.ThreadsOnVisionOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionOrderByWithRelationInput_1.ThreadsOnVisionOrderByWithRelationInput)
], ThreadOrderByWithRelationInput.prototype, "threadsOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestOrderByWithRelationInput_1.ThreadsOnMergeRequestOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestOrderByWithRelationInput_1.ThreadsOnMergeRequestOrderByWithRelationInput)
], ThreadOrderByWithRelationInput.prototype, "threadsOnMergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsOrderByRelationAggregateInput_1.ReactionOnThreadsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsOrderByRelationAggregateInput_1.ReactionOnThreadsOrderByRelationAggregateInput)
], ThreadOrderByWithRelationInput.prototype, "reactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadOrderByRelationAggregateInput_1.VotesOnThreadOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadOrderByRelationAggregateInput_1.VotesOnThreadOrderByRelationAggregateInput)
], ThreadOrderByWithRelationInput.prototype, "votesOnThread", void 0);
ThreadOrderByWithRelationInput = ThreadOrderByWithRelationInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadOrderByWithRelationInput", {
        isAbstract: true
    })
], ThreadOrderByWithRelationInput);
exports.ThreadOrderByWithRelationInput = ThreadOrderByWithRelationInput;
