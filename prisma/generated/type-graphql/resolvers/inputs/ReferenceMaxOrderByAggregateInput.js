"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReferenceMaxOrderByAggregateInput = class ReferenceMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReferenceMaxOrderByAggregateInput.prototype, "id", void 0);
ReferenceMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceMaxOrderByAggregateInput", {
        isAbstract: true
    })
], ReferenceMaxOrderByAggregateInput);
exports.ReferenceMaxOrderByAggregateInput = ReferenceMaxOrderByAggregateInput;
