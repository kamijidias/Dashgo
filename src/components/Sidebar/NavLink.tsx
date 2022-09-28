import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
    return (
        <Link display="flex" alignItems="center" {...rest}>
            <Icon as={RiDashboardLine} fontSize="20" />
            <Text mt="4" ml="4" fontWeight="medium">{children}</Text>
        </Link>
    );
}