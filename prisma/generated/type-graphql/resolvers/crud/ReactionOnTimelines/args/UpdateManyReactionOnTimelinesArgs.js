"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReactionOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesUpdateManyMutationInput_1 = require("../../../inputs/ReactionOnTimelinesUpdateManyMutationInput");
const ReactionOnTimelinesWhereInput_1 = require("../../../inputs/ReactionOnTimelinesWhereInput");
let UpdateManyReactionOnTimelinesArgs = class UpdateManyReactionOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateManyMutationInput_1.ReactionOnTimelinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateManyMutationInput_1.ReactionOnTimelinesUpdateManyMutationInput)
], UpdateManyReactionOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereInput_1.ReactionOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereInput_1.ReactionOnTimelinesWhereInput)
], UpdateManyReactionOnTimelinesArgs.prototype, "where", void 0);
UpdateManyReactionOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyReactionOnTimelinesArgs);
exports.UpdateManyReactionOnTimelinesArgs = UpdateManyReactionOnTimelinesArgs;
