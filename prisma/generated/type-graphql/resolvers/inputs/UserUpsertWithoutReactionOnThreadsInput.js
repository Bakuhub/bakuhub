"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutReactionOnThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutReactionOnThreadsInput_1 = require("../inputs/UserCreateWithoutReactionOnThreadsInput");
const UserUpdateWithoutReactionOnThreadsInput_1 = require("../inputs/UserUpdateWithoutReactionOnThreadsInput");
let UserUpsertWithoutReactionOnThreadsInput = class UserUpsertWithoutReactionOnThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutReactionOnThreadsInput_1.UserUpdateWithoutReactionOnThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutReactionOnThreadsInput_1.UserUpdateWithoutReactionOnThreadsInput)
], UserUpsertWithoutReactionOnThreadsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionOnThreadsInput_1.UserCreateWithoutReactionOnThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionOnThreadsInput_1.UserCreateWithoutReactionOnThreadsInput)
], UserUpsertWithoutReactionOnThreadsInput.prototype, "create", void 0);
UserUpsertWithoutReactionOnThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutReactionOnThreadsInput", {
        isAbstract: true
    })
], UserUpsertWithoutReactionOnThreadsInput);
exports.UserUpsertWithoutReactionOnThreadsInput = UserUpsertWithoutReactionOnThreadsInput;
