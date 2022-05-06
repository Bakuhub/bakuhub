"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReactionOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCreateManyInput_1 = require("../../../inputs/ReactionOnTimelinesCreateManyInput");
let CreateManyReactionOnTimelinesArgs = class CreateManyReactionOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateManyInput_1.ReactionOnTimelinesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyReactionOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyReactionOnTimelinesArgs.prototype, "skipDuplicates", void 0);
CreateManyReactionOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyReactionOnTimelinesArgs);
exports.CreateManyReactionOnTimelinesArgs = CreateManyReactionOnTimelinesArgs;
