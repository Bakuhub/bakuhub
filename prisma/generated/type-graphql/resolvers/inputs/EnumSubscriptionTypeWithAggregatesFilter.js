"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumSubscriptionTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumSubscriptionTypeFilter_1 = require("../inputs/NestedEnumSubscriptionTypeFilter");
const NestedEnumSubscriptionTypeWithAggregatesFilter_1 = require("../inputs/NestedEnumSubscriptionTypeWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let EnumSubscriptionTypeWithAggregatesFilter = class EnumSubscriptionTypeWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumSubscriptionTypeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionType_1.SubscriptionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSubscriptionTypeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionType_1.SubscriptionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSubscriptionTypeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSubscriptionTypeWithAggregatesFilter_1.NestedEnumSubscriptionTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSubscriptionTypeWithAggregatesFilter_1.NestedEnumSubscriptionTypeWithAggregatesFilter)
], EnumSubscriptionTypeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumSubscriptionTypeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSubscriptionTypeFilter_1.NestedEnumSubscriptionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSubscriptionTypeFilter_1.NestedEnumSubscriptionTypeFilter)
], EnumSubscriptionTypeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSubscriptionTypeFilter_1.NestedEnumSubscriptionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSubscriptionTypeFilter_1.NestedEnumSubscriptionTypeFilter)
], EnumSubscriptionTypeWithAggregatesFilter.prototype, "_max", void 0);
EnumSubscriptionTypeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumSubscriptionTypeWithAggregatesFilter", {
        isAbstract: true
    })
], EnumSubscriptionTypeWithAggregatesFilter);
exports.EnumSubscriptionTypeWithAggregatesFilter = EnumSubscriptionTypeWithAggregatesFilter;
