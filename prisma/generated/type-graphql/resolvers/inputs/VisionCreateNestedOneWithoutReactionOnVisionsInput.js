"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateNestedOneWithoutReactionOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateOrConnectWithoutReactionOnVisionsInput_1 = require("../inputs/VisionCreateOrConnectWithoutReactionOnVisionsInput");
const VisionCreateWithoutReactionOnVisionsInput_1 = require("../inputs/VisionCreateWithoutReactionOnVisionsInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateNestedOneWithoutReactionOnVisionsInput = class VisionCreateNestedOneWithoutReactionOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutReactionOnVisionsInput_1.VisionCreateWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutReactionOnVisionsInput_1.VisionCreateWithoutReactionOnVisionsInput)
], VisionCreateNestedOneWithoutReactionOnVisionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutReactionOnVisionsInput_1.VisionCreateOrConnectWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateOrConnectWithoutReactionOnVisionsInput_1.VisionCreateOrConnectWithoutReactionOnVisionsInput)
], VisionCreateNestedOneWithoutReactionOnVisionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateNestedOneWithoutReactionOnVisionsInput.prototype, "connect", void 0);
VisionCreateNestedOneWithoutReactionOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateNestedOneWithoutReactionOnVisionsInput", {
        isAbstract: true
    })
], VisionCreateNestedOneWithoutReactionOnVisionsInput);
exports.VisionCreateNestedOneWithoutReactionOnVisionsInput = VisionCreateNestedOneWithoutReactionOnVisionsInput;
