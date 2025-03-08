import { Button, ConfigProvider, Input } from "antd";

export default function FormComponent({
  handlerFn,
  heading,
  btnText,
  img,
  setImg,
  caption,
  setCaption,
  styles,
}) {
  let imgURL = typeof img == "string" ? img : URL.createObjectURL(img);
  return (
    <section className="flex h-dvh items-center justify-center">
      <div className="flex w-2/3 flex-col gap-8 rounded-2xl border-2 border-white p-5 shadow-lg shadow-[#ffffff99] select-none sm:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
        <h1 className="text-center font-mono text-3xl font-bold">{heading}</h1>
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
              src={imgURL}
              alt="No file"
              className="mx-auto h-48 w-fit rounded-2xl border-2 border-white object-contain p-2 shadow-lg shadow-[#ffffff99]"
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
            <Button type="primary" size="large" onClick={handlerFn}>
              {btnText}
            </Button>
          </ConfigProvider>
        </ConfigProvider>
      </div>
    </section>
  );
}
