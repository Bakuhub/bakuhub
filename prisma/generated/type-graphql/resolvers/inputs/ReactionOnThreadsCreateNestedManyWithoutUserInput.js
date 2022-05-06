"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateManyUserInputEnvelope_1 = require("../inputs/ReactionOnThreadsCreateManyUserInputEnvelope");
const ReactionOnThreadsCreateOrConnectWithoutUserInput_1 = require("../inputs/ReactionOnThreadsCreateOrConnectWithoutUserInput");
const ReactionOnThreadsCreateWithoutUserInput_1 = require("../inputs/ReactionOnThreadsCreateWithoutUserInput");
const ReactionOnThreadsWhereUniqueInput_1 = require("../inputs/ReactionOnThreadsWhereUniqueInput");
let ReactionOnThreadsCreateNestedManyWithoutUserInput = class ReactionOnThreadsCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsCreateWithoutUserInput_1.ReactionOnThreadsCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsCreateOrConnectWithoutUserInput_1.ReactionOnThreadsCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateManyUserInputEnvelope_1.ReactionOnThreadsCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateManyUserInputEnvelope_1.ReactionOnThreadsCreateManyUserInputEnvelope)
], ReactionOnThreadsCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
ReactionOnThreadsCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnThreadsCreateNestedManyWithoutUserInput);
exports.ReactionOnThreadsCreateNestedManyWithoutUserInput = ReactionOnThreadsCreateNestedManyWithoutUserInput;
