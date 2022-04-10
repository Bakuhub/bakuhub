"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyVotesOnThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadUpdateManyMutationInput_1 = require("../../../inputs/VotesOnThreadUpdateManyMutationInput");
const VotesOnThreadWhereInput_1 = require("../../../inputs/VotesOnThreadWhereInput");
let UpdateManyVotesOnThreadArgs = class UpdateManyVotesOnThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateManyMutationInput_1.VotesOnThreadUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateManyMutationInput_1.VotesOnThreadUpdateManyMutationInput)
], UpdateManyVotesOnThreadArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereInput_1.VotesOnThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereInput_1.VotesOnThreadWhereInput)
], UpdateManyVotesOnThreadArgs.prototype, "where", void 0);
UpdateManyVotesOnThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyVotesOnThreadArgs);
exports.UpdateManyVotesOnThreadArgs = UpdateManyVotesOnThreadArgs;
