"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutReactionOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutReactionOnTimelinesInput_1 = require("../inputs/UserCreateWithoutReactionOnTimelinesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutReactionOnTimelinesInput = class UserCreateOrConnectWithoutReactionOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutReactionOnTimelinesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionOnTimelinesInput_1.UserCreateWithoutReactionOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionOnTimelinesInput_1.UserCreateWithoutReactionOnTimelinesInput)
], UserCreateOrConnectWithoutReactionOnTimelinesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutReactionOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutReactionOnTimelinesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutReactionOnTimelinesInput);
exports.UserCreateOrConnectWithoutReactionOnTimelinesInput = UserCreateOrConnectWithoutReactionOnTimelinesInput;
