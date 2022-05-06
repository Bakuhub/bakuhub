"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadWhereUniqueInput_1 = require("../../../inputs/ThreadWhereUniqueInput");
let FindUniqueThreadArgs = class FindUniqueThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], FindUniqueThreadArgs.prototype, "where", void 0);
FindUniqueThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueThreadArgs);
exports.FindUniqueThreadArgs = FindUniqueThreadArgs;
