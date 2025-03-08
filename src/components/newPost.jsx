import { createStyles } from "antd-style";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";
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

export default function NewPost() {
  const [caption, setCaption] = useState("");
  const [img, setImg] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { styles } = useStyle();

  const handlePublish = () => {
    if (!img || !caption) return;
    dispatch(addPost({ image: img, text: caption }));
    setCaption("");
    setImg("");
    navigate("/");
  };

  return (
    <FormComponent
      handlerFn={handlePublish}
      heading="New Post"
      btnText="Create Post"
      img={img}
      setImg={setImg}
      caption={caption}
      setCaption={setCaption}
      styles={styles}
    />
  );
}
