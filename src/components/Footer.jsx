import { createStyles, Container, Group, ActionIcon, rem, Text } from '@mantine/core';
import { IconBrandTwitter,  IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';




export function Footers({height}) {
  console.log(height)

  const useStyles = createStyles((theme) => ({
    footer: {
      marginTop:height,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
    },
  
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
  
      [theme.fn.smallerThan('xs')]: {
        flexDirection: 'column',
      },
    },
  
    links: {
      [theme.fn.smallerThan('xs')]: {
        marginTop: theme.spacing.md,
      },
    },
  }));
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Text style={{ textAlign: "center" }}>
            &copy; {new Date().getFullYear()} Invitehealth Specialities.
          </Text>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandFacebook size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}