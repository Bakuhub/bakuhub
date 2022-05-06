"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionWhereUniqueInput_1 = require("../../../inputs/VisionWhereUniqueInput");
let DeleteVisionArgs = class DeleteVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], DeleteVisionArgs.prototype, "where", void 0);
DeleteVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteVisionArgs);
exports.DeleteVisionArgs = DeleteVisionArgs;
