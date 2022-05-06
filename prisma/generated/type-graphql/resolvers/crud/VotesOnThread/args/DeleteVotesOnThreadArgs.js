"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVotesOnThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadWhereUniqueInput_1 = require("../../../inputs/VotesOnThreadWhereUniqueInput");
let DeleteVotesOnThreadArgs = class DeleteVotesOnThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput)
], DeleteVotesOnThreadArgs.prototype, "where", void 0);
DeleteVotesOnThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteVotesOnThreadArgs);
exports.DeleteVotesOnThreadArgs = DeleteVotesOnThreadArgs;
