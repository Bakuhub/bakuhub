"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReactionOnThreadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsWhereUniqueInput_1 = require("../../../inputs/ReactionOnThreadsWhereUniqueInput");
let FindUniqueReactionOnThreadsArgs = class FindUniqueReactionOnThreadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput)
], FindUniqueReactionOnThreadsArgs.prototype, "where", void 0);
FindUniqueReactionOnThreadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueReactionOnThreadsArgs);
exports.FindUniqueReactionOnThreadsArgs = FindUniqueReactionOnThreadsArgs;
