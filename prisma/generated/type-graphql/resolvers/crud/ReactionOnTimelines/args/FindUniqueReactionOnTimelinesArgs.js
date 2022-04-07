"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReactionOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesWhereUniqueInput_1 = require("../../../inputs/ReactionOnTimelinesWhereUniqueInput");
let FindUniqueReactionOnTimelinesArgs = class FindUniqueReactionOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput)
], FindUniqueReactionOnTimelinesArgs.prototype, "where", void 0);
FindUniqueReactionOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueReactionOnTimelinesArgs);
exports.FindUniqueReactionOnTimelinesArgs = FindUniqueReactionOnTimelinesArgs;
