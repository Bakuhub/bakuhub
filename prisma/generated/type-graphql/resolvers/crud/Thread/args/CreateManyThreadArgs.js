"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateManyInput_1 = require("../../../inputs/ThreadCreateManyInput");
let CreateManyThreadArgs = class CreateManyThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadCreateManyInput_1.ThreadCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyThreadArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyThreadArgs.prototype, "skipDuplicates", void 0);
CreateManyThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyThreadArgs);
exports.CreateManyThreadArgs = CreateManyThreadArgs;
