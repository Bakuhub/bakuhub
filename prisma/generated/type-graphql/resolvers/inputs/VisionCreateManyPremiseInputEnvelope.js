"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateManyPremiseInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateManyPremiseInput_1 = require("../inputs/VisionCreateManyPremiseInput");
let VisionCreateManyPremiseInputEnvelope = class VisionCreateManyPremiseInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateManyPremiseInput_1.VisionCreateManyPremiseInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateManyPremiseInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VisionCreateManyPremiseInputEnvelope.prototype, "skipDuplicates", void 0);
VisionCreateManyPremiseInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateManyPremiseInputEnvelope", {
        isAbstract: true
    })
], VisionCreateManyPremiseInputEnvelope);
exports.VisionCreateManyPremiseInputEnvelope = VisionCreateManyPremiseInputEnvelope;
