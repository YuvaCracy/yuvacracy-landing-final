import React from 'react';
import Link from 'next/link';

const List = ({ items, styles = "", ordered = false }) => {
  const customStyles = `text-[#2F2F2F] ${styles}`;

  // Parse and format text to handle bold, italic, URLs, and emails
  const parseContent = (text) => {
    const boldItalicRegex = /(\*\*(.*?)\*\*)|(\*(.*?)\*)|<([^>]+)>/g;

    const formattedText = [];
    let lastIndex = 0;

    text.replace(boldItalicRegex, (match, bold, boldText, italic, italicText, angleBracketContent, offset) => {
      // Push plain text before the match
      if (lastIndex < offset) {
        formattedText.push(text.slice(lastIndex, offset));
      }

      // Handle bold and italic
      if (bold) {
        formattedText.push(<strong className=' font-[600] font-openSans  text-black ' key={formattedText.length}>{boldText}</strong>);
      } else if (italic) {
        formattedText.push(<em key={formattedText.length}>{italicText}</em>);
      } else if (angleBracketContent) {
        // Handle email or URL
        if (angleBracketContent.includes('@')) {
          formattedText.push(
            <a key={formattedText.length} href={`mailto:${angleBracketContent}`} className="text-blue-600 underline">
              {angleBracketContent}
            </a>
          );
        } else {
          formattedText.push(
            <Link key={formattedText.length} href={`http://${angleBracketContent}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {angleBracketContent}
            </Link>
          );
        }
      }

      lastIndex = offset + match.length;
    });

    // Push any remaining plain text after the last match
    if (lastIndex < text.length) {
      formattedText.push(text.slice(lastIndex));
    }

    return formattedText;
  };

  return (
    <>
      {ordered ? (
        <ol className="list-decimal pl-[2.5rem]">
          {items &&
            items.map((data, index) => (
              <li className={customStyles} key={index}>
                <span className="font-openSans text-[.95rem] font-[600]">
                  {data.head && parseContent(data.head)}
                </span>
                <span className={`opacity-[.8] ${data?.head ? "ml-[.3rem]" : ""}`}>
                  {data.desc && parseContent(data.desc)}
                </span>
              </li>
            ))}
        </ol>
      ) : (
        <ul className="list-disc pl-[2.5rem]">
          {items &&
            items.map((data, index) => (
              <li className={customStyles} key={index}>
                <span className="font-openSans text-[.95rem] font-[600]">
                  {data.head && parseContent(data.head)}
                </span>
                <span className={`opacity-[.8] ${data?.head ? "ml-[.3rem]" : ""}`}>
                  {data.desc && parseContent(data.desc)}
                </span>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default List;
