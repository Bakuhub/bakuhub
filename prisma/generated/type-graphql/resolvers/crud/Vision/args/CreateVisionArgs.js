"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateInput_1 = require("../../../inputs/VisionCreateInput");
let CreateVisionArgs = class CreateVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateInput_1.VisionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateInput_1.VisionCreateInput)
], CreateVisionArgs.prototype, "data", void 0);
CreateVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateVisionArgs);
exports.CreateVisionArgs = CreateVisionArgs;
