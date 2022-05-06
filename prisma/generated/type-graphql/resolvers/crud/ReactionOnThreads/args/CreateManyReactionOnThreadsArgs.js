"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReactionOnThreadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateManyInput_1 = require("../../../inputs/ReactionOnThreadsCreateManyInput");
let CreateManyReactionOnThreadsArgs = class CreateManyReactionOnThreadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsCreateManyInput_1.ReactionOnThreadsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyReactionOnThreadsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyReactionOnThreadsArgs.prototype, "skipDuplicates", void 0);
CreateManyReactionOnThreadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyReactionOnThreadsArgs);
exports.CreateManyReactionOnThreadsArgs = CreateManyReactionOnThreadsArgs;
