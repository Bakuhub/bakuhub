"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SnapshotOrderByRelationAggregateInput = class SnapshotOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotOrderByRelationAggregateInput.prototype, "_count", void 0);
SnapshotOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotOrderByRelationAggregateInput", {
        isAbstract: true
    })
], SnapshotOrderByRelationAggregateInput);
exports.SnapshotOrderByRelationAggregateInput = SnapshotOrderByRelationAggregateInput;
