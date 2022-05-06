"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutPremisesInput_1 = require("../inputs/UserCreateOrConnectWithoutPremisesInput");
const UserCreateWithoutPremisesInput_1 = require("../inputs/UserCreateWithoutPremisesInput");
const UserUpdateWithoutPremisesInput_1 = require("../inputs/UserUpdateWithoutPremisesInput");
const UserUpsertWithoutPremisesInput_1 = require("../inputs/UserUpsertWithoutPremisesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutPremisesInput = class UserUpdateOneWithoutPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPremisesInput_1.UserCreateWithoutPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPremisesInput_1.UserCreateWithoutPremisesInput)
], UserUpdateOneWithoutPremisesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPremisesInput_1.UserCreateOrConnectWithoutPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutPremisesInput_1.UserCreateOrConnectWithoutPremisesInput)
], UserUpdateOneWithoutPremisesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutPremisesInput_1.UserUpsertWithoutPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutPremisesInput_1.UserUpsertWithoutPremisesInput)
], UserUpdateOneWithoutPremisesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutPremisesInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutPremisesInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutPremisesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutPremisesInput_1.UserUpdateWithoutPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutPremisesInput_1.UserUpdateWithoutPremisesInput)
], UserUpdateOneWithoutPremisesInput.prototype, "update", void 0);
UserUpdateOneWithoutPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutPremisesInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutPremisesInput);
exports.UserUpdateOneWithoutPremisesInput = UserUpdateOneWithoutPremisesInput;
