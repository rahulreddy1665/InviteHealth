import { createStyles, Container, Title, Text, Button, rem } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import homeBg from "../assets/homeBG.jpg"
import { Features } from '../components/Features';
import { Footers } from '../components/Footer';
import { HeaderMenu } from '../components/Header';
import LazyShow from '../components/LazyShow';
import LazyShowHeader from '../components/LazyShowHeader';
import { TopProducts } from '../components/TopProducts';

const useStyles = createStyles((theme) => ({
  root: {
    
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #212121 90%), url(${homeBg})`,
    
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    
  },
  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  titles: {
    fontFamily: `Poppins`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 23,
      textAlign: "center",
    },
  },
  content: {
    paddingTop: `calc(${theme.spacing.xl} * 5)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
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
   
  
    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export function Home() {
  const { classes } = useStyles();
  const navigate = useNavigate()
  return (
    <>
      <div className={classes.root}>
      <HeaderMenu />
      <Container size="lg" sx={{ height: "75.3vh" }} >
        <div className={classes.inner}>
            <LazyShowHeader>
            <div className={classes.content}>
            <Title className={classes.title}>
              A{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}
              >
                Quality
              </Text>{' '}
              service through {' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}
              >
                Quality
              </Text> Products
            </Title>
            <Text className={classes.description} mt={30}>
            Invite Health Specialities is a neutracutical company which deals with neutracutical products – We have our own manufacturing process with thirteen plus products
            </Text>
            <Button
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan'  }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={()=>navigate("/products")}
            >
              Get started
            </Button>
          </div>
            </LazyShowHeader>
        </div>
      </Container>
     
    </div>
     {/* For MOckdata  */}
    
     <Container size="lg" className={classes.wrapper}>
        <Title className={classes.titles}>
          Why Choose{" "}
          <Text  component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}>
            Invite Health
          </Text>
          <span style={{ fontFamily: "Great Vibes" }}> Specialities</span> ?
        </Title>
        <LazyShow>
        <Features />
        </LazyShow>
        </Container>
      
    
      {/* Top products section */}
      <Title className={classes.titles}>
         Some Of Our Top Products!
        </Title>
        <LazyShow>
        <TopProducts />
        </LazyShow>
      {/* Footer Section */}
      <LazyShow>
      <Footers height={rem(120)}/>
      </LazyShow>
     
    </>
  
  );
}