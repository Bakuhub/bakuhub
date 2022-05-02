"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReactionOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsOrderByWithRelationInput_1 = require("../../../inputs/ReactionOnVisionsOrderByWithRelationInput");
const ReactionOnVisionsWhereInput_1 = require("../../../inputs/ReactionOnVisionsWhereInput");
const ReactionOnVisionsWhereUniqueInput_1 = require("../../../inputs/ReactionOnVisionsWhereUniqueInput");
const ReactionOnVisionsScalarFieldEnum_1 = require("../../../../enums/ReactionOnVisionsScalarFieldEnum");
let UserReactionOnVisionsArgs = class UserReactionOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput)
], UserReactionOnVisionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsOrderByWithRelationInput_1.ReactionOnVisionsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserReactionOnVisionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput)
], UserReactionOnVisionsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserReactionOnVisionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserReactionOnVisionsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsScalarFieldEnum_1.ReactionOnVisionsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserReactionOnVisionsArgs.prototype, "distinct", void 0);
UserReactionOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserReactionOnVisionsArgs);
exports.UserReactionOnVisionsArgs = UserReactionOnVisionsArgs;