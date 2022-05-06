"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelines = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PremisesOnTimelines = class PremisesOnTimelines {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelines.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelines.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PremisesOnTimelines.prototype, "assignedAt", void 0);
PremisesOnTimelines = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PremisesOnTimelines", {
        isAbstract: true
    })
], PremisesOnTimelines);
exports.PremisesOnTimelines = PremisesOnTimelines;
