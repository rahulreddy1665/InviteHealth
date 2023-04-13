import {
  Container, createStyles, Grid,
  Image, rem, Text, Title
} from "@mantine/core";
import Abooutt from "../assets/About.png";
import About from "../assets/Aboutus.jpg";

import { Footers } from "../components/Footer";
import { HeaderMenu } from "../components/Header";
import LazyShow from "../components/LazyShow";
import LazyShowHeader from "../components/LazyShowHeader";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #212121 90%), url(${About})`,

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


}));

function Aboutus() {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.root}>
        <HeaderMenu />
        <Container size="lg" sx={{ height: "25.3vh" }}>
          <div className={classes.inner}>
           
              <div className={classes.content}>
                <Title className={classes.title} pt={70}>
                  <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan" }}
                  >
                    About Us
                  </Text>
                </Title>
              </div>
          
          </div>
        </Container>
      </div>
      {/* For MOckdata  */}
      <Container size="lg" className={classes.wrapper}>
        <Grid>
          <Grid.Col xs={6}>
            <LazyShowHeader>
              <Image
                style={{ margin: "auto" }}
                src={Abooutt}
                alt="Image"
                width="100%"
              />
            </LazyShowHeader>
          </Grid.Col>
          <Grid.Col xs={6} style={{margin:'auto'}}>
            <LazyShow>
              <div style={{alignItems:'center'}}>
              <Text size="md" style={{ textAlign: "justify" }}>
                <Title
                  size="lg"
                  component="span"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  Invite Health Specialities {""}
                </Title>
                is a neutracitical company which deals with neutracitical
                products. Inspired by the winning quality of our first
                product,we came out with an array of products. We started our
                company in the year 2000 & having a steady growth with a strong
                team of people with the best products,we move towards our goal.
                We have our own manufacturing process and we have now entered in
                third party manufacturing also we encourage and welcome for
                P.C.D parties for our company.
              </Text>
              </div>
              
            </LazyShow>
          </Grid.Col>
        </Grid>
      </Container>
    
        <Footers height={rem(40)} />
   
    </>
  );
}

export default Aboutus;
