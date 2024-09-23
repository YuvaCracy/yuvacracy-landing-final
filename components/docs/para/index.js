import Link from 'next/link';
import React from 'react';

const Para = ({ data, styles = "" }) => {
  const customStyles = `font-openSans text-[.92rem] text-[#2F2F2F] ${styles}`;

  const parseContent = (text) => {
    const parts = text.split('\n');

    return parts.map((part, index) => {
      // Regex to match bold, italic, underline, and content inside < > for URLs and emails
      const formatRegex = /(\*\*(.*?)\*\*)|(\*(.*?)\*)|(__([^_]+)__)|<([^>]+)>/g;

      const formattedText = [];
      let lastIndex = 0;

      // Find matches and build the formatted text
      part.replace(formatRegex, (match, bold, boldText, italic, italicText, underline, underlineText, angleBracketContent, offset) => {
        // Push plain text before the match
        if (lastIndex < offset) {
          formattedText.push(part.slice(lastIndex, offset));
        }

        // Handle bold
        if (bold) {
          formattedText.push(<strong key={formattedText.length}>{boldText}</strong>);
        }
        // Handle italic
        else if (italic) {
          formattedText.push(<em key={formattedText.length}>{italicText}</em>);
        }
        // Handle underline
        else if (underline) {
          formattedText.push(<u key={formattedText.length}>{underlineText}</u>);
        }
        // Handle URLs and emails
        else if (angleBracketContent) {
          // Determine if the content is an email or a URL
          if (angleBracketContent.includes('@')) {
            // It's an email
            formattedText.push(
              <a key={formattedText.length} href={`mailto:${angleBracketContent}`} className="text-blue-800 underline ">
                {angleBracketContent}
              </a>
            );
          } else {
            // It's a URL
            formattedText.push(
              <Link key={formattedText.length} href={`http://${angleBracketContent}`} target="_blank" rel="noopener noreferrer" className="text-blue-800 underline ">
                {angleBracketContent}
              </Link>
            );
          }
        }

        lastIndex = offset + match.length;
      });

      // Push any remaining plain text after the last match
      if (lastIndex < part.length) {
        formattedText.push(part.slice(lastIndex));
      }

      return (
        <React.Fragment key={index}>
          {formattedText}
          {index < parts.length - 1 && <br />} {/* Add <br /> for line breaks */}
        </React.Fragment>
      );
    });
  };

  return (
    <p className={customStyles}>
      {parseContent(data.para)}
    </p>
  );
};

export default Para;
