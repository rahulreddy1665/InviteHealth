import {
  Burger,
  Container,
  createStyles,
  Drawer,
  Group, MediaQuery,
  rem,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/App.css";


export function HeaderMenu() {
  const [openedSide, {toggle}] = useDisclosure(false);
  const [scroll] = useWindowScroll();
  const useStyles = createStyles((theme) => ({
    inner: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
    links: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },
  
    burger: {
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },
  
    link: {
      display: "block",
      lineHeight: 1,
      padding: `${rem(8)} ${rem(12)}`,
      borderRadius: theme.radius.sm,
      textDecoration: "none",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
  
      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      },
    },
    title: {
      fontFamily: `${theme.fontFamily}`,
       color:  scroll.y > 99 ? theme.black :theme.white,
      fontWeight: 900,
      marginTop:scroll.y > 99 ? 0 :12,
      lineHeight: 1.05,
      maxWidth: rem(500),
      fontSize: rem(18),
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        fontSize: rem(14),
        lineHeight: 1.15,
      },
    },
  
    linkLabel: {
      marginRight: rem(5),
    },
  }));
  
  const { classes, cx } = useStyles();
 
  const links = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About us",
      link: "/aboutus",
    },

    { label: "Products", link: "/products" },
    { label: "Contact us", link: "/contactus" },
    { label: "Machineries", link: "/machineries" },
  ];

  const location = useLocation();
  const theme = useMantineTheme();
  let navigate = useNavigate();
  
  const [ setActive] = useState(links[0].link);
  const items = links.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={cx(classes.link, {
          [classes.linkActive]: location.pathname === link.link,
        })}
        onClick={(event) => {
          event.preventDefault();
          setActive(link.link);

          navigate(link.link);
        }}
      >
        {link.label}
      </a>
    );
  });

  // const home = () =>{
  //   navigate("/")
  // }

  return (
    <div className={scroll.y > 99 ? "sticky_nav_bar_header" : "nav_bar_header"}>
      <Container size="lg"  >
        <div className={classes.inner}>
          {scroll.y > 99 ? (
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                {/* <img
                  src={logo}
                  style={{ cursor: "pointer" }}
                  onClick={() => home()}
                  width={190}
                /> */}
               <div>
               <Title className={classes.title}><Text 
               variant="gradient"
               component="span"
                inherit
               gradient={{ from: 'indigo', to: 'cyan' }}>
                INVITE HEALTH
                </Text> <br/> SPECIALITIES</Title>
               </div>
            </MediaQuery>
          ) : (
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              {/* <img
                  src={logo}
                  style={{ cursor: "pointer" }}
                  onClick={() => home()}
                  width={190}
                /> */}
               <div>
               <Title className={classes.title}><Text 
               variant="gradient"
               component="span"
                inherit
               gradient={{ from: 'indigo', to: 'cyan' }}>
                INVITE HEALTH
                </Text> <br/> SPECIALITIES</Title>
               </div>
            </MediaQuery>
          )}
          {scroll.y > 99 ? (
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              {/* <img
                  src={logo}
                  style={{ cursor: "pointer" }}
                  onClick={() => home()}
                  width={150}
                /> */}
                <div>
                <Title className={classes.title}><Text 
               variant="gradient"
               component="span"
                inherit
               gradient={{ from: 'indigo', to: 'cyan' }}>
                INVITE HEALTH
                </Text> <br/> SPECIALITIES</Title>
                </div>
            </MediaQuery>
          ) : (
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
             {/* <img
                  src={logo}
                  style={{ cursor: "pointer" }}
                  onClick={() => home()}
                  width={150}
                /> */}
               <div>
               <Title className={classes.title}><Text 
               variant="gradient"
               component="span"
                inherit
               gradient={{ from: 'indigo', to: 'cyan' }}>
                INVITE HEALTH
                </Text> <br/> SPECIALITIES</Title>
               </div>
            </MediaQuery>
          )}

          <Group spacing={5}  className="links">
            {scroll.y > 99 ? (
              <>
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.link}
                    className={
                      location.pathname === link.link
                        ? "nav_bar_link nav_bar_color_Active"
                        : "nav_bar_link nav_bar_color2"
                    }
                    onClick={(event) => {
                      event.preventDefault();
                      setActive(link.link);

                      navigate(link.link);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </>
            ) : (
              <>
                {links.map((link) => (
                  <p
                    key={link.label}
                    href={link.link}
                    className={
                      location.pathname === link.link
                        ? "nav_bar_link nav_bar_color_Active"
                        : "nav_bar_link nav_bar_color"
                    }
                    onClick={(event) => {
                      event.preventDefault();
                      setActive(link.link);

                      navigate(link.link);
                    }}
                  >
                    {link.label}
                  </p>
                ))}
              </>
            )}
          </Group>
          <Group spacing={5} className="mobile_links">
            <div size="sm" styles={{ display: "none" }}>
              <Burger
                opened={openedSide}
                onClick={toggle}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </div>

            <Drawer
              className="for_background"
              opened={openedSide}
              onClose={toggle}
              padding="xs"
              size="xs"
              position="right"
              transition="slide-left"
            >
              {items}
            </Drawer>
          </Group>
        </div>
      </Container>
    </div>
  );
}
