"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnMergeRequestMaxOrderByAggregateInput = class ThreadsOnMergeRequestMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestMaxOrderByAggregateInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestMaxOrderByAggregateInput.prototype, "mergeRequestId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestMaxOrderByAggregateInput.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestMaxOrderByAggregateInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestMaxOrderByAggregateInput);
exports.ThreadsOnMergeRequestMaxOrderByAggregateInput = ThreadsOnMergeRequestMaxOrderByAggregateInput;
