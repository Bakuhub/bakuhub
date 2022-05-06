"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertReactionOnThreadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateInput_1 = require("../../../inputs/ReactionOnThreadsCreateInput");
const ReactionOnThreadsUpdateInput_1 = require("../../../inputs/ReactionOnThreadsUpdateInput");
const ReactionOnThreadsWhereUniqueInput_1 = require("../../../inputs/ReactionOnThreadsWhereUniqueInput");
let UpsertReactionOnThreadsArgs = class UpsertReactionOnThreadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput)
], UpsertReactionOnThreadsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateInput_1.ReactionOnThreadsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateInput_1.ReactionOnThreadsCreateInput)
], UpsertReactionOnThreadsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUpdateInput_1.ReactionOnThreadsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUpdateInput_1.ReactionOnThreadsUpdateInput)
], UpsertReactionOnThreadsArgs.prototype, "update", void 0);
UpsertReactionOnThreadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertReactionOnThreadsArgs);
exports.UpsertReactionOnThreadsArgs = UpsertReactionOnThreadsArgs;
