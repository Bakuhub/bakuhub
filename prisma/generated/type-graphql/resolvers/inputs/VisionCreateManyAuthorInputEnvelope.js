"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateManyAuthorInput_1 = require("../inputs/VisionCreateManyAuthorInput");
let VisionCreateManyAuthorInputEnvelope = class VisionCreateManyAuthorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateManyAuthorInput_1.VisionCreateManyAuthorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateManyAuthorInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VisionCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
VisionCreateManyAuthorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateManyAuthorInputEnvelope", {
        isAbstract: true
    })
], VisionCreateManyAuthorInputEnvelope);
exports.VisionCreateManyAuthorInputEnvelope = VisionCreateManyAuthorInputEnvelope;
