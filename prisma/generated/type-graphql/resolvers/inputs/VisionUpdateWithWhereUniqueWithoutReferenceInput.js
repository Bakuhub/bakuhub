"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateWithWhereUniqueWithoutReferenceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionUpdateWithoutReferenceInput_1 = require("../inputs/VisionUpdateWithoutReferenceInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateWithWhereUniqueWithoutReferenceInput = class VisionUpdateWithWhereUniqueWithoutReferenceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpdateWithWhereUniqueWithoutReferenceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutReferenceInput_1.VisionUpdateWithoutReferenceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutReferenceInput_1.VisionUpdateWithoutReferenceInput)
], VisionUpdateWithWhereUniqueWithoutReferenceInput.prototype, "data", void 0);
VisionUpdateWithWhereUniqueWithoutReferenceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateWithWhereUniqueWithoutReferenceInput", {
        isAbstract: true
    })
], VisionUpdateWithWhereUniqueWithoutReferenceInput);
exports.VisionUpdateWithWhereUniqueWithoutReferenceInput = VisionUpdateWithWhereUniqueWithoutReferenceInput;
