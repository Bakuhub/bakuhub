"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCountOrderByAggregateInput_1 = require("../inputs/SubscriptionsOnTimelinesCountOrderByAggregateInput");
const SubscriptionsOnTimelinesMaxOrderByAggregateInput_1 = require("../inputs/SubscriptionsOnTimelinesMaxOrderByAggregateInput");
const SubscriptionsOnTimelinesMinOrderByAggregateInput_1 = require("../inputs/SubscriptionsOnTimelinesMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SubscriptionsOnTimelinesOrderByWithAggregationInput = class SubscriptionsOnTimelinesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCountOrderByAggregateInput_1.SubscriptionsOnTimelinesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCountOrderByAggregateInput_1.SubscriptionsOnTimelinesCountOrderByAggregateInput)
], SubscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesMaxOrderByAggregateInput_1.SubscriptionsOnTimelinesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesMaxOrderByAggregateInput_1.SubscriptionsOnTimelinesMaxOrderByAggregateInput)
], SubscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesMinOrderByAggregateInput_1.SubscriptionsOnTimelinesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesMinOrderByAggregateInput_1.SubscriptionsOnTimelinesMinOrderByAggregateInput)
], SubscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "_min", void 0);
SubscriptionsOnTimelinesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesOrderByWithAggregationInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesOrderByWithAggregationInput);
exports.SubscriptionsOnTimelinesOrderByWithAggregationInput = SubscriptionsOnTimelinesOrderByWithAggregationInput;
