"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateManyWithWhereWithoutReferenceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionScalarWhereInput_1 = require("../inputs/VisionScalarWhereInput");
const VisionUpdateManyMutationInput_1 = require("../inputs/VisionUpdateManyMutationInput");
let VisionUpdateManyWithWhereWithoutReferenceInput = class VisionUpdateManyWithWhereWithoutReferenceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionScalarWhereInput_1.VisionScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionScalarWhereInput_1.VisionScalarWhereInput)
], VisionUpdateManyWithWhereWithoutReferenceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyMutationInput_1.VisionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyMutationInput_1.VisionUpdateManyMutationInput)
], VisionUpdateManyWithWhereWithoutReferenceInput.prototype, "data", void 0);
VisionUpdateManyWithWhereWithoutReferenceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateManyWithWhereWithoutReferenceInput", {
        isAbstract: true
    })
], VisionUpdateManyWithWhereWithoutReferenceInput);
exports.VisionUpdateManyWithWhereWithoutReferenceInput = VisionUpdateManyWithWhereWithoutReferenceInput;
