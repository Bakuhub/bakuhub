"use strict";
var MergeRequestWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumMergeRequestStatusFilter_1 = require("../inputs/EnumMergeRequestStatusFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const ThreadsOnMergeRequestListRelationFilter_1 = require("../inputs/ThreadsOnMergeRequestListRelationFilter");
const VisionRelationFilter_1 = require("../inputs/VisionRelationFilter");
let MergeRequestWhereInput = MergeRequestWhereInput_1 = class MergeRequestWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MergeRequestWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MergeRequestWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MergeRequestWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MergeRequestWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MergeRequestWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MergeRequestWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMergeRequestStatusFilter_1.EnumMergeRequestStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMergeRequestStatusFilter_1.EnumMergeRequestStatusFilter)
], MergeRequestWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionRelationFilter_1.VisionRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionRelationFilter_1.VisionRelationFilter)
], MergeRequestWhereInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MergeRequestWhereInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestListRelationFilter_1.ThreadsOnMergeRequestListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestListRelationFilter_1.ThreadsOnMergeRequestListRelationFilter)
], MergeRequestWhereInput.prototype, "threadsOnMergeRequest", void 0);
MergeRequestWhereInput = MergeRequestWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestWhereInput", {
        isAbstract: true
    })
], MergeRequestWhereInput);
exports.MergeRequestWhereInput = MergeRequestWhereInput;
