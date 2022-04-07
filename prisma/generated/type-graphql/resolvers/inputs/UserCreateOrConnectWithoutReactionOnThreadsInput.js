"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutReactionOnThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutReactionOnThreadsInput_1 = require("../inputs/UserCreateWithoutReactionOnThreadsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutReactionOnThreadsInput = class UserCreateOrConnectWithoutReactionOnThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutReactionOnThreadsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionOnThreadsInput_1.UserCreateWithoutReactionOnThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionOnThreadsInput_1.UserCreateWithoutReactionOnThreadsInput)
], UserCreateOrConnectWithoutReactionOnThreadsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutReactionOnThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutReactionOnThreadsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutReactionOnThreadsInput);
exports.UserCreateOrConnectWithoutReactionOnThreadsInput = UserCreateOrConnectWithoutReactionOnThreadsInput;
