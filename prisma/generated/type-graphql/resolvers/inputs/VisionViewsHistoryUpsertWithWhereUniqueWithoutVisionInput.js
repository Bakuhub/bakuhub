"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCreateWithoutVisionInput_1 = require("../inputs/VisionViewsHistoryCreateWithoutVisionInput");
const VisionViewsHistoryUpdateWithoutVisionInput_1 = require("../inputs/VisionViewsHistoryUpdateWithoutVisionInput");
const VisionViewsHistoryWhereUniqueInput_1 = require("../inputs/VisionViewsHistoryWhereUniqueInput");
let VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput = class VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput)
], VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryUpdateWithoutVisionInput_1.VisionViewsHistoryUpdateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryUpdateWithoutVisionInput_1.VisionViewsHistoryUpdateWithoutVisionInput)
], VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCreateWithoutVisionInput_1.VisionViewsHistoryCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCreateWithoutVisionInput_1.VisionViewsHistoryCreateWithoutVisionInput)
], VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput.prototype, "create", void 0);
VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput", {
        isAbstract: true
    })
], VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput);
exports.VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput = VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput;
