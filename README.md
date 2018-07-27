# resolver-forwarding-ts
For reproduction of https://github.com/prismagraphql/prisma/issues/2524#issuecomment-408385324

`yarn build` will produce the following compilation error:

```
$ tsc
src/index.ts:25:34 - error TS2345: Argument of type '{ context: { db: Prisma; }; resolvers: { Query: { user: (parent: any, args: any, context: any, in...' is not assignable to parameter of type 'Props<any, any, any>'.
  Types of property 'resolvers' are incompatible.
    Type '{ Query: { user: (parent: any, args: any, context: any, info: GraphQLResolveInfo) => any; }; }' is not assignable to type 'IResolvers'.
      Property 'Query' is incompatible with index signature.
        Type '{ user: (parent: any, args: any, context: any, info: GraphQLResolveInfo) => any; }' is not assignable to type 'GraphQLScalarType | (() => any) | IResolverObject'.
          Type '{ user: (parent: any, args: any, context: any, info: GraphQLResolveInfo) => any; }' is not assignable to type 'IResolverObject'.
            Property 'user' is incompatible with index signature.
              Type '(parent: any, args: any, context: any, info: GraphQLResolveInfo) => any' is not assignable to type 'GraphQLFieldResolver<any, any, { [argName: string]: any; }> |IResolverOptions'.
                Value of type '(parent: any, args: any, context: any, info: GraphQLResolveInfo) => any' has no properties in common with type 'IResolverOptions'. Did you mean to call it?

25 const server = new GraphQLServer(config)
```
