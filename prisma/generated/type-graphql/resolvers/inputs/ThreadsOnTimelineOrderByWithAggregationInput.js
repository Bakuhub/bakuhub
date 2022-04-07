"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCountOrderByAggregateInput_1 = require("../inputs/ThreadsOnTimelineCountOrderByAggregateInput");
const ThreadsOnTimelineMaxOrderByAggregateInput_1 = require("../inputs/ThreadsOnTimelineMaxOrderByAggregateInput");
const ThreadsOnTimelineMinOrderByAggregateInput_1 = require("../inputs/ThreadsOnTimelineMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnTimelineOrderByWithAggregationInput = class ThreadsOnTimelineOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineOrderByWithAggregationInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineOrderByWithAggregationInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineOrderByWithAggregationInput.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCountOrderByAggregateInput_1.ThreadsOnTimelineCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCountOrderByAggregateInput_1.ThreadsOnTimelineCountOrderByAggregateInput)
], ThreadsOnTimelineOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineMaxOrderByAggregateInput_1.ThreadsOnTimelineMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineMaxOrderByAggregateInput_1.ThreadsOnTimelineMaxOrderByAggregateInput)
], ThreadsOnTimelineOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineMinOrderByAggregateInput_1.ThreadsOnTimelineMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineMinOrderByAggregateInput_1.ThreadsOnTimelineMinOrderByAggregateInput)
], ThreadsOnTimelineOrderByWithAggregationInput.prototype, "_min", void 0);
ThreadsOnTimelineOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineOrderByWithAggregationInput", {
        isAbstract: true
    })
], ThreadsOnTimelineOrderByWithAggregationInput);
exports.ThreadsOnTimelineOrderByWithAggregationInput = ThreadsOnTimelineOrderByWithAggregationInput;
