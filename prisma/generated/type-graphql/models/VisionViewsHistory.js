"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistory = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VisionViewsHistory = class VisionViewsHistory {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistory.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistory.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistory.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VisionViewsHistory.prototype, "createdAt", void 0);
VisionViewsHistory = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VisionViewsHistory", {
        isAbstract: true
    })
], VisionViewsHistory);
exports.VisionViewsHistory = VisionViewsHistory;
