"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SupscriptionsOnTimelinesCountOrderByAggregateInput = class SupscriptionsOnTimelinesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCountOrderByAggregateInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCountOrderByAggregateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCountOrderByAggregateInput.prototype, "updatedAt", void 0);
SupscriptionsOnTimelinesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesCountOrderByAggregateInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesCountOrderByAggregateInput);
exports.SupscriptionsOnTimelinesCountOrderByAggregateInput = SupscriptionsOnTimelinesCountOrderByAggregateInput;
