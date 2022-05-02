"use strict";
var SubscriptionsOnTimelinesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumSubscriptionTypeFilter_1 = require("../inputs/EnumSubscriptionTypeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TimelineRelationFilter_1 = require("../inputs/TimelineRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let SubscriptionsOnTimelinesWhereInput = SubscriptionsOnTimelinesWhereInput_1 = class SubscriptionsOnTimelinesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], SubscriptionsOnTimelinesWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SubscriptionsOnTimelinesWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineRelationFilter_1.TimelineRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineRelationFilter_1.TimelineRelationFilter)
], SubscriptionsOnTimelinesWhereInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SubscriptionsOnTimelinesWhereInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SubscriptionsOnTimelinesWhereInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFilter_1.EnumSubscriptionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFilter_1.EnumSubscriptionTypeFilter)
], SubscriptionsOnTimelinesWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SubscriptionsOnTimelinesWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SubscriptionsOnTimelinesWhereInput.prototype, "updatedAt", void 0);
SubscriptionsOnTimelinesWhereInput = SubscriptionsOnTimelinesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesWhereInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesWhereInput);
exports.SubscriptionsOnTimelinesWhereInput = SubscriptionsOnTimelinesWhereInput;
