"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCreateManyUserInputEnvelope_1 = require("../inputs/VisionViewsHistoryCreateManyUserInputEnvelope");
const VisionViewsHistoryCreateOrConnectWithoutUserInput_1 = require("../inputs/VisionViewsHistoryCreateOrConnectWithoutUserInput");
const VisionViewsHistoryCreateWithoutUserInput_1 = require("../inputs/VisionViewsHistoryCreateWithoutUserInput");
const VisionViewsHistoryScalarWhereInput_1 = require("../inputs/VisionViewsHistoryScalarWhereInput");
const VisionViewsHistoryUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/VisionViewsHistoryUpdateManyWithWhereWithoutUserInput");
const VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput");
const VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput");
const VisionViewsHistoryWhereUniqueInput_1 = require("../inputs/VisionViewsHistoryWhereUniqueInput");
let VisionViewsHistoryUpdateManyWithoutUserInput = class VisionViewsHistoryUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryCreateWithoutUserInput_1.VisionViewsHistoryCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryCreateOrConnectWithoutUserInput_1.VisionViewsHistoryCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput_1.VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCreateManyUserInputEnvelope_1.VisionViewsHistoryCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCreateManyUserInputEnvelope_1.VisionViewsHistoryCreateManyUserInputEnvelope)
], VisionViewsHistoryUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput_1.VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryUpdateManyWithWhereWithoutUserInput_1.VisionViewsHistoryUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryScalarWhereInput_1.VisionViewsHistoryScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
VisionViewsHistoryUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], VisionViewsHistoryUpdateManyWithoutUserInput);
exports.VisionViewsHistoryUpdateManyWithoutUserInput = VisionViewsHistoryUpdateManyWithoutUserInput;
