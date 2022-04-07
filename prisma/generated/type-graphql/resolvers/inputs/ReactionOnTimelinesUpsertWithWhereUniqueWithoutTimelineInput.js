"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesCreateWithoutTimelineInput");
const ReactionOnTimelinesUpdateWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesUpdateWithoutTimelineInput");
const ReactionOnTimelinesWhereUniqueInput_1 = require("../inputs/ReactionOnTimelinesWhereUniqueInput");
let ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = class ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput)
], ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateWithoutTimelineInput_1.ReactionOnTimelinesUpdateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateWithoutTimelineInput_1.ReactionOnTimelinesUpdateWithoutTimelineInput)
], ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateWithoutTimelineInput_1.ReactionOnTimelinesCreateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateWithoutTimelineInput_1.ReactionOnTimelinesCreateWithoutTimelineInput)
], ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "create", void 0);
ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput", {
        isAbstract: true
    })
], ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput);
exports.ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput;
