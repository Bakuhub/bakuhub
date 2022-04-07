"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCountOrderByAggregateInput_1 = require("../inputs/ThreadCountOrderByAggregateInput");
const ThreadMaxOrderByAggregateInput_1 = require("../inputs/ThreadMaxOrderByAggregateInput");
const ThreadMinOrderByAggregateInput_1 = require("../inputs/ThreadMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadOrderByWithAggregationInput = class ThreadOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithAggregationInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithAggregationInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithAggregationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadOrderByWithAggregationInput.prototype, "parentThreadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCountOrderByAggregateInput_1.ThreadCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCountOrderByAggregateInput_1.ThreadCountOrderByAggregateInput)
], ThreadOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadMaxOrderByAggregateInput_1.ThreadMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadMaxOrderByAggregateInput_1.ThreadMaxOrderByAggregateInput)
], ThreadOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadMinOrderByAggregateInput_1.ThreadMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadMinOrderByAggregateInput_1.ThreadMinOrderByAggregateInput)
], ThreadOrderByWithAggregationInput.prototype, "_min", void 0);
ThreadOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadOrderByWithAggregationInput", {
        isAbstract: true
    })
], ThreadOrderByWithAggregationInput);
exports.ThreadOrderByWithAggregationInput = ThreadOrderByWithAggregationInput;
