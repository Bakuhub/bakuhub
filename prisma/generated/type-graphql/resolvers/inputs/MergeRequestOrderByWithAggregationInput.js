"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCountOrderByAggregateInput_1 = require("../inputs/MergeRequestCountOrderByAggregateInput");
const MergeRequestMaxOrderByAggregateInput_1 = require("../inputs/MergeRequestMaxOrderByAggregateInput");
const MergeRequestMinOrderByAggregateInput_1 = require("../inputs/MergeRequestMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MergeRequestOrderByWithAggregationInput = class MergeRequestOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestOrderByWithAggregationInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCountOrderByAggregateInput_1.MergeRequestCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCountOrderByAggregateInput_1.MergeRequestCountOrderByAggregateInput)
], MergeRequestOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestMaxOrderByAggregateInput_1.MergeRequestMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestMaxOrderByAggregateInput_1.MergeRequestMaxOrderByAggregateInput)
], MergeRequestOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestMinOrderByAggregateInput_1.MergeRequestMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestMinOrderByAggregateInput_1.MergeRequestMinOrderByAggregateInput)
], MergeRequestOrderByWithAggregationInput.prototype, "_min", void 0);
MergeRequestOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestOrderByWithAggregationInput", {
        isAbstract: true
    })
], MergeRequestOrderByWithAggregationInput);
exports.MergeRequestOrderByWithAggregationInput = MergeRequestOrderByWithAggregationInput;
