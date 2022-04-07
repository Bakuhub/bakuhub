"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpsertWithWhereUniqueWithoutPrevVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutPrevVisionInput_1 = require("../inputs/VisionCreateWithoutPrevVisionInput");
const VisionUpdateWithoutPrevVisionInput_1 = require("../inputs/VisionUpdateWithoutPrevVisionInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpsertWithWhereUniqueWithoutPrevVisionInput = class VisionUpsertWithWhereUniqueWithoutPrevVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpsertWithWhereUniqueWithoutPrevVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutPrevVisionInput_1.VisionUpdateWithoutPrevVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutPrevVisionInput_1.VisionUpdateWithoutPrevVisionInput)
], VisionUpsertWithWhereUniqueWithoutPrevVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutPrevVisionInput_1.VisionCreateWithoutPrevVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutPrevVisionInput_1.VisionCreateWithoutPrevVisionInput)
], VisionUpsertWithWhereUniqueWithoutPrevVisionInput.prototype, "create", void 0);
VisionUpsertWithWhereUniqueWithoutPrevVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpsertWithWhereUniqueWithoutPrevVisionInput", {
        isAbstract: true
    })
], VisionUpsertWithWhereUniqueWithoutPrevVisionInput);
exports.VisionUpsertWithWhereUniqueWithoutPrevVisionInput = VisionUpsertWithWhereUniqueWithoutPrevVisionInput;
