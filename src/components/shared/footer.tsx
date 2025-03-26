'use client';

import { useTranslations } from 'next-intl';
import GitHubButton from 'react-github-btn';

import { InfoTooltip } from '@/components/shared/info-tooltip';
import { footerLinks } from '@/lib/constants';

import { Spotify } from './spotify';

export const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="pt-16 pb-10">
      <div className="md:flex md:items-center md:justify-between md:align-middle">
        <div className="flex justify-center space-x-6 md:order-2">
          <Spotify />
          <div className="mt-1">
            <GitHubButton
              href="https://github.com/mustafagenc/homepage/fork"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-show-count="true"
              aria-label="Fork mustafagenc/homepage on GitHub"
            >
              Fork
            </GitHubButton>
          </div>
          {footerLinks.map((link) => (
            <InfoTooltip
              key={link.name}
              label={link.name}
              side="top"
              className="text-xs"
            >
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted-foreground hover:text-foreground mt-1"
              >
                <span className="sr-only">{link.name}</span>
                <link.icon className="size-5" />
              </a>
            </InfoTooltip>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-muted-foreground text-center text-base leading-5">
            {t.rich('copyright', { date: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};
