"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutVotesOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutVotesOnTimelineInput_1 = require("../inputs/UserCreateWithoutVotesOnTimelineInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutVotesOnTimelineInput = class UserCreateOrConnectWithoutVotesOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutVotesOnTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnTimelineInput_1.UserCreateWithoutVotesOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnTimelineInput_1.UserCreateWithoutVotesOnTimelineInput)
], UserCreateOrConnectWithoutVotesOnTimelineInput.prototype, "create", void 0);
UserCreateOrConnectWithoutVotesOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutVotesOnTimelineInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutVotesOnTimelineInput);
exports.UserCreateOrConnectWithoutVotesOnTimelineInput = UserCreateOrConnectWithoutVotesOnTimelineInput;
