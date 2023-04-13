import { createStyles, Text, SimpleGrid, Container, rem } from '@mantine/core';
import { mockdata } from '../data/mockdata';


const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: 'absolute',
    height: rem(100),
    width: rem(160),
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    
  },

  content: {
    position: 'relative',
   
  },

  icon: {
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));


function Feature({icon: Icon,title,description,className}) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={rem(38)} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}


export function Features() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}