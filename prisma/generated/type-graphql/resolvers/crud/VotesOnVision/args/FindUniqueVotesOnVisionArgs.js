"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVotesOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionWhereUniqueInput_1 = require("../../../inputs/VotesOnVisionWhereUniqueInput");
let FindUniqueVotesOnVisionArgs = class FindUniqueVotesOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput)
], FindUniqueVotesOnVisionArgs.prototype, "where", void 0);
FindUniqueVotesOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueVotesOnVisionArgs);
exports.FindUniqueVotesOnVisionArgs = FindUniqueVotesOnVisionArgs;
