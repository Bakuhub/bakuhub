"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VisionViewsHistoryMaxAggregate = class VisionViewsHistoryMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryMaxAggregate.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionViewsHistoryMaxAggregate.prototype, "createdAt", void 0);
VisionViewsHistoryMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VisionViewsHistoryMaxAggregate", {
        isAbstract: true
    })
], VisionViewsHistoryMaxAggregate);
exports.VisionViewsHistoryMaxAggregate = VisionViewsHistoryMaxAggregate;
