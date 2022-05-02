"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineOrderByWithRelationInput_1 = require("../inputs/TimelineOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SubscriptionsOnTimelinesOrderByWithRelationInput = class SubscriptionsOnTimelinesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], SubscriptionsOnTimelinesOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineOrderByWithRelationInput_1.TimelineOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineOrderByWithRelationInput_1.TimelineOrderByWithRelationInput)
], SubscriptionsOnTimelinesOrderByWithRelationInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesOrderByWithRelationInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesOrderByWithRelationInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesOrderByWithRelationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesOrderByWithRelationInput.prototype, "updatedAt", void 0);
SubscriptionsOnTimelinesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesOrderByWithRelationInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesOrderByWithRelationInput);
exports.SubscriptionsOnTimelinesOrderByWithRelationInput = SubscriptionsOnTimelinesOrderByWithRelationInput;
