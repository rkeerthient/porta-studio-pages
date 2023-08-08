import {
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import CenteredContainer from "../components/CenteredContainer";
import DateTime from "../components/DateTime";
import FAQsAccordion from "../components/FAQsAccordion";
import GridContainer from "../components/GridContainer";
import Headline from "../components/Headline";
import Label from "../components/Label";
import PageLayout from "../components/PageLayout";
import Paragraph from "../components/Paragraph";
import ProductImage from "../components/ProductImage";
import VStack from "../components/VStack";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id",
    localization: { locales: ["de"], primary: false },
    filter: { entityTypes: ["ce_events"] },
    fields: [
      "name",
      "description",
      "time",
      "linkedLocation",
      "photoGallery",
      "c_featuredFAQs",
      "slug",
    ],
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return `${document.slug}`;
};

const EventPage: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  return (
    <PageLayout backgroundColor="#FFFFFF">
      <CenteredContainer>
        <GridContainer>
          <VStack>
            <Headline
              value={`${document.name}`}
              textSize="3xl"
              fontWeight="semibold"
            />
            <Paragraph
              value={`${document.description}`}
              textSize="base"
              fontWeight="normal"
            />
            <Headline
              value={`Veranstaltungsdetails`}
              textSize="xl"
              fontWeight="medium"
            />
            <DateTime
              value={`Startzeit -  ${document.time.start}`}
              showOnlyDate={false}
            />
            <DateTime
              value={`Endzeit -  ${document.time.end}`}
              showOnlyDate={false}
            />
            <Headline value={`Standort`} textSize="xl" fontWeight="medium" />
            <Label value={`${document.linkedLocation.address.line1}`} />
            <Label
              value={`${document.linkedLocation.address.city},  ${document.linkedLocation.address.countryCode} - ${document.linkedLocation.address.postalCode}`}
            />
          </VStack>
          <ProductImage
            src={`${document.photoGallery[0].image.url}`}
            alt="Light green backpack with black canvas straps and front zipper pouch."
          />
        </GridContainer>
        <FAQsAccordion
          faqs={[
            {
              question: `${document.c_featuredFAQs[0].question}`,
              answer: `${document.c_featuredFAQs[0].answer}`,
            },
            {
              question: `${document.c_featuredFAQs[1].question}`,
              answer: `${document.c_featuredFAQs[1].answer}`,
            },
            {
              question: `${document.c_featuredFAQs[2].question}`,
              answer: `${document.c_featuredFAQs[2].answer}`,
            },
          ]}
          title={`Häufig gestellte Fragen`}
        />
      </CenteredContainer>
    </PageLayout>
  );
};
export default EventPage;
