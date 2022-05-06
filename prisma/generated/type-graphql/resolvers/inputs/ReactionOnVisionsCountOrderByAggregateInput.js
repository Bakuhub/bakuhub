"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOnVisionsCountOrderByAggregateInput = class ReactionOnVisionsCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsCountOrderByAggregateInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsCountOrderByAggregateInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsCountOrderByAggregateInput.prototype, "createdAt", void 0);
ReactionOnVisionsCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsCountOrderByAggregateInput", {
        isAbstract: true
    })
], ReactionOnVisionsCountOrderByAggregateInput);
exports.ReactionOnVisionsCountOrderByAggregateInput = ReactionOnVisionsCountOrderByAggregateInput;
