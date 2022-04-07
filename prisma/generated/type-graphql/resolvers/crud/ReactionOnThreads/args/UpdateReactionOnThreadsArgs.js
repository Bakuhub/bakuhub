"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReactionOnThreadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsUpdateInput_1 = require("../../../inputs/ReactionOnThreadsUpdateInput");
const ReactionOnThreadsWhereUniqueInput_1 = require("../../../inputs/ReactionOnThreadsWhereUniqueInput");
let UpdateReactionOnThreadsArgs = class UpdateReactionOnThreadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUpdateInput_1.ReactionOnThreadsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUpdateInput_1.ReactionOnThreadsUpdateInput)
], UpdateReactionOnThreadsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput)
], UpdateReactionOnThreadsArgs.prototype, "where", void 0);
UpdateReactionOnThreadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateReactionOnThreadsArgs);
exports.UpdateReactionOnThreadsArgs = UpdateReactionOnThreadsArgs;
