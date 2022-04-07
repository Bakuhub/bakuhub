"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesCreateNestedManyWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCreateManyTimelineInputEnvelope_1 = require("../inputs/ReactionOnTimelinesCreateManyTimelineInputEnvelope");
const ReactionOnTimelinesCreateOrConnectWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesCreateOrConnectWithoutTimelineInput");
const ReactionOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesCreateWithoutTimelineInput");
const ReactionOnTimelinesWhereUniqueInput_1 = require("../inputs/ReactionOnTimelinesWhereUniqueInput");
let ReactionOnTimelinesCreateNestedManyWithoutTimelineInput = class ReactionOnTimelinesCreateNestedManyWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateWithoutTimelineInput_1.ReactionOnTimelinesCreateWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateOrConnectWithoutTimelineInput_1.ReactionOnTimelinesCreateOrConnectWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateManyTimelineInputEnvelope_1.ReactionOnTimelinesCreateManyTimelineInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateManyTimelineInputEnvelope_1.ReactionOnTimelinesCreateManyTimelineInputEnvelope)
], ReactionOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "connect", void 0);
ReactionOnTimelinesCreateNestedManyWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesCreateNestedManyWithoutTimelineInput", {
        isAbstract: true
    })
], ReactionOnTimelinesCreateNestedManyWithoutTimelineInput);
exports.ReactionOnTimelinesCreateNestedManyWithoutTimelineInput = ReactionOnTimelinesCreateNestedManyWithoutTimelineInput;
