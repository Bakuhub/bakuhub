"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpsertWithoutNextVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutNextVisionsInput_1 = require("../inputs/VisionCreateWithoutNextVisionsInput");
const VisionUpdateWithoutNextVisionsInput_1 = require("../inputs/VisionUpdateWithoutNextVisionsInput");
let VisionUpsertWithoutNextVisionsInput = class VisionUpsertWithoutNextVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutNextVisionsInput_1.VisionUpdateWithoutNextVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutNextVisionsInput_1.VisionUpdateWithoutNextVisionsInput)
], VisionUpsertWithoutNextVisionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutNextVisionsInput_1.VisionCreateWithoutNextVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutNextVisionsInput_1.VisionCreateWithoutNextVisionsInput)
], VisionUpsertWithoutNextVisionsInput.prototype, "create", void 0);
VisionUpsertWithoutNextVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpsertWithoutNextVisionsInput", {
        isAbstract: true
    })
], VisionUpsertWithoutNextVisionsInput);
exports.VisionUpsertWithoutNextVisionsInput = VisionUpsertWithoutNextVisionsInput;
