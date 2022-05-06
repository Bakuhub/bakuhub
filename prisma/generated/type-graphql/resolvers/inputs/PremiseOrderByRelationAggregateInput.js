"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PremiseOrderByRelationAggregateInput = class PremiseOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseOrderByRelationAggregateInput.prototype, "_count", void 0);
PremiseOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseOrderByRelationAggregateInput", {
        isAbstract: true
    })
], PremiseOrderByRelationAggregateInput);
exports.PremiseOrderByRelationAggregateInput = PremiseOrderByRelationAggregateInput;
