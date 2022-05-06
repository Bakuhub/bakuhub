"use strict";
var SubscriptionsOnTimelinesScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumSubscriptionTypeFilter_1 = require("../inputs/EnumSubscriptionTypeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let SubscriptionsOnTimelinesScalarWhereInput = SubscriptionsOnTimelinesScalarWhereInput_1 = class SubscriptionsOnTimelinesScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SubscriptionsOnTimelinesScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SubscriptionsOnTimelinesScalarWhereInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], SubscriptionsOnTimelinesScalarWhereInput.prototype, "hasUnreadNotifications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SubscriptionsOnTimelinesScalarWhereInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFilter_1.EnumSubscriptionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFilter_1.EnumSubscriptionTypeFilter)
], SubscriptionsOnTimelinesScalarWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SubscriptionsOnTimelinesScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SubscriptionsOnTimelinesScalarWhereInput.prototype, "updatedAt", void 0);
SubscriptionsOnTimelinesScalarWhereInput = SubscriptionsOnTimelinesScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesScalarWhereInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesScalarWhereInput);
exports.SubscriptionsOnTimelinesScalarWhereInput = SubscriptionsOnTimelinesScalarWhereInput;
