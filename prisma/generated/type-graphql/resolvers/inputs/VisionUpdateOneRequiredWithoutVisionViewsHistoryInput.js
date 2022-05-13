"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateOneRequiredWithoutVisionViewsHistoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateOrConnectWithoutVisionViewsHistoryInput_1 = require("../inputs/VisionCreateOrConnectWithoutVisionViewsHistoryInput");
const VisionCreateWithoutVisionViewsHistoryInput_1 = require("../inputs/VisionCreateWithoutVisionViewsHistoryInput");
const VisionUpdateWithoutVisionViewsHistoryInput_1 = require("../inputs/VisionUpdateWithoutVisionViewsHistoryInput");
const VisionUpsertWithoutVisionViewsHistoryInput_1 = require("../inputs/VisionUpsertWithoutVisionViewsHistoryInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateOneRequiredWithoutVisionViewsHistoryInput = class VisionUpdateOneRequiredWithoutVisionViewsHistoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutVisionViewsHistoryInput_1.VisionCreateWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutVisionViewsHistoryInput_1.VisionCreateWithoutVisionViewsHistoryInput)
], VisionUpdateOneRequiredWithoutVisionViewsHistoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutVisionViewsHistoryInput_1.VisionCreateOrConnectWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateOrConnectWithoutVisionViewsHistoryInput_1.VisionCreateOrConnectWithoutVisionViewsHistoryInput)
], VisionUpdateOneRequiredWithoutVisionViewsHistoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpsertWithoutVisionViewsHistoryInput_1.VisionUpsertWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpsertWithoutVisionViewsHistoryInput_1.VisionUpsertWithoutVisionViewsHistoryInput)
], VisionUpdateOneRequiredWithoutVisionViewsHistoryInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpdateOneRequiredWithoutVisionViewsHistoryInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutVisionViewsHistoryInput_1.VisionUpdateWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutVisionViewsHistoryInput_1.VisionUpdateWithoutVisionViewsHistoryInput)
], VisionUpdateOneRequiredWithoutVisionViewsHistoryInput.prototype, "update", void 0);
VisionUpdateOneRequiredWithoutVisionViewsHistoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateOneRequiredWithoutVisionViewsHistoryInput", {
        isAbstract: true
    })
], VisionUpdateOneRequiredWithoutVisionViewsHistoryInput);
exports.VisionUpdateOneRequiredWithoutVisionViewsHistoryInput = VisionUpdateOneRequiredWithoutVisionViewsHistoryInput;
