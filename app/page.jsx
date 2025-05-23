import Image from "next/image";
import { Button } from "@/components/ui/button";
import Provider from "./provider";

export default function Home() {
  return (
    <Provider>
      <Button>Click me</Button>
    </Provider>
  );
}
