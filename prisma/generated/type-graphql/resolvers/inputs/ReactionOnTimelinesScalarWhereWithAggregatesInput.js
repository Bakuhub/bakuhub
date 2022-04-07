"use strict";
var ReactionOnTimelinesScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumReactionWithAggregatesFilter_1 = require("../inputs/EnumReactionWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let ReactionOnTimelinesScalarWhereWithAggregatesInput = ReactionOnTimelinesScalarWhereWithAggregatesInput_1 = class ReactionOnTimelinesScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ReactionOnTimelinesScalarWhereWithAggregatesInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ReactionOnTimelinesScalarWhereWithAggregatesInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionWithAggregatesFilter_1.EnumReactionWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionWithAggregatesFilter_1.EnumReactionWithAggregatesFilter)
], ReactionOnTimelinesScalarWhereWithAggregatesInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], ReactionOnTimelinesScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
ReactionOnTimelinesScalarWhereWithAggregatesInput = ReactionOnTimelinesScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], ReactionOnTimelinesScalarWhereWithAggregatesInput);
exports.ReactionOnTimelinesScalarWhereWithAggregatesInput = ReactionOnTimelinesScalarWhereWithAggregatesInput;
