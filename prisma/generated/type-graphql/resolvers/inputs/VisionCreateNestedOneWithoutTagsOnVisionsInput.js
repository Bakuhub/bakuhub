"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateNestedOneWithoutTagsOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateOrConnectWithoutTagsOnVisionsInput_1 = require("../inputs/VisionCreateOrConnectWithoutTagsOnVisionsInput");
const VisionCreateWithoutTagsOnVisionsInput_1 = require("../inputs/VisionCreateWithoutTagsOnVisionsInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateNestedOneWithoutTagsOnVisionsInput = class VisionCreateNestedOneWithoutTagsOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutTagsOnVisionsInput_1.VisionCreateWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutTagsOnVisionsInput_1.VisionCreateWithoutTagsOnVisionsInput)
], VisionCreateNestedOneWithoutTagsOnVisionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutTagsOnVisionsInput_1.VisionCreateOrConnectWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateOrConnectWithoutTagsOnVisionsInput_1.VisionCreateOrConnectWithoutTagsOnVisionsInput)
], VisionCreateNestedOneWithoutTagsOnVisionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateNestedOneWithoutTagsOnVisionsInput.prototype, "connect", void 0);
VisionCreateNestedOneWithoutTagsOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateNestedOneWithoutTagsOnVisionsInput", {
        isAbstract: true
    })
], VisionCreateNestedOneWithoutTagsOnVisionsInput);
exports.VisionCreateNestedOneWithoutTagsOnVisionsInput = VisionCreateNestedOneWithoutTagsOnVisionsInput;
