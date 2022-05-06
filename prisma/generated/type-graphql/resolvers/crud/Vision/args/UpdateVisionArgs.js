"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionUpdateInput_1 = require("../../../inputs/VisionUpdateInput");
const VisionWhereUniqueInput_1 = require("../../../inputs/VisionWhereUniqueInput");
let UpdateVisionArgs = class UpdateVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateInput_1.VisionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateInput_1.VisionUpdateInput)
], UpdateVisionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], UpdateVisionArgs.prototype, "where", void 0);
UpdateVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateVisionArgs);
exports.UpdateVisionArgs = UpdateVisionArgs;
