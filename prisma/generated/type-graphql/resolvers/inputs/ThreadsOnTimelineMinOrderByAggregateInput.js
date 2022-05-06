"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnTimelineMinOrderByAggregateInput = class ThreadsOnTimelineMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineMinOrderByAggregateInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineMinOrderByAggregateInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineMinOrderByAggregateInput.prototype, "assignedAt", void 0);
ThreadsOnTimelineMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineMinOrderByAggregateInput", {
        isAbstract: true
    })
], ThreadsOnTimelineMinOrderByAggregateInput);
exports.ThreadsOnTimelineMinOrderByAggregateInput = ThreadsOnTimelineMinOrderByAggregateInput;
