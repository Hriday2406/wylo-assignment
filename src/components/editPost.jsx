import { createStyles } from "antd-style";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../features/posts/postsSlice";
import { useNavigate, useParams } from "react-router-dom";
import FormComponent from "./FormComponent";

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(
          43deg,
          #4158d0 0%,
          #c850c0 46%,
          #ffcc70 100%
        );
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.5s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

export default function EditPost() {
  const [caption, setCaption] = useState("");
  const [img, setImg] = useState(null);

  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  let { id } = useParams();
  id = Number(id);
  const navigate = useNavigate();
  const { styles } = useStyle();

  useEffect(() => {
    const currentPost = posts.find((post) => post.id == id);
    setCaption(currentPost.text);
    setImg(currentPost.image);
  }, [id, posts]);

  const handleUpdate = () => {
    if (!img || !caption) return;
    dispatch(editPost({ id: id, image: img, text: caption }));
    setCaption("");
    setImg(null);
    navigate("/");
  };

  return (
    <FormComponent
      handlerFn={handleUpdate}
      heading="Edit Post"
      btnText="Update Post"
      img={img}
      setImg={setImg}
      caption={caption}
      setCaption={setCaption}
      styles={styles}
    />
  );
}
