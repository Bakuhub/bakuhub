"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReactionOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesUpdateInput_1 = require("../../../inputs/ReactionOnTimelinesUpdateInput");
const ReactionOnTimelinesWhereUniqueInput_1 = require("../../../inputs/ReactionOnTimelinesWhereUniqueInput");
let UpdateReactionOnTimelinesArgs = class UpdateReactionOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateInput_1.ReactionOnTimelinesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateInput_1.ReactionOnTimelinesUpdateInput)
], UpdateReactionOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput)
], UpdateReactionOnTimelinesArgs.prototype, "where", void 0);
UpdateReactionOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateReactionOnTimelinesArgs);
exports.UpdateReactionOnTimelinesArgs = UpdateReactionOnTimelinesArgs;
