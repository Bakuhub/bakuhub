"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateOneRequiredWithoutMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateOrConnectWithoutMergeRequestInput_1 = require("../inputs/VisionCreateOrConnectWithoutMergeRequestInput");
const VisionCreateWithoutMergeRequestInput_1 = require("../inputs/VisionCreateWithoutMergeRequestInput");
const VisionUpdateWithoutMergeRequestInput_1 = require("../inputs/VisionUpdateWithoutMergeRequestInput");
const VisionUpsertWithoutMergeRequestInput_1 = require("../inputs/VisionUpsertWithoutMergeRequestInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateOneRequiredWithoutMergeRequestInput = class VisionUpdateOneRequiredWithoutMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutMergeRequestInput_1.VisionCreateWithoutMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutMergeRequestInput_1.VisionCreateWithoutMergeRequestInput)
], VisionUpdateOneRequiredWithoutMergeRequestInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutMergeRequestInput_1.VisionCreateOrConnectWithoutMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateOrConnectWithoutMergeRequestInput_1.VisionCreateOrConnectWithoutMergeRequestInput)
], VisionUpdateOneRequiredWithoutMergeRequestInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpsertWithoutMergeRequestInput_1.VisionUpsertWithoutMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpsertWithoutMergeRequestInput_1.VisionUpsertWithoutMergeRequestInput)
], VisionUpdateOneRequiredWithoutMergeRequestInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpdateOneRequiredWithoutMergeRequestInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutMergeRequestInput_1.VisionUpdateWithoutMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutMergeRequestInput_1.VisionUpdateWithoutMergeRequestInput)
], VisionUpdateOneRequiredWithoutMergeRequestInput.prototype, "update", void 0);
VisionUpdateOneRequiredWithoutMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateOneRequiredWithoutMergeRequestInput", {
        isAbstract: true
    })
], VisionUpdateOneRequiredWithoutMergeRequestInput);
exports.VisionUpdateOneRequiredWithoutMergeRequestInput = VisionUpdateOneRequiredWithoutMergeRequestInput;
