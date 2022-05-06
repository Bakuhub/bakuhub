"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCreateNestedManyWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateManyThreadInputEnvelope_1 = require("../inputs/ReactionOnThreadsCreateManyThreadInputEnvelope");
const ReactionOnThreadsCreateOrConnectWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsCreateOrConnectWithoutThreadInput");
const ReactionOnThreadsCreateWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsCreateWithoutThreadInput");
const ReactionOnThreadsWhereUniqueInput_1 = require("../inputs/ReactionOnThreadsWhereUniqueInput");
let ReactionOnThreadsCreateNestedManyWithoutThreadInput = class ReactionOnThreadsCreateNestedManyWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsCreateWithoutThreadInput_1.ReactionOnThreadsCreateWithoutThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsCreateNestedManyWithoutThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsCreateOrConnectWithoutThreadInput_1.ReactionOnThreadsCreateOrConnectWithoutThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsCreateNestedManyWithoutThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateManyThreadInputEnvelope_1.ReactionOnThreadsCreateManyThreadInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateManyThreadInputEnvelope_1.ReactionOnThreadsCreateManyThreadInputEnvelope)
], ReactionOnThreadsCreateNestedManyWithoutThreadInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsCreateNestedManyWithoutThreadInput.prototype, "connect", void 0);
ReactionOnThreadsCreateNestedManyWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsCreateNestedManyWithoutThreadInput", {
        isAbstract: true
    })
], ReactionOnThreadsCreateNestedManyWithoutThreadInput);
exports.ReactionOnThreadsCreateNestedManyWithoutThreadInput = ReactionOnThreadsCreateNestedManyWithoutThreadInput;
