"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReactionOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsOrderByWithRelationInput_1 = require("../../../inputs/ReactionOnVisionsOrderByWithRelationInput");
const ReactionOnVisionsWhereInput_1 = require("../../../inputs/ReactionOnVisionsWhereInput");
const ReactionOnVisionsWhereUniqueInput_1 = require("../../../inputs/ReactionOnVisionsWhereUniqueInput");
let AggregateReactionOnVisionsArgs = class AggregateReactionOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput)
], AggregateReactionOnVisionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsOrderByWithRelationInput_1.ReactionOnVisionsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateReactionOnVisionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput)
], AggregateReactionOnVisionsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateReactionOnVisionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateReactionOnVisionsArgs.prototype, "skip", void 0);
AggregateReactionOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateReactionOnVisionsArgs);
exports.AggregateReactionOnVisionsArgs = AggregateReactionOnVisionsArgs;
