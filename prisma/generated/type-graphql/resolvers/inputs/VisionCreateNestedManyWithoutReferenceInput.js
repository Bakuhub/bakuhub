"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateNestedManyWithoutReferenceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateManyReferenceInputEnvelope_1 = require("../inputs/VisionCreateManyReferenceInputEnvelope");
const VisionCreateOrConnectWithoutReferenceInput_1 = require("../inputs/VisionCreateOrConnectWithoutReferenceInput");
const VisionCreateWithoutReferenceInput_1 = require("../inputs/VisionCreateWithoutReferenceInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateNestedManyWithoutReferenceInput = class VisionCreateNestedManyWithoutReferenceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateWithoutReferenceInput_1.VisionCreateWithoutReferenceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateNestedManyWithoutReferenceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutReferenceInput_1.VisionCreateOrConnectWithoutReferenceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateNestedManyWithoutReferenceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateManyReferenceInputEnvelope_1.VisionCreateManyReferenceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateManyReferenceInputEnvelope_1.VisionCreateManyReferenceInputEnvelope)
], VisionCreateNestedManyWithoutReferenceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateNestedManyWithoutReferenceInput.prototype, "connect", void 0);
VisionCreateNestedManyWithoutReferenceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateNestedManyWithoutReferenceInput", {
        isAbstract: true
    })
], VisionCreateNestedManyWithoutReferenceInput);
exports.VisionCreateNestedManyWithoutReferenceInput = VisionCreateNestedManyWithoutReferenceInput;
