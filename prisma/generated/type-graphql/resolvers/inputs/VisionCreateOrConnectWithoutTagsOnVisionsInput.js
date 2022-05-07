"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateOrConnectWithoutTagsOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutTagsOnVisionsInput_1 = require("../inputs/VisionCreateWithoutTagsOnVisionsInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateOrConnectWithoutTagsOnVisionsInput = class VisionCreateOrConnectWithoutTagsOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateOrConnectWithoutTagsOnVisionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutTagsOnVisionsInput_1.VisionCreateWithoutTagsOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutTagsOnVisionsInput_1.VisionCreateWithoutTagsOnVisionsInput)
], VisionCreateOrConnectWithoutTagsOnVisionsInput.prototype, "create", void 0);
VisionCreateOrConnectWithoutTagsOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateOrConnectWithoutTagsOnVisionsInput", {
        isAbstract: true
    })
], VisionCreateOrConnectWithoutTagsOnVisionsInput);
exports.VisionCreateOrConnectWithoutTagsOnVisionsInput = VisionCreateOrConnectWithoutTagsOnVisionsInput;
