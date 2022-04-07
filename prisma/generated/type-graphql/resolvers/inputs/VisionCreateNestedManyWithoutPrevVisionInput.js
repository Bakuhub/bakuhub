"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateNestedManyWithoutPrevVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateManyPrevVisionInputEnvelope_1 = require("../inputs/VisionCreateManyPrevVisionInputEnvelope");
const VisionCreateOrConnectWithoutPrevVisionInput_1 = require("../inputs/VisionCreateOrConnectWithoutPrevVisionInput");
const VisionCreateWithoutPrevVisionInput_1 = require("../inputs/VisionCreateWithoutPrevVisionInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateNestedManyWithoutPrevVisionInput = class VisionCreateNestedManyWithoutPrevVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateWithoutPrevVisionInput_1.VisionCreateWithoutPrevVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateNestedManyWithoutPrevVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutPrevVisionInput_1.VisionCreateOrConnectWithoutPrevVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateNestedManyWithoutPrevVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateManyPrevVisionInputEnvelope_1.VisionCreateManyPrevVisionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateManyPrevVisionInputEnvelope_1.VisionCreateManyPrevVisionInputEnvelope)
], VisionCreateNestedManyWithoutPrevVisionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateNestedManyWithoutPrevVisionInput.prototype, "connect", void 0);
VisionCreateNestedManyWithoutPrevVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateNestedManyWithoutPrevVisionInput", {
        isAbstract: true
    })
], VisionCreateNestedManyWithoutPrevVisionInput);
exports.VisionCreateNestedManyWithoutPrevVisionInput = VisionCreateNestedManyWithoutPrevVisionInput;
