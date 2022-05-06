"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCountAggregate_1 = require("../outputs/PremisesOnTimelinesCountAggregate");
const PremisesOnTimelinesMaxAggregate_1 = require("../outputs/PremisesOnTimelinesMaxAggregate");
const PremisesOnTimelinesMinAggregate_1 = require("../outputs/PremisesOnTimelinesMinAggregate");
let PremisesOnTimelinesGroupBy = class PremisesOnTimelinesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesGroupBy.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesGroupBy.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PremisesOnTimelinesGroupBy.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCountAggregate_1.PremisesOnTimelinesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCountAggregate_1.PremisesOnTimelinesCountAggregate)
], PremisesOnTimelinesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesMinAggregate_1.PremisesOnTimelinesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesMinAggregate_1.PremisesOnTimelinesMinAggregate)
], PremisesOnTimelinesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesMaxAggregate_1.PremisesOnTimelinesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesMaxAggregate_1.PremisesOnTimelinesMaxAggregate)
], PremisesOnTimelinesGroupBy.prototype, "_max", void 0);
PremisesOnTimelinesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PremisesOnTimelinesGroupBy", {
        isAbstract: true
    })
], PremisesOnTimelinesGroupBy);
exports.PremisesOnTimelinesGroupBy = PremisesOnTimelinesGroupBy;
