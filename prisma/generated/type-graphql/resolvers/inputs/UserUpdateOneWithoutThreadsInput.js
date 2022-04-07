"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutThreadsInput_1 = require("../inputs/UserCreateOrConnectWithoutThreadsInput");
const UserCreateWithoutThreadsInput_1 = require("../inputs/UserCreateWithoutThreadsInput");
const UserUpdateWithoutThreadsInput_1 = require("../inputs/UserUpdateWithoutThreadsInput");
const UserUpsertWithoutThreadsInput_1 = require("../inputs/UserUpsertWithoutThreadsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutThreadsInput = class UserUpdateOneWithoutThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutThreadsInput_1.UserCreateWithoutThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutThreadsInput_1.UserCreateWithoutThreadsInput)
], UserUpdateOneWithoutThreadsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutThreadsInput_1.UserCreateOrConnectWithoutThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutThreadsInput_1.UserCreateOrConnectWithoutThreadsInput)
], UserUpdateOneWithoutThreadsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutThreadsInput_1.UserUpsertWithoutThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutThreadsInput_1.UserUpsertWithoutThreadsInput)
], UserUpdateOneWithoutThreadsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutThreadsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutThreadsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutThreadsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutThreadsInput_1.UserUpdateWithoutThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutThreadsInput_1.UserUpdateWithoutThreadsInput)
], UserUpdateOneWithoutThreadsInput.prototype, "update", void 0);
UserUpdateOneWithoutThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutThreadsInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutThreadsInput);
exports.UserUpdateOneWithoutThreadsInput = UserUpdateOneWithoutThreadsInput;
