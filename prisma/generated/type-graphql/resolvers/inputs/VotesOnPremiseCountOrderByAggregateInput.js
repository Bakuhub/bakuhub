"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnPremiseCountOrderByAggregateInput = class VotesOnPremiseCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseCountOrderByAggregateInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseCountOrderByAggregateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseCountOrderByAggregateInput.prototype, "updatedAt", void 0);
VotesOnPremiseCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseCountOrderByAggregateInput", {
        isAbstract: true
    })
], VotesOnPremiseCountOrderByAggregateInput);
exports.VotesOnPremiseCountOrderByAggregateInput = VotesOnPremiseCountOrderByAggregateInput;
