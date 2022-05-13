"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryUpdateManyWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCreateManyVisionInputEnvelope_1 = require("../inputs/VisionViewsHistoryCreateManyVisionInputEnvelope");
const VisionViewsHistoryCreateOrConnectWithoutVisionInput_1 = require("../inputs/VisionViewsHistoryCreateOrConnectWithoutVisionInput");
const VisionViewsHistoryCreateWithoutVisionInput_1 = require("../inputs/VisionViewsHistoryCreateWithoutVisionInput");
const VisionViewsHistoryScalarWhereInput_1 = require("../inputs/VisionViewsHistoryScalarWhereInput");
const VisionViewsHistoryUpdateManyWithWhereWithoutVisionInput_1 = require("../inputs/VisionViewsHistoryUpdateManyWithWhereWithoutVisionInput");
const VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput_1 = require("../inputs/VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput");
const VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput_1 = require("../inputs/VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput");
const VisionViewsHistoryWhereUniqueInput_1 = require("../inputs/VisionViewsHistoryWhereUniqueInput");
let VisionViewsHistoryUpdateManyWithoutVisionInput = class VisionViewsHistoryUpdateManyWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryCreateWithoutVisionInput_1.VisionViewsHistoryCreateWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryCreateOrConnectWithoutVisionInput_1.VisionViewsHistoryCreateOrConnectWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput_1.VisionViewsHistoryUpsertWithWhereUniqueWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutVisionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCreateManyVisionInputEnvelope_1.VisionViewsHistoryCreateManyVisionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCreateManyVisionInputEnvelope_1.VisionViewsHistoryCreateManyVisionInputEnvelope)
], VisionViewsHistoryUpdateManyWithoutVisionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutVisionInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutVisionInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutVisionInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutVisionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput_1.VisionViewsHistoryUpdateWithWhereUniqueWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryUpdateManyWithWhereWithoutVisionInput_1.VisionViewsHistoryUpdateManyWithWhereWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutVisionInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryScalarWhereInput_1.VisionViewsHistoryScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryUpdateManyWithoutVisionInput.prototype, "deleteMany", void 0);
VisionViewsHistoryUpdateManyWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryUpdateManyWithoutVisionInput", {
        isAbstract: true
    })
], VisionViewsHistoryUpdateManyWithoutVisionInput);
exports.VisionViewsHistoryUpdateManyWithoutVisionInput = VisionViewsHistoryUpdateManyWithoutVisionInput;
