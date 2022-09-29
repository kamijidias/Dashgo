import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (<Box mr="4" textAlign="right">
                <Text>Andrew Kamiji</Text>
                <Text color="gray.300" fontSize="smal">
                    kamiji@mail.com
                </Text>
            </Box>
            )}
            <Avatar size="md" name="Andrew Kamiji" src="https://github.com/kamijidias.png" />
        </Flex>
    );
}