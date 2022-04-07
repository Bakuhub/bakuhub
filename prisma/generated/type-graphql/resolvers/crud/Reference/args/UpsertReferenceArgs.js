"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertReferenceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCreateInput_1 = require("../../../inputs/ReferenceCreateInput");
const ReferenceUpdateInput_1 = require("../../../inputs/ReferenceUpdateInput");
const ReferenceWhereUniqueInput_1 = require("../../../inputs/ReferenceWhereUniqueInput");
let UpsertReferenceArgs = class UpsertReferenceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput)
], UpsertReferenceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCreateInput_1.ReferenceCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceCreateInput_1.ReferenceCreateInput)
], UpsertReferenceArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceUpdateInput_1.ReferenceUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceUpdateInput_1.ReferenceUpdateInput)
], UpsertReferenceArgs.prototype, "update", void 0);
UpsertReferenceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertReferenceArgs);
exports.UpsertReferenceArgs = UpsertReferenceArgs;
