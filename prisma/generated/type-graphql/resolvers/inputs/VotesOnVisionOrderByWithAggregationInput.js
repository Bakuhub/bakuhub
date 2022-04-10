"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionAvgOrderByAggregateInput_1 = require("../inputs/VotesOnVisionAvgOrderByAggregateInput");
const VotesOnVisionCountOrderByAggregateInput_1 = require("../inputs/VotesOnVisionCountOrderByAggregateInput");
const VotesOnVisionMaxOrderByAggregateInput_1 = require("../inputs/VotesOnVisionMaxOrderByAggregateInput");
const VotesOnVisionMinOrderByAggregateInput_1 = require("../inputs/VotesOnVisionMinOrderByAggregateInput");
const VotesOnVisionSumOrderByAggregateInput_1 = require("../inputs/VotesOnVisionSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnVisionOrderByWithAggregationInput = class VotesOnVisionOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionOrderByWithAggregationInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionOrderByWithAggregationInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCountOrderByAggregateInput_1.VotesOnVisionCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCountOrderByAggregateInput_1.VotesOnVisionCountOrderByAggregateInput)
], VotesOnVisionOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionAvgOrderByAggregateInput_1.VotesOnVisionAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionAvgOrderByAggregateInput_1.VotesOnVisionAvgOrderByAggregateInput)
], VotesOnVisionOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionMaxOrderByAggregateInput_1.VotesOnVisionMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionMaxOrderByAggregateInput_1.VotesOnVisionMaxOrderByAggregateInput)
], VotesOnVisionOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionMinOrderByAggregateInput_1.VotesOnVisionMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionMinOrderByAggregateInput_1.VotesOnVisionMinOrderByAggregateInput)
], VotesOnVisionOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionSumOrderByAggregateInput_1.VotesOnVisionSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionSumOrderByAggregateInput_1.VotesOnVisionSumOrderByAggregateInput)
], VotesOnVisionOrderByWithAggregationInput.prototype, "_sum", void 0);
VotesOnVisionOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionOrderByWithAggregationInput", {
        isAbstract: true
    })
], VotesOnVisionOrderByWithAggregationInput);
exports.VotesOnVisionOrderByWithAggregationInput = VotesOnVisionOrderByWithAggregationInput;
