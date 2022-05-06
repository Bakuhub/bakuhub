"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateNestedOneWithoutVotesOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateOrConnectWithoutVotesOnVisionInput_1 = require("../inputs/VisionCreateOrConnectWithoutVotesOnVisionInput");
const VisionCreateWithoutVotesOnVisionInput_1 = require("../inputs/VisionCreateWithoutVotesOnVisionInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateNestedOneWithoutVotesOnVisionInput = class VisionCreateNestedOneWithoutVotesOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutVotesOnVisionInput_1.VisionCreateWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutVotesOnVisionInput_1.VisionCreateWithoutVotesOnVisionInput)
], VisionCreateNestedOneWithoutVotesOnVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutVotesOnVisionInput_1.VisionCreateOrConnectWithoutVotesOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateOrConnectWithoutVotesOnVisionInput_1.VisionCreateOrConnectWithoutVotesOnVisionInput)
], VisionCreateNestedOneWithoutVotesOnVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateNestedOneWithoutVotesOnVisionInput.prototype, "connect", void 0);
VisionCreateNestedOneWithoutVotesOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateNestedOneWithoutVotesOnVisionInput", {
        isAbstract: true
    })
], VisionCreateNestedOneWithoutVotesOnVisionInput);
exports.VisionCreateNestedOneWithoutVotesOnVisionInput = VisionCreateNestedOneWithoutVotesOnVisionInput;
