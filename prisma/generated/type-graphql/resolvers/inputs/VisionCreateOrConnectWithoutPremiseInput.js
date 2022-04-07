"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateOrConnectWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutPremiseInput_1 = require("../inputs/VisionCreateWithoutPremiseInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateOrConnectWithoutPremiseInput = class VisionCreateOrConnectWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateOrConnectWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutPremiseInput_1.VisionCreateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutPremiseInput_1.VisionCreateWithoutPremiseInput)
], VisionCreateOrConnectWithoutPremiseInput.prototype, "create", void 0);
VisionCreateOrConnectWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateOrConnectWithoutPremiseInput", {
        isAbstract: true
    })
], VisionCreateOrConnectWithoutPremiseInput);
exports.VisionCreateOrConnectWithoutPremiseInput = VisionCreateOrConnectWithoutPremiseInput;
