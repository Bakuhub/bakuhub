"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutVotesOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutVotesOnVisionInput_1 = require("../inputs/UserCreateWithoutVotesOnVisionInput");
const UserUpdateWithoutVotesOnVisionInput_1 = require("../inputs/UserUpdateWithoutVotesOnVisionInput");
let UserUpsertWithoutVotesOnVisionInput = class UserUpsertWithoutVotesOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnVisionInput_1.UserUpdateWithoutVotesOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutVotesOnVisionInput_1.UserUpdateWithoutVotesOnVisionInput)
], UserUpsertWithoutVotesOnVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnVisionInput_1.UserCreateWithoutVotesOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnVisionInput_1.UserCreateWithoutVotesOnVisionInput)
], UserUpsertWithoutVotesOnVisionInput.prototype, "create", void 0);
UserUpsertWithoutVotesOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutVotesOnVisionInput", {
        isAbstract: true
    })
], UserUpsertWithoutVotesOnVisionInput);
exports.UserUpsertWithoutVotesOnVisionInput = UserUpsertWithoutVotesOnVisionInput;
