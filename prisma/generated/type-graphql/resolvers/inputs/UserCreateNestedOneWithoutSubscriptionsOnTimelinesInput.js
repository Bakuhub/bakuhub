"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput");
const UserCreateWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateWithoutSubscriptionsOnTimelinesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput = class UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnTimelinesInput_1.UserCreateWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSubscriptionsOnTimelinesInput_1.UserCreateWithoutSubscriptionsOnTimelinesInput)
], UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput_1.UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput_1.UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput)
], UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput);
exports.UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput = UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput;
