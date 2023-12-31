import { storage } from "@vendetta/plugin";
import modules from "./modules";
import settings from "./components/Settings";

export const vstorage: {
  modules?: Record<
    string,
    {
      enabled: boolean;
      options: Record<string, any>;
    }
  >;
} = storage;

export const version = "0.1.6";

export default {
  onLoad: () => {
    vstorage.modules ??= {};
    modules.forEach((x) => (x.storage.enabled ? x.start() : x.stop()));
  },
  onUnload: () => modules.forEach((x) => x.storage.enabled && x.stop()),
  settings,
};
