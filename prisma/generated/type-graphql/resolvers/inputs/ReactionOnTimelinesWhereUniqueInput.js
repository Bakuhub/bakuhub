"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput_1 = require("../inputs/ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput");
let ReactionOnTimelinesWhereUniqueInput = class ReactionOnTimelinesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput_1.ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput_1.ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput)
], ReactionOnTimelinesWhereUniqueInput.prototype, "userId_timelineId", void 0);
ReactionOnTimelinesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesWhereUniqueInput", {
        isAbstract: true
    })
], ReactionOnTimelinesWhereUniqueInput);
exports.ReactionOnTimelinesWhereUniqueInput = ReactionOnTimelinesWhereUniqueInput;
