"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyVotesOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionUpdateManyMutationInput_1 = require("../../../inputs/VotesOnVisionUpdateManyMutationInput");
const VotesOnVisionWhereInput_1 = require("../../../inputs/VotesOnVisionWhereInput");
let UpdateManyVotesOnVisionArgs = class UpdateManyVotesOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateManyMutationInput_1.VotesOnVisionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateManyMutationInput_1.VotesOnVisionUpdateManyMutationInput)
], UpdateManyVotesOnVisionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereInput_1.VotesOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereInput_1.VotesOnVisionWhereInput)
], UpdateManyVotesOnVisionArgs.prototype, "where", void 0);
UpdateManyVotesOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyVotesOnVisionArgs);
exports.UpdateManyVotesOnVisionArgs = UpdateManyVotesOnVisionArgs;
