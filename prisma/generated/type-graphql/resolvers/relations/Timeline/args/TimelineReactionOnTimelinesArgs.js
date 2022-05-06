"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineReactionOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesOrderByWithRelationInput_1 = require("../../../inputs/ReactionOnTimelinesOrderByWithRelationInput");
const ReactionOnTimelinesWhereInput_1 = require("../../../inputs/ReactionOnTimelinesWhereInput");
const ReactionOnTimelinesWhereUniqueInput_1 = require("../../../inputs/ReactionOnTimelinesWhereUniqueInput");
const ReactionOnTimelinesScalarFieldEnum_1 = require("../../../../enums/ReactionOnTimelinesScalarFieldEnum");
let TimelineReactionOnTimelinesArgs = class TimelineReactionOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereInput_1.ReactionOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereInput_1.ReactionOnTimelinesWhereInput)
], TimelineReactionOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesOrderByWithRelationInput_1.ReactionOnTimelinesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineReactionOnTimelinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput)
], TimelineReactionOnTimelinesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TimelineReactionOnTimelinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TimelineReactionOnTimelinesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarFieldEnum_1.ReactionOnTimelinesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineReactionOnTimelinesArgs.prototype, "distinct", void 0);
TimelineReactionOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TimelineReactionOnTimelinesArgs);
exports.TimelineReactionOnTimelinesArgs = TimelineReactionOnTimelinesArgs;
