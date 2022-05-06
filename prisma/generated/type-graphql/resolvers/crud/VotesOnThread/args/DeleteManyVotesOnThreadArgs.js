"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyVotesOnThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadWhereInput_1 = require("../../../inputs/VotesOnThreadWhereInput");
let DeleteManyVotesOnThreadArgs = class DeleteManyVotesOnThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereInput_1.VotesOnThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereInput_1.VotesOnThreadWhereInput)
], DeleteManyVotesOnThreadArgs.prototype, "where", void 0);
DeleteManyVotesOnThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyVotesOnThreadArgs);
exports.DeleteManyVotesOnThreadArgs = DeleteManyVotesOnThreadArgs;
