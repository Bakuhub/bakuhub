"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCountOrderByAggregateInput_1 = require("../inputs/ThreadsOnMergeRequestCountOrderByAggregateInput");
const ThreadsOnMergeRequestMaxOrderByAggregateInput_1 = require("../inputs/ThreadsOnMergeRequestMaxOrderByAggregateInput");
const ThreadsOnMergeRequestMinOrderByAggregateInput_1 = require("../inputs/ThreadsOnMergeRequestMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnMergeRequestOrderByWithAggregationInput = class ThreadsOnMergeRequestOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestOrderByWithAggregationInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestOrderByWithAggregationInput.prototype, "mergeRequestId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestOrderByWithAggregationInput.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCountOrderByAggregateInput_1.ThreadsOnMergeRequestCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCountOrderByAggregateInput_1.ThreadsOnMergeRequestCountOrderByAggregateInput)
], ThreadsOnMergeRequestOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestMaxOrderByAggregateInput_1.ThreadsOnMergeRequestMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestMaxOrderByAggregateInput_1.ThreadsOnMergeRequestMaxOrderByAggregateInput)
], ThreadsOnMergeRequestOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestMinOrderByAggregateInput_1.ThreadsOnMergeRequestMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestMinOrderByAggregateInput_1.ThreadsOnMergeRequestMinOrderByAggregateInput)
], ThreadsOnMergeRequestOrderByWithAggregationInput.prototype, "_min", void 0);
ThreadsOnMergeRequestOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestOrderByWithAggregationInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestOrderByWithAggregationInput);
exports.ThreadsOnMergeRequestOrderByWithAggregationInput = ThreadsOnMergeRequestOrderByWithAggregationInput;
