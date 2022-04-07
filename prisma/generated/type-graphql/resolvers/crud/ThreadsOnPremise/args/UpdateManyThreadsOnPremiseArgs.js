"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyThreadsOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseUpdateManyMutationInput_1 = require("../../../inputs/ThreadsOnPremiseUpdateManyMutationInput");
const ThreadsOnPremiseWhereInput_1 = require("../../../inputs/ThreadsOnPremiseWhereInput");
let UpdateManyThreadsOnPremiseArgs = class UpdateManyThreadsOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateManyMutationInput_1.ThreadsOnPremiseUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpdateManyMutationInput_1.ThreadsOnPremiseUpdateManyMutationInput)
], UpdateManyThreadsOnPremiseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput)
], UpdateManyThreadsOnPremiseArgs.prototype, "where", void 0);
UpdateManyThreadsOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyThreadsOnPremiseArgs);
exports.UpdateManyThreadsOnPremiseArgs = UpdateManyThreadsOnPremiseArgs;
