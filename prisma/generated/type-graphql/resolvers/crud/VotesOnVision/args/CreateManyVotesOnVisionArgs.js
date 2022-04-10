"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyVotesOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionCreateManyInput_1 = require("../../../inputs/VotesOnVisionCreateManyInput");
let CreateManyVotesOnVisionArgs = class CreateManyVotesOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionCreateManyInput_1.VotesOnVisionCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyVotesOnVisionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyVotesOnVisionArgs.prototype, "skipDuplicates", void 0);
CreateManyVotesOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyVotesOnVisionArgs);
exports.CreateManyVotesOnVisionArgs = CreateManyVotesOnVisionArgs;
