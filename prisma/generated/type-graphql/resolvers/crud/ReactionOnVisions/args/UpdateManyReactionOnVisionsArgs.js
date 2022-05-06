"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReactionOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsUpdateManyMutationInput_1 = require("../../../inputs/ReactionOnVisionsUpdateManyMutationInput");
const ReactionOnVisionsWhereInput_1 = require("../../../inputs/ReactionOnVisionsWhereInput");
let UpdateManyReactionOnVisionsArgs = class UpdateManyReactionOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateManyMutationInput_1.ReactionOnVisionsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateManyMutationInput_1.ReactionOnVisionsUpdateManyMutationInput)
], UpdateManyReactionOnVisionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput)
], UpdateManyReactionOnVisionsArgs.prototype, "where", void 0);
UpdateManyReactionOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyReactionOnVisionsArgs);
exports.UpdateManyReactionOnVisionsArgs = UpdateManyReactionOnVisionsArgs;
