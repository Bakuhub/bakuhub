"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateWithoutSubscriptionsOnTimelinesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput = class UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnTimelinesInput_1.UserCreateWithoutSubscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSubscriptionsOnTimelinesInput_1.UserCreateWithoutSubscriptionsOnTimelinesInput)
], UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput);
exports.UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput = UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput;
