"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateWithWhereUniqueWithoutPrevVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionUpdateWithoutPrevVisionInput_1 = require("../inputs/VisionUpdateWithoutPrevVisionInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateWithWhereUniqueWithoutPrevVisionInput = class VisionUpdateWithWhereUniqueWithoutPrevVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpdateWithWhereUniqueWithoutPrevVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutPrevVisionInput_1.VisionUpdateWithoutPrevVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutPrevVisionInput_1.VisionUpdateWithoutPrevVisionInput)
], VisionUpdateWithWhereUniqueWithoutPrevVisionInput.prototype, "data", void 0);
VisionUpdateWithWhereUniqueWithoutPrevVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateWithWhereUniqueWithoutPrevVisionInput", {
        isAbstract: true
    })
], VisionUpdateWithWhereUniqueWithoutPrevVisionInput);
exports.VisionUpdateWithWhereUniqueWithoutPrevVisionInput = VisionUpdateWithWhereUniqueWithoutPrevVisionInput;
