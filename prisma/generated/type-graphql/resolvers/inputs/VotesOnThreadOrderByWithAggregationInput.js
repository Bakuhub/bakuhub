"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadAvgOrderByAggregateInput_1 = require("../inputs/VotesOnThreadAvgOrderByAggregateInput");
const VotesOnThreadCountOrderByAggregateInput_1 = require("../inputs/VotesOnThreadCountOrderByAggregateInput");
const VotesOnThreadMaxOrderByAggregateInput_1 = require("../inputs/VotesOnThreadMaxOrderByAggregateInput");
const VotesOnThreadMinOrderByAggregateInput_1 = require("../inputs/VotesOnThreadMinOrderByAggregateInput");
const VotesOnThreadSumOrderByAggregateInput_1 = require("../inputs/VotesOnThreadSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnThreadOrderByWithAggregationInput = class VotesOnThreadOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadOrderByWithAggregationInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadOrderByWithAggregationInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCountOrderByAggregateInput_1.VotesOnThreadCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCountOrderByAggregateInput_1.VotesOnThreadCountOrderByAggregateInput)
], VotesOnThreadOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadAvgOrderByAggregateInput_1.VotesOnThreadAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadAvgOrderByAggregateInput_1.VotesOnThreadAvgOrderByAggregateInput)
], VotesOnThreadOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadMaxOrderByAggregateInput_1.VotesOnThreadMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadMaxOrderByAggregateInput_1.VotesOnThreadMaxOrderByAggregateInput)
], VotesOnThreadOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadMinOrderByAggregateInput_1.VotesOnThreadMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadMinOrderByAggregateInput_1.VotesOnThreadMinOrderByAggregateInput)
], VotesOnThreadOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadSumOrderByAggregateInput_1.VotesOnThreadSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadSumOrderByAggregateInput_1.VotesOnThreadSumOrderByAggregateInput)
], VotesOnThreadOrderByWithAggregationInput.prototype, "_sum", void 0);
VotesOnThreadOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadOrderByWithAggregationInput", {
        isAbstract: true
    })
], VotesOnThreadOrderByWithAggregationInput);
exports.VotesOnThreadOrderByWithAggregationInput = VotesOnThreadOrderByWithAggregationInput;
