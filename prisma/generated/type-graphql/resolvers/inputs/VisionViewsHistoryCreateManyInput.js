"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VisionViewsHistoryCreateManyInput = class VisionViewsHistoryCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryCreateManyInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionViewsHistoryCreateManyInput.prototype, "createdAt", void 0);
VisionViewsHistoryCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryCreateManyInput", {
        isAbstract: true
    })
], VisionViewsHistoryCreateManyInput);
exports.VisionViewsHistoryCreateManyInput = VisionViewsHistoryCreateManyInput;
