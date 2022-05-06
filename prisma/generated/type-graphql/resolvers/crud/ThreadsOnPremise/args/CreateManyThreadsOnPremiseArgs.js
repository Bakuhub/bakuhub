"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyThreadsOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCreateManyInput_1 = require("../../../inputs/ThreadsOnPremiseCreateManyInput");
let CreateManyThreadsOnPremiseArgs = class CreateManyThreadsOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseCreateManyInput_1.ThreadsOnPremiseCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyThreadsOnPremiseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyThreadsOnPremiseArgs.prototype, "skipDuplicates", void 0);
CreateManyThreadsOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyThreadsOnPremiseArgs);
exports.CreateManyThreadsOnPremiseArgs = CreateManyThreadsOnPremiseArgs;
