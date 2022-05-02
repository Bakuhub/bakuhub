"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCountOrderByAggregateInput_1 = require("../inputs/SubscriptionsOnPremisesCountOrderByAggregateInput");
const SubscriptionsOnPremisesMaxOrderByAggregateInput_1 = require("../inputs/SubscriptionsOnPremisesMaxOrderByAggregateInput");
const SubscriptionsOnPremisesMinOrderByAggregateInput_1 = require("../inputs/SubscriptionsOnPremisesMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SubscriptionsOnPremisesOrderByWithAggregationInput = class SubscriptionsOnPremisesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesOrderByWithAggregationInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesOrderByWithAggregationInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCountOrderByAggregateInput_1.SubscriptionsOnPremisesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCountOrderByAggregateInput_1.SubscriptionsOnPremisesCountOrderByAggregateInput)
], SubscriptionsOnPremisesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesMaxOrderByAggregateInput_1.SubscriptionsOnPremisesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesMaxOrderByAggregateInput_1.SubscriptionsOnPremisesMaxOrderByAggregateInput)
], SubscriptionsOnPremisesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesMinOrderByAggregateInput_1.SubscriptionsOnPremisesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesMinOrderByAggregateInput_1.SubscriptionsOnPremisesMinOrderByAggregateInput)
], SubscriptionsOnPremisesOrderByWithAggregationInput.prototype, "_min", void 0);
SubscriptionsOnPremisesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesOrderByWithAggregationInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesOrderByWithAggregationInput);
exports.SubscriptionsOnPremisesOrderByWithAggregationInput = SubscriptionsOnPremisesOrderByWithAggregationInput;
