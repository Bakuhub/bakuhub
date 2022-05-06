"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCreateManyUserInputEnvelope_1 = require("../inputs/ReactionOnVisionsCreateManyUserInputEnvelope");
const ReactionOnVisionsCreateOrConnectWithoutUserInput_1 = require("../inputs/ReactionOnVisionsCreateOrConnectWithoutUserInput");
const ReactionOnVisionsCreateWithoutUserInput_1 = require("../inputs/ReactionOnVisionsCreateWithoutUserInput");
const ReactionOnVisionsWhereUniqueInput_1 = require("../inputs/ReactionOnVisionsWhereUniqueInput");
let ReactionOnVisionsCreateNestedManyWithoutUserInput = class ReactionOnVisionsCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsCreateWithoutUserInput_1.ReactionOnVisionsCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsCreateOrConnectWithoutUserInput_1.ReactionOnVisionsCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateManyUserInputEnvelope_1.ReactionOnVisionsCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateManyUserInputEnvelope_1.ReactionOnVisionsCreateManyUserInputEnvelope)
], ReactionOnVisionsCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
ReactionOnVisionsCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnVisionsCreateNestedManyWithoutUserInput);
exports.ReactionOnVisionsCreateNestedManyWithoutUserInput = ReactionOnVisionsCreateNestedManyWithoutUserInput;
