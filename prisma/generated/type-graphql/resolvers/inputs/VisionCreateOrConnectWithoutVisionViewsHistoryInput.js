"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateOrConnectWithoutVisionViewsHistoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutVisionViewsHistoryInput_1 = require("../inputs/VisionCreateWithoutVisionViewsHistoryInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateOrConnectWithoutVisionViewsHistoryInput = class VisionCreateOrConnectWithoutVisionViewsHistoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateOrConnectWithoutVisionViewsHistoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutVisionViewsHistoryInput_1.VisionCreateWithoutVisionViewsHistoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutVisionViewsHistoryInput_1.VisionCreateWithoutVisionViewsHistoryInput)
], VisionCreateOrConnectWithoutVisionViewsHistoryInput.prototype, "create", void 0);
VisionCreateOrConnectWithoutVisionViewsHistoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateOrConnectWithoutVisionViewsHistoryInput", {
        isAbstract: true
    })
], VisionCreateOrConnectWithoutVisionViewsHistoryInput);
exports.VisionCreateOrConnectWithoutVisionViewsHistoryInput = VisionCreateOrConnectWithoutVisionViewsHistoryInput;
