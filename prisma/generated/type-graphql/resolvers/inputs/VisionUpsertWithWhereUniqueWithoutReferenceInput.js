"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpsertWithWhereUniqueWithoutReferenceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutReferenceInput_1 = require("../inputs/VisionCreateWithoutReferenceInput");
const VisionUpdateWithoutReferenceInput_1 = require("../inputs/VisionUpdateWithoutReferenceInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpsertWithWhereUniqueWithoutReferenceInput = class VisionUpsertWithWhereUniqueWithoutReferenceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpsertWithWhereUniqueWithoutReferenceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutReferenceInput_1.VisionUpdateWithoutReferenceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutReferenceInput_1.VisionUpdateWithoutReferenceInput)
], VisionUpsertWithWhereUniqueWithoutReferenceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutReferenceInput_1.VisionCreateWithoutReferenceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutReferenceInput_1.VisionCreateWithoutReferenceInput)
], VisionUpsertWithWhereUniqueWithoutReferenceInput.prototype, "create", void 0);
VisionUpsertWithWhereUniqueWithoutReferenceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpsertWithWhereUniqueWithoutReferenceInput", {
        isAbstract: true
    })
], VisionUpsertWithWhereUniqueWithoutReferenceInput);
exports.VisionUpsertWithWhereUniqueWithoutReferenceInput = VisionUpsertWithWhereUniqueWithoutReferenceInput;
