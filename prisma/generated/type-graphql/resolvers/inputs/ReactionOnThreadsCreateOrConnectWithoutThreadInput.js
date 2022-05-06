"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCreateOrConnectWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsCreateWithoutThreadInput");
const ReactionOnThreadsWhereUniqueInput_1 = require("../inputs/ReactionOnThreadsWhereUniqueInput");
let ReactionOnThreadsCreateOrConnectWithoutThreadInput = class ReactionOnThreadsCreateOrConnectWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput)
], ReactionOnThreadsCreateOrConnectWithoutThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateWithoutThreadInput_1.ReactionOnThreadsCreateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateWithoutThreadInput_1.ReactionOnThreadsCreateWithoutThreadInput)
], ReactionOnThreadsCreateOrConnectWithoutThreadInput.prototype, "create", void 0);
ReactionOnThreadsCreateOrConnectWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsCreateOrConnectWithoutThreadInput", {
        isAbstract: true
    })
], ReactionOnThreadsCreateOrConnectWithoutThreadInput);
exports.ReactionOnThreadsCreateOrConnectWithoutThreadInput = ReactionOnThreadsCreateOrConnectWithoutThreadInput;
