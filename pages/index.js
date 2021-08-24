import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { WAGButton } from "../components/Button/Button";

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("color.skyblue", "gray.700");
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Login</Heading>
        <Input
          placeholder="ryne@chakra-ui.com"
          variant="filled"
          mb={3}
          type="email"
        />
        <Input placeholder="*******" variant="filled" mb={6} type="password" />
        <WAGButton mb={6} colorScheme="teal" variant="primary">
          Log in
        </WAGButton>
        <Button variant="secondary" onClick={toggleColorMode}>
          Toggle color mode
        </Button>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
