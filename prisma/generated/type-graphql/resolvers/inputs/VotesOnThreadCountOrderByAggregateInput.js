"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnThreadCountOrderByAggregateInput = class VotesOnThreadCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadCountOrderByAggregateInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadCountOrderByAggregateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadCountOrderByAggregateInput.prototype, "createdAt", void 0);
VotesOnThreadCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadCountOrderByAggregateInput", {
        isAbstract: true
    })
], VotesOnThreadCountOrderByAggregateInput);
exports.VotesOnThreadCountOrderByAggregateInput = VotesOnThreadCountOrderByAggregateInput;
