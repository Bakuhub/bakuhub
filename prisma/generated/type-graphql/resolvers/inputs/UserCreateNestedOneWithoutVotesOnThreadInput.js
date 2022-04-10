"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutVotesOnThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutVotesOnThreadInput_1 = require("../inputs/UserCreateOrConnectWithoutVotesOnThreadInput");
const UserCreateWithoutVotesOnThreadInput_1 = require("../inputs/UserCreateWithoutVotesOnThreadInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutVotesOnThreadInput = class UserCreateNestedOneWithoutVotesOnThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnThreadInput_1.UserCreateWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnThreadInput_1.UserCreateWithoutVotesOnThreadInput)
], UserCreateNestedOneWithoutVotesOnThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVotesOnThreadInput_1.UserCreateOrConnectWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutVotesOnThreadInput_1.UserCreateOrConnectWithoutVotesOnThreadInput)
], UserCreateNestedOneWithoutVotesOnThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutVotesOnThreadInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutVotesOnThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutVotesOnThreadInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutVotesOnThreadInput);
exports.UserCreateNestedOneWithoutVotesOnThreadInput = UserCreateNestedOneWithoutVotesOnThreadInput;
