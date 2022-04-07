"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateManyInput_1 = require("../../../inputs/VisionCreateManyInput");
let CreateManyVisionArgs = class CreateManyVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateManyInput_1.VisionCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyVisionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyVisionArgs.prototype, "skipDuplicates", void 0);
CreateManyVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyVisionArgs);
exports.CreateManyVisionArgs = CreateManyVisionArgs;
