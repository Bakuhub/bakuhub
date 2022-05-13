"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCountAggregate_1 = require("../outputs/VisionViewsHistoryCountAggregate");
const VisionViewsHistoryMaxAggregate_1 = require("../outputs/VisionViewsHistoryMaxAggregate");
const VisionViewsHistoryMinAggregate_1 = require("../outputs/VisionViewsHistoryMinAggregate");
let VisionViewsHistoryGroupBy = class VisionViewsHistoryGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryGroupBy.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VisionViewsHistoryGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCountAggregate_1.VisionViewsHistoryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCountAggregate_1.VisionViewsHistoryCountAggregate)
], VisionViewsHistoryGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryMinAggregate_1.VisionViewsHistoryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryMinAggregate_1.VisionViewsHistoryMinAggregate)
], VisionViewsHistoryGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryMaxAggregate_1.VisionViewsHistoryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryMaxAggregate_1.VisionViewsHistoryMaxAggregate)
], VisionViewsHistoryGroupBy.prototype, "_max", void 0);
VisionViewsHistoryGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VisionViewsHistoryGroupBy", {
        isAbstract: true
    })
], VisionViewsHistoryGroupBy);
exports.VisionViewsHistoryGroupBy = VisionViewsHistoryGroupBy;
