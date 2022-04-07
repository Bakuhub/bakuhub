"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMergeRequestStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumMergeRequestStatusFilter_1 = require("../inputs/NestedEnumMergeRequestStatusFilter");
const NestedEnumMergeRequestStatusWithAggregatesFilter_1 = require("../inputs/NestedEnumMergeRequestStatusWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const MergeRequestStatus_1 = require("../../enums/MergeRequestStatus");
let EnumMergeRequestStatusWithAggregatesFilter = class EnumMergeRequestStatusWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestStatus_1.MergeRequestStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumMergeRequestStatusWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestStatus_1.MergeRequestStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumMergeRequestStatusWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestStatus_1.MergeRequestStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumMergeRequestStatusWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMergeRequestStatusWithAggregatesFilter_1.NestedEnumMergeRequestStatusWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMergeRequestStatusWithAggregatesFilter_1.NestedEnumMergeRequestStatusWithAggregatesFilter)
], EnumMergeRequestStatusWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumMergeRequestStatusWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMergeRequestStatusFilter_1.NestedEnumMergeRequestStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMergeRequestStatusFilter_1.NestedEnumMergeRequestStatusFilter)
], EnumMergeRequestStatusWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMergeRequestStatusFilter_1.NestedEnumMergeRequestStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMergeRequestStatusFilter_1.NestedEnumMergeRequestStatusFilter)
], EnumMergeRequestStatusWithAggregatesFilter.prototype, "_max", void 0);
EnumMergeRequestStatusWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumMergeRequestStatusWithAggregatesFilter", {
        isAbstract: true
    })
], EnumMergeRequestStatusWithAggregatesFilter);
exports.EnumMergeRequestStatusWithAggregatesFilter = EnumMergeRequestStatusWithAggregatesFilter;
