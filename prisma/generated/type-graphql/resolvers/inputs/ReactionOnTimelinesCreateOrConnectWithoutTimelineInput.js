"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesCreateOrConnectWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesCreateWithoutTimelineInput");
const ReactionOnTimelinesWhereUniqueInput_1 = require("../inputs/ReactionOnTimelinesWhereUniqueInput");
let ReactionOnTimelinesCreateOrConnectWithoutTimelineInput = class ReactionOnTimelinesCreateOrConnectWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput)
], ReactionOnTimelinesCreateOrConnectWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateWithoutTimelineInput_1.ReactionOnTimelinesCreateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateWithoutTimelineInput_1.ReactionOnTimelinesCreateWithoutTimelineInput)
], ReactionOnTimelinesCreateOrConnectWithoutTimelineInput.prototype, "create", void 0);
ReactionOnTimelinesCreateOrConnectWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesCreateOrConnectWithoutTimelineInput", {
        isAbstract: true
    })
], ReactionOnTimelinesCreateOrConnectWithoutTimelineInput);
exports.ReactionOnTimelinesCreateOrConnectWithoutTimelineInput = ReactionOnTimelinesCreateOrConnectWithoutTimelineInput;
