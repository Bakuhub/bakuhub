"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReactionOnThreadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsOrderByWithRelationInput_1 = require("../../../inputs/ReactionOnThreadsOrderByWithRelationInput");
const ReactionOnThreadsWhereInput_1 = require("../../../inputs/ReactionOnThreadsWhereInput");
const ReactionOnThreadsWhereUniqueInput_1 = require("../../../inputs/ReactionOnThreadsWhereUniqueInput");
const ReactionOnThreadsScalarFieldEnum_1 = require("../../../../enums/ReactionOnThreadsScalarFieldEnum");
let FindManyReactionOnThreadsArgs = class FindManyReactionOnThreadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput)
], FindManyReactionOnThreadsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsOrderByWithRelationInput_1.ReactionOnThreadsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyReactionOnThreadsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput)
], FindManyReactionOnThreadsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyReactionOnThreadsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyReactionOnThreadsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsScalarFieldEnum_1.ReactionOnThreadsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyReactionOnThreadsArgs.prototype, "distinct", void 0);
FindManyReactionOnThreadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyReactionOnThreadsArgs);
exports.FindManyReactionOnThreadsArgs = FindManyReactionOnThreadsArgs;
