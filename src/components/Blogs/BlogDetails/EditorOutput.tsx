'use client';

import React, { useEffect, useState } from 'react';
import type { JSX } from 'react';
import Image from 'next/image';

interface HeaderData {
  text: string;
  level: number;
}

interface ParagraphData {
  text: string;
}

interface ListData {
  style: 'ordered' | 'unordered';
  items: (string | { content: string })[];
}

interface ImageData {
  file: { url: string; alt?: string };
  caption?: string;
}

type Block =
  | { type: 'header'; data: HeaderData }
  | { type: 'paragraph'; data: ParagraphData }
  | { type: 'list'; data: ListData }
  | { type: 'image'; data: ImageData }
  | { type: string; data: Record<string, any> };

interface EditorOutputProps {
  blocks: Block[] | undefined;
}

const enhanceLinks = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const links = doc.querySelectorAll('a');

  links.forEach(link => {
    link.classList.add('text-blue-600', 'underline');
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });

  return doc.body.innerHTML;
};

const EditorOutput = ({ blocks }: EditorOutputProps) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!blocks || blocks.length === 0) {
    return <p className="text-base">No content available</p>;
  }

  return (
    <div className="prose max-w-none text-black whitespace-pre-line">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'header': {
            const level = block.data.level;
            const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;
            const classMap = {
              1: 'text-4xl font-bold',
              2: 'text-3xl font-semibold',
              3: 'text-2xl font-medium',
              4: 'text-xl font-medium',
              5: 'text-lg font-medium',
              6: 'text-base font-medium',
            };
            const rawHtml = block.data.text;
            const enhancedHtml = hydrated ? enhanceLinks(rawHtml) : rawHtml;

            return React.createElement(
              HeaderTag,
              {
                key: index,
                className: classMap[level as keyof typeof classMap] || '',
              },
              <span dangerouslySetInnerHTML={{ __html: enhancedHtml }} />
            );
          }

          case 'paragraph': {
            const rawHtml = block.data.text;
            const enhancedHtml = hydrated ? enhanceLinks(rawHtml) : rawHtml;

            return (
              <p key={index} className="text-base">
                <span dangerouslySetInnerHTML={{ __html: enhancedHtml }} />
              </p>
            );
          }

          case 'list': {
            const items = Array.isArray(block.data.items)
              ? block.data.items
              : [];

            return block.data.style === 'ordered' ? (
              <ol key={index} className="list-decimal pl-6">
                {items.map((item, idx) => {
                  const content =
                    typeof item === 'string' ? item : item.content;
                  const html = hydrated ? enhanceLinks(content) : content;

                  return (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: html }} />
                  );
                })}
              </ol>
            ) : (
              <ul key={index} className="list-disc pl-6">
                {items.map((item, idx) => {
                  const content =
                    typeof item === 'string' ? item : item.content;
                  const html = hydrated ? enhanceLinks(content) : content;

                  return (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: html }} />
                  );
                })}
              </ul>
            );
          }

          case 'image': {
            const data = block.data as ImageData;
            return (
              <div key={index} className="my-4 flex flex-col items-center">
                <Image
                  src={data.file.url}
                  alt={data.file.alt || 'Editor image'}
                  width={800}
                  height={500}
                  className="rounded shadow"
                />
                {data.caption && (
                  <span className="text-sm text-gray-600 mt-2">
                    {data.caption}
                  </span>
                )}
              </div>
            );
          }

          case 'spacer': {
            const height =
              typeof block.data?.height === 'number' ? block.data.height : 50;
            return <div key={index} style={{ height }} className="w-full" />;
          }

          default:
            return null;
        }
      })}
    </div>
  );
};

export default EditorOutput;
