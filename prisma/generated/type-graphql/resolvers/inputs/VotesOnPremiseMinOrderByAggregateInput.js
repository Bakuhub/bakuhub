"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnPremiseMinOrderByAggregateInput = class VotesOnPremiseMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseMinOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseMinOrderByAggregateInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseMinOrderByAggregateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseMinOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseMinOrderByAggregateInput.prototype, "updatedAt", void 0);
VotesOnPremiseMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseMinOrderByAggregateInput", {
        isAbstract: true
    })
], VotesOnPremiseMinOrderByAggregateInput);
exports.VotesOnPremiseMinOrderByAggregateInput = VotesOnPremiseMinOrderByAggregateInput;
