import {
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import CenteredContainer from "../components/CenteredContainer";
import DateTime from "../components/DateTime";
import GridContainer from "../components/GridContainer";
import Headline from "../components/Headline";
import PageLayout from "../components/PageLayout";
import Paragraph from "../components/Paragraph";
import ProductImage from "../components/ProductImage";
import VStack from "../components/VStack";

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-2",
    localization: { locales: ["de"], primary: false },
    filter: { entityTypes: ["ce_events"] },
    fields: ["name", "description", "time", "photoGallery", "slug"],
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
          </VStack>
          <ProductImage
            src={`${document.photoGallery[0].image.url}`}
            alt="Light green backpack with black canvas straps and front zipper pouch."
          />
        </GridContainer>
      </CenteredContainer>
    </PageLayout>
  );
};
export default EventPage;
