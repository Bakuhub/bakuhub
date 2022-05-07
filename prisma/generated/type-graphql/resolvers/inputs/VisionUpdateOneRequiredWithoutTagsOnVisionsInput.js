"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateOneRequiredWithoutTagsOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateOrConnectWithoutTagsOnVisionsInput_1 = require("../inputs/VisionCreateOrConnectWithoutTagsOnVisionsInput");
const VisionCreateWithoutTagsOnVisionsInput_1 = require("../inputs/VisionCreateWithoutTagsOnVisionsInput");
const VisionUpdateWithoutTagsOnVisionsInput_1 = require("../inputs/VisionUpdateWithoutTagsOnVisionsInput");
const VisionUpsertWithoutTagsOnVisionsInput_1 = require("../inputs/VisionUpsertWithoutTagsOnVisionsInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateOneRequiredWithoutTagsOnVisionsInput = class VisionUpdateOneRequiredWithoutTagsOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutTagsOnVisionsInput_1.VisionCreateWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutTagsOnVisionsInput_1.VisionCreateWithoutTagsOnVisionsInput)
], VisionUpdateOneRequiredWithoutTagsOnVisionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutTagsOnVisionsInput_1.VisionCreateOrConnectWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateOrConnectWithoutTagsOnVisionsInput_1.VisionCreateOrConnectWithoutTagsOnVisionsInput)
], VisionUpdateOneRequiredWithoutTagsOnVisionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpsertWithoutTagsOnVisionsInput_1.VisionUpsertWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpsertWithoutTagsOnVisionsInput_1.VisionUpsertWithoutTagsOnVisionsInput)
], VisionUpdateOneRequiredWithoutTagsOnVisionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpdateOneRequiredWithoutTagsOnVisionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutTagsOnVisionsInput_1.VisionUpdateWithoutTagsOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutTagsOnVisionsInput_1.VisionUpdateWithoutTagsOnVisionsInput)
], VisionUpdateOneRequiredWithoutTagsOnVisionsInput.prototype, "update", void 0);
VisionUpdateOneRequiredWithoutTagsOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateOneRequiredWithoutTagsOnVisionsInput", {
        isAbstract: true
    })
], VisionUpdateOneRequiredWithoutTagsOnVisionsInput);
exports.VisionUpdateOneRequiredWithoutTagsOnVisionsInput = VisionUpdateOneRequiredWithoutTagsOnVisionsInput;
