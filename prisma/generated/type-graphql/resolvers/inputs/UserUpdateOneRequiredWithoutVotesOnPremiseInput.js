"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutVotesOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutVotesOnPremiseInput_1 = require("../inputs/UserCreateOrConnectWithoutVotesOnPremiseInput");
const UserCreateWithoutVotesOnPremiseInput_1 = require("../inputs/UserCreateWithoutVotesOnPremiseInput");
const UserUpdateWithoutVotesOnPremiseInput_1 = require("../inputs/UserUpdateWithoutVotesOnPremiseInput");
const UserUpsertWithoutVotesOnPremiseInput_1 = require("../inputs/UserUpsertWithoutVotesOnPremiseInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutVotesOnPremiseInput = class UserUpdateOneRequiredWithoutVotesOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnPremiseInput_1.UserCreateWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnPremiseInput_1.UserCreateWithoutVotesOnPremiseInput)
], UserUpdateOneRequiredWithoutVotesOnPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVotesOnPremiseInput_1.UserCreateOrConnectWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutVotesOnPremiseInput_1.UserCreateOrConnectWithoutVotesOnPremiseInput)
], UserUpdateOneRequiredWithoutVotesOnPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutVotesOnPremiseInput_1.UserUpsertWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutVotesOnPremiseInput_1.UserUpsertWithoutVotesOnPremiseInput)
], UserUpdateOneRequiredWithoutVotesOnPremiseInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutVotesOnPremiseInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnPremiseInput_1.UserUpdateWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutVotesOnPremiseInput_1.UserUpdateWithoutVotesOnPremiseInput)
], UserUpdateOneRequiredWithoutVotesOnPremiseInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutVotesOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutVotesOnPremiseInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutVotesOnPremiseInput);
exports.UserUpdateOneRequiredWithoutVotesOnPremiseInput = UserUpdateOneRequiredWithoutVotesOnPremiseInput;
