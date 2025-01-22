import { Form, redirect, useFetcher } from "react-router";
import type { Route } from "./+types/post";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const postId = params.postId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  return await res.json();
}

// export async function loader({ params }: Route.LoaderArgs) {
//   const product = await

// }

export async function clientAction({ params }: Route.LoaderArgs) {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
      method: "DELETE",
    });
    return { isDeleted: true };
  } catch (err) {
    return { isDeleted: false };
  }
}

export default function Post({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();
  return (
    <div>
      <p>Title: {loaderData.title}</p>
      <p>Body: {loaderData.body}</p>

      <Form method="delete">
        <button type="submit">Delete</button>
      </Form>
    </div>
  );
}
