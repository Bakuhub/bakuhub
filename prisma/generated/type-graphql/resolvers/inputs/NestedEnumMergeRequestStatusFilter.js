"use strict";
var NestedEnumMergeRequestStatusFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumMergeRequestStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestStatus_1 = require("../../enums/MergeRequestStatus");
let NestedEnumMergeRequestStatusFilter = NestedEnumMergeRequestStatusFilter_1 = class NestedEnumMergeRequestStatusFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestStatus_1.MergeRequestStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumMergeRequestStatusFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestStatus_1.MergeRequestStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumMergeRequestStatusFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestStatus_1.MergeRequestStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumMergeRequestStatusFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMergeRequestStatusFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMergeRequestStatusFilter)
], NestedEnumMergeRequestStatusFilter.prototype, "not", void 0);
NestedEnumMergeRequestStatusFilter = NestedEnumMergeRequestStatusFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumMergeRequestStatusFilter", {
        isAbstract: true
    })
], NestedEnumMergeRequestStatusFilter);
exports.NestedEnumMergeRequestStatusFilter = NestedEnumMergeRequestStatusFilter;
