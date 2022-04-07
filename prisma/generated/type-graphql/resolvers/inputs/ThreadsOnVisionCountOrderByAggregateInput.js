"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnVisionCountOrderByAggregateInput = class ThreadsOnVisionCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionCountOrderByAggregateInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionCountOrderByAggregateInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionCountOrderByAggregateInput.prototype, "assignedAt", void 0);
ThreadsOnVisionCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionCountOrderByAggregateInput", {
        isAbstract: true
    })
], ThreadsOnVisionCountOrderByAggregateInput);
exports.ThreadsOnVisionCountOrderByAggregateInput = ThreadsOnVisionCountOrderByAggregateInput;
