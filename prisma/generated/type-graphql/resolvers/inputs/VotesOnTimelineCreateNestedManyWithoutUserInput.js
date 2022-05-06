"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineCreateManyUserInputEnvelope_1 = require("../inputs/VotesOnTimelineCreateManyUserInputEnvelope");
const VotesOnTimelineCreateOrConnectWithoutUserInput_1 = require("../inputs/VotesOnTimelineCreateOrConnectWithoutUserInput");
const VotesOnTimelineCreateWithoutUserInput_1 = require("../inputs/VotesOnTimelineCreateWithoutUserInput");
const VotesOnTimelineWhereUniqueInput_1 = require("../inputs/VotesOnTimelineWhereUniqueInput");
let VotesOnTimelineCreateNestedManyWithoutUserInput = class VotesOnTimelineCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineCreateWithoutUserInput_1.VotesOnTimelineCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineCreateOrConnectWithoutUserInput_1.VotesOnTimelineCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateManyUserInputEnvelope_1.VotesOnTimelineCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateManyUserInputEnvelope_1.VotesOnTimelineCreateManyUserInputEnvelope)
], VotesOnTimelineCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
VotesOnTimelineCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], VotesOnTimelineCreateNestedManyWithoutUserInput);
exports.VotesOnTimelineCreateNestedManyWithoutUserInput = VotesOnTimelineCreateNestedManyWithoutUserInput;
