"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutSubscriptionsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/UserCreateWithoutSubscriptionsOnPremisesInput");
const UserUpdateWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/UserUpdateWithoutSubscriptionsOnPremisesInput");
let UserUpsertWithoutSubscriptionsOnPremisesInput = class UserUpsertWithoutSubscriptionsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutSubscriptionsOnPremisesInput_1.UserUpdateWithoutSubscriptionsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutSubscriptionsOnPremisesInput_1.UserUpdateWithoutSubscriptionsOnPremisesInput)
], UserUpsertWithoutSubscriptionsOnPremisesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnPremisesInput_1.UserCreateWithoutSubscriptionsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSubscriptionsOnPremisesInput_1.UserCreateWithoutSubscriptionsOnPremisesInput)
], UserUpsertWithoutSubscriptionsOnPremisesInput.prototype, "create", void 0);
UserUpsertWithoutSubscriptionsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutSubscriptionsOnPremisesInput", {
        isAbstract: true
    })
], UserUpsertWithoutSubscriptionsOnPremisesInput);
exports.UserUpsertWithoutSubscriptionsOnPremisesInput = UserUpsertWithoutSubscriptionsOnPremisesInput;
