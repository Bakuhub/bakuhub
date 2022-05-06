"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVotesOnThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadUpdateInput_1 = require("../../../inputs/VotesOnThreadUpdateInput");
const VotesOnThreadWhereUniqueInput_1 = require("../../../inputs/VotesOnThreadWhereUniqueInput");
let UpdateVotesOnThreadArgs = class UpdateVotesOnThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateInput_1.VotesOnThreadUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateInput_1.VotesOnThreadUpdateInput)
], UpdateVotesOnThreadArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput)
], UpdateVotesOnThreadArgs.prototype, "where", void 0);
UpdateVotesOnThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateVotesOnThreadArgs);
exports.UpdateVotesOnThreadArgs = UpdateVotesOnThreadArgs;
