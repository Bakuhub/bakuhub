"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpsertWithoutTagsOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutTagsOnVisionsInput_1 = require("../inputs/VisionCreateWithoutTagsOnVisionsInput");
const VisionUpdateWithoutTagsOnVisionsInput_1 = require("../inputs/VisionUpdateWithoutTagsOnVisionsInput");
let VisionUpsertWithoutTagsOnVisionsInput = class VisionUpsertWithoutTagsOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutTagsOnVisionsInput_1.VisionUpdateWithoutTagsOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutTagsOnVisionsInput_1.VisionUpdateWithoutTagsOnVisionsInput)
], VisionUpsertWithoutTagsOnVisionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutTagsOnVisionsInput_1.VisionCreateWithoutTagsOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutTagsOnVisionsInput_1.VisionCreateWithoutTagsOnVisionsInput)
], VisionUpsertWithoutTagsOnVisionsInput.prototype, "create", void 0);
VisionUpsertWithoutTagsOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpsertWithoutTagsOnVisionsInput", {
        isAbstract: true
    })
], VisionUpsertWithoutTagsOnVisionsInput);
exports.VisionUpsertWithoutTagsOnVisionsInput = VisionUpsertWithoutTagsOnVisionsInput;
