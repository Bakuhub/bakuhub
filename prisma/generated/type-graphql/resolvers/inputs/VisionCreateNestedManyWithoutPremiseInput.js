"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateNestedManyWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateManyPremiseInputEnvelope_1 = require("../inputs/VisionCreateManyPremiseInputEnvelope");
const VisionCreateOrConnectWithoutPremiseInput_1 = require("../inputs/VisionCreateOrConnectWithoutPremiseInput");
const VisionCreateWithoutPremiseInput_1 = require("../inputs/VisionCreateWithoutPremiseInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateNestedManyWithoutPremiseInput = class VisionCreateNestedManyWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateWithoutPremiseInput_1.VisionCreateWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateNestedManyWithoutPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutPremiseInput_1.VisionCreateOrConnectWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateNestedManyWithoutPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateManyPremiseInputEnvelope_1.VisionCreateManyPremiseInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateManyPremiseInputEnvelope_1.VisionCreateManyPremiseInputEnvelope)
], VisionCreateNestedManyWithoutPremiseInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionCreateNestedManyWithoutPremiseInput.prototype, "connect", void 0);
VisionCreateNestedManyWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateNestedManyWithoutPremiseInput", {
        isAbstract: true
    })
], VisionCreateNestedManyWithoutPremiseInput);
exports.VisionCreateNestedManyWithoutPremiseInput = VisionCreateNestedManyWithoutPremiseInput;
