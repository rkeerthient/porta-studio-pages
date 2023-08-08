import {
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages/*";
import CenteredContainer from "../components/CenteredContainer";
import FAQsAccordion from "../components/FAQsAccordion";
import GridContainer from "../components/GridContainer";
import HeaderSimple from "../components/HeaderSimple";
import Headline from "../components/Headline";
import Label from "../components/Label";
import PageLayout from "../components/PageLayout";
import Paragraph from "../components/Paragraph";
import ProductImage from "../components/ProductImage";
import VStack from "../components/VStack";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    localization: { locales: ["de"], primary: false },
    fields: [
      "logo",
      "name",
      "description",
      "photoGallery",
      "address",
      "mainPhone",
      "paymentOptions",
      "c_featuredFAQs.question",
      "c_featuredFAQs.answer",
      "slug",
    ],
    filter: { entityTypes: ["location"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

const Location: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  return (
    <PageLayout backgroundColor="#FFFFFF">
      <HeaderSimple logo={`${document.logo.image.url}`} />
      <CenteredContainer>
        <GridContainer>
          <VStack>
            <Headline
              value={`${document.name}`}
              textSize="2xl"
              fontWeight="semibold"
            />
            <Paragraph
              value={`${document.description}`}
              textSize="base"
              fontWeight="normal"
            />
          </VStack>
          <ProductImage
            src={`${document.photoGallery[0].image.url}`}
            alt="Light green backpack with black canvas straps and front zipper pouch."
          />
        </GridContainer>
        <GridContainer>
          <VStack>
            <Headline
              value={`Kontaktdetails`}
              textSize="xl"
              fontWeight="medium"
            />
            <Label value={`${document.address.line1}`} />
            <Label
              value={`${document.address.city},  ${document.address.localizedCountryName} ${document.address.postalCode}`}
            />
            <Label value={`${document.mainPhone}`} />
          </VStack>
          <VStack>
            <Headline
              value={`Payment Options`}
              textSize="xl"
              fontWeight="medium"
            />
            <Label value={`${document.paymentOptions[0]}`} />
            <Label value={`${document.paymentOptions[1]}`} />
            <Label value={`${document.paymentOptions[2]}`} />
            <Label value={`${document.paymentOptions[3]}`} />
            <Label value={`${document.paymentOptions[4]}`} />
          </VStack>
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
export default Location;
