"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnPremiseMinOrderByAggregateInput = class ThreadsOnPremiseMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseMinOrderByAggregateInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseMinOrderByAggregateInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseMinOrderByAggregateInput.prototype, "assignedAt", void 0);
ThreadsOnPremiseMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseMinOrderByAggregateInput", {
        isAbstract: true
    })
], ThreadsOnPremiseMinOrderByAggregateInput);
exports.ThreadsOnPremiseMinOrderByAggregateInput = ThreadsOnPremiseMinOrderByAggregateInput;
