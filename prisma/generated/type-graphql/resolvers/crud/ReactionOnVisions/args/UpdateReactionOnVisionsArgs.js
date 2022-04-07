"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReactionOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsUpdateInput_1 = require("../../../inputs/ReactionOnVisionsUpdateInput");
const ReactionOnVisionsWhereUniqueInput_1 = require("../../../inputs/ReactionOnVisionsWhereUniqueInput");
let UpdateReactionOnVisionsArgs = class UpdateReactionOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateInput_1.ReactionOnVisionsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateInput_1.ReactionOnVisionsUpdateInput)
], UpdateReactionOnVisionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput)
], UpdateReactionOnVisionsArgs.prototype, "where", void 0);
UpdateReactionOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateReactionOnVisionsArgs);
exports.UpdateReactionOnVisionsArgs = UpdateReactionOnVisionsArgs;
