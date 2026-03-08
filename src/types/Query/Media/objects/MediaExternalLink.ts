import type { ExternalLinkType } from "../../ExternalLinkSourceCollection";

export type MediaExternalLink = {
  color: string;
  icon: string;
  id: number;
  isDisabled: boolean;
  language: string;
  notes: string;
  site: string;
  siteId: number;
  type: ExternalLinkType;
  url: string;
};
