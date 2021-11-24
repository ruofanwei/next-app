import { useSession, signIn, signOut, getProviders } from 'next-auth/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Box, Button, Center, Stack, Text } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FaLine } from 'react-icons/fa';
import { ReactNode } from 'react';
export interface ProviderProps {
  providers: providerProp[];
}

export interface providerProp {
  id: string;
  name: string;
}

const ProviderIcon = (props: any) => {
  console.log(props);
  switch (props.name) {
    case 'Google':
      return (
        <Button onClick={() => signIn(props.id)} leftIcon={<FcGoogle />} w={'full'} variant={'outline'}>
          <Center>
            <Text>Sign in with {props.name}</Text>
          </Center>
        </Button>
      );
    case 'Facebook':
      return (
        <Button onClick={() => signIn(props.id)} leftIcon={<FaFacebook />} w={'full'} colorScheme={'facebook'}>
          <Center>
            <Text>Sign in with {props.name}</Text>
          </Center>
        </Button>
      );
    case 'LINE':
      return (
        <Button onClick={() => signIn(props.id)} leftIcon={<FaLine />} w={'full'} variant={'outline'}>
          <Center>
            <Text>Sign in with {props.name}</Text>
          </Center>
        </Button>
      );
  }
};

function SignIn({ providers }: ProviderProps) {
  return (
    <Center p={8}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        {Object.values(providers).map((provider) => (
          <Box key={provider.name}>{ProviderIcon(provider)}</Box>
        ))}
      </Stack>
    </Center>
  );
}

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
