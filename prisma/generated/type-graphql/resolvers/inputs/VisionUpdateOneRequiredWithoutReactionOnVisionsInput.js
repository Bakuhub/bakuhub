"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateOneRequiredWithoutReactionOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateOrConnectWithoutReactionOnVisionsInput_1 = require("../inputs/VisionCreateOrConnectWithoutReactionOnVisionsInput");
const VisionCreateWithoutReactionOnVisionsInput_1 = require("../inputs/VisionCreateWithoutReactionOnVisionsInput");
const VisionUpdateWithoutReactionOnVisionsInput_1 = require("../inputs/VisionUpdateWithoutReactionOnVisionsInput");
const VisionUpsertWithoutReactionOnVisionsInput_1 = require("../inputs/VisionUpsertWithoutReactionOnVisionsInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateOneRequiredWithoutReactionOnVisionsInput = class VisionUpdateOneRequiredWithoutReactionOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutReactionOnVisionsInput_1.VisionCreateWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutReactionOnVisionsInput_1.VisionCreateWithoutReactionOnVisionsInput)
], VisionUpdateOneRequiredWithoutReactionOnVisionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutReactionOnVisionsInput_1.VisionCreateOrConnectWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateOrConnectWithoutReactionOnVisionsInput_1.VisionCreateOrConnectWithoutReactionOnVisionsInput)
], VisionUpdateOneRequiredWithoutReactionOnVisionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpsertWithoutReactionOnVisionsInput_1.VisionUpsertWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpsertWithoutReactionOnVisionsInput_1.VisionUpsertWithoutReactionOnVisionsInput)
], VisionUpdateOneRequiredWithoutReactionOnVisionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpdateOneRequiredWithoutReactionOnVisionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutReactionOnVisionsInput_1.VisionUpdateWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutReactionOnVisionsInput_1.VisionUpdateWithoutReactionOnVisionsInput)
], VisionUpdateOneRequiredWithoutReactionOnVisionsInput.prototype, "update", void 0);
VisionUpdateOneRequiredWithoutReactionOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateOneRequiredWithoutReactionOnVisionsInput", {
        isAbstract: true
    })
], VisionUpdateOneRequiredWithoutReactionOnVisionsInput);
exports.VisionUpdateOneRequiredWithoutReactionOnVisionsInput = VisionUpdateOneRequiredWithoutReactionOnVisionsInput;
