import { Content } from "@/interfaces/blog-posts";
import { Wrapper } from "../wrapper/Wrapper";
import { Heading, Paragraph, Picture, Quote } from "../content-blocks";

interface Props {
  content: Content[];
}

export function DynamicContentPost({ content }: Props) {
  const renderContent = () => {
    const elements = [];
    const patternFirstSuperBlock = ["heading", "paragraph", "paragraph"];
    const patternSecondSuperBlock = ["image", "image", "image"];

    for (let index = 0; index < content.length; index++) {
      // For all blocks
      const currentBlock = content[index];
      const nextContentBlock = content[index + 1];
      const secondFollowingBlock = content[index + 2];

      // Only for image blocks
      const currentBlockImage = content[index];
      const nextContentBlockImage = content[index + 2];
      const secondFollowingBlockImage = content[index + 4];

      // First Super Block
      if (
        currentBlock.type === patternFirstSuperBlock[0] &&
        nextContentBlock?.type === patternFirstSuperBlock[1] &&
        secondFollowingBlock?.type === patternFirstSuperBlock[2]
      ) {
        elements.push(
          <div className="flex justify-between flex-col gap-[80px] lg:flex-row">
            <div className="w-full lg:w-1/2 lg:max-w-[657px]">
              <Heading level={1} text={currentBlock?.children[0].text} />
            </div>
            <div className="w-full flex flex-col gap-[24px] lg:w-1/2 lg:max-w-[657px]">
              <Paragraph text={nextContentBlock?.children[0].text} />
              <Paragraph text={secondFollowingBlock?.children[0].text} />
            </div>
          </div>
        );
        index += 2; // Skip the next two blocks
        continue;
      }

      // Second Super Block
      if (
        currentBlockImage.type === patternSecondSuperBlock[0] &&
        nextContentBlockImage?.type === patternSecondSuperBlock[1] &&
        secondFollowingBlockImage?.type === patternSecondSuperBlock[2]
      ) {
        elements.push(
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[35px] lg:gap-[80px] lg:flex-row">
              <div className="lg:w-1/2">
                <Picture
                  src={currentBlock?.image?.url}
                  alt={nextContentBlock?.children[0].text}
                  width={currentBlock?.image?.width}
                  height={currentBlock?.image?.height}
                  classNameImage="block min-h-[360px] h-[360px] lg:h-[560px]"
                />
              </div>
              <div className="flex flex-col lg:w-1/2 ">
                <div className="w-0 lg:w-full lg:h-[160px]"></div>
                <Picture
                  src={nextContentBlockImage?.image?.url}
                  alt={content[index + 3]?.children[0].text}
                  width={nextContentBlockImage?.image?.width}
                  height={nextContentBlockImage?.image?.height}
                  classNameImage="block min-h-[360px] h-[360px] lg:h-[560px]"
                />
              </div>
            </div>
            <Picture
              src={secondFollowingBlockImage?.image?.url}
              alt={content[index + 5]?.children[0].text}
              width={secondFollowingBlockImage?.image?.width}
              height={secondFollowingBlockImage?.image?.height}
              classNameImage="block min-h-[360px] h-[360px]"
            />
          </div>
        );
        index += 5;
        continue;
      }

      // Individual Blocks

      if (currentBlock.type === "paragraph") {
        elements.push(<Paragraph text={currentBlock?.children[0].text} />);
        continue;
      }

      if (currentBlock.type === "heading") {
        elements.push(
          <Heading
            level={currentBlock?.level}
            text={currentBlock?.children[0].text}
          />
        );
        continue;
      }

      if (currentBlock.type === "quote") {
        elements.push(<Quote text={currentBlock?.children[0].text} />);
        continue;
      }

      if (currentBlock.type === "image") {
        elements.push(
          <Picture
            src={currentBlock.image?.url}
            alt={nextContentBlock?.children[0]?.text}
            width={currentBlock.image?.width}
            height={currentBlock.image?.height}
          />
        );
        index += 1;
        continue;
      }
    }

    return elements;
  };

  return (
    <main data-bg-nav="white">
      <Wrapper className="py-[80px] flex flex-col gap-[80px] lg:gap-[120px] lg:py-[120px]">
        {renderContent()}
      </Wrapper>
    </main>
  );
}
