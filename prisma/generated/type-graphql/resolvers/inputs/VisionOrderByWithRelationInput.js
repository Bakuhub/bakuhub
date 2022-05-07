"use strict";
var VisionOrderByWithRelationInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestOrderByWithRelationInput_1 = require("../inputs/MergeRequestOrderByWithRelationInput");
const PremiseOrderByWithRelationInput_1 = require("../inputs/PremiseOrderByWithRelationInput");
const ReactionOnVisionsOrderByRelationAggregateInput_1 = require("../inputs/ReactionOnVisionsOrderByRelationAggregateInput");
const ReferenceOrderByWithRelationInput_1 = require("../inputs/ReferenceOrderByWithRelationInput");
const TagsOnVisionsOrderByRelationAggregateInput_1 = require("../inputs/TagsOnVisionsOrderByRelationAggregateInput");
const ThreadsOnVisionOrderByRelationAggregateInput_1 = require("../inputs/ThreadsOnVisionOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const VisionOrderByRelationAggregateInput_1 = require("../inputs/VisionOrderByRelationAggregateInput");
const VotesOnVisionOrderByRelationAggregateInput_1 = require("../inputs/VotesOnVisionOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VisionOrderByWithRelationInput = VisionOrderByWithRelationInput_1 = class VisionOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithRelationInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceOrderByWithRelationInput_1.ReferenceOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceOrderByWithRelationInput_1.ReferenceOrderByWithRelationInput)
], VisionOrderByWithRelationInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithRelationInput.prototype, "referenceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], VisionOrderByWithRelationInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithRelationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseOrderByWithRelationInput_1.PremiseOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseOrderByWithRelationInput_1.PremiseOrderByWithRelationInput)
], VisionOrderByWithRelationInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithRelationInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithRelationInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithRelationInput.prototype, "draftMode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithRelationInput.prototype, "prevVisionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionOrderByWithRelationInput_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionOrderByWithRelationInput)
], VisionOrderByWithRelationInput.prototype, "prevVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionOrderByRelationAggregateInput_1.VisionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionOrderByRelationAggregateInput_1.VisionOrderByRelationAggregateInput)
], VisionOrderByWithRelationInput.prototype, "nextVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionOrderByRelationAggregateInput_1.ThreadsOnVisionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionOrderByRelationAggregateInput_1.ThreadsOnVisionOrderByRelationAggregateInput)
], VisionOrderByWithRelationInput.prototype, "threadsOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestOrderByWithRelationInput_1.MergeRequestOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestOrderByWithRelationInput_1.MergeRequestOrderByWithRelationInput)
], VisionOrderByWithRelationInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsOrderByRelationAggregateInput_1.ReactionOnVisionsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsOrderByRelationAggregateInput_1.ReactionOnVisionsOrderByRelationAggregateInput)
], VisionOrderByWithRelationInput.prototype, "reactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionOrderByRelationAggregateInput_1.VotesOnVisionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionOrderByRelationAggregateInput_1.VotesOnVisionOrderByRelationAggregateInput)
], VisionOrderByWithRelationInput.prototype, "votesOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsOrderByRelationAggregateInput_1.TagsOnVisionsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsOrderByRelationAggregateInput_1.TagsOnVisionsOrderByRelationAggregateInput)
], VisionOrderByWithRelationInput.prototype, "tagsOnVisions", void 0);
VisionOrderByWithRelationInput = VisionOrderByWithRelationInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionOrderByWithRelationInput", {
        isAbstract: true
    })
], VisionOrderByWithRelationInput);
exports.VisionOrderByWithRelationInput = VisionOrderByWithRelationInput;
