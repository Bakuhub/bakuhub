"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReactionOnThreadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsUpdateManyMutationInput_1 = require("../../../inputs/ReactionOnThreadsUpdateManyMutationInput");
const ReactionOnThreadsWhereInput_1 = require("../../../inputs/ReactionOnThreadsWhereInput");
let UpdateManyReactionOnThreadsArgs = class UpdateManyReactionOnThreadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUpdateManyMutationInput_1.ReactionOnThreadsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUpdateManyMutationInput_1.ReactionOnThreadsUpdateManyMutationInput)
], UpdateManyReactionOnThreadsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput)
], UpdateManyReactionOnThreadsArgs.prototype, "where", void 0);
UpdateManyReactionOnThreadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyReactionOnThreadsArgs);
exports.UpdateManyReactionOnThreadsArgs = UpdateManyReactionOnThreadsArgs;
