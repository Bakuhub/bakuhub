"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnMergeRequestMinOrderByAggregateInput = class ThreadsOnMergeRequestMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestMinOrderByAggregateInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestMinOrderByAggregateInput.prototype, "mergeRequestId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestMinOrderByAggregateInput.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestMinOrderByAggregateInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestMinOrderByAggregateInput);
exports.ThreadsOnMergeRequestMinOrderByAggregateInput = ThreadsOnMergeRequestMinOrderByAggregateInput;
