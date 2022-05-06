"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumSubscriptionTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumSubscriptionTypeFilter_1 = require("../inputs/NestedEnumSubscriptionTypeFilter");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let EnumSubscriptionTypeFilter = class EnumSubscriptionTypeFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumSubscriptionTypeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionType_1.SubscriptionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSubscriptionTypeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionType_1.SubscriptionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSubscriptionTypeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSubscriptionTypeFilter_1.NestedEnumSubscriptionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSubscriptionTypeFilter_1.NestedEnumSubscriptionTypeFilter)
], EnumSubscriptionTypeFilter.prototype, "not", void 0);
EnumSubscriptionTypeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumSubscriptionTypeFilter", {
        isAbstract: true
    })
], EnumSubscriptionTypeFilter);
exports.EnumSubscriptionTypeFilter = EnumSubscriptionTypeFilter;
