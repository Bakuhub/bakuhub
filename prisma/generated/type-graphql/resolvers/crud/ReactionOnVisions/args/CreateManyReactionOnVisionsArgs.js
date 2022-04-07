"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReactionOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCreateManyInput_1 = require("../../../inputs/ReactionOnVisionsCreateManyInput");
let CreateManyReactionOnVisionsArgs = class CreateManyReactionOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsCreateManyInput_1.ReactionOnVisionsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyReactionOnVisionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyReactionOnVisionsArgs.prototype, "skipDuplicates", void 0);
CreateManyReactionOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyReactionOnVisionsArgs);
exports.CreateManyReactionOnVisionsArgs = CreateManyReactionOnVisionsArgs;
