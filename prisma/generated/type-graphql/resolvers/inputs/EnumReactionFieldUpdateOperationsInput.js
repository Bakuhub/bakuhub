"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumReactionFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../../enums/Reaction");
let EnumReactionFieldUpdateOperationsInput = class EnumReactionFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumReactionFieldUpdateOperationsInput.prototype, "set", void 0);
EnumReactionFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumReactionFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumReactionFieldUpdateOperationsInput);
exports.EnumReactionFieldUpdateOperationsInput = EnumReactionFieldUpdateOperationsInput;
