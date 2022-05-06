"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesOrderByRelationAggregateInput_1 = require("../inputs/PremisesOnTimelinesOrderByRelationAggregateInput");
const SubscriptionsOnPremisesOrderByRelationAggregateInput_1 = require("../inputs/SubscriptionsOnPremisesOrderByRelationAggregateInput");
const TagsOnPremisesOrderByRelationAggregateInput_1 = require("../inputs/TagsOnPremisesOrderByRelationAggregateInput");
const ThreadsOnPremiseOrderByRelationAggregateInput_1 = require("../inputs/ThreadsOnPremiseOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const VisionOrderByRelationAggregateInput_1 = require("../inputs/VisionOrderByRelationAggregateInput");
const VotesOnPremiseOrderByRelationAggregateInput_1 = require("../inputs/VotesOnPremiseOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PremiseOrderByWithRelationInput = class PremiseOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], PremiseOrderByWithRelationInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseOrderByWithRelationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionOrderByRelationAggregateInput_1.VisionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionOrderByRelationAggregateInput_1.VisionOrderByRelationAggregateInput)
], PremiseOrderByWithRelationInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesOrderByRelationAggregateInput_1.PremisesOnTimelinesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesOrderByRelationAggregateInput_1.PremisesOnTimelinesOrderByRelationAggregateInput)
], PremiseOrderByWithRelationInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesOrderByRelationAggregateInput_1.TagsOnPremisesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesOrderByRelationAggregateInput_1.TagsOnPremisesOrderByRelationAggregateInput)
], PremiseOrderByWithRelationInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseOrderByRelationAggregateInput_1.ThreadsOnPremiseOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseOrderByRelationAggregateInput_1.ThreadsOnPremiseOrderByRelationAggregateInput)
], PremiseOrderByWithRelationInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseOrderByRelationAggregateInput_1.VotesOnPremiseOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseOrderByRelationAggregateInput_1.VotesOnPremiseOrderByRelationAggregateInput)
], PremiseOrderByWithRelationInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesOrderByRelationAggregateInput_1.SubscriptionsOnPremisesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesOrderByRelationAggregateInput_1.SubscriptionsOnPremisesOrderByRelationAggregateInput)
], PremiseOrderByWithRelationInput.prototype, "subscriptionsOnPremises", void 0);
PremiseOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseOrderByWithRelationInput", {
        isAbstract: true
    })
], PremiseOrderByWithRelationInput);
exports.PremiseOrderByWithRelationInput = PremiseOrderByWithRelationInput;
