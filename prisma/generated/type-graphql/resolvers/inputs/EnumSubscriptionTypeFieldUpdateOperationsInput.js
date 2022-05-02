"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumSubscriptionTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let EnumSubscriptionTypeFieldUpdateOperationsInput = class EnumSubscriptionTypeFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumSubscriptionTypeFieldUpdateOperationsInput.prototype, "set", void 0);
EnumSubscriptionTypeFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumSubscriptionTypeFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumSubscriptionTypeFieldUpdateOperationsInput);
exports.EnumSubscriptionTypeFieldUpdateOperationsInput = EnumSubscriptionTypeFieldUpdateOperationsInput;