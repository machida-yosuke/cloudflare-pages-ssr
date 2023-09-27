/// <reference types="astro/client" />
import type { AdvancedRuntime } from "@astrojs/cloudflare";

type ENV = {
  BASIC_PASSWORD: string;
  BASIC_USERNAME: string
};

declare namespace App {
  interface Locals extends AdvancedRuntime<ENV> {
    user: {
      name: string;
      password: string;
    };
  }
}
