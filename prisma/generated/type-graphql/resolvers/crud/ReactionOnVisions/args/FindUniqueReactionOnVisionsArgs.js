"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReactionOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsWhereUniqueInput_1 = require("../../../inputs/ReactionOnVisionsWhereUniqueInput");
let FindUniqueReactionOnVisionsArgs = class FindUniqueReactionOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput)
], FindUniqueReactionOnVisionsArgs.prototype, "where", void 0);
FindUniqueReactionOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueReactionOnVisionsArgs);
exports.FindUniqueReactionOnVisionsArgs = FindUniqueReactionOnVisionsArgs;
