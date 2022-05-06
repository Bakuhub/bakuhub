"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCountOrderByAggregateInput_1 = require("../inputs/TimelineCountOrderByAggregateInput");
const TimelineMaxOrderByAggregateInput_1 = require("../inputs/TimelineMaxOrderByAggregateInput");
const TimelineMinOrderByAggregateInput_1 = require("../inputs/TimelineMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TimelineOrderByWithAggregationInput = class TimelineOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineOrderByWithAggregationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCountOrderByAggregateInput_1.TimelineCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCountOrderByAggregateInput_1.TimelineCountOrderByAggregateInput)
], TimelineOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineMaxOrderByAggregateInput_1.TimelineMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineMaxOrderByAggregateInput_1.TimelineMaxOrderByAggregateInput)
], TimelineOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineMinOrderByAggregateInput_1.TimelineMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineMinOrderByAggregateInput_1.TimelineMinOrderByAggregateInput)
], TimelineOrderByWithAggregationInput.prototype, "_min", void 0);
TimelineOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineOrderByWithAggregationInput", {
        isAbstract: true
    })
], TimelineOrderByWithAggregationInput);
exports.TimelineOrderByWithAggregationInput = TimelineOrderByWithAggregationInput;
