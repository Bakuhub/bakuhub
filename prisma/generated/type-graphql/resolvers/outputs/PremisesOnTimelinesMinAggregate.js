"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PremisesOnTimelinesMinAggregate = class PremisesOnTimelinesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesMinAggregate.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesMinAggregate.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremisesOnTimelinesMinAggregate.prototype, "assignedAt", void 0);
PremisesOnTimelinesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PremisesOnTimelinesMinAggregate", {
        isAbstract: true
    })
], PremisesOnTimelinesMinAggregate);
exports.PremisesOnTimelinesMinAggregate = PremisesOnTimelinesMinAggregate;
