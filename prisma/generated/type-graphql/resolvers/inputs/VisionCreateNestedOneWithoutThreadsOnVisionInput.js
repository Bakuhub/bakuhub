"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateNestedOneWithoutThreadsOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateOrConnectWithoutThreadsOnVisionInput_1 = require("../inputs/VisionCreateOrConnectWithoutThreadsOnVisionInput");
const VisionCreateWithoutThreadsOnVisionInput_1 = require("../inputs/VisionCreateWithoutThreadsOnVisionInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateNestedOneWithoutThreadsOnVisionInput = class VisionCreateNestedOneWithoutThreadsOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutThreadsOnVisionInput_1.VisionCreateWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutThreadsOnVisionInput_1.VisionCreateWithoutThreadsOnVisionInput)
], VisionCreateNestedOneWithoutThreadsOnVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutThreadsOnVisionInput_1.VisionCreateOrConnectWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateOrConnectWithoutThreadsOnVisionInput_1.VisionCreateOrConnectWithoutThreadsOnVisionInput)
], VisionCreateNestedOneWithoutThreadsOnVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateNestedOneWithoutThreadsOnVisionInput.prototype, "connect", void 0);
VisionCreateNestedOneWithoutThreadsOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateNestedOneWithoutThreadsOnVisionInput", {
        isAbstract: true
    })
], VisionCreateNestedOneWithoutThreadsOnVisionInput);
exports.VisionCreateNestedOneWithoutThreadsOnVisionInput = VisionCreateNestedOneWithoutThreadsOnVisionInput;
