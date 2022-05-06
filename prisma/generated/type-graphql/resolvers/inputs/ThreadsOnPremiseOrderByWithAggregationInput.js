"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCountOrderByAggregateInput_1 = require("../inputs/ThreadsOnPremiseCountOrderByAggregateInput");
const ThreadsOnPremiseMaxOrderByAggregateInput_1 = require("../inputs/ThreadsOnPremiseMaxOrderByAggregateInput");
const ThreadsOnPremiseMinOrderByAggregateInput_1 = require("../inputs/ThreadsOnPremiseMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnPremiseOrderByWithAggregationInput = class ThreadsOnPremiseOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseOrderByWithAggregationInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseOrderByWithAggregationInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseOrderByWithAggregationInput.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCountOrderByAggregateInput_1.ThreadsOnPremiseCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCountOrderByAggregateInput_1.ThreadsOnPremiseCountOrderByAggregateInput)
], ThreadsOnPremiseOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseMaxOrderByAggregateInput_1.ThreadsOnPremiseMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseMaxOrderByAggregateInput_1.ThreadsOnPremiseMaxOrderByAggregateInput)
], ThreadsOnPremiseOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseMinOrderByAggregateInput_1.ThreadsOnPremiseMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseMinOrderByAggregateInput_1.ThreadsOnPremiseMinOrderByAggregateInput)
], ThreadsOnPremiseOrderByWithAggregationInput.prototype, "_min", void 0);
ThreadsOnPremiseOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseOrderByWithAggregationInput", {
        isAbstract: true
    })
], ThreadsOnPremiseOrderByWithAggregationInput);
exports.ThreadsOnPremiseOrderByWithAggregationInput = ThreadsOnPremiseOrderByWithAggregationInput;
