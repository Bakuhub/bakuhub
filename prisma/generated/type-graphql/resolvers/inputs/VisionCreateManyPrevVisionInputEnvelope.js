"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateManyPrevVisionInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateManyPrevVisionInput_1 = require("../inputs/VisionCreateManyPrevVisionInput");
let VisionCreateManyPrevVisionInputEnvelope = class VisionCreateManyPrevVisionInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateManyPrevVisionInput_1.VisionCreateManyPrevVisionInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateManyPrevVisionInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VisionCreateManyPrevVisionInputEnvelope.prototype, "skipDuplicates", void 0);
VisionCreateManyPrevVisionInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateManyPrevVisionInputEnvelope", {
        isAbstract: true
    })
], VisionCreateManyPrevVisionInputEnvelope);
exports.VisionCreateManyPrevVisionInputEnvelope = VisionCreateManyPrevVisionInputEnvelope;
