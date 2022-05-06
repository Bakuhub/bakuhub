"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReferenceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceWhereInput_1 = require("../../../inputs/ReferenceWhereInput");
let DeleteManyReferenceArgs = class DeleteManyReferenceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereInput_1.ReferenceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereInput_1.ReferenceWhereInput)
], DeleteManyReferenceArgs.prototype, "where", void 0);
DeleteManyReferenceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyReferenceArgs);
exports.DeleteManyReferenceArgs = DeleteManyReferenceArgs;
