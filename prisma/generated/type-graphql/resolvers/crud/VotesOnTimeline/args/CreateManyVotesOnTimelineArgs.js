"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyVotesOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineCreateManyInput_1 = require("../../../inputs/VotesOnTimelineCreateManyInput");
let CreateManyVotesOnTimelineArgs = class CreateManyVotesOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineCreateManyInput_1.VotesOnTimelineCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyVotesOnTimelineArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyVotesOnTimelineArgs.prototype, "skipDuplicates", void 0);
CreateManyVotesOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyVotesOnTimelineArgs);
exports.CreateManyVotesOnTimelineArgs = CreateManyVotesOnTimelineArgs;
