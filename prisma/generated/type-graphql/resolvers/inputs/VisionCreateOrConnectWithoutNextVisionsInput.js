"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateOrConnectWithoutNextVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutNextVisionsInput_1 = require("../inputs/VisionCreateWithoutNextVisionsInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateOrConnectWithoutNextVisionsInput = class VisionCreateOrConnectWithoutNextVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateOrConnectWithoutNextVisionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutNextVisionsInput_1.VisionCreateWithoutNextVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutNextVisionsInput_1.VisionCreateWithoutNextVisionsInput)
], VisionCreateOrConnectWithoutNextVisionsInput.prototype, "create", void 0);
VisionCreateOrConnectWithoutNextVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateOrConnectWithoutNextVisionsInput", {
        isAbstract: true
    })
], VisionCreateOrConnectWithoutNextVisionsInput);
exports.VisionCreateOrConnectWithoutNextVisionsInput = VisionCreateOrConnectWithoutNextVisionsInput;
