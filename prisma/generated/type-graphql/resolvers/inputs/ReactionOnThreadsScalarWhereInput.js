"use strict";
var ReactionOnThreadsScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumReactionFilter_1 = require("../inputs/EnumReactionFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ReactionOnThreadsScalarWhereInput = ReactionOnThreadsScalarWhereInput_1 = class ReactionOnThreadsScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReactionOnThreadsScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReactionOnThreadsScalarWhereInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFilter_1.EnumReactionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFilter_1.EnumReactionFilter)
], ReactionOnThreadsScalarWhereInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReactionOnThreadsScalarWhereInput.prototype, "createdAt", void 0);
ReactionOnThreadsScalarWhereInput = ReactionOnThreadsScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsScalarWhereInput", {
        isAbstract: true
    })
], ReactionOnThreadsScalarWhereInput);
exports.ReactionOnThreadsScalarWhereInput = ReactionOnThreadsScalarWhereInput;
