"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutPremisesInput_1 = require("../inputs/UserCreateWithoutPremisesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutPremisesInput = class UserCreateOrConnectWithoutPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutPremisesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPremisesInput_1.UserCreateWithoutPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPremisesInput_1.UserCreateWithoutPremisesInput)
], UserCreateOrConnectWithoutPremisesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutPremisesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutPremisesInput);
exports.UserCreateOrConnectWithoutPremisesInput = UserCreateOrConnectWithoutPremisesInput;
