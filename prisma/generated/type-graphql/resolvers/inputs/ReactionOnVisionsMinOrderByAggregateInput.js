"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOnVisionsMinOrderByAggregateInput = class ReactionOnVisionsMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsMinOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsMinOrderByAggregateInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsMinOrderByAggregateInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsMinOrderByAggregateInput.prototype, "createdAt", void 0);
ReactionOnVisionsMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsMinOrderByAggregateInput", {
        isAbstract: true
    })
], ReactionOnVisionsMinOrderByAggregateInput);
exports.ReactionOnVisionsMinOrderByAggregateInput = ReactionOnVisionsMinOrderByAggregateInput;
