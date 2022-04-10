"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutVotesOnThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutVotesOnThreadInput_1 = require("../inputs/UserCreateWithoutVotesOnThreadInput");
const UserUpdateWithoutVotesOnThreadInput_1 = require("../inputs/UserUpdateWithoutVotesOnThreadInput");
let UserUpsertWithoutVotesOnThreadInput = class UserUpsertWithoutVotesOnThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnThreadInput_1.UserUpdateWithoutVotesOnThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutVotesOnThreadInput_1.UserUpdateWithoutVotesOnThreadInput)
], UserUpsertWithoutVotesOnThreadInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnThreadInput_1.UserCreateWithoutVotesOnThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnThreadInput_1.UserCreateWithoutVotesOnThreadInput)
], UserUpsertWithoutVotesOnThreadInput.prototype, "create", void 0);
UserUpsertWithoutVotesOnThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutVotesOnThreadInput", {
        isAbstract: true
    })
], UserUpsertWithoutVotesOnThreadInput);
exports.UserUpsertWithoutVotesOnThreadInput = UserUpsertWithoutVotesOnThreadInput;
