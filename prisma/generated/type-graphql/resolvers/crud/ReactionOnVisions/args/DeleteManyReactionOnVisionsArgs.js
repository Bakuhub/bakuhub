"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReactionOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsWhereInput_1 = require("../../../inputs/ReactionOnVisionsWhereInput");
let DeleteManyReactionOnVisionsArgs = class DeleteManyReactionOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput)
], DeleteManyReactionOnVisionsArgs.prototype, "where", void 0);
DeleteManyReactionOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyReactionOnVisionsArgs);
exports.DeleteManyReactionOnVisionsArgs = DeleteManyReactionOnVisionsArgs;
