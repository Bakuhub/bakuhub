"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVotesOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionWhereUniqueInput_1 = require("../../../inputs/VotesOnVisionWhereUniqueInput");
let DeleteVotesOnVisionArgs = class DeleteVotesOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput)
], DeleteVotesOnVisionArgs.prototype, "where", void 0);
DeleteVotesOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteVotesOnVisionArgs);
exports.DeleteVotesOnVisionArgs = DeleteVotesOnVisionArgs;
