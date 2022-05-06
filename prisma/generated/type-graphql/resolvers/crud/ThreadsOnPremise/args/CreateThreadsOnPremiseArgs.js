"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateThreadsOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCreateInput_1 = require("../../../inputs/ThreadsOnPremiseCreateInput");
let CreateThreadsOnPremiseArgs = class CreateThreadsOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateInput_1.ThreadsOnPremiseCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateInput_1.ThreadsOnPremiseCreateInput)
], CreateThreadsOnPremiseArgs.prototype, "data", void 0);
CreateThreadsOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateThreadsOnPremiseArgs);
exports.CreateThreadsOnPremiseArgs = CreateThreadsOnPremiseArgs;
