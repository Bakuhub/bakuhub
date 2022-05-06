"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotOrderByRelationAggregateInput_1 = require("../inputs/SnapshotOrderByRelationAggregateInput");
const VisionOrderByRelationAggregateInput_1 = require("../inputs/VisionOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReferenceOrderByWithRelationInput = class ReferenceOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReferenceOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotOrderByRelationAggregateInput_1.SnapshotOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotOrderByRelationAggregateInput_1.SnapshotOrderByRelationAggregateInput)
], ReferenceOrderByWithRelationInput.prototype, "snapshots", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionOrderByRelationAggregateInput_1.VisionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionOrderByRelationAggregateInput_1.VisionOrderByRelationAggregateInput)
], ReferenceOrderByWithRelationInput.prototype, "vision", void 0);
ReferenceOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceOrderByWithRelationInput", {
        isAbstract: true
    })
], ReferenceOrderByWithRelationInput);
exports.ReferenceOrderByWithRelationInput = ReferenceOrderByWithRelationInput;
