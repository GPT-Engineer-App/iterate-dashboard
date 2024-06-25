import React from "react";
import { Box, VStack, Text, Flex, Icon, Link, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaUsers, FaChartBar, FaCog } from "react-icons/fa";

const SidebarContent = ({ onClose, ...rest }) => {
  const menuItems = [
    { name: "Dashboard", icon: FaHome, path: "/" },
    { name: "Users", icon: FaUsers, path: "/users" },
    { name: "Analytics", icon: FaChartBar, path: "/analytics" },
    { name: "Settings", icon: FaCog, path: "/settings" },
  ];

  return (
    <Box
      bg="gray.800"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <VStack align="stretch" spacing={4} mt={5}>
        {menuItems.map((item) => (
          <Link
            as={RouterLink}
            to={item.path}
            key={item.name}
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
          >
            <Flex
              align="center"
              p="4"
              mx="4"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{
                bg: "cyan.400",
                color: "white",
              }}
            >
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: "white",
                }}
                as={item.icon}
              />
              <Text fontSize="md" fontWeight="medium">
                {item.name}
              </Text>
            </Flex>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

const Sidebar = ({ isOpen, onClose }) => {
  const { onClose: drawerOnClose } = useDisclosure();

  return (
    <Box>
      <SidebarContent display={{ base: "none", md: "block" }} onClose={() => onClose} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Sidebar;