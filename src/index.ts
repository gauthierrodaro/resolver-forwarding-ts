import { GraphQLServer } from "graphql-yoga"
import { forwardTo, Prisma } from "prisma-binding"

const getPrismaInstance = () => {
  return new Prisma({
    endpoint: "http://localhost:4466/axio/dev",
    typeDefs: "./src/generated-schema.graphql"
  })
}

const resolvers = {
  Query: {
    user: forwardTo("db")
  }
}

const config = {
  context: {
    db: getPrismaInstance()
  },
  resolvers,
  typeDefs: "./src/schema.graphql"
}

const server = new GraphQLServer(config)

/* tslint:disable-next-line:no-console */
server.start(() => console.log("Server is running on http://localhost:4000"))
