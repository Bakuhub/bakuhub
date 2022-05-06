"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCountOrderByAggregateInput_1 = require("../inputs/ReferenceCountOrderByAggregateInput");
const ReferenceMaxOrderByAggregateInput_1 = require("../inputs/ReferenceMaxOrderByAggregateInput");
const ReferenceMinOrderByAggregateInput_1 = require("../inputs/ReferenceMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReferenceOrderByWithAggregationInput = class ReferenceOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReferenceOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCountOrderByAggregateInput_1.ReferenceCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceCountOrderByAggregateInput_1.ReferenceCountOrderByAggregateInput)
], ReferenceOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceMaxOrderByAggregateInput_1.ReferenceMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceMaxOrderByAggregateInput_1.ReferenceMaxOrderByAggregateInput)
], ReferenceOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceMinOrderByAggregateInput_1.ReferenceMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceMinOrderByAggregateInput_1.ReferenceMinOrderByAggregateInput)
], ReferenceOrderByWithAggregationInput.prototype, "_min", void 0);
ReferenceOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceOrderByWithAggregationInput", {
        isAbstract: true
    })
], ReferenceOrderByWithAggregationInput);
exports.ReferenceOrderByWithAggregationInput = ReferenceOrderByWithAggregationInput;
