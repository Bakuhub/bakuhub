"use strict";
var NestedEnumSubscriptionTypeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumSubscriptionTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let NestedEnumSubscriptionTypeFilter = NestedEnumSubscriptionTypeFilter_1 = class NestedEnumSubscriptionTypeFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumSubscriptionTypeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionType_1.SubscriptionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSubscriptionTypeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionType_1.SubscriptionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSubscriptionTypeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSubscriptionTypeFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSubscriptionTypeFilter)
], NestedEnumSubscriptionTypeFilter.prototype, "not", void 0);
NestedEnumSubscriptionTypeFilter = NestedEnumSubscriptionTypeFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumSubscriptionTypeFilter", {
        isAbstract: true
    })
], NestedEnumSubscriptionTypeFilter);
exports.NestedEnumSubscriptionTypeFilter = NestedEnumSubscriptionTypeFilter;
