"use strict";
var ThreadsOnMergeRequestWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const MergeRequestRelationFilter_1 = require("../inputs/MergeRequestRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const ThreadRelationFilter_1 = require("../inputs/ThreadRelationFilter");
let ThreadsOnMergeRequestWhereInput = ThreadsOnMergeRequestWhereInput_1 = class ThreadsOnMergeRequestWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadRelationFilter_1.ThreadRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadRelationFilter_1.ThreadRelationFilter)
], ThreadsOnMergeRequestWhereInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnMergeRequestWhereInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestRelationFilter_1.MergeRequestRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestRelationFilter_1.MergeRequestRelationFilter)
], ThreadsOnMergeRequestWhereInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnMergeRequestWhereInput.prototype, "mergeRequestId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ThreadsOnMergeRequestWhereInput.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestWhereInput = ThreadsOnMergeRequestWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestWhereInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestWhereInput);
exports.ThreadsOnMergeRequestWhereInput = ThreadsOnMergeRequestWhereInput;
