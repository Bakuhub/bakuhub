"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadUpdateInput_1 = require("../../../inputs/ThreadUpdateInput");
const ThreadWhereUniqueInput_1 = require("../../../inputs/ThreadWhereUniqueInput");
let UpdateThreadArgs = class UpdateThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateInput_1.ThreadUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateInput_1.ThreadUpdateInput)
], UpdateThreadArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], UpdateThreadArgs.prototype, "where", void 0);
UpdateThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateThreadArgs);
exports.UpdateThreadArgs = UpdateThreadArgs;
