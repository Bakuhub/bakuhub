"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SubscriptionsOnTimelinesMaxOrderByAggregateInput = class SubscriptionsOnTimelinesMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesMaxOrderByAggregateInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesMaxOrderByAggregateInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesMaxOrderByAggregateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
SubscriptionsOnTimelinesMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesMaxOrderByAggregateInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesMaxOrderByAggregateInput);
exports.SubscriptionsOnTimelinesMaxOrderByAggregateInput = SubscriptionsOnTimelinesMaxOrderByAggregateInput;
