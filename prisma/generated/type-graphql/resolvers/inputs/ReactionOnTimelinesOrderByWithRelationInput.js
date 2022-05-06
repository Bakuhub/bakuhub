"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineOrderByWithRelationInput_1 = require("../inputs/TimelineOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOnTimelinesOrderByWithRelationInput = class ReactionOnTimelinesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], ReactionOnTimelinesOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineOrderByWithRelationInput_1.TimelineOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineOrderByWithRelationInput_1.TimelineOrderByWithRelationInput)
], ReactionOnTimelinesOrderByWithRelationInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesOrderByWithRelationInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesOrderByWithRelationInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesOrderByWithRelationInput.prototype, "createdAt", void 0);
ReactionOnTimelinesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesOrderByWithRelationInput", {
        isAbstract: true
    })
], ReactionOnTimelinesOrderByWithRelationInput);
exports.ReactionOnTimelinesOrderByWithRelationInput = ReactionOnTimelinesOrderByWithRelationInput;
