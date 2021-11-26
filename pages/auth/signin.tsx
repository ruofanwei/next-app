import { useSession, signIn, signOut, getProviders } from 'next-auth/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Box, Button, Center, Stack, Text } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FaLine } from 'react-icons/fa';
import { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
export interface ProviderProps {
  providers: providerProp[];
}

export interface providerProp {
  id: string;
  name: string;
}

const ProviderIcon = (props: any) => {
  console.log(props);
  console.log(process.env.NODE_ENV);
  const handleClick = async () => {
    await signIn(props.id, {
      callbackUrl:
        process.env.NODE_ENV === 'production' ? 'https://next-app-ruofanwei.vercel.app/' : 'http://localhost:3000/',
    });
  };
  switch (props.name) {
    case 'Google':
      return (
        <Button
          py={6}
          onClick={handleClick}
          leftIcon={<FcGoogle />}
          w={'full'}
          bg="white"
          shadow="md"
          variant="ghost"
          colorScheme={'red'}
          fontSize={{ base: '14px', md: '20px' }}
        >
          <Center>
            <Text color="blackAlpha.500">Continue with {props.name}</Text>
          </Center>
        </Button>
      );
    case 'Facebook':
      return (
        <Button
          py={6}
          onClick={handleClick}
          leftIcon={<FaFacebook />}
          w={'full'}
          bg="white"
          variant="ghost"
          shadow="md"
          colorScheme={'facebook'}
          fontSize={{ base: '14px', md: '20px' }}
        >
          <Center>
            <Text color="blackAlpha.500">Continue with {props.name}</Text>
          </Center>
        </Button>
      );
    case 'LINE':
      return (
        <Button
          py={6}
          shadow="md"
          colorScheme={'green'}
          onClick={handleClick}
          bg="white"
          leftIcon={<FaLine color="green" />}
          variant="ghost"
          w="full"
          fontSize={{ base: '14px', md: '20px' }}
        >
          <Center>
            <Text color="blackAlpha.500">Continue with {props.name}</Text>
          </Center>
        </Button>
      );
  }
};

const Logo = (props: any) => {
  return (
    <Text textAlign="center" p={10}>
      Logo
    </Text>
  );
};

function SignIn({ providers }: ProviderProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, []);

  return (
    <Center p={8} h="400px" flexDirection="column">
      <Logo />
      <Stack spacing={7} align="stretch" maxW={'xl'} w={'full'} bg="#F8F8F8" p={'10'} borderRadius="10" h="full">
        {Object.values(providers).map((provider) => (
          <Box key={provider.name} w="full">
            {ProviderIcon(provider)}
          </Box>
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
