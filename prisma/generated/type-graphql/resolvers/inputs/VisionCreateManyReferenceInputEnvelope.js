"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateManyReferenceInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateManyReferenceInput_1 = require("../inputs/VisionCreateManyReferenceInput");
let VisionCreateManyReferenceInputEnvelope = class VisionCreateManyReferenceInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateManyReferenceInput_1.VisionCreateManyReferenceInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateManyReferenceInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VisionCreateManyReferenceInputEnvelope.prototype, "skipDuplicates", void 0);
VisionCreateManyReferenceInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateManyReferenceInputEnvelope", {
        isAbstract: true
    })
], VisionCreateManyReferenceInputEnvelope);
exports.VisionCreateManyReferenceInputEnvelope = VisionCreateManyReferenceInputEnvelope;
