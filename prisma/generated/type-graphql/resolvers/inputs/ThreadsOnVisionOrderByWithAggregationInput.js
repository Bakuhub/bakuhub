"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCountOrderByAggregateInput_1 = require("../inputs/ThreadsOnVisionCountOrderByAggregateInput");
const ThreadsOnVisionMaxOrderByAggregateInput_1 = require("../inputs/ThreadsOnVisionMaxOrderByAggregateInput");
const ThreadsOnVisionMinOrderByAggregateInput_1 = require("../inputs/ThreadsOnVisionMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnVisionOrderByWithAggregationInput = class ThreadsOnVisionOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionOrderByWithAggregationInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionOrderByWithAggregationInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionOrderByWithAggregationInput.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCountOrderByAggregateInput_1.ThreadsOnVisionCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCountOrderByAggregateInput_1.ThreadsOnVisionCountOrderByAggregateInput)
], ThreadsOnVisionOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionMaxOrderByAggregateInput_1.ThreadsOnVisionMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionMaxOrderByAggregateInput_1.ThreadsOnVisionMaxOrderByAggregateInput)
], ThreadsOnVisionOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionMinOrderByAggregateInput_1.ThreadsOnVisionMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionMinOrderByAggregateInput_1.ThreadsOnVisionMinOrderByAggregateInput)
], ThreadsOnVisionOrderByWithAggregationInput.prototype, "_min", void 0);
ThreadsOnVisionOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionOrderByWithAggregationInput", {
        isAbstract: true
    })
], ThreadsOnVisionOrderByWithAggregationInput);
exports.ThreadsOnVisionOrderByWithAggregationInput = ThreadsOnVisionOrderByWithAggregationInput;
