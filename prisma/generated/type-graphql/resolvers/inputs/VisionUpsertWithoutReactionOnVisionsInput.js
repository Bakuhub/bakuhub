"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpsertWithoutReactionOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutReactionOnVisionsInput_1 = require("../inputs/VisionCreateWithoutReactionOnVisionsInput");
const VisionUpdateWithoutReactionOnVisionsInput_1 = require("../inputs/VisionUpdateWithoutReactionOnVisionsInput");
let VisionUpsertWithoutReactionOnVisionsInput = class VisionUpsertWithoutReactionOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutReactionOnVisionsInput_1.VisionUpdateWithoutReactionOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutReactionOnVisionsInput_1.VisionUpdateWithoutReactionOnVisionsInput)
], VisionUpsertWithoutReactionOnVisionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutReactionOnVisionsInput_1.VisionCreateWithoutReactionOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutReactionOnVisionsInput_1.VisionCreateWithoutReactionOnVisionsInput)
], VisionUpsertWithoutReactionOnVisionsInput.prototype, "create", void 0);
VisionUpsertWithoutReactionOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpsertWithoutReactionOnVisionsInput", {
        isAbstract: true
    })
], VisionUpsertWithoutReactionOnVisionsInput);
exports.VisionUpsertWithoutReactionOnVisionsInput = VisionUpsertWithoutReactionOnVisionsInput;
