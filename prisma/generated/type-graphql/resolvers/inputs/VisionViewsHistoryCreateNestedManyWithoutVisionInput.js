"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryCreateNestedManyWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCreateManyVisionInputEnvelope_1 = require("../inputs/VisionViewsHistoryCreateManyVisionInputEnvelope");
const VisionViewsHistoryCreateOrConnectWithoutVisionInput_1 = require("../inputs/VisionViewsHistoryCreateOrConnectWithoutVisionInput");
const VisionViewsHistoryCreateWithoutVisionInput_1 = require("../inputs/VisionViewsHistoryCreateWithoutVisionInput");
const VisionViewsHistoryWhereUniqueInput_1 = require("../inputs/VisionViewsHistoryWhereUniqueInput");
let VisionViewsHistoryCreateNestedManyWithoutVisionInput = class VisionViewsHistoryCreateNestedManyWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryCreateWithoutVisionInput_1.VisionViewsHistoryCreateWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryCreateNestedManyWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryCreateOrConnectWithoutVisionInput_1.VisionViewsHistoryCreateOrConnectWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryCreateNestedManyWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCreateManyVisionInputEnvelope_1.VisionViewsHistoryCreateManyVisionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCreateManyVisionInputEnvelope_1.VisionViewsHistoryCreateManyVisionInputEnvelope)
], VisionViewsHistoryCreateNestedManyWithoutVisionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryCreateNestedManyWithoutVisionInput.prototype, "connect", void 0);
VisionViewsHistoryCreateNestedManyWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryCreateNestedManyWithoutVisionInput", {
        isAbstract: true
    })
], VisionViewsHistoryCreateNestedManyWithoutVisionInput);
exports.VisionViewsHistoryCreateNestedManyWithoutVisionInput = VisionViewsHistoryCreateNestedManyWithoutVisionInput;
