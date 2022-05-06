"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutThreadsInput_1 = require("../inputs/UserCreateWithoutThreadsInput");
const UserUpdateWithoutThreadsInput_1 = require("../inputs/UserUpdateWithoutThreadsInput");
let UserUpsertWithoutThreadsInput = class UserUpsertWithoutThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutThreadsInput_1.UserUpdateWithoutThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutThreadsInput_1.UserUpdateWithoutThreadsInput)
], UserUpsertWithoutThreadsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutThreadsInput_1.UserCreateWithoutThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutThreadsInput_1.UserCreateWithoutThreadsInput)
], UserUpsertWithoutThreadsInput.prototype, "create", void 0);
UserUpsertWithoutThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutThreadsInput", {
        isAbstract: true
    })
], UserUpsertWithoutThreadsInput);
exports.UserUpsertWithoutThreadsInput = UserUpsertWithoutThreadsInput;
