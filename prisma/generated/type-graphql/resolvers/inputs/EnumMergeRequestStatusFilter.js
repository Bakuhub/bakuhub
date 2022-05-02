"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMergeRequestStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumMergeRequestStatusFilter_1 = require("../inputs/NestedEnumMergeRequestStatusFilter");
const MergeRequestStatus_1 = require("../../enums/MergeRequestStatus");
let EnumMergeRequestStatusFilter = class EnumMergeRequestStatusFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestStatus_1.MergeRequestStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumMergeRequestStatusFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestStatus_1.MergeRequestStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumMergeRequestStatusFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestStatus_1.MergeRequestStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumMergeRequestStatusFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMergeRequestStatusFilter_1.NestedEnumMergeRequestStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMergeRequestStatusFilter_1.NestedEnumMergeRequestStatusFilter)
], EnumMergeRequestStatusFilter.prototype, "not", void 0);
EnumMergeRequestStatusFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumMergeRequestStatusFilter", {
        isAbstract: true
    })
], EnumMergeRequestStatusFilter);
exports.EnumMergeRequestStatusFilter = EnumMergeRequestStatusFilter;