"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateThreadsOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseUpdateInput_1 = require("../../../inputs/ThreadsOnPremiseUpdateInput");
const ThreadsOnPremiseWhereUniqueInput_1 = require("../../../inputs/ThreadsOnPremiseWhereUniqueInput");
let UpdateThreadsOnPremiseArgs = class UpdateThreadsOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateInput_1.ThreadsOnPremiseUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpdateInput_1.ThreadsOnPremiseUpdateInput)
], UpdateThreadsOnPremiseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput)
], UpdateThreadsOnPremiseArgs.prototype, "where", void 0);
UpdateThreadsOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateThreadsOnPremiseArgs);
exports.UpdateThreadsOnPremiseArgs = UpdateThreadsOnPremiseArgs;
