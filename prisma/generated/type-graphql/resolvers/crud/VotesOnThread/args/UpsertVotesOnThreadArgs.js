"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertVotesOnThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadCreateInput_1 = require("../../../inputs/VotesOnThreadCreateInput");
const VotesOnThreadUpdateInput_1 = require("../../../inputs/VotesOnThreadUpdateInput");
const VotesOnThreadWhereUniqueInput_1 = require("../../../inputs/VotesOnThreadWhereUniqueInput");
let UpsertVotesOnThreadArgs = class UpsertVotesOnThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput)
], UpsertVotesOnThreadArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateInput_1.VotesOnThreadCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateInput_1.VotesOnThreadCreateInput)
], UpsertVotesOnThreadArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateInput_1.VotesOnThreadUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateInput_1.VotesOnThreadUpdateInput)
], UpsertVotesOnThreadArgs.prototype, "update", void 0);
UpsertVotesOnThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertVotesOnThreadArgs);
exports.UpsertVotesOnThreadArgs = UpsertVotesOnThreadArgs;
