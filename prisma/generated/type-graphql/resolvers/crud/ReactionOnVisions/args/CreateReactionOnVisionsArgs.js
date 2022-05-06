"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReactionOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCreateInput_1 = require("../../../inputs/ReactionOnVisionsCreateInput");
let CreateReactionOnVisionsArgs = class CreateReactionOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateInput_1.ReactionOnVisionsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateInput_1.ReactionOnVisionsCreateInput)
], CreateReactionOnVisionsArgs.prototype, "data", void 0);
CreateReactionOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateReactionOnVisionsArgs);
exports.CreateReactionOnVisionsArgs = CreateReactionOnVisionsArgs;
