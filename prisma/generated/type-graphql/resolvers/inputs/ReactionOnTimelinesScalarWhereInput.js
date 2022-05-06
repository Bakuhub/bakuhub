"use strict";
var ReactionOnTimelinesScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumReactionFilter_1 = require("../inputs/EnumReactionFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ReactionOnTimelinesScalarWhereInput = ReactionOnTimelinesScalarWhereInput_1 = class ReactionOnTimelinesScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReactionOnTimelinesScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReactionOnTimelinesScalarWhereInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFilter_1.EnumReactionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFilter_1.EnumReactionFilter)
], ReactionOnTimelinesScalarWhereInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReactionOnTimelinesScalarWhereInput.prototype, "createdAt", void 0);
ReactionOnTimelinesScalarWhereInput = ReactionOnTimelinesScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesScalarWhereInput", {
        isAbstract: true
    })
], ReactionOnTimelinesScalarWhereInput);
exports.ReactionOnTimelinesScalarWhereInput = ReactionOnTimelinesScalarWhereInput;
