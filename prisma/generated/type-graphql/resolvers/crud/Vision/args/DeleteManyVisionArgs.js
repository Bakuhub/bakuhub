"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionWhereInput_1 = require("../../../inputs/VisionWhereInput");
let DeleteManyVisionArgs = class DeleteManyVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereInput_1.VisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereInput_1.VisionWhereInput)
], DeleteManyVisionArgs.prototype, "where", void 0);
DeleteManyVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyVisionArgs);
exports.DeleteManyVisionArgs = DeleteManyVisionArgs;
