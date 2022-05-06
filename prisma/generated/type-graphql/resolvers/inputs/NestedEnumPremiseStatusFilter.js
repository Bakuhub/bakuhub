"use strict";
var NestedEnumPremiseStatusFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPremiseStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseStatus_1 = require("../../enums/PremiseStatus");
let NestedEnumPremiseStatusFilter = NestedEnumPremiseStatusFilter_1 = class NestedEnumPremiseStatusFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseStatus_1.PremiseStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPremiseStatusFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseStatus_1.PremiseStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPremiseStatusFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseStatus_1.PremiseStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPremiseStatusFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPremiseStatusFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPremiseStatusFilter)
], NestedEnumPremiseStatusFilter.prototype, "not", void 0);
NestedEnumPremiseStatusFilter = NestedEnumPremiseStatusFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPremiseStatusFilter", {
        isAbstract: true
    })
], NestedEnumPremiseStatusFilter);
exports.NestedEnumPremiseStatusFilter = NestedEnumPremiseStatusFilter;
