"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCountOrderByAggregateInput_1 = require("../inputs/ReactionOnVisionsCountOrderByAggregateInput");
const ReactionOnVisionsMaxOrderByAggregateInput_1 = require("../inputs/ReactionOnVisionsMaxOrderByAggregateInput");
const ReactionOnVisionsMinOrderByAggregateInput_1 = require("../inputs/ReactionOnVisionsMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOnVisionsOrderByWithAggregationInput = class ReactionOnVisionsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsOrderByWithAggregationInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsOrderByWithAggregationInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCountOrderByAggregateInput_1.ReactionOnVisionsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCountOrderByAggregateInput_1.ReactionOnVisionsCountOrderByAggregateInput)
], ReactionOnVisionsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsMaxOrderByAggregateInput_1.ReactionOnVisionsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsMaxOrderByAggregateInput_1.ReactionOnVisionsMaxOrderByAggregateInput)
], ReactionOnVisionsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsMinOrderByAggregateInput_1.ReactionOnVisionsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsMinOrderByAggregateInput_1.ReactionOnVisionsMinOrderByAggregateInput)
], ReactionOnVisionsOrderByWithAggregationInput.prototype, "_min", void 0);
ReactionOnVisionsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsOrderByWithAggregationInput", {
        isAbstract: true
    })
], ReactionOnVisionsOrderByWithAggregationInput);
exports.ReactionOnVisionsOrderByWithAggregationInput = ReactionOnVisionsOrderByWithAggregationInput;
