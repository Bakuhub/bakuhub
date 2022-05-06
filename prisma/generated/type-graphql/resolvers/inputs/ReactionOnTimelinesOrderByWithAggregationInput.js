"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCountOrderByAggregateInput_1 = require("../inputs/ReactionOnTimelinesCountOrderByAggregateInput");
const ReactionOnTimelinesMaxOrderByAggregateInput_1 = require("../inputs/ReactionOnTimelinesMaxOrderByAggregateInput");
const ReactionOnTimelinesMinOrderByAggregateInput_1 = require("../inputs/ReactionOnTimelinesMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOnTimelinesOrderByWithAggregationInput = class ReactionOnTimelinesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesOrderByWithAggregationInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesOrderByWithAggregationInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCountOrderByAggregateInput_1.ReactionOnTimelinesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCountOrderByAggregateInput_1.ReactionOnTimelinesCountOrderByAggregateInput)
], ReactionOnTimelinesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesMaxOrderByAggregateInput_1.ReactionOnTimelinesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesMaxOrderByAggregateInput_1.ReactionOnTimelinesMaxOrderByAggregateInput)
], ReactionOnTimelinesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesMinOrderByAggregateInput_1.ReactionOnTimelinesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesMinOrderByAggregateInput_1.ReactionOnTimelinesMinOrderByAggregateInput)
], ReactionOnTimelinesOrderByWithAggregationInput.prototype, "_min", void 0);
ReactionOnTimelinesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesOrderByWithAggregationInput", {
        isAbstract: true
    })
], ReactionOnTimelinesOrderByWithAggregationInput);
exports.ReactionOnTimelinesOrderByWithAggregationInput = ReactionOnTimelinesOrderByWithAggregationInput;
