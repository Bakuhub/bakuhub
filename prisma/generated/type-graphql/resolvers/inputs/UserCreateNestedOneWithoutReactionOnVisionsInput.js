"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutReactionOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutReactionOnVisionsInput_1 = require("../inputs/UserCreateOrConnectWithoutReactionOnVisionsInput");
const UserCreateWithoutReactionOnVisionsInput_1 = require("../inputs/UserCreateWithoutReactionOnVisionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutReactionOnVisionsInput = class UserCreateNestedOneWithoutReactionOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionOnVisionsInput_1.UserCreateWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionOnVisionsInput_1.UserCreateWithoutReactionOnVisionsInput)
], UserCreateNestedOneWithoutReactionOnVisionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReactionOnVisionsInput_1.UserCreateOrConnectWithoutReactionOnVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutReactionOnVisionsInput_1.UserCreateOrConnectWithoutReactionOnVisionsInput)
], UserCreateNestedOneWithoutReactionOnVisionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutReactionOnVisionsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutReactionOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutReactionOnVisionsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutReactionOnVisionsInput);
exports.UserCreateNestedOneWithoutReactionOnVisionsInput = UserCreateNestedOneWithoutReactionOnVisionsInput;
