"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVotesOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionCreateInput_1 = require("../../../inputs/VotesOnVisionCreateInput");
let CreateVotesOnVisionArgs = class CreateVotesOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateInput_1.VotesOnVisionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateInput_1.VotesOnVisionCreateInput)
], CreateVotesOnVisionArgs.prototype, "data", void 0);
CreateVotesOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateVotesOnVisionArgs);
exports.CreateVotesOnVisionArgs = CreateVotesOnVisionArgs;
