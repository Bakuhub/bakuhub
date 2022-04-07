"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutAuthorInput_1 = require("../inputs/VisionCreateWithoutAuthorInput");
const VisionUpdateWithoutAuthorInput_1 = require("../inputs/VisionUpdateWithoutAuthorInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpsertWithWhereUniqueWithoutAuthorInput = class VisionUpsertWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutAuthorInput_1.VisionUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutAuthorInput_1.VisionUpdateWithoutAuthorInput)
], VisionUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutAuthorInput_1.VisionCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutAuthorInput_1.VisionCreateWithoutAuthorInput)
], VisionUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
VisionUpsertWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpsertWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], VisionUpsertWithWhereUniqueWithoutAuthorInput);
exports.VisionUpsertWithWhereUniqueWithoutAuthorInput = VisionUpsertWithWhereUniqueWithoutAuthorInput;
