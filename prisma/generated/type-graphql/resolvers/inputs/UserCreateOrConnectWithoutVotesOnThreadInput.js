"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutVotesOnThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutVotesOnThreadInput_1 = require("../inputs/UserCreateWithoutVotesOnThreadInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutVotesOnThreadInput = class UserCreateOrConnectWithoutVotesOnThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutVotesOnThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnThreadInput_1.UserCreateWithoutVotesOnThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnThreadInput_1.UserCreateWithoutVotesOnThreadInput)
], UserCreateOrConnectWithoutVotesOnThreadInput.prototype, "create", void 0);
UserCreateOrConnectWithoutVotesOnThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutVotesOnThreadInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutVotesOnThreadInput);
exports.UserCreateOrConnectWithoutVotesOnThreadInput = UserCreateOrConnectWithoutVotesOnThreadInput;
