"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VisionViewsHistoryCreateManyUserInput = class VisionViewsHistoryCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryCreateManyUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryCreateManyUserInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionViewsHistoryCreateManyUserInput.prototype, "createdAt", void 0);
VisionViewsHistoryCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryCreateManyUserInput", {
        isAbstract: true
    })
], VisionViewsHistoryCreateManyUserInput);
exports.VisionViewsHistoryCreateManyUserInput = VisionViewsHistoryCreateManyUserInput;
