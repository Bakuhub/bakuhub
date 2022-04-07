"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutVisionsInput_1 = require("../inputs/UserCreateWithoutVisionsInput");
const UserUpdateWithoutVisionsInput_1 = require("../inputs/UserUpdateWithoutVisionsInput");
let UserUpsertWithoutVisionsInput = class UserUpsertWithoutVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutVisionsInput_1.UserUpdateWithoutVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutVisionsInput_1.UserUpdateWithoutVisionsInput)
], UserUpsertWithoutVisionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVisionsInput_1.UserCreateWithoutVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVisionsInput_1.UserCreateWithoutVisionsInput)
], UserUpsertWithoutVisionsInput.prototype, "create", void 0);
UserUpsertWithoutVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutVisionsInput", {
        isAbstract: true
    })
], UserUpsertWithoutVisionsInput);
exports.UserUpsertWithoutVisionsInput = UserUpsertWithoutVisionsInput;
