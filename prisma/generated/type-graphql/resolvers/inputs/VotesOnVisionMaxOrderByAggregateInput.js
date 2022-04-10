"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnVisionMaxOrderByAggregateInput = class VotesOnVisionMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionMaxOrderByAggregateInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionMaxOrderByAggregateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionMaxOrderByAggregateInput.prototype, "createdAt", void 0);
VotesOnVisionMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionMaxOrderByAggregateInput", {
        isAbstract: true
    })
], VotesOnVisionMaxOrderByAggregateInput);
exports.VotesOnVisionMaxOrderByAggregateInput = VotesOnVisionMaxOrderByAggregateInput;
