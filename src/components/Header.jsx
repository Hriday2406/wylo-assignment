import { Button, ConfigProvider } from "antd";
import { createStyles } from "antd-style";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

export default function Header() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const { styles } = useStyle();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full p-8">
      <div className="container mx-auto flex items-center justify-between px-10 select-none">
        <Link to="/">
          <img src="./logo.webp" alt="Wylo Logo" className="h-8" />
        </Link>
        <Link to={activePath == "/" ? "/new" : "/"}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#4158D0",
                borderRadiusLG: 24,
              },
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
            <Button type="primary" size="large">
              {activePath == "/" ? "New Post" : "Home"}
            </Button>
          </ConfigProvider>
        </Link>
      </div>
    </header>
  );
}
