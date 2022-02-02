import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

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
  return (
    <Box>
      <HStack spacing={8} align='center' justify='center'>
        <Link href={"/login"} passHref>
          <Text fontWeight='bold' _hover={{ textDecoration: "underline" }}>
            Login
          </Text>
        </Link>
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
