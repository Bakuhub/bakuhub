"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReferenceCountOrderByAggregateInput = class ReferenceCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReferenceCountOrderByAggregateInput.prototype, "id", void 0);
ReferenceCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceCountOrderByAggregateInput", {
        isAbstract: true
    })
], ReferenceCountOrderByAggregateInput);
exports.ReferenceCountOrderByAggregateInput = ReferenceCountOrderByAggregateInput;
