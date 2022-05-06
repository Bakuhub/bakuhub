"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateOrConnectWithoutReferenceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutReferenceInput_1 = require("../inputs/VisionCreateWithoutReferenceInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateOrConnectWithoutReferenceInput = class VisionCreateOrConnectWithoutReferenceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateOrConnectWithoutReferenceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutReferenceInput_1.VisionCreateWithoutReferenceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutReferenceInput_1.VisionCreateWithoutReferenceInput)
], VisionCreateOrConnectWithoutReferenceInput.prototype, "create", void 0);
VisionCreateOrConnectWithoutReferenceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateOrConnectWithoutReferenceInput", {
        isAbstract: true
    })
], VisionCreateOrConnectWithoutReferenceInput);
exports.VisionCreateOrConnectWithoutReferenceInput = VisionCreateOrConnectWithoutReferenceInput;
