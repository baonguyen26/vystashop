import { useState } from "react";
import { Attribute } from "src/types/attribute";

export const useAttributeDropdown = (attributes: Attribute[]) => {
  const [selected, setSelected] = useState<Attribute | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (attribute: Attribute) => {
    setSelected(attribute);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelected(null);
  };

  return {
    selected,
    isOpen,
    setIsOpen,
    handleSelect,
    handleClear,
    attributes,
  };
};
