"use strict";
var SubscriptionsOnPremisesScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumSubscriptionTypeFilter_1 = require("../inputs/EnumSubscriptionTypeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let SubscriptionsOnPremisesScalarWhereInput = SubscriptionsOnPremisesScalarWhereInput_1 = class SubscriptionsOnPremisesScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SubscriptionsOnPremisesScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SubscriptionsOnPremisesScalarWhereInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SubscriptionsOnPremisesScalarWhereInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFilter_1.EnumSubscriptionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFilter_1.EnumSubscriptionTypeFilter)
], SubscriptionsOnPremisesScalarWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SubscriptionsOnPremisesScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SubscriptionsOnPremisesScalarWhereInput.prototype, "updatedAt", void 0);
SubscriptionsOnPremisesScalarWhereInput = SubscriptionsOnPremisesScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesScalarWhereInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesScalarWhereInput);
exports.SubscriptionsOnPremisesScalarWhereInput = SubscriptionsOnPremisesScalarWhereInput;
