"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateWithWhereUniqueWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionUpdateWithoutPremiseInput_1 = require("../inputs/VisionUpdateWithoutPremiseInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateWithWhereUniqueWithoutPremiseInput = class VisionUpdateWithWhereUniqueWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpdateWithWhereUniqueWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutPremiseInput_1.VisionUpdateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutPremiseInput_1.VisionUpdateWithoutPremiseInput)
], VisionUpdateWithWhereUniqueWithoutPremiseInput.prototype, "data", void 0);
VisionUpdateWithWhereUniqueWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateWithWhereUniqueWithoutPremiseInput", {
        isAbstract: true
    })
], VisionUpdateWithWhereUniqueWithoutPremiseInput);
exports.VisionUpdateWithWhereUniqueWithoutPremiseInput = VisionUpdateWithWhereUniqueWithoutPremiseInput;
