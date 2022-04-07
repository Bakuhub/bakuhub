"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnMergeRequestCountOrderByAggregateInput = class ThreadsOnMergeRequestCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestCountOrderByAggregateInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestCountOrderByAggregateInput.prototype, "mergeRequestId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestCountOrderByAggregateInput.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestCountOrderByAggregateInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestCountOrderByAggregateInput);
exports.ThreadsOnMergeRequestCountOrderByAggregateInput = ThreadsOnMergeRequestCountOrderByAggregateInput;
