"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutPremisesInput_1 = require("../inputs/UserCreateWithoutPremisesInput");
const UserUpdateWithoutPremisesInput_1 = require("../inputs/UserUpdateWithoutPremisesInput");
let UserUpsertWithoutPremisesInput = class UserUpsertWithoutPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutPremisesInput_1.UserUpdateWithoutPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutPremisesInput_1.UserUpdateWithoutPremisesInput)
], UserUpsertWithoutPremisesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPremisesInput_1.UserCreateWithoutPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPremisesInput_1.UserCreateWithoutPremisesInput)
], UserUpsertWithoutPremisesInput.prototype, "create", void 0);
UserUpsertWithoutPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutPremisesInput", {
        isAbstract: true
    })
], UserUpsertWithoutPremisesInput);
exports.UserUpsertWithoutPremisesInput = UserUpsertWithoutPremisesInput;
