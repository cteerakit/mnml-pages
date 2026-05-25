import { Mail, Youtube } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Feature } from '@/data/features';

type PlatformFeaturesTabsProps = {
  gmailFeatures: Feature[];
  youtubeFeatures: Feature[];
};

function FeatureList({ features }: { features: Feature[] }) {
  return (
    <ul className="divide-y divide-border rounded-xl border border-border bg-card">
      {features.map((feature) => (
        <li key={feature.label} className="px-5 py-4">
          <h3 className="text-sm font-medium text-foreground">{feature.label}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {feature.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function PlatformFeaturesTabs({
  gmailFeatures,
  youtubeFeatures,
}: PlatformFeaturesTabsProps) {
  return (
    <Tabs defaultValue="gmail" className="mt-8 w-full">
      <TabsList className="grid w-full max-w-xs grid-cols-2 sm:max-w-sm">
        <TabsTrigger value="gmail" className="gap-2">
          <Mail />
          Gmail
        </TabsTrigger>
        <TabsTrigger value="youtube" className="gap-2">
          <Youtube />
          YouTube
        </TabsTrigger>
      </TabsList>
      <TabsContent value="gmail" className="mt-6 flex flex-col gap-4">
        <p className="max-w-2xl text-muted-foreground">
          Hide distracting panels and chrome in Gmail. Limit content width, collapse sidebars
          until hover, and streamline the header.
        </p>
        <FeatureList features={gmailFeatures} />
      </TabsContent>
      <TabsContent value="youtube" className="mt-6 flex flex-col gap-4">
        <p className="max-w-2xl text-muted-foreground">
          Hide feeds, Shorts, comments, and other distractions on YouTube. Changes apply on SPA
          navigation without a full reload when possible.
        </p>
        <FeatureList features={youtubeFeatures} />
      </TabsContent>
    </Tabs>
  );
}
