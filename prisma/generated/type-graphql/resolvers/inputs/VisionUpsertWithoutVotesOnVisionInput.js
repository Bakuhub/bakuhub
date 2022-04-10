"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpsertWithoutVotesOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutVotesOnVisionInput_1 = require("../inputs/VisionCreateWithoutVotesOnVisionInput");
const VisionUpdateWithoutVotesOnVisionInput_1 = require("../inputs/VisionUpdateWithoutVotesOnVisionInput");
let VisionUpsertWithoutVotesOnVisionInput = class VisionUpsertWithoutVotesOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutVotesOnVisionInput_1.VisionUpdateWithoutVotesOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutVotesOnVisionInput_1.VisionUpdateWithoutVotesOnVisionInput)
], VisionUpsertWithoutVotesOnVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutVotesOnVisionInput_1.VisionCreateWithoutVotesOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutVotesOnVisionInput_1.VisionCreateWithoutVotesOnVisionInput)
], VisionUpsertWithoutVotesOnVisionInput.prototype, "create", void 0);
VisionUpsertWithoutVotesOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpsertWithoutVotesOnVisionInput", {
        isAbstract: true
    })
], VisionUpsertWithoutVotesOnVisionInput);
exports.VisionUpsertWithoutVotesOnVisionInput = VisionUpsertWithoutVotesOnVisionInput;
