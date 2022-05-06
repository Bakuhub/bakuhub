"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnPremiseCountOrderByAggregateInput = class ThreadsOnPremiseCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseCountOrderByAggregateInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseCountOrderByAggregateInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseCountOrderByAggregateInput.prototype, "assignedAt", void 0);
ThreadsOnPremiseCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseCountOrderByAggregateInput", {
        isAbstract: true
    })
], ThreadsOnPremiseCountOrderByAggregateInput);
exports.ThreadsOnPremiseCountOrderByAggregateInput = ThreadsOnPremiseCountOrderByAggregateInput;
