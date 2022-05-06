"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutVisionsInput_1 = require("../inputs/UserCreateWithoutVisionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutVisionsInput = class UserCreateOrConnectWithoutVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutVisionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVisionsInput_1.UserCreateWithoutVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVisionsInput_1.UserCreateWithoutVisionsInput)
], UserCreateOrConnectWithoutVisionsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutVisionsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutVisionsInput);
exports.UserCreateOrConnectWithoutVisionsInput = UserCreateOrConnectWithoutVisionsInput;
