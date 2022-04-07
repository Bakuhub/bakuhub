"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesUpdateManyWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCreateManyTimelineInputEnvelope_1 = require("../inputs/ReactionOnTimelinesCreateManyTimelineInputEnvelope");
const ReactionOnTimelinesCreateOrConnectWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesCreateOrConnectWithoutTimelineInput");
const ReactionOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesCreateWithoutTimelineInput");
const ReactionOnTimelinesScalarWhereInput_1 = require("../inputs/ReactionOnTimelinesScalarWhereInput");
const ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput");
const ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput");
const ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput");
const ReactionOnTimelinesWhereUniqueInput_1 = require("../inputs/ReactionOnTimelinesWhereUniqueInput");
let ReactionOnTimelinesUpdateManyWithoutTimelineInput = class ReactionOnTimelinesUpdateManyWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateWithoutTimelineInput_1.ReactionOnTimelinesCreateWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateOrConnectWithoutTimelineInput_1.ReactionOnTimelinesCreateOrConnectWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput_1.ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutTimelineInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateManyTimelineInputEnvelope_1.ReactionOnTimelinesCreateManyTimelineInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateManyTimelineInputEnvelope_1.ReactionOnTimelinesCreateManyTimelineInputEnvelope)
], ReactionOnTimelinesUpdateManyWithoutTimelineInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutTimelineInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutTimelineInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutTimelineInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutTimelineInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput_1.ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput_1.ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutTimelineInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereInput_1.ReactionOnTimelinesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutTimelineInput.prototype, "deleteMany", void 0);
ReactionOnTimelinesUpdateManyWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesUpdateManyWithoutTimelineInput", {
        isAbstract: true
    })
], ReactionOnTimelinesUpdateManyWithoutTimelineInput);
exports.ReactionOnTimelinesUpdateManyWithoutTimelineInput = ReactionOnTimelinesUpdateManyWithoutTimelineInput;
