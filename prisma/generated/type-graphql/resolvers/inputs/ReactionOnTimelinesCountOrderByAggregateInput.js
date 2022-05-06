"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOnTimelinesCountOrderByAggregateInput = class ReactionOnTimelinesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesCountOrderByAggregateInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesCountOrderByAggregateInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesCountOrderByAggregateInput.prototype, "createdAt", void 0);
ReactionOnTimelinesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesCountOrderByAggregateInput", {
        isAbstract: true
    })
], ReactionOnTimelinesCountOrderByAggregateInput);
exports.ReactionOnTimelinesCountOrderByAggregateInput = ReactionOnTimelinesCountOrderByAggregateInput;
