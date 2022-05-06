"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCreateManyUserInputEnvelope_1 = require("../inputs/ReactionOnTimelinesCreateManyUserInputEnvelope");
const ReactionOnTimelinesCreateOrConnectWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesCreateOrConnectWithoutUserInput");
const ReactionOnTimelinesCreateWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesCreateWithoutUserInput");
const ReactionOnTimelinesWhereUniqueInput_1 = require("../inputs/ReactionOnTimelinesWhereUniqueInput");
let ReactionOnTimelinesCreateNestedManyWithoutUserInput = class ReactionOnTimelinesCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateWithoutUserInput_1.ReactionOnTimelinesCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateOrConnectWithoutUserInput_1.ReactionOnTimelinesCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateManyUserInputEnvelope_1.ReactionOnTimelinesCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateManyUserInputEnvelope_1.ReactionOnTimelinesCreateManyUserInputEnvelope)
], ReactionOnTimelinesCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
ReactionOnTimelinesCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnTimelinesCreateNestedManyWithoutUserInput);
exports.ReactionOnTimelinesCreateNestedManyWithoutUserInput = ReactionOnTimelinesCreateNestedManyWithoutUserInput;
