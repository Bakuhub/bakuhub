"use strict";
var ReactionOnVisionsScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumReactionWithAggregatesFilter_1 = require("../inputs/EnumReactionWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let ReactionOnVisionsScalarWhereWithAggregatesInput = ReactionOnVisionsScalarWhereWithAggregatesInput_1 = class ReactionOnVisionsScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ReactionOnVisionsScalarWhereWithAggregatesInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ReactionOnVisionsScalarWhereWithAggregatesInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionWithAggregatesFilter_1.EnumReactionWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionWithAggregatesFilter_1.EnumReactionWithAggregatesFilter)
], ReactionOnVisionsScalarWhereWithAggregatesInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], ReactionOnVisionsScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
ReactionOnVisionsScalarWhereWithAggregatesInput = ReactionOnVisionsScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], ReactionOnVisionsScalarWhereWithAggregatesInput);
exports.ReactionOnVisionsScalarWhereWithAggregatesInput = ReactionOnVisionsScalarWhereWithAggregatesInput;
