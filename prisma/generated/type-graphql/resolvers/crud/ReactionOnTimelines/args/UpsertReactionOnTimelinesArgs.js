"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertReactionOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCreateInput_1 = require("../../../inputs/ReactionOnTimelinesCreateInput");
const ReactionOnTimelinesUpdateInput_1 = require("../../../inputs/ReactionOnTimelinesUpdateInput");
const ReactionOnTimelinesWhereUniqueInput_1 = require("../../../inputs/ReactionOnTimelinesWhereUniqueInput");
let UpsertReactionOnTimelinesArgs = class UpsertReactionOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput)
], UpsertReactionOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateInput_1.ReactionOnTimelinesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateInput_1.ReactionOnTimelinesCreateInput)
], UpsertReactionOnTimelinesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateInput_1.ReactionOnTimelinesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateInput_1.ReactionOnTimelinesUpdateInput)
], UpsertReactionOnTimelinesArgs.prototype, "update", void 0);
UpsertReactionOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertReactionOnTimelinesArgs);
exports.UpsertReactionOnTimelinesArgs = UpsertReactionOnTimelinesArgs;
