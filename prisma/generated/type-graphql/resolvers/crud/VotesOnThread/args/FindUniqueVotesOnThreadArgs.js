"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVotesOnThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadWhereUniqueInput_1 = require("../../../inputs/VotesOnThreadWhereUniqueInput");
let FindUniqueVotesOnThreadArgs = class FindUniqueVotesOnThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput)
], FindUniqueVotesOnThreadArgs.prototype, "where", void 0);
FindUniqueVotesOnThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueVotesOnThreadArgs);
exports.FindUniqueVotesOnThreadArgs = FindUniqueVotesOnThreadArgs;
