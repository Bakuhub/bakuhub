"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutVisionsInput_1 = require("../inputs/UserCreateOrConnectWithoutVisionsInput");
const UserCreateWithoutVisionsInput_1 = require("../inputs/UserCreateWithoutVisionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutVisionsInput = class UserCreateNestedOneWithoutVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVisionsInput_1.UserCreateWithoutVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVisionsInput_1.UserCreateWithoutVisionsInput)
], UserCreateNestedOneWithoutVisionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVisionsInput_1.UserCreateOrConnectWithoutVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutVisionsInput_1.UserCreateOrConnectWithoutVisionsInput)
], UserCreateNestedOneWithoutVisionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutVisionsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutVisionsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutVisionsInput);
exports.UserCreateNestedOneWithoutVisionsInput = UserCreateNestedOneWithoutVisionsInput;
