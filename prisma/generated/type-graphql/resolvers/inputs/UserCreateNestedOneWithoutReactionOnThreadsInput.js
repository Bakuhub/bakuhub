"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutReactionOnThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutReactionOnThreadsInput_1 = require("../inputs/UserCreateOrConnectWithoutReactionOnThreadsInput");
const UserCreateWithoutReactionOnThreadsInput_1 = require("../inputs/UserCreateWithoutReactionOnThreadsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutReactionOnThreadsInput = class UserCreateNestedOneWithoutReactionOnThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutReactionOnThreadsInput_1.UserCreateWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutReactionOnThreadsInput_1.UserCreateWithoutReactionOnThreadsInput)
], UserCreateNestedOneWithoutReactionOnThreadsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReactionOnThreadsInput_1.UserCreateOrConnectWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutReactionOnThreadsInput_1.UserCreateOrConnectWithoutReactionOnThreadsInput)
], UserCreateNestedOneWithoutReactionOnThreadsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutReactionOnThreadsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutReactionOnThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutReactionOnThreadsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutReactionOnThreadsInput);
exports.UserCreateNestedOneWithoutReactionOnThreadsInput = UserCreateNestedOneWithoutReactionOnThreadsInput;
