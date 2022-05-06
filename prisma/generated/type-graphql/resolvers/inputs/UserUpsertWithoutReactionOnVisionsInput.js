"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutReactionOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutReactionOnVisionsInput_1 = require("../inputs/UserCreateWithoutReactionOnVisionsInput");
const UserUpdateWithoutReactionOnVisionsInput_1 = require("../inputs/UserUpdateWithoutReactionOnVisionsInput");
let UserUpsertWithoutReactionOnVisionsInput = class UserUpsertWithoutReactionOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutReactionOnVisionsInput_1.UserUpdateWithoutReactionOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutReactionOnVisionsInput_1.UserUpdateWithoutReactionOnVisionsInput)
], UserUpsertWithoutReactionOnVisionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionOnVisionsInput_1.UserCreateWithoutReactionOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionOnVisionsInput_1.UserCreateWithoutReactionOnVisionsInput)
], UserUpsertWithoutReactionOnVisionsInput.prototype, "create", void 0);
UserUpsertWithoutReactionOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutReactionOnVisionsInput", {
        isAbstract: true
    })
], UserUpsertWithoutReactionOnVisionsInput);
exports.UserUpsertWithoutReactionOnVisionsInput = UserUpsertWithoutReactionOnVisionsInput;
