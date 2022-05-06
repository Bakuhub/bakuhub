"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnThreadMinOrderByAggregateInput = class VotesOnThreadMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadMinOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadMinOrderByAggregateInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadMinOrderByAggregateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadMinOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadMinOrderByAggregateInput.prototype, "updatedAt", void 0);
VotesOnThreadMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadMinOrderByAggregateInput", {
        isAbstract: true
    })
], VotesOnThreadMinOrderByAggregateInput);
exports.VotesOnThreadMinOrderByAggregateInput = VotesOnThreadMinOrderByAggregateInput;
