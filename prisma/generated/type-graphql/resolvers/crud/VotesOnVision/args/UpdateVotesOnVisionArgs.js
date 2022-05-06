"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVotesOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionUpdateInput_1 = require("../../../inputs/VotesOnVisionUpdateInput");
const VotesOnVisionWhereUniqueInput_1 = require("../../../inputs/VotesOnVisionWhereUniqueInput");
let UpdateVotesOnVisionArgs = class UpdateVotesOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateInput_1.VotesOnVisionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateInput_1.VotesOnVisionUpdateInput)
], UpdateVotesOnVisionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput)
], UpdateVotesOnVisionArgs.prototype, "where", void 0);
UpdateVotesOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateVotesOnVisionArgs);
exports.UpdateVotesOnVisionArgs = UpdateVotesOnVisionArgs;
