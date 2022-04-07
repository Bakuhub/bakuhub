"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutPremisesInput_1 = require("../inputs/UserCreateOrConnectWithoutPremisesInput");
const UserCreateWithoutPremisesInput_1 = require("../inputs/UserCreateWithoutPremisesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutPremisesInput = class UserCreateNestedOneWithoutPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPremisesInput_1.UserCreateWithoutPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPremisesInput_1.UserCreateWithoutPremisesInput)
], UserCreateNestedOneWithoutPremisesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPremisesInput_1.UserCreateOrConnectWithoutPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutPremisesInput_1.UserCreateOrConnectWithoutPremisesInput)
], UserCreateNestedOneWithoutPremisesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutPremisesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutPremisesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutPremisesInput);
exports.UserCreateNestedOneWithoutPremisesInput = UserCreateNestedOneWithoutPremisesInput;
