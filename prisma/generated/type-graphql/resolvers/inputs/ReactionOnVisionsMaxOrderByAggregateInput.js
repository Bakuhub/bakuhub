"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOnVisionsMaxOrderByAggregateInput = class ReactionOnVisionsMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsMaxOrderByAggregateInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsMaxOrderByAggregateInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsMaxOrderByAggregateInput.prototype, "createdAt", void 0);
ReactionOnVisionsMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsMaxOrderByAggregateInput", {
        isAbstract: true
    })
], ReactionOnVisionsMaxOrderByAggregateInput);
exports.ReactionOnVisionsMaxOrderByAggregateInput = ReactionOnVisionsMaxOrderByAggregateInput;
