import { Content } from "@/interfaces/blog-posts";
import { Heading, Paragraph, Picture, Quote } from "../content-blocks";
import { Wrapper } from "../wrapper/Wrapper";

interface Props {
  content: Content[];
}

export function ContentPost({ content }: Props) {
  console.log(content[20]);
  return (
    <main data-bg-nav="white">
      <Wrapper className="py-[80px] flex flex-col gap-[80px] lg:py-[120px]">
        <div className="flex justify-between flex-col gap-[80px] lg:flex-row">
          <div className="w-full lg:w-1/2 lg:max-w-[657px]">
            <Heading level={1} text={content[0].children[0].text} />
          </div>
          <div className="w-full flex flex-col gap-[24px] lg:w-1/2 lg:max-w-[657px]">
            <Paragraph text={content[1].children[0].text} />
            <Paragraph text={content[2].children[0].text} />
          </div>
        </div>

        <Picture
          src={content[3].image?.url}
          alt={content[4].children[0].text}
          width={content[3].image?.width}
          height={content[3].image?.height}
        />

        <div className="flex justify-between flex-col gap-[80px] lg:flex-row">
          <div className="w-full lg:w-1/2 lg:max-w-[657px]">
            <Heading level={1} text={content[5].children[0].text} />
          </div>
          <div className="w-full flex flex-col gap-[24px] lg:w-1/2 lg:max-w-[657px]">
            <Paragraph text={content[6].children[0].text} />
            <Paragraph text={content[7].children[0].text} />
          </div>
        </div>

        <Quote text={content[8].children[0].text} />

        <Picture
          src={content[9].image?.url}
          alt={content[10].children[0].text}
          width={content[9].image?.width}
          height={content[9].image?.height}
        />

        <div className="flex justify-between flex-col gap-[80px] lg:flex-row">
          <div className="w-full lg:w-1/2 lg:max-w-[657px]">
            <Heading level={1} text={content[11].children[0].text} />
          </div>
          <div className="w-full flex flex-col gap-[24px] lg:w-1/2 lg:max-w-[657px]">
            <Paragraph text={content[12].children[0].text} />
            <Paragraph text={content[13].children[0].text} />
          </div>
        </div>

        <Quote text={content[15].children[0].text} />

        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[35px] lg:gap-[80px] lg:flex-row">
            <div className="lg:w-1/2">
              <Picture
                src={content[16].image?.url}
                alt={content[17].children[0].text}
                width={content[16].image?.width}
                height={content[16].image?.height}
                classNameImage="block min-h-[360px] h-[360px] lg:h-[560px]"
              />
            </div>
            <div className="flex flex-col lg:w-1/2 ">
              <div className="w-0 lg:w-full lg:h-[160px]"></div>
              <Picture
                src={content[18].image?.url}
                alt={content[19].children[0].text}
                width={content[18].image?.width}
                height={content[18].image?.height}
                classNameImage="block min-h-[360px] h-[360px] lg:h-[560px]"
              />
            </div>
          </div>
          <Picture
            src={content[20].image?.url}
            alt={content[21].children[0].text}
            width={content[20].image?.width}
            height={content[20].image?.height}
            classNameImage="block min-h-[360px] h-[360px]"
          />
        </div>
      </Wrapper>
    </main>
  );
}
