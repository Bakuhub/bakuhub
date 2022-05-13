"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VisionViewsHistoryMinAggregate = class VisionViewsHistoryMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryMinAggregate.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionViewsHistoryMinAggregate.prototype, "createdAt", void 0);
VisionViewsHistoryMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VisionViewsHistoryMinAggregate", {
        isAbstract: true
    })
], VisionViewsHistoryMinAggregate);
exports.VisionViewsHistoryMinAggregate = VisionViewsHistoryMinAggregate;
