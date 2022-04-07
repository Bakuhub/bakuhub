"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReactionOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesWhereUniqueInput_1 = require("../../../inputs/ReactionOnTimelinesWhereUniqueInput");
let DeleteReactionOnTimelinesArgs = class DeleteReactionOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput)
], DeleteReactionOnTimelinesArgs.prototype, "where", void 0);
DeleteReactionOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteReactionOnTimelinesArgs);
exports.DeleteReactionOnTimelinesArgs = DeleteReactionOnTimelinesArgs;
