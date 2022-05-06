"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReactionOnThreadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsWhereUniqueInput_1 = require("../../../inputs/ReactionOnThreadsWhereUniqueInput");
let DeleteReactionOnThreadsArgs = class DeleteReactionOnThreadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput)
], DeleteReactionOnThreadsArgs.prototype, "where", void 0);
DeleteReactionOnThreadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteReactionOnThreadsArgs);
exports.DeleteReactionOnThreadsArgs = DeleteReactionOnThreadsArgs;
