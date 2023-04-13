import {
    Container, createStyles, rem, Text, Title
} from "@mantine/core";
 
  import About from "../assets/Machineries.jpg";
import { ArticlesCardsGrid } from "../components/ArticleCard";
  
  import { Footers } from "../components/Footer";
import { HeaderMenu } from "../components/Header";
import LazyShow from "../components/LazyShow";
  
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
  
  function Machineries() {
    const { classes } = useStyles();
    return (
      <>
        <div className={classes.root}>
          <HeaderMenu />
          <Container size="lg" sx={{ height: "25.3vh" }}>
            <div className={classes.inner}>
              <LazyShow>
                <div className={classes.content}>
                  <Title className={classes.title} pt={70}>
                    <Text
                      component="span"
                      inherit
                      variant="gradient"
                      gradient={{ from: "indigo", to: "cyan" }}
                    >
                      Machineries
                    </Text>
                  </Title>
                </div>
              </LazyShow>
            </div>
          </Container>
        </div>
        {/* For MOckdata  */}
        <Container size="lg" className={classes.wrapper}>
          <ArticlesCardsGrid/>
        </Container>
        {/* Footer Section */}
        <LazyShow>
          <Footers height={rem(40)} />
        </LazyShow>
      </>
    );
  }
  
  export default Machineries;
  