"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPremiseStatusFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseStatus_1 = require("../../enums/PremiseStatus");
let EnumPremiseStatusFieldUpdateOperationsInput = class EnumPremiseStatusFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseStatus_1.PremiseStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPremiseStatusFieldUpdateOperationsInput.prototype, "set", void 0);
EnumPremiseStatusFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPremiseStatusFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumPremiseStatusFieldUpdateOperationsInput);
exports.EnumPremiseStatusFieldUpdateOperationsInput = EnumPremiseStatusFieldUpdateOperationsInput;
