"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutTimelinesInput_1 = require("../inputs/UserCreateWithoutTimelinesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutTimelinesInput = class UserCreateOrConnectWithoutTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutTimelinesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTimelinesInput_1.UserCreateWithoutTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTimelinesInput_1.UserCreateWithoutTimelinesInput)
], UserCreateOrConnectWithoutTimelinesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutTimelinesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutTimelinesInput);
exports.UserCreateOrConnectWithoutTimelinesInput = UserCreateOrConnectWithoutTimelinesInput;
