"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadReactionOnThreadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsOrderByWithRelationInput_1 = require("../../../inputs/ReactionOnThreadsOrderByWithRelationInput");
const ReactionOnThreadsWhereInput_1 = require("../../../inputs/ReactionOnThreadsWhereInput");
const ReactionOnThreadsWhereUniqueInput_1 = require("../../../inputs/ReactionOnThreadsWhereUniqueInput");
const ReactionOnThreadsScalarFieldEnum_1 = require("../../../../enums/ReactionOnThreadsScalarFieldEnum");
let ThreadReactionOnThreadsArgs = class ThreadReactionOnThreadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput)
], ThreadReactionOnThreadsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsOrderByWithRelationInput_1.ReactionOnThreadsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadReactionOnThreadsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput)
], ThreadReactionOnThreadsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadReactionOnThreadsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadReactionOnThreadsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsScalarFieldEnum_1.ReactionOnThreadsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadReactionOnThreadsArgs.prototype, "distinct", void 0);
ThreadReactionOnThreadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ThreadReactionOnThreadsArgs);
exports.ThreadReactionOnThreadsArgs = ThreadReactionOnThreadsArgs;
