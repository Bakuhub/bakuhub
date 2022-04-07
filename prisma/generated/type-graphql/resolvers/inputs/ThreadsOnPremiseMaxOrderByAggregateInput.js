"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnPremiseMaxOrderByAggregateInput = class ThreadsOnPremiseMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseMaxOrderByAggregateInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseMaxOrderByAggregateInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseMaxOrderByAggregateInput.prototype, "assignedAt", void 0);
ThreadsOnPremiseMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseMaxOrderByAggregateInput", {
        isAbstract: true
    })
], ThreadsOnPremiseMaxOrderByAggregateInput);
exports.ThreadsOnPremiseMaxOrderByAggregateInput = ThreadsOnPremiseMaxOrderByAggregateInput;
