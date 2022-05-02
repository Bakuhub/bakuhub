"use strict";
var SubscriptionsOnPremisesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumSubscriptionTypeFilter_1 = require("../inputs/EnumSubscriptionTypeFilter");
const PremiseRelationFilter_1 = require("../inputs/PremiseRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let SubscriptionsOnPremisesWhereInput = SubscriptionsOnPremisesWhereInput_1 = class SubscriptionsOnPremisesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], SubscriptionsOnPremisesWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SubscriptionsOnPremisesWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseRelationFilter_1.PremiseRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseRelationFilter_1.PremiseRelationFilter)
], SubscriptionsOnPremisesWhereInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SubscriptionsOnPremisesWhereInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SubscriptionsOnPremisesWhereInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFilter_1.EnumSubscriptionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFilter_1.EnumSubscriptionTypeFilter)
], SubscriptionsOnPremisesWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SubscriptionsOnPremisesWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SubscriptionsOnPremisesWhereInput.prototype, "updatedAt", void 0);
SubscriptionsOnPremisesWhereInput = SubscriptionsOnPremisesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesWhereInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesWhereInput);
exports.SubscriptionsOnPremisesWhereInput = SubscriptionsOnPremisesWhereInput;
