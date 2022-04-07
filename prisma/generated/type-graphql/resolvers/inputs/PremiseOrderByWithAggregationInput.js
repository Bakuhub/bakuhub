"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCountOrderByAggregateInput_1 = require("../inputs/PremiseCountOrderByAggregateInput");
const PremiseMaxOrderByAggregateInput_1 = require("../inputs/PremiseMaxOrderByAggregateInput");
const PremiseMinOrderByAggregateInput_1 = require("../inputs/PremiseMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PremiseOrderByWithAggregationInput = class PremiseOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseOrderByWithAggregationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCountOrderByAggregateInput_1.PremiseCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCountOrderByAggregateInput_1.PremiseCountOrderByAggregateInput)
], PremiseOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseMaxOrderByAggregateInput_1.PremiseMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseMaxOrderByAggregateInput_1.PremiseMaxOrderByAggregateInput)
], PremiseOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseMinOrderByAggregateInput_1.PremiseMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseMinOrderByAggregateInput_1.PremiseMinOrderByAggregateInput)
], PremiseOrderByWithAggregationInput.prototype, "_min", void 0);
PremiseOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseOrderByWithAggregationInput", {
        isAbstract: true
    })
], PremiseOrderByWithAggregationInput);
exports.PremiseOrderByWithAggregationInput = PremiseOrderByWithAggregationInput;
