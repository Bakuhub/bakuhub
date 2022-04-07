"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionUpdateWithoutAuthorInput_1 = require("../inputs/VisionUpdateWithoutAuthorInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateWithWhereUniqueWithoutAuthorInput = class VisionUpdateWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutAuthorInput_1.VisionUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutAuthorInput_1.VisionUpdateWithoutAuthorInput)
], VisionUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
VisionUpdateWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], VisionUpdateWithWhereUniqueWithoutAuthorInput);
exports.VisionUpdateWithWhereUniqueWithoutAuthorInput = VisionUpdateWithWhereUniqueWithoutAuthorInput;
