import {
  Container,
  createStyles,
  Grid,
  Group,
  Paper,
  rem,
  Text,
  Title,
} from "@mantine/core";
import Contact from "../assets/Contactus.jpg";
import { IconMail, IconMap, IconPhone, IconSun } from "@tabler/icons-react";
import { Footers } from "../components/Footer";
import { HeaderMenu } from "../components/Header";
import LazyShow from "../components/LazyShow";
import LazyShowHeader from "../components/LazyShowHeader";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");
  return {
    root: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #212121 90%), url(${Contact})`,

      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
    wrapper: {
      paddingTop: `calc(${theme.spacing.xl} * 2)`,
    },

    content: {
      paddingTop: `calc(${theme.spacing.xl} * 5)`,
      paddingBottom: `calc(${theme.spacing.xl} * 2)`,
      marginRight: `calc(${theme.spacing.xl} * 3)`,

      [theme.fn.smallerThan("md")]: {
        marginRight: 0,
      },
    },

    title: {
      color: theme.white,
      fontFamily: `${theme.fontFamily}`,
      fontWeight: 900,
      lineHeight: 1.05,
      maxWidth: rem(500),
      fontSize: rem(48),

      [theme.fn.smallerThan("md")]: {
        maxWidth: "100%",
        fontSize: rem(34),
        lineHeight: 1.15,
      },
    },
    maps:{
      [theme.fn.smallerThan("sm")]: {
        marginTop:60
      },
    },
    contacts: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: theme.radius.lg - 2,
      // backgroundImage: `url(${bg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: "1px solid transparent",
      padding: theme.spacing.xl,
      flex: "0 0 280px",

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },
  };
});

function Contactus() {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.root}>
        <HeaderMenu />
        <Container size="lg" sx={{ height: "35.3vh" }}>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title} pt={70}>
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Contact Us
                </Text>
              </Title>
            </div>
          </div>
        </Container>
      </div>
      {/* For MOckdata  */}
      <Container size="lg">
        <Grid justify="center" gutter="xl">
          <Grid.Col md={5} sm={6}>
            <LazyShowHeader>
              <Paper
                shadow="md"
                radius="sm"
                mt={-40}
                style={{ minHeight: 285 }}
              >
                <div className={classes.contacts}>
                  <Text
                    size="lg"
                    weight={700}
                    className={classes.titlessss}
                    sx={{ color: "#000000" }}
                  >
                    Contact information
                  </Text>
                  <Group>
                    <IconMail />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Text size="xs">Email</Text>
                      <Text>invitehealthspcecialities@gmail.com</Text>
                    </div>
                  </Group>
                  <Group mt={20}>
                    <IconPhone />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Text size="xs">Phone</Text>
                      <Text>+91-9345863820</Text>
                    </div>
                  </Group>
                  <Group mt={20}>
                    <IconMap />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Text size="xs">Address</Text>
                      <Text>E1/1 Peenya industrial estate extn</Text>
                    </div>
                  </Group>
                  <Group mt={20}>
                    <IconSun />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Text size="xs">Working hours</Text>
                      <Text>9 a.m - 6 p.m</Text>
                    </div>
                  </Group>
                </div>
              </Paper>
            </LazyShowHeader>
          </Grid.Col>
          <Grid.Col md={7} sm={6} className={classes.maps}>
            <LazyShow>
              <div style={{ overflow: "hidden", marginTop: -40 }} >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.233756735475!2d77.49762872781135!3d13.016019853226856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3cfa83f451ad%3A0x703eff97cd9dc503!2sPeenya%20Industrial%20Area%20Phase%20IV%2C%20Peenya%2C%20Bengaluru%2C%20Karnataka%20560058!5e0!3m2!1sen!2sin!4v1643554324970!5m2!1sen!2sin"
                  width="600"
                  height="305"
                  className="map"
                  loading="lazy"
                  title="Company map"
                ></iframe>
              </div>
            </LazyShow>
          </Grid.Col>
        </Grid>
      </Container>

      <Footers height={rem(80)} />
    </>
  );
}

export default Contactus;
