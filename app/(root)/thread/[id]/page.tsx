import ThreadCard from "@/components/cards/ThreadCard";

const Page = ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;

  <section className="relative">
    <div>
      <ThreadCard
        key={thread._id}
        id={thread._id}
        currentUserId={user?.id || ""}
        parentId={thread.parentId}
        content={thread.text}
        author={thread.author}
        community={thread.community}
        createdAt={thread.createdAt}
        comments={thread.children}
      />
    </div>
  </section>;
};
export default Page;
