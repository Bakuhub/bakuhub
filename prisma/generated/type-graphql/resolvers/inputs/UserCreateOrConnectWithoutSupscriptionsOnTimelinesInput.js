"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateWithoutSupscriptionsOnTimelinesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput = class UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSupscriptionsOnTimelinesInput_1.UserCreateWithoutSupscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutSupscriptionsOnTimelinesInput_1.UserCreateWithoutSupscriptionsOnTimelinesInput)
], UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput);
exports.UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput = UserCreateOrConnectWithoutSupscriptionsOnTimelinesInput;
