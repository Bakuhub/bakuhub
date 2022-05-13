"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryUpdateWithoutVisionInput_1 = require("../inputs/VisionViewsHistoryUpdateWithoutVisionInput");
const VisionViewsHistoryWhereUniqueInput_1 = require("../inputs/VisionViewsHistoryWhereUniqueInput");
let VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput = class VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput)
], VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryUpdateWithoutVisionInput_1.VisionViewsHistoryUpdateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryUpdateWithoutVisionInput_1.VisionViewsHistoryUpdateWithoutVisionInput)
], VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput.prototype, "data", void 0);
VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput", {
        isAbstract: true
    })
], VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput);
exports.VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput = VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput;
