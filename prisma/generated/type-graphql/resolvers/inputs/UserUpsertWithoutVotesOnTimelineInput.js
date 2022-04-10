"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutVotesOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutVotesOnTimelineInput_1 = require("../inputs/UserCreateWithoutVotesOnTimelineInput");
const UserUpdateWithoutVotesOnTimelineInput_1 = require("../inputs/UserUpdateWithoutVotesOnTimelineInput");
let UserUpsertWithoutVotesOnTimelineInput = class UserUpsertWithoutVotesOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnTimelineInput_1.UserUpdateWithoutVotesOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutVotesOnTimelineInput_1.UserUpdateWithoutVotesOnTimelineInput)
], UserUpsertWithoutVotesOnTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutVotesOnTimelineInput_1.UserCreateWithoutVotesOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutVotesOnTimelineInput_1.UserCreateWithoutVotesOnTimelineInput)
], UserUpsertWithoutVotesOnTimelineInput.prototype, "create", void 0);
UserUpsertWithoutVotesOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutVotesOnTimelineInput", {
        isAbstract: true
    })
], UserUpsertWithoutVotesOnTimelineInput);
exports.UserUpsertWithoutVotesOnTimelineInput = UserUpsertWithoutVotesOnTimelineInput;
