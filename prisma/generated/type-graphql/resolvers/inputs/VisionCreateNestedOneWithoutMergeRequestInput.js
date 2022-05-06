"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateNestedOneWithoutMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateOrConnectWithoutMergeRequestInput_1 = require("../inputs/VisionCreateOrConnectWithoutMergeRequestInput");
const VisionCreateWithoutMergeRequestInput_1 = require("../inputs/VisionCreateWithoutMergeRequestInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateNestedOneWithoutMergeRequestInput = class VisionCreateNestedOneWithoutMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutMergeRequestInput_1.VisionCreateWithoutMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutMergeRequestInput_1.VisionCreateWithoutMergeRequestInput)
], VisionCreateNestedOneWithoutMergeRequestInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutMergeRequestInput_1.VisionCreateOrConnectWithoutMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateOrConnectWithoutMergeRequestInput_1.VisionCreateOrConnectWithoutMergeRequestInput)
], VisionCreateNestedOneWithoutMergeRequestInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateNestedOneWithoutMergeRequestInput.prototype, "connect", void 0);
VisionCreateNestedOneWithoutMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateNestedOneWithoutMergeRequestInput", {
        isAbstract: true
    })
], VisionCreateNestedOneWithoutMergeRequestInput);
exports.VisionCreateNestedOneWithoutMergeRequestInput = VisionCreateNestedOneWithoutMergeRequestInput;
