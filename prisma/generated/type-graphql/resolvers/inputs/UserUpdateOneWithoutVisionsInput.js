"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutVisionsInput_1 = require("../inputs/UserCreateOrConnectWithoutVisionsInput");
const UserCreateWithoutVisionsInput_1 = require("../inputs/UserCreateWithoutVisionsInput");
const UserUpdateWithoutVisionsInput_1 = require("../inputs/UserUpdateWithoutVisionsInput");
const UserUpsertWithoutVisionsInput_1 = require("../inputs/UserUpsertWithoutVisionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutVisionsInput = class UserUpdateOneWithoutVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVisionsInput_1.UserCreateWithoutVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVisionsInput_1.UserCreateWithoutVisionsInput)
], UserUpdateOneWithoutVisionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVisionsInput_1.UserCreateOrConnectWithoutVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutVisionsInput_1.UserCreateOrConnectWithoutVisionsInput)
], UserUpdateOneWithoutVisionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutVisionsInput_1.UserUpsertWithoutVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutVisionsInput_1.UserUpsertWithoutVisionsInput)
], UserUpdateOneWithoutVisionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutVisionsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutVisionsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutVisionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutVisionsInput_1.UserUpdateWithoutVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutVisionsInput_1.UserUpdateWithoutVisionsInput)
], UserUpdateOneWithoutVisionsInput.prototype, "update", void 0);
UserUpdateOneWithoutVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutVisionsInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutVisionsInput);
exports.UserUpdateOneWithoutVisionsInput = UserUpdateOneWithoutVisionsInput;
