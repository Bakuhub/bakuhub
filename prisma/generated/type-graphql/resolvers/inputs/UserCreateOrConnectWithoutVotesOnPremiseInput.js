"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutVotesOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutVotesOnPremiseInput_1 = require("../inputs/UserCreateWithoutVotesOnPremiseInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutVotesOnPremiseInput = class UserCreateOrConnectWithoutVotesOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutVotesOnPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnPremiseInput_1.UserCreateWithoutVotesOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnPremiseInput_1.UserCreateWithoutVotesOnPremiseInput)
], UserCreateOrConnectWithoutVotesOnPremiseInput.prototype, "create", void 0);
UserCreateOrConnectWithoutVotesOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutVotesOnPremiseInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutVotesOnPremiseInput);
exports.UserCreateOrConnectWithoutVotesOnPremiseInput = UserCreateOrConnectWithoutVotesOnPremiseInput;
