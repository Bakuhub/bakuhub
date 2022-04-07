"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReactionOnThreadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsWhereInput_1 = require("../../../inputs/ReactionOnThreadsWhereInput");
let DeleteManyReactionOnThreadsArgs = class DeleteManyReactionOnThreadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput)
], DeleteManyReactionOnThreadsArgs.prototype, "where", void 0);
DeleteManyReactionOnThreadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyReactionOnThreadsArgs);
exports.DeleteManyReactionOnThreadsArgs = DeleteManyReactionOnThreadsArgs;
