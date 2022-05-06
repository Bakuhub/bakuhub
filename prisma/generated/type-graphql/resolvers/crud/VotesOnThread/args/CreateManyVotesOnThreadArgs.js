"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyVotesOnThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadCreateManyInput_1 = require("../../../inputs/VotesOnThreadCreateManyInput");
let CreateManyVotesOnThreadArgs = class CreateManyVotesOnThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadCreateManyInput_1.VotesOnThreadCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyVotesOnThreadArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyVotesOnThreadArgs.prototype, "skipDuplicates", void 0);
CreateManyVotesOnThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyVotesOnThreadArgs);
exports.CreateManyVotesOnThreadArgs = CreateManyVotesOnThreadArgs;
