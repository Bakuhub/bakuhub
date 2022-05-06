"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnVisionMaxOrderByAggregateInput = class ThreadsOnVisionMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionMaxOrderByAggregateInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionMaxOrderByAggregateInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionMaxOrderByAggregateInput.prototype, "assignedAt", void 0);
ThreadsOnVisionMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionMaxOrderByAggregateInput", {
        isAbstract: true
    })
], ThreadsOnVisionMaxOrderByAggregateInput);
exports.ThreadsOnVisionMaxOrderByAggregateInput = ThreadsOnVisionMaxOrderByAggregateInput;
