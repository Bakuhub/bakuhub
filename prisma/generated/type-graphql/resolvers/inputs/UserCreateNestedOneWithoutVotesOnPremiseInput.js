"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutVotesOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutVotesOnPremiseInput_1 = require("../inputs/UserCreateOrConnectWithoutVotesOnPremiseInput");
const UserCreateWithoutVotesOnPremiseInput_1 = require("../inputs/UserCreateWithoutVotesOnPremiseInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutVotesOnPremiseInput = class UserCreateNestedOneWithoutVotesOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnPremiseInput_1.UserCreateWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnPremiseInput_1.UserCreateWithoutVotesOnPremiseInput)
], UserCreateNestedOneWithoutVotesOnPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVotesOnPremiseInput_1.UserCreateOrConnectWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutVotesOnPremiseInput_1.UserCreateOrConnectWithoutVotesOnPremiseInput)
], UserCreateNestedOneWithoutVotesOnPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutVotesOnPremiseInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutVotesOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutVotesOnPremiseInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutVotesOnPremiseInput);
exports.UserCreateNestedOneWithoutVotesOnPremiseInput = UserCreateNestedOneWithoutVotesOnPremiseInput;