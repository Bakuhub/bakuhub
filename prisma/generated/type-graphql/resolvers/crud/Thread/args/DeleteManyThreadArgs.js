"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadWhereInput_1 = require("../../../inputs/ThreadWhereInput");
let DeleteManyThreadArgs = class DeleteManyThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereInput_1.ThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereInput_1.ThreadWhereInput)
], DeleteManyThreadArgs.prototype, "where", void 0);
DeleteManyThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyThreadArgs);
exports.DeleteManyThreadArgs = DeleteManyThreadArgs;
