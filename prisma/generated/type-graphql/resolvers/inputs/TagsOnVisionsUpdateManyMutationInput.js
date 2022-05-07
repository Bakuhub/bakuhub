"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
let TagsOnVisionsUpdateManyMutationInput = class TagsOnVisionsUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TagsOnVisionsUpdateManyMutationInput.prototype, "assignedAt", void 0);
TagsOnVisionsUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsUpdateManyMutationInput", {
        isAbstract: true
    })
], TagsOnVisionsUpdateManyMutationInput);
exports.TagsOnVisionsUpdateManyMutationInput = TagsOnVisionsUpdateManyMutationInput;
