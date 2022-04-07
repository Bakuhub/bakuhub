"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReactionOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCreateInput_1 = require("../../../inputs/ReactionOnTimelinesCreateInput");
let CreateReactionOnTimelinesArgs = class CreateReactionOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateInput_1.ReactionOnTimelinesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateInput_1.ReactionOnTimelinesCreateInput)
], CreateReactionOnTimelinesArgs.prototype, "data", void 0);
CreateReactionOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateReactionOnTimelinesArgs);
exports.CreateReactionOnTimelinesArgs = CreateReactionOnTimelinesArgs;
