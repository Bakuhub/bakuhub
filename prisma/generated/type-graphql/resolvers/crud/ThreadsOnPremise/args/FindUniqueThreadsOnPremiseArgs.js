"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueThreadsOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseWhereUniqueInput_1 = require("../../../inputs/ThreadsOnPremiseWhereUniqueInput");
let FindUniqueThreadsOnPremiseArgs = class FindUniqueThreadsOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput)
], FindUniqueThreadsOnPremiseArgs.prototype, "where", void 0);
FindUniqueThreadsOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueThreadsOnPremiseArgs);
exports.FindUniqueThreadsOnPremiseArgs = FindUniqueThreadsOnPremiseArgs;
