"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutTimelinesInput_1 = require("../inputs/UserCreateOrConnectWithoutTimelinesInput");
const UserCreateWithoutTimelinesInput_1 = require("../inputs/UserCreateWithoutTimelinesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutTimelinesInput = class UserCreateNestedOneWithoutTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTimelinesInput_1.UserCreateWithoutTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTimelinesInput_1.UserCreateWithoutTimelinesInput)
], UserCreateNestedOneWithoutTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTimelinesInput_1.UserCreateOrConnectWithoutTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutTimelinesInput_1.UserCreateOrConnectWithoutTimelinesInput)
], UserCreateNestedOneWithoutTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutTimelinesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutTimelinesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutTimelinesInput);
exports.UserCreateNestedOneWithoutTimelinesInput = UserCreateNestedOneWithoutTimelinesInput;
