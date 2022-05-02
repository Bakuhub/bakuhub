"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseOrderByWithRelationInput_1 = require("../inputs/PremiseOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SubscriptionsOnPremisesOrderByWithRelationInput = class SubscriptionsOnPremisesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], SubscriptionsOnPremisesOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseOrderByWithRelationInput_1.PremiseOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseOrderByWithRelationInput_1.PremiseOrderByWithRelationInput)
], SubscriptionsOnPremisesOrderByWithRelationInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesOrderByWithRelationInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesOrderByWithRelationInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesOrderByWithRelationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesOrderByWithRelationInput.prototype, "updatedAt", void 0);
SubscriptionsOnPremisesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesOrderByWithRelationInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesOrderByWithRelationInput);
exports.SubscriptionsOnPremisesOrderByWithRelationInput = SubscriptionsOnPremisesOrderByWithRelationInput;
