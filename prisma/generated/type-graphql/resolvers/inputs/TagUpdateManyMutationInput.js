"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TagUpdateManyMutationInput = class TagUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TagUpdateManyMutationInput.prototype, "label", void 0);
TagUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpdateManyMutationInput", {
        isAbstract: true
    })
], TagUpdateManyMutationInput);
exports.TagUpdateManyMutationInput = TagUpdateManyMutationInput;
