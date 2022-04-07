"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateOrConnectWithoutThreadsOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutThreadsOnVisionInput_1 = require("../inputs/VisionCreateWithoutThreadsOnVisionInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateOrConnectWithoutThreadsOnVisionInput = class VisionCreateOrConnectWithoutThreadsOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateOrConnectWithoutThreadsOnVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutThreadsOnVisionInput_1.VisionCreateWithoutThreadsOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutThreadsOnVisionInput_1.VisionCreateWithoutThreadsOnVisionInput)
], VisionCreateOrConnectWithoutThreadsOnVisionInput.prototype, "create", void 0);
VisionCreateOrConnectWithoutThreadsOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateOrConnectWithoutThreadsOnVisionInput", {
        isAbstract: true
    })
], VisionCreateOrConnectWithoutThreadsOnVisionInput);
exports.VisionCreateOrConnectWithoutThreadsOnVisionInput = VisionCreateOrConnectWithoutThreadsOnVisionInput;
