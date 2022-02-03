import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../../firebase";
import { useAuthContext } from "../../hooks/useAuthContext";

type HeaderContainerProps = {
  children: React.ReactNode;
};

const HeaderContainer = ({ children }: HeaderContainerProps) => {
  return (
    <Flex
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mb={8}
      p={8}
      bg='blue.400'
      color='white'>
      {children}
    </Flex>
  );
};

const MenuLinks = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  const handleLogout = async () => {
    await auth.signOut();
    router.reload();
  };

  return (
    <Box>
      <HStack spacing={8} align='center' justify='center'>
        {user ? (
          <Text
            fontWeight='bold'
            _hover={{ textDecoration: "underline" }}
            onClick={handleLogout}>
            Logout
          </Text>
        ) : (
          <Link href={"/login"} passHref>
            <Text fontWeight='bold' _hover={{ textDecoration: "underline" }}>
              Login
            </Text>
          </Link>
        )}
      </HStack>
    </Box>
  );
};

export const Header = () => {
  return (
    <HeaderContainer>
      <Link href={"/"} passHref>
        <Text
          fontSize={24}
          fontWeight='bold'
          _hover={{ textDecoration: "underline" }}>
          Todo App
        </Text>
      </Link>
      <MenuLinks />
    </HeaderContainer>
  );
};
