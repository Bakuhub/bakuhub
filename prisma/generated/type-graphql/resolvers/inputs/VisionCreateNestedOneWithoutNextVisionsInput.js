"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateNestedOneWithoutNextVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateOrConnectWithoutNextVisionsInput_1 = require("../inputs/VisionCreateOrConnectWithoutNextVisionsInput");
const VisionCreateWithoutNextVisionsInput_1 = require("../inputs/VisionCreateWithoutNextVisionsInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateNestedOneWithoutNextVisionsInput = class VisionCreateNestedOneWithoutNextVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutNextVisionsInput_1.VisionCreateWithoutNextVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutNextVisionsInput_1.VisionCreateWithoutNextVisionsInput)
], VisionCreateNestedOneWithoutNextVisionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutNextVisionsInput_1.VisionCreateOrConnectWithoutNextVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateOrConnectWithoutNextVisionsInput_1.VisionCreateOrConnectWithoutNextVisionsInput)
], VisionCreateNestedOneWithoutNextVisionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateNestedOneWithoutNextVisionsInput.prototype, "connect", void 0);
VisionCreateNestedOneWithoutNextVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateNestedOneWithoutNextVisionsInput", {
        isAbstract: true
    })
], VisionCreateNestedOneWithoutNextVisionsInput);
exports.VisionCreateNestedOneWithoutNextVisionsInput = VisionCreateNestedOneWithoutNextVisionsInput;
