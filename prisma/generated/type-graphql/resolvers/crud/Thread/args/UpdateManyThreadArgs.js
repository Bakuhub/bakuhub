"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadUpdateManyMutationInput_1 = require("../../../inputs/ThreadUpdateManyMutationInput");
const ThreadWhereInput_1 = require("../../../inputs/ThreadWhereInput");
let UpdateManyThreadArgs = class UpdateManyThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateManyMutationInput_1.ThreadUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateManyMutationInput_1.ThreadUpdateManyMutationInput)
], UpdateManyThreadArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereInput_1.ThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereInput_1.ThreadWhereInput)
], UpdateManyThreadArgs.prototype, "where", void 0);
UpdateManyThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyThreadArgs);
exports.UpdateManyThreadArgs = UpdateManyThreadArgs;
