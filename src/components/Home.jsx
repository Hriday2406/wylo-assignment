import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "antd";

function Card({ id, img, caption }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let imgURL = typeof img == "string" ? img : URL.createObjectURL(img);

  function handleDelete() {
    dispatch(deletePost({ id: id }));
  }

  function handleEdit() {
    navigate(`/edit/${id}`);
  }

  return (
    <div className="bg-bg group flex h-[500px] w-[375px] flex-col items-center gap-5 overflow-hidden rounded-2xl border-[1px] border-[#8c67f7] p-5 transition-all duration-300 ease-in-out select-none hover:scale-110 hover:shadow-lg hover:shadow-[#8c67f777]">
      <div className="flex shrink-0 grow items-center justify-center rounded-xl">
        <img
          src={imgURL}
          alt={caption}
          className="max-h-[350px] rounded-2xl object-contain transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-[#8c67f777]"
        />
      </div>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <p>{caption}</p>
        <div className="flex flex-col gap-5 self-start">
          <button
            className="cursor-pointer rounded-md text-sm transition-all duration-300 hover:scale-125"
            onClick={handleEdit}
          >
            <Tooltip title="Edit Post">
              <EditFilled style={{ color: "#8c67f7", fontSize: "20px" }} />
            </Tooltip>
          </button>
          <button
            className="cursor-pointer rounded-md text-sm transition-all duration-300 hover:scale-125"
            onClick={handleDelete}
          >
            <Tooltip title="Delete Post" placement="bottom">
              <DeleteFilled style={{ color: "red", fontSize: "20px" }} />
            </Tooltip>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <section className="pt-28">
      <div className="container mx-auto">
        <h2 className="text-center font-mono text-3xl font-bold">
          Social Feed
        </h2>
        <div className="grid grid-cols-1 place-items-center gap-15 p-10 md:grid-cols-2 md:px-2 lg:px-10 xl:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.id}
              id={post.id}
              img={post.image}
              caption={post.text}
            ></Card>
          ))}
          <Card img="" caption="Caption" />
          <Card img="" caption="Caption" />
          <Card img="" caption="Caption" />
          <Card img="" caption="Caption" />
        </div>
      </div>
    </section>
  );
}
