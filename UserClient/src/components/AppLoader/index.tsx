import { Flex, Progress, Text } from "@mantine/core";

/**
 * @returns React component with simple progress bar loader for application
 */
const AppLoaderComponent = () => {
  return (
    <Flex sx={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }} align={"center"} justify={"center"} direction={"column"} gap={10}>
      <Text fz={20} fw="bold">
        DYNOTXT
      </Text>
      <Progress w={"70%"} maw={200} value={100} animate />
    </Flex>
  );
};

export default AppLoaderComponent;
