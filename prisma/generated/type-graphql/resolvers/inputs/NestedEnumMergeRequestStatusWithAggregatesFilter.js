"use strict";
var NestedEnumMergeRequestStatusWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumMergeRequestStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumMergeRequestStatusFilter_1 = require("../inputs/NestedEnumMergeRequestStatusFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const MergeRequestStatus_1 = require("../../enums/MergeRequestStatus");
let NestedEnumMergeRequestStatusWithAggregatesFilter = NestedEnumMergeRequestStatusWithAggregatesFilter_1 = class NestedEnumMergeRequestStatusWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestStatus_1.MergeRequestStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumMergeRequestStatusWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestStatus_1.MergeRequestStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumMergeRequestStatusWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestStatus_1.MergeRequestStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumMergeRequestStatusWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMergeRequestStatusWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMergeRequestStatusWithAggregatesFilter)
], NestedEnumMergeRequestStatusWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumMergeRequestStatusWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMergeRequestStatusFilter_1.NestedEnumMergeRequestStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMergeRequestStatusFilter_1.NestedEnumMergeRequestStatusFilter)
], NestedEnumMergeRequestStatusWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMergeRequestStatusFilter_1.NestedEnumMergeRequestStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMergeRequestStatusFilter_1.NestedEnumMergeRequestStatusFilter)
], NestedEnumMergeRequestStatusWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumMergeRequestStatusWithAggregatesFilter = NestedEnumMergeRequestStatusWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumMergeRequestStatusWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumMergeRequestStatusWithAggregatesFilter);
exports.NestedEnumMergeRequestStatusWithAggregatesFilter = NestedEnumMergeRequestStatusWithAggregatesFilter;
