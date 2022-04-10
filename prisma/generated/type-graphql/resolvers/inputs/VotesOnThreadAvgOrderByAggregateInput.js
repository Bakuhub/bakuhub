"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnThreadAvgOrderByAggregateInput = class VotesOnThreadAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadAvgOrderByAggregateInput.prototype, "vote", void 0);
VotesOnThreadAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadAvgOrderByAggregateInput", {
        isAbstract: true
    })
], VotesOnThreadAvgOrderByAggregateInput);
exports.VotesOnThreadAvgOrderByAggregateInput = VotesOnThreadAvgOrderByAggregateInput;
