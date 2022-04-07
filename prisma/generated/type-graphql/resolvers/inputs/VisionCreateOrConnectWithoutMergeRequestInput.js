"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateOrConnectWithoutMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutMergeRequestInput_1 = require("../inputs/VisionCreateWithoutMergeRequestInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateOrConnectWithoutMergeRequestInput = class VisionCreateOrConnectWithoutMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateOrConnectWithoutMergeRequestInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutMergeRequestInput_1.VisionCreateWithoutMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutMergeRequestInput_1.VisionCreateWithoutMergeRequestInput)
], VisionCreateOrConnectWithoutMergeRequestInput.prototype, "create", void 0);
VisionCreateOrConnectWithoutMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateOrConnectWithoutMergeRequestInput", {
        isAbstract: true
    })
], VisionCreateOrConnectWithoutMergeRequestInput);
exports.VisionCreateOrConnectWithoutMergeRequestInput = VisionCreateOrConnectWithoutMergeRequestInput;
