"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReactionOnThreadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateInput_1 = require("../../../inputs/ReactionOnThreadsCreateInput");
let CreateReactionOnThreadsArgs = class CreateReactionOnThreadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateInput_1.ReactionOnThreadsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateInput_1.ReactionOnThreadsCreateInput)
], CreateReactionOnThreadsArgs.prototype, "data", void 0);
CreateReactionOnThreadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateReactionOnThreadsArgs);
exports.CreateReactionOnThreadsArgs = CreateReactionOnThreadsArgs;
