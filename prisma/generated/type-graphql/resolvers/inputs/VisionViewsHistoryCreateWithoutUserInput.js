"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateNestedOneWithoutVisionViewsHistoryInput_1 = require("../inputs/VisionCreateNestedOneWithoutVisionViewsHistoryInput");
let VisionViewsHistoryCreateWithoutUserInput = class VisionViewsHistoryCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutVisionViewsHistoryInput_1.VisionCreateNestedOneWithoutVisionViewsHistoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutVisionViewsHistoryInput_1.VisionCreateNestedOneWithoutVisionViewsHistoryInput)
], VisionViewsHistoryCreateWithoutUserInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionViewsHistoryCreateWithoutUserInput.prototype, "createdAt", void 0);
VisionViewsHistoryCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryCreateWithoutUserInput", {
        isAbstract: true
    })
], VisionViewsHistoryCreateWithoutUserInput);
exports.VisionViewsHistoryCreateWithoutUserInput = VisionViewsHistoryCreateWithoutUserInput;
