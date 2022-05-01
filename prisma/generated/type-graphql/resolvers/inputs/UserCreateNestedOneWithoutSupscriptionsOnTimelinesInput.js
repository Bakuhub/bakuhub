"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput");
const UserCreateWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateWithoutSupscriptionsOnTimelinesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput = class UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSupscriptionsOnTimelinesInput_1.UserCreateWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSupscriptionsOnTimelinesInput_1.UserCreateWithoutSupscriptionsOnTimelinesInput)
], UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput_1.UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput_1.UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput)
], UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput);
exports.UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput = UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput;
