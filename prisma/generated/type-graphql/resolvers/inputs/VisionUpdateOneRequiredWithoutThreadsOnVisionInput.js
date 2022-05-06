"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateOneRequiredWithoutThreadsOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateOrConnectWithoutThreadsOnVisionInput_1 = require("../inputs/VisionCreateOrConnectWithoutThreadsOnVisionInput");
const VisionCreateWithoutThreadsOnVisionInput_1 = require("../inputs/VisionCreateWithoutThreadsOnVisionInput");
const VisionUpdateWithoutThreadsOnVisionInput_1 = require("../inputs/VisionUpdateWithoutThreadsOnVisionInput");
const VisionUpsertWithoutThreadsOnVisionInput_1 = require("../inputs/VisionUpsertWithoutThreadsOnVisionInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateOneRequiredWithoutThreadsOnVisionInput = class VisionUpdateOneRequiredWithoutThreadsOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutThreadsOnVisionInput_1.VisionCreateWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutThreadsOnVisionInput_1.VisionCreateWithoutThreadsOnVisionInput)
], VisionUpdateOneRequiredWithoutThreadsOnVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutThreadsOnVisionInput_1.VisionCreateOrConnectWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateOrConnectWithoutThreadsOnVisionInput_1.VisionCreateOrConnectWithoutThreadsOnVisionInput)
], VisionUpdateOneRequiredWithoutThreadsOnVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpsertWithoutThreadsOnVisionInput_1.VisionUpsertWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpsertWithoutThreadsOnVisionInput_1.VisionUpsertWithoutThreadsOnVisionInput)
], VisionUpdateOneRequiredWithoutThreadsOnVisionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpdateOneRequiredWithoutThreadsOnVisionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutThreadsOnVisionInput_1.VisionUpdateWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutThreadsOnVisionInput_1.VisionUpdateWithoutThreadsOnVisionInput)
], VisionUpdateOneRequiredWithoutThreadsOnVisionInput.prototype, "update", void 0);
VisionUpdateOneRequiredWithoutThreadsOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateOneRequiredWithoutThreadsOnVisionInput", {
        isAbstract: true
    })
], VisionUpdateOneRequiredWithoutThreadsOnVisionInput);
exports.VisionUpdateOneRequiredWithoutThreadsOnVisionInput = VisionUpdateOneRequiredWithoutThreadsOnVisionInput;
