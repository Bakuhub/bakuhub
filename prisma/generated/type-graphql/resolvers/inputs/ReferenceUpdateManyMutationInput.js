"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ReferenceUpdateManyMutationInput = class ReferenceUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReferenceUpdateManyMutationInput.prototype, "id", void 0);
ReferenceUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceUpdateManyMutationInput", {
        isAbstract: true
    })
], ReferenceUpdateManyMutationInput);
exports.ReferenceUpdateManyMutationInput = ReferenceUpdateManyMutationInput;
