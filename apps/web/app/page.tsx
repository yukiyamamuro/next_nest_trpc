import { trpc } from "./trpc";

export default async function Home() {
  const { users } = await trpc.user.list.query();
  const { posts } = await trpc.post.list.query();
  const { user } = await trpc.user.find.query({ id: "1" });

  return (
    <>
      <h1>HOME</h1>
      YourName {user?.name}

      <h2>USER</h2>
      {users.map((user) => (
        <div key={user.id}>
          {user.id} - {user.name}
        </div>
      ))}

      <h2>POST</h2>
      {posts.map((post) => (
        <div key={post.id}>
          {post.id} - {post.title}
        </div>
      ))}
    </>
  )
}
