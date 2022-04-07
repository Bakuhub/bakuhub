"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVision = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCountAggregate_1 = require("../outputs/VisionCountAggregate");
const VisionMaxAggregate_1 = require("../outputs/VisionMaxAggregate");
const VisionMinAggregate_1 = require("../outputs/VisionMinAggregate");
let AggregateVision = class AggregateVision {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCountAggregate_1.VisionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCountAggregate_1.VisionCountAggregate)
], AggregateVision.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionMinAggregate_1.VisionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionMinAggregate_1.VisionMinAggregate)
], AggregateVision.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionMaxAggregate_1.VisionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionMaxAggregate_1.VisionMaxAggregate)
], AggregateVision.prototype, "_max", void 0);
AggregateVision = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateVision", {
        isAbstract: true
    })
], AggregateVision);
exports.AggregateVision = AggregateVision;
