"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpsertWithoutVisionViewsHistoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutVisionViewsHistoryInput_1 = require("../inputs/VisionCreateWithoutVisionViewsHistoryInput");
const VisionUpdateWithoutVisionViewsHistoryInput_1 = require("../inputs/VisionUpdateWithoutVisionViewsHistoryInput");
let VisionUpsertWithoutVisionViewsHistoryInput = class VisionUpsertWithoutVisionViewsHistoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutVisionViewsHistoryInput_1.VisionUpdateWithoutVisionViewsHistoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutVisionViewsHistoryInput_1.VisionUpdateWithoutVisionViewsHistoryInput)
], VisionUpsertWithoutVisionViewsHistoryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutVisionViewsHistoryInput_1.VisionCreateWithoutVisionViewsHistoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutVisionViewsHistoryInput_1.VisionCreateWithoutVisionViewsHistoryInput)
], VisionUpsertWithoutVisionViewsHistoryInput.prototype, "create", void 0);
VisionUpsertWithoutVisionViewsHistoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpsertWithoutVisionViewsHistoryInput", {
        isAbstract: true
    })
], VisionUpsertWithoutVisionViewsHistoryInput);
exports.VisionUpsertWithoutVisionViewsHistoryInput = VisionUpsertWithoutVisionViewsHistoryInput;
