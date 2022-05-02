"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateTagArgs_1 = require("./args/CreateTagArgs");
const Tag_1 = require("../../../models/Tag");
const helpers_1 = require("../../../helpers");
let CreateTagResolver = class CreateTagResolver {
    async createTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTagArgs_1.CreateTagArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateTagResolver.prototype, "createTag", null);
CreateTagResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tag_1.Tag)
], CreateTagResolver);
exports.CreateTagResolver = CreateTagResolver;