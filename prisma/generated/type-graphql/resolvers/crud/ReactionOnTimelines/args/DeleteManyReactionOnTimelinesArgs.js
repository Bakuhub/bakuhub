"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReactionOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesWhereInput_1 = require("../../../inputs/ReactionOnTimelinesWhereInput");
let DeleteManyReactionOnTimelinesArgs = class DeleteManyReactionOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereInput_1.ReactionOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereInput_1.ReactionOnTimelinesWhereInput)
], DeleteManyReactionOnTimelinesArgs.prototype, "where", void 0);
DeleteManyReactionOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyReactionOnTimelinesArgs);
exports.DeleteManyReactionOnTimelinesArgs = DeleteManyReactionOnTimelinesArgs;
