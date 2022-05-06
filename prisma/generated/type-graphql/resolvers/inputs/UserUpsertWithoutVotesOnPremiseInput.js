"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutVotesOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutVotesOnPremiseInput_1 = require("../inputs/UserCreateWithoutVotesOnPremiseInput");
const UserUpdateWithoutVotesOnPremiseInput_1 = require("../inputs/UserUpdateWithoutVotesOnPremiseInput");
let UserUpsertWithoutVotesOnPremiseInput = class UserUpsertWithoutVotesOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnPremiseInput_1.UserUpdateWithoutVotesOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutVotesOnPremiseInput_1.UserUpdateWithoutVotesOnPremiseInput)
], UserUpsertWithoutVotesOnPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnPremiseInput_1.UserCreateWithoutVotesOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnPremiseInput_1.UserCreateWithoutVotesOnPremiseInput)
], UserUpsertWithoutVotesOnPremiseInput.prototype, "create", void 0);
UserUpsertWithoutVotesOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutVotesOnPremiseInput", {
        isAbstract: true
    })
], UserUpsertWithoutVotesOnPremiseInput);
exports.UserUpsertWithoutVotesOnPremiseInput = UserUpsertWithoutVotesOnPremiseInput;
