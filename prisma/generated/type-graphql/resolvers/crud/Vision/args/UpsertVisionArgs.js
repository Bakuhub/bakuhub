"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateInput_1 = require("../../../inputs/VisionCreateInput");
const VisionUpdateInput_1 = require("../../../inputs/VisionUpdateInput");
const VisionWhereUniqueInput_1 = require("../../../inputs/VisionWhereUniqueInput");
let UpsertVisionArgs = class UpsertVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], UpsertVisionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateInput_1.VisionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateInput_1.VisionCreateInput)
], UpsertVisionArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateInput_1.VisionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateInput_1.VisionUpdateInput)
], UpsertVisionArgs.prototype, "update", void 0);
UpsertVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertVisionArgs);
exports.UpsertVisionArgs = UpsertVisionArgs;
