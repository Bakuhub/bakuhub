"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PremisesOnTimelinesMaxAggregate = class PremisesOnTimelinesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesMaxAggregate.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesMaxAggregate.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremisesOnTimelinesMaxAggregate.prototype, "assignedAt", void 0);
PremisesOnTimelinesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PremisesOnTimelinesMaxAggregate", {
        isAbstract: true
    })
], PremisesOnTimelinesMaxAggregate);
exports.PremisesOnTimelinesMaxAggregate = PremisesOnTimelinesMaxAggregate;
