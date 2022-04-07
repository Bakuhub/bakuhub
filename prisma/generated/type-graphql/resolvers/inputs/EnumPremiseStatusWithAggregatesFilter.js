"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPremiseStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPremiseStatusFilter_1 = require("../inputs/NestedEnumPremiseStatusFilter");
const NestedEnumPremiseStatusWithAggregatesFilter_1 = require("../inputs/NestedEnumPremiseStatusWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PremiseStatus_1 = require("../../enums/PremiseStatus");
let EnumPremiseStatusWithAggregatesFilter = class EnumPremiseStatusWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseStatus_1.PremiseStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPremiseStatusWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseStatus_1.PremiseStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPremiseStatusWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseStatus_1.PremiseStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPremiseStatusWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPremiseStatusWithAggregatesFilter_1.NestedEnumPremiseStatusWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPremiseStatusWithAggregatesFilter_1.NestedEnumPremiseStatusWithAggregatesFilter)
], EnumPremiseStatusWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumPremiseStatusWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPremiseStatusFilter_1.NestedEnumPremiseStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPremiseStatusFilter_1.NestedEnumPremiseStatusFilter)
], EnumPremiseStatusWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPremiseStatusFilter_1.NestedEnumPremiseStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPremiseStatusFilter_1.NestedEnumPremiseStatusFilter)
], EnumPremiseStatusWithAggregatesFilter.prototype, "_max", void 0);
EnumPremiseStatusWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPremiseStatusWithAggregatesFilter", {
        isAbstract: true
    })
], EnumPremiseStatusWithAggregatesFilter);
exports.EnumPremiseStatusWithAggregatesFilter = EnumPremiseStatusWithAggregatesFilter;
