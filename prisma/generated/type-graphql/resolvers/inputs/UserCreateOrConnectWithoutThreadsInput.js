"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutThreadsInput_1 = require("../inputs/UserCreateWithoutThreadsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutThreadsInput = class UserCreateOrConnectWithoutThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutThreadsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutThreadsInput_1.UserCreateWithoutThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutThreadsInput_1.UserCreateWithoutThreadsInput)
], UserCreateOrConnectWithoutThreadsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutThreadsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutThreadsInput);
exports.UserCreateOrConnectWithoutThreadsInput = UserCreateOrConnectWithoutThreadsInput;
