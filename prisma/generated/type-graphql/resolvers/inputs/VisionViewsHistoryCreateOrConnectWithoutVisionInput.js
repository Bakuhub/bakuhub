"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryCreateOrConnectWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCreateWithoutVisionInput_1 = require("../inputs/VisionViewsHistoryCreateWithoutVisionInput");
const VisionViewsHistoryWhereUniqueInput_1 = require("../inputs/VisionViewsHistoryWhereUniqueInput");
let VisionViewsHistoryCreateOrConnectWithoutVisionInput = class VisionViewsHistoryCreateOrConnectWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput)
], VisionViewsHistoryCreateOrConnectWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCreateWithoutVisionInput_1.VisionViewsHistoryCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCreateWithoutVisionInput_1.VisionViewsHistoryCreateWithoutVisionInput)
], VisionViewsHistoryCreateOrConnectWithoutVisionInput.prototype, "create", void 0);
VisionViewsHistoryCreateOrConnectWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryCreateOrConnectWithoutVisionInput", {
        isAbstract: true
    })
], VisionViewsHistoryCreateOrConnectWithoutVisionInput);
exports.VisionViewsHistoryCreateOrConnectWithoutVisionInput = VisionViewsHistoryCreateOrConnectWithoutVisionInput;
