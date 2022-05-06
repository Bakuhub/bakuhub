"use strict";
var NestedEnumPremiseStatusWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPremiseStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPremiseStatusFilter_1 = require("../inputs/NestedEnumPremiseStatusFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PremiseStatus_1 = require("../../enums/PremiseStatus");
let NestedEnumPremiseStatusWithAggregatesFilter = NestedEnumPremiseStatusWithAggregatesFilter_1 = class NestedEnumPremiseStatusWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseStatus_1.PremiseStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPremiseStatusWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseStatus_1.PremiseStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPremiseStatusWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseStatus_1.PremiseStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPremiseStatusWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPremiseStatusWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPremiseStatusWithAggregatesFilter)
], NestedEnumPremiseStatusWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumPremiseStatusWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPremiseStatusFilter_1.NestedEnumPremiseStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPremiseStatusFilter_1.NestedEnumPremiseStatusFilter)
], NestedEnumPremiseStatusWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPremiseStatusFilter_1.NestedEnumPremiseStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPremiseStatusFilter_1.NestedEnumPremiseStatusFilter)
], NestedEnumPremiseStatusWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumPremiseStatusWithAggregatesFilter = NestedEnumPremiseStatusWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPremiseStatusWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumPremiseStatusWithAggregatesFilter);
exports.NestedEnumPremiseStatusWithAggregatesFilter = NestedEnumPremiseStatusWithAggregatesFilter;
