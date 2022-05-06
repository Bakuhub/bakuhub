"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpsertWithWhereUniqueWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutPremiseInput_1 = require("../inputs/VisionCreateWithoutPremiseInput");
const VisionUpdateWithoutPremiseInput_1 = require("../inputs/VisionUpdateWithoutPremiseInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpsertWithWhereUniqueWithoutPremiseInput = class VisionUpsertWithWhereUniqueWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpsertWithWhereUniqueWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutPremiseInput_1.VisionUpdateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutPremiseInput_1.VisionUpdateWithoutPremiseInput)
], VisionUpsertWithWhereUniqueWithoutPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutPremiseInput_1.VisionCreateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutPremiseInput_1.VisionCreateWithoutPremiseInput)
], VisionUpsertWithWhereUniqueWithoutPremiseInput.prototype, "create", void 0);
VisionUpsertWithWhereUniqueWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpsertWithWhereUniqueWithoutPremiseInput", {
        isAbstract: true
    })
], VisionUpsertWithWhereUniqueWithoutPremiseInput);
exports.VisionUpsertWithWhereUniqueWithoutPremiseInput = VisionUpsertWithWhereUniqueWithoutPremiseInput;
