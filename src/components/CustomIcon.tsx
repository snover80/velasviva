import { Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface CustomIconProps {
  icon: IconType;
  boxSize?: number;
}
function CustomIcon({ icon, boxSize }: CustomIconProps) {
  return <Icon as={icon} color="#FFFFFF" boxSize={boxSize || 5} />;
}

export default CustomIcon;
