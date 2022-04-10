"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertVotesOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionCreateInput_1 = require("../../../inputs/VotesOnVisionCreateInput");
const VotesOnVisionUpdateInput_1 = require("../../../inputs/VotesOnVisionUpdateInput");
const VotesOnVisionWhereUniqueInput_1 = require("../../../inputs/VotesOnVisionWhereUniqueInput");
let UpsertVotesOnVisionArgs = class UpsertVotesOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput)
], UpsertVotesOnVisionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateInput_1.VotesOnVisionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateInput_1.VotesOnVisionCreateInput)
], UpsertVotesOnVisionArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateInput_1.VotesOnVisionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateInput_1.VotesOnVisionUpdateInput)
], UpsertVotesOnVisionArgs.prototype, "update", void 0);
UpsertVotesOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertVotesOnVisionArgs);
exports.UpsertVotesOnVisionArgs = UpsertVotesOnVisionArgs;
