"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReferenceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceWhereUniqueInput_1 = require("../../../inputs/ReferenceWhereUniqueInput");
let DeleteReferenceArgs = class DeleteReferenceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput)
], DeleteReferenceArgs.prototype, "where", void 0);
DeleteReferenceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteReferenceArgs);
exports.DeleteReferenceArgs = DeleteReferenceArgs;
