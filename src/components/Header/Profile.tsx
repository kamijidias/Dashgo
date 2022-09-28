import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>Andrew Kamiji</Text>
                        <Text color="gray.300" fontSize="smal">
                            kamiji@mail.com
                        </Text>
                    </Box>

                    <Avatar size="md" name="Andrew Kamiji" src="https://github.com/kamijidias.png" />
                </Flex>
    );
}