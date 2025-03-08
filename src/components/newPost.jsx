import { Button, ConfigProvider, Input } from "antd";
import { createStyles } from "antd-style";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";

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
  const [img, setImg] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { styles } = useStyle();

  const handlePublish = () => {
    if (!img || !caption) return;
    dispatch(addPost({ image: img, text: caption }));
    setCaption("");
    setImg(null);
    navigate("/");
  };

  return (
    <section className="flex h-dvh items-center justify-center">
      <div className="flex w-2/3 flex-col gap-8 rounded-2xl border-2 border-white p-5 shadow-lg shadow-[#ffffff99] select-none sm:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
        <h1 className="text-center font-mono text-3xl font-bold">New Post</h1>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#4158D0",
              borderRadiusLG: 24,
            },
          }}
        >
          {img ? (
            <img
              src={URL.createObjectURL(img)}
              alt="No file"
              className="mx-auto size-48 rounded-2xl border-2 border-white object-fill p-2 shadow-lg shadow-[#ffffff99]"
            />
          ) : (
            <div className="mx-auto flex size-48 items-center justify-center rounded-2xl border-2 border-white p-2 font-mono shadow-lg shadow-[#ffffff99]">
              Upload an image
            </div>
          )}

          <Input
            placeholder="Caption"
            className=""
            onChange={(e) => setCaption(e.target.value)}
            value={caption}
          />
          <Button type="primary" size="large">
            <label htmlFor="fileInput" className="w-full">
              Upload
            </label>
          </Button>
          <input
            type="file"
            className="hidden"
            id="fileInput"
            name="fileInput"
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
          />

          <ConfigProvider
            theme={{
              components: {
                Button: {
                  fontWeight: 600,
                  paddingBlockLG: 12,
                  paddingInlineLG: 28,
                },
              },
            }}
            button={{
              className: styles.linearGradientButton,
            }}
          >
            <Button type="primary" size="large" onClick={handlePublish}>
              Create Post
            </Button>
          </ConfigProvider>
        </ConfigProvider>
      </div>
    </section>
  );
}
