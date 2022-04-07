"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateManyAuthorInputEnvelope_1 = require("../inputs/VisionCreateManyAuthorInputEnvelope");
const VisionCreateOrConnectWithoutAuthorInput_1 = require("../inputs/VisionCreateOrConnectWithoutAuthorInput");
const VisionCreateWithoutAuthorInput_1 = require("../inputs/VisionCreateWithoutAuthorInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateNestedManyWithoutAuthorInput = class VisionCreateNestedManyWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateWithoutAuthorInput_1.VisionCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutAuthorInput_1.VisionCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateManyAuthorInputEnvelope_1.VisionCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateManyAuthorInputEnvelope_1.VisionCreateManyAuthorInputEnvelope)
], VisionCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
VisionCreateNestedManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateNestedManyWithoutAuthorInput", {
        isAbstract: true
    })
], VisionCreateNestedManyWithoutAuthorInput);
exports.VisionCreateNestedManyWithoutAuthorInput = VisionCreateNestedManyWithoutAuthorInput;
