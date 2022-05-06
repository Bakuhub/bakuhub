"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateManyWithWhereWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionScalarWhereInput_1 = require("../inputs/VisionScalarWhereInput");
const VisionUpdateManyMutationInput_1 = require("../inputs/VisionUpdateManyMutationInput");
let VisionUpdateManyWithWhereWithoutPremiseInput = class VisionUpdateManyWithWhereWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionScalarWhereInput_1.VisionScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionScalarWhereInput_1.VisionScalarWhereInput)
], VisionUpdateManyWithWhereWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyMutationInput_1.VisionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyMutationInput_1.VisionUpdateManyMutationInput)
], VisionUpdateManyWithWhereWithoutPremiseInput.prototype, "data", void 0);
VisionUpdateManyWithWhereWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateManyWithWhereWithoutPremiseInput", {
        isAbstract: true
    })
], VisionUpdateManyWithWhereWithoutPremiseInput);
exports.VisionUpdateManyWithWhereWithoutPremiseInput = VisionUpdateManyWithWhereWithoutPremiseInput;
