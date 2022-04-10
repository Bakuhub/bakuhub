"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateOneRequiredWithoutVotesOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateOrConnectWithoutVotesOnVisionInput_1 = require("../inputs/VisionCreateOrConnectWithoutVotesOnVisionInput");
const VisionCreateWithoutVotesOnVisionInput_1 = require("../inputs/VisionCreateWithoutVotesOnVisionInput");
const VisionUpdateWithoutVotesOnVisionInput_1 = require("../inputs/VisionUpdateWithoutVotesOnVisionInput");
const VisionUpsertWithoutVotesOnVisionInput_1 = require("../inputs/VisionUpsertWithoutVotesOnVisionInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateOneRequiredWithoutVotesOnVisionInput = class VisionUpdateOneRequiredWithoutVotesOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutVotesOnVisionInput_1.VisionCreateWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutVotesOnVisionInput_1.VisionCreateWithoutVotesOnVisionInput)
], VisionUpdateOneRequiredWithoutVotesOnVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutVotesOnVisionInput_1.VisionCreateOrConnectWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateOrConnectWithoutVotesOnVisionInput_1.VisionCreateOrConnectWithoutVotesOnVisionInput)
], VisionUpdateOneRequiredWithoutVotesOnVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpsertWithoutVotesOnVisionInput_1.VisionUpsertWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpsertWithoutVotesOnVisionInput_1.VisionUpsertWithoutVotesOnVisionInput)
], VisionUpdateOneRequiredWithoutVotesOnVisionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpdateOneRequiredWithoutVotesOnVisionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutVotesOnVisionInput_1.VisionUpdateWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutVotesOnVisionInput_1.VisionUpdateWithoutVotesOnVisionInput)
], VisionUpdateOneRequiredWithoutVotesOnVisionInput.prototype, "update", void 0);
VisionUpdateOneRequiredWithoutVotesOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateOneRequiredWithoutVotesOnVisionInput", {
        isAbstract: true
    })
], VisionUpdateOneRequiredWithoutVotesOnVisionInput);
exports.VisionUpdateOneRequiredWithoutVotesOnVisionInput = VisionUpdateOneRequiredWithoutVotesOnVisionInput;
