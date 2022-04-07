"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutAuthorInput_1 = require("../inputs/VisionCreateWithoutAuthorInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionCreateOrConnectWithoutAuthorInput = class VisionCreateOrConnectWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutAuthorInput_1.VisionCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutAuthorInput_1.VisionCreateWithoutAuthorInput)
], VisionCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
VisionCreateOrConnectWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionCreateOrConnectWithoutAuthorInput", {
        isAbstract: true
    })
], VisionCreateOrConnectWithoutAuthorInput);
exports.VisionCreateOrConnectWithoutAuthorInput = VisionCreateOrConnectWithoutAuthorInput;
