"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionUpdateManyMutationInput_1 = require("../../../inputs/VisionUpdateManyMutationInput");
const VisionWhereInput_1 = require("../../../inputs/VisionWhereInput");
let UpdateManyVisionArgs = class UpdateManyVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyMutationInput_1.VisionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyMutationInput_1.VisionUpdateManyMutationInput)
], UpdateManyVisionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereInput_1.VisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereInput_1.VisionWhereInput)
], UpdateManyVisionArgs.prototype, "where", void 0);
UpdateManyVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyVisionArgs);
exports.UpdateManyVisionArgs = UpdateManyVisionArgs;
