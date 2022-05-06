"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateNestedOneWithoutReactionOnThreadsInput_1 = require("../inputs/ThreadCreateNestedOneWithoutReactionOnThreadsInput");
const UserCreateNestedOneWithoutReactionOnThreadsInput_1 = require("../inputs/UserCreateNestedOneWithoutReactionOnThreadsInput");
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnThreadsCreateInput = class ReactionOnThreadsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionOnThreadsInput_1.UserCreateNestedOneWithoutReactionOnThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutReactionOnThreadsInput_1.UserCreateNestedOneWithoutReactionOnThreadsInput)
], ReactionOnThreadsCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutReactionOnThreadsInput_1.ThreadCreateNestedOneWithoutReactionOnThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedOneWithoutReactionOnThreadsInput_1.ThreadCreateNestedOneWithoutReactionOnThreadsInput)
], ReactionOnThreadsCreateInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsCreateInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnThreadsCreateInput.prototype, "createdAt", void 0);
ReactionOnThreadsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsCreateInput", {
        isAbstract: true
    })
], ReactionOnThreadsCreateInput);
exports.ReactionOnThreadsCreateInput = ReactionOnThreadsCreateInput;
