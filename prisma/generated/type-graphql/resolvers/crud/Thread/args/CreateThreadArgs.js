"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateInput_1 = require("../../../inputs/ThreadCreateInput");
let CreateThreadArgs = class CreateThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateInput_1.ThreadCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateInput_1.ThreadCreateInput)
], CreateThreadArgs.prototype, "data", void 0);
CreateThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateThreadArgs);
exports.CreateThreadArgs = CreateThreadArgs;
