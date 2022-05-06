"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutThreadsInput_1 = require("../inputs/UserCreateOrConnectWithoutThreadsInput");
const UserCreateWithoutThreadsInput_1 = require("../inputs/UserCreateWithoutThreadsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutThreadsInput = class UserCreateNestedOneWithoutThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutThreadsInput_1.UserCreateWithoutThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutThreadsInput_1.UserCreateWithoutThreadsInput)
], UserCreateNestedOneWithoutThreadsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutThreadsInput_1.UserCreateOrConnectWithoutThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutThreadsInput_1.UserCreateOrConnectWithoutThreadsInput)
], UserCreateNestedOneWithoutThreadsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutThreadsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutThreadsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutThreadsInput);
exports.UserCreateNestedOneWithoutThreadsInput = UserCreateNestedOneWithoutThreadsInput;
