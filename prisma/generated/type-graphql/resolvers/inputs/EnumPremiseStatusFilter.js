"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPremiseStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPremiseStatusFilter_1 = require("../inputs/NestedEnumPremiseStatusFilter");
const PremiseStatus_1 = require("../../enums/PremiseStatus");
let EnumPremiseStatusFilter = class EnumPremiseStatusFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseStatus_1.PremiseStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPremiseStatusFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseStatus_1.PremiseStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPremiseStatusFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseStatus_1.PremiseStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPremiseStatusFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPremiseStatusFilter_1.NestedEnumPremiseStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPremiseStatusFilter_1.NestedEnumPremiseStatusFilter)
], EnumPremiseStatusFilter.prototype, "not", void 0);
EnumPremiseStatusFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPremiseStatusFilter", {
        isAbstract: true
    })
], EnumPremiseStatusFilter);
exports.EnumPremiseStatusFilter = EnumPremiseStatusFilter;
