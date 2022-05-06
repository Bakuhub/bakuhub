"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyVotesOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseCreateManyInput_1 = require("../../../inputs/VotesOnPremiseCreateManyInput");
let CreateManyVotesOnPremiseArgs = class CreateManyVotesOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseCreateManyInput_1.VotesOnPremiseCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyVotesOnPremiseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyVotesOnPremiseArgs.prototype, "skipDuplicates", void 0);
CreateManyVotesOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyVotesOnPremiseArgs);
exports.CreateManyVotesOnPremiseArgs = CreateManyVotesOnPremiseArgs;
