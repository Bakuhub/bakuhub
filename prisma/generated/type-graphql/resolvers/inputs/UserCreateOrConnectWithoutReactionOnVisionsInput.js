"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutReactionOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutReactionOnVisionsInput_1 = require("../inputs/UserCreateWithoutReactionOnVisionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutReactionOnVisionsInput = class UserCreateOrConnectWithoutReactionOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutReactionOnVisionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionOnVisionsInput_1.UserCreateWithoutReactionOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionOnVisionsInput_1.UserCreateWithoutReactionOnVisionsInput)
], UserCreateOrConnectWithoutReactionOnVisionsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutReactionOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutReactionOnVisionsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutReactionOnVisionsInput);
exports.UserCreateOrConnectWithoutReactionOnVisionsInput = UserCreateOrConnectWithoutReactionOnVisionsInput;
