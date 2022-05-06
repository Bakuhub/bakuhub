"use strict";
var NestedEnumSubscriptionTypeWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumSubscriptionTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumSubscriptionTypeFilter_1 = require("../inputs/NestedEnumSubscriptionTypeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let NestedEnumSubscriptionTypeWithAggregatesFilter = NestedEnumSubscriptionTypeWithAggregatesFilter_1 = class NestedEnumSubscriptionTypeWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumSubscriptionTypeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionType_1.SubscriptionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSubscriptionTypeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionType_1.SubscriptionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSubscriptionTypeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSubscriptionTypeWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSubscriptionTypeWithAggregatesFilter)
], NestedEnumSubscriptionTypeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumSubscriptionTypeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSubscriptionTypeFilter_1.NestedEnumSubscriptionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSubscriptionTypeFilter_1.NestedEnumSubscriptionTypeFilter)
], NestedEnumSubscriptionTypeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSubscriptionTypeFilter_1.NestedEnumSubscriptionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSubscriptionTypeFilter_1.NestedEnumSubscriptionTypeFilter)
], NestedEnumSubscriptionTypeWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumSubscriptionTypeWithAggregatesFilter = NestedEnumSubscriptionTypeWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumSubscriptionTypeWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumSubscriptionTypeWithAggregatesFilter);
exports.NestedEnumSubscriptionTypeWithAggregatesFilter = NestedEnumSubscriptionTypeWithAggregatesFilter;
