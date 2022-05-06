"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput = class ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput.prototype, "timelineId", void 0);
ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput", {
        isAbstract: true
    })
], ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput);
exports.ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput = ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput;
