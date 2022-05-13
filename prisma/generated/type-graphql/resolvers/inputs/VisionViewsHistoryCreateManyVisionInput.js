"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryCreateManyVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VisionViewsHistoryCreateManyVisionInput = class VisionViewsHistoryCreateManyVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryCreateManyVisionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryCreateManyVisionInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionViewsHistoryCreateManyVisionInput.prototype, "createdAt", void 0);
VisionViewsHistoryCreateManyVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryCreateManyVisionInput", {
        isAbstract: true
    })
], VisionViewsHistoryCreateManyVisionInput);
exports.VisionViewsHistoryCreateManyVisionInput = VisionViewsHistoryCreateManyVisionInput;
