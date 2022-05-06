"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateOrConnectWithoutVotesOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutVotesOnVisionInput_1 = require("../inputs/VisionCreateWithoutVotesOnVisionInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateOrConnectWithoutVotesOnVisionInput = class VisionCreateOrConnectWithoutVotesOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateOrConnectWithoutVotesOnVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutVotesOnVisionInput_1.VisionCreateWithoutVotesOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutVotesOnVisionInput_1.VisionCreateWithoutVotesOnVisionInput)
], VisionCreateOrConnectWithoutVotesOnVisionInput.prototype, "create", void 0);
VisionCreateOrConnectWithoutVotesOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateOrConnectWithoutVotesOnVisionInput", {
        isAbstract: true
    })
], VisionCreateOrConnectWithoutVotesOnVisionInput);
exports.VisionCreateOrConnectWithoutVotesOnVisionInput = VisionCreateOrConnectWithoutVotesOnVisionInput;
