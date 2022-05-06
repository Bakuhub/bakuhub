"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateOrConnectWithoutReactionOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutReactionOnVisionsInput_1 = require("../inputs/VisionCreateWithoutReactionOnVisionsInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateOrConnectWithoutReactionOnVisionsInput = class VisionCreateOrConnectWithoutReactionOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateOrConnectWithoutReactionOnVisionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutReactionOnVisionsInput_1.VisionCreateWithoutReactionOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutReactionOnVisionsInput_1.VisionCreateWithoutReactionOnVisionsInput)
], VisionCreateOrConnectWithoutReactionOnVisionsInput.prototype, "create", void 0);
VisionCreateOrConnectWithoutReactionOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateOrConnectWithoutReactionOnVisionsInput", {
        isAbstract: true
    })
], VisionCreateOrConnectWithoutReactionOnVisionsInput);
exports.VisionCreateOrConnectWithoutReactionOnVisionsInput = VisionCreateOrConnectWithoutReactionOnVisionsInput;
