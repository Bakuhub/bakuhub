"use strict";
var ReactionOnVisionsScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumReactionFilter_1 = require("../inputs/EnumReactionFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ReactionOnVisionsScalarWhereInput = ReactionOnVisionsScalarWhereInput_1 = class ReactionOnVisionsScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReactionOnVisionsScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReactionOnVisionsScalarWhereInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFilter_1.EnumReactionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFilter_1.EnumReactionFilter)
], ReactionOnVisionsScalarWhereInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReactionOnVisionsScalarWhereInput.prototype, "createdAt", void 0);
ReactionOnVisionsScalarWhereInput = ReactionOnVisionsScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsScalarWhereInput", {
        isAbstract: true
    })
], ReactionOnVisionsScalarWhereInput);
exports.ReactionOnVisionsScalarWhereInput = ReactionOnVisionsScalarWhereInput;
