"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpsertWithoutThreadsOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutThreadsOnVisionInput_1 = require("../inputs/VisionCreateWithoutThreadsOnVisionInput");
const VisionUpdateWithoutThreadsOnVisionInput_1 = require("../inputs/VisionUpdateWithoutThreadsOnVisionInput");
let VisionUpsertWithoutThreadsOnVisionInput = class VisionUpsertWithoutThreadsOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutThreadsOnVisionInput_1.VisionUpdateWithoutThreadsOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutThreadsOnVisionInput_1.VisionUpdateWithoutThreadsOnVisionInput)
], VisionUpsertWithoutThreadsOnVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutThreadsOnVisionInput_1.VisionCreateWithoutThreadsOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutThreadsOnVisionInput_1.VisionCreateWithoutThreadsOnVisionInput)
], VisionUpsertWithoutThreadsOnVisionInput.prototype, "create", void 0);
VisionUpsertWithoutThreadsOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpsertWithoutThreadsOnVisionInput", {
        isAbstract: true
    })
], VisionUpsertWithoutThreadsOnVisionInput);
exports.VisionUpsertWithoutThreadsOnVisionInput = VisionUpsertWithoutThreadsOnVisionInput;
