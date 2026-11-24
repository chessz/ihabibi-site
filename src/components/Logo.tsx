import Image from 'next/image';

type LogoProps = {
  tagline?: string;
  tone?: 'ink' | 'light';
};

/** Gold house mark from the brand asset, with the name set in type. */
export default function Logo({ tagline = 'life admin for the UK', tone = 'ink' }: LogoProps) {
  return (
    <span className={`brand ${tone === 'light' ? 'brand-light' : ''}`}>
      <span className="mark" aria-hidden="true">
        <Image src="/mark-gold.png" alt="" width={433} height={512} className="mark-img" />
      </span>
      <span className="brand-text">
        <strong>Habibi</strong>
        {tagline ? <span>{tagline}</span> : null}
      </span>
    </span>
  );
}
