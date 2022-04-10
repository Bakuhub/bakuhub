"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyVotesOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionWhereInput_1 = require("../../../inputs/VotesOnVisionWhereInput");
let DeleteManyVotesOnVisionArgs = class DeleteManyVotesOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereInput_1.VotesOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereInput_1.VotesOnVisionWhereInput)
], DeleteManyVotesOnVisionArgs.prototype, "where", void 0);
DeleteManyVotesOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyVotesOnVisionArgs);
exports.DeleteManyVotesOnVisionArgs = DeleteManyVotesOnVisionArgs;
