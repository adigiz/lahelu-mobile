import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Href } from "expo-router";

type AccordionItem = {
  title: string;
  content: AccordionContent[];
};

type AccordionContent = {
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  url: Href<string>;
};

export { AccordionContent, AccordionItem };
