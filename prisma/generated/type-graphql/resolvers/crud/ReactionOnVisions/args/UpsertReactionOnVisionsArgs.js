"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertReactionOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCreateInput_1 = require("../../../inputs/ReactionOnVisionsCreateInput");
const ReactionOnVisionsUpdateInput_1 = require("../../../inputs/ReactionOnVisionsUpdateInput");
const ReactionOnVisionsWhereUniqueInput_1 = require("../../../inputs/ReactionOnVisionsWhereUniqueInput");
let UpsertReactionOnVisionsArgs = class UpsertReactionOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput)
], UpsertReactionOnVisionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateInput_1.ReactionOnVisionsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateInput_1.ReactionOnVisionsCreateInput)
], UpsertReactionOnVisionsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateInput_1.ReactionOnVisionsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateInput_1.ReactionOnVisionsUpdateInput)
], UpsertReactionOnVisionsArgs.prototype, "update", void 0);
UpsertReactionOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertReactionOnVisionsArgs);
exports.UpsertReactionOnVisionsArgs = UpsertReactionOnVisionsArgs;
