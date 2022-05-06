"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOnTimelinesMinOrderByAggregateInput = class ReactionOnTimelinesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesMinOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesMinOrderByAggregateInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesMinOrderByAggregateInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesMinOrderByAggregateInput.prototype, "createdAt", void 0);
ReactionOnTimelinesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesMinOrderByAggregateInput", {
        isAbstract: true
    })
], ReactionOnTimelinesMinOrderByAggregateInput);
exports.ReactionOnTimelinesMinOrderByAggregateInput = ReactionOnTimelinesMinOrderByAggregateInput;
