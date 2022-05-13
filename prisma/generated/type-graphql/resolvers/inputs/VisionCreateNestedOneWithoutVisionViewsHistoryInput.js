"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateNestedOneWithoutVisionViewsHistoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateOrConnectWithoutVisionViewsHistoryInput_1 = require("../inputs/VisionCreateOrConnectWithoutVisionViewsHistoryInput");
const VisionCreateWithoutVisionViewsHistoryInput_1 = require("../inputs/VisionCreateWithoutVisionViewsHistoryInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateNestedOneWithoutVisionViewsHistoryInput = class VisionCreateNestedOneWithoutVisionViewsHistoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutVisionViewsHistoryInput_1.VisionCreateWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutVisionViewsHistoryInput_1.VisionCreateWithoutVisionViewsHistoryInput)
], VisionCreateNestedOneWithoutVisionViewsHistoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutVisionViewsHistoryInput_1.VisionCreateOrConnectWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateOrConnectWithoutVisionViewsHistoryInput_1.VisionCreateOrConnectWithoutVisionViewsHistoryInput)
], VisionCreateNestedOneWithoutVisionViewsHistoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateNestedOneWithoutVisionViewsHistoryInput.prototype, "connect", void 0);
VisionCreateNestedOneWithoutVisionViewsHistoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateNestedOneWithoutVisionViewsHistoryInput", {
        isAbstract: true
    })
], VisionCreateNestedOneWithoutVisionViewsHistoryInput);
exports.VisionCreateNestedOneWithoutVisionViewsHistoryInput = VisionCreateNestedOneWithoutVisionViewsHistoryInput;
