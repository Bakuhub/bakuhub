"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSnapshot = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotCountAggregate_1 = require("../outputs/SnapshotCountAggregate");
const SnapshotMaxAggregate_1 = require("../outputs/SnapshotMaxAggregate");
const SnapshotMinAggregate_1 = require("../outputs/SnapshotMinAggregate");
let AggregateSnapshot = class AggregateSnapshot {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotCountAggregate_1.SnapshotCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotCountAggregate_1.SnapshotCountAggregate)
], AggregateSnapshot.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotMinAggregate_1.SnapshotMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotMinAggregate_1.SnapshotMinAggregate)
], AggregateSnapshot.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotMaxAggregate_1.SnapshotMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotMaxAggregate_1.SnapshotMaxAggregate)
], AggregateSnapshot.prototype, "_max", void 0);
AggregateSnapshot = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSnapshot", {
        isAbstract: true
    })
], AggregateSnapshot);
exports.AggregateSnapshot = AggregateSnapshot;
