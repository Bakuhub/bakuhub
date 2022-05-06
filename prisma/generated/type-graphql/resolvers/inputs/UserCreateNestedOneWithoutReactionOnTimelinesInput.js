"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutReactionOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutReactionOnTimelinesInput_1 = require("../inputs/UserCreateOrConnectWithoutReactionOnTimelinesInput");
const UserCreateWithoutReactionOnTimelinesInput_1 = require("../inputs/UserCreateWithoutReactionOnTimelinesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutReactionOnTimelinesInput = class UserCreateNestedOneWithoutReactionOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionOnTimelinesInput_1.UserCreateWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionOnTimelinesInput_1.UserCreateWithoutReactionOnTimelinesInput)
], UserCreateNestedOneWithoutReactionOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReactionOnTimelinesInput_1.UserCreateOrConnectWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutReactionOnTimelinesInput_1.UserCreateOrConnectWithoutReactionOnTimelinesInput)
], UserCreateNestedOneWithoutReactionOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutReactionOnTimelinesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutReactionOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutReactionOnTimelinesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutReactionOnTimelinesInput);
exports.UserCreateNestedOneWithoutReactionOnTimelinesInput = UserCreateNestedOneWithoutReactionOnTimelinesInput;
