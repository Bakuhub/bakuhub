"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReferenceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCreateManyInput_1 = require("../../../inputs/ReferenceCreateManyInput");
let CreateManyReferenceArgs = class CreateManyReferenceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceCreateManyInput_1.ReferenceCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyReferenceArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyReferenceArgs.prototype, "skipDuplicates", void 0);
CreateManyReferenceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyReferenceArgs);
exports.CreateManyReferenceArgs = CreateManyReferenceArgs;
