"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateWithoutUserInput_1 = require("../inputs/ReactionOnThreadsCreateWithoutUserInput");
const ReactionOnThreadsWhereUniqueInput_1 = require("../inputs/ReactionOnThreadsWhereUniqueInput");
let ReactionOnThreadsCreateOrConnectWithoutUserInput = class ReactionOnThreadsCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput)
], ReactionOnThreadsCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateWithoutUserInput_1.ReactionOnThreadsCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateWithoutUserInput_1.ReactionOnThreadsCreateWithoutUserInput)
], ReactionOnThreadsCreateOrConnectWithoutUserInput.prototype, "create", void 0);
ReactionOnThreadsCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnThreadsCreateOrConnectWithoutUserInput);
exports.ReactionOnThreadsCreateOrConnectWithoutUserInput = ReactionOnThreadsCreateOrConnectWithoutUserInput;
