"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVotesOnThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadCreateInput_1 = require("../../../inputs/VotesOnThreadCreateInput");
let CreateVotesOnThreadArgs = class CreateVotesOnThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateInput_1.VotesOnThreadCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateInput_1.VotesOnThreadCreateInput)
], CreateVotesOnThreadArgs.prototype, "data", void 0);
CreateVotesOnThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateVotesOnThreadArgs);
exports.CreateVotesOnThreadArgs = CreateVotesOnThreadArgs;
