"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseAvgOrderByAggregateInput_1 = require("../inputs/VotesOnPremiseAvgOrderByAggregateInput");
const VotesOnPremiseCountOrderByAggregateInput_1 = require("../inputs/VotesOnPremiseCountOrderByAggregateInput");
const VotesOnPremiseMaxOrderByAggregateInput_1 = require("../inputs/VotesOnPremiseMaxOrderByAggregateInput");
const VotesOnPremiseMinOrderByAggregateInput_1 = require("../inputs/VotesOnPremiseMinOrderByAggregateInput");
const VotesOnPremiseSumOrderByAggregateInput_1 = require("../inputs/VotesOnPremiseSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnPremiseOrderByWithAggregationInput = class VotesOnPremiseOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseOrderByWithAggregationInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseOrderByWithAggregationInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCountOrderByAggregateInput_1.VotesOnPremiseCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCountOrderByAggregateInput_1.VotesOnPremiseCountOrderByAggregateInput)
], VotesOnPremiseOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseAvgOrderByAggregateInput_1.VotesOnPremiseAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseAvgOrderByAggregateInput_1.VotesOnPremiseAvgOrderByAggregateInput)
], VotesOnPremiseOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseMaxOrderByAggregateInput_1.VotesOnPremiseMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseMaxOrderByAggregateInput_1.VotesOnPremiseMaxOrderByAggregateInput)
], VotesOnPremiseOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseMinOrderByAggregateInput_1.VotesOnPremiseMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseMinOrderByAggregateInput_1.VotesOnPremiseMinOrderByAggregateInput)
], VotesOnPremiseOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseSumOrderByAggregateInput_1.VotesOnPremiseSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseSumOrderByAggregateInput_1.VotesOnPremiseSumOrderByAggregateInput)
], VotesOnPremiseOrderByWithAggregationInput.prototype, "_sum", void 0);
VotesOnPremiseOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseOrderByWithAggregationInput", {
        isAbstract: true
    })
], VotesOnPremiseOrderByWithAggregationInput);
exports.VotesOnPremiseOrderByWithAggregationInput = VotesOnPremiseOrderByWithAggregationInput;
